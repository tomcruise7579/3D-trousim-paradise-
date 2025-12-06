const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const seedDatabase = require('../utils/seedDatabase');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/travel-paradise';

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Database connection
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('✓ Connected to MongoDB');
    // Seed database on startup
    return seedDatabase();
})
.catch(error => {
    console.error('✗ MongoDB connection error:', error);
    process.exit(1);
});

// Database models - ensure they're loaded
const User = require('../models/User');
const Destination = require('../models/Destination');
const Review = require('../models/Review');
const Trip = require('../models/Trip');

// Middleware
const authMiddleware = require('../middleware/auth');

// API Routes
app.use('/api/destinations', require('../routes/destinations'));
app.use('/api/auth', require('../routes/auth'));
app.use('/api/reviews', require('../routes/reviews'));
app.use('/api/wishlist', authMiddleware, require('../routes/wishlist'));
app.use('/api/trips', authMiddleware, require('../routes/trips'));

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        success: true, 
        message: 'Server is running',
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    });
});

// Serve main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(err.status || 500).json({
        success: false,
        error: err.message || 'Internal Server Error'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Route not found'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`\n🌍 Travel Paradise Server`);
    console.log(`✓ Server running on http://localhost:${PORT}`);
    console.log(`✓ MongoDB: ${MONGODB_URI}`);
    console.log(`✓ Environment: ${process.env.NODE_ENV || 'development'}\n`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n✓ Server shutting down gracefully...');
    mongoose.connection.close();
    process.exit(0);
});

module.exports = app;