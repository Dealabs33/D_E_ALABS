function toggleChatbot() {
    const chatPopup = document.getElementById('chatPopup');
    chatPopup.style.display = chatPopup.style.display === 'block' ? 'none' : 'block';
}
const trends = [
    {
        title: "Quantum Computing Advances",
        description: "Explore breakthroughs in quantum tech shaping the future.",
        image: "https://via.placeholder.com/300"
    },
    {
        title: "Sustainable Tech Solutions",
        description: "Learn how tech is driving sustainability worldwide.",
        image: "https://via.placeholder.com/300"
    },
    {
        title: "Blockchain Security",
        description: "Stay secure with the latest in blockchain protection.",
        image: "https://via.placeholder.com/300"
    }
];

function loadTrends() {
    const trendingContainer = document.querySelector('.trending-items');
    trendingContainer.innerHTML = '';

    trends.forEach(trend => {
        trendingContainer.innerHTML += `
            <div class="trend-card">
                <img src="${trend.image}" alt="${trend.title}">
                <h3>${trend.title}</h3>
                <p>${trend.description}</p>
            </div>
        `;
    });
}

document.addEventListener("DOMContentLoaded", loadTrends);