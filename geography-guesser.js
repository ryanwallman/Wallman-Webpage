/**
 * Major metro cities only (large urban populations).
 * Coordinates are city-center approximations.
 */
const CONTINENTS = {
  africa: {
    label: 'Africa',
    bounds: [[-35.5, -18], [38, 52]],
    cities: [
      { name: 'Cairo', country: 'Egypt', lat: 30.0444, lng: 31.2357, pop: 10000000 },
      { name: 'Lagos', country: 'Nigeria', lat: 6.5244, lng: 3.3792, pop: 15000000 },
      { name: 'Kinshasa', country: 'DR Congo', lat: -4.4419, lng: 15.2663, pop: 15000000 },
      { name: 'Johannesburg', country: 'South Africa', lat: -26.2041, lng: 28.0473, pop: 5600000 },
      { name: 'Nairobi', country: 'Kenya', lat: -1.2921, lng: 36.8219, pop: 4400000 },
      { name: 'Casablanca', country: 'Morocco', lat: 33.5731, lng: -7.5898, pop: 3700000 },
      { name: 'Addis Ababa', country: 'Ethiopia', lat: 9.0320, lng: 38.7469, pop: 5000000 },
      { name: 'Cape Town', country: 'South Africa', lat: -33.9249, lng: 18.4241, pop: 4600000 },
      { name: 'Alexandria', country: 'Egypt', lat: 31.2001, lng: 29.9187, pop: 5200000 },
      { name: 'Abidjan', country: "Côte d'Ivoire", lat: 5.3600, lng: -4.0083, pop: 5200000 },
      { name: 'Accra', country: 'Ghana', lat: 5.6037, lng: -0.1870, pop: 2500000 },
      { name: 'Dar es Salaam', country: 'Tanzania', lat: -6.7924, lng: 39.2083, pop: 7000000 },
      { name: 'Dakar', country: 'Senegal', lat: 14.7167, lng: -17.4677, pop: 1500000 },
      { name: 'Luanda', country: 'Angola', lat: -8.8390, lng: 13.2894, pop: 8300000 },
      { name: 'Algiers', country: 'Algeria', lat: 36.7538, lng: 3.0588, pop: 3400000 },
    ],
  },
  asia: {
    label: 'Asia',
    bounds: [[-10, 35], [55, 145]],
    cities: [
      { name: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503, pop: 37000000 },
      { name: 'Delhi', country: 'India', lat: 28.7041, lng: 77.1025, pop: 32000000 },
      { name: 'Shanghai', country: 'China', lat: 31.2304, lng: 121.4737, pop: 28000000 },
      { name: 'Mumbai', country: 'India', lat: 19.0760, lng: 72.8777, pop: 21000000 },
      { name: 'Beijing', country: 'China', lat: 39.9042, lng: 116.4074, pop: 21000000 },
      { name: 'Dhaka', country: 'Bangladesh', lat: 23.8103, lng: 90.4125, pop: 22000000 },
      { name: 'Osaka', country: 'Japan', lat: 34.6937, lng: 135.5023, pop: 19000000 },
      { name: 'Karachi', country: 'Pakistan', lat: 24.8607, lng: 67.0011, pop: 16000000 },
      { name: 'Chongqing', country: 'China', lat: 29.4316, lng: 106.9123, pop: 16000000 },
      { name: 'Istanbul', country: 'Türkiye', lat: 41.0082, lng: 28.9784, pop: 15000000 },
      { name: 'Manila', country: 'Philippines', lat: 14.5995, lng: 120.9842, pop: 14000000 },
      { name: 'Seoul', country: 'South Korea', lat: 37.5665, lng: 126.9780, pop: 9900000 },
      { name: 'Jakarta', country: 'Indonesia', lat: -6.2088, lng: 106.8456, pop: 11000000 },
      { name: 'Bangkok', country: 'Thailand', lat: 13.7563, lng: 100.5018, pop: 10000000 },
      { name: 'Tehran', country: 'Iran', lat: 35.6892, lng: 51.3890, pop: 9000000 },
      { name: 'Ho Chi Minh City', country: 'Vietnam', lat: 10.8231, lng: 106.6297, pop: 9000000 },
      { name: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198, pop: 5900000 },
      { name: 'Hong Kong', country: 'China', lat: 22.3193, lng: 114.1694, pop: 7500000 },
      { name: 'Bangalore', country: 'India', lat: 12.9716, lng: 77.5946, pop: 12000000 },
    ],
  },
  europe: {
    label: 'Europe',
    bounds: [[35, -12], [71, 40]],
    cities: [
      { name: 'Moscow', country: 'Russia', lat: 55.7558, lng: 37.6173, pop: 12600000 },
      { name: 'London', country: 'United Kingdom', lat: 51.5074, lng: -0.1278, pop: 9500000 },
      { name: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522, pop: 11000000 },
      { name: 'Madrid', country: 'Spain', lat: 40.4168, lng: -3.7038, pop: 6700000 },
      { name: 'Barcelona', country: 'Spain', lat: 41.3874, lng: 2.1686, pop: 5600000 },
      { name: 'Berlin', country: 'Germany', lat: 52.5200, lng: 13.4050, pop: 3700000 },
      { name: 'Rome', country: 'Italy', lat: 41.9028, lng: 12.4964, pop: 4300000 },
      { name: 'Milan', country: 'Italy', lat: 45.4642, lng: 9.1900, pop: 3200000 },
      { name: 'Kyiv', country: 'Ukraine', lat: 50.4501, lng: 30.5234, pop: 2950000 },
      { name: 'Bucharest', country: 'Romania', lat: 44.4268, lng: 26.1025, pop: 2100000 },
      { name: 'Vienna', country: 'Austria', lat: 48.2082, lng: 16.3738, pop: 1900000 },
      { name: 'Warsaw', country: 'Poland', lat: 52.2297, lng: 21.0122, pop: 1800000 },
      { name: 'Budapest', country: 'Hungary', lat: 47.4979, lng: 19.0402, pop: 1750000 },
      { name: 'Amsterdam', country: 'Netherlands', lat: 52.3676, lng: 4.9041, pop: 2500000 },
      { name: 'Athens', country: 'Greece', lat: 37.9838, lng: 23.7275, pop: 3500000 },
      { name: 'Lisbon', country: 'Portugal', lat: 38.7223, lng: -9.1393, pop: 2900000 },
      { name: 'Stockholm', country: 'Sweden', lat: 59.3293, lng: 18.0686, pop: 1600000 },
      { name: 'Prague', country: 'Czechia', lat: 50.0755, lng: 14.4378, pop: 1300000 },
    ],
  },
  'north-america': {
    label: 'North America',
    bounds: [[7, -170], [72, -52]],
    cities: [
      { name: 'Mexico City', country: 'Mexico', lat: 19.4326, lng: -99.1332, pop: 22000000 },
      { name: 'New York', country: 'United States', lat: 40.7128, lng: -74.0060, pop: 18800000 },
      { name: 'Los Angeles', country: 'United States', lat: 34.0522, lng: -118.2437, pop: 13000000 },
      { name: 'Chicago', country: 'United States', lat: 41.8781, lng: -87.6298, pop: 8900000 },
      { name: 'Houston', country: 'United States', lat: 29.7604, lng: -95.3698, pop: 7000000 },
      { name: 'Toronto', country: 'Canada', lat: 43.6532, lng: -79.3832, pop: 6200000 },
      { name: 'Miami', country: 'United States', lat: 25.7617, lng: -80.1918, pop: 6100000 },
      { name: 'Dallas', country: 'United States', lat: 32.7767, lng: -96.7970, pop: 7600000 },
      { name: 'Philadelphia', country: 'United States', lat: 39.9526, lng: -75.1652, pop: 6100000 },
      { name: 'Atlanta', country: 'United States', lat: 33.7490, lng: -84.3880, pop: 6000000 },
      { name: 'Washington', country: 'United States', lat: 38.9072, lng: -77.0369, pop: 6300000 },
      { name: 'Montreal', country: 'Canada', lat: 45.5017, lng: -73.5673, pop: 4200000 },
      { name: 'Vancouver', country: 'Canada', lat: 49.2827, lng: -123.1207, pop: 2600000 },
      { name: 'Guadalajara', country: 'Mexico', lat: 20.6597, lng: -103.3496, pop: 5200000 },
      { name: 'Monterrey', country: 'Mexico', lat: 25.6866, lng: -100.3161, pop: 5000000 },
      { name: 'Havana', country: 'Cuba', lat: 23.1136, lng: -82.3666, pop: 2100000 },
      { name: 'San Francisco', country: 'United States', lat: 37.7749, lng: -122.4194, pop: 4700000 },
      { name: 'Phoenix', country: 'United States', lat: 33.4484, lng: -112.0740, pop: 4800000 },
    ],
  },
  'south-america': {
    label: 'South America',
    bounds: [[-56, -82], [13, -34]],
    cities: [
      { name: 'São Paulo', country: 'Brazil', lat: -23.5505, lng: -46.6333, pop: 22000000 },
      { name: 'Buenos Aires', country: 'Argentina', lat: -34.6037, lng: -58.3816, pop: 15000000 },
      { name: 'Rio de Janeiro', country: 'Brazil', lat: -22.9068, lng: -43.1729, pop: 13000000 },
      { name: 'Lima', country: 'Peru', lat: -12.0464, lng: -77.0428, pop: 10700000 },
      { name: 'Bogotá', country: 'Colombia', lat: 4.7110, lng: -74.0721, pop: 11000000 },
      { name: 'Santiago', country: 'Chile', lat: -33.4489, lng: -70.6693, pop: 6800000 },
      { name: 'Caracas', country: 'Venezuela', lat: 10.4806, lng: -66.9036, pop: 2900000 },
      { name: 'Brasília', country: 'Brazil', lat: -15.8267, lng: -47.9218, pop: 4700000 },
      { name: 'Medellín', country: 'Colombia', lat: 6.2476, lng: -75.5658, pop: 4000000 },
      { name: 'Guayaquil', country: 'Ecuador', lat: -2.1709, lng: -79.9224, pop: 2700000 },
      { name: 'Quito', country: 'Ecuador', lat: -0.1807, lng: -78.4678, pop: 2800000 },
      { name: 'Recife', country: 'Brazil', lat: -8.0476, lng: -34.8770, pop: 4000000 },
      { name: 'Salvador', country: 'Brazil', lat: -12.9777, lng: -38.5016, pop: 3900000 },
      { name: 'Belo Horizonte', country: 'Brazil', lat: -19.9167, lng: -43.9345, pop: 5900000 },
      { name: 'Montevideo', country: 'Uruguay', lat: -34.9011, lng: -56.1645, pop: 1700000 },
      { name: 'La Paz', country: 'Bolivia', lat: -16.5000, lng: -68.1500, pop: 1800000 },
    ],
  },
  oceania: {
    label: 'Oceania',
    bounds: [[-48, 110], [0, 180]],
    cities: [
      { name: 'Sydney', country: 'Australia', lat: -33.8688, lng: 151.2093, pop: 5300000 },
      { name: 'Melbourne', country: 'Australia', lat: -37.8136, lng: 144.9631, pop: 5000000 },
      { name: 'Brisbane', country: 'Australia', lat: -27.4698, lng: 153.0251, pop: 2500000 },
      { name: 'Perth', country: 'Australia', lat: -31.9505, lng: 115.8605, pop: 2100000 },
      { name: 'Auckland', country: 'New Zealand', lat: -36.8509, lng: 174.7645, pop: 1700000 },
      { name: 'Adelaide', country: 'Australia', lat: -34.9285, lng: 138.6007, pop: 1400000 },
      { name: 'Gold Coast', country: 'Australia', lat: -28.0167, lng: 153.4000, pop: 700000 },
      { name: 'Christchurch', country: 'New Zealand', lat: -43.5321, lng: 172.6362, pop: 390000 },
      { name: 'Wellington', country: 'New Zealand', lat: -41.2865, lng: 174.7762, pop: 430000 },
    ],
  },
};

