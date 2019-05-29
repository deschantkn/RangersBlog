import { Router } from 'express';
import articlesController from '../controllers/articles';
import Validator from '../middleware/validator';
import checkAuth from '../middleware/checkauth';


const articlesRouter = Router();

const {
  create, list, getArticle, edit,
} = articlesController;

articlesRouter.get('/:id', getArticle);
articlesRouter.post('/create', checkAuth, Validator.schemaCreate, create);
articlesRouter.get('/', list); // API route for user to get all books in the database
articlesRouter.patch('/:id', checkAuth, edit);

export default articlesRouter;
