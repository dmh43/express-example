"use strict";

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    username: DataTypes.STRING,
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        user.hasMany(models.task)
      }
    },
    timestamps: true
  });

  return user;
};
