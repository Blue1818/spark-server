// @flow

import type { CollectionName } from './collectionNames';
import type {
  DeviceKeyObject,
  IBaseDatabase,
  IDeviceKeyRepository,
} from '../types';

import COLLECTION_NAMES from './collectionNames';
import BaseRepository from './BaseRepository';

// getByID, deleteByID and update uses model.deviceID as ID for querying
class DeviceKeyDatabaseRepository extends BaseRepository
  implements IDeviceKeyRepository {
  _database: IBaseDatabase;

  _collectionName: CollectionName = COLLECTION_NAMES.DEVICE_KEYS;

  constructor(database: IBaseDatabase) {
    super(database, COLLECTION_NAMES.DEVICE_KEYS);
    this._database = database;
  }

  create: DeviceKeyObject => Promise<DeviceKeyObject> = async (
    model: DeviceKeyObject,
  ): Promise<DeviceKeyObject> =>
    this._database.insertOne(this._collectionName, {
      _id: model.deviceID.toLowerCase(),
      ...model,
      deviceID: model.deviceID.toLowerCase(),
    });

  deleteByID: (deviceID: string) => Promise<void> = async (
    deviceID: string,
  ): Promise<void> =>
    this._database.remove(this._collectionName, {
      deviceID: deviceID.toLowerCase(),
    });

  async getAll(): Promise<Array<DeviceKeyObject>> {
    throw new Error('The method is not implemented.');
  }

  getByID: (deviceID: string) => Promise<?DeviceKeyObject> = async (
    deviceID: string,
  ): Promise<?DeviceKeyObject> =>
    this._database.findOne(this._collectionName, {
      deviceID: deviceID.toLowerCase(),
    });

  updateByID: (
    deviceID: string,
    props: $Shape<DeviceKeyObject>,
  ) => Promise<DeviceKeyObject> = async (
    deviceID: string,
    props: $Shape<DeviceKeyObject>,
  ): Promise<DeviceKeyObject> =>
    this._database.findAndModify(
      this._collectionName,
      { deviceID: deviceID.toLowerCase() },
      { $set: { ...props, deviceID: deviceID.toLowerCase() } },
    );
}

export default DeviceKeyDatabaseRepository;
