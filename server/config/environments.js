import dotenv from 'dotenv';
/**
 * Create and export environment variables
 */
dotenv.config();
const environments = {};

environments.dev = {
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
};

environments.test = {
  dbName: process.env.TEST_DB_NAME,
  dbUser: process.env.TEST_DB_USER,
  dbPassword: process.env.TEST_DB_PASSWORD,
  sequelizeEraseDb: process.env.ERASE_DB,
};

// Determine which environment we are in
const currentEnvironment = typeof (process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one the envs defined above, if not default to dev
const environment = typeof (environments[currentEnvironment]) === 'object'
  ? environments[currentEnvironment] : environments.development;

// Export the module
export default environment;
