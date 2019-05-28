import models from "../models";

export default {
  create: (req, res) => {
    const { title, content } = req.body;
    models.Article.create({
      title,
      content
    }).then(article => res.json(article));
  },

  list: (req, res) => {
    return models.Article.findAll().then(articles =>
      res.status(200).send(articles)
    );
  },
  getArticle: (req, res) =>{
     return models.Article.findOne({
       where: {id: req.params.id}
     }).then(articles => {if(!articles) {
      return res.status(404).send({
        message: 'Article Not Found',
      }); } res.status(200).send(articles);
     }).catch((error) => res.status(400).send({
       message:"bad request!"
     }));

    }

  }
