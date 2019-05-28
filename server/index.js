import express from 'express';
import dotenv from 'dotenv';
import api from './routes';
import registerMiddleware from './middleware/registerMiddleware';
import { sequelize } from './models';

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
    });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(`Unable to connect to the databse ${err}`);
  });
