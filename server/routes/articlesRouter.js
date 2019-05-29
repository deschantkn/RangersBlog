import { Router } from 'express';
import articlesController from '../controllers/articles';
import Validator from '../middleware/validator';

const articlesRouter = Router();

const { create, list, getArticle } = articlesController;

articlesRouter.get('/:id', getArticle);
articlesRouter.post('/create', Validator.schemaCreate, create);
articlesRouter.get('/', list); // API route for user to get all books in the database

export default articlesRouter;
