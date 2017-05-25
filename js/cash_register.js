var cashRegister = (function() {

  var display = [];
  var displayValue = 0;
  var lastOperation = '';
  var balance = 0;
  var total = 0;
  var memory = 0;


  var _display = function(value) {
    display.push(value);
    document.getElementById("display").innerHTML = display.join('');
  };

   var _clearAll = function() {
    document.getElementById("display").innerHTML = '0.00';
    display =[];
    myCalculator.clearMemory();
  };

  var _clear = function() {
    document.getElementById("display").innerHTML = '0.00';
    display = [];
  };

  var _getBalance = function() {
    _display(balance);
  };

  var _deposit = function() {
    displayValue = parseInt( display.join('') );
    balance += displayValue;
    _clear();
  };

  var _withdraw = function() {
    displayValue = parseInt( display.join('') );
    balance -= displayValue;
     _clear();
  };

  var _addition = function(myCalculator) {
    displayValue = parseInt( display.join('') );
    total = memory + displayValue;
    memory = total;
    document.getElementById('display').innerHTML = total;
    myCalculator.load( displayValue );
    _clear();
    lastOperation = 'add';
  };

  var _subtraction = function(myCalculator) {
    displayValue = parseInt( display.join('') );
    total = memory - displayValue;
    memory = total;
    document.getElementById('display').innerHTML = total;
    myCalculator.load( displayValue );
    _clear();
    lastOperation = 'subtract';
  };

  var _multiplication = function(myCalculator) {
    displayValue = parseInt( display.join('') );
    total = memory * displayValue;
    memory = total;
    document.getElementById('display').innerHTML = total;
    myCalculator.load( displayValue );
    _clear();
    lastOperation = 'multiply';
  };

  var _division = function(myCalculator) {
    displayValue = parseInt( display.join('') );
    total = memory / displayValue;
    memory = total;
    document.getElementById('display').innerHTML = total;
    myCalculator.load( displayValue );
    _clear();
    lastOperation = 'divide';
  };

  var _equals = function(myCalculator){
    switch(lastOperation){
      case 'add': {
        displayValue = parseInt( display.join('') );
        myCalculator.add( displayValue );
        _clear();
        _display( myCalculator.getTotal() );}
        break;

     case 'subtract': {
        displayValue = parseInt( display.join('') );
        myCalculator.subtract( displayValue );
        _clear();
        _display( myCalculator.getTotal() );}
        break;

    case 'multiply':{
        displayValue = parseInt( display.join('') );
        myCalculator.multiply( displayValue );
        _clear();
        _display( myCalculator.getTotal() );}
        break;

     case 'divide':{
        displayValue = parseInt( display.join('') );
        myCalculator.divide( displayValue );
        _clear();
        _display( myCalculator.getTotal() );}
        break;

      default: break;
    }
  };

  return {
    display: _display,
    clearAll: _clearAll,
    clear: _clear,
    getBalance: _getBalance,
    deposit: _deposit,
    withdraw: _withdraw,
    addition: _addition,
    subtraction: _subtraction,
    multiplication: _multiplication,
    division: _division,
    equals: _equals
  };

});

var myCashRegister = cashRegister();


