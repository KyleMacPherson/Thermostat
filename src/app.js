t = new Thermostat;

var city = "London"

$(document).ready(function() {

  var showTempVar = (function() {
    $('#city').text(t.city)
    $('#temperature').text(t.temperature);
    if (t.temperature < 18) {
      $('.temp').css('color', 'green');
    } else if (t.temperature < 25) {
      $('.temp').css('color', 'orange');
    } else {
      $('.temp').css('color', 'red');
    }
  });


  showTempVar();

  $('#upbutton').mouseup(function() {
    t.tempUp(1);
    showTempVar();
  });

  $('#downbutton').mouseup(function() {
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

  $('#submit-city').click(function() {
    var city = $('#city').val();
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&callback=?', function(data) {
      $('#summary').text(data.main.temp + ' \xB0C in ' + data.name); //This is a pain to find
    });
  });

  // $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&callback=?', function(data) {
  //   $('#summary').text(data.main.temp + ' \xB0C in ' + data.name); //This is a pain to find
  // });

});
