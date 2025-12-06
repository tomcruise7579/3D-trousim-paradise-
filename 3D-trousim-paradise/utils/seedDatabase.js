const mongoose = require('mongoose');
const Destination = require('../models/Destination');

const destinations = [
    {"id": 1, "name": "Taj Mahal", "country": "India", "continent": "Asia", "lat": 27.1751, "lng": 78.0421, "category": "Historical", "rating": 4.9, "description": "Magnificent ivory-white marble mausoleum, UNESCO World Heritage Site", "images": ["https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800", "https://images.unsplash.com/photo-1548013146-72479768bada?w=800", "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=800", "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800", "https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?w=800"]},
    {"id": 2, "name": "Great Wall of China", "country": "China", "continent": "Asia", "lat": 40.4319, "lng": 116.5704, "category": "Historical", "rating": 4.8, "description": "Ancient fortification stretching over 13,000 miles", "images": ["https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800", "https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?w=800", "https://images.unsplash.com/photo-1571832744758-97111209befd?w=800", "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800"]},
    {"id": 3, "name": "Tokyo Tower", "country": "Japan", "continent": "Asia", "lat": 35.6586, "lng": 139.7454, "category": "Modern", "rating": 4.6, "description": "Communications tower inspired by Eiffel Tower", "images": ["https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800", "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800", "https://images.unsplash.com/photo-1542931287-023b922fa89b?w=800", "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800"]},
    {"id": 4, "name": "Angkor Wat", "country": "Cambodia", "continent": "Asia", "lat": 13.4125, "lng": 103.8670, "category": "Historical", "rating": 4.9, "description": "Largest religious monument in the world", "images": ["https://images.unsplash.com/photo-1539650116574-75c0c6d68e5d?w=800"]},
    {"id": 5, "name": "Burj Khalifa", "country": "UAE", "continent": "Asia", "lat": 25.1972, "lng": 55.2744, "category": "Modern", "rating": 4.7, "description": "World's tallest building at 828 meters", "images": ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800"]},
    {"id": 6, "name": "Eiffel Tower", "country": "France", "continent": "Europe", "lat": 48.8584, "lng": 2.2945, "category": "Modern", "rating": 4.8, "description": "Iconic iron lattice tower, symbol of Paris", "images": ["https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800"]},
    {"id": 7, "name": "Colosseum", "country": "Italy", "continent": "Europe", "lat": 41.8902, "lng": 12.4922, "category": "Historical", "rating": 4.9, "description": "Ancient Roman amphitheater, architectural marvel", "images": ["https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800"]},
    {"id": 8, "name": "Big Ben", "country": "UK", "continent": "Europe", "lat": 51.5007, "lng": -0.1246, "category": "Historical", "rating": 4.7, "description": "Famous clock tower at Palace of Westminster", "images": ["https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800"]},
    {"id": 9, "name": "Sagrada Familia", "country": "Spain", "continent": "Europe", "lat": 41.4036, "lng": 2.1744, "category": "Historical", "rating": 4.8, "description": "Gaudi's masterpiece basilica still under construction", "images": ["https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800"]},
    {"id": 10, "name": "Swiss Alps", "country": "Switzerland", "continent": "Europe", "lat": 46.5197, "lng": 7.9506, "category": "Natural", "rating": 4.9, "description": "Breathtaking mountain range for skiing and hiking", "images": ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"]},
    {"id": 11, "name": "Statue of Liberty", "country": "USA", "continent": "North America", "lat": 40.6892, "lng": -74.0445, "category": "Historical", "rating": 4.7, "description": "Symbol of freedom and democracy", "images": ["https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800"]},
    {"id": 12, "name": "Grand Canyon", "country": "USA", "continent": "North America", "lat": 36.1069, "lng": -112.1129, "category": "Natural", "rating": 4.9, "description": "Spectacular gorge carved by Colorado River", "images": ["https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800"]},
    {"id": 13, "name": "Niagara Falls", "country": "Canada/USA", "continent": "North America", "lat": 43.0896, "lng": -79.0849, "category": "Natural", "rating": 4.8, "description": "Powerful waterfalls on US-Canada border", "images": ["https://images.unsplash.com/photo-1489447068241-b3490214e879?w=800"]},
    {"id": 14, "name": "Golden Gate Bridge", "country": "USA", "continent": "North America", "lat": 37.8199, "lng": -122.4783, "category": "Modern", "rating": 4.8, "description": "Iconic suspension bridge in San Francisco", "images": ["https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800"]},
    {"id": 15, "name": "Machu Picchu", "country": "Peru", "continent": "South America", "lat": -13.1631, "lng": -72.5450, "category": "Historical", "rating": 4.9, "description": "Ancient Incan citadel high in Andes Mountains", "images": ["https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800"]},
    {"id": 16, "name": "Christ the Redeemer", "country": "Brazil", "continent": "South America", "lat": -22.9519, "lng": -43.2105, "category": "Spiritual", "rating": 4.8, "description": "Art Deco statue overlooking Rio de Janeiro", "images": ["https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800"]},
    {"id": 17, "name": "Iguazu Falls", "country": "Argentina/Brazil", "continent": "South America", "lat": -25.6953, "lng": -54.4367, "category": "Natural", "rating": 4.9, "description": "System of waterfalls on Iguazu River", "images": ["https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800"]},
    {"id": 18, "name": "Pyramids of Giza", "country": "Egypt", "continent": "Africa", "lat": 29.9792, "lng": 31.1342, "category": "Historical", "rating": 4.8, "description": "Ancient Egyptian pyramids and Great Sphinx", "images": ["https://images.unsplash.com/photo-1539650116574-75c0c6d68e5d?w=800"]},
    {"id": 19, "name": "Victoria Falls", "country": "Zambia/Zimbabwe", "continent": "Africa", "lat": -17.9243, "lng": 25.8572, "category": "Natural", "rating": 4.9, "description": "World's largest sheet of falling water", "images": ["https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800"]},
    {"id": 20, "name": "Sydney Opera House", "country": "Australia", "continent": "Oceania", "lat": -33.8568, "lng": 151.2153, "category": "Modern", "rating": 4.8, "description": "Multi-venue performing arts center with unique design", "images": ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"]},
    {"id": 21, "name": "Great Barrier Reef", "country": "Australia", "continent": "Oceania", "lat": -18.2871, "lng": 147.6992, "category": "Natural", "rating": 4.9, "description": "World's largest coral reef ecosystem", "images": ["https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800"]},
    {"id": 22, "name": "Mount Fuji", "country": "Japan", "continent": "Asia", "lat": 35.3606, "lng": 138.7274, "category": "Natural", "rating": 4.8, "description": "Sacred mountain and active stratovolcano", "images": ["https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800"]},
    {"id": 23, "name": "Santorini", "country": "Greece", "continent": "Europe", "lat": 36.3932, "lng": 25.4615, "category": "Natural", "rating": 4.8, "description": "Stunning Greek island with white-washed buildings", "images": ["https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800"]},
    {"id": 24, "name": "Petra", "country": "Jordan", "continent": "Asia", "lat": 30.3285, "lng": 35.4444, "category": "Historical", "rating": 4.8, "description": "Ancient city carved into red sandstone cliffs", "images": ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800"]},
    {"id": 25, "name": "Northern Lights", "country": "Iceland", "continent": "Europe", "lat": 64.9631, "lng": -19.0208, "category": "Natural", "rating": 4.9, "description": "Aurora borealis natural light phenomenon", "images": ["https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800"]}
];

async function seedDatabase() {
    try {
        // Check if destinations already exist
        const count = await Destination.countDocuments();
        
        if (count === 0) {
            console.log('Seeding database with destinations...');
            await Destination.insertMany(destinations);
            console.log('✓ Database seeded successfully with 25 destinations');
        } else {
            console.log(`✓ Database already seeded (${count} destinations found)`);
        }
    } catch (error) {
        console.error('Error seeding database:', error);
        throw error;
    }
}

module.exports = seedDatabase;
