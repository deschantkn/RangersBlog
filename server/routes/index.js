import express from 'express';
import authRouter from './authRouter';
import articlesRouter from './articlesRouter';
import commentRoutes from './commentRoutes';

const api = express();

// routes go here
api.use('/auth', authRouter);
api.use('/articles', articlesRouter);
api.use('/article', commentRoutes );
export default api;
