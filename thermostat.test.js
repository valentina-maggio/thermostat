const Thermostat = require('./thermostat.js');

describe('Thermostat', () => {
  it('returns the initial temperature', () => {
    const sut = new Thermostat();
    expect(sut.getTemperature()).toBe(20);
  });
})
