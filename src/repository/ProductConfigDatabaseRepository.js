// @flow

import type { CollectionName } from './collectionNames';
import type {
  IBaseDatabase,
  IProductConfigRepository,
  ProductConfig,
} from '../types';

import COLLECTION_NAMES from './collectionNames';
import BaseRepository from './BaseRepository';

class ProductConfigDatabaseRepository extends BaseRepository
  implements IProductConfigRepository {
  _database: IBaseDatabase;

  _collectionName: CollectionName = COLLECTION_NAMES.PRODUCT_CONFIGS;

  constructor(database: IBaseDatabase) {
    super(database, COLLECTION_NAMES.PRODUCT_CONFIGS);
    this._database = database;
  }

  create: (model: $Shape<ProductConfig>) => Promise<ProductConfig> = async (
    model: $Shape<ProductConfig>,
  ): Promise<ProductConfig> =>
    this._database.insertOne(this._collectionName, {
      ...model,
    });

  deleteByID: (id: string) => Promise<void> = async (
    id: string,
  ): Promise<void> => this._database.remove(this._collectionName, { _id: id });

  getAll: (userID: ?string) => Promise<Array<ProductConfig>> = async (
    userID: ?string = null,
  ): Promise<Array<ProductConfig>> => {
    // TODO - this should probably just query the organization
    const query = userID ? { ownerID: userID } : {};
    return this._database.find(this._collectionName, query);
  };

  getByProductID: (productID: number) => Promise<?ProductConfig> = async (
    productID: number,
  ): Promise<?ProductConfig> =>
    this._database.findOne(this._collectionName, {
      product_id: productID,
    });

  getByID: (id: string) => Promise<?ProductConfig> = async (
    id: string,
  ): Promise<?ProductConfig> =>
    this._database.findOne(this._collectionName, { _id: id });

  updateByID: () => Promise<ProductConfig> = async (): Promise<ProductConfig> => {
    throw new Error('The method is not implemented');
  };
}

export default ProductConfigDatabaseRepository;
