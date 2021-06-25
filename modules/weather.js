import { KelvinToCelsius } from "./temperature_converter.js";
export { WeatherToHTML };

function WeatherToHTML(location) {
    var a = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4585c4c190d1f33203d6cd396638aa4e`, { mode: 'cors' })
        var d = a.then(response => response.json())
        var f = d.then(data => {
        return `
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">${data.name}</h3>
                <h5 class="card-subtitle mb-2 text-muted">${data.weather[0].main}</h5>
                <p class="card-text">Temperature is ${KelvinToCelsius(data.main.temp)}°C\nFeels like ${KelvinToCelsius(data.main.feels_like)}°C</p>
            </div>
        </div>`
        
        })

    return f;
}