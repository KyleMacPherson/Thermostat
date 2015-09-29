describe("thermostat", function() {

  it('starts at 20 degrees', function() {
    thermostat = new Thermostat;
    expect(thermostat.temperature).toEqual(20)
  });

  it('can increase temperature', function() {
    thermostat = new Thermostat;
    thermostat.tempUp(10);
    expect(thermostat.temperature).toEqual(30)
  });

  it('can decrease temperature', function() {
    thermostat = new Thermostat;
    thermostat.tempDown(3);
    expect(thermostat.temperature).toEqual(17)
  });

  it('has a minimum temperature of 10 degrees', function() {
    thermostat = new Thermostat;
    thermostat.tempDown(50);
    expect(thermostat.temperature).toEqual(10)
  });

  it('has power mode switched on by default', function() {
    thermostat = new Thermostat;
    expect(thermostat.powerModeON).toBe(true)
  });



});
