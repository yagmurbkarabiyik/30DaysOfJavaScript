//Level 1 Exercises
//1
// console.log('*******For*******')
// for (let number = 0; number <= 10; number++) {
//     console.log(number)
// }
// console.log('*******While*******')
// let numberTwo = 0;
// while (numberTwo <= 10) {
//     console.log(numberTwo)
//     numberTwo++;
// }
// console.log('*******Do While*******')
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i <= 10){

// }

//2
// console.log('*******For*******')
// for (let numbers = 10; numbers >= 0; numbers--) {
//     console.log(numbers)
// }

// console.log('*******While*******')
// let numberReverse = 10;
// while (numberReverse >= 0) {
//     console.log(numberReverse)
//     numberReverse--;
// }

// console.log('*******Do While*******')
// let x = 10;
// do{
//     console.log(x)
//     x--;
// }while(x >= 0)

//3
//for of loop using for arrays
// let n = 5;
// for (var i = 0; i <= n; i++) {
//     console.log(i); 
// }

//4
// let numberOfRows = 7;
// for (let i = 1; i <= numberOfRows; i++) {
//   let row = '';
//   for (let j = 1; j <= i; j++) {
//     row += '#'; 
//   }
//   console.log(row); 
// }

//5
// let limit = 10;
// for (let i = 0; i <= limit; i++) {
//   let square = i * i;
//   console.log(i + " x " + i + " = " + square);
// }

//6
// let loop = 10;
// for(let i = 10; i <= loop; i++){
//     let square = i * i;
//     let third = i * i * i;
//     console.log(i + " x " + i + " = " + square);
//     console.log(i + " x " + i + i + " x"  + third);
// }

//7
// for(let i = 0; i <= 100; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

//8
// for(let i = 0; i <= 100 ; i++){
//     if(i % 2 != 0){
//         console.log(i)
//     }
// }

//9
// for (let i = 2; i <= 100; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(i);
//     }
//   }

//10
//   let sum = 0;
//   for (let i = 0; i <= 100; i++) {
//     sum += i;
//   }
//   console.log("The sum of all numbers from 0 to 100 is " + sum + ".");

//11
//   let sum = 0;
//   for (let i = 0; i <= 100; i++) {
//     if(i % 2 == 0){
//         sum += i;
//     }
//   }
//   console.log("The sum of all even numbers from 0 to 100 is " + sum + ".");

 //12
  let sumEvens = 0;
  let sumOdds = 0;
  
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      sumEvens += i;
    } else {
      sumOdds += i;
    }
  }
 const sums = [sumOdds, sumEvens];
 console.log(sums);

//13
// const randomNumbers = [];
// for (let i = 0; i < 5; i++) {
//   let randomNumber = Math.floor(Math.random() * 100);
  
//  while (randomNumbers.includes(randomNumber)) {
//  randomNumber = Math.floor(Math.random() * 100);
// }
  
//   randomNumbers.push(randomNumber);
// }
// console.log(randomNumbers);

//14
// let randomNumbers = [];
// for (let i = 0; i < 5; i++) {
//   let randomNumber = Math.floor(Math.random() * 100);
  
//    while (randomNumbers.includes(randomNumber)) {
//    randomNumber = Math.floor(Math.random() * 100);
//   }
  
//   randomNumbers.push(randomNumber);
// }
// console.log(randomNumbers);

//15
// let randomId = '';
// for (let i = 0; i < 6; i++) {
//   const charCode = Math.floor(Math.random() * (122 - 48 + 1)) + 48;
  
//   if (charCode >= 58 && charCode <= 64) {
//     i--;
//   } else {
//     randomId += String.fromCharCode(charCode);
//   }
// }
// console.log(randomId);

//Level 2 Exercises
//1
// const idLength = 8; 
// let randomId = '';

// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// for (let i = 0; i < idLength; i++) {
//   const randomIndex = Math.floor(Math.random() * characters.length);
//   randomId += characters.charAt(randomIndex);
// }
// console.log(randomId);

