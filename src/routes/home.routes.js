const HomeController = require('../controllers/HomeController');

const router = require('express').Router();


router.get('/', HomeController.index)


module.exports = router;


