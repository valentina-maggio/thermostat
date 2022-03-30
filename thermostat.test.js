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

  it('does not increase temperature above max temp', () => {
    const sut = new Thermostat();
    for (let i = 0 ; i < 10 ; i++) {
      sut.up();
    }
    expect(sut.getTemperature()).toBe(25);
  });
  it('does not increase temperature above max temp', () => {
    const sut = new Thermostat();
    for (let i = 0 ; i < 10 ; i++) {
      sut.up();
    }
    sut.setPowerSavingMode(false);
    sut.up();
    expect(sut.getTemperature()).toBe(26);
  });
  it('does not increase temperature above max temp', () => {
    const sut = new Thermostat();
    sut.setPowerSavingMode(false);
    for (let i = 0 ; i < 15 ; i++) {
      sut.up();
    }
    expect(sut.getTemperature()).toBe(32);
  });
  it('does not decrease temperature below min temp', () => {
    const sut = new Thermostat();
    for (let i = 0 ; i < 22 ; i++) {
      sut.down();
    }
    expect(sut.getTemperature()).toBe(10);
  });
  it('resets the temperature to 20', () => {
    const sut = new Thermostat();
    sut.up();
    sut.reset();
    expect(sut.getTemperature()).toBe(20);
  });
  it('changes the max temp when power saving mode activated', () => {
    const sut = new Thermostat();
    sut.setPowerSavingMode(false);
    for (let i = 0 ; i < 15 ; i++) {
      sut.up();
    }
    sut.setPowerSavingMode(true);
    expect(sut.getTemperature()).toBe(25);
  });
})
