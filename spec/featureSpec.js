describe("thermostat", function() {

  beforeEach(function() {
    loadFixtures('index.html');
  });

  it('there is an up button', function() {
    expect($('#upbutton')).toExist();
  });

});