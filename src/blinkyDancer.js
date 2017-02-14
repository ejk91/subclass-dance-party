var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  debugger;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  console.log(this.step);
  // this.step(timeBetweenSteps);
  console.log(this.step);
  this.setPosition(top, left);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;
makeBlinkyDancer.prototype.step = function () {
  
  this.oldStep.call(this, this.timeBetweenSteps);
  this.$node.toggle();
  //setTimeout(this.step.bind(this), this.timeBetweenSteps);
};