var cashRegister = (function() {

  var display = [];

  var _display = function(value) {
    display.push(value);
    document.getElementById("display").innerHTML = display.join('');
  };

  var _clear = function() {

 document.getElementById("display").innerHTML = '0.00';

 display =[];


  };

  var _getBalance = function(myCalculator) {

  };

  var _deposit = function(myCalculator) {

  };

  var _withdraw = function(myCalculator) {

  };

  return {
    display: _display,
    clear: _clear,
    getBalance: _getBalance,
    deposit: _deposit,
    withdraw: _withdraw
  };

});

var myCashRegister = cashRegister();