import { Router } from 'express';
import articlesController from '../controllers/articles';
import Validator from '../middleware/validator';
import checkAuth from '../middleware/checkauth';

const articlesRouter = Router();

const {
  create, list, getArticle, edit, like, unlike, deleteArticle,
} = articlesController;

articlesRouter.get('/:id', getArticle);
articlesRouter.post('/create', checkAuth, Validator.schemaCreate, create);
articlesRouter.get('/', list); // API route for user to get all books in the database
articlesRouter.patch('/:id', checkAuth, Validator.schemaCreate, edit);
articlesRouter.post('/:id/like', checkAuth, like);
articlesRouter.post('/:id/unlike', checkAuth, unlike);
articlesRouter.delete('/:id', checkAuth, deleteArticle);


export default articlesRouter;
