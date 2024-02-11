//Level 1 Exercises
//1
let empty = []
console.log(empty)

//2
let arr = ['a', 'b', 'c']
console.log(arr)

//3
console.log(arr.length)

//4
let first = arr.shift()
console.log(first)
const middleIndex = Math.floor(arr.length / 2);
console.log(middleIndex)
let last = arr.pop()
console.log(last)

//5
let mixedDataTypes = ['number', 'string', 'boolean', 'null', 'undefined', 'object','array']
console.log(mixedDataTypes.length)

//6
let itCompanies = ['Facebook' , 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//7
console.log(itCompanies)

//8
console.log(itCompanies.length)

//9
let firstCompany = itCompanies.shift()
console.log(firstCompany)
let middleCompanyLength = itCompanies.length
let middleCom = Math.floor(middleCompanyLength / 2)
console.log(middleCom)

//10
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])

//11
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())

//12
const companies = itCompanies.join(', ') 
console.log(companies, 'are big IT companies')

//13
if(itCompanies.includes('Facebook')){
    console.log(true)
}
else{
    console.log(false)
}

//14
console.log(itCompanies[0].indexOf('o'))

//15
console.log(itCompanies.sort())

//16
console.log(itCompanies.reverse())

//17
console.log(itCompanies.slice(0, 2))

//18
console.log(itCompanies.slice(3,5))

//19
console.log(itCompanies.slice(1,4))

//20
console.log(itCompanies.shift())

//21
console.log(itCompanies.splice(2,3))

//22
console.log(itCompanies.pop())

//23
console.log(itCompanies.splice()) 

//Level 2 Exercises
//1
//Done

//2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Phyton'
console.log(text)
let removed = text.replace(/[,.]/g, '')
console.log(removed)
let textArr = removed.split(' ')
console.log(textArr)
console.log(textArr.length)

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(shoppingCart.indexOf('Meat') == -1){
    shoppingCart.unshift('Meat')
    console.log(shoppingCart)
}
if(shoppingCart.indexOf('Sugar' == -1)){
    shoppingCart.push('Sugar')
    console.log(shoppingCart)
}

shoppingCart.splice(4)
console.log(shoppingCart)

shoppingCart[2] = 'Green Tea'
console.log(shoppingCart)

//4
const countriees = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
if(countriees.indexOf('Ethiopia') !== -1){
    console.log(countriees[countriees.indexOf('Ethiopia')].toUpperCase())
}else{
    countriees.push('Ethiopia')
}

//5
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
let check = webTechs.includes('Sass')
if(check){
    let index = webTechs.indexOf('Sass')
    console.log(`${webTechs[index]} is CSS process`)
}
else{
    webTechs.push('Sass')
    console.log(webTechs)
}

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullstack = frontEnd.concat(backEnd)
console.log(fullstack)

//Level 3 Exercises
//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort)
console.log(ages.splice(4,2))

let i
let sum = 0
for(i = 0; ages.length; i++){
    sum+=ages[i]
}
let average = sum / ages.length
console.log(average)