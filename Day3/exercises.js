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
// let length  = prompt("Enter the length ")
// let width = prompt("Enter the width ")
// length = parseFloat(length)
// width = parseFloat(width)
// let rectangle = (length + width) * 2
// console.log(rectangle)

//4
// let radius = prompt('Please enter a radius')
// let calculate = radius * 2 * Math.PI
// console.log(calculate)

//5
// let x = prompt('Please enter x')
// let calculateScope = (2 * x) - 2
// console.log('y is : ', calculateScope)

//6
// let x1 = 2
// let y1 = 2
// let x2 = 6
// let y2 = 10
// let slope = (y2 - y1) / (x2 - x1)
// console.log(slope)

//7
// if (calculateScope > slope) {
//     console.log('First slope is greater than second')
// }
// else{
//     console.log('Second slope is greater than first slope')
// }

//8
// function calculateY(x) {
//     return x*x + 6*x + 9;
// }

// const xValues = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
// xValues.forEach(x => {
//     const y = calculateY(x);
//     console.log(`When x = ${x}, y = ${y}`);
// })

//9
// let hours = prompt('Please enter work hours')
// let ratePerHour = prompt('Please enter a rate per hour')
// let earning = hours * ratePerHour
// console.log(earning)

//10
// let getName = prompt('Please enter your name')
// let getSurname = prompt('Please enter your surname')

//     if (getName.length > 7 ) {
//         console.log('Your name is long')
//     }
//     else{
//         console.log('Your name is short')
//     }

//11
/*let getFirstName = prompt('Enter a first name')
let getLastName = prompt('Enter a last name')
getFirstName.length > getLastName.length ? console.log(`Your first name  ${getFirstName} is longer than your family name ${getLastName}`) 
                                         : console.log(`Your last name  ${getLastName} is longer than your first name ${getFirstName}`)*/

//12
// let myAge = prompt('Please enter my age')
// let yourAge = prompt('Please enter your age')
// let calculateAge = myAge - yourAge
// let calculateAge2 = yourAge - myAge

// if (myAge > yourAge) {
//     console.log(`I am ${calculateAge} years older than you`)
// }
// else{
//     console.log(`You are ${calculateAge2} years older than me`)
// }

//13
/*let birthYear = prompt('enter birth year')
 let date = new Date()
 let dateCheck = date.getFullYear()
 let currentAge = dateCheck - birthYear
 let driveAge = 18 - currentAge
 currentAge >= 18
     ? console.log(`You are ${currentAge}. You are old enough to drive`)
     : console.log(`You are ${currentAge}. You will be allowed to drive after ${driveAge} years.`)*/

//14
// let numberOfYears = prompt('Enter a number of years')
// let calSeconds = 31536000 * numberOfYears
// console.log(calSeconds)

//15
let year = date.getFullYear(),
month = date.getMonth(),
day = date.getDate(),
hour = date.getHours(),
minute = date.getMinutes(),
second = date.getSeconds(),
dayNumber = date.getDay()

const twoDigitMonth = `0${month + 1}`.slice(-2);
const twoDigitDay = `0${day + 1}`.slice(-2)
const towDigitHour = `0${hour}`.slice(-2)
const twoDigitMinute = `0${minute + 1 }`.slice(-2)

let humanReadableDate1 = `${year}-${twoDigitMonth}-${twoDigitDay} ${hour}:${minute}`
let humanReadableDate2 = `${twoDigitDay}-${twoDigitMonth}-${year} ${hour}:${minute}`
let humanReadableDate3 = `${twoDigitDay}/${twoDigitMonth}/${year} ${hour}:${minute}`

console.log(humanReadableDate1)
console.log(humanReadableDate2)
console.log(humanReadableDate3)

//Level 3 Exercises
//1
let humanReadableDate4 = `${year}-${twoDigitMonth}-${day} ${towDigitHour}:${twoDigitMinute}`
console.log(humanReadableDate4)