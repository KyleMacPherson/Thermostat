function Thermostat() {
  this.temperature = 20
  this.powerModeON = true
  // this.updateTemp()
};

Thermostat.prototype.tempUp = function(num) {
  this.temperature += num;
  if (this.tooHot()){
    this.temperature = 25;
  }
  else if (!this.powerModeON && this.temperature > 32) {
    this.temperature = 32;
  }
  // this.updateTemp()
};

Thermostat.prototype.tempDown = function(num) {
  this.temperature -= num;
  if(this.temperature < 10){
    this.temperature = 10;
  }
  // this.updateTemp()
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
  // this.updateTemp()
};

Thermostat.prototype.switchPowermode = function() {
  this.powerModeON = !this.powerModeON
  if (this.tooHot()) {
    this.temperature = 25;
  }
  // this.updateTemp()
};


Thermostat.prototype.tooHot = function () {
  if(this.powerModeON && this.temperature > 25) {
    return true
  }
};

// Thermostat.prototype.updateTemp = function () {
//     window.document.getElementById('temperature').innerHTML = this.temperature;
//     if(this.temperature < 18) {
//       window.document.getElementById('temperature').style.color = 'green'
//     } else if (this.temperature < 25) {
//       window.document.getElementById('temperature').style.color = 'yellow'
//     } else {
//       window.document.getElementById('temperature').style.color = 'red'
//     }
//
// };
//
//   Thermostat.prototype.toggle = function () {
//     this.checked = !this.checked;
//   };
//
//
// t = new Thermostat()
