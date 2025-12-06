// Initialize API client
const travelAPI = new TravelAPIClient('http://localhost:3000');

// State variables
let currentPage = 1;
let totalPages = 1;
let itemsPerPage = 10;
let filteredDestinations = [];
let currentFilters = {
    search: '',
    continent: 'All',
    category: 'All',
    rating: 'All'
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    loadPageData();
});

// Setup event listeners for filters and pagination
function setupEventListeners() {
    // Search
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentFilters.search = e.target.value;
            currentPage = 1;
            loadPageData();
        });
    }

    // Continent filter
    const continentFilter = document.getElementById('continent-filter');
    if (continentFilter) {
        ['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Oceania'].forEach(cont => {
            const option = document.createElement('option');
            option.value = cont;
            option.textContent = cont;
            continentFilter.appendChild(option);
        });
        continentFilter.addEventListener('change', (e) => {
            currentFilters.continent = e.target.value;
            currentPage = 1;
            loadPageData();
        });
    }

    // Category filter
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        ['Historical', 'Natural', 'Modern', 'Spiritual'].forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            categoryFilter.appendChild(option);
        });
        categoryFilter.addEventListener('change', (e) => {
            currentFilters.category = e.target.value;
            currentPage = 1;
            loadPageData();
        });
    }

    // Rating filter
    const ratingFilter = document.getElementById('rating-filter');
    if (ratingFilter) {
        ['4.5', '4.0', '3.5', '3.0'].forEach(rating => {
            const option = document.createElement('option');
            option.value = rating;
            option.textContent = rating + '+';
            ratingFilter.appendChild(option);
        });
        ratingFilter.addEventListener('change', (e) => {
            currentFilters.rating = e.target.value;
            currentPage = 1;
            loadPageData();
        });
    }

    // Pagination controls
    const prevBtn = document.getElementById('prev-page-btn');
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                loadPageData();
                window.scrollTo(0, 0);
            }
        });
    }

    const nextBtn = document.getElementById('next-page-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                loadPageData();
                window.scrollTo(0, 0);
            }
        });
    }

    // Items per page selector
    const itemsSelector = document.getElementById('items-per-page');
    if (itemsSelector) {
        itemsSelector.addEventListener('change', (e) => {
            itemsPerPage = parseInt(e.target.value);
            currentPage = 1;
            loadPageData();
        });
    }
}

// Load page data with pagination
async function loadPageData() {
    try {
        const response = await travelAPI.getDestinations(currentPage, itemsPerPage, currentFilters);
        if (response.success) {
            filteredDestinations = response.places;
            totalPages = response.pagination.pages;
            displayDestinations(filteredDestinations);
            updatePaginationUI();
        }
    } catch (error) {
        console.error('Error loading destinations:', error);
        displayError('Failed to load destinations. Please try again.');
    }
}

// Update pagination UI
function updatePaginationUI() {
    const paginationSection = document.getElementById('pagination-section');
    const prevBtn = document.getElementById('prev-page-btn');
    const nextBtn = document.getElementById('next-page-btn');
    const currentPageSpan = document.getElementById('current-page');
    const totalPagesSpan = document.getElementById('total-pages');

    if (totalPages > 1) {
        if (paginationSection) paginationSection.style.display = 'flex';
        if (prevBtn) prevBtn.disabled = currentPage === 1;
        if (nextBtn) nextBtn.disabled = currentPage === totalPages;
        if (currentPageSpan) currentPageSpan.textContent = currentPage;
        if (totalPagesSpan) totalPagesSpan.textContent = totalPages;
        updatePaginationDots();
    } else {
        if (paginationSection) paginationSection.style.display = 'none';
    }
}

// Update pagination dots
function updatePaginationDots() {
    const dotsContainer = document.getElementById('pagination-dots');
    if (!dotsContainer) return;

    dotsContainer.innerHTML = '';
    const maxDots = 7;
    const pages = [];

    pages.push(1);
    if (totalPages > maxDots) {
        const start = Math.max(2, currentPage - 2);
        const end = Math.min(totalPages - 1, currentPage + 2);
        if (start > 2) pages.push('...');
        for (let i = start; i <= end; i++) pages.push(i);
        if (end < totalPages - 1) pages.push('...');
    } else {
        for (let i = 2; i < totalPages; i++) pages.push(i);
    }
    if (totalPages > 1) pages.push(totalPages);

    pages.forEach(page => {
        if (page === '...') {
            const span = document.createElement('span');
            span.className = 'pagination-ellipsis';
            span.textContent = '...';
            dotsContainer.appendChild(span);
        } else {
            const dot = document.createElement('button');
            dot.className = 'pagination-dot' + (page === currentPage ? ' active' : '');
            dot.textContent = page;
            dot.addEventListener('click', () => {
                currentPage = page;
                loadPageData();
                window.scrollTo(0, 0);
            });
            dotsContainer.appendChild(dot);
        }
    });
}

// Display destinations
function displayDestinations(destinations) {
    const container = document.getElementById('destinations-grid');
    if (!container) return;

    if (destinations.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No destinations found</p>';
        return;
    }

    container.innerHTML = destinations.map(destination => `
        <div class="destination-card">
            <img src="${destination.images?.[0] || 'https://via.placeholder.com/300x200'}" alt="${destination.name}" class="destination-image">
            <h3 class="destination-name">${destination.name}</h3>
            <p class="destination-country">${destination.country}</p>
            <p class="destination-description">${destination.description}</p>
            <div class="destination-meta">
                <span class="destination-category">${destination.category}</span>
                <span class="destination-rating">⭐ ${destination.rating}</span>
            </div>
        </div>
    `).join('');
}

// Display error message
function displayError(message) {
    const container = document.getElementById('destinations-grid');
    if (container) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: red;">${message}</p>`;
    }
}