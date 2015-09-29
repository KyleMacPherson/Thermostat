describe("thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat;
  });


  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it('can increase temperature', function() {
    thermostat.tempUp(3);
    expect(thermostat.temperature).toEqual(23)
  });

  it('can decrease temperature', function() {
    thermostat.tempDown(3);
    expect(thermostat.temperature).toEqual(17)
  });

  it('has a minimum temperature of 10 degrees', function() {
    thermostat.tempDown(50);
    expect(thermostat.temperature).toEqual(10)
  });

  it('has power mode switched on by default', function() {
    expect(thermostat.powerModeON).toBe(true)
  });

  it('can switch power mode off', function() {
    thermostat.switchPowermode();
    expect(thermostat.powerModeON).toBe(false);
  });


  it('can switch power mode on',function(){
    thermostat.switchPowermode();
    thermostat.switchPowermode();
    expect(thermostat.powerModeON).toBe(true);
  });


  it('cannot have temp higher than 25 when power mode ON',function() {
    thermostat.tempUp(50);
    expect(thermostat.temperature).toEqual(25)
  });


  it('cannot have temp higher than 32 when power mode OFF', function() {
    thermostat.switchPowermode();
    thermostat.tempUp(50);
    expect(thermostat.temperature).toEqual(32)
  });

  it('resets to 20',function() {
    thermostat.tempUp(5);
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20)
  });

  it('does not stay above 25 if power saving mode switch on', function() {
    thermostat.switchPowermode();
    thermostat.tempUp(12);
    thermostat.switchPowermode();
    expect(thermostat.temperature).toEqual(25)
  });


});
