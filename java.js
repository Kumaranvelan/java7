  const numberss = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49];
 let first = numberss.find(myFunction);

 document.getElementById("demo").innerHTML = "First number divisible  by 10 is " + first;

 function myFunction(value, index, array) {
   return value/ 10;
 }

const numbersss = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49]
let index = numbersss.indexOf(7);

console.log(index)
document.getElementById("demo1").innerHTML =" 4.The index of 7 is =" + index;

const numbers = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49]
const output = numbers.map(multiplication);

document.getElementById("demo2").innerHTML = "3.The new Array of numbers1 is =" + output;

function multiplication(value,index,array){
    return value * 3;
}

const integers = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49]
const numbers12 = integers.map(trial);

document.getElementById("demo3").innerHTML = "6.The  Array of numbers12 divisible by 7 is =" + numbers12;

function trial(value,index,array){
    return value / 7;
}


