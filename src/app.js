

t = new Thermostat;

$(document).ready(function() {

    var showTempVar = (function() {
     $('#temperature').text(t.temperature);
    });

    showTempVar();

    $('#upbutton').mouseup(function(){
      t.tempUp(1);
      showTempVar();
    });

    $('#downbutton').mouseup(function(){
      t.tempDown(1);
      showTempVar();
    });

    $('#reset').mouseup(function() {
      t.reset();
      showTempVar();
    });

    $('#power_save').mouseup(function() {
      t.switchPowermode();
      showTempVar();
    });


});
