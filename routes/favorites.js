const express = require('express');
const router = express.Router();
const authVerify = require('../middleware/authVerify')
const { attach, getAll, getFavoriteByParams } = require('../controllers/favoritesCtrl');

router.post('/attach', attach);
router.post('/getAll', authVerify, getAll);
router.post('/', getFavoriteByParams);

module.exports = router;