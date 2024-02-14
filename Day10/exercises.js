//Level 1 Exercises
//1
const country = ['England', 'England', 'Finland', 'Finland', 'Turkey']
let set = new Set(country)
console.log(set)

//2
let newLoop = new Set()
for (let i = 0; i <= 10; i++) {
    newLoop.add(i);
  }
console.log(newLoop)

//3
let mySet = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
mySet.delete(5);

console.log(mySet)

//4
let another = new Set([0, 1, 2, 3, 4]);
another.clear()
console.log(another)

//5
let str = new Set(['Product 1', 'Product 1','Product 2', 'Product 3', 'Product 4', 'Product 5'])
console.log(str)

//6
const countries = ['Finland', 'Sweden', 'Norway'];
const countryCharCountMap = new Map();

countries.forEach(country => {
  countryCharCountMap.set(country, country.length);
});

console.log(countryCharCountMap);

//Level 2 Exercises
//1
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const c = [...a, ...b]
let C = new Set(c)
console.log(C)

//2
let A = new Set(a)
let B = new Set(b)
console.log(
    a.filter(num => B.has(num))
)

//3
const commonElements = a.filter(element => b.includes(element));
console.log(commonElements)