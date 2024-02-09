//Level 1 Exercises
//1
let firstName = 'Yamur'
let lastName = 'Karabıyık'
let country = 'Turkey'
let city = 'Ankara'
let age = 22
let isMarried = false

console.log(typeof(firstName) == typeof(age))
console.log(typeof(firstName) === typeof(lastName))

//2
let number = '10'
let numberTwo = 10
console.log(number == numberTwo)

//3
console.log(parseInt(9.8) == 10)

//4
let truthyString = "Hello!";
let truthyNumber = 42;
let truthyArray = [1, 2, 3]
console.log(truthyString, truthyNumber, truthyArray)

//5
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

let pythonLength = "python".length;
let jargonLength = "jargon".length;
let falsyComparison = pythonLength > jargonLength; 
console.log(falsyComparison)

//6
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

let python = 'python'
let dragon = 'dragon'
console.log(!(python.includes('on') && dragon.includes('on')))

//7
let date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth()+1)
console.log(date.getDate())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getTime() / 1000)

//Level 2 Exercises
//1
// let base = prompt("Enter the base of the triangle:");
// let height = prompt("Enter the height of the triangle:");
// base = parseFloat(base);
// height = parseFloat(height);
// let area = (base * height) / 2;
// console.log(area);

//2
// let sideA = prompt("Enter the a ")
// let sideB = prompt("Enter the b ")
// let sideC = prompt("Enter the c ")
// sideA = parseFloat(sideA)
// sideB = parseFloat(sideB)
// sideC = parseFloat(sideC)

// let total = sideA + sideB + sideC
// console.log(total)

//3
let length  = prompt("Enter the length ")
let width = prompt("Enter the width ")
length = parseFloat(length)
width = parseFloat(width)
let rectangle = (length + width) * 2
console.log(rectangle)