import { WeatherToHTML } from "./modules/weather.js";

var searchBtn = document.getElementById("searchBtn");
var location;

searchBtn.addEventListener("click", function () {
    EmptyOldResults();
    GrabSearchValue();
    Post();
});

function EmptyOldResults() {
    document.getElementById("results").innerHTML = "";
}

function GrabSearchValue() {
    location = document.getElementById("searchParameter").value;
}

async function Post() {
    document.getElementById("results").innerHTML = await WeatherToHTML(location);
}


