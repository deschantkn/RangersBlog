import express from 'express';
import dotenv from 'dotenv';
import api from './routes';
import registerMiddleware from './middleware/registerMiddleware';
import models, { sequelize } from './models';

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

registerMiddleware(app);

app.use('/api', api);

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server listening on port: ${port} in ${process.env.NODE_ENV} mode`);
<<<<<<< HEAD
=======
      models.User.create({
        name: 'name',
        email: 'email@e.mail',
        password: '1234',
      }).then(() => {
        models.User.findByEmail('email@e.mail').then((res) => {
          console.log('Test', res.dataValues);
        });
      });
>>>>>>> c2ab639538aa8e4db245bf064a56b82b161c447e
    });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(`Unable to connect to the databse ${err}`);
  });
