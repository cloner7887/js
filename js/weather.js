const API_KEY = "cb3cf6e21fecd4b08343ad8fec6e0556";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    getWeather(lat, lng);
}

function onGeoError() {
    alert("Can't find you. Please try again.")
}

function getWeather(lat, lng) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city = document.querySelector("#weather > span:first-child");
            const weather = document.querySelector("#weather > span:last-child");
            
            city.innerText = data.name;
            weather.innerText = `temp : ${data.main.temp}℃ / weather : ${data.weather[0].main}`;
        });
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
