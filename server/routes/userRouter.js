import { Router } from 'express';
import userController from '../controllers/users';
import checkAuth from '../middleware/checkauth';

const userRouter = Router();
const { follow, unfollow } = userController;

userRouter.get('/follow/:userId', checkAuth, follow);
userRouter.get('/unfollow/:userId', checkAuth, unfollow);

export default userRouter;
