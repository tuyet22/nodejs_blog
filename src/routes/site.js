const express = require('express')
const router = express.Router()

const sitesController = require('../app/controllers/SitesController')

// newsController.index


router.get('/search', sitesController.show)
router.get('/', sitesController.index)

module.exports = router