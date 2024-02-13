//Callback => which can be passed as parameter to other functions
const func = number => number ** 2
function cube(cb, number){
    return cb(number) * number;
}
console.log(cube(func, 3))

//returning func
const a = s1 =>{
    const b = s2 =>{
        const c = s3=> {
            return s1 + s2 + s3
        }
        return c
    }
    return b
}
console.log(a(5)(10)(20))

//foreach is also higher func
const numbers = [1, 3, 5, 7, 9]
let total = 0;
numbers.forEach(numbers => total += numbers)
console.log(total)

const numbers2 = numbers.map(number => number * 2)
console.log(numbers2)
//setInterval  => belirli zaman aralıklarında çalışır
//setTimeOut => bir seferlik, belirli bir zamanda

// setTimeout(sayHello, 1000)

//clearInterval
//clearTimeOut

function sayHello(){
   console.log('hello')
}
const interval = setInterval(sayHello, 1000)
const timeout = setTimeout(() => {
    clearInterval(interval)
    console.log('Interval process cancelled')
}, 5000)

setTimeout(() => {
    clearTimeout(timeout)
    console.log('timeout cancelled, interval continue')
}, 3000)

//map iterate an array elements and modify the array
let users = [
    {
        id: 2,
        name: 'Yagmur',
        age: 22,
        gender: 1
    },
    {
        id: 1,
        name: 'Buse',
        age: 22,
        gender: 1
    },
    {
        id: 3,
        name: 'Mst',
        age: 23,
        gender: 2
    }
]
//modifed
users = users.map(user => {
    if(user.id === 2){
        user.name = 'Smt'
    }
    return user;
})
console.log(users)

//filter
let filter = users.filter(user => user.gender == 2)
console.log(filter)

//reduce
let numberArray = [1, 2, 3, 4, 5, 6, 7]
console.log(numberArray.reduce((old, current) => {
    return old + current
}, 0)
)

//every => check if all the elements are similar in one aspect it returns boolean
//en az bir tane 2 olduğu için false 
console.log(users.every(user => user.gender == 1))

//en az bir tane 1 olduğu için true
console.log(users.some(user => user.gender == 1))

console.log(numberArray.find(number => number > 3))

//sort
const names = ['Yagmur', 'Mustafa', 'Buse', 'Samet']
console.log(names.sort())

const nums = [2, 9, 8, 5, 6,  11]
nums.sort((a, b) => a - b)
console.log(nums.sort((a, b) => a - b))

users.sort((a,b) => a.id - b.id)
console.log(users)

//localCompare