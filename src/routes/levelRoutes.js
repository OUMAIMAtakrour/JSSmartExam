const express = require('express');
const router = express.Router();
const levelController = require('../controllers/levelController');


router.get('/', levelController.getAllLevels);
router.post('/new', levelController.addNewLevel);
router.get('/edit/:id', levelController.renderEditLevelForm);
router.post('/edit/:id', levelController.editLevel);

router.post('/delete/:id', levelController.removeLevel);





module.exports = router;

