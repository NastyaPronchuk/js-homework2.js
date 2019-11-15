// const result = { asd: 123};
// let obj = {
//     name: 'fjhj',
//     add = () => {}
// }

// string
// number
// NaN
// undefine
// object
// symbol
// null
// boolean
//et result = 0;
let result = document.getElementById("result");
let operations = document.getElementById("operations");
const array = ["+","-","%","/","*"];

function addInfo(param){

if(!operations.value && param === '0') return;



if(!operations.value && !(+param)){
    operations.value += `0${param}`;
    return;
}

const length = operations.value.length;
for (let index = 0, lastLetter = operations.value.charAt(length -1); index < array.length; index++) {
  if (lastLetter === array[index] && array[index] === param) {
      console.log('1', lastLetter);
      console.log('1', array[index]);
      console.log('1', lastLetter === array[index]);
      operations.value = operations.value.slice(0, length-1) + param;
     return;
  };
}

operations.value += param;
}
function showResult(){
    result.value = eval(operations.value);
}

function reset(){
    operations.value = "";
}