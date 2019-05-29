import express from 'express';
import authRouter from './authRouter';
import articlesRouter from './articlesRouter';
import userRouter from './userRouter';

const api = express();

// routes go here
api.use('/auth', authRouter);
api.use('/articles', articlesRouter);
api.use('/follow', userRouter);

export default api;
