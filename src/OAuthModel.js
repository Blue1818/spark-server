// @flow

import oauthClients from './oauthClients.json';

import type { Client, IUserRepository, TokenObject, User } from './types';

const OAUTH_CLIENTS = oauthClients;

type AccessToken = ?TokenObject & User;

class OauthModel {
  _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  getAccessToken: string => Promise<?AccessToken> = async (
    bearerToken: string,
  ): Promise<?AccessToken> => {
    const user: any = await this._userRepository.getByAccessToken(bearerToken);
    if (!user) {
      return null;
    }

    const userTokenObject = user.accessTokens.find(
      (tokenObject: TokenObject): boolean =>
        tokenObject.accessToken === bearerToken,
    );

    if (!userTokenObject) {
      return null;
    }

    return {
      ...userTokenObject,
      user,
    };
  };

  getClient: (clientId: string, clientSecret: string) => ?Client = (
    clientId: string,
    clientSecret: string,
  ): ?Client =>
    OAUTH_CLIENTS.find(
      (client: Client): boolean =>
        client.clientId === clientId && client.clientSecret === clientSecret,
    );

  getUser: (username: string, password: string) => Promise<User> = async (
    username: string,
    password: string,
  ): Promise<User> => this._userRepository.validateLogin(username, password);

  saveToken: (
    tokenObject: TokenObject,
    client: Client,
    user: User,
  ) => Object = (
    tokenObject: TokenObject,
    client: Client,
    user: User,
  ): Object => {
    this._userRepository.saveAccessToken(user.id, tokenObject);
    return {
      accessToken: tokenObject.accessToken,
      client,
      user,
    };
  };

  // eslint-disable-next-line no-unused-vars
  validateScope: (
    user: User,
    client: Client,
    scope: string,
  ) => string = (): string => 'true';
}

export default OauthModel;
