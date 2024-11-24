const apiUrl = "https://akabab.github.io/superhero-api/api";

// Function to generate a random ID
function getRandomId() {
  return Math.floor(Math.random() * 731) + 1;
}

// Fetch and display data for a single hero
async function fetchHeroById(id) {
  const response = await fetch(`${apiUrl}/id/${id}.json`);
  return await response.json();
}

// Display hero details
function displayHeroCard(hero) {
  return `
    <div class="card">
      <img src="${hero.images.lg}" class="card-img-top" alt="${hero.name}">
      <div class="card-body">
        <h5 class="card-title">${hero.name}</h5>
        <p><strong>Race:</strong> ${hero.appearance.race || "Unknown"}</p>
        <p><strong>Gender:</strong> ${hero.appearance.gender || "Unknown"}</p>
        <p><strong>Height:</strong> ${hero.appearance.height[1] || "Unknown"}</p>
        <p><strong>Weight:</strong> ${hero.appearance.weight[1] || "Unknown"}</p>
        <div>
          <p><strong>Power Stats:</strong></p>
          ${Object.entries(hero.powerstats)
            .map(([key, value]) => `
              <div class="mb-1">
                ${key.charAt(0).toUpperCase() + key.slice(1)}: 
                <div class="progress" style="height: 8px;">
                  <div 
                    class="progress-bar" 
                    role="progressbar" 
                    style="width: ${value || 0}%;" 
                    aria-valuenow="${value || 0}" 
                    aria-valuemin="0" 
                    aria-valuemax="100">
                  </div>
                </div>
              </div>
            `).join('')}
        </div>
      </div>
    </div>`;
}

// Fetch and display multiple random heroes
async function getRandomSuperhero() {
  const heroContainer = document.getElementById("heroInfo");
  heroContainer.innerHTML = '<p>Loading...</p>';

  const heroIds = Array.from({ length: 3 }, getRandomId); // Fetch 3 heroes
  const heroData = await Promise.all(heroIds.map(fetchHeroById));

  heroContainer.innerHTML = heroData.map(displayHeroCard).join('');
}

// Event listener for search
document.getElementById("heroSearch").addEventListener("input", async (e) => {
  const query = e.target.value.toLowerCase();
  if (!query) return;

  const response = await fetch(`${apiUrl}/all.json`);
  const heroes = await response.json();

  const filteredHeroes = heroes.filter(hero =>
    hero.name.toLowerCase().includes(query)
  );

  const heroContainer = document.getElementById("heroInfo");
  heroContainer.innerHTML = filteredHeroes.slice(0, 5).map(displayHeroCard).join('');
});
