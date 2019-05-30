const user = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    names: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    followers: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
  });

  User.findByEmail = async (email) => {
    const queryResult = await User.findOne({
      where: { email },
    });

    return queryResult;
  };

  return User;
};

export default user;
