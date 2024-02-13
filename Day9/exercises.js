//Level 1 Exercises
//1
/*
forEach =>It is a callback function. Iterate an array elements. 
map =>Iterate an array elements too. But you can modify the array elements
filter =>Filter out items which full fill flltering a conditions and return a new array
reduce => It is callback function too. It takes an accumulator, current, and 
optional initial value for the accumulator value.If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

*/

//2
// function getNumber(number){
//     console.log(number)
// };

//3
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

countries.forEach(countries => {
    console.log(countries)
})
console.log('***************')
//4
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach(names => {
    console.log(names)
})

//5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach(numbers => {
    console.log(numbers)
})

//6
const upperCase = countries.map(country => {
    return country.toLocaleUpperCase();
})
console.log(upperCase)

//7
const length = countries.map(country => {
    return countries.length;
})

console.log(length)

//8
const change = numbers.map(numbers => {
    return numbers * numbers
})
console.log(change)

//9
const nameChange = names.map(names => {
    return names.toUpperCase()
})
console.log(nameChange)

//10
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

  const changeProducts = products.map(products => {
    return products.price
  })
  console.log(changeProducts)

  //11
  const filt = countries.filter(countries => {
    return countries.includes('land') -1
  })
  console.log(filt)

  //12
  const six = countries.filter(countries => {
    if(countries.length == 6){
        return countries
    }
  })
  console.log(six)

  //13
  const more = countries.filter(countries => {
    if(countries.length >= 6){
        return countries
    }
  })
  console.log(more)

  //14
  const letter = countries.filter(countries => {
    if(countries.startsWith('E')){
        return countries
    }
  })
  console.log(letter)

  //15
  const validProducts = products.filter(item => {
    return typeof item.price === 'number' && !isNaN(item.price) && item.price !== 0;
  });

  //16
  function getStringLists(array) {
    return array.filter(item => typeof item === 'string');
  }
  const mixedArray = [1, 'two', 3, 'four', 'five'];
  const stringItems = getStringLists(mixedArray);
  console.log(stringItems); 
  
  //17
  const allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(sum)

  //18
const country = ['Estonia, Finland, Sweden, Denmark, Norway, IceLand ']
const concatenatedCountries = countries.reduce((accumulator, currentValue, index) => {
    if (index === countries.length - 1) {
      return `${accumulator} and ${currentValue} are north European countries`;
    } else {
      return `${accumulator}, ${currentValue}`;
    }
  }, '');
  console.log(concatenatedCountries);

  //19
  /*
  Some => If we have at least one true it returns TRUE
  Every => If we have at least one false it returns FALSE
  */

  //20
  const nm = names.some(name => {
    return name.length > 7
  })
  console.log(nm)

  //21
 const every = names.every(name => {
    return name.includes('land')
 })  
console.log(every)


//22
/*
Find => Returns the first element which satisfies the condition
FindIndex => Return the position of the first element which satisfies the condition
*/

//23
const findCountry = countries.find(countries => {
    return countries.length == 6
})
console.log(findCountry)

//24
const letters = countries.findIndex(countries => {
    return countries.length
})
console.log(letters)

//24
const norwayIndex = countries.findIndex(country => country === "Norway");
console.log(norwayIndex)

//25
const russiaIndex = countries.findIndex(country => country === "Russia")
console.log(russiaIndex)

//Level 2 Exercises
//1
const totalPrice = products
  .map(product => product.price) 
  .filter(price => !isNaN(price)) 
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Sum prices
 console.log(totalPrice); 

 //2
 const tt = products.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
 console.log(tt);

 //3
 const ct = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola"
  ];

  function categorizeCountries() {
    const commonPatterns = ['land', 'ia', 'island', 'stan'];
    const categorizedCountries = {};
  
    commonPatterns.forEach(pattern => {
      const countriesWithPattern = countries.filter(country => country.toLowerCase().includes(pattern));
      categorizedCountries[pattern] = countriesWithPattern;
    });
  
    return categorizedCountries;
  }
  
  console.log(categorizeCountries());

  //4
  function countStartingLetters(countryNames) {
    const startingLetters = {};
    countryNames.forEach(country => {
      const firstLetter = country.charAt(0).toUpperCase();

       if (startingLetters[firstLetter]) {
            startingLetters[firstLetter]++;
        } else {
            startingLetters[firstLetter] = 1;
        }
    });
    const result = Object.keys(startingLetters).map(letter => ({
        letter: letter,
        count: startingLetters[letter]
    }));
    return result;
}
const startingLetterCounts = countStartingLetters(countries);
console.log(startingLetterCounts);

//5
function getFirstTenCountries() {
    return countries.slice(0, 10);
}

const firstTenCountries = getFirstTenCountries();
console.log(firstTenCountries);

//6
function getLastTenCountries(){
    return countries.slice(-10);
}
let last = getLastTenCountries()
console.log(last)

//7
function findMostFrequentInitialLetter(countries) {
    const letterCounts = {};

    // Iterate through each country name
    countries.forEach(country => {
        const firstLetter = country.charAt(0).toUpperCase();

        if (letterCounts[firstLetter]) {
            letterCounts[firstLetter]++;
        } else {
            letterCounts[firstLetter] = 1;
        }
    });

    let mostFrequentLetter = '';
    let highestCount = 0;

    for (const letter in letterCounts) {
        if (letterCounts[letter] > highestCount) {
            mostFrequentLetter = letter;
            highestCount = letterCounts[letter];
        }
    }

    return mostFrequentLetter;
}
const mostFrequentInitialLetter = findMostFrequentInitialLetter(countries);
console.log("The most frequently used initial letter for country names is:", mostFrequentInitialLetter);