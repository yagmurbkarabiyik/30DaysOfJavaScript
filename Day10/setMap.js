/*
set => collection of elements, every element is unique
map => 
*/

//set
const companies = new Set()
console.log(companies)

const languages = ['en', 'tr', 'fr']
const setLang = new Set(languages)
console.log(languages)

for(let language of languages){
    console.log(language)
}
[...languages].map(languages => console.log(languages))

const names = ['yamur', 'onur', 'utku']
const namesSet = new Set()
for(let name of names){
    namesSet.add(name)
}
namesSet.add('new')
namesSet.add('new') //not added
namesSet.delete('yamur')
console.log(namesSet.has('yamur'))
console.log(namesSet)
console.log(namesSet.size) //length => size 
console.log(namesSet.clear)

let langSet = ['English', 'Turkish', 'Spanish', 'French', 'English', 'Spanish', 'Turkish']
const count = []
for(let n of langSet){
    const filteredLang = langSet.filter(lng => lng === n)
    count.push({
        languages: n,
        count: filteredLang.length
    })
}
console.log(count)

const a = [1, 2, 3, 4]
const b = [3, 4, 5, 6, 7]
// const c =[...a, ...b]
// console.log(new Set(c)) //1,2,3,4,5,6,7
// const B = new Set(b)
// console.log(a.filter(num => B.has(num)))
let A = new Set(a)
let B = new Set(b)
console.log(
    a.filter(num => !B.has(num))
)

const map = new Map()
map.set('name', 'yamur')
map.set(1, 'asd')
map.set(2, 'sda')
console.log(map)

const obj = {}
obj['name'] = 'yamur'
obj[1] = 'ahmet'
obj[true] = 'hello'
console.log(
    Object.keys(obj)
)
