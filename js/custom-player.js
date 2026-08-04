const beatsList = [
  {
    id: 1,
    title: "2015 Rnb",
    bpm: 115,
    key: "C#m",
    genre: "R&B",
    mood: "Smooth",
    duration: "2:29",
    cover: "images/licencas-cover.jpg",
    audioUrl: "audio/2015_rnb.mp3",
    prices: {
      wav: "R$ 150,00",
      stem: "R$ 300,00",
      exclusive: "Sob Consulta"
    },
    checkoutUrls: {
      wav: "https://ggcheckout.com/checkout/general-wav",
      stem: "https://ggcheckout.com/checkout/general-stem",
      exclusive: "https://www.instagram.com/prod.calixto/"
    }
  },
  {
    id: 2,
    title: "BRANDAO, FUTURE",
    bpm: 120,
    key: "Cm",
    genre: "Trap",
    mood: "Dark",
    duration: "2:10",
    cover: "images/licencas-cover.jpg",
    audioUrl: "audio/brandao_future.mp3",
    prices: {
      wav: "R$ 150,00",
      stem: "R$ 300,00",
      exclusive: "Sob Consulta"
    },
    checkoutUrls: {
      wav: "https://ggcheckout.com/checkout/general-wav",
      stem: "https://ggcheckout.com/checkout/general-stem",
      exclusive: "https://www.instagram.com/prod.calixto/"
    }
  },
  {
    id: 3,
    title: "Dessikk, Leviano",
    bpm: 140,
    key: "Am",
    genre: "Trap",
    mood: "Sad",
    duration: "2:48",
    cover: "images/licencas-cover.jpg",
    audioUrl: "audio/dessikk_leviano.mp3",
    prices: {
      wav: "R$ 150,00",
      stem: "R$ 300,00",
      exclusive: "Sob Consulta"
    },
    checkoutUrls: {
      wav: "https://ggcheckout.com/checkout/general-wav",
      stem: "https://ggcheckout.com/checkout/general-stem",
      exclusive: "https://www.instagram.com/prod.calixto/"
    }
  },
  {
    id: 4,
    title: "JACKBOYS",
    bpm: 140,
    key: "Gm",
    genre: "Trap",
    mood: "Dark",
    duration: "2:44",
    cover: "images/licencas-cover.jpg",
    audioUrl: "audio/jackboys.mp3",
    prices: {
      wav: "R$ 150,00",
      stem: "R$ 300,00",
      exclusive: "Sob Consulta"
    },
    checkoutUrls: {
      wav: "https://ggcheckout.com/checkout/general-wav",
      stem: "https://ggcheckout.com/checkout/general-stem",
      exclusive: "https://www.instagram.com/prod.calixto/"
    }
  },
  {
    id: 5,
    title: "Matue, Rage",
    bpm: 135,
    key: "Cm",
    genre: "Trap",
    mood: "Rage",
    duration: "2:21",
    cover: "images/licencas-cover.jpg",
    audioUrl: "audio/matue_rage.mp3",
    prices: {
      wav: "R$ 150,00",
      stem: "R$ 300,00",
      exclusive: "Sob Consulta"
    },
    checkoutUrls: {
      wav: "https://ggcheckout.com/checkout/general-wav",
      stem: "https://ggcheckout.com/checkout/general-stem",
      exclusive: "https://www.instagram.com/prod.calixto/"
    }
  },
  {
    id: 6,
    title: "Octane, Zaytoven",
    bpm: 140,
    key: "Gm",
    genre: "Trap",
    mood: "Dark",
    duration: "1:50",
    cover: "images/licencas-cover.jpg",
    audioUrl: "audio/octane_zaytoven.mp3",
    prices: {
      wav: "R$ 150,00",
      stem: "R$ 300,00",
      exclusive: "Sob Consulta"
    },
    checkoutUrls: {
      wav: "https://ggcheckout.com/checkout/general-wav",
      stem: "https://ggcheckout.com/checkout/general-stem",
      exclusive: "https://www.instagram.com/prod.calixto/"
    }
  },
  {
    id: 7,
    title: "RYU THE RUNNER, MATUE",
    bpm: 128,
    key: "Cm",
    genre: "Trap",
    mood: "Happy",
    duration: "2:06",
    cover: "images/licencas-cover.jpg",
    audioUrl: "audio/ryu_the_runner.mp3",
    prices: {
      wav: "R$ 150,00",
      stem: "R$ 300,00",
      exclusive: "Sob Consulta"
    },
    checkoutUrls: {
      wav: "https://ggcheckout.com/checkout/general-wav",
      stem: "https://ggcheckout.com/checkout/general-stem",
      exclusive: "https://www.instagram.com/prod.calixto/"
    }
  },
  {
    id: 8,
    title: "SKRILLA, OT7QUANNY",
    bpm: 152,
    key: "D#m",
    genre: "Trap",
    mood: "Drill",
    duration: "2:06",
    cover: "images/licencas-cover.jpg",
    audioUrl: "audio/skrilla_ot7quanny.mp3",
    prices: {
      wav: "R$ 150,00",
      stem: "R$ 300,00",
      exclusive: "Sob Consulta"
    },
    checkoutUrls: {
      wav: "https://ggcheckout.com/checkout/general-wav",
      stem: "https://ggcheckout.com/checkout/general-stem",
      exclusive: "https://www.instagram.com/prod.calixto/"
    }
  }
];

