//Very common to use const insead of let to declare an array variable.
let names = Array(5)
console.log(names.fill('MY'))

let names2 = ['Yamur', 22, 2001, 'Karabıyık']
console.log(names2.length)

let js = 'JavaScript'
let arrayJs = js.split('')
console.log(arrayJs)

//to concatenate two arrays
let concat1 = [1, 2, 3]
let concat2 = [4, 5, 6]
let result = concat1.concat(concat2) //1, 2, 3, 4, 5, 6
console.log(result)

let name = ['Yağmur', 'Buse', 'Karabıyık']
// console.log(name.indexOf('Buse')) //if it is not exist return -1
// console.log(Array.isArray(name))
// console.log(name.join('/'))
// console.log(name.splice(1, 2))

//pop removing last element
// let namePop = name.pop()
// console.log(namePop)
//shift removing first element
let nameShift = name.shift()
console.log(nameShift)

const numbers = [0, 99, 58, [66, 93]]
// console.log(numbers.sort())
console.log(numbers[3][0])