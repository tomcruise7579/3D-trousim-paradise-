// Client-side JavaScript for displaying beautiful destinations

document.addEventListener('DOMContentLoaded', function() {
    loadDestinations();
});

// Function to load destinations from the server
async function loadDestinations() {
    try {
        const response = await fetch('/api/destinations');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const destinations = await response.json();
        displayDestinations(destinations);
    } catch (error) {
        console.error('Error fetching destinations:', error);
    }
}

// Function to display destinations on the webpage
function displayDestinations(destinations) {
    const destinationsContainer = document.getElementById('destinations-container');
    if (!destinationsContainer) return;

    destinationsContainer.innerHTML = destinations.map(destination => `
        <div class="destination-card">
            <img src="${destination.imageUrl}" alt="${destination.name}" class="destination-image">
            <h3 class="destination-name">${destination.name}</h3>
            <p class="destination-description">${destination.description}</p>
            <span class="destination-rating">Rating: ${destination.rating}</span>
        </div>
    `).join('');
}