'use strict';
module.exports = (sequelize, DataTypes) => {
  var playground = sequelize.define('playground', {
    title: DataTypes.STRING,
    comment: DataTypes.STRING
  }, {});
  playground.associate = function(models) {
    // associations can be defined here
  };
  return playground;
};