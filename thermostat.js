import Weather from './weather.js';

export default class Thermostat {
  constructor(weather = new Weather) {
    this.temperature = 20;
    this.max_temperature = 25;
    this.min_temperature = 10;
    this.weather = weather;
  }

  setCity(city, callback) {
    this.weather.fetchWeatherData(city, (weatherData) => { 
      console.log(this.temperature = weatherData.main.temp);
      callback();
      });
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if(this.temperature < this.max_temperature) {
    this.temperature += 1;
    }
  }

  down() {
    if(this.temperature > this.min_temperature) {
      this.temperature -= 1;
  }
}

  setPowerSavingMode(boolean) {
    if (boolean === true) {
    this.max_temperature = 25;
    this.temperature = this.max_temperature;
  } else {
    return this.max_temperature = 32;
  }
}

  reset() {
    this.temperature = 20;
  }

  energyUsage() {
    if (this.temperature < 18) {
      return "low-usage";
    } 
    else if (this.temperature <= 25)
    { return "medium-usage";
    } else {
      return "high-usage";
    }
  }
}



// const thermostat = new Thermostat;
// thermostat.setCity("London", () => { 
//   console.log(thermostat.getTemperature());
//   console.log(thermostat.temperature);
//  });


//   console.log(thermostat.getTemperature());
// console.log(thermostat.temperature);