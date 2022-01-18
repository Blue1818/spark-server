// @flow

import type { CollectionName } from './collectionNames';
import type { IBaseDatabase } from '../types';

class BaseRepository {
  _database: IBaseDatabase;

  _collectionName: CollectionName;

  constructor(database: IBaseDatabase, collectionName: CollectionName) {
    this._database = database;
    this._collectionName = collectionName;
  }

  tryCreateIndex: (indexConfig: Object) => Promise<void> = async (
    indexConfig: Object,
  ): Promise<void> =>
    this._database.tryCreateIndex(this._collectionName, indexConfig);

  count: (Array<any>) => Promise<number> = async (
    ...filters: Array<any>
  ): Promise<number> =>
    this._database.count(
      this._collectionName,
      ...(filters.length ? filters : [{}]),
    );
}

export default BaseRepository;
