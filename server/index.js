import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port: ${port} in ${process.env.NODE_ENV} mode`);
});
