const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const Destination = require('../models/Destination');
const authMiddleware = require('../middleware/auth');

// Get reviews for a destination with pagination
router.get('/destination/:destinationId', async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const pageNum = Math.max(1, parseInt(page) || 1);
        const limitNum = Math.min(50, Math.max(1, parseInt(limit) || 10));
        const skip = (pageNum - 1) * limitNum;

        const reviews = await Review.find({ destination: req.params.destinationId })
            .populate('user', 'name')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limitNum);

        const total = await Review.countDocuments({ destination: req.params.destinationId });

        res.json({
            success: true,
            reviews,
            pagination: {
                current: pageNum,
                limit: limitNum,
                total,
                pages: Math.ceil(total / limitNum)
            }
        });
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({
            success: false,
            error: 'Error fetching reviews'
        });
    }
});

// Create a review (requires authentication)
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { destinationId, rating, comment } = req.body;

        // Validate input
        if (!destinationId || !rating || !comment) {
            return res.status(400).json({
                success: false,
                error: 'Destination ID, rating, and comment are required'
            });
        }

        // Verify destination exists
        const destination = await Destination.findById(destinationId);
        if (!destination) {
            return res.status(404).json({
                success: false,
                error: 'Destination not found'
            });
        }

        // Get user info
        const User = require('../models/User');
        const user = await User.findById(req.userId);

        const review = new Review({
            destination: destinationId,
            user: req.userId,
            userName: user.name,
            rating: parseInt(rating),
            comment
        });

        await review.save();
        await review.populate('user', 'name');

        res.status(201).json({
            success: true,
            review
        });
    } catch (error) {
        console.error('Error creating review:', error);
        res.status(500).json({
            success: false,
            error: 'Error creating review',
            message: error.message
        });
    }
});

module.exports = router;
