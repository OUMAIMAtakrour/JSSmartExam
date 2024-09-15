const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../middleware/upload');  


router.get('/', userController.getAllUsers);
router.get('/new', userController.renderNewUserForm);
router.post('/new', upload.single('userImage'), userController.addNewUser);

router.post('/', upload.single('userImage'), userController.addNewUser);  
router.get('/edit/:id', userController.renderEditUserForm);
router.patch('/edit/:id', upload.single('userImage'), userController.editUser);

router.post('/delete/:id', userController.removeUser);

module.exports = router;
