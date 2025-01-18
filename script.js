// Fetch and display player stats from Mojang API
const fetchPlayerStats = async () => {
    const statsContainer = document.getElementById('player-stats');

    try {
        const response = await fetch('https://api.mojang.com/users/profiles/minecraft/Notch');
        if (!response.ok) throw new Error('Player not found');
        const data = await response.json();

        statsContainer.innerHTML = `
            <div>
                <h3>Player Name: ${data.name}</h3>
                <p>UUID: ${data.id}</p>
            </div>
        `;
    } catch (error) {
        statsContainer.innerHTML = '<p>Error fetching player stats.</p>';
    }
};

// Load player stats on page load
fetchPlayerStats();
