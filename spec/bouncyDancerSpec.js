describe('bouncyDancer', function() {

  var bouncyDancer, clock;
  var timeBetweenSteps = 50;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = new BouncyDancer(100, 100, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(bouncyDancer.$node, 'toggle');
    bouncyDancer.step();
    expect(bouncyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least twice per second', function() {
      sinon.spy(bouncyDancer, 'step');
      expect(bouncyDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bouncyDancer.step.callCount).to.be.equal(2);

      clock.tick(timeBetweenSteps);
      expect(bouncyDancer.step.callCount).to.be.equal(4);
    });
  });
});
