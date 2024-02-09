let challenge = '30 Days of JavaScript'
let array = [1, 2, 3, 4, 5]
let challengeArray = challenge.split(' ');
let brands = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let sentence = 'You cannot end a sentence with because because because is a conjunction'
let startIndex = sentence.indexOf('because'); 
let endIndex = sentence.lastIndexOf('because') + 'because'.length; 
let concat1 = '30 Days of'
let concat2 = 'JavaScript'
let number1 = '10'
let number2 = 10
let parseNum = parseInt(number1 )
let floatNum = 9.8
let python = 'Python'
let jargon = 'Jargon'
let jargonSentence = 'I hope this course is not full of jargon'
let str = 'JavaScript';
let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
const wordToCount = 'because';
const wordToMatch = 'love';
let regexSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const cleanedSentence = regexSentence.replace(/[^a-zA-Z0-9\s]/g, ' ');
const text = 'He earns  5000 euro from salary per month,  10000 euro annual bonus,  15000 euro online courses per month.';
const numbers = text.match(/\d+/g).map(Number); // Extract numbers using match()

//Level 1 Exercises
//1
console.log(challenge)

//4
console.log(challenge.toUpperCase())
//5
console.log(challenge.toLowerCase())
//6 - 7
console.log(challenge.substring(2))
//8
console.log(challenge.includes('Script'))
//9
console.log(challenge)
//10
console.log(challenge.split(' '))
//11
console.log(brands.split(','))
console.log(brands.split(' '))
//12
console.log(challenge.replace('JavaScript', 'Python'))
//13
console.log(challenge.charAt(15)) 
//14
console.log(challenge.charCodeAt('J'))
//15
console.log(challenge.indexOf('a'))
//16
console.log(challenge.lastIndexOf('a'))
//17
console.log(sentence.indexOf('because'))
//18
console.log(sentence.lastIndexOf('because'))
//19
console.log(sentence.search('because'))
//20
console.log(challenge.trim())
//21
console.log(challenge.startsWith('30'))
//22
console.log(challenge.endsWith('JavaScript'))
//23
console.log(challenge.match('a'))
//24
console.log(concat1, concat2)
//25
console.log(challenge.repeat(2))

//Level 2 Exercises
//1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
//2
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same - with charity you give love, so don\'t just give money but reach out your hand instead."')
//3
console.log(typeof(number1) == typeof(number2))
console.log(typeof(parseNum) == typeof(number2))
//4
console.log(typeof(number2) == typeof(floatNum))


//5
console.log(python.includes('on'), jargon.includes('on'))
//6
console.log(jargonSentence.includes('jargon'))
//7
console.log(Math.floor(Math.random() * 101));
//8
console.log(Math.floor(Math.random() * 51) + 50)
//9
console.log(Math.floor(Math.random() *256))
//10
console.log(Math.floor(Math.random() * str.length))
//11
for (let i = 1; i <= 5; i++) {
    let row = `${i} `;
    for (let j = 1; j <= 5; j++) {
        if (j === 1) {
            row += `1 `;
        } else {
            row += `${Math.pow(i, j)} `;
        }
    }
    console.log(row);
}
//12
let slicedPhrase = sentence.substr(startIndex, endIndex - startIndex)
console.log(slicedPhrase)

//Level 3 Exercises
//1
const regex1 = new RegExp(`\\b${wordToMatch}\\b`, 'gi');
const matches1 = loveSentence.match(regex1) || [];
const count = matches1.length;
//2
const sentence2 = 'You cannot end a sentence with because because because is a conjunction';
const wordToCount2 = 'because';
const regex = new RegExp(`\\b${wordToCount2}\\b`, 'gi');
const matches = sentence2.match(regex) || [];
const coun2 = matches.length;

console.log(coun2);
//3
const lowerCaseSentence = cleanedSentence.toLowerCase();
const wordsArray = lowerCaseSentence.split(/\s+/);
const wordFrequency = wordsArray.reduce((accumulator, currentWord) => {
    accumulator[currentWord] = (accumulator[currentWord] ||  0) +  1;
    return accumulator;
  }, {});
  let maxFrequency =  0;
  let mostFrequentWord = '';
  for (const word in wordFrequency) {
    if (wordFrequency[word] > maxFrequency) {
      maxFrequency = wordFrequency[word];
      mostFrequentWord = word;
    }
  }
  console.log(mostFrequentWord);
  //4
  const annualSalary = numbers[0] *  12;
  const annualBonus = numbers[1];
  const annualOnlineCourses = numbers[2] *  12;
  const totalAnnualIncome = annualSalary + annualBonus + annualOnlineCourses;
  console.log(totalAnnualIncome); 