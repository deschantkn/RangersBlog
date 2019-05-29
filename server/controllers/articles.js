import models from '../models';

export default {
  create: (req, res) => {
    const { title, content } = req.body;
    models.Article.create({
      title,
      content,
      UserId: req.userData.id,
    }).then(article => res.json(article));
  },

  list: (req, res) => models.Article.findAll().then(articles => res.status(200).send(articles)),

  getArticle: (req, res) => models.Article.findOne({
    where: {
      id: req.params.id,
    },
  }).then((articles) => {
    if (!articles) {
      return res.status(404).send({
        message: 'Article Not Found',
      });
    } return res.status(200).send(articles);
  }).catch(error => res.status(400).send({
    message: 'bad request!',
  })),

  edit: (req, res) => {
    models.Article.findByPk(req.params.id).then((article) => {
      if (article) {
        if (article.UserId === req.userData.id) {
          res.send('owner');
        } else {
          return res.status(401).send({
            message: 'Access denied, you are not the owner',
          });
        }
      } else {
        return res.status(404).send({
          message: 'Article Not Found',
        });
      }
    });
  },
};
