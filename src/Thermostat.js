function Thermostat() {
  this.temperature = 20
  this.powerModeON = true
};

Thermostat.prototype.tempUp = function(num) {
  this.temperature += num;
};

Thermostat.prototype.tempDown = function(num) {
  this.temperature -= num;
  if(this.temperature < 10){
    this.temperature = 10;
  }
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};
