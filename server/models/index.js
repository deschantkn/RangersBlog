import dotenv from 'dotenv';
import Sequelize from 'sequelize';
import environment from '../config/environments';

dotenv.config();

const sequelize = new Sequelize(
  environment.dbName,
  environment.dbUser,
  environment.dbPassword,
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
  },
);

const models = {
  User: sequelize.import('./user'),
  Article: sequelize.import('./article'),
  Comment: sequelize.import('./comment'),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
