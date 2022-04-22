/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { setupServer } from 'msw/node';
import handler from './handlers';

export const server = setupServer(...handler);
