const path = require('path');
const ejs = require('ejs');
const { getUsers, createUser, updateUser, deleteUser } = require('../models/userModel');

const getAllUsers = async (req, res) => {
    try {
        const users = await getUsers(); 
        const body = await ejs.renderFile(path.join(__dirname, '../../views/pages/users.ejs'), { users });
        res.render('layout', { title: 'All Users', body });
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send('Error fetching users');
    }
};



const renderNewUserForm = (req, res) => {
    res.render('new-user');
};

const addNewUser = async (req, res) => {
    const { firstName, lastName, birthDate,adress, subscriptionDate, password } = req.body;
    const userImage = req.file ? req.file.buffer : null;

    try {
        await createUser(firstName, lastName, birthDate, userImage,adress, subscriptionDate, password);
        res.redirect('/users');
    } catch (err) {
        console.error('Error creating user:', err.message);
        res.status(500).send('Error creating user');
    }
};



const renderEditUserForm = async (req, res) => {
    const userId = req.params.id;
    try {
        const result = await getUsers();  
        const user = result.find(user => user.user_id == userId);
        res.render('pages/edit-user', { user });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching user');
    }
};

// const renderEditUserForm = async (req, res) => {
//     const userId = req.params.id;
//     try {
//         const result = await getUsers();
//         const user = result.find(user => user.user_id == userId);

//         if (!user) {
//             return res.status(404).send('User not found');
//         }

//         // Render the edit-user page to be used as the body
//         const body = await ejs.renderFile(path.join(__dirname, '../../views/pages/edit-user.ejs'), { user });

//         // Render the layout with the edit-user form as the body
//         res.render('layout', {
//             title: 'Edit User',
//             body
//         });
//     } catch (err) {
//         console.error('Error fetching user:', err);
//         res.status(500).send('Error fetching user');
//     }
// };
const editUser = async (req, res) => {
    const userId = req.params.id;
    const { firstName, lastName, birthDate, address, subscriptionDate, password } = req.body;
    const userImage = req.file ? req.file.buffer : null;

    console.log('User ID:', userId);  
    console.log('Form Data:', req.body);  
    console.log('File Data:', req.file);  

    try {
        await updateUser(userId, firstName, lastName, birthDate, userImage, address, subscriptionDate, password);
        res.redirect('/users');
    } catch (err) {
        console.error('Error updating user:', err.message, err.stack);
        res.status(500).send('Error updating user');
    }
};




const removeUser = async (req, res) => {
    const userId = req.params.id;

    try {
        await deleteUser(userId);
        res.redirect('/users');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting user');
    }
};

module.exports = {
    getAllUsers,
    renderNewUserForm,
    addNewUser,
    renderEditUserForm,
    editUser,
    removeUser
};
