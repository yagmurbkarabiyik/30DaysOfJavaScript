//Level 1 Exercises
//1
let dog = {}

//2
console.log(dog)

//3
dog = {
    name: 'Kajun',
    legs: 4,
    color: 'yellow',
    age: 15,
    bark: [
        'woof woof'
    ]
}

//4
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark)

//5
dog = {
    name: 'Kajun',
    legs: 4,
    color: 'yellow',
    age: 15,
    bark: function() {
        return "woof woof";
    }
}
dog.breed = "Labrador";
dog.getDogInfo = function() {
    return `${this.name} is a ${this.color} ${this.breed} with ${this.legs} legs and is ${this.age} years old.`;
};

// What is the answer of the 5th question?
console.log("The answer to the 5th question is: The result of invoking the getDogInfo method.");
console.log(dog.getDogInfo());

//Level 2 Exercises
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
//1
let mostSkillsPerson = null;
let maxSkillsCount = 0;

for (const person in users) {
  const skillsCount = users[person].skills.length;
  if (skillsCount > maxSkillsCount) {
    mostSkillsPerson = person;
    maxSkillsCount = skillsCount;
  }
}

console.log("Person with the most skills:", mostSkillsPerson);

//2
let loggedInCount = 0;

for (const person in users) {
  if (users[person].isLoggedIn) {
    loggedInCount++;
  }
}

console.log("Logged-in users count:", loggedInCount);

let highPointsCount = 0;

for (const person in users) {
  if (users[person].points >= 50) {
    highPointsCount++;
  }
}

console.log("Users with s>= 50 points count:", highPointsCount);

//3
const mernDeveloper = []
for(const person in users){
    const skills = users[person].skills;
    if (skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')) {
        mernDeveloper.push(person);
      }
}
console.log(mernDeveloper)

//4
const updatedUsers = {
    ...users,
    Sample: {
      email: 'sample@sample.com',
      skills: ['JavaScript'],
      age: 'Unknown',
      isLoggedIn: true,
      points: 100
    }
  };
  console.log(updatedUsers);

  //5
  const keys = Object.keys(users);
  console.log(keys)

  //6
  const values = Object.values(users);
  console.log(values)

  //7
  const countries = {
    Afghanistan: {
      capital: 'Kabul',
      population: 38928346,
      languages: ['Pashto', 'Dari']
    },
    Albania: {
      capital: 'Tirana',
      population: 2877797,
      languages: ['Albanian']
    },
    Algeria: {
      capital: 'Algiers',
      population: 43851044,
      languages: ['Arabic']
    },
    Andorra: {
      capital: 'Andorra la Vella',
      population: 77265,
      languages: ['Catalan']
    }
  };
  for(const country in countries){
    console.log(country);
    console.log(countries[country].capital);
    console.log(countries[country].population);
     console.log(countries[country].languages.join(', '))
  }