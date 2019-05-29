const article = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    
    title: {
      type: DataTypes.STRING,
    },
    article: {
      type: DataTypes.STRING,
    },
  });

  Article.associate = (models) => {
    Article.belongsTo(models.User);
  };

  return Article;
};

export default article;
