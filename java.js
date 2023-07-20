  const numberss = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49];
 let first = numberss.find(myFunction);

 document.getElementById("demo").innerHTML = "First number divisible  by 10 is " + first;

 function myFunction(value) {
   return value %10==0 ;
 }

const numbersss = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49]
let index = numbersss.indexOf(7);

console.log(index)
document.getElementById("demo1").innerHTML =" 4.The index of 7 is =" + index;

const numbers = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49]
const output = numbers.map(multiplication);

document.getElementById("demo2").innerHTML = "3.The new Array of numbers1 is =" + output;

function multiplication(value){
    return value * 3;
}

const integers = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49]
const numbers12 = integers.map(trial);

document.getElementById("demo3").innerHTML = "6.The  Array of numbers12 divisible by 7 is =" + numbers12;

function trial(value,index,array){
    return value / 7;
}




const apple = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49]
let result = apple.lastIndexOf(49);

console.log(result)
document.getElementById("demo4").innerHTML =" 7.The lastindex of 49 is =" + result;

const array = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49]
let allOver18 = array.every(divide);

document.getElementById("demo5").innerHTML = "6a.condition divisible by 7 is " + allOver18;

function divide(value, index, array) {
  return value / 7;
}

const task = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49]
let sum = task.reduceRight(question);

document.getElementById("demo6").innerHTML = "9.The sum of the array is " + sum;

function question(total, value,index,array) {
    return total + value ;
}

const Orange = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49]
let zen = Orange.some(condition);

document.getElementById("demo7").innerHTML = "8.The condition is " + zen;

function condition(value,index,array) {
    return value %3==0 ;
}


const duke = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49]
let z = ""
duke.forEach(divisible);

document.getElementById("demo8").innerHTML = "2.The element divisible by 7 is" + z;

function divisible(value){
   if( value %7===0) z += value +", ";
}

const integersss = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49]

intergersss.sort(fucntion(a-b))