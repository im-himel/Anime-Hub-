// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');
const closeModals = document.querySelectorAll('.close-modal');

// Sample anime data
const animeData = {
  latestUpdates: [
    {
      id: 1,
      title: 'Jujutsu Kaisen Season 2',
      poster: 'https://via.placeholder.com/180x250',
      episode: 12,
      rating: 4.9,
      status: 'ongoing'
    },
    {
      id: 2,
      title: 'One Piece',
      poster: 'https://via.placeholder.com/180x250',
      episode: 1075,
      rating: 4.8,
      status: 'ongoing'
    },
    {
      id: 3,
      title: 'Attack on Titan Final Season',
      poster: 'https://via.placeholder.com/180x250',
      episode: 28,
      rating: 5.0,
      status: 'completed'
    },
    {
      id: 4,
      title: 'Demon Slayer: Swordsmith Village Arc',
      poster: 'https://via.placeholder.com/180x250',
      episode: 8,
      rating: 4.7,
      status: 'ongoing'
    },
    {
      id: 5,
      title: 'My Hero Academia Season 6',
      poster: 'https://via.placeholder.com/180x250',
      episode: 24,
      rating: 4.6,
      status: 'completed'
    },
    {
      id: 6,
      title: 'Chainsaw Man',
      poster: 'https://via.placeholder.com/180x250',
      episode: 12,
      rating: 4.9,
      status: 'completed'
    }
  ],
  popularAnime: [
    {
      id: 7,
      title: 'Naruto Shippuden',
      poster: 'https://via.placeholder.com/180x250',
      rating: 4.8,
      status: 'completed'
    },
    {
      id: 8,
      title: 'Death Note',
      poster: 'https://via.placeholder.com/180x250',
      rating: 4.9,
      status: 'completed'
    },
    {
      id: 9,
      title: 'Hunter x Hunter',
      poster: 'https://via.placeholder.com/180x250',
      rating: 4.9,
      status: 'completed'
    },
    {
      id: 10,
      title: 'Fullmetal Alchemist: Brotherhood',
      poster: 'https://via.placeholder.com/180x250',
      rating: 5.0,
      status: 'completed'
    },
    {
      id: 11,
      title: 'Tokyo Revengers',
      poster: 'https://via.placeholder.com/180x250',
      rating: 4.5,
      status: 'ongoing'
    },
    {
      id: 12,
      title: 'Spy x Family',
      poster: 'https://via.placeholder.com/180x250',
      rating: 4.7,
      status: 'ongoing'
    }
  ],
  animeMovies: [
    {
      id: 13,
      title: 'Demon Slayer: Mugen Train',
      poster: 'https://via.placeholder.com/180x250',
      rating: 4.9,
      status: 'completed'
    },
    {
      id: 14,
      title: 'Jujutsu Kaisen 0',
      poster: 'https://via.placeholder.com/180x250',
      rating: 4.8,
      status: 'completed'
    },
    {
      id: 15,
      title: 'Your Name',
      poster: 'https://via.placeholder.com/180x250',
      rating: 4.9,
      status: 'completed'
    },
    {
      id: 16,
      title: 'Weathering With You',
      poster: 'https://via.placeholder.com/180x250',
      rating: 4.7,
      status: 'completed'
    },
    {
      id: 17,
      title: 'Suzume',
      poster: 'https://via.placeholder.com/180x250',
      rating: 4.6,
      status: 'completed'
    },
    {
      id: 18,
      title: 'A Silent Voice',
      poster: 'https://via.placeholder.com/180x250',
      rating: 4.8,
      status: 'completed'
    }
  ]
};

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Show login modal
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loginModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

// Switch to register modal
registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginModal.style.display = 'none';
  registerModal.style.display = 'flex';
});

// Switch to login modal
loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  registerModal.style.display = 'none';
  loginModal.style.display = 'flex';
});

// Close modals
closeModals.forEach(btn => {
  btn.addEventListener('click', () => {
    loginModal.style.display = 'none';
    registerModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  if (e.target === registerModal) {
    registerModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// Generate anime cards
function generateAnimeCards(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  
  data.forEach(anime => {
    const card = document.createElement('div');
    card.className = 'anime-card';
    card.innerHTML = `
      <img src="${anime.poster}" alt="${anime.title}" class="anime-poster">
      <div class="anime-info">
        <h3 class="anime-title">${anime.title}</h3>
        <div class="anime-meta">
          ${anime.episode ? `<span class="anime-episode">Ep ${anime.episode}</span>` : ''}
          <span class="anime-rating">★ ${anime.rating}</span>
        </div>
      </div>
      <span class="anime-status ${anime.status}">${anime.status === 'ongoing' ? 'Ongoing' : 'Completed'}</span>
    `;
    
    // Add click event to navigate to anime detail page
    card.addEventListener('click', () => {
      window.location.href = `anime-detail.html?id=${anime.id}`;
    });
    
    container.appendChild(card);
  });
}

// Load anime data when page loads
document.addEventListener('DOMContentLoaded', () => {
  generateAnimeCards(animeData.latestUpdates, 'latestUpdates');
  generateAnimeCards(animeData.popularAnime, 'popularAnime');
  generateAnimeCards(animeData.animeMovies, 'animeMovies');
});

// Search functionality
const searchInput = document.querySelector('.search-box input');
searchInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    const query = searchInput.value.trim();
    if (query) {
      // In a real app, this would redirect to search results page
      alert(`Searching for: ${query}`);
      searchInput.value = '';
    }
  }
});