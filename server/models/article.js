const article = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
<<<<<<< HEAD
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    
    title: {
      type: DataTypes.STRING,
    },
    article: {
=======
    title: {
      type: DataTypes.STRING,
    },
    content: {
>>>>>>> c2ab639538aa8e4db245bf064a56b82b161c447e
      type: DataTypes.STRING,
    },
  });

  Article.associate = (models) => {
    Article.belongsTo(models.User);
  };

  return Article;
};

export default article;
