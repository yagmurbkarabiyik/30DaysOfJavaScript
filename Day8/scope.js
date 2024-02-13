//Windows Scope
//If we don't declare variable with const, let, or var it will be under window scope
// name = 'Yamur'

//Global Scope
//It can be global to the file or it can be global relative to some block of codes
let name = 'Buse'
let surname = 'Karabıyık'
function learnScope(){
    console.log(name, surname)
    if(true){
        //local
        let name = 'YBK'
        let surname = 'Krbyk'
        console.log(name, surname)
    }
    console.log(name, surname)
}
learnScope();
console.log(name, surname)

//Local Scope 
//A variable declared as local can be accessed only in certain block code
// {
//     let deneme = 'Deneme'
// }
// console.log(deneme)

//Object
const person = {} //creating an empty object
console.log(person)

const user = {
    firstName: 'Yagmur',
    lastName: 'Karabıyık',
    age: 22,
    skills: [
        'C#',
        'Java',
        'HTML'
    ],
    'phone number': 5515151
};
console.log(user['phone number'])

//this keyword access the values of different properties of object
//objects are mutable (can be modified)

user.getPersonIfo = function(){
    let skillsWithoutLastOne = this.skills.splice(0, this.skills.length -1).join(',')
    console.log(skillsWithoutLastOne)
    let last = this.skills.at(-1)
    let skill = `${skillsWithoutLastOne} and ${last}`
    console.log(skill)
}
console.log(user.getPersonIfo())

let newUser = user;
console.log(user)
newUser.name = 'Buse'
console.log(newUser.name)

console.log(Object.keys(user))
console.log(Object.values(user))

//object.freeze() => no change,add or delete
//object.seal() => just update foe existing value