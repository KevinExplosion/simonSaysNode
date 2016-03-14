Simon = function() {
  this.sequence= [];
};

Simon.prototype.newRound = function() {
  this.sequence.push(this.getRandom());
  return this.sequence;
};

Simon.prototype.getRandom = function() {
    return Math.floor((Math.random()*4)+1);
};

$(document).ready(function(){
  $('#newgame').submit(function(event){
    event.preventDefault();
    var newSimon = new Simon();
    $('#final').append(newSimon.newRound());
  });
});
