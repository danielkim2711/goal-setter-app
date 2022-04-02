// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = (req, res) => {
  res.json({ message: 'Register User' });
};

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = (req, res) => {
  res.json({ message: 'Login User' });
};

// @desc    Get current user
// @route   GET /api/users/me
// @access  Private
const getMe = (req, res) => {
  res.json({ message: 'Get User' });
};

module.exports = { registerUser, loginUser, getMe };
