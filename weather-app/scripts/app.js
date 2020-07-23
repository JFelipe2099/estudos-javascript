const form = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const dayNight = document.querySelector('.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

const changeUI = (data) => {
    const {cityDets, weather} = data;

    const html = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    details.innerHTML = html;
    
    if (card.classList.contains('card')){
        card.classList.remove('d-none');
    }

    const imgSrc = (weather.IsDayTime) ? './img/day.svg' : './img/night.svg';
    dayNight.src = imgSrc;
    icon.src = `./img/icons/${weather.WeatherIcon}.svg`;
}

form.addEventListener('submit', event => {
    event.preventDefault();

    const nomeDaCidade = form.city.value;
    form.reset();

    localStorage.setItem('cidade', nomeDaCidade);

    forecast.updateCity(nomeDaCidade)
        .then(data => changeUI(data))
        .catch(err => console.log(err));
});

if (localStorage.getItem('cidade')){
    forecast.updateCity(localStorage.getItem('cidade'))
        .then(data => changeUI(data))
        .catch(err => console.log(err));
}