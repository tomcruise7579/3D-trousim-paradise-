# Travel Paradise - Setup & Deployment Guide

## 📋 Project Overview

**3D Travel Simulation Paradise** is a full-stack travel exploration platform featuring:
- 🌍 Interactive 3D globe with Three.js
- 🗺️ Google Maps integration with route planning
- 🔐 Secure authentication with MongoDB
- ⭐ Destination reviews and ratings
- ❤️ Wishlist management
- 🛫 Trip planning functionality
- 📄 Pagination for efficient data loading

## 🚀 Quick Start

### Prerequisites

- **Node.js** v14+ ([download](https://nodejs.org/))
- **MongoDB** (local or MongoDB Atlas cloud)
- **npm** or **yarn**
- **Google Maps API Key** (get one [here](https://developers.google.com/maps/documentation/javascript/get-api-key))

### Installation

1. **Clone the repository:**
```bash
cd /workspaces/3D-trousim-paradise-/3D-trousim-paradise
npm install
```

2. **Setup environment variables:**
```bash
cp .env.example .env
```

3. **Edit `.env` with your configuration:**
```env
MONGODB_URI=mongodb://localhost:27017/travel-paradise
NODE_ENV=development
PORT=3000
JWT_SECRET=your_secure_jwt_secret_key
CORS_ORIGIN=http://localhost:3000
```

4. **Update Google Maps API key in `public/index.html`:**
```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=geometry,places,visualization"></script>
```

### Database Setup

#### Option 1: Local MongoDB
```bash
# Install MongoDB Community Edition
# macOS: brew install mongodb-community
# Ubuntu: sudo apt-get install -y mongodb
# Windows: Download from https://www.mongodb.com/try/download/community

# Start MongoDB service
mongod
```

#### Option 2: MongoDB Atlas (Cloud)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env`

### Running the Application

```bash
# Start the server
npm start

# Server will run on http://localhost:3000
```

The database will automatically seed with 25 destinations on first startup.

## 📂 Project Structure

```
3D-trousim-paradise/
├── server/
│   └── server.js              # Express server configuration
├── middleware/
│   └── auth.js               # JWT authentication middleware
├── models/
│   ├── User.js              # User schema with password hashing
│   ├── Destination.js       # Destination schema with text search
│   ├── Review.js            # Review schema
│   └── Trip.js              # Trip schema
├── routes/
│   ├── auth.js             # Authentication endpoints
│   ├── destinations.js     # Destination API with pagination
│   ├── reviews.js          # Review management
│   ├── wishlist.js         # Wishlist functionality
│   └── trips.js            # Trip planning
├── utils/
│   └── seedDatabase.js     # Database seeding
├── public/
│   ├── index.html          # Main HTML file
│   ├── style.css           # Design system and styles
│   ├── api-client.js       # REST API client
│   └── app.js              # Frontend application logic
└── .env                    # Environment variables (git-ignored)
```

## 🔑 Key Features

### 1. Pagination
- Load 10, 15, 20, or 30 items per page
- Smart page dots with ellipsis
- Prev/Next navigation buttons
- Jump to any page

**Frontend Implementation:**
```javascript
// Get destinations with pagination
const response = await travelAPI.getDestinations(
    currentPage,      // page number
    itemsPerPage,     // items per page (default: 10)
    currentFilters    // search/filter parameters
);

// Response includes pagination metadata
response.pagination = {
    current: 1,
    limit: 10,
    total: 25,
    pages: 3,
    hasNext: true,
    hasPrev: false
}
```

**Backend Implementation:**
```javascript
// Destinations endpoint supports pagination
GET /api/destinations?page=1&limit=10&search=&continent=All&category=All&rating=All
```

### 2. MongoDB Persistence
- All user data persists in MongoDB
- Automatic database seeding
- Proper indexes for search performance

### 3. Security Features
- **Password Hashing:** bcryptjs (10 salt rounds)
- **JWT Authentication:** 7-day expiration
- **Input Validation:** Server-side validation on all endpoints
- **CORS Protection:** Configurable CORS settings

### 4. API Endpoints

#### Authentication
```
POST   /api/auth/register       # Register new user
POST   /api/auth/login          # Login user
GET    /api/auth/profile        # Get current user profile (protected)
```

#### Destinations
```
GET    /api/destinations        # List destinations with pagination
GET    /api/destinations/:id    # Get single destination details
```

#### Reviews
```
GET    /api/reviews/destination/:id    # Get reviews for destination
POST   /api/reviews                     # Create review (protected)
```

#### Wishlist
```
GET    /api/wishlist                    # Get user's wishlist (protected)
POST   /api/wishlist/add/:id           # Add to wishlist (protected)
POST   /api/wishlist/remove/:id        # Remove from wishlist (protected)
```

#### Trips
```
GET    /api/trips                      # Get user's trips (protected)
POST   /api/trips                      # Create trip (protected)
PUT    /api/trips/:id                  # Update trip (protected)
DELETE /api/trips/:id                  # Delete trip (protected)
```

## 🎨 Pagination UI Components

The pagination system includes:

### Main Pagination Controls
- **Previous Button:** Navigate to previous page
- **Page Info:** Shows "Page X of Y"
- **Items Per Page:** Dropdown to select 10, 15, 20, or 30 items
- **Next Button:** Navigate to next page

### Page Dots
- Shows first page, last page, and nearby pages
- Ellipsis (...) for gaps
- Click any dot to jump to that page
- Active page highlighted

### Styles
```css
.pagination-controls        /* Main control container */
.pagination-btn            /* Previous/Next buttons */
.pagination-info           /* Page counter and size selector */
.pagination-dots           /* Page number dots */
.pagination-dot            /* Individual page dot */
.pagination-dot.active     /* Active page indicator */
.pagination-ellipsis       /* Gap indicator */
```

## 🔐 Authentication Flow

1. **Register:**
   - User provides name, email, password
   - Password hashed with bcryptjs
   - User created in MongoDB
   - JWT token generated and sent to client
   - Token stored in localStorage

2. **Login:**
   - User provides email, password
   - Password compared with hashed version
   - JWT token generated if valid
   - Token stored in localStorage

3. **Protected Routes:**
   - Token required in Authorization header
   - Format: `Authorization: Bearer <token>`
   - Token verified and decoded
   - User ID extracted from token

## 📊 Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (unique, required),
  password: String (hashed, required),
  wishlist: [ObjectId (Destination)],
  createdAt: Date
}
```

### Destination Model
```javascript
{
  name: String (required),
  country: String (required),
  continent: String (enum, required),
  lat: Number (required),
  lng: Number (required),
  category: String (enum: Historical/Natural/Modern/Spiritual),
  rating: Number (0-5),
  description: String (required),
  images: [String (URLs)],
  createdAt: Date,
  updatedAt: Date
}
```

### Review Model
```javascript
{
  destination: ObjectId (Destination, required),
  user: ObjectId (User, required),
  userName: String (required),
  rating: Number (1-5, required),
  comment: String (required, 10-1000 chars),
  createdAt: Date
}
```

### Trip Model
```javascript
{
  user: ObjectId (User, required),
  name: String (required),
  startDate: Date (required),
  endDate: Date (required, after startDate),
  places: [ObjectId (Destination)],
  description: String,
  createdAt: Date
}
```

## 🚢 Deployment

### Deploy to Heroku

1. **Install Heroku CLI:**
```bash
npm install -g heroku
```

2. **Create Heroku app:**
```bash
heroku create your-app-name
```

3. **Set environment variables:**
```bash
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_jwt_secret
heroku config:set NODE_ENV=production
```

4. **Deploy:**
```bash
git push heroku main
```

### Deploy to AWS, Google Cloud, or Azure

1. Create account and set up Node.js environment
2. Set environment variables
3. Deploy using their respective CLI tools
4. Ensure MongoDB instance is accessible

## 🐛 Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:** Ensure MongoDB is running locally or update `MONGODB_URI` to your cloud instance.

### JWT Token Errors
```
Error: invalid token
```
**Solution:** Check that `JWT_SECRET` matches on server and ensure token hasn't expired (7 days).

### CORS Errors
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solution:** Update `CORS_ORIGIN` in `.env` and in `index.html` API scripts.

### Google Maps Not Loading
```
Google Maps API error: InvalidKeyMapError
```
**Solution:** Verify your API key is valid and has Maps JavaScript API enabled.

## 📈 Performance Optimization

### Current Optimizations
- ✅ Pagination reduces DOM elements
- ✅ MongoDB text indexes for search
- ✅ Request throttling on frontend
- ✅ Lazy loading for images
- ✅ Connection pooling with Mongoose

### Future Improvements
- Implement caching layer (Redis)
- Add CDN for static assets
- Implement image optimization (WebP, lazy loading)
- Add rate limiting for API endpoints
- Implement database query optimization

## 📚 API Client Usage

```javascript
// Initialize API client (already done in app.js)
const api = new TravelAPIClient('http://localhost:3000');

// Example: Get destinations with pagination
const page1 = await api.getDestinations(1, 10, {
    search: 'taj',
    continent: 'Asia',
    category: 'Historical',
    rating: '4.8'
});

// Example: Create review (requires authentication)
const review = await api.createReview(
    destinationId,
    rating,        // 1-5
    comment        // user's review text
);

// Example: Add to wishlist
const wishlist = await api.addToWishlist(destinationId);
```

## 🔄 Migration from In-Memory DB

The project successfully migrated from in-memory database to MongoDB:

**Before:**
- All data lost on server restart
- No persistence
- Limited scalability

**After:**
- Data persists in MongoDB
- Proper user authentication
- Scalable architecture
- Support for production deployments

## 📝 Development Tips

1. **Use MongoDB Compass** for visual database management
2. **Use Postman** to test API endpoints
3. **Enable debug mode:** Set `NODE_ENV=development`
4. **Check server logs** for detailed error messages
5. **Use browser DevTools** to inspect network requests

## 🤝 Contributing

To add new features:

1. Create route file in `/routes`
2. Create model in `/models` if needed
3. Update API client in `/public/api-client.js`
4. Update frontend in `/public/app.js`
5. Test thoroughly before committing

## 📄 License

This project is provided as-is for educational and personal use.

## ❓ Support

For issues or questions, check:
- MongoDB documentation: https://docs.mongodb.com
- Express.js: https://expressjs.com
- Three.js: https://threejs.org
- Google Maps API: https://developers.google.com/maps
