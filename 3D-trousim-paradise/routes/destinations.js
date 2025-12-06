const express = require('express');
const router = express.Router();
const Destination = require('../models/Destination');

// Get paginated destinations with filters
router.get('/', async (req, res) => {
    try {
        const { 
            page = 1, 
            limit = 10, 
            search = '', 
            continent = 'All', 
            category = 'All', 
            rating = 'All' 
        } = req.query;

        // Build filter object
        const filter = {};

        // Search filter (text search)
        if (search && search.trim() !== '') {
            filter.$text = { $search: search.trim() };
        }

        // Continent filter
        if (continent && continent !== 'All') {
            filter.continent = continent;
        }

        // Category filter
        if (category && category !== 'All') {
            filter.category = category;
        }

        // Rating filter
        if (rating && rating !== 'All') {
            const ratingValue = parseFloat(rating);
            filter.rating = { $gte: ratingValue };
        }

        // Calculate pagination
        const pageNum = Math.max(1, parseInt(page) || 1);
        const limitNum = Math.min(100, Math.max(1, parseInt(limit) || 10));
        const skip = (pageNum - 1) * limitNum;

        // Execute query with pagination
        const destinations = await Destination.find(filter)
            .skip(skip)
            .limit(limitNum)
            .sort({ rating: -1, name: 1 });

        // Get total count for pagination
        const total = await Destination.countDocuments(filter);

        res.json({
            success: true,
            places: destinations,
            pagination: {
                current: pageNum,
                limit: limitNum,
                total: total,
                pages: Math.ceil(total / limitNum),
                hasNext: pageNum < Math.ceil(total / limitNum),
                hasPrev: pageNum > 1
            }
        });
    } catch (error) {
        console.error('Error fetching destinations:', error);
        res.status(500).json({
            success: false,
            error: 'Error fetching destinations',
            message: error.message
        });
    }
});

// Get single destination by ID
router.get('/:id', async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);
        
        if (!destination) {
            return res.status(404).json({
                success: false,
                error: 'Destination not found'
            });
        }

        // Get reviews for this destination
        const Review = require('../models/Review');
        const reviews = await Review.find({ destination: req.params.id })
            .sort({ createdAt: -1 })
            .populate('user', 'name');

        res.json({
            success: true,
            place: {
                ...destination.toObject(),
                reviewCount: reviews.length,
                reviews: reviews
            }
        });
    } catch (error) {
        console.error('Error fetching destination:', error);
        res.status(500).json({
            success: false,
            error: 'Error fetching destination'
        });
    }
});

module.exports = router;
