/**
 *    Copyright (C) 2013-2014 Spark Labs, Inc. All rights reserved. -  https://www.spark.io/
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU Affero General Public License, version 3,
 *    as published by the Free Software Foundation.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU Affero General Public License for more details.
 *
 *    You should have received a copy of the GNU Affero General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 *    You can download the source here: https://github.com/spark/spark-server
 *
 * @flow
 *
 */

import path from 'path';
import fs from 'fs';
import type { Settings } from './types';

const SETTINGS_OVERRIDE_PATH = path.join(process.cwd(), 'settings.json');
let settingsOverrides = {};
if (fs.existsSync(SETTINGS_OVERRIDE_PATH)) {
  settingsOverrides = (JSON.parse(
    fs.readFileSync(SETTINGS_OVERRIDE_PATH),
  ): Settings);
  console.log('Loading settings overrides: ', settingsOverrides);
}

const SETTINGS: Settings = {
  BUILD_DIRECTORY: path.join(process.cwd(), 'data/build'),
  DEFAULT_ADMIN_PASSWORD: 'adminPassword',
  DEFAULT_ADMIN_USERNAME: '__admin__',
  DEVICE_DIRECTORY: path.join(process.cwd(), 'data/deviceKeys'),
  ENABLE_SYSTEM_FIRWMARE_AUTOUPDATES: true,
  FIRMWARE_DIRECTORY: path.join(process.cwd(), 'data/knownApps'),
  FIRMWARE_REPOSITORY_DIRECTORY: path.join(process.cwd(), '../spark-firmware'),
  SERVER_KEY_FILENAME: 'default_key.pem',
  SERVER_KEYS_DIRECTORY: path.join(process.cwd(), 'data'),
  USERS_DIRECTORY: path.join(process.cwd(), 'data/users'),
  WEBHOOKS_DIRECTORY: path.join(process.cwd(), 'data/webhooks'),
  ACCESS_TOKEN_LIFETIME: 7776000, // 90 days,
  API_TIMEOUT: 30000, // Timeout for API requests.
  CRYPTO_ALGORITHM: 'aes-128-cbc',
  LOG_LEVEL: (process.env.LOG_LEVEL: any) || 'info',
  LOGIN_ROUTE: '/oauth/token',
  EXPRESS_SERVER_CONFIG: {
    PORT: 8080,
    SSL_CERTIFICATE_FILEPATH: null,
    SSL_PRIVATE_KEY_FILEPATH: null,
    USE_SSL: false,
  },
  DB_CONFIG: {
    DB_TYPE: 'nedb',
    PATH: path.join(process.cwd(), 'data/db'),
  },
  SHOW_VERBOSE_DEVICE_LOGS: false,

  TCP_DEVICE_SERVER_CONFIG: {
    HOST: 'localhost',
    PORT: 5683,
  },
  // Override template parameters in webhooks with this object
  WEBHOOK_TEMPLATE_PARAMETERS: {
    // SOME_AUTH_TOKEN: '12312312',
  },
  ALLOW_DEVICE_TO_PROVIDE_PEM: true,
  ...settingsOverrides,
};

export default SETTINGS;
