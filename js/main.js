window.addEventListener('DOMContentLoaded', loadWeather);

function loadWeather() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.status === 200) {
        let response = JSON.parse(this.response);
        document.querySelector('.weather__temp').innerHTML = `${Math.round(response.main.temp)}&deg`;
        document.querySelector('.weather__desc').textContent = response.weather[0].description;
        document.querySelector('.weather__city').innerHTML = `
        ${response.name}, <span class="country">${response.sys.country}</span>
        `;
        document.querySelector('.weather__icon').setAttribute('src', `http://openweathermap.org/img/w/${response.weather[0].icon}.png`);
        console.log(response.main.temp);
        }
    }
    xhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Malmoe&units=metric&APPID=cb95478d73e0c30d7837a71c615b03b4', true);
    xhttp.send();
}