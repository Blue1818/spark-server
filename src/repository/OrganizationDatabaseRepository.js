// @flow

import type { CollectionName } from './collectionNames';
import type {
  IBaseDatabase,
  IOrganizationRepository,
  Organization,
} from '../types';

import COLLECTION_NAMES from './collectionNames';
import BaseRepository from './BaseRepository';

class OrganizationDatabaseRepository extends BaseRepository
  implements IOrganizationRepository {
  _database: IBaseDatabase;

  _collectionName: CollectionName = COLLECTION_NAMES.ORGANIZATIONS;

  constructor(database: IBaseDatabase) {
    super(database, COLLECTION_NAMES.ORGANIZATIONS);
    this._database = database;

    this.tryCreateIndex({ ownerID: 1 });
    this.tryCreateIndex({ user_ids: 1 });
  }

  create: (model: $Shape<Organization>) => Promise<Organization> = async (
    model: $Shape<Organization>,
  ): Promise<Organization> =>
    this._database.insertOne(this._collectionName, {
      ...model,
    });

  deleteByID: (id: string) => Promise<void> = async (
    id: string,
  ): Promise<void> => this._database.remove(this._collectionName, { _id: id });

  getAll: (userID: ?string) => Promise<Array<Organization>> = async (
    userID: ?string = null,
  ): Promise<Array<Organization>> => {
    // TODO - this should probably just query the organization
    const query = userID ? { ownerID: userID } : {};
    return this._database.find(this._collectionName, query);
  };

  getByUserID: (userID: string) => Promise<Array<Organization>> = async (
    userID: string,
  ): Promise<Array<Organization>> =>
    this._database.find(this._collectionName, {
      user_ids: userID,
    });

  getByID: (id: string) => Promise<?Organization> = async (
    id: string,
  ): Promise<?Organization> =>
    this._database.findOne(this._collectionName, { _id: id });

  updateByID: () => Promise<Organization> = async (): Promise<Organization> => {
    throw new Error('The method is not implemented');
  };
}

export default OrganizationDatabaseRepository;
