// Creates and returns a new Dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.timeBetweenSteps = timeBetweenSteps;
  this.step();

  // now that we have defined the this object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  // the basic this doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this;
  setTimeout(function() {
    context.step();
  }, this.timeBetweenSteps);
};


Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(left) {

  this.$node.css({left: left});
};

Dancer.prototype.interactWithNeighbor = function() {
  // debugger;
  var neighbor = this._findNeighbor();
  var newLeft = neighbor.$node.css('left');
  var newTop = neighbor.$node.css('top');
  this.$node.css({top: newTop, left: newLeft});
};

Dancer.prototype._findNeighbor = function() {
  var smallestDist = Infinity;
  var limitDistance = 500;
  var closestDancer, currDistance, dancerLeft, dancerTop;
  var nodeLeft = this.$node.css('left');
  var nodeTop = this.$node.css('top');
  nodeLeft = +nodeLeft.slice(0, nodeLeft.length - 2);
  nodeTop = +nodeTop.slice(0, nodeTop.length - 2);

  for (let i = 0; i < dancers.length; i++) {
    dancerLeft = dancers[i].$node.css('left');
    dancerLeft = +dancerLeft.slice(0, dancerLeft.length - 2);
    dancerTop = dancers[i].$node.css('top');
    dancerTop = +dancerTop.slice(0, dancerTop.length - 2);

    currDistance = Math.sqrt( Math.pow(nodeLeft - dancerLeft, 2) + Math.pow(nodeTop - dancerTop, 2) );
    if (currDistance < smallestDist && currDistance !== 0 && currDistance <= limitDistance) {
      smallestDist = currDistance;
      closestDancer = dancers[i];
    }

  }
  return closestDancer;
};