const comment = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: {
      type: DataTypes.STRING,
    },
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.User);
  };

  return Comment;
};

export default comment;
