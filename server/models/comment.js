const comment = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
<<<<<<< HEAD

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
=======
    comment: {
      type: DataTypes.STRING,
    },
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.User);
>>>>>>> c2ab639538aa8e4db245bf064a56b82b161c447e
  };

  return Comment;
};

export default comment;
