const user = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
<<<<<<< HEAD
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
=======
    names: {
>>>>>>> c2ab639538aa8e4db245bf064a56b82b161c447e
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  });

<<<<<<< HEAD
=======
  User.findByEmail = async (email) => {
    const queryResult = await User.findOne({
      where: { email },
    });

    return queryResult;
  };

>>>>>>> c2ab639538aa8e4db245bf064a56b82b161c447e
  return User;
};

export default user;
