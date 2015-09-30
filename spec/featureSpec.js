describe("thermostat", function() {

  beforeEach(function() {
    loadFixtures('index.html');
  });

  it('there is a temperature section', function() {
    expect($('#temperaturez')).toExist();
  });

});