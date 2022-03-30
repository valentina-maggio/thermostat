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
})
