console.log('30 days of js')
console.log(['Yagmur', 'Buse', 'Karabıyık'])
console.log({
    name: 'Yagmur',
    surname: 'Karabıyık'
})

console.log('Ben %d yaşındayım', 22)
console.log('Benim adım %s', 'Yamur')
console.log('%cDur', 'font-size: 50px; font-family: Arial; color:red; text-shadow: 0 0 10px')
//%c yazıyı büyütüyor

//to give warning on browser. For instance to inform or warm depreciation of version of a package or bad practises
//console.warn()
console.warn('Bu bir uyarı mesajıdır')

console.error('Hata mesajı')

const name = ['Yamur', 'Mustafa', 'Samet','Buse']
console.table(name)

//time ile bir işlemin ne kadar sürdüğünü hesaplayabiliriz
console.time('Calculate')
new Array(10e5).fill().map((value, index) => index)
console.timeEnd('Calculate')

//console.info = console.log

//console.assert writes an error message to the console if the assertion is false. If the assertion is true, nothing happens
let a = 5
let b = 6
console.assert(a > b, 'a b den büyük değil') 

//console.group can help to group different log groups. 
//console.count it prints the number of times 

const test = () => {
    console.count('test called')
}

test();
test();
test();

console.clear()