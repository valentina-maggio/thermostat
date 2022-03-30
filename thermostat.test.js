const Thermostat = require('./thermostat.js');

describe('Thermostat', () => {
  it('returns the initial temperature', () => {
    const sut = new Thermostat();
    expect(sut.getTemperature()).toBe(20);
  });

  it('returns an increased temperature', () => {
    const sut = new Thermostat();
    sut.up();
    sut.up();
    expect(sut.getTemperature()).toBe(22);
  });

  it('increases then decreases temperature', () => {
    const sut = new Thermostat();
    sut.up();
    sut.up();
    sut.down();
    expect(sut.getTemperature()).toBe(21);
  });
  it('turns on power saving mode', () => {
    const sut = new Thermostat();
    sut.setPowerSavingMode(true);
    expect(sut.max_temperature).toBe(25);
  });
  it('turns off power saving mode', () => {
    const sut = new Thermostat();
    sut.setPowerSavingMode(true);
    sut.setPowerSavingMode(false);
    expect(sut.max_temperature).toBe(32);
  });
})
