const comment = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {


    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },

    comment: {
      type: DataTypes.STRING,
    },

    articleId: {
      type: DataTypes.INTEGER,
    },

    UserId: {
      type: DataTypes.INTEGER,
    }
});

  Comment.associate = (models) => {
    Comment.belongsTo(models.Article,{foreignKey:'articleId'});
    Comment.belongsTo(models.User, {foreignKey:'UserId'});

  };

  return Comment;
};

export default comment;
