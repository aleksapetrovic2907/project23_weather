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

function PostResults(place, weather, temp, feelsLike) {
    var card = document.createElement("div");
    card.setAttribute("class", "card");

    var cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    var name = document.createElement("h3");
    name.setAttribute("class", "card-title");
    name.innerText = place;

    var bg = document.createElement('div');
	bg.setAttribute('class', 'bg-div');
	bg.style.backgroundImage = `url(${getImage(id)})`

    var atmo = document.createElement("h5");
    atmo.setAttribute("class", "card-subtitle mb-2 text-muted");
    atmo.innerText = weather;

    var temperature = document.createElement("p");
    temperature.setAttribute("class", "card-text");
    temperature.innerText = `Temperature is ${KelvinToCelsius(temp)}°C\nFeels like ${KelvinToCelsius(feelsLike)}°C`;

    cardBody.append(name, bg, atmo, temperature);
    card.appendChild(cardBody);

    document.getElementById("results").appendChild(card);
}

function KelvinToCelsius(temperature) {
    return parseInt(temperature - 273);
}
