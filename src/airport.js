'use strict';

function Airport(){
  this.hangar = []
}

Airport.prototype.planes = function(){ return this.hangar };
Airport.prototype.clearForLanding = function(plane) {
  this.hangar.push(plane);
};
