// API Key: 4585c4c190d1f33203d6cd396638aa4e
var searchBtn = document.getElementById("searchBtn");
var searchValue;

searchBtn.addEventListener("click", function () {
    EmptyOldResults();
    GrabSearchValue();
    GrabWeatherResults();
});

function EmptyOldResults() {
    document.getElementById("results").innerHTML = "";
}

function GrabSearchValue() {
    searchValue = document.getElementById("searchParameter").value;
}

function GrabWeatherResults() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=4585c4c190d1f33203d6cd396638aa4e`, { mode: 'cors' })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let place = data.name;
            let weather = data.weather[0].main;
            let temp = data.main.temp;
            let feelsLike = data.main.feels_like;
            PostResults(place, weather, temp, feelsLike);
        });
}

function KelvinToCelsius(temperature) {
    return parseInt(temperature - 273);
}


function PostResults(place, weather, temp, feelsLike) {
    var card = document.createElement("div");
    card.setAttribute("class", "card");

    card.innerHTML = `
        <div class="card-body">
          <h3 class="card-title">${place}</h3>
          <h5 class="card-subtitle mb-2 text-muted">${weather}</h5>
          <p class="card-text">Temperature is ${KelvinToCelsius(temp)}°C\nFeels like ${KelvinToCelsius(feelsLike)}°C</p>
        </div>
    `
    document.getElementById("results").appendChild(card);
}
