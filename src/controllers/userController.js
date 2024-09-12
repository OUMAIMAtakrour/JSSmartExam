// controllers/UserController.js
const UserModel = require('../models/userModel');

class UserController {
    // Controller method to handle show user details
    static async show(req, res) {
        const userId = req.params.id; // Assuming the user ID is passed in the route as a parameter
        let logs = [];
        logs.push(`Requested user ID: ${userId}`);

        try {
            const user = await UserModel.show(userId);
            if (user) {
                logs.push('User retrieved: ' + JSON.stringify(user));
                // Render the user view with the retrieved user data and logs
                res.render('pages/showUser', { user, logs });
            } else {
                logs.push('User not found');
                res.render('pages/showUser', { user: null, logs });
            }
        } catch (err) {
            logs.push('Error retrieving user: ' + err.message);
            res.render('pages/showUser', { user: null, logs });
        }
    }
}

module.exports = UserController;
