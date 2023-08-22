const User = require('../models/User');
const jwt = require('jsonwebtoken');
const secretKey = 'shashi@123'; // Replace with your actual secret key

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });

    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Please provide username, email, and password' });
    }
    
    await newUser.save();
    // console.log(newUser)
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

module.exports = { register, login };
