var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.timeBetweenSteps = timeBetweenSteps;
  // this.setPosition(top, left);
  this.$node.addClass('marcus');
  this.$node.data('clickCount', 0);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;
makeBlinkyDancer.prototype.step = function () {
  
  this.oldStep.call(this, this.timeBetweenSteps);
  this.$node.toggle();
  //setTimeout(this.step.bind(this), this.timeBetweenSteps);
};