//2
const hexLength = 6; 
let randomHex = '';

const hexCharacters = '0123456789ABCDEF';
for (let i = 0; i < hexLength; i++) {
  const randomIndex = Math.floor(Math.random() * hexCharacters.length);
  
  randomHex += hexCharacters.charAt(randomIndex);
}
console.log(randomHex);

//3
let randomRGB = 'rgb(';

for (let i = 0; i < 3; i++) {
  const colorComponent = Math.floor(Math.random() * 256);
  randomRGB += colorComponent;
  
  if (i < 2) {
    randomRGB += ',';
  }
}

randomRGB += ')';
console.log(randomRGB);

//4 - 5
const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];

const uppercaseCountries = [];
const countriesLength = [];

for (let i = 0; i < countries.length; i++) {
  let upperCaseCountry = '';
  for (let j = 0; j < countries[i].length; j++) {
    upperCaseCountry += countries[i][j].toUpperCase();
  }
  uppercaseCountries.push(upperCaseCountry);
  
  let countryLength = 0;
  while (countries[i][countryLength] !== undefined) {
    countryLength++;
  }
  countriesLength.push(countryLength);
}

console.log(uppercaseCountries);
console.log(countriesLength);

//6
const countryInfo = [];
for (let i = 0; i < countries.length; i++) {
    // Get the country name
    const countryName = countries[i];
    
    // Convert the country name to uppercase
    let countryCode = '';
    for (let j = 0; j < 3; j++) {
      countryCode += countryName[j].toUpperCase();
    }
    
    // Get the length of the country name
    let countryLength = 0;
    while (countryName[countryLength] !== undefined) {
      countryLength++;
    }
    
    // Create an array with country information and add it to the countryInfo array
    countryInfo.push([countryName, countryCode, countryLength]);
  }
  
  // Print the array of arrays
  console.log(countryInfo);

//7
// const countriesWithLand = [];

// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].includes('land')) {
//     countriesWithLand.push(countries[i]);
//   }
// }
// if (countriesWithLand.length > 0) {
//   console.log(countriesWithLand);
// } else {
//   console.log('All these countries are without land');
// }

//8
const countriesWithIa = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes('ia')) {
    countriesWithIa.includes(countries[i]);
  }
}
if (countriesWithIa.length > 0) {
  console.log(countriesWithIa);
} else {
  console.log('All these countries are without ia');
}

//9
// const longest = [];
// let longestCountry = '';
// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].length > longestCountry.length) {
//     longestCountry = countries[i];
//   }
// }
// console.log(longestCountry);

//10
const countriesWithFiveChars = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    countriesWithFiveChars.push(countries[i]);
  }
}

// Print the array of countries with 5 characters
console.log(countriesWithFiveChars);

//11
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
const longest = [];
let longestTech = '';
for (let i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > longestTech.length) {
    longestTech = webTechs[i];
  }
}
console.log(longestTech);

//12
const techsAndLengths = [];
for (let i = 0; i < webTechs.length; i++) {
  techsAndLengths.push([webTechs[i], webTechs[i].length]);
}
console.log(techsAndLengths);

//13 ??
const mernStack = ["MongoDB", "Express", "React", "Node"];
const mernAcronym = mernStack.join('');
console.log(mernAcronym); 

//14
for (const item of mernStack) {
  console.log(item);
}

//15
let fruits = ['banana', 'orange', 'mango', 'lemon']
let lastIndex = fruits.length - 1;
for (let i = 0; i < fruits.length / 2; i++) {
    const temp = fruits[i];
    fruits[i] = fruits[lastIndex - i];
    fruits[lastIndex - i] = temp;
  }
  console.log(fruits)

//16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
 ]
 for (const stack of fullStack) {
    for (const technology of stack) {
      console.log(technology.toUpperCase());
    }
  }