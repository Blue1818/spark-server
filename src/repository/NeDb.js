// @flow

import fs from 'fs';
import mkdirp from 'mkdirp';
import Datastore from 'nedb-core';
import type { IBaseDatabase } from '../types';
import type { CollectionName } from './collectionNames';
import COLLECTION_NAMES from './collectionNames';
import { promisify } from '../lib/promisify';
import BaseMongoDb from './BaseMongoDb';

class NeDb extends BaseMongoDb implements IBaseDatabase {
  _database: Object;

  constructor(path: string) {
    super();

    if (!fs.existsSync(path)) {
      mkdirp.sync(path);
    }

    this._database = {};

    Object.values(COLLECTION_NAMES).forEach((collectionName: mixed) => {
      const colName: CollectionName = (collectionName: any);
      this._database[collectionName] = new Datastore({
        autoload: true,
        filename: `${path}/${colName}.db`,
      });
    });
  }

  tryCreateIndex: (
    collectionName: string,
    indexConfig: Object,
  ) => Promise<void> = async (
    collectionName: string,
    indexConfig: Object,
  ): Promise<void> =>
    this.__runForCollection(collectionName, async (collection: Object) => {
      collection.ensureIndex(indexConfig);
    });

  count: (collectionName: string, query: Object) => Promise<number> = async (
    collectionName: string,
    query: Object,
  ): Promise<number> =>
    (await this.__runForCollection(
      collectionName,
      async (collection: Object): Promise<number> =>
        promisify(collection, 'count', query),
    )) || 0;

  insertOne: <TEntity>(
    collectionName: string,
    entity: TEntity,
  ) => Promise<?TEntity> = async <TEntity>(
    collectionName: string,
    entity: TEntity,
  ): Promise<?TEntity> =>
    this.__runForCollection(
      collectionName,
      async (collection: Object): Promise<?TEntity> => {
        const insertResult = await promisify(collection, 'insert', entity);

        return this.__translateResultItem<TEntity>(insertResult);
      },
    );

  find: <TEntity>(
    collectionName: string,
    query: Object,
  ) => Promise<?TEntity> = async <TEntity>(
    collectionName: string,
    query: Object,
  ): Promise<?TEntity> =>
    this.__runForCollection(
      collectionName,
      async (collection: Object): Promise<?TEntity> => {
        const { skip, take, ...otherQuery } = query;
        let result = collection.find(otherQuery);

        if (skip || parseInt(skip, 10) === 0) {
          result = result.skip(skip);
        }
        if (take || parseInt(take, 10) === 0) {
          result = result.limit(take);
        }

        const resultItems = await promisify(result, 'exec');
        return resultItems.map(this.__translateResultItem);
      },
    );

  findAndModify: <TEntity>(
    collectionName: string,
    query: Object,
    updateQuery: Object,
  ) => Promise<?TEntity> = async <TEntity>(
    collectionName: string,
    query: Object,
    updateQuery: Object,
  ): Promise<?TEntity> =>
    this.__runForCollection(
      collectionName,
      async (collection: Object): Promise<?TEntity> => {
        const [
          count, // eslint-disable-line no-unused-vars
          resultItem,
        ] = await promisify(collection, 'update', query, updateQuery, {
          returnUpdatedDocs: true,
          upsert: true,
        });

        return this.__translateResultItem(resultItem);
      },
    );

  findOne: <TEntity>(
    collectionName: string,
    query: Object,
  ) => Promise<?TEntity> = async <TEntity>(
    collectionName: string,
    query: Object,
  ): Promise<?TEntity> =>
    this.__runForCollection(
      collectionName,
      async (collection: Object): Promise<?TEntity> => {
        const resultItem = await promisify(collection, 'findOne', query);
        return this.__translateResultItem(resultItem);
      },
    );

  remove: <TEntity>(
    collectionName: string,
    query: Object,
  ) => Promise<?TEntity> = async <TEntity>(
    collectionName: string,
    query: Object,
  ): Promise<?TEntity> =>
    this.__runForCollection(
      collectionName,
      async (collection: Object): Promise<TEntity> =>
        promisify(collection, 'remove', query),
    );

  __runForCollection: <TResult>(
    collectionName: string,
    callback: (collection: Object) => Promise<TResult>,
  ) => Promise<TResult> = async <TResult>(
    collectionName: string,
    callback: (collection: Object) => Promise<TResult>,
  ): Promise<TResult> => callback(this._database[collectionName]);
}

export default NeDb;
