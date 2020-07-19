key = 'MAhp0ipbutyESak28D9QoEjSPShuQRyX';
lang = 'en-us';

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}&language=${lang}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

const getConditions = async (cityKey) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityKey}?apikey=${key}&language=${lang}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};
