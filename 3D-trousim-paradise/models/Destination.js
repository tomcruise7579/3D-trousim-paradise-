const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    continent: {
        type: String,
        required: true,
        enum: ['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Oceania']
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Historical', 'Natural', 'Modern', 'Spiritual']
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    description: {
        type: String,
        required: true
    },
    images: [{
        type: String,
        required: true
    }],
    imageUrl: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Create index for search functionality
destinationSchema.index({ name: 'text', description: 'text', country: 'text' });

module.exports = mongoose.model('Destination', destinationSchema);
