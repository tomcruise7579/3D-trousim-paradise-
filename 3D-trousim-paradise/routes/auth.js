const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

// Register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate input
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                error: 'Name, email, and password are required'
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: 'User already exists with this email'
            });
        }

        // Create new user
        const newUser = new User({ name, email, password });
        await newUser.save();

        // Generate JWT token
        const token = jwt.sign(
            { userId: newUser._id, email: newUser.email },
            process.env.JWT_SECRET || 'your_secret_key',
            { expiresIn: '7d' }
        );

        res.status(201).json({
            success: true,
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            },
            token
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({
            success: false,
            error: 'Error during registration',
            message: error.message
        });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                error: 'Email and password are required'
            });
        }

        // Find user and select password
        const user = await User.findOne({ email }).select('+password');
        
        if (!user) {
            return res.status(401).json({
                success: false,
                error: 'Invalid email or password'
            });
        }

        // Compare passwords
        const isPasswordValid = await user.comparePassword(password);
        
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                error: 'Invalid email or password'
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET || 'your_secret_key',
            { expiresIn: '7d' }
        );

        res.json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            token
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            error: 'Error during login',
            message: error.message
        });
    }
});

// Get current user profile
router.get('/profile', authMiddleware, async (req, res) => {
    try {
        // Middleware should have set req.userId
        if (!req.userId) {
            return res.status(401).json({
                success: false,
                error: 'Not authenticated'
            });
        }

        const user = await User.findById(req.userId).populate('wishlist');

        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            });
        }

        res.json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                wishlist: user.wishlist
            }
        });
    } catch (error) {
        console.error('Profile error:', error);
        res.status(500).json({
            success: false,
            error: 'Error fetching profile'
        });
    }
});

module.exports = router;
