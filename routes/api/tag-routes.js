const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/',async (req, res) => {
  try {
    const TagData = await Tag.findAll({
      attribute:["id",'tag_Id'],
      include: [{ model: Product }],
    });
    res.status(200).json(Tag);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  router.get('/:id', async (req, res) => {
    try {
      const libraryCardData = await LibraryCard.findByPk(req.params.id, {
        include: [{ model: Reader }],
      });
  
      if (!libraryCardData) {
        res.status(404).json({ message: 'No library card found with that id!' });
        return;
      }
  
      res.status(200).json(libraryCardData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a card
 
  
  // DELETE a card

  
  
  
  // find a single tag by its `id`
  // be sure to include its associated Product data
});


  // create a new tag


  router.post('/', async (req, res) => {
    try {
      const TagData = await Tag.create({
        Tag_id: req.body,
      });
      res.status(200).json(TagData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  router.delete('/:id', async (req, res) => {
    try {
      const ProductData = await Tag.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (Tag) {
        res.status(404).json({ message: '' });
        return;
      }
  
      res.status(200).json();
    } catch (err) {
      res.status(500).json(err);
    }


  // delete on tag by its `id` value
});


module.exports = router;
