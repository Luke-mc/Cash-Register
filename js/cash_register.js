var cashRegister = (function() {

  var display = [];
  var displayValue = 0;
  var lastOperation = '';

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

  var _addition = function(myCalculator) {
    displayValue = parseInt( display.join('') );
    myCalculator.add( displayValue );
    _clear();
    lastOperation = 'add';
  };

  var _equals = function(myCalculator){
    switch(lastOperation){
      case 'add': {
        displayValue = parseInt( display.join('') );
        myCalculator.add( displayValue );
        _clear();
        _display( myCalculator.getTotal() );
        break;
      }
      default: break;
    }
  };

  return {
    display: _display,
    clear: _clear,
    getBalance: _getBalance,
    deposit: _deposit,
    withdraw: _withdraw,
    addition: _addition,
    equals: _equals
  };

});

var myCashRegister = cashRegister();