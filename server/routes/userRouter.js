import { Router } from 'express';
import userController from '../controllers/users';
import checkAuth from '../middleware/checkauth';

const userRouter = Router();
const { follow } = userController;

userRouter.get('/:userId', checkAuth, follow);

export default userRouter;
