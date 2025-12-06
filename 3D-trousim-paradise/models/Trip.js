const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    places: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Destination'
    }],
    description: {
        type: String,
        default: ''
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

// Validate endDate > startDate
tripSchema.pre('save', function(next) {
    if (this.endDate <= this.startDate) {
        throw new Error('End date must be after start date');
    }
    next();
});

module.exports = mongoose.model('Trip', tripSchema);
