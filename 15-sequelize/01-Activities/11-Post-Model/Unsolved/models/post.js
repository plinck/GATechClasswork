
module.exports = function(sequelize, DataTypes) {
  // Add code here to create a Post model
  // This model needs a title, a body, and a category
  // Don't forget to 'return' the post after defining
  var Post = sequelize.define("posts", {
    title: { type: DataTypes.STRING, allowNull: false, validate: { len: [1,160]}},
    body: { type: DataTypes.TEXT, allowNull: false},
    category: { type: DataTypes.STRING, allowNull: false, defaultValue: "Personal", validate: { len: [1,140]}},
  });
  return Post;

};
