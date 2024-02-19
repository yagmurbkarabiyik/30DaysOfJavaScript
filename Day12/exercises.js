//Level 1 Exercises
//1
// let text =  'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
// const regex = /\d+/g;
// const numbers = text.match(regex).map(Number)
// const monthlySalary = numbers[0];
// const annualBonus = numbers[1];
// const monthlyOnlineCourses = numbers[2];
// const totalMonthlyIncome = monthlySalary + annualBonus / 12 + monthlyOnlineCourses;
// const totalAnnualIncome = totalMonthlyIncome * 12;

// console.log("Total Annual Income:", totalAnnualIncome, "euro");

//2 ??
const text = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.";
const regex = /-?\d+/g; // Regular expression to match numbers, including negative ones

// Extract numbers from the text and convert them to integers
const points = text.match(regex).map(Number);

// Sort the numbers in ascending order
const sortedPoints = points.sort((a, b) => a - b);

// Find the distance between the two furthest particles
const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];

console.log("Distance between the two furthest particles:", distance);

//3
let user = 'asdsds';
function is_valid_variable(user){
    console.log(/^[a-z_]+$/i.test(user))
}
is_valid_variable('first_name') 
is_valid_variable('first-name') 
is_valid_variable('1first_name') 
is_valid_variable('firstname') 

//Level 2 Exercises
//1
function tenMostFrequentWords(paragraph, n =  10) {
    const cleanedParagraph = paragraph.toLowerCase().replace(/[.,:;?!]/g, '');
      const words = cleanedParagraph.match(/\b\w+\b/g);
  
    const wordCount = {};
    words.forEach(word => {
      wordCount[word] = (wordCount[word] ||  0) +  1;
    });
  
    const wordCountArray = Object.entries(wordCount);
    wordCountArray.sort((a, b) => b[1] - a[1]);
    const topNWords = wordCountArray.slice(0, n);
    const result = topNWords.map(pair => ({ word: pair[0], count: pair[1] }));
  
    return result;
  }
  
  const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
  console.log(tenMostFrequentWords(paragraph));

//Level 3 Exercises
//1
function cleanText(text) {
    return text.toLowerCase().replace(/[^a-z\s]/g, '');
  }
  
  function countMostFrequentWords(text, n =  3) {
    const words = text.split(/\s+/);
  
    const wordCount = {};
    words.forEach(word => {
      wordCount[word] = (wordCount[word] ||  0) +  1;
    });
  
    const wordCountArray = Object.entries(wordCount);
  
    wordCountArray.sort((a, b) => b[1] - a[1]);
  
    const topNWords = wordCountArray.slice(0, n);
    const result = topNWords.map(pair => ({ word: pair[0], count: pair[1] }));
  
    return result;
  }
  
  const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
  
  const cleanedSentence = cleanText(sentence);
  console.log(cleanedSentence);
  
  const mostFrequentWords = countMostFrequentWords(cleanedSentence);
  console.log(mostFrequentWords);
  