// --- PLAYER STATE ---
let currentAudio = new Audio();
let isPlaying = false;
let activeBeat = null;
let currentVolume = 0.8;
let isMuted = false;

// DOM Elements
let beatsTableBody;
let globalPlayer;
let pCover, pTitle, pArtist;
let btnPlayGlobal;
let btnPrevGlobal, btnNextGlobal;
let progressContainer, progressBarFill, progressHandle;
let currentTimeEl, totalTimeEl;
let volumeBtn, volumeSliderBg, volumeSliderFill;
let modalOverlay;

// Initialize on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  initDOMElements();
  renderBeatsTable();
  setupGlobalPlayerListeners();
  setupNavbarScroll();
  setupMobileDrawer();
  setupFAQAccordion();
  setupModalEvents();
});

function initDOMElements() {
  beatsTableBody = document.getElementById("beats-table-body");
  globalPlayer = document.getElementById("global-player");
  pCover = document.getElementById("player-cover");
  pTitle = document.getElementById("player-title");
  pArtist = document.getElementById("player-artist");
  btnPlayGlobal = document.getElementById("btn-play-global");
  btnPrevGlobal = document.getElementById("btn-prev-global");
  btnNextGlobal = document.getElementById("btn-next-global");
  progressContainer = document.getElementById("player-progress-container");
  progressBarFill = document.getElementById("player-progress-fill");
  progressHandle = document.getElementById("player-progress-handle");
  currentTimeEl = document.getElementById("player-current-time");
  totalTimeEl = document.getElementById("player-total-time");
  volumeBtn = document.getElementById("player-volume-btn");
  volumeSliderBg = document.getElementById("player-volume-slider-bg");
  volumeSliderFill = document.getElementById("player-volume-slider-fill");
  modalOverlay = document.getElementById("checkout-modal");
  
  // Set initial volume
  currentAudio.volume = currentVolume;
}

