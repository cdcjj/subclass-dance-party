var BatmanDancer = function(top, left, timeBetweenSteps) {
  SuperHeroDancer.call(this, top, left, timeBetweenSteps);
  this.$node.find('img').attr('src', 'batman.png');
  this.$node.find('img').attr('class', 'fly');
  this.$node.removeClass('superHero');
};

BatmanDancer.prototype = Object.create(SuperHeroDancer.prototype);
BatmanDancer.prototype.constructor = BatmanDancer;

BatmanDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  SuperHeroDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggleClass('pop');
};