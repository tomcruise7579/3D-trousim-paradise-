const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

// Get user's wishlist
router.get('/', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.userId).populate('wishlist');

        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            });
        }

        res.json({
            success: true,
            wishlist: user.wishlist
        });
    } catch (error) {
        console.error('Error fetching wishlist:', error);
        res.status(500).json({
            success: false,
            error: 'Error fetching wishlist'
        });
    }
});

// Add destination to wishlist
router.post('/add/:destinationId', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            });
        }

        if (user.wishlist.includes(req.params.destinationId)) {
            return res.status(400).json({
                success: false,
                error: 'Destination already in wishlist'
            });
        }

        user.wishlist.push(req.params.destinationId);
        await user.save();
        await user.populate('wishlist');

        res.json({
            success: true,
            message: 'Added to wishlist',
            wishlist: user.wishlist
        });
    } catch (error) {
        console.error('Error adding to wishlist:', error);
        res.status(500).json({
            success: false,
            error: 'Error adding to wishlist'
        });
    }
});

// Remove destination from wishlist
router.post('/remove/:destinationId', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            });
        }

        user.wishlist = user.wishlist.filter(id => id.toString() !== req.params.destinationId);
        await user.save();
        await user.populate('wishlist');

        res.json({
            success: true,
            message: 'Removed from wishlist',
            wishlist: user.wishlist
        });
    } catch (error) {
        console.error('Error removing from wishlist:', error);
        res.status(500).json({
            success: false,
            error: 'Error removing from wishlist'
        });
    }
});

module.exports = router;
