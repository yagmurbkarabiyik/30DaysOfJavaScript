//Level 1 Exercises
//1
// let age = prompt('Please enter your age')
// let ageDif = 18 - age
// if (age > 18) {
//     console.log('You are old enough to drive')
// }
// else{
//     console.log(`You are left with ${ageDif} years to drive`)
// }

//2
// let myAge = prompt('Please enter my age')
// let yourAge = prompt('Please enter your age')
// let dif = myAge - yourAge
// let reverse = yourAge - myAge
// if(myAge > yourAge){
//     console.log(`I am ${dif} years older than you`)
// }
// else{
//     console.log(`You are ${reverse} years older than me`)
// }

//3
// if(myAge > yourAge){
//     console.log(`${myAge} is greater than ${yourAge}`)
// }
// else{
//     console.log(`${yourAge} is greater than ${myAge}`)
// }

//4
// if(myAge % 2 == 0){
//     console.log(`${myAge} is an even number`)
// }
// else{
//     console.log(`${myAge} is an odd number`)
// }

//Level 2 Exercises
//1
// let grade = prompt('Please enter your grade')
// if(grade >= 80 && grade >= 100){
//     console.log('AA')
// }
// else if(grade >= 70 && grade <= 89){
//     console.log('BB')

// }

//2
// let season = 'january'
// if (season === 'september' || season === 'october' || season === 'november') {
//     console.log('Autumn');
// } else if (season === 'december' || season === 'january' || season === 'february') {
//     console.log('Winter');
// } else if (season === 'march' || season === 'april' || season === 'may') {
//     console.log('Spring');
// } else if (season === 'june' || season === 'july' || season === 'august') {
//     console.log('Summer');
// } else {
//    console.log('Invalid input');
// }

//3
// let workingDay = prompt('Please enter a day')
// workingDay = workingDay.toLowerCase()
// if (workingDay == 'monday' || 'tuesday' || 'wednesday' || 'thursday' || 'friday') {
//     console.log('This day is a working day')
// }
// else{
//     console.log('This day is a weekend')
// }

//Level 3 Exercises
//1
let input = prompt('Please enter a month')
input = input.toLowerCase()
switch(input){
    case 'january':
        case 'march':
            console.log('31 days');
            break;
        case 'may':
            console.log('31 days');
            break;
        case 'july':
            console.log('31 days');
            break;
        case 'august':
            console.log('31 days');
            break;
        case 'october':
            console.log('31 days');
            break;
        case 'december':
            console.log('31 days');
        case 'april':
            console.log('31 days');
            break;
        case 'june':
            console.log('31 days');
            break;
        case 'september':
            break;
        case 'november':
            console.log('30 days');
            break;
        case 'february':
            console.log('28 days');
            break;
        default:
            console.log('Invalid month');
}