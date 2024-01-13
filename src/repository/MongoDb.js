// @flow

import EventEmitter from 'events';
import { MongoClient } from 'mongodb';
import type { IBaseDatabase } from '../types';
import BaseMongoDb from './BaseMongoDb';
import Logger from '../lib/logger';
const logger = Logger.createModuleLogger(module);

const DB_READY_EVENT = 'dbReady';

class MongoDb extends BaseMongoDb implements IBaseDatabase {
  _database: ?Object = null;

  _statusEventEmitter: EventEmitter = new EventEmitter();

  constructor(url: string, options?: Object = {}) {
    super();

    (async () => {
      await this._init(url, options);
    })();
  }

  tryCreateIndex: (
    collectionName: string,
    indexConfig: Object,
  ) => Promise<void> = async (
    collectionName: string,
    indexConfig: Object,
  ): Promise<void> =>
    this.__runForCollection(
      collectionName,
      async (collection: Object): Promise<number> =>
        collection.createIndex(indexConfig),
    );

  count: (string, query?: Object) => Promise<number> = async (
    collectionName: string,
    query?: Object = {},
  ): Promise<number> =>
    this.__runForCollection(
      collectionName,
      async (collection: Object): Promise<number> =>
        collection.count(this.__translateQuery(query), {
          timeout: false,
        }),
    ) || 0;

  insertOne: (
    collectionName: string,
    entity: Object,
  ) => Promise<Object> = async (
    collectionName: string,
    entity: Object,
  ): Promise<Object> =>
    this.__runForCollection(
      collectionName,
      async (collection: Object): Promise<Object> => {
        const insertResult = await collection.insertOne(entity);
        const result = await collection.findOne({
          _id: insertResult.insertedId,
        });
        return this.__translateResultItem(result);
      },
    );

  find: (collectionName: string, query: Object) => Promise<Object> = async (
    collectionName: string,
    query: Object,
  ): Promise<Object> =>
    this.__runForCollection(
      collectionName,
      async (collection: Object): Promise<Object> => {
        const { skip, take, ...otherQuery } = query;
        let result = collection.find(this.__translateQuery(otherQuery), {
          timeout: false,
        });

        if (skip || parseInt(skip, 10) === 0) {
          result = result.skip(parseInt(skip, 10));
        }

        if (take || parseInt(take, 10) === 0) {
          result = result.limit(parseInt(take, 10));
        }

        const resultItems = await result.toArray();
        return resultItems.map(this.__translateResultItem);
      },
    );

  findAndModify: (
    collectionName: string,
    query: Object,
    updateQuery: Object,
  ) => Promise<Object> = async (
    collectionName: string,
    query: Object,
    updateQuery: Object,
  ): Promise<Object> =>
    this.__runForCollection(
      collectionName,
      async (collection: Object): Promise<Object> => {
        const modifyResult = await collection.findOneAndUpdate(
          this.__translateQuery(query),
          this.__translateQuery(updateQuery),
          { new: true, upsert: true },
        );
        return this.__translateResultItem(modifyResult);
      },
    );

  findOne: <TResult>(
    collectionName: string,
    query: Object,
  ) => Promise<TResult> = async <TResult>(
    collectionName: string,
    query: Object,
  ): Promise<TResult> =>
    this.__runForCollection(
      collectionName,
      async (collection: Object): Promise<Object> => {
        const resultItem = await collection.findOne(
          this.__translateQuery(query),
        );
        return this.__translateResultItem(resultItem);
      },
    );

  remove: (collectionName: string, query: Object) => Promise<void> = async (
    collectionName: string,
    query: Object,
  ): Promise<void> =>
    this.__runForCollection(
      collectionName,
      async (collection: Object): Promise<Object> =>
        collection.deleteMany(this.__translateQuery(query)),
    );

  __runForCollection: (
    collectionName: string,
    callback: (collection: Object) => Promise<*>,
  ) => Promise<Object> = async (
    collectionName: string,
    callback: (collection: Object) => Promise<*>,
  ): Promise<Object> => {
    await this._isDbReady();
    // hack for flow:
    if (!this._database) {
      throw new Error('database is not initialized');
    }
    return callback(
      this._database.collection(collectionName),
    ).catch((error: Error): void =>
      logger.error({ collectionName, err: error }, 'Run for Collection'),
    );
  };

  _init: (url: string, options: Object) => Promise<void> = async (
    url: string,
    options: Object,
  ) => {
    const database = await MongoClient.connect(url, options);

    database.on('error', (error: Error): void =>
      logger.error({ err: error, options, url }, 'DB connection Error: '),
    );

    database.on('open', (): void => logger.info('DB connected'));

    database.on('close', (str: string): void =>
      logger.info({ info: str }, 'DB disconnected: '),
    );

    this._database = database.db();
    this._statusEventEmitter.emit(DB_READY_EVENT);
  };

  _isDbReady: () => Promise<void> = async (): Promise<void> => {
    if (this._database) {
      return Promise.resolve();
    }

    return new Promise((resolve: () => void) => {
      this._statusEventEmitter.once(DB_READY_EVENT, (): void => resolve());
    });
  };
}

export default MongoDb;
