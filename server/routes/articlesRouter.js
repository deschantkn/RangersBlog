import { Router } from 'express';
import articlesController from '../controllers/articles';
import Validator from '../middleware/validator';


const articlesRouter = Router();

const { create } = articlesController;

articlesRouter.post('/create', Validator.schemaCreate, create);

export default articlesRouter;
