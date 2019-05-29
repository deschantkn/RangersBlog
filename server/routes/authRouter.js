import { Router } from 'express';
import authController from '../controllers/auth';
import Validator from '../middleware/validator';

const authRouter = Router();
const { signin, signup } = authController;

authRouter.post('/signup', Validator.userCreate, signup);
authRouter.post('/signin', signin);

export default authRouter;
