// @flow

import type { $Application, $Response } from 'express';
import type { Request } from '../../src/types';
import createApp from '../../src/app';
import settings from './settings';
import getDefaultContainer from './getDefaultContainer';

const container = getDefaultContainer();

const app: $Application<Request, $Response> = createApp(container, settings);
(app: any).container = container;

export default app;
