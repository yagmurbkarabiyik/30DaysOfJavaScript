try {
    let firstName = 'Yagmur'
    let lastName = 'Karabıyık'
    let fullName = firstName + ' ' + lastName
   // throw 'oylesine bir hata'
   throw new Error('Bir hata var')
} catch (error) {
    console.log(error.message)
    console.log(error.name)
    console.table(error)
}


let age = prompt('Kaç yaşındasın')
try{
    if(age > 29) throw new Error('Yalan')
}catch(error){
    alert(error.message)
}

// console.log(5 x 5) syntax error
//type error
let first = 20
console.log(
    first.toFixed() //number için kullanılır
    //toLowerCase/toUpperCase string için kullanılır
)