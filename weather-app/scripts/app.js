// const {citySearch, cityConditions} = require('./forecast.js');

const form = document.querySelector('.change-location');
const displayCityName = document.querySelector('.details h5');
const weatherCondition = document.querySelector('.details div');
const displayTemperature = document.querySelector('.details span');

form.addEventListener('submit', event => {
    event.preventDefault();

    const nomeDaCidade = form.city.value;
    // console.log(city);

    citySearch(nomeDaCidade)
    .then(city => cityConditions(city[0].Key))
    .then(city => {
        const target = city[0];

        displayCityName.textContent = nomeDaCidade;
        weatherCondition.textContent = target.WeatherText;
        displayTemperature.textContent = target.Temperature.Metric.Value;
    })
    .catch(err => console.log(err));

});