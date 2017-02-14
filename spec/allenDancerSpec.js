describe('allenDancer', function() {

  var allenDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    allenDancer = new makeAllenDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(allenDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(allenDancer.$node, 'toggle');
    allenDancer.step();
    expect(allenDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      // debugger;
      console.log('-----');
      sinon.spy(allenDancer, 'step');
      expect(allenDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
       // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      expect(allenDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(allenDancer.step.callCount).to.be.equal(2);
    });
  });
});