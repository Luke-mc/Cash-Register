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

  var _add = function(num){

    myCalculator.load(display);
    myCalculator.add(num);
    myCalculator.saveMemory();
    myCalculator.recallMemory();
    display(myCalculator.getTotal());


  };



  return {
    display: _display,
    clear: _clear,
    getBalance: _getBalance,
    deposit: _deposit,
    withdraw: _withdraw,
    add: _add,
  };

});

var myCashRegister = cashRegister();

var myCalculator = calculatorModule();

