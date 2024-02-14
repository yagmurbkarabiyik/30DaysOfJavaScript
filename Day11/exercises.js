//Level 1 Exercises
//1
const constants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

//2
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor)

//3
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }
let width, height, area, perimeter = rectangle
console.log(width, height, area, perimeter)

//Level 2 Exercises
//1
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]
    users.forEach(({ name, scores, skills, age }) => {
        console.log(`Name: ${name}`);
        console.log(`Scores: ${scores}`);
        console.log(`Skills: ${skills}`);
        console.log(`Age: ${age}`);
        console.log('---');
      });

      //2
      const usersTwoSkills = users.filter(user => user.skills.length < 2)
      console.log(usersTwoSkills)

      //Level 3 Exercises
      //1
      const countries2 = {
        France: {
          name: 'France',
          capital: 'Paris',
          population: 67076000,
          languages: ['French']
        },
        Germany: {
          name: 'Germany',
          capital: 'Berlin',
          population: 83019200,
          languages: ['German']
        },
        Spain: {
          name: 'Spain',
          capital: 'Madrid',
          population: 46733038,
          languages: ['Spanish', 'Catalan', 'Basque', 'Galician']
        }
      };
      Object.values(countries2).forEach(country => {
        const { name, capital, population, languages } = country;
        console.log(`${name}: Capital - ${capital}, Population - ${population}, Languages - ${languages}`);
      });

      //2
      const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
      const [name, skills, [,,jsScore, reactScore]] = student;
      console.log(name, skills, jsScore, reactScore);

      //3
      function convertArrayToObject(array){
        const [names, skills, scores] = array;
        const students = names.map((name, index) => ({
            name,
            skills: skills[index],
            scores: scores[index]
          }));
        
          return students;
      }
      const studentArray = [
        ['David', 'John', 'Sara'],
        [['HTM', 'CSS', 'JS', 'React'], ['HTML', 'CSS', 'JS'], ['HTM', 'CSS', 'JS']],
        [[98, 85, 90, 95], [85, 80, 85], [75, 70, 80]]
      ];
      
      const students = convertArrayToObject(studentArray);
      console.log(students);

      //4
      const student2 = {
        name: 'David',
        skills: {
          frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
          ],
          backEnd: [
            { skill: 'Node', level: 8 },
            { skill: 'GraphQL', level: 7 }
          ],
          dataBase: [
            { skill: 'MongoDB', level: 7.5 }
          ],
          dataScience: []
        }
      };
      const newStudent = {
        ...student2,
        skills: {
          ...student2.skills,
          frontEnd: [
            { skill: 'Bootstrap', level: 8 },
            ...student2.skills.frontEnd
          ],
          backEnd: [
            { skill: 'Express', level: 9 },
            ...student2.skills.backEnd
          ],
          dataBase: [
            { skill: 'SQL', level: 8 },
            ...student2.skills.dataBase
          ],
          dataScience: [
            { skill: 'SQL' },
            ...student2.skills.dataScience
          ]
        }
      };
      
      console.log(newStudent);