import { Router } from 'express';
import Validator from '../middleware/validator';
import checkAuth from '../middleware/checkauth';
import AddCommentController from '../controllers/AddComment';
import deleteCommentController from '../controllers/DeleteComment';
import getCommentController from '../controllers/get_comment';

//bringIn the checkOwnercomment middleware
import {checkCommentOwner} from '../middleware/checkCommentOwner';


const commentRouter = Router();

// const {
//   create, list, getArticle, edit,
// } = articlesController;



commentRouter.post('/:id/comment', checkAuth, Validator.schemaCreate,AddCommentController);
commentRouter.delete('/:id/comment/:commentId', checkAuth,checkCommentOwner,deleteCommentController);
commentRouter.get('/:id/comments', checkAuth, getCommentController);
export default commentRouter;