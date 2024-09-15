const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/authModel');

const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret';

exports.showLoginForm = (req, res) => {
  res.render('pages/login');
};

exports.login = async (req, res) => {
  console.log('Request body:', req.body); 
  const { email, password } = req.body;

  try {
    const user = await User.findByEmail(email); 
    if (!user) {
      console.log('User not found');
      return res.status(400).render('pages/login', { error: 'User not found' });
    }

    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   console.log('Invalid credentials');
    //   return res.status(400).render('pages/login', { error: 'Invalid credentials' });
    // }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
    req.session.token = token;

    res.redirect('/subject');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).render('pages/login', { error: 'Server error' });
  }
};



exports.dashboard = (req, res) => {
  res.render('pages/dashboard', { user: req.user });
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      return res.status(500).send('Server error');
    }
    res.redirect('/login');
  });
};