const EARTH_RADIUS_KM = 6371;
const MAX_ROUND_SCORE = 100;
/** Past this distance a round scores 0 — wide enough to stay forgiving. */
const SCORE_ZERO_KM = 2200;

function scoreFromDistance(km) {
  if (km <= 15) return 100;
  if (km >= SCORE_ZERO_KM) return 0;
  // t: 0 at 15 km → 1 at SCORE_ZERO_KM
  const t = (km - 15) / (SCORE_ZERO_KM - 15);
  // Ease-out: high scores stretch farther (slightly forgiving)
  const score = 100 * (1 - Math.pow(t, 1.35));
  return Math.max(0, Math.min(100, Math.round(score)));
}

const els = {
  select: document.getElementById('screen-select'),
  play: document.getElementById('screen-play'),
  promptCity: document.getElementById('prompt-city'),
  promptMeta: document.getElementById('prompt-meta'),
  scoreDisplay: document.getElementById('score-display'),
  mapHint: document.getElementById('map-hint'),
  btnConfirm: document.getElementById('btn-confirm'),
  btnNext: document.getElementById('btn-next'),
  btnChange: document.getElementById('btn-change'),
  resultPanel: document.getElementById('result-panel'),
  resultDistance: document.getElementById('result-distance'),
  resultDetail: document.getElementById('result-detail'),
};

