const express = require('express')
const BlogController = require('../controllers/BlogController')
const router = express.Router()

// blogs routes
router.get('/', BlogController.index)
router.get('/create', BlogController.create)
router.post('/', BlogController.store)
router.get('/:id', BlogController.show)
router.get('/:id/edit', BlogController.edit)
router.patch('/:id', BlogController.update)
router.delete('/:id', BlogController.destroy)

module.exports = router