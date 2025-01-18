// Fetch and display player stats from a mock API
const fetchPlayerStats = async () => {
    const playerStatsContainer = document.getElementById('player-stats');
    playerStatsContainer.innerHTML = '<p>Loading...</p>';

    try {
        const response = await fetch('https://api.mojang.com/users/profiles/minecraft/playername');
        const data = await response.json();

        playerStatsContainer.innerHTML = `
            <div>
                <h3>${data.name}</h3>
                <p>UUID: ${data.id}</p>
            </div>
        `;
    } catch (error) {
        playerStatsContainer.innerHTML = '<p>Failed to load player stats. Try again later.</p>';
    }
};

// Call the function on page load
fetchPlayerStats();