let map = null;
let guessMarker = null;
let truthMarker = null;
let line = null;
let guessLatLng = null;
let currentContinent = null;
let currentCity = null;
let usedCityKeys = new Set();
let totalScore = 0;
let roundOpen = false;

function haversineKm(a, b) {
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * EARTH_RADIUS_KM * Math.asin(Math.min(1, Math.sqrt(h)));
}

function formatKm(km) {
  if (km < 1) return `${Math.round(km * 1000)} m`;
  if (km < 100) return `${km.toFixed(1)} km`;
  return `${Math.round(km)} km`;
}

function cityKey(city) {
  return `${city.name}|${city.country}`;
}

function pickCity(continentId) {
  const pool = CONTINENTS[continentId].cities;
  const available = pool.filter((c) => !usedCityKeys.has(cityKey(c)));
  const source = available.length ? available : pool;
  if (!available.length) usedCityKeys.clear();
  return source[Math.floor(Math.random() * source.length)];
}

function markerIcon(className) {
  return L.divIcon({
    className: '',
    html: `<div class="${className}"></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });
}

function clearRoundGraphics() {
  if (guessMarker) {
    map.removeLayer(guessMarker);
    guessMarker = null;
  }
  if (truthMarker) {
    map.removeLayer(truthMarker);
    truthMarker = null;
  }
  if (line) {
    map.removeLayer(line);
    line = null;
  }
  guessLatLng = null;
}

function ensureMap() {
  if (map) {
    map.invalidateSize();
    return;
  }
  if (typeof L === 'undefined') {
    console.error('Leaflet failed to load');
    return;
  }
  map = L.map('map', {
    worldCopyJump: true,
    zoomControl: true,
  }).setView([20, 0], 2);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 18,
  }).addTo(map);

  map.on('click', (e) => {
    if (!roundOpen) return;
    guessLatLng = e.latlng;
    if (guessMarker) map.removeLayer(guessMarker);
    guessMarker = L.marker(e.latlng, { icon: markerIcon('gg-marker-guess'), draggable: true }).addTo(map);
    guessMarker.on('dragend', () => {
      guessLatLng = guessMarker.getLatLng();
    });
    els.btnConfirm.disabled = false;
    els.mapHint.classList.add('is-hidden');
  });
}

function fitContinent(id) {
  if (!map || !CONTINENTS[id]) return;
  const bounds = CONTINENTS[id].bounds;
  map.invalidateSize();
  map.fitBounds(bounds, { padding: [24, 24], animate: false });
}

function showScreen(which) {
  const isSelect = which === 'select';
  els.select.classList.toggle('is-active', isSelect);
  els.select.hidden = !isSelect;
  els.play.classList.toggle('is-active', !isSelect);
  els.play.hidden = isSelect;
}

function startContinent(id) {
  currentContinent = id;
  usedCityKeys.clear();
  totalScore = 0;
  els.scoreDisplay.textContent = '0';
  showScreen('play');
  ensureMap();
  // Leaflet needs a laid-out container; refresh after paint
  requestAnimationFrame(() => {
    fitContinent(id);
    setTimeout(() => fitContinent(id), 50);
  });
  nextRound();
}

function nextRound() {
  clearRoundGraphics();
  els.resultPanel.hidden = true;
  els.btnConfirm.disabled = true;
  els.btnConfirm.hidden = false;
  els.mapHint.classList.remove('is-hidden');
  roundOpen = true;

  currentCity = pickCity(currentContinent);
  usedCityKeys.add(cityKey(currentCity));

  els.promptCity.textContent = currentCity.name;
  els.promptMeta.textContent = `${currentCity.country} · ${CONTINENTS[currentContinent].label}`;

  fitContinent(currentContinent);
}

function confirmGuess() {
  if (!roundOpen || !guessLatLng || !currentCity) return;
  roundOpen = false;
  els.btnConfirm.disabled = true;
  els.btnConfirm.hidden = true;
  els.mapHint.classList.add('is-hidden');

  const truth = { lat: currentCity.lat, lng: currentCity.lng };
  const guess = { lat: guessLatLng.lat, lng: guessLatLng.lng };
  const km = haversineKm(guess, truth);
  const gained = scoreFromDistance(km);
  totalScore += gained;
  els.scoreDisplay.textContent = String(totalScore);

  truthMarker = L.marker([truth.lat, truth.lng], {
    icon: markerIcon('gg-marker-truth'),
  }).addTo(map);

  line = L.polyline(
    [
      [guess.lat, guess.lng],
      [truth.lat, truth.lng],
    ],
    { color: '#f0a830', weight: 2, opacity: 0.85, dashArray: '6 8' }
  ).addTo(map);

  map.fitBounds(L.latLngBounds([guess.lat, guess.lng], [truth.lat, truth.lng]).pad(0.35));

  els.resultDistance.textContent = formatKm(km) + ' away';
  els.resultDetail.textContent = `${currentCity.name} is in ${currentCity.country}. You scored ${gained} / ${MAX_ROUND_SCORE} this round.`;
  els.resultPanel.hidden = false;
}

function backToSelect() {
  roundOpen = false;
  clearRoundGraphics();
  showScreen('select');
}

document.querySelectorAll('.gg-continent').forEach((btn) => {
  btn.addEventListener('click', () => startContinent(btn.dataset.continent));
});
els.btnConfirm.addEventListener('click', confirmGuess);
els.btnNext.addEventListener('click', nextRound);
els.btnChange.addEventListener('click', backToSelect);
