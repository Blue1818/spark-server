// @flow

import type { CollectionName } from './collectionNames';
import type {
  IBaseDatabase,
  IUserRepository,
  TokenObject,
  User,
  UserCredentials,
  UserRole,
} from '../types';

import BaseRepository from './BaseRepository';
import COLLECTION_NAMES from './collectionNames';
import PasswordHasher from '../lib/PasswordHasher';
import HttpError from '../lib/HttpError';

class UserDatabaseRepository extends BaseRepository implements IUserRepository {
  _database: IBaseDatabase;

  _collectionName: CollectionName = COLLECTION_NAMES.USERS;

  _currentUser: User;

  constructor(database: IBaseDatabase) {
    super(database, COLLECTION_NAMES.USERS);
    this._database = database;
  }

  // eslint-disable-next-line no-unused-vars
  create: (user: $Shape<User>) => Promise<User> = async (
    user: $Shape<User>,
  ): Promise<User> => this._database.insertOne(this._collectionName, user);

  createWithCredentials: (
    userCredentials: UserCredentials,
    userRole: ?UserRole,
  ) => Promise<User> = async (
    userCredentials: UserCredentials,
    userRole: ?UserRole = null,
  ): Promise<User> => {
    const { username, password } = userCredentials;

    const salt = await PasswordHasher.generateSalt();
    const passwordHash = await PasswordHasher.hash(password, salt);
    const modelToSave = {
      accessTokens: [],
      created_at: new Date(),
      passwordHash,
      role: userRole,
      salt,
      username,
    };

    return this._database.insertOne(this._collectionName, modelToSave);
  };

  deleteAccessToken: (
    userID: string,
    accessToken: string,
  ) => Promise<User> = async (
    userID: string,
    accessToken: string,
  ): Promise<User> =>
    this._database.findAndModify(
      this._collectionName,
      { _id: userID },
      { $pull: { accessTokens: { accessToken } } },
    );

  deleteByID: (id: string) => Promise<void> = async (
    id: string,
  ): Promise<void> => this._database.remove(this._collectionName, { _id: id });

  getAll: () => Promise<Array<User>> = async (): Promise<Array<User>> => {
    throw new Error('The method is not implemented');
  };

  getByAccessToken: (accessToken: string) => Promise<?User> = async (
    accessToken: string,
  ): Promise<?User> => {
    let user = await this._database.findOne(this._collectionName, {
      accessTokens: { $elemMatch: { accessToken } },
    });

    if (!user) {
      // The newer query only works on mongo so we run this for tingo.
      user = await this._database.findOne(this._collectionName, {
        'accessTokens.accessToken': accessToken,
      });
    }

    return user;
  };

  // eslint-disable-next-line no-unused-vars
  getByID: (id: string) => Promise<?User> = async (): Promise<?User> => {
    throw new Error('The method is not implemented');
  };

  getByUsername: (username: string) => Promise<?User> = async (
    username: string,
  ): Promise<?User> =>
    this._database.findOne(this._collectionName, { username });

  getCurrentUser: () => User = (): User => this._currentUser;

  isUserNameInUse: (username: string) => Promise<boolean> = async (
    username: string,
  ): Promise<boolean> => !!(await this.getByUsername(username));

  saveAccessToken: (
    userID: string,
    tokenObject: TokenObject,
  ) => Promise<User> = async (
    userID: string,
    tokenObject: TokenObject,
  ): Promise<User> =>
    this._database.findAndModify(
      this._collectionName,
      { _id: userID },
      { $push: { accessTokens: tokenObject } },
    );

  setCurrentUser: User => void = (user: User) => {
    this._currentUser = user;
  };

  updateByID: (id: string, props: $Shape<User>) => Promise<User> = async (
    id: string,
    props: $Shape<User>,
  ): Promise<User> =>
    this._database.findAndModify(
      this._collectionName,
      { _id: id },
      { $set: { ...props } },
    );

  validateLogin: (username: string, password: string) => Promise<User> = async (
    username: string,
    password: string,
  ): Promise<User> => {
    const user = await this._database.findOne(this._collectionName, {
      username,
    });

    if (!user) {
      throw new HttpError("User doesn't exist", 404);
    }

    const hash = await PasswordHasher.hash(password, user.salt);
    if (hash !== user.passwordHash) {
      throw new HttpError('Wrong password');
    }

    return user;
  };
}

export default UserDatabaseRepository;
