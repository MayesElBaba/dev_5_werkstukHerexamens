const express = require('express');
const router = express.Router();

const category = require('../controllers/category.controller');

//Router for categories
router.get('/categories', category.getCategories);
router.post('/categories', category.saveCategory);
router.delete('/categories/:uuid', category.deleteCategory);
router.put('/categories/:uuid', category.updateCategory);

//Router for logs



module.exports = router;