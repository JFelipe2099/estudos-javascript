const key = 'MAhp0ipbutyESak28D9QoEjSPShuQRyX';

const citySearch = async (cityName='gravatá') => {
    const cityResource = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${cityName}&language=pt-br`;

    const loc = await fetch(cityResource);
    if (!loc.ok){
        throw new Error('Somethin went wrong!');
    }
    const city = await loc.json();
    return city;
};

const cityConditions = async (cityKey) => {
    const conditionResource = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${key}&language=pt-br`;
    const cond = await fetch(conditionResource);
    return cond.json();
}

// citySearch()
//     .then(city => cityConditions(city[0].Key))
//     .then(city => console.log(city))
//     .catch(err => console.log(err));

// export {citySearch, cityConditions};
// module.exports = {
//     citySearch: citySearch,
//     cityConditions: cityConditions
// }