const express = require('express');
const cors = require('cors');
const path = require('path');

// Create an instance of the express application
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Simulated Database (In-Memory Storage)
const DATABASE = {
    destinations: [
        {"id": 1, "name": "Taj Mahal", "country": "India", "continent": "Asia", "lat": 27.1751, "lng": 78.0421, "category": "Historical", "rating": 4.9, "description": "Magnificent ivory-white marble mausoleum, UNESCO World Heritage Site", "images": ["https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800"]},
        {"id": 2, "name": "Great Wall of China", "country": "China", "continent": "Asia", "lat": 40.4319, "lng": 116.5704, "category": "Historical", "rating": 4.8, "description": "Ancient fortification stretching over 13,000 miles", "images": ["https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800"]},
        {"id": 3, "name": "Eiffel Tower", "country": "France", "continent": "Europe", "lat": 48.8584, "lng": 2.2945, "category": "Modern", "rating": 4.8, "description": "Iconic iron lattice tower, symbol of Paris", "images": ["https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800"]},
        // Add more destinations as needed
    ]
};

// API endpoint to fetch beautiful destinations
app.get('/api/destinations', (req, res) => {
    res.json(DATABASE.destinations);
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});