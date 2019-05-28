import models from '../models';

export default {
  create: (req, res) => {
    const { title, content } = req.body;
    models.Article.create({
      title,
      content,
    }).then(article => res.json(article));
  },
};
