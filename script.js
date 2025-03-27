async function getWeather() {
    const apiKey = "979b26fe48371044980e2079b4eec397"; // Replace with your API key
    const city = document.getElementById("cityInput").value;
    
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === "404") {
            document.getElementById("weatherResult").innerHTML = `<p>City not found. Try again.</p>`;
            return;
        }
        
        document.getElementById("weatherResult").innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather icon">
        `;
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = `<p>Error fetching data. Try again.</p>`;
    }
}
