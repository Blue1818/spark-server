"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _sparkProtocol = require("spark-protocol");

var _expressOauthServer = _interopRequireDefault(require("express-oauth-server"));

var _OAuthModel = _interopRequireDefault(require("./OAuthModel"));

var _DeviceClaimsController = _interopRequireDefault(require("./controllers/DeviceClaimsController"));

var _DevicesController = _interopRequireDefault(require("./controllers/DevicesController"));

var _EventsController = _interopRequireDefault(require("./controllers/EventsController"));

var _EventsControllerV = _interopRequireDefault(require("./controllers/EventsControllerV2"));

var _OauthClientsController = _interopRequireDefault(require("./controllers/OauthClientsController"));

var _ProductsController = _interopRequireDefault(require("./controllers/ProductsController"));

var _ProductsControllerV = _interopRequireDefault(require("./controllers/ProductsControllerV2"));

var _ProductFirmwaresController = _interopRequireDefault(require("./controllers/ProductFirmwaresController"));

var _ProductFirmwaresControllerV = _interopRequireDefault(require("./controllers/ProductFirmwaresControllerV2"));

var _ProvisioningController = _interopRequireDefault(require("./controllers/ProvisioningController"));

var _UsersController = _interopRequireDefault(require("./controllers/UsersController"));

var _WebhooksController = _interopRequireDefault(require("./controllers/WebhooksController"));

var _DeviceManager = _interopRequireDefault(require("./managers/DeviceManager"));

var _WebhookManager = _interopRequireDefault(require("./managers/WebhookManager"));

var _EventManager = _interopRequireDefault(require("./managers/EventManager"));

var _PermissionManager = _interopRequireDefault(require("./managers/PermissionManager"));

var _DeviceFirmwareFileRepository = _interopRequireDefault(require("./repository/DeviceFirmwareFileRepository"));

var _NeDb = _interopRequireDefault(require("./repository/NeDb"));

var _MongoDb = _interopRequireDefault(require("./repository/MongoDb"));

var _DeviceAttributeDatabaseRepository = _interopRequireDefault(require("./repository/DeviceAttributeDatabaseRepository"));

var _DeviceKeyDatabaseRepository = _interopRequireDefault(require("./repository/DeviceKeyDatabaseRepository"));

var _OrganizationDatabaseRepository = _interopRequireDefault(require("./repository/OrganizationDatabaseRepository"));

var _ProductDatabaseRepository = _interopRequireDefault(require("./repository/ProductDatabaseRepository"));

var _ProductConfigDatabaseRepository = _interopRequireDefault(require("./repository/ProductConfigDatabaseRepository"));

var _ProductDeviceDatabaseRepository = _interopRequireDefault(require("./repository/ProductDeviceDatabaseRepository"));

var _ProductFirmwareDatabaseRepository = _interopRequireDefault(require("./repository/ProductFirmwareDatabaseRepository"));

var _UserDatabaseRepository = _interopRequireDefault(require("./repository/UserDatabaseRepository"));

var _WebhookDatabaseRepository = _interopRequireDefault(require("./repository/WebhookDatabaseRepository"));

var _settings = _interopRequireDefault(require("./settings"));

