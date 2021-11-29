// @flow

import { FileManager, memoizeGet } from 'spark-protocol';
import type { IDeviceFirmwareRepository } from '../types';

class DeviceFirmwareFileRepository implements IDeviceFirmwareRepository {
  _fileManager: FileManager;

  constructor(path: string) {
    this._fileManager = new FileManager(path, false);
  }

  @memoizeGet([], { promise: false })
  getByName(appName: string): ?Buffer {
    return this._fileManager.getFileBuffer(`${appName}.bin`);
  }
}

export default DeviceFirmwareFileRepository;
