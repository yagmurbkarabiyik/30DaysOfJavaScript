//A function is a reusable block of code or programming statements
//To get the value we call or invoke a function
/*
Clean and easy to read
reusable
easy to test
*/

//function declaration
// function sayHello(){
//     console.log('Hello')
// }
// sayHello();

// function fullName(){
//     let firstName = 'Yagmur'
//     let lastName = 'Karabıyık'
//     let full = firstName + lastName
//     return full
// }
// console.log(fullName())

// function multiply(num1, num2){
//     return num1 * num2
// }
// let total = multiply(5, 2)
// console.log(total)

function sumArray(array){
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total
}
let dizi = [2, 4, 5, 6]
console.log('Total', sumArray(dizi))

//arguments can access my parameters
function sum(){
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
}
console.log(sum(2, 5, 8, 9, 10));

//Anonymous func
const say = function(name) {
    return `Hello ${name}`
}
console.log(say('Yamur'));

//Expressşıon functions are anonymous functions
//self invoking functions
(function(){
    console.log('yoyo ')
})();

//Arrow functions is an alternative to write a function declaration
const hello2 = name => `hello ${name}`

const sum2 = (...numbers) => {
  console.log(numbers)
}
sum2(2, 5, 5, 6, 8)
console.log(hello2('Buse'));

//Factory Functions -- camelCase
// const myCircle = createCircle(1);
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw')
        }
    }
}
const cirlce1 = createCircle(1);
console.log(cirlce1)

const circle2 = createCircle(2)
console.log(circle2)

//Constructor Function -- PascalCase
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}
const circle = new Circle(1);
