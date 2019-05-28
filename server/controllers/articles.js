import models from '../models';
import Validator from '../middleware/validator';


export default {
  create: (req, res) => {
    const { title, content } = req.body;
    models.Article.create({
      title,
      content,
    }).then(article => res.json(article));
  },
};
