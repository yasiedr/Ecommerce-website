const router = require('express').Router();
const { Category, Product } = require('../..');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    attributes: ['id', 'category_name'],
    // be sure to include its associated Products
    include: [{
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', "category_id"]
    }]
  })
  then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {Category.update(
  {
    category_name: req.body.category_name
  },
  {
    where: {
      id: req.params.id
    }
  }
)
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No matching ctegory available' });
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
  // update a category by its `id` value

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value

  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {

      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
});

module.exports = router;
