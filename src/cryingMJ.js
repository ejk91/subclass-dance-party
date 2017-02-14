var cryingMJ = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="allen"></span>');
  this.$node.addClass('cryingMJ');
  this.$node.data('clickCount', 0);
};

cryingMJ.prototype = Object.create(makeDancer.prototype);
cryingMJ.prototype.constructor = cryingMJ;
cryingMJ.prototype.oldStep = makeDancer.prototype.step;
cryingMJ.prototype.step = function() {
  this.oldStep.call(this, this.timeBetweenSteps);
  // this.$node.toggle();
};