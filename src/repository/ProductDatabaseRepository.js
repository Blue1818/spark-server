// @flow

import type { CollectionName } from './collectionNames';
import type { IBaseDatabase, IProductRepository, Product } from '../types';

import COLLECTION_NAMES from './collectionNames';
import BaseRepository from './BaseRepository';

class ProductDatabaseRepository extends BaseRepository
  implements IProductRepository {
  _database: IBaseDatabase;

  _collectionName: CollectionName = COLLECTION_NAMES.PRODUCTS;

  constructor(database: IBaseDatabase) {
    super(database, COLLECTION_NAMES.PRODUCTS);
    this._database = database;
  }

  create: (model: $Shape<Product>) => Promise<Product> = async (
    model: $Shape<Product>,
  ): Promise<Product> =>
    this._database.insertOne(this._collectionName, {
      ...(await this._formatProduct(model)),
      created_at: new Date(),
      product_id: (await this._database.count(this._collectionName)) + 1,
    });

  deleteByID: (id: number) => Promise<void> = async (
    id: number,
  ): Promise<void> => this._database.remove(this._collectionName, { _id: id });

  getMany: (userID: ?string, query: Object) => Promise<Array<Product>> = async (
    userID: ?string = null,
    query: Object = {},
  ): Promise<Array<Product>> => {
    // TODO - this should probably just query the organization
    const userQuery = userID ? { ownerID: userID } : {};
    return this._database.find(this._collectionName, {
      ...query,
      ...userQuery,
    });
  };

  getAll: (userID: ?string) => Promise<Array<Product>> = async (
    userID: ?string = null,
  ): Promise<Array<Product>> => {
    // TODO - this should probably just query the organization
    const query = userID ? { ownerID: userID } : {};
    return this._database.find(this._collectionName, query);
  };

  getByID: (id: number) => Promise<?Product> = async (
    id: number,
  ): Promise<?Product> =>
    this._database.findOne(this._collectionName, { _id: id });

  getByIDOrSlug: (
    productIDOrSlug: string | number,
  ) => Promise<?Product> = async (
    productIDOrSlug: string | number,
  ): Promise<?Product> =>
    this._database.findOne(this._collectionName, {
      $or: [
        {
          product_id: !Number.isNaN(productIDOrSlug)
            ? parseInt(productIDOrSlug, 10)
            : null,
        },
        { slug: productIDOrSlug },
      ],
    });

  updateByID: (id: number, product: Product) => Promise<Product> = async (
    id: number,
    product: Product,
  ): Promise<Product> =>
    this._database.findAndModify(
      this._collectionName,
      { _id: id },
      { $set: { ...(await this._formatProduct(product)) } },
    );

  _formatProduct: (
    product: $Shape<Product>,
  ) => Promise<$Shape<Product>> = async (
    product: $Shape<Product>,
  ): Promise<$Shape<Product>> => {
    const slug = `${product.name.trim()} ${product.hardware_version.trim()}`
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text

    const existingProduct = await this._database.findOne(this._collectionName, {
      slug,
    });

    if (existingProduct && existingProduct.product_id !== product.product_id) {
      throw new Error('Product name or version already in use');
    }

    return {
      ...product,
      slug,
    };
  };
}

export default ProductDatabaseRepository;