var _default = function _default(container, newSettings) {
  var _context;

  // Make sure that the spark-server settings match whatever is passed in
  (0, _forEach["default"])(_context = (0, _keys["default"])(newSettings)).call(_context, function (key) {
    _settings["default"][key] = newSettings[key];
  });
  var BINARIES_DIRECTORY = newSettings.BINARIES_DIRECTORY,
      CONNECTED_DEVICES_LOGGING_INTERVAL = newSettings.CONNECTED_DEVICES_LOGGING_INTERVAL,
      DEVICE_DIRECTORY = newSettings.DEVICE_DIRECTORY,
      ENABLE_SYSTEM_FIRWMARE_AUTOUPDATES = newSettings.ENABLE_SYSTEM_FIRWMARE_AUTOUPDATES,
      SERVER_KEY_FILENAME = newSettings.SERVER_KEY_FILENAME,
      SERVER_KEY_PASSWORD = newSettings.SERVER_KEY_PASSWORD,
      SERVER_KEYS_DIRECTORY = newSettings.SERVER_KEYS_DIRECTORY,
      TCP_DEVICE_SERVER_CONFIG = newSettings.TCP_DEVICE_SERVER_CONFIG; // spark protocol container bindings

  (0, _sparkProtocol.defaultBindings)(container, {
    BINARIES_DIRECTORY: BINARIES_DIRECTORY,
    CONNECTED_DEVICES_LOGGING_INTERVAL: CONNECTED_DEVICES_LOGGING_INTERVAL || 15000,
    DEVICE_DIRECTORY: DEVICE_DIRECTORY,
    ENABLE_SYSTEM_FIRWMARE_AUTOUPDATES: ENABLE_SYSTEM_FIRWMARE_AUTOUPDATES,
    SERVER_KEY_FILENAME: SERVER_KEY_FILENAME,
    SERVER_KEY_PASSWORD: SERVER_KEY_PASSWORD,
    SERVER_KEYS_DIRECTORY: SERVER_KEYS_DIRECTORY,
    TCP_DEVICE_SERVER_CONFIG: TCP_DEVICE_SERVER_CONFIG
  }); // settings

  container.bindValue('DEVICE_DIRECTORY', _settings["default"].DEVICE_DIRECTORY);
  container.bindValue('FIRMWARE_DIRECTORY', _settings["default"].FIRMWARE_DIRECTORY);
  container.bindValue('SERVER_KEY_FILENAME', _settings["default"].SERVER_KEY_FILENAME);
  container.bindValue('SERVER_KEYS_DIRECTORY', _settings["default"].SERVER_KEYS_DIRECTORY);
  container.bindValue('USERS_DIRECTORY', _settings["default"].USERS_DIRECTORY);
  container.bindValue('WEBHOOKS_DIRECTORY', _settings["default"].WEBHOOKS_DIRECTORY);
  container.bindMethod('OAUTH_SETTINGS', function (oauthModel) {
    return {
      accessTokenLifetime: _settings["default"].ACCESS_TOKEN_LIFETIME,
      allowBearerTokensInQueryString: true,
      model: oauthModel
    };
  }, ['OAuthModel']);
  container.bindValue('ALLOW_DEVICE_TO_PROVIDE_PEM', _settings["default"].ALLOW_DEVICE_TO_PROVIDE_PEM);
  container.bindClass('OAuthModel', _OAuthModel["default"], ['IUserRepository']);
  container.bindClass('OAuthServer', _expressOauthServer["default"], ['OAUTH_SETTINGS']);

  if (_settings["default"].DB_CONFIG.DB_TYPE === 'mongodb') {
    container.bindValue('DATABASE_URL', _settings["default"].DB_CONFIG.URL);
    container.bindValue('DATABASE_OPTIONS', _settings["default"].DB_CONFIG.OPTIONS);
    container.bindClass('IDatabase', _MongoDb["default"], ['DATABASE_URL', 'DATABASE_OPTIONS']);
  } else {
    container.bindValue('DATABASE_PATH', _settings["default"].DB_CONFIG.PATH);
    container.bindClass('IDatabase', _NeDb["default"], ['DATABASE_PATH']);
  } // controllers


  container.bindClass('DeviceClaimsController', _DeviceClaimsController["default"], ['DeviceManager', 'ClaimCodeManager']);
  container.bindClass('DevicesController', _DevicesController["default"], ['DeviceManager']);
  container.bindClass('EventsController', _EventsController["default"], ['EventManager', 'DeviceManager']);
  container.bindClass('EventsControllerV2', _EventsControllerV["default"], ['EventManager', 'DeviceManager']);
  container.bindClass('PermissionManager', _PermissionManager["default"], ['IDeviceAttributeRepository', 'IOrganizationRepository', 'IUserRepository', 'IWebhookRepository', 'OAuthServer']);
  container.bindClass('OauthClientsController', _OauthClientsController["default"], []);
  container.bindClass('ProductsController', _ProductsController["default"], ['DeviceManager', 'IDeviceAttributeRepository', 'IOrganizationRepository', 'IProductRepository', 'IProductConfigRepository', 'IProductDeviceRepository', 'IProductFirmwareRepository']);
  container.bindClass('ProductsControllerV2', _ProductsControllerV["default"], ['DeviceManager', 'IDeviceAttributeRepository', 'IOrganizationRepository', 'IProductRepository', 'IProductConfigRepository', 'IProductDeviceRepository', 'IProductFirmwareRepository']);
  container.bindClass('ProductFirmwaresController', _ProductFirmwaresController["default"], ['DeviceManager', 'IProductDeviceRepository', 'IProductFirmwareRepository', 'IProductRepository']);
  container.bindClass('ProductFirmwaresControllerV2', _ProductFirmwaresControllerV["default"], ['DeviceManager', 'IProductDeviceRepository', 'IProductFirmwareRepository', 'IProductRepository']);
  container.bindClass('ProvisioningController', _ProvisioningController["default"], ['DeviceManager']);
  container.bindClass('UsersController', _UsersController["default"], ['IUserRepository']);
  container.bindClass('WebhooksController', _WebhooksController["default"], ['WebhookManager']); // managers

  container.bindClass('DeviceManager', _DeviceManager["default"], ['IDeviceAttributeRepository', 'IDeviceFirmwareRepository', 'IDeviceKeyRepository', 'PermissionManager', 'EventPublisher']);
  container.bindClass('EventManager', _EventManager["default"], ['EventPublisher']);
  container.bindClass('WebhookManager', _WebhookManager["default"], ['EventPublisher', 'PermissionManager', 'IWebhookRepository']); // Repositories

  container.bindClass('IDeviceAttributeRepository', _DeviceAttributeDatabaseRepository["default"], ['IDatabase', 'IProductDeviceRepository']);
  container.bindClass('IDeviceFirmwareRepository', _DeviceFirmwareFileRepository["default"], ['FIRMWARE_DIRECTORY']);
  container.bindClass('IDeviceKeyRepository', _DeviceKeyDatabaseRepository["default"], ['IDatabase']);
  container.bindClass('IOrganizationRepository', _OrganizationDatabaseRepository["default"], ['IDatabase']);
  container.bindClass('IProductRepository', _ProductDatabaseRepository["default"], ['IDatabase']);
  container.bindClass('IProductConfigRepository', _ProductConfigDatabaseRepository["default"], ['IDatabase']);
  container.bindClass('IProductDeviceRepository', _ProductDeviceDatabaseRepository["default"], ['IDatabase']);
  container.bindClass('IProductFirmwareRepository', _ProductFirmwareDatabaseRepository["default"], ['IDatabase']);
  container.bindClass('IUserRepository', _UserDatabaseRepository["default"], ['IDatabase']);
  container.bindClass('IWebhookRepository', _WebhookDatabaseRepository["default"], ['IDatabase']);
};

exports["default"] = _default;