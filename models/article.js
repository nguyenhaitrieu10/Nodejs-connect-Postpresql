'use strict';
module.exports = (sequelize, DataTypes) => {
  var article = sequelize.define('article', {
    title: DataTypes.STRING,
    imagepath: DataTypes.STRING,
    summary: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {});
  article.associate = function(models) {
    // associations can be defined here
    article.hasMany(models.comment);
  };
  return article;
};