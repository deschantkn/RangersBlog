import { Router } from 'express';
import userController from '../controllers/users';

const userRouter = Router();
const { follow } = userController;

userRouter.get('/follow/:userId', follow);
