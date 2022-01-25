const router = require('express').Router();
const ProductModel = require('../models/productModel');

router
  .get('/', async (_req, res) => {
    const products = await ProductModel.getAll();

    res.status(200).json(products);
  })
  .post('/', async (req, res) => {
    const { name, brand } = req.body;
  
    try {
      const newProduct = await ProductModel.add(name, brand);
      
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  });

router
  .get('/:id', async (req, res) => {
    const product = await ProductModel.getById(req.params.id);

    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.status(200).json(product);
  })
  .delete('/:id', async (req, res) => {
    try {
      const products = await ProductModel.exclude(req.params.id);

      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  })
  .put('/:id', async (req, res) => {
    const { name, brand } = req.body;

    try {
      const products = await ProductModel.update(req.params.id, name, brand);

      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  });

module.exports = router;
