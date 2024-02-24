//Level 1 Exercises
//1
class Animal{
    constructor(name = 'Kajun', age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

     getName(){
        return this.name
    }

    getAge(){
        return this.age
    }

    getColor(){
        return this.color
    }

    getLegs(){
        return this.legs
    }

    name(){
        console.log(`${this.name} is my dog`)
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`);
      }
}

const dog = new Animal('Kajun', 10, 'Yellow', 4)
console.log(dog)
console.log(dog.getAge())
console.log(dog.getColor())

//2
class Cat extends Animal{
    constructor(name, age, color, legs){
        super(name, age, color, legs);
    }
    
    meow(){
        console.log(`${this.name} says meow!`)
    }
}

class Dog extends Animal{
    constructor(name, age, color, legs){
        super(name, age, color, legs);
    }

    bark(){
        console.log(`${this.name} says havhav!`)
    }
}

const cat = new Cat('Kaju', 2, 'Grey', 4)
const myDog = new Dog('Kajun', 10, 'Yellow', 4)

cat.displayInfo();
dog.displayInfo();

cat.meow();
myDog.bark();

//Level 2 Exercises
//1
class Bird extends Animal{
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs, breed = '??');
        this.breed = breed;
    }

    displayInfo() {
        super.displayInfo(); 
        console.log(`Breed: ${this.breed}`); 
      }
}

const bird = new Bird('Cikcik', 1, 'Blue', 2, 'Cikcik2')
bird.displayInfo();
console.log(bird)

//Level 3 Exercises
//1
class Statistics{
    constructor(data){
        this.data = data.sort((a, b)  => a - b);
    }
    
    mean(){
        return this.data.reduce((a, b) => a + b, 0) / this.data.length
    }

    median() {
        const mid = Math.floor(this.data.length /  2);
        return this.data.length %  2 !==  0 ? this.data[mid] : (this.data[mid -  1] + this.data[mid]) /  2;
    }

    mode() {
        const counts = this.data.reduce((acc, val) => {
          acc[val] = (acc[val] ||  0) +  1;
          return acc;
        }, {});
        let maxCount =  0;
        let mode = null;
        for (const [key, value] of Object.entries(counts)) {
          if (value > maxCount) {
            maxCount = value;
            mode = Number(key);
          }
        }
        return mode;
      }

      range() {
        return this.data[this.data.length -  1] - this.data[0];
      }
 
      percentile(percentile) {
        if (percentile <  0 || percentile >  100) {
          throw new Error('Percentile must be between  0 and  100');
        }
        const index = (percentile /  100) * (this.data.length -  1);
        const lowerIndex = Math.floor(index);
        const upperIndex = Math.ceil(index);
        if (lowerIndex === upperIndex) {
          return this.data[lowerIndex];
        }
        return this.data[lowerIndex] * (upperIndex - index) + this.data[upperIndex] * (index - lowerIndex);
      }
    
      frequencyDistribution() {
        const counts = this.data.reduce((acc, val) => {
          acc[val] = (acc[val] ||  0) +  1;
          return acc;
        }, {});
        return counts;
      
    }
}
const data = [1,  2,  2,  3,  4,  4,  4,  5,  6];
const stats = new Statistics(data);

console.log('Mean:', stats.mean());
console.log('Median:', stats.median());
console.log('Mode:', stats.mode());
console.log('Range:', stats.range());
console.log('Frequency Distribution:', stats.frequencyDistribution());