import dotenv from 'dotenv';
import Sequelize from 'sequelize';

dotenv.config();


const sequelize = new Sequelize('RangersBlog', 'postgres', 'le66lit66', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

// const sequelize = new Sequelize( 'rangers', 'ramadhan', 'postgres', {
//   host: 'localhost',
//   dialect: 'postgres',
//   logging: false,
// });

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
