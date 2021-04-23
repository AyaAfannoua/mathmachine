
const inputOne = document.querySelector('.getal1');
const inputTwo = document.querySelector('.getal2');
const addBtn = document.querySelector ('.plus-btn');
const minBtn = document.querySelector ('.minus-btn');
const multiBtn = document.querySelector ('.multiply-btn');
const diviBtn = document.querySelector ('.divide-btn');
//const datumElement = document.querySelector(".date-input");
let operator;

console.log(inputOne);
console.log(inputTwo);
console.log(addBtn);
console.log(minBtn);
console.log(multiBtn);
console.log(diviBtn);

if (addBtn) {
  addBtn.addEventListener('click', function() {
      operator = '+';
      console.log(operator);
      alert (inputOne.value+inputTwo.value);
  })
}

if (minBtn) {
    minBtn.addEventListener('click', function() {
        operator = '-';
        console.log(operator);
        alert(inputOne.value);
        alert(inputTwo.value);
    })
  }

if (multiBtn) {
    multiBtn.addEventListener('click', function() {
        operator = 'x';
        console.log(operator);
        
    })
  }
  
if (diviBtn) {
    diviBtn.addEventListener('click', function() {
        operator = ':';
        console.log(operator);
        alert(datumElement.value);
    
  }

.parseInt()



  
  
