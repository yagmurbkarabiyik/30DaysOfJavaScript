//Level 1 Exercises
//1
const countries = [
    'Finland', 'Helsinki',
   'Sweden', 'Stockholm',
    'Norway', 'Oslo'
  ]

  console.table(countries)

  //2
  const country = {
    first : ['Finland', 'Helsinki'],
    second: ['Sweden', 'Stockholm'],
    third: ['Norway', 'Oslo']
  };
console.table(country)

//3
console.group(countries)


//Level 2 Exercises
//1
let s = 10
let d = 2
console.assert(s > d * 10 , '10 sayısı 20 den büyük değildir')

//2
console.warn('Bu bir uyarı mesajıdır!')

//3
console.error('Bu bir hata mesajıdır!')


//Level 3 Exercises
//1
console.time('difference')
for(let i = 0; i <= 10; i++){
}
console.timeEnd('difference')

console.time("while");
let i = 0;
while (i < country.length) {
  i++;
}
console.timeEnd("while");
