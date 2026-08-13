/**
 * Major metros plus every country/territory capital (capitals included regardless of population).
 * Coordinates are city-center approximations.
 */
const CONTINENTS = {
  africa: {
    label: "Africa",
    bounds: [[-35.5, -18], [38, 52]],
    cities: [
      { name: "Cairo", country: "Egypt", lat: 30.0444, lng: 31.2357, pop: 10000000, capital: true },
      { name: "Lagos", country: "Nigeria", lat: 6.5244, lng: 3.3792, pop: 15000000 },
      { name: "Kinshasa", country: "DR Congo", lat: -4.4419, lng: 15.2663, pop: 15000000, capital: true },
      { name: "Johannesburg", country: "South Africa", lat: -26.2041, lng: 28.0473, pop: 5600000 },
      { name: "Nairobi", country: "Kenya", lat: -1.2921, lng: 36.8219, pop: 4400000, capital: true },
      { name: "Casablanca", country: "Morocco", lat: 33.5731, lng: -7.5898, pop: 3700000 },
      { name: "Addis Ababa", country: "Ethiopia", lat: 9.032, lng: 38.7469, pop: 5000000, capital: true },
      { name: "Cape Town", country: "South Africa", lat: -33.9249, lng: 18.4241, pop: 4600000 },
      { name: "Alexandria", country: "Egypt", lat: 31.2001, lng: 29.9187, pop: 5200000 },
      { name: "Abidjan", country: "Côte d'Ivoire", lat: 5.36, lng: -4.0083, pop: 5200000 },
      { name: "Accra", country: "Ghana", lat: 5.6037, lng: -0.187, pop: 2500000, capital: true },
      { name: "Dar es Salaam", country: "Tanzania", lat: -6.7924, lng: 39.2083, pop: 7000000 },
      { name: "Dakar", country: "Senegal", lat: 14.7167, lng: -17.4677, pop: 1500000, capital: true },
      { name: "Luanda", country: "Angola", lat: -8.839, lng: 13.2894, pop: 8300000, capital: true },
      { name: "Algiers", country: "Algeria", lat: 36.7538, lng: 3.0588, pop: 3400000, capital: true },
      { name: "Ouagadougou", country: "Burkina Faso", lat: 12.22, lng: -1.31, capital: true },
      { name: "Gitega", country: "Burundi", lat: -3.22, lng: 29.21, capital: true },
      { name: "Porto-Novo", country: "Benin", lat: 6.29, lng: 2.37, capital: true },
      { name: "Gaborone", country: "Botswana", lat: -24.45, lng: 25.55, capital: true },
      { name: "Kigali", country: "Rwanda", lat: -1.57, lng: 30.04, capital: true },
      { name: "Bissau", country: "Guinea-Bissau", lat: 11.51, lng: -15.35, capital: true },
      { name: "Malabo", country: "Equatorial Guinea", lat: 3.45, lng: 8.47, capital: true },
      { name: "Libreville", country: "Gabon", lat: 0.23, lng: 9.27, capital: true },
      { name: "Conakry", country: "Guinea", lat: 9.33, lng: -13.42, capital: true },
      { name: "Banjul", country: "Gambia", lat: 13.27, lng: -16.34, capital: true },
      { name: "Tunis", country: "Tunisia", lat: 36.48, lng: 10.11, capital: true },
      { name: "Lusaka", country: "Zambia", lat: -15.25, lng: 28.17, capital: true },
      { name: "El Aaiún", country: "Western Sahara", lat: 24.3, lng: -13.0, capital: true },
      { name: "Pretoria", country: "South Africa", lat: -25.42, lng: 28.13, capital: true },
      { name: "Mogadishu", country: "Somalia", lat: 2.04, lng: 45.22, capital: true },
      { name: "Harare", country: "Zimbabwe", lat: -17.5, lng: 31.03, capital: true },
      { name: "Asmara", country: "Eritrea", lat: 15.2, lng: 38.56, capital: true },
      { name: "Antananarivo", country: "Madagascar", lat: -18.55, lng: 47.31, capital: true },
      { name: "Rabat", country: "Morocco", lat: 34.01, lng: -6.49, capital: true },
      { name: "Bamako", country: "Mali", lat: 12.39, lng: -8.0, capital: true },
      { name: "Port Louis", country: "Mauritius", lat: -20.09, lng: 57.29, capital: true },
      { name: "Lilongwe", country: "Malawi", lat: -13.59, lng: 33.47, capital: true },
      { name: "Nouakchott", country: "Mauritania", lat: 18.07, lng: -16.02, capital: true },
      { name: "Kampala", country: "Uganda", lat: 0.19, lng: 32.25, capital: true },
      { name: "Diego Garcia", country: "British Indian Ocean Territory", lat: -6.0, lng: 71.3, capital: true },
      { name: "Jamestown", country: "Saint Helena, Ascension and Tristan da Cunha", lat: -15.56, lng: -5.44, capital: true },
      { name: "Windhoek", country: "Namibia", lat: -22.34, lng: 17.05, capital: true },
      { name: "Niamey", country: "Niger", lat: 13.31, lng: 2.07, capital: true },
      { name: "Abuja", country: "Nigeria", lat: 9.05, lng: 7.32, capital: true },
      { name: "Yamoussoukro", country: "Ivory Coast", lat: 6.49, lng: -5.17, capital: true },
      { name: "Yaoundé", country: "Cameroon", lat: 3.52, lng: 11.31, capital: true },
      { name: "Brazzaville", country: "Republic of the Congo", lat: -4.15, lng: 15.17, capital: true },
      { name: "Bangui", country: "Central African Republic", lat: 4.22, lng: 18.35, capital: true },
      { name: "Praia", country: "Cape Verde", lat: 14.55, lng: -23.31, capital: true },
      { name: "Lobamba", country: "Eswatini", lat: -26.18, lng: 31.06, capital: true },
      { name: "Moroni", country: "Comoros", lat: -11.42, lng: 43.14, capital: true },
      { name: "São Tomé", country: "São Tomé and Príncipe", lat: 0.12, lng: 6.39, capital: true },
      { name: "Freetown", country: "Sierra Leone", lat: 8.3, lng: -13.15, capital: true },
      { name: "Victoria", country: "Seychelles", lat: -4.38, lng: 55.27, capital: true },
      { name: "Khartoum", country: "Sudan", lat: 15.36, lng: 32.32, capital: true },
      { name: "Djibouti", country: "Djibouti", lat: 11.35, lng: 43.09, capital: true },
      { name: "Mamoudzou", country: "Mayotte", lat: -12.46, lng: 45.13, capital: true },
      { name: "Monrovia", country: "Liberia", lat: 6.18, lng: -10.48, capital: true },
      { name: "Maseru", country: "Lesotho", lat: -29.19, lng: 27.29, capital: true },
      { name: "Lomé", country: "Togo", lat: 6.08, lng: 1.13, capital: true },
      { name: "N'Djamena", country: "Chad", lat: 12.06, lng: 15.02, capital: true },
      { name: "Tripoli", country: "Libya", lat: 32.53, lng: 13.1, capital: true },
      { name: "Maputo", country: "Mozambique", lat: -25.57, lng: 32.35, capital: true },
      { name: "Dodoma", country: "Tanzania", lat: -6.163, lng: 35.7516, capital: true },
      { name: "Laayoune", country: "Western Sahara", lat: 27.1536, lng: -13.2033, capital: true },
      { name: "Hargeisa", country: "Somaliland", lat: 9.55, lng: 44.05, capital: true },
      { name: "Saint-Denis", country: "Réunion", lat: -20.8789, lng: 55.4481, capital: true },
      { name: "Jamestown", country: "Saint Helena", lat: -15.9387, lng: -5.7169, capital: true }
    ],
  },
  asia: {
    label: "Asia",
    bounds: [[-10, 35], [55, 145]],
    cities: [
      { name: "Tokyo", country: "Japan", lat: 35.6762, lng: 139.6503, pop: 37000000, capital: true },
      { name: "Delhi", country: "India", lat: 28.7041, lng: 77.1025, pop: 32000000, capital: true },
      { name: "Shanghai", country: "China", lat: 31.2304, lng: 121.4737, pop: 28000000 },
      { name: "Mumbai", country: "India", lat: 19.076, lng: 72.8777, pop: 21000000 },
      { name: "Beijing", country: "China", lat: 39.9042, lng: 116.4074, pop: 21000000, capital: true },
      { name: "Dhaka", country: "Bangladesh", lat: 23.8103, lng: 90.4125, pop: 22000000, capital: true },
      { name: "Osaka", country: "Japan", lat: 34.6937, lng: 135.5023, pop: 19000000 },
      { name: "Karachi", country: "Pakistan", lat: 24.8607, lng: 67.0011, pop: 16000000 },
      { name: "Chongqing", country: "China", lat: 29.4316, lng: 106.9123, pop: 16000000 },
      { name: "Istanbul", country: "Türkiye", lat: 41.0082, lng: 28.9784, pop: 15000000 },
      { name: "Manila", country: "Philippines", lat: 14.5995, lng: 120.9842, pop: 14000000, capital: true },
      { name: "Seoul", country: "South Korea", lat: 37.5665, lng: 126.978, pop: 9900000, capital: true },
      { name: "Jakarta", country: "Indonesia", lat: -6.2088, lng: 106.8456, pop: 11000000, capital: true },
      { name: "Bangkok", country: "Thailand", lat: 13.7563, lng: 100.5018, pop: 10000000, capital: true },
      { name: "Tehran", country: "Iran", lat: 35.6892, lng: 51.389, pop: 9000000, capital: true },
      { name: "Ho Chi Minh City", country: "Vietnam", lat: 10.8231, lng: 106.6297, pop: 9000000 },
      { name: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198, pop: 5900000, capital: true },
      { name: "Hong Kong", country: "China", lat: 22.3193, lng: 114.1694, pop: 7500000 },
      { name: "Bangalore", country: "India", lat: 12.9716, lng: 77.5946, pop: 12000000 },
      { name: "Bandar Seri Begawan", country: "Brunei", lat: 4.53, lng: 114.56, capital: true },
      { name: "Manama", country: "Bahrain", lat: 26.14, lng: 50.34, capital: true },
      { name: "Thimphu", country: "Bhutan", lat: 27.29, lng: 89.36, capital: true },
      { name: "Dili", country: "Timor-Leste", lat: -8.35, lng: 125.36, capital: true },
      { name: "Ashgabat", country: "Turkmenistan", lat: 37.57, lng: 58.23, capital: true },
      { name: "Dushanbe", country: "Tajikistan", lat: 38.35, lng: 68.48, capital: true },
      { name: "Tbilisi", country: "Georgia", lat: 41.43, lng: 44.47, capital: true },
      { name: "Muscat", country: "Oman", lat: 23.37, lng: 58.35, capital: true },
      { name: "Amman", country: "Jordan", lat: 31.57, lng: 35.56, capital: true },
      { name: "City of Victoria", country: "Hong Kong", lat: 22.15, lng: 114.1, capital: true },
      { name: "Ramallah", country: "Palestine", lat: 31.25, lng: 34.2, capital: true },
      { name: "Baghdad", country: "Iraq", lat: 33.2, lng: 44.23, capital: true },
      { name: "Islamabad", country: "Pakistan", lat: 33.42, lng: 73.1, capital: true },
      { name: "Hanoi", country: "Vietnam", lat: 21.02, lng: 105.51, capital: true },
      { name: "Riyadh", country: "Saudi Arabia", lat: 24.38, lng: 46.43, capital: true },
      { name: "Tashkent", country: "Uzbekistan", lat: 41.2, lng: 69.18, capital: true },
      { name: "Naypyidaw", country: "Myanmar", lat: 16.48, lng: 96.09, capital: true },
      { name: "Ulan Bator", country: "Mongolia", lat: 47.55, lng: 106.55, capital: true },
      { name: "Malé", country: "Maldives", lat: 4.1, lng: 73.3, capital: true },
      { name: "Kuala Lumpur", country: "Malaysia", lat: 3.1, lng: 101.42, capital: true },
      { name: "Jerusalem", country: "Israel", lat: 31.46, lng: 35.14, capital: true },
      { name: "Kathmandu", country: "Nepal", lat: 27.43, lng: 85.19, capital: true },
      { name: "Damascus", country: "Syria", lat: 33.3, lng: 36.18, capital: true },
      { name: "Bishkek", country: "Kyrgyzstan", lat: 42.52, lng: 74.36, capital: true },
      { name: "Phnom Penh", country: "Cambodia", lat: 11.33, lng: 104.55, capital: true },
      { name: "Pyongyang", country: "North Korea", lat: 39.01, lng: 125.45, capital: true },
      { name: "Kuwait City", country: "Kuwait", lat: 29.22, lng: 47.58, capital: true },
      { name: "Nur-Sultan", country: "Kazakhstan", lat: 51.1, lng: 71.25, capital: true },
      { name: "Sana'a", country: "Yemen", lat: 15.21, lng: 44.12, capital: true },
      { name: "Beirut", country: "Lebanon", lat: 33.52, lng: 35.3, capital: true },
      { name: "Vientiane", country: "Laos", lat: 17.58, lng: 102.36, capital: true },
      { name: "Taipei", country: "Taiwan", lat: 25.03, lng: 121.3, capital: true },
      { name: "Ankara", country: "Turkey", lat: 39.56, lng: 32.52, capital: true },
      { name: "Colombo", country: "Sri Lanka", lat: 6.56, lng: 79.51, capital: true },
      { name: "Abu Dhabi", country: "United Arab Emirates", lat: 24.28, lng: 54.22, capital: true },
      { name: "Kabul", country: "Afghanistan", lat: 34.31, lng: 69.11, capital: true },
      { name: "Yerevan", country: "Armenia", lat: 40.1, lng: 44.3, capital: true },
      { name: "Baku", country: "Azerbaijan", lat: 40.23, lng: 49.52, capital: true },
      { name: "Doha", country: "Qatar", lat: 25.17, lng: 51.32, capital: true },
      { name: "Sri Jayawardenepura Kotte", country: "Sri Lanka", lat: 6.887, lng: 79.9188, capital: true },
      { name: "Flying Fish Cove", country: "Christmas Island", lat: -10.4217, lng: 105.6791, capital: true },
      { name: "West Island", country: "Cocos (Keeling) Islands", lat: -12.1869, lng: 96.829, capital: true },
      { name: "Macau", country: "Macau", lat: 22.1987, lng: 113.5439, capital: true }
    ],
  },
  europe: {
    label: "Europe",
    bounds: [[35, -25], [71, 45]],
    cities: [
      { name: "Moscow", country: "Russia", lat: 55.7558, lng: 37.6173, pop: 12600000, capital: true },
      { name: "London", country: "United Kingdom", lat: 51.5074, lng: -0.1278, pop: 9500000, capital: true },
      { name: "Paris", country: "France", lat: 48.8566, lng: 2.3522, pop: 11000000, capital: true },
      { name: "Madrid", country: "Spain", lat: 40.4168, lng: -3.7038, pop: 6700000, capital: true },
      { name: "Barcelona", country: "Spain", lat: 41.3874, lng: 2.1686, pop: 5600000 },
      { name: "Berlin", country: "Germany", lat: 52.52, lng: 13.405, pop: 3700000, capital: true },
      { name: "Rome", country: "Italy", lat: 41.9028, lng: 12.4964, pop: 4300000, capital: true },
      { name: "Milan", country: "Italy", lat: 45.4642, lng: 9.19, pop: 3200000 },
      { name: "Kyiv", country: "Ukraine", lat: 50.4501, lng: 30.5234, pop: 2950000, capital: true },
      { name: "Bucharest", country: "Romania", lat: 44.4268, lng: 26.1025, pop: 2100000, capital: true },
      { name: "Vienna", country: "Austria", lat: 48.2082, lng: 16.3738, pop: 1900000, capital: true },
      { name: "Warsaw", country: "Poland", lat: 52.2297, lng: 21.0122, pop: 1800000, capital: true },
      { name: "Budapest", country: "Hungary", lat: 47.4979, lng: 19.0402, pop: 1750000, capital: true },
      { name: "Amsterdam", country: "Netherlands", lat: 52.3676, lng: 4.9041, pop: 2500000, capital: true },
      { name: "Athens", country: "Greece", lat: 37.9838, lng: 23.7275, pop: 3500000, capital: true },
      { name: "Lisbon", country: "Portugal", lat: 38.7223, lng: -9.1393, pop: 2900000, capital: true },
      { name: "Stockholm", country: "Sweden", lat: 59.3293, lng: 18.0686, pop: 1600000, capital: true },
      { name: "Prague", country: "Czechia", lat: 50.0755, lng: 14.4378, pop: 1300000, capital: true },
      { name: "Brussels", country: "Belgium", lat: 50.5, lng: 4.2, capital: true },
      { name: "Sofia", country: "Bulgaria", lat: 42.41, lng: 23.19, capital: true },
      { name: "Sarajevo", country: "Bosnia and Herzegovina", lat: 43.52, lng: 18.25, capital: true },
      { name: "Saint Helier", country: "Jersey", lat: 49.11, lng: -2.06, capital: true },
      { name: "Minsk", country: "Belarus", lat: 53.54, lng: 27.34, capital: true },
      { name: "Belgrade", country: "Serbia", lat: 44.5, lng: 20.3, capital: true },
      { name: "St. Peter Port", country: "Guernsey", lat: 49.27, lng: -2.32, capital: true },
      { name: "Gibraltar", country: "Gibraltar", lat: 36.08, lng: -5.21, capital: true },
      { name: "Zagreb", country: "Croatia", lat: 45.48, lng: 16.0, capital: true },
      { name: "Longyearbyen", country: "Svalbard and Jan Mayen", lat: 78.13, lng: 15.33, capital: true },
      { name: "Tallinn", country: "Estonia", lat: 59.26, lng: 24.43, capital: true },
      { name: "Podgorica", country: "Montenegro", lat: 42.26, lng: 19.16, capital: true },
      { name: "Chișinău", country: "Moldova", lat: 47.0, lng: 28.51, capital: true },
      { name: "Monaco", country: "Monaco", lat: 43.44, lng: 7.25, capital: true },
      { name: "Skopje", country: "North Macedonia", lat: 42.0, lng: 21.26, capital: true },
      { name: "Valletta", country: "Malta", lat: 35.53, lng: 14.3, capital: true },
      { name: "Douglas", country: "Isle of Man", lat: 54.09, lng: -4.29, capital: true },
      { name: "Helsinki", country: "Finland", lat: 60.1, lng: 24.56, capital: true },
      { name: "Tórshavn", country: "Faroe Islands", lat: 62.01, lng: -6.46, capital: true },
      { name: "Oslo", country: "Norway", lat: 59.55, lng: 10.45, capital: true },
      { name: "Bern", country: "Switzerland", lat: 46.57, lng: 7.26, capital: true },
      { name: "Nicosia", country: "Cyprus", lat: 35.1, lng: 33.22, capital: true },
      { name: "Bratislava", country: "Slovakia", lat: 48.09, lng: 17.07, capital: true },
      { name: "Ljubljana", country: "Slovenia", lat: 46.03, lng: 14.31, capital: true },
      { name: "City of San Marino", country: "San Marino", lat: 43.56, lng: 12.25, capital: true },
      { name: "Copenhagen", country: "Denmark", lat: 55.4, lng: 12.35, capital: true },
      { name: "Vaduz", country: "Liechtenstein", lat: 47.08, lng: 9.31, capital: true },
      { name: "Riga", country: "Latvia", lat: 56.57, lng: 24.06, capital: true },
      { name: "Vilnius", country: "Lithuania", lat: 54.41, lng: 25.19, capital: true },
      { name: "Luxembourg", country: "Luxembourg", lat: 49.36, lng: 6.07, capital: true },
      { name: "Vatican City", country: "Vatican City", lat: 41.54, lng: 12.27, capital: true },
      { name: "Andorra la Vella", country: "Andorra", lat: 42.3, lng: 1.31, capital: true },
      { name: "Reykjavik", country: "Iceland", lat: 64.09, lng: -21.57, capital: true },
      { name: "Tirana", country: "Albania", lat: 41.19, lng: 19.49, capital: true },
      { name: "Dublin", country: "Ireland", lat: 53.19, lng: -6.14, capital: true },
      { name: "Pristina", country: "Kosovo", lat: 42.6629, lng: 21.1655, capital: true },
      { name: "Saint Peter Port", country: "Guernsey", lat: 49.4542, lng: -2.5369, capital: true },
      { name: "Longyearbyen", country: "Svalbard", lat: 78.2232, lng: 15.6267, capital: true }
    ],
  },
  'north-america': {
    label: "North America",
    bounds: [[5, -170], [72, -50]],
    cities: [
      { name: "Mexico City", country: "Mexico", lat: 19.4326, lng: -99.1332, pop: 22000000, capital: true },
      { name: "New York", country: "United States", lat: 40.7128, lng: -74.006, pop: 18800000 },
      { name: "Los Angeles", country: "United States", lat: 34.0522, lng: -118.2437, pop: 13000000 },
      { name: "Chicago", country: "United States", lat: 41.8781, lng: -87.6298, pop: 8900000 },
      { name: "Houston", country: "United States", lat: 29.7604, lng: -95.3698, pop: 7000000 },
      { name: "Toronto", country: "Canada", lat: 43.6532, lng: -79.3832, pop: 6200000 },
      { name: "Miami", country: "United States", lat: 25.7617, lng: -80.1918, pop: 6100000 },
      { name: "Dallas", country: "United States", lat: 32.7767, lng: -96.797, pop: 7600000 },
      { name: "Philadelphia", country: "United States", lat: 39.9526, lng: -75.1652, pop: 6100000 },
      { name: "Atlanta", country: "United States", lat: 33.749, lng: -84.388, pop: 6000000 },
      { name: "Washington", country: "United States", lat: 38.9072, lng: -77.0369, pop: 6300000, capital: true },
      { name: "Montreal", country: "Canada", lat: 45.5017, lng: -73.5673, pop: 4200000 },
      { name: "Vancouver", country: "Canada", lat: 49.2827, lng: -123.1207, pop: 2600000 },
      { name: "Guadalajara", country: "Mexico", lat: 20.6597, lng: -103.3496, pop: 5200000 },
      { name: "Monterrey", country: "Mexico", lat: 25.6866, lng: -100.3161, pop: 5000000 },
      { name: "Havana", country: "Cuba", lat: 23.1136, lng: -82.3666, pop: 2100000, capital: true },
      { name: "San Francisco", country: "United States", lat: 37.7749, lng: -122.4194, pop: 4700000 },
      { name: "Phoenix", country: "United States", lat: 33.4484, lng: -112.074, pop: 4800000 },
      { name: "Bridgetown", country: "Barbados", lat: 13.06, lng: -59.37, capital: true },
      { name: "Gustavia", country: "Saint Barthélemy", lat: 17.53, lng: -62.51, capital: true },
      { name: "Hamilton", country: "Bermuda", lat: 32.17, lng: -64.47, capital: true },
      { name: "Kingston", country: "Jamaica", lat: 18.0, lng: -76.48, capital: true },
      { name: "Nassau", country: "Bahamas", lat: 25.05, lng: -77.21, capital: true },
      { name: "Belmopan", country: "Belize", lat: 17.15, lng: -88.46, capital: true },
      { name: "Guatemala City", country: "Guatemala", lat: 14.37, lng: -90.31, capital: true },
      { name: "St. George's", country: "Grenada", lat: 12.03, lng: -61.45, capital: true },
      { name: "San Salvador", country: "El Salvador", lat: 13.42, lng: -89.12, capital: true },
      { name: "Nuuk", country: "Greenland", lat: 64.11, lng: -51.45, capital: true },
      { name: "Port-au-Prince", country: "Haiti", lat: 18.32, lng: -72.2, capital: true },
      { name: "Tegucigalpa", country: "Honduras", lat: 14.06, lng: -87.13, capital: true },
      { name: "San Juan", country: "Puerto Rico", lat: 18.28, lng: -66.07, capital: true },
      { name: "Panama City", country: "Panama", lat: 8.58, lng: -79.32, capital: true },
      { name: "Saint-Pierre", country: "Saint Pierre and Miquelon", lat: 46.46, lng: -56.11, capital: true },
      { name: "Marigot", country: "Saint Martin", lat: 18.04, lng: -63.05, capital: true },
      { name: "Plymouth", country: "Montserrat", lat: 16.42, lng: -62.13, capital: true },
      { name: "Managua", country: "Nicaragua", lat: 12.09, lng: -86.17, capital: true },
      { name: "Ottawa", country: "Canada", lat: 45.25, lng: -75.42, capital: true },
      { name: "San José", country: "Costa Rica", lat: 9.56, lng: -84.05, capital: true },
      { name: "Basseterre", country: "Saint Kitts and Nevis", lat: 17.18, lng: -62.43, capital: true },
      { name: "George Town", country: "Cayman Islands", lat: 19.18, lng: -81.23, capital: true },
      { name: "Santo Domingo", country: "Dominican Republic", lat: 18.28, lng: -69.54, capital: true },
      { name: "Roseau", country: "Dominica", lat: 15.18, lng: -61.24, capital: true },
      { name: "Road Town", country: "British Virgin Islands", lat: 18.27, lng: -64.37, capital: true },
      { name: "Castries", country: "Saint Lucia", lat: 14.01, lng: -61.0, capital: true },
      { name: "Port of Spain", country: "Trinidad and Tobago", lat: 10.39, lng: -61.31, capital: true },
      { name: "Cockburn Town", country: "Turks and Caicos Islands", lat: 21.28, lng: -71.08, capital: true },
      { name: "Kingstown", country: "Saint Vincent and the Grenadines", lat: 13.09, lng: -61.14, capital: true },
      { name: "Saint John's", country: "Antigua and Barbuda", lat: 17.07, lng: -61.51, capital: true },
      { name: "The Valley", country: "Anguilla", lat: 18.13, lng: -63.03, capital: true },
      { name: "Charlotte Amalie", country: "United States Virgin Islands", lat: 18.21, lng: -64.56, capital: true },
      { name: "Oranjestad", country: "Aruba", lat: 12.31, lng: -70.02, capital: true },
      { name: "Charlotte Amalie", country: "U.S. Virgin Islands", lat: 18.3419, lng: -64.9307, capital: true },
      { name: "Brades", country: "Montserrat", lat: 16.7929, lng: -62.2106, capital: true },
      { name: "Philipsburg", country: "Sint Maarten", lat: 18.0425, lng: -63.0548, capital: true },
      { name: "Kralendijk", country: "Caribbean Netherlands", lat: 12.1444, lng: -68.2655, capital: true },
      { name: "Willemstad", country: "Curaçao", lat: 12.1224, lng: -68.8824, capital: true }
    ],
  },
  'south-america': {
    label: "South America",
    bounds: [[-56, -82], [13, -34]],
    cities: [
      { name: "São Paulo", country: "Brazil", lat: -23.5505, lng: -46.6333, pop: 22000000 },
      { name: "Buenos Aires", country: "Argentina", lat: -34.6037, lng: -58.3816, pop: 15000000, capital: true },
      { name: "Rio de Janeiro", country: "Brazil", lat: -22.9068, lng: -43.1729, pop: 13000000 },
      { name: "Lima", country: "Peru", lat: -12.0464, lng: -77.0428, pop: 10700000, capital: true },
      { name: "Bogotá", country: "Colombia", lat: 4.711, lng: -74.0721, pop: 11000000, capital: true },
      { name: "Santiago", country: "Chile", lat: -33.4489, lng: -70.6693, pop: 6800000, capital: true },
      { name: "Caracas", country: "Venezuela", lat: 10.4806, lng: -66.9036, pop: 2900000, capital: true },
      { name: "Brasília", country: "Brazil", lat: -15.8267, lng: -47.9218, pop: 4700000, capital: true },
      { name: "Medellín", country: "Colombia", lat: 6.2476, lng: -75.5658, pop: 4000000 },
      { name: "Guayaquil", country: "Ecuador", lat: -2.1709, lng: -79.9224, pop: 2700000 },
      { name: "Quito", country: "Ecuador", lat: -0.1807, lng: -78.4678, pop: 2800000, capital: true },
      { name: "Recife", country: "Brazil", lat: -8.0476, lng: -34.877, pop: 4000000 },
      { name: "Salvador", country: "Brazil", lat: -12.9777, lng: -38.5016, pop: 3900000 },
      { name: "Belo Horizonte", country: "Brazil", lat: -19.9167, lng: -43.9345, pop: 5900000 },
      { name: "Montevideo", country: "Uruguay", lat: -34.9011, lng: -56.1645, pop: 1700000, capital: true },
      { name: "La Paz", country: "Bolivia", lat: -16.5, lng: -68.15, pop: 1800000, capital: true },
      { name: "Georgetown", country: "Guyana", lat: 6.48, lng: -58.1, capital: true },
      { name: "Asunción", country: "Paraguay", lat: -25.16, lng: -57.4, capital: true },
      { name: "Stanley", country: "Falkland Islands", lat: -51.42, lng: -57.51, capital: true },
      { name: "Paramaribo", country: "Suriname", lat: 5.5, lng: -55.1, capital: true },
      { name: "Sucre", country: "Bolivia", lat: -19.0196, lng: -65.2619, capital: true },
      { name: "Cayenne", country: "French Guiana", lat: 4.9224, lng: -52.3135, capital: true }
    ],
  },
  oceania: {
    label: "Oceania",
    bounds: [[-48, 110], [5, 180]],
    cities: [
      { name: "Sydney", country: "Australia", lat: -33.8688, lng: 151.2093, pop: 5300000 },
      { name: "Melbourne", country: "Australia", lat: -37.8136, lng: 144.9631, pop: 5000000 },
      { name: "Brisbane", country: "Australia", lat: -27.4698, lng: 153.0251, pop: 2500000 },
      { name: "Perth", country: "Australia", lat: -31.9505, lng: 115.8605, pop: 2100000 },
      { name: "Auckland", country: "New Zealand", lat: -36.8509, lng: 174.7645, pop: 1700000 },
      { name: "Adelaide", country: "Australia", lat: -34.9285, lng: 138.6007, pop: 1400000 },
      { name: "Gold Coast", country: "Australia", lat: -28.0167, lng: 153.4, pop: 700000 },
      { name: "Christchurch", country: "New Zealand", lat: -43.5321, lng: 172.6362, pop: 390000 },
      { name: "Wellington", country: "New Zealand", lat: -41.2865, lng: 174.7762, pop: 430000, capital: true },
      { name: "Mata-Utu", country: "Wallis and Futuna", lat: -13.57, lng: -171.56, capital: true },
      { name: "Apia", country: "Samoa", lat: -13.5, lng: -171.44, capital: true },
      { name: "Fakaofo", country: "Tokelau", lat: -9.0, lng: -172.0, capital: true },
      { name: "Hagåtña", country: "Guam", lat: 13.28, lng: 144.44, capital: true },
      { name: "Ngerulmud", country: "Palau", lat: 7.29, lng: 134.38, capital: true },
      { name: "Papeete", country: "French Polynesia", lat: -17.32, lng: -149.34, capital: true },
      { name: "Port Moresby", country: "Papua New Guinea", lat: -9.3, lng: 147.1, capital: true },
      { name: "Adamstown", country: "Pitcairn Islands", lat: -25.04, lng: -130.05, capital: true },
      { name: "Honiara", country: "Solomon Islands", lat: -9.26, lng: 159.57, capital: true },
      { name: "Majuro", country: "Marshall Islands", lat: 7.06, lng: 171.23, capital: true },
      { name: "Saipan", country: "Northern Mariana Islands", lat: 15.12, lng: 145.45, capital: true },
      { name: "Suva", country: "Fiji", lat: -18.08, lng: 178.25, capital: true },
      { name: "Palikir", country: "Micronesia", lat: 6.55, lng: 158.09, capital: true },
      { name: "Port Vila", country: "Vanuatu", lat: -17.44, lng: 168.19, capital: true },
      { name: "Nouméa", country: "New Caledonia", lat: -22.16, lng: 166.27, capital: true },
      { name: "Kingston", country: "Norfolk Island", lat: -29.03, lng: 167.58, capital: true },
      { name: "Yaren", country: "Nauru", lat: -0.32, lng: 166.55, capital: true },
      { name: "Alofi", country: "Niue", lat: -19.01, lng: -169.55, capital: true },
      { name: "Avarua", country: "Cook Islands", lat: -21.12, lng: -159.46, capital: true },
      { name: "West Island", country: "Cocos (Keeling) Islands", lat: -12.1, lng: 96.5, capital: true },
      { name: "Flying Fish Cove", country: "Christmas Island", lat: -10.25, lng: 105.43, capital: true },
      { name: "South Tarawa", country: "Kiribati", lat: 1.19, lng: 172.58, capital: true },
      { name: "Funafuti", country: "Tuvalu", lat: -8.3, lng: 179.12, capital: true },
      { name: "Nuku'alofa", country: "Tonga", lat: -21.08, lng: -175.12, capital: true },
      { name: "Pago Pago", country: "American Samoa", lat: -14.16, lng: -170.42, capital: true },
      { name: "Canberra", country: "Australia", lat: -35.17, lng: 149.13, capital: true }
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
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community',
    maxZoom: 19,
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

  els.promptCity.textContent = `${currentCity.name}, ${currentCity.country}`;
  els.promptMeta.textContent = currentCity.capital
    ? `Capital · ${CONTINENTS[currentContinent].label}`
    : CONTINENTS[currentContinent].label;

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
