describe('rickAstleyDancer', function() {

  var rickAstleyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rickAstleyDancer = new RickAstleyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rickAstleyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a class that makes it a popping disco party', function() {
    expect(rickAstleyDancer.$node.find('img').hasClass('disco')).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(rickAstleyDancer, 'step');
      expect(rickAstleyDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rickAstleyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rickAstleyDancer.step.callCount).to.be.equal(2);
    });
  });
});
