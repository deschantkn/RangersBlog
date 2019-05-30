import dotenv from 'dotenv';
import Sequelize from 'sequelize';

dotenv.config();


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
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
