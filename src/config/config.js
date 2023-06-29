import { config } from 'dotenv';

config();
export const setup = {
  env: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  isDev: process.env.NODE_ENV === 'development',
  uri: process.env.URI_DB,
};
