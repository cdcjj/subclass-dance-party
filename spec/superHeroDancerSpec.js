describe('superHeroDancer', function() {

  var superHeroDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    superHeroDancer = new SuperHeroDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(superHeroDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node be a hero', function() {
    sinon.spy(superHeroDancer.$node, 'toggleClass');
    superHeroDancer.step();
    expect(superHeroDancer.$node.toggleClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(superHeroDancer, 'step');
      expect(superHeroDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(superHeroDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(superHeroDancer.step.callCount).to.be.equal(2);
    });
  });
});
