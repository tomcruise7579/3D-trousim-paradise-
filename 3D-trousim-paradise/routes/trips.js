const express = require('express');
const router = express.Router();
const Trip = require('../models/Trip');
const authMiddleware = require('../middleware/auth');

// Get user's trips
router.get('/', authMiddleware, async (req, res) => {
    try {
        const trips = await Trip.find({ user: req.userId })
            .populate('places')
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            trips: trips.map(trip => ({
                ...trip.toObject(),
                destinations: trip.places
            }))
        });
    } catch (error) {
        console.error('Error fetching trips:', error);
        res.status(500).json({
            success: false,
            error: 'Error fetching trips'
        });
    }
});

// Create a new trip
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { name, startDate, endDate, places } = req.body;

        if (!name || !startDate || !endDate) {
            return res.status(400).json({
                success: false,
                error: 'Name, start date, and end date are required'
            });
        }

        const trip = new Trip({
            user: req.userId,
            name,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            places: places || []
        });

        await trip.save();
        await trip.populate('places');

        res.status(201).json({
            success: true,
            trip: {
                ...trip.toObject(),
                destinations: trip.places
            }
        });
    } catch (error) {
        console.error('Error creating trip:', error);
        res.status(500).json({
            success: false,
            error: 'Error creating trip',
            message: error.message
        });
    }
});

// Update trip
router.put('/:tripId', authMiddleware, async (req, res) => {
    try {
        const trip = await Trip.findOne({ _id: req.params.tripId, user: req.userId });

        if (!trip) {
            return res.status(404).json({
                success: false,
                error: 'Trip not found'
            });
        }

        const { name, startDate, endDate, places } = req.body;
        
        if (name) trip.name = name;
        if (startDate) trip.startDate = new Date(startDate);
        if (endDate) trip.endDate = new Date(endDate);
        if (places) trip.places = places;

        await trip.save();
        await trip.populate('places');

        res.json({
            success: true,
            trip: {
                ...trip.toObject(),
                destinations: trip.places
            }
        });
    } catch (error) {
        console.error('Error updating trip:', error);
        res.status(500).json({
            success: false,
            error: 'Error updating trip'
        });
    }
});

// Delete trip
router.delete('/:tripId', authMiddleware, async (req, res) => {
    try {
        const trip = await Trip.findOneAndDelete({ _id: req.params.tripId, user: req.userId });

        if (!trip) {
            return res.status(404).json({
                success: false,
                error: 'Trip not found'
            });
        }

        res.json({
            success: true,
            message: 'Trip deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting trip:', error);
        res.status(500).json({
            success: false,
            error: 'Error deleting trip'
        });
    }
});

module.exports = router;
