
var shift = false;

function View(operatorModel) {
  this.operator = operatorModel;
}


function displayNumber(number) {
  var digits = (number + '').length;
  if ((number >= 0 && digits > 8) || (number < 0 && digits > 9)) {
    if (number % 1 != 0) {
      number = parseFloat((number + '').slice(0, 8));
      if (number % 1 != 0) return number;
    }
    var pow = (number + '').length - 1;
    var extra_length = (pow + '').length + 2;
    number = number * Math.pow(10, -1*pow);
    number = (number + '').slice(0, 8 - extra_length) + 'e' + pow;
  }
  return number;
}

View.prototype.buttonClicked = function(clicked, result) {

}

View.prototype.BuildWidgets = function() {
  // this.AddButtons(this.calcElement);
  // this.AddDisplayEquation('', 0, '');
}

View.prototype.ShowLogin = function() {
  this.operator = new Operator();
}

View.prototype.ShowReady = function() {
  // body...
}

View.prototype.ShowCalling = function() {
  // body...
}

View.prototype.ShowWorking = function() {
  // body...
}

View.prototype.ShowPause = function() {
  // body...
}