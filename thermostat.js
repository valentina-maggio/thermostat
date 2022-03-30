class Thermostat {
  constructor() {
    this.temperature = 20;
    this.max_temperature = 25;
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
    this.temperature -= 1;
  }

  setPowerSavingMode(boolean) {
    if (boolean === true) {
    return this.max_temperature = 25;
  } else {
    return this.max_temperature = 32;
  }
}
}

module.exports = Thermostat;