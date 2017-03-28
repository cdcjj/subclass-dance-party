describe('batmanDancer', function() {

  var batmanDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    batmanDancer = new BatmanDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(batmanDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a class that makes it fly', function() {
    expect(batmanDancer.$node.find('img').hasClass('fly')).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(batmanDancer, 'step');
      expect(batmanDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(batmanDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(batmanDancer.step.callCount).to.be.equal(2);
    });
  });
});
