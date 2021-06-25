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

function Post() {
    WeatherToHTML(location).then(html => { document.getElementById("results").innerHTML = html });
}