var makeAllenDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="allen"></span>');
  this.$node.addClass('allen');
  this.$node.data('clickCount', 0);
};

makeAllenDancer.prototype = Object.create(makeDancer.prototype);
makeAllenDancer.prototype.constructor = makeAllenDancer;
makeAllenDancer.prototype.oldStep = makeDancer.prototype.step;
makeAllenDancer.prototype.step = function() {
  this.oldStep.call(this, this.timeBetweenSteps);
  //this.$node.slideToggle();
};