import express from 'express';
import authRouter from './authRouter';

const api = express();

// routes go here
api.use('/auth', authRouter);

export default api;
