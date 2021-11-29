// @flow

import type { $Response } from 'express';
import type { User } from '../types';
import type { HttpResult } from './types';
import type { Request } from '../types';

export default class Controller {
  request: Request;

  response: $Response;

  user: User;

  bad(message: string, status: number = 400): HttpResult<*> {
    return {
      data: {
        error: message,
        ok: false,
      },
      status,
    };
  }

  ok<TType>(output?: TType): HttpResult<TType> {
    return {
      data: output,
      status: 200,
    };
  }
}
