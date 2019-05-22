import express from 'express';
import dotenv from 'dotenv';
import api from './routes';
import registerMiddleware from './middleware/registerMiddleware';

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

registerMiddleware(app);

app.use('/api', api);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port: ${port} in ${process.env.NODE_ENV} mode`);
});
