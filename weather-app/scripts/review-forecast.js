class Forecast{
    constructor(){
        this.key =  'MAhp0ipbutyESak28D9QoEjSPShuQRyX';
        this.language = 'en-us';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    }

    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}&language=${this.language}`;

        const response = await fetch(this.cityURI + query);
        const data = await response.json();

        return data[0];
    }

    async getConditions(cityKey){
        const query = `${cityKey}?apikey=${this.key}&language=${this.language}`;

        const response = await fetch(this.weatherURI + query);
        const data = await response.json();

        return data[0];
    }

    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getConditions(cityDets.Key);

        return {cityDets, weather};
    }
}
