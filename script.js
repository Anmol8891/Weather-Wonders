function getWeather() {
  const city = document.getElementById("cityInput").value.trim().toLowerCase();
  const result = document.getElementById("weatherResult");

  const fakeWeatherData = {
    delhi: { temp: 34, condition: "Sunny", icon: "☀️" },
    mumbai: { temp: 29, condition: "Rainy", icon: "🌧️" },
    london: { temp: 17, condition: "Cloudy", icon: "☁️" },
    paris: { temp: 22, condition: "Partly Cloudy", icon: "🌤️" },
    newyork: { temp: 25, condition: "Windy", icon: "💨" },
    tokyo: { temp: 27, condition: "Humid", icon: "🌫️" }
  };

  if (!city) {
    result.innerHTML = `<p>❗ Please enter a city name.</p>`;
    return;
  }

  const data = fakeWeatherData[city];
  if (data) {
    result.innerHTML = `
      <p><strong>${city.charAt(0).toUpperCase() + city.slice(1)}</strong></p>
      <p>${data.icon} ${data.condition}</p>
      <p>🌡 Temperature: ${data.temp} °C</p>
      <p>📅 Updated just now</p>
    `;
  } else {
    result.innerHTML = `<p>🚫 Weather for "${city}" is not available.</p>`;
  }
}
