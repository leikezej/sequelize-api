module.exports = (sequelize,  DataTypes) => {
    const User = sequelize.define("user", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
       type: DataTypes.STRING,
     },
     phone: {
       type: DataTypes.STRING,
     },
     roles: {
       type: DataTypes.STRING,
     },
      password: {
        type: DataTypes.STRING
       //  type: DataTypes.TEXT,
      },
      published: {
        type: DataTypes.BOOLEAN,
      },
    });
    return User;
  };
  