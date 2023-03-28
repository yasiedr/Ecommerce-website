// import models
const Product = require('./models/Product');
const Category = require('./models/Category');
const Tag = require('./models/Tag');
const ProductTag = require('./models/ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'Product_id',
});


// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});


// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
  through: ProductTag,
  foreignKey: "product_Id",
});


Tag.belongsTo(product,{
  trough: ProductTag,
  foreignKey:"Tag_Id"
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
