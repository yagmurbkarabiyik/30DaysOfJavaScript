//Level 1 Exercises
//1
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let json = JSON.stringify(skills)
console.log(json)

//2
let age = 250;
console.log(
    JSON.stringify(age)
)

//3
let isMarried = true
console.log(JSON.stringify(isMarried))

//4
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }

  console.log(JSON.stringify(student))
  console.log(typeof student)

  //Level 2 Exercises
  //1
  console.log(JSON.stringify(student, ['firstName', 'lastName','skills']))
  

  //Level 3 Exercises
  //1
  const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

console.log(JSON.parse(txt))

//2
const users = JSON.parse(txt);

let userWithMostSkills = null;
let maxSkillsCount =  0;

for (const user in users) {
    const skillsCount = users[user].skills.length;
    if (skillsCount > maxSkillsCount) {
        userWithMostSkills = user;
        maxSkillsCount = skillsCount;
    }
}

console.log(`The user with the most skills is ${userWithMostSkills} with ${maxSkillsCount} skills.`);
