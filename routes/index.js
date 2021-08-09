const express = require('express');
const router = express.Router();

const category = require('../controllers/category.controller');
const log= require('../controllers/log.controller')

//Router for categories
router.get('/categories', category.getCategories);
router.post('/categories', category.saveCategory);
router.delete('/categories/:uuid', category.deleteCategory);
router.put('/categories/:uuid', category.updateCategory);

//Router for logs
router.get('/logs', log.getLogs);
router.post('/logs', log.saveLog);
router.delete('/logs/:uuid', log.deleteLog);
router.put('/logs/:uuid', log.updateLog);

//Redirect to categories
router.use((req, res) => res.redirect('/categories'));

module.exports = router;