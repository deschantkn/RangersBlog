import models from '../models';

const { Article } = models;
export default {
  create: (req, res) => {
    const { title, content } = req.body;
    Article.create({
      title,
      content,
      UserId: req.userData.id,
    }).then(article => res.json(article));
  },

  list: (req, res) => Article.findAll().then(articles => res.status(200).send(articles)),

  getArticle: (req, res) => Article.findOne({
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
    Article.findByPk(req.params.id).then((article) => {
      if (article) {
        if (article.UserId === req.userData.id) {
          const { title, content } = req.body;
          Article.update({
            title,
            content,
          }, {
            where: {
              id: req.params.id,
            },
          }).then(() => res.status(200).send({ message: 'updated correctly' }));
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

  like: (req, res) => {
    Article.findByPk(req.params.id).then((article) => {
      if (article) {
        if (article.UserId !== req.userData.id) {
          article.likes.push(req.userData.id);
          Article.update({
            likes: article.likes,
          }, {
            where: {
              id: req.params.id,
            },
          }).then(() => res.status(200).send({ message: 'liked correctly' }));
        } else {
          return res.status(401).send({
            message: 'Action denied, you are the owner',
          });
        }
      } else {
        return res.status(404).send({
          message: 'Article Not Found',
        });
      }
    });
  },

  unlike: (req, res) => {
    Article.findByPk(req.params.id).then((article) => {
      if (article) {
        if (article.UserId !== req.userData.id) {
          article.unlikes.push(req.userData.id);
          Article.update({
            unlikes: article.unlikes,
          }, {
            where: {
              id: req.params.id,
            },
          }).then(() => res.status(200).send({ message: 'unliked correctly' }));
        } else {
          return res.status(401).send({
            message: 'Action denied, you are the owner',
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
