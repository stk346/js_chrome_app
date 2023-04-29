
const API_KEY = "ed30b827b52b8469fc5000aaadc50853";

function onGeoOk(position) {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
    .then(response => response.json())
    .then(
        data => {
        const weather = document.querySelector("#weather span:last-child");
        const city = document.querySelector("#weather span:first-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    });
}

function onGeoError() {
    alert("can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

