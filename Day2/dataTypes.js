//primitive date types cannot be modified
let numberOne = 5
let numberTwo = 5

console.log(numberOne == numberTwo)

let total = `${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`
console.log(total)

let js = 'JS'
let csharp = 'CSHARP'

let fullLang = js + csharp
console.log(fullLang)
console.log(js == csharp)

//non-primitive data types (array, object) can be modified (mutable)
let nums = [1, 2, 'yamur']
console.log(nums)
console.log(nums[0])

let user = {
    name : 'Yamur',
    surname : 'Karabiyik'
}

let userTwo = {
    nameTwo : 'Yamur',
    surnameTwo : 'Karabiyik'
}
 console.log(user == userTwo) //false

//numbers can be both integers and decimal values
const PI = 3.14
console.log(Math.PI)
console.log(Math.round(PI))

const number = Math.floor(Math.random() * 11) 
console.log(number)

let secondName = 'Buse\'nin' //Buse'nin
console.log(secondName.length) //for latest index length-1
secondName = secondName.toUpperCase()
console.log(secondName.substring(3, 5))

let string = '30 Days of JavaScript'
console.log(string.includes('Days')) //T
console.log(string.includes('days')) //F
console.log(string.includes(30)) //T
console.log(string.replace('JavaScript', 'CSHARP'))

let word = 'love'
let patternOne = '/love/gi'  //g means global, i means case insensitive

//Casting => converting one data type to another data type. parseInt(), parseFloat() etc
//string to int
console.log(parseInt('5'))