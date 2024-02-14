//Destructuring => şeklini bozma
//Spread => dağılma, yayma
//Rest => kalanın tamamı

const numbers = [10, 12, 14]
const [number1, number2] = numbers
//number 1-10
console.log(numbers[0])
//number2-12 
console.log(numbers[1])/
//number 3-14
console.log(numbers[2])

let names = ['Yagmur', 'Mustafa', 'Onur', 'Utku']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names
console.log(firstPerson, secondPerson, thirdPerson, firstPerson)

const stack = [
    ['HTML', 'CSS', 'JS'],
    ['C#', 'MYSQL', 'NODEJS']
]
// const [frontend, backend] = stack
const [[firstLang, secondLang], backend] = stack
console.log(secondLang)

//If we like to skip on of the value in the array we use additional comma
const skip = [1, 2, 3, 4]
const[skip1,, skip3, skip4] = skip
console.log(skip)

//... => rest => kalanları dizi olarak getir
const surnames = ['Karabıyık', 'Turan', 'Demir']
const[mySurname, mybfSurname, ...otherSurname]= surnames
console.log(mySurname)
console.log(mybfSurname)
console.log(otherSurname)

const countries = [
    ['Turkey', 'Ankara'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
for(const country of countries){
    console.log(`Country: ${country[0]}, Capital: ${country[1]} `)
}
//objelerde dışarı çıkarırken farklı bir isimle çıkartılamaz
// const user = {
//     name: 'Yagmur',
//     surname: 'Karabıyık',
//     age: 22,
//     pets: {
//         dog: ['Kajun']
//      }
// }
// const {surname} = user
//const {surname: soyad} => değişkenin adını değiştirmek için
// console.log(surname)

function multiply(nums){
    return nums[0] * nums[1]
}
const numss = [10, 10]
console.log(multiply(numss))

let userInfo = {
    name: 'Yagmur',
    surname: 'Karabıyık',
    age: 22,
    pets: {
        dog: ['Kajun']
     }
}
function showUserInfo({name, surname, age, pets}){
    return  `Mrb ben ${name} ${surname} ${age} yaşındayım ${pets.dog} falan falan`
}
console.log(showUserInfo(userInfo))

/*spread => when we destructure an array we use the spread operator(...) to get the rest elements as array.
In addition to that we use spread operator to spread array elements to another array
(Bir diziyi başka bir diziye yaymak)
(Bir diziyi kopyalamak / klonlamak)
*/
const copy = [1, 3, 5]
const copy2 = [...copy]
console.log(copy)
console.log(copy2)

const getName = {
    name: 'Utku',
    surname: 'Karabıyık'
}
const getName2 = {...getName}
getName2.name ='Onur'
console.log(getName)
console.log(getName2)