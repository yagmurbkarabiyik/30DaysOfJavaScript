//Regular Expressions
//A RegEx can be used to check if some pattern exists in a different data types.
/*
RegEx takes two parameters. One required search pattern and optional flag
We can create a pattern in two ways: Pattern or flag

Pattern => could be a text or any form of pattern which some sort of similarity
Flag => g: global, i: case insensitive, m: multiline, flags are optional parameters
*/

//Creating pattern - regex constructor
// let pattern = 'love'
// let flag = 'gi'
// let regEx = new RegExp(pattern, flag)
// let regEx = new RegExp('love', 'gi')

//RegEx => bilinmeyeni bulmak
let reg = /love/gi

//test method
// let word = /kötü/gi
// let comment = prompt('Yorum yap')
// if(word.test(comment)){
//     alert('Yo sen')
// }

//array containing all of the match
const str = 'I love Js'
const pat = /love/gi
const result = pat.test(str)
console.log(result)
console.log(str.match(/I/))

//find index => search

//replacing a substring
const txt = 'Python is the most beautiful language that a uman begin has ever created. I recommend python for a first programming language'
let matchReplace = txt.replace(/Python|phyton/, 'C#')
console.log(matchReplace)


/*
[a-c] means a or b or c
[a-z] means any letter a to z
[0-9] means any numbet 0 to 9
*/

let string = 'Ben 22 yasındayım ve 2001 yılında dogdum'
console.log(string.match(/[0-2]/g))

/*
[^a-c] ^ means starts with
$ ends with
{3} exactly 3 characters
{3,} at least 3 characters
{3, 8} 3 to 8 characters
*/
let first = '+Ybk'
console.log(/^[a-z]$/.test(first))

let name = 'yamur'
console.log(
    (/ur$/.test(name)
))

