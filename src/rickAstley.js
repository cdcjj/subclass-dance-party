var RickAstleyDancer = function(top, left, timeBetweenSteps) {
  PopDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src="rick-astley.png" class="disco"/>');
  this.$node.removeClass('heart');
  // this.$node.addClass('disco');
};

RickAstleyDancer.prototype = Object.create(PopDancer.prototype);
RickAstleyDancer.prototype.constructor = RickAstleyDancer;

RickAstleyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  PopDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggleClass('disco');
};