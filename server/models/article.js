const article = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    likes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    unlikes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
  });

  Article.associate = (models) => {
    Article.belongsTo(models.User);
  };

  return Article;
};

export default article;
