Simon = function() {
  this.sequence= [];
  this.output = [];
};

Simon.prototype.newRound = function() {
  this.sequence.push(this.randomNumber());
  return(this.sequence);
};

Simon.prototype.randomNumber = function() {
  return Math.floor((Math.random()*4)+1);
}

$(document).ready(function(){
  var newSimon = new Simon();
  $('#newgame').submit(function(event){
    event.preventDefault();
    var removeColor = newSimon.newRound();
    console.log(removeColor);
    for(i=0; i < removeColor.length; i++) {
        if(removeColor[i] === 1) {
            $('#1').removeClass('btn-danger');
            setTimeout(function() {
              $('#1').addClass('btn-danger');}, 2000);
        } else if(removeColor[i] === 2) {
          $('#2').removeClass('btn-primary');
          setTimeout(function() {
            $('#2').addClass('btn-primary');}, 2000);
        } else if(removeColor[i] === 3) {
          $('#3').removeClass('btn-warning');
          setTimeout(function() {
            $('#3').addClass('btn-warning');}, 2000);
        } else if(removeColor[i] === 4) {
          $('#4').removeClass('btn-success');
          setTimeout(function() {
            $('#4').addClass('btn-success');}, 2000);
        }
    }
  });
});

// for "this.sequence" (i >= 0, i < sequence.length, i++){
// if(i = 1) {
// click "#1"
// }
// }
