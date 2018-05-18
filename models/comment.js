'use strict';
module.exports = (sequelize, DataTypes) => {
  var comment = sequelize.define('comment', {
    author: DataTypes.STRING,

  }, {});
  comment.associate = function(models) {
    // associations can be defined here
    comment.belongsTo(models.article);
  };
  return comment;
};