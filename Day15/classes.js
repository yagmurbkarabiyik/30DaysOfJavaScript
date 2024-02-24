// /*
// The class defines attributes and the bahvior of the object
// while the object, on the other hand represents the class
// */

// //creating a class
// class Person{
//     constructor(firstName, lastName, age, country='TC', city, skills){
//         //this keyword represents person class
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//         this.skills = skills
//     }

//     getFullName(){
//         return this.firstName + ' ' + this.lastName
//     }

//     get getSkills(){
//         return this.skills
//     }

//     appendSkill(skill){
//         this.skills.push(skill)
//     }

//     set setSkills(skill){
//          this.skills.push(skill)
//     }
// }

// const person2 = new Person('Buse', 'Karabiyik',22, undefined, 'İstanbul')
// const person3 = new Person('Onur', 'Karabiyik',22, 'Türkiye', 'Amasya')
// console.log(person.getFullName(), person2.getFullName(), person3)

// person.setSkills = 'JavaScript'
// person.setSkills = 'React'

// person.appendSkill('htm')
// console.log(person.getSkills())

// //getter sadece değer çekmek için | Allow us to access value from the object
// //setter değer vermek için |  Allow us to modify the value of certain properties

class Person {
    constructor(firstName, lastName, age, city, country='TC', skills) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.skills = skills;
    }
    
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    getPersonalInfo() {
        let fullName = this.getFullName(); 
        return `${fullName} is ${this.age}`; 
    }
}

// const person1 = new Person('Yagmur', 'Karabiyik', 22, 'Ankara');
// console.log(person1.getPersonalInfo());

class Teacher extends Person{
    teach(){
        return 'mat'
    }
}

class Student extends Person{
    learn(){
        return 'listen'
    }
}

const teacher1 = new Teacher('Ybk','Ybk', 22, 'TC','Ankara')
const student1 = new Student('Ybk Student','Ybk Student', 22, 'TC','Ankara')

console.log(
    teacher1.teach()
)
console.log(
    student1.learn()
)

class Deneme extends Person{
    constructor(firstName, lastName, age, country, city, gender){
        super(firstName, lastName, age, country, city)
        this.gender = gender
    }
}