// --- RENDER CATALOG TABLE ---
function renderBeatsTable() {
  if (!beatsTableBody) return;
  beatsTableBody.innerHTML = "";
  
  if (beatsList.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td colspan="9" style="text-align: center; padding: 60px 20px; color: var(--text-muted); font-size: 1.1rem; font-family: var(--font-sans);">
        <span class="material-symbols-outlined" style="font-size: 3rem; display: block; margin: 0 auto 15px; color: var(--primary); width: max-content;">library_music</span>
        Nenhum beat disponível no momento.
      </td>
    `;
    beatsTableBody.appendChild(tr);
    return;
  }
  
  beatsList.forEach((beat) => {
    const tr = document.createElement("tr");
    tr.id = `beat-row-${beat.id}`;
    
    tr.innerHTML = `
      <td class="col-play">
        <button class="btn-play-row" onclick="togglePlayBeat(${beat.id})" aria-label="Tocar ${beat.title}">
          <span class="material-symbols-outlined" id="play-icon-row-${beat.id}">play_arrow</span>
        </button>
      </td>
      <td class="col-cover" onclick="togglePlayBeat(${beat.id})" style="cursor: pointer;">
        <div class="beat-cover-wrapper">
          <img src="${beat.cover}" alt="Capa de ${beat.title}" class="beat-cover" onerror="this.src='images/track-placeholder.svg'">
        </div>
      </td>
      <td class="col-title" onclick="togglePlayBeat(${beat.id})" style="cursor: pointer;">
        <div class="beat-title-info">
          <span class="beat-title">${beat.title}</span>
          <span class="beat-artist">Prod Calixto</span>
        </div>
        <div class="sound-wave" id="sound-wave-${beat.id}">
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
        </div>
      </td>
      <td>${beat.bpm}</td>
      <td>${beat.key}</td>
      <td><span class="tag-badge genre">${beat.genre}</span></td>
      <td><span class="tag-badge mood">${beat.mood}</span></td>
      <td>${beat.duration}</td>
      <td class="col-buy">
        <button class="btn btn-primary" onclick="openCheckoutModal(${beat.id})">
          <span class="material-symbols-outlined">shopping_cart</span> Comprar
        </button>
      </td>
    `;
    
    beatsTableBody.appendChild(tr);
  });
}

// --- AUDIO PLAYER LOGIC ---
function togglePlayBeat(beatId) {
  const beat = beatsList.find(b => b.id === beatId);
  if (!beat) return;
  
  if (activeBeat && activeBeat.id === beatId) {
    if (isPlaying) {
      pauseBeat();
    } else {
      playBeat();
    }
  } else {
    // Switch to a new beat
    changeBeat(beat);
  }
}

function changeBeat(beat) {
  // Remove playing state from previous row
  if (activeBeat) {
    const prevRow = document.getElementById(`beat-row-${activeBeat.id}`);
    const prevIcon = document.getElementById(`play-icon-row-${activeBeat.id}`);
    if (prevRow) prevRow.classList.remove("playing-row");
    if (prevIcon) prevIcon.innerText = "play_arrow";
  }
  
  activeBeat = beat;
  currentAudio.src = beat.audioUrl;
  
  // Update Player UI details
  if (pCover) pCover.src = beat.cover;
  if (pTitle) pTitle.innerText = beat.title;
  if (pArtist) pArtist.innerText = "Prod Calixto";
  
  // Slide up player if not visible
  if (globalPlayer) {
    globalPlayer.classList.add("active");
  }
  
  playBeat();
}

function playBeat() {
  currentAudio.play()
    .then(() => {
      isPlaying = true;
      updatePlayPauseUI(true);
    })
    .catch((err) => {
      console.error("Erro ao tocar áudio: ", err);
    });
}

function pauseBeat() {
  currentAudio.pause();
  isPlaying = false;
  updatePlayPauseUI(false);
}

function updatePlayPauseUI(playing) {
  // Update Global Player Button
  if (btnPlayGlobal) {
    btnPlayGlobal.innerHTML = playing 
      ? `<span class="material-symbols-outlined">pause</span>` 
      : `<span class="material-symbols-outlined">play_arrow</span>`;
  }
  
  if (activeBeat) {
    const activeRow = document.getElementById(`beat-row-${activeBeat.id}`);
    const activeIcon = document.getElementById(`play-icon-row-${activeBeat.id}`);
    
    if (activeRow) {
      if (playing) {
        activeRow.classList.add("playing-row");
      } else {
        activeRow.classList.remove("playing-row");
      }
    }
    
    if (activeIcon) {
      activeIcon.innerText = playing ? "pause" : "play_arrow";
    }
  }
}

// Play/Pause button on Global Player
function togglePlayGlobal() {
  if (!activeBeat) {
    // Play first beat if nothing is selected
    if (beatsList.length > 0) {
      changeBeat(beatsList[0]);
    }
    return;
  }
  
  if (isPlaying) {
    pauseBeat();
  } else {
    playBeat();
  }
}

// Next/Prev Beat
function playNextBeat() {
  if (!activeBeat) return;
  const currentIndex = beatsList.findIndex(b => b.id === activeBeat.id);
  let nextIndex = currentIndex + 1;
  if (nextIndex >= beatsList.length) {
    nextIndex = 0; // Loop back to start
  }
  changeBeat(beatsList[nextIndex]);
}

function playPrevBeat() {
  if (!activeBeat) return;
  const currentIndex = beatsList.findIndex(b => b.id === activeBeat.id);
  let prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    prevIndex = beatsList.length - 1; // Loop to end
  }
  changeBeat(beatsList[prevIndex]);
}

// Setup Global Player events
function setupGlobalPlayerListeners() {
  if (btnPlayGlobal) btnPlayGlobal.addEventListener("click", togglePlayGlobal);
  if (btnNextGlobal) btnNextGlobal.addEventListener("click", playNextBeat);
  if (btnPrevGlobal) btnPrevGlobal.addEventListener("click", playPrevBeat);
  
  // Time progress update
  currentAudio.addEventListener("timeupdate", () => {
    if (!currentAudio.duration) return;
    const progressPercent = (currentAudio.currentTime / currentAudio.duration) * 100;
    if (progressBarFill) progressBarFill.style.width = `${progressPercent}%`;
    if (currentTimeEl) currentTimeEl.innerText = formatTime(currentAudio.currentTime);
  });
  
  // Metadata Loaded (Duration)
  currentAudio.addEventListener("loadedmetadata", () => {
    if (totalTimeEl) totalTimeEl.innerText = formatTime(currentAudio.duration);
  });
  
  // Track ended
  currentAudio.addEventListener("ended", () => {
    playNextBeat();
  });
  
  // Progress Bar click to seek
  if (progressContainer) {
    progressContainer.addEventListener("click", (e) => {
      if (!currentAudio.duration) return;
      const rect = progressContainer.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (clickX / width) * currentAudio.duration;
      currentAudio.currentTime = newTime;
    });
  }
  
  // Volume Slider click to adjust
  if (volumeSliderBg) {
    volumeSliderBg.addEventListener("click", (e) => {
      const rect = volumeSliderBg.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      let newVolume = clickX / width;
      
      // Boundaries
      if (newVolume < 0) newVolume = 0;
      if (newVolume > 1) newVolume = 1;
      
      currentVolume = newVolume;
      currentAudio.volume = currentVolume;
      isMuted = false;
      
      updateVolumeUI();
    });
  }
  
  // Volume Mute toggle
  if (volumeBtn) {
    volumeBtn.addEventListener("click", () => {
      isMuted = !isMuted;
      currentAudio.muted = isMuted;
      updateVolumeUI();
    });
  }
}

function updateVolumeUI() {
  if (volumeSliderFill) {
    volumeSliderFill.style.width = isMuted ? "0%" : `${currentVolume * 100}%`;
  }
  
  if (volumeBtn) {
    if (isMuted || currentVolume === 0) {
      volumeBtn.innerHTML = `<span class="material-symbols-outlined">volume_off</span>`;
    } else if (currentVolume < 0.4) {
      volumeBtn.innerHTML = `<span class="material-symbols-outlined">volume_down</span>`;
    } else {
      volumeBtn.innerHTML = `<span class="material-symbols-outlined">volume_up</span>`;
    }
  }
}

// Helpers
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// --- NAVBAR & MOBILE DRAWER ---
function setupNavbarScroll() {
  const header = document.querySelector(".header-nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

function setupMobileDrawer() {
  const toggleBtn = document.querySelector(".menu-toggle");
  const drawer = document.getElementById("mobile-drawer");
  const links = drawer.querySelectorAll("a");
  
  if (!toggleBtn || !drawer) return;
  
  toggleBtn.addEventListener("click", () => {
    drawer.classList.toggle("active");
    // Animate burger bars
    const spans = toggleBtn.querySelectorAll("span");
    spans[0].style.transform = drawer.classList.contains("active") ? "rotate(45deg) translate(5px, 5px)" : "none";
    spans[1].style.opacity = drawer.classList.contains("active") ? "0" : "1";
    spans[2].style.transform = drawer.classList.contains("active") ? "rotate(-45deg) translate(6px, -6px)" : "none";
  });
  
  // Close drawer on link click
  links.forEach(link => {
    link.addEventListener("click", () => {
      drawer.classList.remove("active");
      const spans = toggleBtn.querySelectorAll("span");
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    });
  });
}

// --- FAQ ACCORDION ---
function setupFAQAccordion() {
  const questions = document.querySelectorAll(".faq-question");
  
  questions.forEach(q => {
    q.addEventListener("click", () => {
      const parent = q.parentElement;
      const isActive = parent.classList.contains("active");
      
      // Close all items
      document.querySelectorAll(".faq-item").forEach(item => {
        item.classList.remove("active");
      });
      
      // Open clicked item if it wasn't open
      if (!isActive) {
        parent.classList.add("active");
      }
    });
  });
}

// --- MODAL CHECKOUT EVENT ---
function openCheckoutModal(beatId) {
  const beat = beatsList.find(b => b.id === beatId);
  if (!beat) return;
  
  // Update Modal content
  const modalBeatName = document.getElementById("modal-beat-name");
  const modalPriceWav = document.getElementById("modal-price-wav");
  const modalPriceStem = document.getElementById("modal-price-stem");
  const modalPriceExclusive = document.getElementById("modal-price-exclusive");
  
  const linkWav = document.getElementById("modal-link-wav");
  const linkStem = document.getElementById("modal-link-stem");
  const linkExclusive = document.getElementById("modal-link-exclusive");
  
  if (modalBeatName) modalBeatName.innerText = beat.title;
  if (modalPriceWav) modalPriceWav.innerText = beat.prices.wav;
  if (modalPriceStem) modalPriceStem.innerText = beat.prices.stem;
  if (modalPriceExclusive) {
    modalPriceExclusive.innerText = beat.prices.exclusive;
    modalPriceExclusive.style.fontSize = "1.3rem";
  }
  
  if (linkWav) linkWav.href = beat.checkoutUrls.wav;
  if (linkStem) linkStem.href = beat.checkoutUrls.stem;
  if (linkExclusive) {
    linkExclusive.href = "https://www.instagram.com/prod.calixto/";
    linkExclusive.innerText = "Contato via Instagram";
  }
  
  if (modalOverlay) modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeCheckoutModal() {
  if (modalOverlay) modalOverlay.classList.remove("active");
  document.body.style.overflow = ""; // Restore background scroll
}

function setupModalEvents() {
  const closeBtn = document.getElementById("modal-close-btn");
  if (closeBtn) closeBtn.addEventListener("click", closeCheckoutModal);
  
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      // Close modal if clicking outside the box
      if (e.target === modalOverlay) {
        closeCheckoutModal();
      }
    });
  }
}
