/**
 * Travel API Client
 * Handles communication with the backend REST API
 * Includes authentication and pagination support
 */

class TravelAPIClient {
    constructor(baseURL = 'http://localhost:3000') {
        this.baseURL = baseURL;
        this.token = localStorage.getItem('travel_token');
        this.currentUser = JSON.parse(localStorage.getItem('travel_user') || 'null');
    }

    /**
     * Set authentication token
     */
    setToken(token) {
        this.token = token;
        if (token) {
            localStorage.setItem('travel_token', token);
        }
    }

    /**
     * Get authorization headers
     */
    getHeaders(includeAuth = false) {
        const headers = {
            'Content-Type': 'application/json'
        };

        if (includeAuth && this.token) {
            headers['Authorization'] = `Bearer ${this.token}`;
        }

        return headers;
    }

    /**
     * Make API request
     */
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}/api${endpoint}`;
        const config = {
            ...options,
            headers: this.getHeaders(options.auth || false)
        };

        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || `HTTP ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`API Error [${endpoint}]:`, error);
            throw error;
        }
    }

    // =====================================================
    // DESTINATIONS ENDPOINTS
    // =====================================================

    /**
     * Get destinations with pagination and filters
     * @param {number} page - Page number (default: 1)
     * @param {number} limit - Items per page (default: 10)
     * @param {string} search - Search query
     * @param {string} continent - Filter by continent
     * @param {string} category - Filter by category
     * @param {string} rating - Filter by minimum rating
     */
    async getDestinations(page = 1, limit = 10, filters = {}) {
        const params = new URLSearchParams({
            page,
            limit,
            search: filters.search || '',
            continent: filters.continent || 'All',
            category: filters.category || 'All',
            rating: filters.rating || 'All'
        });

        return this.request(`/destinations?${params.toString()}`);
    }

    /**
     * Get single destination details
     */
    async getDestination(id) {
        return this.request(`/destinations/${id}`);
    }

    // =====================================================
    // AUTHENTICATION ENDPOINTS
    // =====================================================

    /**
     * Register new user
     */
    async register(name, email, password) {
        const response = await this.request('/auth/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password })
        });

        if (response.success) {
            this.setToken(response.token);
            this.currentUser = response.user;
            localStorage.setItem('travel_user', JSON.stringify(response.user));
        }

        return response;
    }

    /**
     * Login user
     */
    async login(email, password) {
        const response = await this.request('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });

        if (response.success) {
            this.setToken(response.token);
            this.currentUser = response.user;
            localStorage.setItem('travel_user', JSON.stringify(response.user));
        }

        return response;
    }

    /**
     * Get current user profile
     */
    async getProfile() {
        return this.request('/auth/profile', { auth: true });
    }

    /**
     * Logout user
     */
    logout() {
        this.token = null;
        this.currentUser = null;
        localStorage.removeItem('travel_token');
        localStorage.removeItem('travel_user');
    }

    // =====================================================
    // REVIEWS ENDPOINTS
    // =====================================================

    /**
     * Get reviews for a destination
     */
    async getReviews(destinationId, page = 1, limit = 10) {
        const params = new URLSearchParams({ page, limit });
        return this.request(`/reviews/destination/${destinationId}?${params.toString()}`);
    }

    /**
     * Create a review
     */
    async createReview(destinationId, rating, comment) {
        return this.request('/reviews', {
            method: 'POST',
            body: JSON.stringify({
                destinationId,
                rating,
                comment
            }),
            auth: true
        });
    }

    // =====================================================
    // WISHLIST ENDPOINTS
    // =====================================================

    /**
     * Get user's wishlist
     */
    async getWishlist() {
        return this.request('/wishlist', { auth: true });
    }

    /**
     * Add destination to wishlist
     */
    async addToWishlist(destinationId) {
        return this.request(`/wishlist/add/${destinationId}`, {
            method: 'POST',
            auth: true
        });
    }

    /**
     * Remove destination from wishlist
     */
    async removeFromWishlist(destinationId) {
        return this.request(`/wishlist/remove/${destinationId}`, {
            method: 'POST',
            auth: true
        });
    }

    // =====================================================
    // TRIPS ENDPOINTS
    // =====================================================

    /**
     * Get user's trips
     */
    async getTrips() {
        return this.request('/trips', { auth: true });
    }

    /**
     * Create a new trip
     */
    async createTrip(name, startDate, endDate, places = []) {
        return this.request('/trips', {
            method: 'POST',
            body: JSON.stringify({
                name,
                startDate,
                endDate,
                places
            }),
            auth: true
        });
    }

    /**
     * Update trip
     */
    async updateTrip(tripId, updates) {
        return this.request(`/trips/${tripId}`, {
            method: 'PUT',
            body: JSON.stringify(updates),
            auth: true
        });
    }

    /**
     * Delete trip
     */
    async deleteTrip(tripId) {
        return this.request(`/trips/${tripId}`, {
            method: 'DELETE',
            auth: true
        });
    }
}

// Create global instance
const travelAPI = new TravelAPIClient();
