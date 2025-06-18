// Initial rendering logic – to be refactored during the lab
function addStations(stations) {
  // TODO: Refactor this loop using map() or forEach()
  stations.forEach(station => {
    addStationElement(station);
  });
}

// 🧪 TEAM FEATURES

// 💌 Wishlist Renderer
function renderWishlist() {
  // TODO: Use forEach to display items in wishlist
}

// ❌ Search Feedback
function searchStations(query) {
  // TODO: Filter stations array based on query
  // TODO: Display error if none found
}

// 🌟 Random Featured Station
function pickFeaturedStation() {
  // Create an array to store open stations (assuming all are open for now)
  const openStations = [];
  
  // Use forEach to collect all open stations
  stations.forEach(station => {
    // For now, treating all stations as "open"
    // In the future, you could add: if (station.isOpen) 
    openStations.push(station);
  });
  
  // Check if there are any open stations
  if (openStations.length === 0) {
    document.getElementById("featured-display").innerHTML = 
      '<p class="error">No open stations available!</p>';
    return;
  }
  
  // Use Math.random() to select a random station
  const randomIndex = Math.floor(Math.random() * openStations.length);
  const featuredStation = openStations[randomIndex];
  
  // Display the featured station
  document.getElementById("featured-display").innerHTML = `
    <div class="featured-station-card">
      <h3>🌟 ${featuredStation.name}</h3>
      <p><strong>Location:</strong> ${featuredStation.location}</p>
      <p><strong>Type:</strong> ${featuredStation.type}</p>
      <p class="featured-label">Now Featured!</p>
    </div>
  `;
}

// 🏙️ Group by City
function groupStationsByCity() {
  // TODO: Loop through stations and group under each city
}

// 🔄 Filter Toggle
function toggleFilteredStations() {
  // TODO: Add toggle logic to filter stations dynamically
}

// Load stations on page start
addStations(stations);
