// @flow

import type { CollectionName } from './collectionNames';
import type { IBaseDatabase, IWebhookRepository, Webhook } from '../types';

import COLLECTION_NAMES from './collectionNames';
import BaseRepository from './BaseRepository';

class WebhookDatabaseRepository extends BaseRepository
  implements IWebhookRepository {
  _database: IBaseDatabase;

  _collectionName: CollectionName = COLLECTION_NAMES.WEBHOOKS;

  constructor(database: IBaseDatabase) {
    super(database, COLLECTION_NAMES.WEBHOOKS);
    this._database = database;

    this.tryCreateIndex({ ownerID: 1 });
  }

  create: (model: $Shape<Webhook>) => Promise<Webhook> = async (
    model: $Shape<Webhook>,
  ): Promise<Webhook> =>
    this._database.insertOne(this._collectionName, {
      ...model,
      created_at: new Date(),
    });

  deleteByID: (id: string) => Promise<void> = async (
    id: string,
  ): Promise<void> => this._database.remove(this._collectionName, { _id: id });

  getAll: (userID: ?string) => Promise<Array<Webhook>> = async (
    userID: ?string = null,
  ): Promise<Array<Webhook>> => {
    const query = userID ? { ownerID: userID } : {};
    return this._database.find(this._collectionName, query);
  };

  getByID: (id: string) => Promise<?Webhook> = async (
    id: string,
  ): Promise<?Webhook> =>
    this._database.findOne(this._collectionName, { _id: id });

  updateByID: () => Promise<Webhook> = async (): Promise<Webhook> => {
    throw new Error('The method is not implemented');
  };
}

export default WebhookDatabaseRepository;
