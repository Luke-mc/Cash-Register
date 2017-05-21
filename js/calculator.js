

function calculatorModule(){

  var memory = 0;


  var total = 0;

var calculator = {};


//load number
function load(x){

isValid(x);



};



 //get total
function getTotal(){

  return total;

};



 //add
function add(x){

isValid(x);

  return total += x;

};


//subtract
function subtract(x){

isValid(x);

  return total -= x;

};


//multiply
function multiply(x){

isValid(x);

  return total *= x;

};

//divide
function divide(x){

isValid(x);

  return total /= x;

};


 //recall
function recallMemory(x){

  return memory;

};


//save
function saveMemory(x){

   return memory = total;

};

//clear
function clearMemory(x){

   return memory = 0;

};

//validate
function isValid(num){

 if(typeof num === "number"){

      return true;

    }

 else{

throw new Error;

    }
   };





return {

  load:load,
  getTotal:getTotal,
  add:add,
  subtract:subtract,
  multiply:multiply,
  divide:divide,
  recallMemory:recallMemory,
  saveMemory:saveMemory,
  clearMemory:clearMemory,


};

}


