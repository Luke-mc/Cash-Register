var cashRegister = (function() {

  var display = [];

  var _display = function(value) {
    display.unshift(value);
    document.getElementById("display").innerHTML = display.join();
  };

  var _clear = function(myCalculator) {

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