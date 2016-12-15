import test from 'ava';
import request from 'supertest-as-promised';
import ouathClients from '../src/oauthClients.json';
import app from './setup/testApp';
import settings from './setup/settings';

const USER_CREDENTIALS = {
  password: 'password',
  username: 'deviceTestUser@test.com',
};

const DEVICE_ID = '350023001951353337343732';
const TEST_PUBLIC_KEY =
  '-----BEGIN PUBLIC KEY-----\n' +
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCsxJFqlUOxK5bsEfTtBCe9sXBa' +
  '43q9QoSPFXEG5qY/+udOpf2SKacgfUVdUbK4WOkLou7FQ+DffpwztBk5fWM9qfzF' +
  'EQRVMS8xwS4JqqD7slXwuPWFpS9SGy9kLNy/pl1dtGm556wVX431Dg7UBKiXuNGR' +
  '7E8d2hfgeyiTtsWfUQIDAQAB\n' +
  '-----END PUBLIC KEY-----\n';

let testUser;
let userToken;
let deviceToApiAttributes;

test.before(async () => {
  const userResponse = await request(app)
    .post('/v1/users')
    .send(USER_CREDENTIALS);

  testUser = userResponse.body;

  const tokenResponse = await request(app)
    .post('/oauth/token')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({
      client_id: ouathClients[0].clientId,
      client_secret: ouathClients[0].clientSecret,
      grant_type: 'password',
      password: USER_CREDENTIALS.password,
      username: USER_CREDENTIALS.username,
    });

  userToken = tokenResponse.body.access_token;
});

// TODO come up better test name
test.serial('provision test', async t => {
  const response = await request(app)
    .post(`/v1/provisioning/${DEVICE_ID}`)
    .query({ access_token: userToken })
    .send({ publicKey: TEST_PUBLIC_KEY });

  deviceToApiAttributes = response.body;
  t.is(response.status, 200);
  t.is(response.body.id, DEVICE_ID);
});
// TODO write test for checking the error if publicKey is in wrong format.

test('should throw an error for compile source code endpoint', async t => {
  const response = await request(app)
    .post('/v1/binaries')
    .query({ access_token: userToken });

  t.is(response.status, 400);
  t.is(response.body.error, 'not supported in the current server version');
});

test.serial('should return device details', async t => {
  const response = await request(app)
    .get(`/v1/devices/${DEVICE_ID}`)
    .query({ access_token: userToken });

  t.is(response.status, 200);
  t.is(response.body.id, deviceToApiAttributes.id);
  t.is(response.body.name, deviceToApiAttributes.name);
  t.is(response.body.ownerID, deviceToApiAttributes.ownerID);
});

test.serial('should throw an error if device not found', async t => {
  const response = await request(app)
    .get(`/v1/devices/${DEVICE_ID}123`)
    .query({ access_token: userToken });

  t.is(response.status, 404);
  t.is(response.body.error, 'No device found');
});

test.serial('should return all devices', async t => {
  const response = await request(app)
    .get('/v1/devices/')
    .query({ access_token: userToken });

  const devices = response.body;

  t.is(response.status, 200);
  t.truthy(Array.isArray(devices) && devices.length > 0);
});

test.serial('should unclaim device', async t => {
  const unclaimResponse = await request(app)
    .delete(`/v1/devices/${DEVICE_ID}`)
    .query({ access_token: userToken });

  t.is(unclaimResponse.status, 200);
  t.is(unclaimResponse.body.ok, true);

  const getDeviceResponse = await request(app)
    .get(`/v1/devices/${DEVICE_ID}`)
    .query({ access_token: userToken });

  t.is(getDeviceResponse.status, 404);
});

test.serial('should claim device', async t => {
  const claimDeviceResponse = await request(app)
    .post('/v1/devices')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({
      access_token: userToken,
      id: DEVICE_ID,
    });

  t.is(claimDeviceResponse.status, 200);
  t.is(claimDeviceResponse.body.ok, true);

  const getDeviceResponse = await request(app)
    .get(`/v1/devices/${DEVICE_ID}`)
    .query({ access_token: userToken });

  t.is(getDeviceResponse.status, 200);
});
// TODO write test for checking the error if device belongs to somebody else
// TODO write tests for updateDevice & callFunction

test.after.always(() => {
  settings.usersRepository.deleteById(testUser.id);
  settings.deviceAttributeRepository.deleteById(DEVICE_ID);
  settings.deviceKeyFileRepository.delete(DEVICE_ID);
});