"use strict";

module.exports = function(sequelize, DataTypes) {
  var task = sequelize.define("task", {
    title: DataTypes.STRING,
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        task.belongsTo(models.user);
      }
    }
  }
                             );

  return task;
};
