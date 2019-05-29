import express from 'express';
import authRouter from './authRouter';
import comment from '../models/comment';
import addComment from '../controllers/AddComment'

const api = express();

// routes go here
api.use('/auth', authRouter);

api.post('/comment', addComment);
//api.get('comment/:id', comment.get);
//api.delete('delete/:id', comment.delete);

export default api;
