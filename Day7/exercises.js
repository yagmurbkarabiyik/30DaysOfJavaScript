//Level 1 Exercises
//1
// function fullName(){
//     let firstName = 'Yağmur'
//     let lastName = 'Karabıyık'
//     let full = firstName + ' ' + lastName
//     return full;
// }

// console.log(fullName())

//2
function fullNameParam(name, surname){
    let fullParam = name + ' ' + surname
    return fullParam
}
console.log('Buse', 'Kara')

//3
function addNumbers(numberOne, numberTwo){
    let sum = numberOne + numberTwo
    return sum;
}
console.log(addNumbers(10, 25))

//4
// function rectangle(length, width){
//     let area = length * width
//     return area;
// }
// console.log(rectangle(10, 20))

//5
function perimeter(length, width){
    let peri = 2 * (length + width)
    return peri;
}
console.log(perimeter(15, 10))

//6
function prism(length, width, height){
    let prismCal = length * width * height;
    return prismCal;
}
console.log(prism(10, 10, 10))

//7
function circleArea(r){
    let area = r * Math.PI * r
    return area
}
console.log(circleArea(5))

//8
function circumference(r){
    let circum = 2 * r * Math.PI
    return circum
}
console.log(circumference(5))

//9
function density(mass, volume){
    let densityCal = mass/volume
    return densityCal;
}
console.log(density(100, 20))

//10
function speed(object, time){
    let speedCal = object / time;
    return speedCal;
}
console.log(speed(200, 20))

//11
function weight(mass, gravity){
    let weightCal = mass * gravity
    return weightCal;
}
console.log(weight(50, 50))

//12
function temperature(oC){
    let convert = oF = (oC * 9/5) + 32
    return convert;
}
console.log(temperature(5))

//13
function bmiCalculator(weight, height){
    let bmi = (weight / (height * height) * 10000) 
    if(bmi <= 18.5)
         console.log('Underweight')
    else if(bmi > 18.5 && bmi > 24.9)
        console.log('Normal weight')
    else if(bmi > 25 && bmi < 29.9)
         console.log('Overweight')
    else
        console.log('Obese')
    return bmi;
}
console.log(bmiCalculator(56, 178))

//14
function checkSeason(month){
    let season;
    if(month == 'June' || month == 'July' || month == 'August')
        console.log('Summer')
    else if(month == 'January' || month == 'February' || month == 'March')
        console.log('Winter')
    else    
        console.log('Maybe autumn or summer')

    return month;
}    console.log(checkSeason('June'))

//15
function findMax(number1,number2, number3){
    let max = Math.max(number1, number2, number3);
    return max; 
}
console.log(findMax(10, 20, 30))

//Level 2 Exercises 
//1
function solveLinEquation(a, b, c, x, y) {
    return a * x + b * y + c;
}
console.log(solveLinEquation(2, 3, -5, 1, 2));

//2
function solveQuadEquation(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return "No real roots";
    }
    if (discriminant === 0) {
        const root = -b / (2 * a);
        return { [root]: root };
    }
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    return { [root1]: root1, [root2]: root2 };
}
console.log(solveQuadEquation(1, 4, 4)); 

//3
function printArray(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}
const myArray = [1, 2, 3, 4, 5];
printArray(myArray);

//4
function showDateTime() {
    const now = new Date();
    
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    const dateTimeString = `${day}/${month}/${year} ${hours}:${minutes}`;
    console.log(dateTimeString);
}
showDateTime();

//5
function swapValues(x, y){
    [x, y] = [y, x];
    console.log(`x => ${x}, y => ${y}`);
}
swapValues(3, 4); 

//6
function reverseArray(arr) {
    // Create an empty array to store the reversed elements
    const reversedArray = [];
    
    // Loop through the input array in reverse order and push each element to the new array
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    
    // Return the reversed array
    return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]

//7
function capitalizeArray(arr) {
    const capitalizedArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            capitalizedArray.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
        } else {
            capitalizedArray.push(arr[i]);
        }
    }
        return capitalizedArray;
}
console.log(capitalizeArray(["apple", "banana", "orange"]));

//8
function addItem(item){
    const newArray = [];

    newArray.push(item);
    return newArray;
}
console.log(addItem("apple")); // Output: ["apple"]

//9
function removeItem(array, index) {
    if (index < 0 || index >= array.length) {
        return "Invalid index";
    }

    array.splice(index, 1);
    return array;
}
console.log(removeItem(["apple", "banana", "orange"], 1));

//10
function sumOfNumbers(number) {
    if (number <= 0) {
        return "Invalid number";
    }

    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumOfNumbers(5))

//11
function sumOfOdds(number) {
    if (number <= 0) {
        return "Invalid number";
    }

    let sum = 0;
    for (let i = 1; i <= number; i += 2) {
        sum += i;
    }
    return sum;
}

console.log(sumOfOdds(5)); 

//12
function sumofEvens(number){
    let sumEvens = 0;
    for(let i = 1; i <= number; i += 1){
        sumEvens += i;
    }

    return sumEvens;
}
console.log(sumofEvens(7))

//13
function evensAndOdds(number) {
    if (number <= 0 || !Number.isInteger(number)) {
        return "Invalid number";
    }

    let evens = 0;
    let odds = 0;
    const numberString = String(number);

    for (let i = 0; i < numberString.length; i++) {
        const digit = parseInt(numberString[i]);

        if (digit % 2 === 0) {
            evens++;
        } else {
            odds++;
        }
    }
    return { evens, odds };
}
console.log(evensAndOdds(123456)); 

//14
function sumAll(){
    let sum = 0;
    for(let i = 0; i <= arguments.length; i++){
        sum += i
    }
    return sum;
}
console.log(sumAll(1, 2, 3))

//15
function generateRandomUserIp() {
    const num1 = Math.floor(Math.random() * 256);
    const num2 = Math.floor(Math.random() * 256);
    const num3 = Math.floor(Math.random() * 256);
    const num4 = Math.floor(Math.random() * 256);

    const ipAddress = `${num1}.${num2}.${num3}.${num4}`;

    return ipAddress;
}
console.log(generateRandomUserIp());

//16 ??
function generateRandomMacAddress() {
    const pairs = [];
    for (let i = 0; i < 6; i++) {
        const hexPair = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        pairs.push(hexPair);
    }
    const macAddress = pairs.join(':');

    return macAddress;
}
console.log(generateRandomMacAddress());

//17
function randomHexaNumberGenerator(){
    let hexNumber = '#'
    for(let i = 0; i < 6; i++){
        const randomDigit = Math.floor(Math.random() * 16).toString(16);
        hexNumber += randomDigit; 
      }
      return hexNumber;
}
console.log(randomHexaNumberGenerator())

//18
function userIdGenerator() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const idLength = 7;
    let userId = '';

    for (let i = 0; i < idLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        userId += characters[randomIndex];
    }

    return userId;
}
console.log(userIdGenerator());