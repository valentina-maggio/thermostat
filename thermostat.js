class Thermostat {
  constructor() {
    this.temperature = 20;
    this.max_temperature = 25;
    this.min_temperature = 10;
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
}

module.exports = Thermostat;