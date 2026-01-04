// ===========================================
// BACKEND API SIMULATION
// ===========================================

// Simulated Database (In-Memory Storage)
const DATABASE = {
    destinations: [
        {"id": 1, "name": "Taj Mahal", "country": "India", "continent": "Asia", "lat": 27.1751, "lng": 78.0421, "category": "Historical", "rating": 4.9, "description": "Magnificent ivory-white marble mausoleum, UNESCO World Heritage Site", "images": ["https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800", "https://images.unsplash.com/photo-1548013146-72479768bada?w=800", "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=800", "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800", "https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?w=800"]},
        {"id": 2, "name": "Great Wall of China", "country": "China", "continent": "Asia", "lat": 40.4319, "lng": 116.5704, "category": "Historical", "rating": 4.8, "description": "Ancient fortification stretching over 13,000 miles", "images": ["https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800", "https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?w=800", "https://images.unsplash.com/photo-1571832744758-97111209befd?w=800", "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800"]},
        {"id": 3, "name": "Tokyo Tower", "country": "Japan", "continent": "Asia", "lat": 35.6586, "lng": 139.7454, "category": "Modern", "rating": 4.6, "description": "Communications tower inspired by Eiffel Tower", "images": ["https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800", "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800", "https://images.unsplash.com/photo-1542931287-023b922fa89b?w=800", "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800"]},
        {"id": 4, "name": "Angkor Wat", "country": "Cambodia", "continent": "Asia", "lat": 13.4125, "lng": 103.8670, "category": "Historical", "rating": 4.9, "description": "Largest religious monument in the world", "imageUrl": "https://images.unsplash.com/photo-1539650116574-75c0c6d68e5d?w=800"},
        {"id": 5, "name": "Burj Khalifa", "country": "UAE", "continent": "Asia", "lat": 25.1972, "lng": 55.2744, "category": "Modern", "rating": 4.7, "description": "World's tallest building at 828 meters", "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800"},
        {"id": 6, "name": "Eiffel Tower", "country": "France", "continent": "Europe", "lat": 48.8584, "lng": 2.2945, "category": "Modern", "rating": 4.8, "description": "Iconic iron lattice tower, symbol of Paris", "imageUrl": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800"},
        {"id": 7, "name": "Colosseum", "country": "Italy", "continent": "Europe", "lat": 41.8902, "lng": 12.4922, "category": "Historical", "rating": 4.9, "description": "Ancient Roman amphitheater, architectural marvel", "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800"},
        {"id": 8, "name": "Big Ben", "country": "UK", "continent": "Europe", "lat": 51.5007, "lng": -0.1246, "category": "Historical", "rating": 4.7, "description": "Famous clock tower at Palace of Westminster", "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800"},
        {"id": 9, "name": "Sagrada Familia", "country": "Spain", "continent": "Europe", "lat": 41.4036, "lng": 2.1744, "category": "Historical", "rating": 4.8, "description": "Gaudi's masterpiece basilica still under construction", "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800"},
        {"id": 10, "name": "Swiss Alps", "country": "Switzerland", "continent": "Europe", "lat": 46.5197, "lng": 7.9506, "category": "Natural", "rating": 4.9, "description": "Breathtaking mountain range for skiing and hiking", "imageUrl": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"},
        {"id": 11, "name": "Statue of Liberty", "country": "USA", "continent": "North America", "lat": 40.6892, "lng": -74.0445, "category": "Historical", "rating": 4.7, "description": "Symbol of freedom and democracy", "imageUrl": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800"},
        {"id": 12, "name": "Grand Canyon", "country": "USA", "continent": "North America", "lat": 36.1069, "lng": -112.1129, "category": "Natural", "rating": 4.9, "description": "Spectacular gorge carved by Colorado River", "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800"},
        {"id": 13, "name": "Niagara Falls", "country": "Canada/USA", "continent": "North America", "lat": 43.0896, "lng": -79.0849, "category": "Natural", "rating": 4.8, "description": "Powerful waterfalls on US-Canada border", "imageUrl": "https://images.unsplash.com/photo-1489447068241-b3490214e879?w=800"},
        {"id": 14, "name": "Golden Gate Bridge", "country": "USA", "continent": "North America", "lat": 37.8199, "lng": -122.4783, "category": "Modern", "rating": 4.8, "description": "Iconic suspension bridge in San Francisco", "imageUrl": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800"},
        {"id": 15, "name": "Machu Picchu", "country": "Peru", "continent": "South America", "lat": -13.1631, "lng": -72.5450, "category": "Historical", "rating": 4.9, "description": "Ancient Incan citadel high in Andes Mountains", "imageUrl": "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800"},
        {"id": 16, "name": "Christ the Redeemer", "country": "Brazil", "continent": "South America", "lat": -22.9519, "lng": -43.2105, "category": "Spiritual", "rating": 4.8, "description": "Art Deco statue overlooking Rio de Janeiro", "imageUrl": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800"},
        {"id": 17, "name": "Iguazu Falls", "country": "Argentina/Brazil", "continent": "South America", "lat": -25.6953, "lng": -54.4367, "category": "Natural", "rating": 4.9, "description": "System of waterfalls on Iguazu River", "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800"},
        {"id": 18, "name": "Pyramids of Giza", "country": "Egypt", "continent": "Africa", "lat": 29.9792, "lng": 31.1342, "category": "Historical", "rating": 4.8, "description": "Ancient Egyptian pyramids and Great Sphinx", "imageUrl": "https://images.unsplash.com/photo-1539650116574-75c0c6d68e5d?w=800"},
        {"id": 19, "name": "Victoria Falls", "country": "Zambia/Zimbabwe", "continent": "Africa", "lat": -17.9243, "lng": 25.8572, "category": "Natural", "rating": 4.9, "description": "World's largest sheet of falling water", "imageUrl": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800"},
        {"id": 20, "name": "Sydney Opera House", "country": "Australia", "continent": "Oceania", "lat": -33.8568, "lng": 151.2153, "category": "Modern", "rating": 4.8, "description": "Multi-venue performing arts center with unique design", "imageUrl": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"},
        {"id": 21, "name": "Great Barrier Reef", "country": "Australia", "continent": "Oceania", "lat": -18.2871, "lng": 147.6992, "category": "Natural", "rating": 4.9, "description": "World's largest coral reef ecosystem", "imageUrl": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800"},
        {"id": 22, "name": "Mount Fuji", "country": "Japan", "continent": "Asia", "lat": 35.3606, "lng": 138.7274, "category": "Natural", "rating": 4.8, "description": "Sacred mountain and active stratovolcano", "imageUrl": "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800"},
        {"id": 23, "name": "Santorini", "country": "Greece", "continent": "Europe", "lat": 36.3932, "lng": 25.4615, "category": "Natural", "rating": 4.8, "description": "Stunning Greek island with white-washed buildings", "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800"},
        {"id": 24, "name": "Petra", "country": "Jordan", "continent": "Asia", "lat": 30.3285, "lng": 35.4444, "category": "Historical", "rating": 4.8, "description": "Ancient city carved into red sandstone cliffs", "imageUrl": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800"},
        {"id": 25, "name": "Northern Lights", "country": "Iceland", "continent": "Europe", "lat": 64.9631, "lng": -19.0208, "category": "Natural", "rating": 4.9, "description": "Aurora borealis natural light phenomenon", "imageUrl": "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800"}
    ],
    users: [
        {"id": 1, "email": "demo@travel.com", "password": "demo123", "name": "Demo User", "wishlist": [1, 6, 12], "createdAt": "2024-01-01"}
    ],
    reviews: [
        {"id": 1, "placeId": 1, "userId": 1, "userName": "Demo User", "rating": 5, "comment": "Absolutely breathtaking! The marble work is incredible.", "createdAt": "2024-01-15"},
        {"id": 2, "placeId": 6, "userId": 1, "userName": "Demo User", "rating": 5, "comment": "Iconic landmark that exceeded expectations. Beautiful at night!", "createdAt": "2024-02-10"},
        {"id": 3, "placeId": 12, "userId": 1, "userName": "Demo User", "rating": 5, "comment": "Nature's masterpiece. Photos don't do it justice!", "createdAt": "2024-03-05"}
    ],
    trips: [
        {"id": 1, "userId": 1, "name": "European Adventure", "startDate": "2024-06-01", "endDate": "2024-06-15", "places": [6, 7, 9, 23], "createdAt": "2024-04-01"}
    ]
};

// Simulated Backend API Class
class TravelAPI {
    constructor() {
        this.db = DATABASE;
        this.currentUserId = null;
        this.jwtToken = null;
    }

    // Utility functions
    generateId(collection) {
        const items = this.db[collection];
        return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
    }

    getCurrentDate() {
        return new Date().toISOString().split('T')[0];
    }

    validateAuth() {
        return this.currentUserId !== null;
    }

    // Authentication Endpoints
    async register(userData) {
        try {
            const { name, email, password } = userData;
            
            // Check if user already exists
            const existingUser = this.db.users.find(user => user.email === email);
            if (existingUser) {
                throw new Error('User already exists with this email');
            }

            // Create new user
            const newUser = {
                id: this.generateId('users'),
                name,
                email,
                password, // In real app, this would be hashed
                wishlist: [],
                createdAt: this.getCurrentDate()
            };

            this.db.users.push(newUser);

            // Generate JWT token (simulated)
            this.jwtToken = `jwt_${newUser.id}_${Date.now()}`;
            this.currentUserId = newUser.id;

            return {
                success: true,
                user: { id: newUser.id, name: newUser.name, email: newUser.email },
                token: this.jwtToken
            };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async login(credentials) {
        try {
            const { email, password } = credentials;
            
            // Find user
            const user = this.db.users.find(u => u.email === email && u.password === password);
            if (!user) {
                throw new Error('Invalid email or password');
            }

            // Generate JWT token (simulated)
            this.jwtToken = `jwt_${user.id}_${Date.now()}`;
            this.currentUserId = user.id;

            return {
                success: true,
                user: { id: user.id, name: user.name, email: user.email },
                token: this.jwtToken
            };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async getProfile() {
        try {
            if (!this.validateAuth()) {
                throw new Error('Not authenticated');
            }

            const user = this.db.users.find(u => u.id === this.currentUserId);
            if (!user) {
                throw new Error('User not found');
            }

            return {
                success: true,
                user: { id: user.id, name: user.name, email: user.email, wishlist: user.wishlist }
            };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    logout() {
        this.currentUserId = null;
        this.jwtToken = null;
        return { success: true };
    }

    // Places Endpoints - Fixed filtering logic
    async getPlaces(filters = {}) {
        try {
            let places = [...this.db.destinations];

            // Apply search filter first
            if (filters.search && filters.search.trim() !== '') {
                const searchTerm = filters.search.toLowerCase().trim();
                places = places.filter(p => 
                    p.name.toLowerCase().includes(searchTerm) ||
                    p.country.toLowerCase().includes(searchTerm) ||
                    p.description.toLowerCase().includes(searchTerm)
                );
            }

            // Apply continent filter
            if (filters.continent && filters.continent !== 'All') {
                places = places.filter(p => p.continent === filters.continent);
            }
            
            // Apply category filter
            if (filters.category && filters.category !== 'All') {
                places = places.filter(p => p.category === filters.category);
            }
            
            // Apply rating filter
            if (filters.rating && filters.rating !== 'All') {
                const minRating = parseFloat(filters.rating);
                places = places.filter(p => p.rating >= minRating);
            }

            return { success: true, places };
        } catch (error) {
            return { success: false, error: error.message, places: [] };
        }
    }

    async getPlace(id) {
        try {
            const place = this.db.destinations.find(p => p.id === parseInt(id));
            if (!place) {
                throw new Error('Place not found');
            }

            // Get reviews for this place
            const reviews = this.db.reviews.filter(r => r.placeId === place.id);

            return { 
                success: true, 
                place: {
                    ...place,
                    reviewCount: reviews.length,
                    reviews
                }
            };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // Reviews Endpoints
    async createReview(reviewData) {
        try {
            if (!this.validateAuth()) {
                throw new Error('Authentication required');
            }

            const { placeId, rating, comment } = reviewData;
            const user = this.db.users.find(u => u.id === this.currentUserId);

            const newReview = {
                id: this.generateId('reviews'),
                placeId: parseInt(placeId),
                userId: this.currentUserId,
                userName: user.name,
                rating: parseInt(rating),
                comment,
                createdAt: this.getCurrentDate()
            };

            this.db.reviews.push(newReview);

            return { success: true, review: newReview };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async getReviews(placeId) {
        try {
            const reviews = this.db.reviews.filter(r => r.placeId === parseInt(placeId));
            return { success: true, reviews };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // Wishlist Endpoints
    async getWishlist() {
        try {
            if (!this.validateAuth()) {
                throw new Error('Authentication required');
            }

            const user = this.db.users.find(u => u.id === this.currentUserId);
            const wishlistPlaces = this.db.destinations.filter(p => user.wishlist.includes(p.id));

            return { success: true, wishlist: wishlistPlaces };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async addToWishlist(placeId) {
        try {
            if (!this.validateAuth()) {
                throw new Error('Authentication required');
            }

            const user = this.db.users.find(u => u.id === this.currentUserId);
            const id = parseInt(placeId);

            if (!user.wishlist.includes(id)) {
                user.wishlist.push(id);
                return { success: true, message: 'Added to wishlist' };
            } else {
                return { success: false, error: 'Already in wishlist' };
            }
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async removeFromWishlist(placeId) {
        try {
            if (!this.validateAuth()) {
                throw new Error('Authentication required');
            }

            const user = this.db.users.find(u => u.id === this.currentUserId);
            const id = parseInt(placeId);
            const index = user.wishlist.indexOf(id);

            if (index > -1) {
                user.wishlist.splice(index, 1);
                return { success: true, message: 'Removed from wishlist' };
            } else {
                return { success: false, error: 'Not in wishlist' };
            }
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // Trips Endpoints
    async createTrip(tripData) {
        try {
            if (!this.validateAuth()) {
                throw new Error('Authentication required');
            }

            const { name, startDate, endDate, places } = tripData;

            const newTrip = {
                id: this.generateId('trips'),
                userId: this.currentUserId,
                name,
                startDate,
                endDate,
                places: places || [],
                createdAt: this.getCurrentDate()
            };

            this.db.trips.push(newTrip);

            return { success: true, trip: newTrip };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async getTrips() {
        try {
            if (!this.validateAuth()) {
                throw new Error('Authentication required');
            }

            const trips = this.db.trips.filter(t => t.userId === this.currentUserId);
            
            // Enrich trips with destination details
            const enrichedTrips = trips.map(trip => ({
                ...trip,
                destinations: this.db.destinations.filter(d => trip.places.includes(d.id))
            }));

            return { success: true, trips: enrichedTrips };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}

// ===========================================
// FRONTEND APPLICATION
// ===========================================

// Global variables
let api = new TravelAPI();
let map;
let directionsService;
let directionsRenderer;
let userLocation = null;
let filteredDestinations = [];
let allDestinations = []; // Store all destinations
let currentUser = null;
let currentTravelMode = 'DRIVING';
let currentRouteDestination = null; // Track active route destination
let trafficLayer;
let markers = [];

// 3D Globe variables
let scene, camera, renderer, globe, controls;
let isDragging = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    hideLoadingOverlay();
    initializeEventListeners();
    loadInitialData();
    
    // Check for existing session
    const savedToken = localStorage.getItem('travel_token');
    const savedUser = localStorage.getItem('travel_user');
    if (savedToken && savedUser) {
        currentUser = JSON.parse(savedUser);
        api.jwtToken = savedToken;
        api.currentUserId = currentUser.id;
        updateAuthUI();
        loadUserData();
    }
    
    // Initialize 3D globe
    setTimeout(() => {
        initialize3DGlobe();
    }, 100);
    
    // Initialize map with delay
    setTimeout(() => {
        console.log('Attempting to initialize map...');
        console.log('Google Maps loaded:', typeof google !== 'undefined' && google.maps);
        initializeMap();
        getUserLocation();
    }, 500);
});

// ===========================================
// DATA LOADING AND API INTEGRATION
// ===========================================

async function loadInitialData() {
    showLoading('Loading destinations...');
    
    try {
        const response = await api.getPlaces();
        if (response.success) {
            allDestinations = response.places;
            filteredDestinations = [...allDestinations];
            renderDestinationCards();
            updateResultsCounter();
        } else {
            showToast('Error loading destinations: ' + response.error, 'error');
        }
    } catch (error) {
        console.error('Error loading data:', error);
        showToast('Failed to load destinations', 'error');
    } finally {
        hideLoadingOverlay();
    }
}

async function loadUserData() {
    if (!currentUser) return;

    try {
        // Load wishlist
        const wishlistResponse = await api.getWishlist();
        if (wishlistResponse.success) {
            updateWishlistUI(wishlistResponse.wishlist);
        }

        // Load trips
        const tripsResponse = await api.getTrips();
        if (tripsResponse.success) {
            updateTripsUI(tripsResponse.trips);
        }
    } catch (error) {
        console.error('Error loading user data:', error);
    }
}

// ===========================================
// AUTHENTICATION FUNCTIONS
// ===========================================

function openAuthModal(mode = 'login') {
    const modal = document.getElementById('auth-modal');
    const title = document.getElementById('auth-title');
    const nameGroup = document.getElementById('name-group');
    const submitText = document.getElementById('auth-submit-text');
    const toggleText = document.getElementById('auth-toggle-text');
    const form = document.getElementById('auth-form');

    form.setAttribute('data-mode', mode);
    
    if (mode === 'login') {
        title.textContent = 'Login';
        nameGroup.style.display = 'none';
        submitText.textContent = 'Login';
        toggleText.textContent = "Don't have an account? Register";
    } else {
        title.textContent = 'Register';
        nameGroup.style.display = 'block';
        submitText.textContent = 'Register';
        toggleText.textContent = 'Already have an account? Login';
    }
    
    modal.classList.remove('hidden');
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    modal.classList.add('hidden');
    document.getElementById('auth-form').reset();
}

// Navigation fix - Add click handler for logo
function initializeNavigation() {
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('hero').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
        logo.style.cursor = 'pointer';
    }
}

// ===========================================
// EVENT LISTENERS AND UI INTERACTIONS
// ===========================================

function initializeEventListeners() {
    // Initialize navigation
    initializeNavigation();
    
    // Auth toggle
    const authToggle = document.getElementById('auth-toggle');
    if (authToggle) {
        authToggle.addEventListener('click', function() {
            const form = document.getElementById('auth-form');
            const currentMode = form.getAttribute('data-mode');
            const newMode = currentMode === 'login' ? 'register' : 'login';
            openAuthModal(newMode);
        });
    }

    // Auth form submission
    const authForm = document.getElementById('auth-form');
    if (authForm) {
        authForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const mode = this.getAttribute('data-mode');
            const email = document.getElementById('auth-email').value;
            const password = document.getElementById('auth-password').value;
            const name = document.getElementById('auth-name').value;
            
            showLoading(mode === 'login' ? 'Logging in...' : 'Creating account...');
            
            try {
                let response;
                if (mode === 'login') {
                    response = await api.login({ email, password });
                } else {
                    response = await api.register({ name, email, password });
                }
                
                if (response.success) {
                    currentUser = response.user;
                    localStorage.setItem('travel_token', response.token);
                    localStorage.setItem('travel_user', JSON.stringify(response.user));
                    
                    updateAuthUI();
                    closeAuthModal();
                    loadUserData();
                    
                    showToast(`Welcome ${response.user.name}!`, 'success');
                } else {
                    showToast(response.error, 'error');
                }
            } catch (error) {
                showToast('Authentication failed', 'error');
            } finally {
                hideLoadingOverlay();
            }
        });
    }
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Filter buttons
    const continentFilters = document.getElementById('continent-filters');
    if (continentFilters) {
        continentFilters.addEventListener('click', handleContinentFilter);
    }
    
    const categoryFilters = document.getElementById('category-filters');
    if (categoryFilters) {
        categoryFilters.addEventListener('click', handleCategoryFilter);
    }
    
    const ratingFilters = document.getElementById('rating-filters');
    if (ratingFilters) {
        ratingFilters.addEventListener('click', handleRatingFilter);
    }
    
    // Map controls
    const trafficToggle = document.getElementById('traffic-toggle');
    if (trafficToggle) {
        trafficToggle.addEventListener('click', toggleTraffic);
    }
    
    const clearRouteBtn = document.getElementById('clear-route');
    if (clearRouteBtn) {
        clearRouteBtn.addEventListener('click', clearRoute);
    }
    
    // Travel mode buttons
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', handleTravelModeChange);
    });
    
    // Smooth scrolling for navigation links
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('nav-link') && event.target.getAttribute('href')?.startsWith('#')) {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
}

function logout() {
    api.logout();
    currentUser = null;
    localStorage.removeItem('travel_token');
    localStorage.removeItem('travel_user');
    updateAuthUI();
    
    // Reset to show all destinations
    filteredDestinations = [...allDestinations];
    renderDestinationCards();
    updateResultsCounter();
    
    showToast('Logged out successfully', 'success');
}

function updateAuthUI() {
    const loginBtn = document.getElementById('login-btn');
    const heroAuthBtn = document.getElementById('hero-auth-btn');
    const userMenu = document.getElementById('user-menu');
    const userName = document.getElementById('user-name');
    const newTripBtn = document.getElementById('new-trip-btn');
    const tripsContainer = document.getElementById('trips-container');
    
    if (currentUser) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (heroAuthBtn) heroAuthBtn.style.display = 'none';
        if (userMenu) userMenu.classList.remove('hidden');
        if (userName) userName.textContent = currentUser.name;
        if (newTripBtn) newTripBtn.style.display = 'block';
        
        // Remove login prompt from trips section
        const placeholder = tripsContainer?.querySelector('.trip-placeholder');
        if (placeholder) {
            placeholder.remove();
        }
    } else {
        if (loginBtn) loginBtn.style.display = 'block';
        if (heroAuthBtn) heroAuthBtn.style.display = 'block';
        if (userMenu) userMenu.classList.add('hidden');
        if (newTripBtn) newTripBtn.style.display = 'none';
        
        // Show login prompt
        if (tripsContainer) {
            tripsContainer.innerHTML = `
                <div class="trip-placeholder">
                    <h3>Start Planning Your Adventure</h3>
                    <p>Login to create custom trip plans and save your favorite destinations</p>
                    <button class="btn btn--primary" onclick="openAuthModal('login')">Get Started</button>
                </div>
            `;
        }
    }
}

function scrollToDestinations() {
    const destinationsSection = document.getElementById('destinations');
    if (destinationsSection) {
        destinationsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

async function handleSearch(event) {
    const query = event.target.value.toLowerCase().trim();
    await filterDestinations({ search: query });
}

async function handleContinentFilter(event) {
    if (event.target.classList.contains('filter-btn')) {
        document.querySelectorAll('#continent-filters .filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
        
        const continent = event.target.dataset.continent;
        await filterDestinations({ continent });
    }
}

async function handleCategoryFilter(event) {
    if (event.target.classList.contains('filter-btn')) {
        document.querySelectorAll('#category-filters .filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
        
        const category = event.target.dataset.category;
        await filterDestinations({ category });
    }
}

async function handleRatingFilter(event) {
    if (event.target.classList.contains('filter-btn')) {
        document.querySelectorAll('#rating-filters .filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
        
        const rating = event.target.dataset.rating;
        await filterDestinations({ rating });
    }
}

// Fixed filtering function
async function filterDestinations(newFilters = {}) {
    // Get current filter states
    const currentFilters = {
        search: document.getElementById('search-input')?.value || '',
        continent: document.querySelector('#continent-filters .filter-btn.active')?.dataset.continent || 'All',
        category: document.querySelector('#category-filters .filter-btn.active')?.dataset.category || 'All',
        rating: document.querySelector('#rating-filters .filter-btn.active')?.dataset.rating || 'All',
    };

    // Apply new filters
    const filters = { ...currentFilters, ...newFilters };
    
    try {
        const response = await api.getPlaces(filters);
        if (response.success) {
            filteredDestinations = response.places;
            renderDestinationCards();
            updateResultsCounter();
            
            // Update map markers
            if (map) {
                addMarkersToMap();
            }
        } else {
            console.error('Filter error:', response.error);
            // Fallback to show all destinations
            filteredDestinations = [...allDestinations];
            renderDestinationCards();
            updateResultsCounter();
        }
    } catch (error) {
        console.error('Error filtering destinations:', error);
        // Fallback to show all destinations
        filteredDestinations = [...allDestinations];
        renderDestinationCards();
        updateResultsCounter();
    }
}

function updateResultsCounter() {
    const counter = document.getElementById('results-count');
    if (counter) {
        counter.textContent = filteredDestinations.length;
    }
}

function renderDestinationCards() {
    const container = document.getElementById('destinations-grid');
    if (!container) return;

    const list = (filteredDestinations && filteredDestinations.length) ? filteredDestinations : allDestinations;

    container.innerHTML = list.map(destination => {
        const imageUrl = (destination.images && destination.images.length) ? destination.images[0] : (destination.imageUrl || '');
        const inWishlist = isInWishlist(destination.id);
        const roundedRating = Math.round(destination.rating);
        const stars = '⭐'.repeat(roundedRating);
        const shortDesc = destination.description && destination.description.length > 120 ? destination.description.slice(0, 117) + '...' : (destination.description || '');

        return `
        <article class="destination-card card" aria-labelledby="dest-${destination.id}-title" onclick="showQuickView('${destination._id || destination.id}')">
            <div class="card-image" style="background-image: url('${imageUrl}');">
                <div class="card-image-overlay">
                    <button class="favorite-btn ${inWishlist ? 'favorited' : ''}" aria-pressed="${inWishlist}" aria-label="${inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}" onclick="event.stopPropagation(); toggleWishlist('${destination._id || destination.id}')">
                        ${inWishlist ? '♥' : '♡'}
                    </button>
                    <div class="card-rating" title="Rating: ${destination.rating}">
                        <span class="score">${destination.rating}</span>
                        <span class="stars">${stars}</span>
                    </div>
                </div>
            </div>

            <div class="card-content">
                <header class="card-header">
                    <h3 id="dest-${destination.id}-title" class="card-title">${destination.name}</h3>
                    <div class="card-location">${destination.country} • ${destination.continent}</div>
                </header>

                <div class="card-info">
                    <div class="category-badge ${destination.category ? destination.category.toLowerCase() : ''}">${destination.category || ''}</div>
                    <p class="card-description">${shortDesc}</p>
                </div>

                <div class="card-actions">
                    <button class="plan-route-btn btn btn--secondary" onclick="event.stopPropagation(); planRoute('${destination._id || destination.id}')">Plan Route</button>
                    <button class="view-details-btn btn btn--primary" onclick="event.stopPropagation(); showDestinationDetails('${destination._id || destination.id}')">View Details</button>
                </div>
            </div>
        </article>
        `;
    }).join('');
}

function resetFilters() {
    // Reset filter UI
    document.querySelectorAll('.filter-btn.active').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.filter-btn[data-continent="All"], .filter-btn[data-category="All"], .filter-btn[data-rating="All"]').forEach(btn => btn.classList.add('active'));
    document.getElementById('search-input').value = '';
    
    // Reset data
    filteredDestinations = [...allDestinations];
    renderDestinationCards();
    updateResultsCounter();
    
    if (map) {
        addMarkersToMap();
    }
}

function getDestinationEmoji(category) {
    const emojis = {
        'Historical': '🏛️',
        'Natural': '🏔️',
        'Modern': '🏙️',
        'Spiritual': '🕉️'
    };
    return emojis[category] || '📍';
}
function isInWishlist(destinationId) {
    if (!currentUser) return false;
    
    // Convert to number for comparison (handle string IDs from onclick)
    const numId = parseInt(destinationId, 10);
    const user = api.db.users.find(u => u.id === currentUser.id);
    
    if (!user || !user.wishlist) return false;
    
    // Check both numeric and potential string comparisons
    return user.wishlist.includes(numId) || user.wishlist.includes(destinationId);
}

// ===========================================
// 3D GLOBE FUNCTIONALITY (unchanged)
// ===========================================

function initialize3DGlobe() {
    const container = document.getElementById('globe-container');
    if (!container || typeof THREE === 'undefined') {
        console.warn('Three.js not loaded or container not found');
        return;
    }
    
    try {
        // Scene setup
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);
        
        // Create globe geometry
        const geometry = new THREE.SphereGeometry(2, 64, 32);
        
        // Create earth-like material with texture simulation
        const material = new THREE.MeshPhongMaterial({
            color: 0x2196f3,
            shininess: 30,
            transparent: true,
            opacity: 0.9
        });
        
        globe = new THREE.Mesh(geometry, material);
        scene.add(globe);
        
        // Add atmosphere glow
        const atmosphereGeometry = new THREE.SphereGeometry(2.1, 64, 32);
        const atmosphereMaterial = new THREE.MeshBasicMaterial({
            color: 0x00bcd4,
            transparent: true,
            opacity: 0.1,
            side: THREE.BackSide
        });
        const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
        scene.add(atmosphere);
        
        // Add destination markers
        addDestinationMarkers();
        
        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 3, 5);
        scene.add(directionalLight);
        
        // Camera position
        camera.position.z = 5;
        
        // Start animation
        animate3DGlobe();
        
        // Add mouse interaction
        addGlobeInteraction(container);
        
        // Handle window resize
        window.addEventListener('resize', onWindowResize, false);
        
    } catch (error) {
        console.warn('Error initializing 3D globe:', error);
    }
}

function addDestinationMarkers() {
    if (!scene) return;
    
    const markerGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff4444 });
    
    DATABASE.destinations.forEach(destination => {
        // Convert lat/lng to 3D coordinates
        const phi = (90 - destination.lat) * Math.PI / 180;
        const theta = (destination.lng + 180) * Math.PI / 180;
        
        const x = -2.02 * Math.sin(phi) * Math.cos(theta);
        const y = 2.02 * Math.cos(phi);
        const z = 2.02 * Math.sin(phi) * Math.sin(theta);
        
        const marker = new THREE.Mesh(markerGeometry, markerMaterial);
        marker.position.set(x, y, z);
        scene.add(marker);
    });
}

function addGlobeInteraction(container) {
    let previousMousePosition = { x: 0, y: 0 };
    
    container.addEventListener('mousedown', function(event) {
        isDragging = true;
        previousMousePosition = { x: event.clientX, y: event.clientY };
        container.style.cursor = 'grabbing';
    });
    
    container.addEventListener('mousemove', function(event) {
        if (!isDragging || !globe) return;
        
        const deltaMove = {
            x: event.clientX - previousMousePosition.x,
            y: event.clientY - previousMousePosition.y
        };
        
        globe.rotation.y += deltaMove.x * 0.005;
        globe.rotation.x += deltaMove.y * 0.005;
        
        previousMousePosition = { x: event.clientX, y: event.clientY };
    });
    
    container.addEventListener('mouseup', function() {
        isDragging = false;
        container.style.cursor = 'grab';
    });
    
    container.addEventListener('mouseleave', function() {
        isDragging = false;
        container.style.cursor = 'grab';
    });
    
    container.style.cursor = 'grab';
}

function animate3DGlobe() {
    requestAnimationFrame(animate3DGlobe);
    
    if (!isDragging && globe) {
        globe.rotation.y += 0.005;
    }
    
    if (renderer && scene && camera) {
        renderer.render(scene, camera);
    }
}

function onWindowResize() {
    const container = document.getElementById('globe-container');
    if (camera && renderer && container) {
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
    }
}

// ===========================================
// GOOGLE MAPS INTEGRATION
// ===========================================

function initializeMap() {
    const mapContainer = document.getElementById('google-map');
    
    if (!mapContainer) {
        console.error('Map container not found');
        return;
    }
    
    // Wait for Google Maps API to load
    if (typeof google === 'undefined' || !google.maps) {
        // Retry after 1 second if Google Maps not loaded
        setTimeout(initializeMap, 1000);
        
        mapContainer.innerHTML = 
            `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: linear-gradient(135deg, #00bcd4, #4a90e2); color: white; font-size: 18px; text-align: center; padding: 20px; border-radius: 8px; gap: 16px;">
                <div style="font-size: 48px;">⏳</div>
                <div>
                    <h3 style="margin: 0; font-size: 24px;">Loading Map...</h3>
                    <p style="margin: 8px 0 0 0; opacity: 0.9; font-size: 16px;">Initializing Google Maps</p>
                </div>
            </div>`;
        return;
    }

    try {
        map = new google.maps.Map(mapContainer, {
            zoom: 2,
            center: { lat: 20, lng: 0 },
            styles: [
                { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#00bcd4' }, { lightness: 17 }] },
                { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#f5f5f5' }, { lightness: 20 }] },
                { featureType: 'road.highway', elementType: 'geometry.fill', stylers: [{ color: '#ffffff' }, { lightness: 17 }] },
                { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#f5f5f5' }, { lightness: 21 }] },
                { elementType: 'labels.text.stroke', stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { lightness: 16 }] },
                { elementType: 'labels.text.fill', stylers: [{ saturation: 36 }, { color: '#333333' }, { lightness: 40 }] }
            ],
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                position: google.maps.ControlPosition.TOP_RIGHT
            },
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
            fullscreenControl: true,
            fullscreenControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            }
        });

        // Initialize heat map layer
        const heatmapData = filteredDestinations.map(destination => ({
            location: new google.maps.LatLng(destination.lat, destination.lng),
            weight: destination.rating
        }));
        
        const heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatmapData,
            radius: 50,
            opacity: 0.6
        });

        // Add heatmap toggle button
        const heatmapButton = document.createElement('button');
        heatmapButton.className = 'btn btn--secondary btn--sm';
        heatmapButton.textContent = 'Toggle Heatmap';
        heatmapButton.addEventListener('click', () => {
            heatmap.setMap(heatmap.getMap() ? null : map);
        });
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(heatmapButton);

        directionsService = new google.maps.DirectionsService();
        directionsRenderer = new google.maps.DirectionsRenderer({
            polylineOptions: { 
                strokeColor: '#00bcd4', 
                strokeWeight: 4,
                strokeOpacity: 0.8
            },
            suppressMarkers: true,
            preserveViewport: true
        });
        directionsRenderer.setMap(map);

        trafficLayer = new google.maps.TrafficLayer();
        addMarkersToMap();

        // Add search box
        const input = document.createElement('input');
        input.className = 'form-control';
        input.style.margin = '10px';
        input.style.width = '300px';
        input.placeholder = 'Search locations...';
        
        const searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        map.addListener('bounds_changed', () => {
            searchBox.setBounds(map.getBounds());
        });

        searchBox.addListener('places_changed', () => {
            const places = searchBox.getPlaces();
            if (places.length === 0) return;

            const bounds = new google.maps.LatLngBounds();
            places.forEach(place => {
                if (!place.geometry || !place.geometry.location) return;
                bounds.extend(place.geometry.location);
            });
            map.fitBounds(bounds);
        });

    } catch (error) {
        console.error('Error initializing Google Maps:', error);
        mapContainer.innerHTML = 
            `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: linear-gradient(135deg, #ff6b6b, #ee5a6f); color: white; font-size: 18px; text-align: center; padding: 20px; border-radius: 8px; gap: 12px;">
                <div style="font-size: 48px;">⚠️</div>
                <div>
                    <h3 style="margin: 0; font-size: 24px;">Map Error</h3>
                    <p style="margin: 8px 0 0 0; opacity: 0.9; font-size: 14px;">Could not load Google Maps. Please check your connection or try refreshing the page.</p>
                </div>
            </div>`;
    }
}

function addMarkersToMap() {
    if (!map || typeof google === 'undefined') return;
    
    // Use filtered destinations if available, otherwise use all
    const destinationsToMark = (filteredDestinations && filteredDestinations.length > 0) 
        ? filteredDestinations 
        : allDestinations;
    
    if (!destinationsToMark || destinationsToMark.length === 0) {
        console.warn('No destinations to add to map');
        return;
    }
    
    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    // Create marker cluster
    const markerCluster = new markerClusterer.MarkerClusterer({ map });
    const clusterMarkers = [];

    destinationsToMark.forEach(destination => {
        const marker = new google.maps.Marker({
            position: { lat: destination.lat, lng: destination.lng },
            title: destination.name,
            icon: {
                url: getCategoryIcon(destination.category),
                scaledSize: new google.maps.Size(30, 30)
            },
            animation: google.maps.Animation.DROP
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div class="custom-info-window">
                    <div class="info-window-image" style="background-image: url('${destination.images?.[0] || destination.imageUrl}');">
                        <div class="category-badge ${destination.category.toLowerCase()}">${destination.category}</div>
                    </div>
                    <div class="info-window-content">
                        <h3>${destination.name}</h3>
                        <p class="location">${destination.country}, ${destination.continent}</p>
                        <div class="rating">
                            <span class="stars">⭐</span>
                            <span class="score">${destination.rating}</span>
                        </div>
                        <p class="description">${destination.description}</p>
                        <div class="actions">
                            <button onclick="showDestinationDetails(${destination.id})" class="btn btn--primary btn--sm">View Details</button>
                            <button onclick="planRoute(${destination.id})" class="btn btn--outline btn--sm">Plan Route</button>
                        </div>
                    </div>
                </div>
            `,
            maxWidth: 400
        });

        marker.addListener('click', () => {
            // Close all other info windows
            markers.forEach(m => m.infoWindow?.close());
            infoWindow.open(map, marker);
        });

        marker.infoWindow = infoWindow;
        markers.push(marker);
        clusterMarkers.push(marker);
    });

    // Add markers to cluster
    markerCluster.addMarkers(clusterMarkers);
}

function getCategoryIcon(category) {
    const icons = {
        'Historical': 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#d97706"><path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/></svg>'),
        'Natural': 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#059669"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7.5 19 12.5 16.5 16 11C19.5 5.5 17 8 17 8Z"/></svg>'),
        'Modern': 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0891b2"><path d="M7 21V19H17V21H19V7L12 1L5 7V21H7Z"/></svg>'),
        'Spiritual': 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7c3aed"><path d="M9.5 2L12 7L14.5 2L17 4.5L22 2L20 7L22 12L17 10.5L14.5 15L12 10L9.5 15L7 10.5L2 12L4 7L2 2L7 4.5L9.5 2Z"/></svg>')
    };
    return icons[category] || icons['Modern'];
}

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                
                if (map && typeof google !== 'undefined') {
                    const userMarker = new google.maps.Marker({
                        position: userLocation,
                        map: map,
                        title: 'Your Location',
                        icon: {
                            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ef4444"><path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"/></svg>'),
                            scaledSize: new google.maps.Size(40, 40)
                        }
                    });
                }
            },
            (error) => {
                console.warn('Geolocation error:', error);
                userLocation = { lat: 40.7128, lng: -74.0060 }; // Default to NYC
            }
        );
    }
}

// ===========================================
// DESTINATION DETAILS AND REVIEWS
// ===========================================

// Gallery state
let currentImageIndex = 0;

// Gallery functions
function changeImage(direction) {
    if (!currentDestination) return;
    
    const images = currentDestination.images || [currentDestination.imageUrl];
    const newIndex = currentImageIndex + direction;
    
    if (newIndex >= 0 && newIndex < images.length) {
        setImage(newIndex);
    } else if (direction > 0 && newIndex >= images.length) {
        // Loop to first image
        setImage(0);
    } else if (direction < 0 && newIndex < 0) {
        // Loop to last image
        setImage(images.length - 1);
    }
}

function setImage(index) {
    if (!currentDestination) return;
    
    const images = currentDestination.images || [currentDestination.imageUrl];
    if (index < 0 || index >= images.length) return;
    
    currentImageIndex = index;
    
    const mainImage = document.querySelector('.gallery-main');
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    
    if (mainImage) {
        // Add fade transition
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.style.backgroundImage = `url('${images[index]}')`;
            mainImage.style.opacity = '1';
        }, 200);
    }
    
    thumbnails.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
    
    // Update counter if it exists
    const counter = document.querySelector('.gallery-counter');
    if (counter) {
        counter.textContent = `${index + 1} / ${images.length}`;
    }
}

async function showDestinationDetails(destinationId) {
    try {
        // Convert to number for consistent matching
        const numericId = parseInt(destinationId, 10);
        
        // Try API first, then fallback to local database
        let destination;
        const response = await api.getPlace(numericId);
        
        if (response.success) {
            destination = response.place;
        } else {
            // Fallback to local database
            destination = DATABASE.destinations.find(d => parseInt(d.id, 10) === numericId);
            if (!destination) {
                showToast('Destination not found', 'error');
                return;
            }
        }
        
        currentDestination = destination;
        
        const modal = document.getElementById('destination-modal');
        const modalName = document.getElementById('modal-destination-name');
        const detailsContainer = document.getElementById('destination-details');
        const reviewsList = document.getElementById('reviews-list');
        
        modalName.textContent = destination.name;
        
        detailsContainer.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px;">
                <div>
                    <h4 style="margin: 0 0 8px 0;">Location</h4>
                    <p style="margin: 0; color: var(--color-text-secondary);">${destination.country}, ${destination.continent}</p>
                </div>
                <div>
                    <h4 style="margin: 0 0 8px 0;">Category</h4>
                    <div class="category-badge ${destination.category.toLowerCase()}">${destination.category}</div>
                </div>
                <div>
                    <h4 style="margin: 0 0 8px 0;">Rating</h4>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="color: var(--color-warning); font-size: 18px;">⭐</span>
                        <span style="font-weight: 500; font-size: 18px;">${destination.rating}</span>
                        <span style="color: var(--color-text-secondary);">(${destination.reviewCount || 0} reviews)</span>
                    </div>
                </div>
                <div>
                    <h4 style="margin: 0 0 8px 0;">Actions</h4>
                    <div style="display: flex; gap: 8px;">
                        <button class="btn btn--primary btn--sm" onclick="planRoute(${destination.id})">Plan Route</button>
                        <button class="btn btn--outline btn--sm" onclick="toggleWishlist(${destination.id})">${isInWishlist(destination.id) ? 'Remove from' : 'Add to'} Wishlist</button>
                    </div>
                </div>
            </div>
            <div>
                <h4 style="margin: 0 0 12px 0;">Description</h4>
                <p style="margin: 0; color: var(--color-text-secondary); line-height: 1.6;">${destination.description}</p>
            </div>
        `;
        
        // Load and display reviews
        const reviewsResponse = await api.getReviews(destinationId);
        if (reviewsResponse.success && reviewsResponse.reviews) {
            displayReviews(reviewsResponse.reviews);
        }
        
        modal.classList.remove('hidden');
    } catch (error) {
        console.error('Error showing destination details:', error);
        showToast('Error loading destination details', 'error');
    }
}

function displayReviews(reviews) {
    const reviewsList = document.getElementById('reviews-list');
    
    if (reviews.length === 0) {
        reviewsList.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: 24px;">No reviews yet. Be the first to share your experience!</p>';
        return;
    }
    
    reviewsList.innerHTML = reviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <div>
                    <strong>${review.userName}</strong>
                    <div class="review-rating">${'⭐'.repeat(review.rating)} ${review.rating}/5</div>
                </div>
                <div class="review-date">${formatDate(review.createdAt)}</div>
            </div>
            <p class="review-comment">${review.comment}</p>
        </div>
    `).join('');
}

function closeDestinationModal() {
    const modal = document.getElementById('destination-modal');
    modal.classList.add('hidden');
    currentDestination = null;
    hideReviewForm();
}

function showReviewForm() {
    if (!currentUser) {
        showToast('Please login to write a review', 'error');
        return;
    }
    
    const reviewForm = document.getElementById('review-form');
    reviewForm.classList.remove('hidden');
}

function hideReviewForm() {
    const reviewForm = document.getElementById('review-form');
    reviewForm.classList.add('hidden');
    reviewForm.querySelector('form').reset();
}

async function submitReview(event) {
    event.preventDefault();
    
    if (!currentUser || !currentDestination) {
        showToast('Authentication required', 'error');
        return;
    }
    
    const rating = document.querySelector('input[name="rating"]:checked')?.value;
    const comment = document.getElementById('review-comment').value.trim();
    
    if (!rating || !comment) {
        showToast('Please provide both rating and comment', 'error');
        return;
    }
    
    try {
        const response = await api.createReview({
            placeId: currentDestination._id || currentDestination.id,
            rating: parseInt(rating),
            comment: comment
        });
        
        if (response.success) {
            showToast('Review submitted successfully!', 'success');
            hideReviewForm();
            
            // Refresh reviews
            const reviewsResponse = await api.getReviews(currentDestination._id || currentDestination.id);
            if (reviewsResponse.success) {
                displayReviews(reviewsResponse.reviews);
            }
        } else {
            showToast('Error submitting review: ' + response.error, 'error');
        }
    } catch (error) {
        console.error('Error submitting review:', error);
        showToast('Error submitting review', 'error');
    }
}

// Expose functions to global scope for inline event handlers
window.showDestinationDetails = showDestinationDetails;
window.planRoute = planRoute;
window.toggleWishlist = toggleWishlist;

// ===========================================
// WISHLIST FUNCTIONALITY
// ===========================================

async function toggleWishlist(destinationId) {
    if (!currentUser) {
        showToast('Please login to manage your wishlist', 'error');
        openAuthModal('login');
        return;
    }
    
    try {
        // Ensure ID is numeric for consistency
        const numericId = parseInt(destinationId, 10);
        const isCurrentlyInWishlist = isInWishlist(numericId);
        let response;
        
        if (isCurrentlyInWishlist) {
            response = await api.removeFromWishlist(numericId);
        } else {
            response = await api.addToWishlist(numericId);
        }
        
        if (response.success) {
            showToast(response.message, 'success');
            renderDestinationCards(); // Re-render to update heart icons
            updateWishlistCount();
        } else {
            showToast('Error updating wishlist: ' + response.error, 'error');
        }
    } catch (error) {
        console.error('Error toggling wishlist:', error);
        showToast('Error updating wishlist', 'error');
    }
}

async function showWishlist() {
    if (!currentUser) {
        showToast('Please login to view your wishlist', 'error');
        openAuthModal('login');
        return;
    }
    
    try {
        const response = await api.getWishlist();
        if (response.success) {
            filteredDestinations = response.wishlist;
            renderDestinationCards();
            updateResultsCounter();
            
            // Clear all filters
            resetFilters();
            
            // Scroll to destinations
            scrollToDestinations();
            
            showToast(`Showing your wishlist (${response.wishlist.length} destinations)`, 'success');
        }
    } catch (error) {
        console.error('Error loading wishlist:', error);
        showToast('Error loading wishlist', 'error');
    }
}

function updateWishlistUI(wishlist) {
    updateWishlistCount();
    renderDestinationCards(); // Re-render to update heart icons
}

function updateWishlistCount() {
    const counter = document.getElementById('wishlist-count');
    const favCounter = document.getElementById('favorites-count');
    
    if (currentUser) {
        const user = api.db.users.find(u => u.id === currentUser.id);
        const count = user ? user.wishlist.length : 0;
        
        if (counter) counter.textContent = count;
        if (favCounter) favCounter.textContent = count;
    } else {
        if (counter) counter.textContent = '0';
        if (favCounter) favCounter.textContent = '0';
    }
}

// ===========================================
// TRIP PLANNING FUNCTIONALITY
// ===========================================

async function showTrips() {
    if (!currentUser) {
        showToast('Please login to view your trips', 'error');
        openAuthModal('login');
        return;
    }
    
    document.getElementById('trip-planning').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

async function createNewTrip() {
    if (!currentUser) {
        showToast('Please login to create trips', 'error');
        return;
    }
    
    const tripName = prompt('Enter trip name:');
    if (!tripName) return;
    
    const startDate = prompt('Enter start date (YYYY-MM-DD):');
    if (!startDate) return;
    
    const endDate = prompt('Enter end date (YYYY-MM-DD):');
    if (!endDate) return;
    
    try {
        const response = await api.createTrip({
            name: tripName,
            startDate,
            endDate,
            places: []
        });
        
        if (response.success) {
            showToast('Trip created successfully!', 'success');
            loadUserData(); // Refresh trips display
        } else {
            showToast('Error creating trip: ' + response.error, 'error');
        }
    } catch (error) {
        console.error('Error creating trip:', error);
        showToast('Error creating trip', 'error');
    }
}

function updateTripsUI(trips) {
    const container = document.getElementById('trips-container');
    if (!trips || trips.length === 0) {
        container.innerHTML = `
            <div class="trip-placeholder">
                <h3>No trips planned yet</h3>
                <p>Create your first trip and start adding destinations!</p>
                <button class="btn btn--primary" onclick="createNewTrip()">Create New Trip</button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = trips.map(trip => `
        <div class="trip-card">
            <div class="trip-header">
                <h4 class="trip-title">${trip.name}</h4>
                <div class="trip-dates">${formatDate(trip.startDate)} - ${formatDate(trip.endDate)}</div>
            </div>
            <div class="trip-destinations">
                ${trip.destinations.map(dest => `<span class="trip-destination-tag">${dest.name}</span>`).join('')}
                ${trip.destinations.length === 0 ? '<span style="color: var(--color-text-secondary); font-style: italic;">No destinations added yet</span>' : ''}
            </div>
        </div>
    `).join('');
}

// ===========================================
// MAP AND ROUTING FUNCTIONALITY
// ===========================================

function selectDestination(destinationId) {
    // Convert to number for consistent matching
    const numericId = parseInt(destinationId, 10);
    const destination = filteredDestinations.find(d => parseInt(d.id, 10) === numericId) || 
                       DATABASE.destinations.find(d => parseInt(d.id, 10) === numericId);
    
    if (destination && map) {
        map.setCenter({ lat: destination.lat, lng: destination.lng });
        map.setZoom(12);
        
        const mapContainer = document.getElementById('google-map');
        if (mapContainer) {
            mapContainer.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

function planRoute(destinationId) {
    if (!userLocation) {
        showToast('Location permission required for route planning', 'error');
        return;
    }
    
    if (!map || !directionsService || typeof google === 'undefined') {
        showToast('Google Maps is required for route planning. Showing destination on map instead.', 'info');
        selectDestination(destinationId);
        return;
    }
    
    // Convert to number for consistent matching
    const numericId = parseInt(destinationId, 10);
    const destination = filteredDestinations.find(d => parseInt(d.id, 10) === numericId) || 
                       DATABASE.destinations.find(d => parseInt(d.id, 10) === numericId);
    
    if (!destination) {
        showToast('Destination not found', 'error');
        return;
    }
    
    const request = {
        origin: userLocation,
        destination: { lat: destination.lat, lng: destination.lng },
        travelMode: google.maps.TravelMode[currentTravelMode]
    };
    
    directionsService.route(request, (result, status) => {
        if (status === 'OK') {
            currentRouteDestination = destination; // Track active route
            directionsRenderer.setDirections(result);
            displayRouteInfo(result.routes[0].legs[0], destination);
            showToast(`Route planned to ${destination.name}`, 'success');
        } else {
            currentRouteDestination = null; // Clear if route fails
            showToast('Could not calculate route: ' + status, 'error');
        }
    });
    
    const mapContainer = document.getElementById('google-map');
    if (mapContainer) {
        mapContainer.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function displayRouteInfo(leg, destination) {
    const routeInfo = document.getElementById('route-info');
    const routeDetails = document.getElementById('route-details');
    
    if (routeInfo && routeDetails) {
        routeDetails.innerHTML = `
            <p><strong>Destination:</strong> ${destination.name}</p>
            <p><strong>Distance:</strong> ${leg.distance.text}</p>
            <p><strong>Duration:</strong> ${leg.duration.text}</p>
            <p><strong>Travel Mode:</strong> ${currentTravelMode}</p>
        `;
        
        routeInfo.style.display = 'block';
    }
}

function handleTravelModeChange(event) {
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    const previousMode = currentTravelMode;
    currentTravelMode = event.target.dataset.mode;
    showToast(`Travel mode changed to ${currentTravelMode}`, 'success');
    
    // Recalculate route if one is currently active
    if (currentRouteDestination && directionsService && map) {
        planRoute(currentRouteDestination.id);
    }
}

function toggleTraffic() {
    if (!map || !trafficLayer || typeof google === 'undefined') {
        showToast('Google Maps required for traffic layer', 'error');
        return;
    }
    
    if (trafficLayer.getMap()) {
        trafficLayer.setMap(null);
        showToast('Traffic layer hidden', 'success');
    } else {
        trafficLayer.setMap(map);
        showToast('Traffic layer shown', 'success');
    }
}

function clearRoute() {
    currentRouteDestination = null; // Clear tracked destination
    
    if (directionsRenderer) {
        directionsRenderer.setDirections({ routes: [] });
    }
    
    const routeInfo = document.getElementById('route-info');
    if (routeInfo) {
        routeInfo.style.display = 'none';
    }
    
    showToast('Route cleared', 'success');
}

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

function showLoading(message = 'Loading...') {
    const overlay = document.getElementById('loading-overlay');
    const messageEl = document.getElementById('loading-message');
    if (overlay && messageEl) {
        messageEl.textContent = message;
        overlay.classList.remove('hidden');
    }
}

function hideLoadingOverlay() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
    }
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('message-toast');
    const messageEl = document.getElementById('toast-message');
    
    if (toast && messageEl) {
        messageEl.textContent = message;
        toast.className = `message-toast show ${type}`;
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 300);
        }, 3000);
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// ===========================================
// QUICK VIEW MODAL FUNCTIONALITY
// ===========================================

let currentQuickViewDestination = null;
let currentGalleryIndex = 0;

async function showQuickView(destinationId) {
    try {
        // Convert to number for consistent matching
        const numericId = parseInt(destinationId, 10);
        
        // Find destination in all destinations or filtered list
        let destination = allDestinations.find(d => parseInt(d.id, 10) === numericId) || 
                         allDestinations.find(d => d._id === destinationId);
        
        if (!destination) {
            destination = DATABASE.destinations.find(d => parseInt(d.id, 10) === numericId);
        }
        
        if (!destination) {
            // If not found locally, fetch from API
            const response = await api.getPlace(numericId);
            if (response.success) {
                destination = response.place;
            } else {
                showToast('Error loading destination', 'error');
                return;
            }
        }
        
        currentQuickViewDestination = destination;
        currentGalleryIndex = 0;
        
        // Populate quick view
        document.getElementById('qv-destination-name').textContent = destination.name;
        document.getElementById('qv-destination-location').textContent = `${destination.country} • ${destination.continent}`;
        document.getElementById('qv-rating').textContent = destination.rating;
        
        const roundedRating = Math.round(destination.rating);
        document.getElementById('qv-stars').textContent = '⭐'.repeat(roundedRating);
        
        document.getElementById('qv-category').textContent = destination.category;
        document.getElementById('qv-category').className = `category-badge ${destination.category.toLowerCase()}`;
        document.getElementById('qv-continent').textContent = destination.continent;
        document.getElementById('qv-country').textContent = destination.country;
        document.getElementById('qv-description').textContent = destination.description;
        
        // Update wishlist button
        const inWishlist = isInWishlist(numericId);
        const wishlistBtn = document.getElementById('qv-wishlist-btn');
        wishlistBtn.textContent = inWishlist ? '♥ In Wishlist' : '♡ Add to Wishlist';
        wishlistBtn.classList.toggle('active', inWishlist);
        
        // Setup gallery
        setupGallery(destination.images || []);
        
        // Show modal
        const modal = document.getElementById('destination-quick-view');
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } catch (error) {
        console.error('Error showing quick view:', error);
        showToast('Error loading destination details', 'error');
    }
}

function setupGallery(images) {
    const mainImage = document.getElementById('gallery-main-image');
    const thumbnails = document.getElementById('gallery-thumbnails');
    
    if (!images || images.length === 0) {
        mainImage.src = 'https://via.placeholder.com/500x400?text=No+Image';
        thumbnails.innerHTML = '';
        return;
    }
    
    mainImage.src = images[0];
    
    thumbnails.innerHTML = images.map((img, index) => `
        <img src="${img}" alt="Gallery ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}" onclick="selectGalleryImage(${index})">
    `).join('');
}

function selectGalleryImage(index) {
    const images = currentQuickViewDestination.images || [];
    if (index >= 0 && index < images.length) {
        currentGalleryIndex = index;
        document.getElementById('gallery-main-image').src = images[index];
        
        // Update thumbnail highlights
        document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
    }
}

function nextGalleryImage() {
    const images = currentQuickViewDestination.images || [];
    currentGalleryIndex = (currentGalleryIndex + 1) % images.length;
    selectGalleryImage(currentGalleryIndex);
}

function previousGalleryImage() {
    const images = currentQuickViewDestination.images || [];
    currentGalleryIndex = (currentGalleryIndex - 1 + images.length) % images.length;
    selectGalleryImage(currentGalleryIndex);
}

function closeQuickView() {
    const modal = document.getElementById('destination-quick-view');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    currentQuickViewDestination = null;
}

function toggleWishlistFromQV() {
    if (!currentQuickViewDestination) return;
    
    const destId = currentQuickViewDestination._id || currentQuickViewDestination.id;
    toggleWishlist(destId);
    
    // Update button state
    const inWishlist = isInWishlist(destId);
    const wishlistBtn = document.getElementById('qv-wishlist-btn');
    wishlistBtn.textContent = inWishlist ? '♥ In Wishlist' : '♡ Add to Wishlist';
    wishlistBtn.classList.toggle('active', inWishlist);
}

function routeFromQV() {
    if (!currentQuickViewDestination) return;
    
    const destId = currentQuickViewDestination._id || currentQuickViewDestination.id;
    closeQuickView();
    planRoute(destId);
}

function openFullDetails() {
    if (!currentQuickViewDestination) return;
    
    const destId = currentQuickViewDestination._id || currentQuickViewDestination.id;
    closeQuickView();
    showDestinationDetails(destId);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    updateWishlistCount();
});