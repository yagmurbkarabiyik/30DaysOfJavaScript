/*
local storage içerisinde tanımlanan verinin expire zamanı yok. Veri her zaman ulaşılabilir oluyor.
session storage : Aktif oturum sonlandığı anda veri gidiyor
key ve value değerleri her zaman string olmak zorunda

Farklı tarayıcılar arasında aynı dataya erişilemiyor

*/

// console.log(localStorage)

/*
localStorage.clear()
localStorage.setItem()
localStorage.getItem()
localStorage.removeItem()
localStorage.key()  to display a data stored in a local storage. 
*/

// localStorage.setItem("name", "Yagmur")
// console.log(localStorage.getItem('name'))
// console.log(localStorage.removeItem('name'))

// const names = ['Yagmur', 'Mustafa', 'Onur', 'Utku']
// const users = {
//     name: 'YBK',
//     surname: 'Karabıyık'
// }

// localStorage.setItem('names', JSON.stringify(names))
// localStorage.setItem('user', JSON.stringify(users))

// localStorage.removeItem('names')
// localStorage.clear()
// console.log(
//     JSON.parse(localStorage.getItem('user')) //object
    //localStorage.getItem('user') //string
    //)

let basket = JSON.parse(localStorage.getItem('basket')) || []
let products = [
    {
        id: 1,
        title: 'Macbook',
        price: 40_000
    },
    {
        id: 2,
        title: 'Monster',
        price: 35000
    },
    {
        id: 3,
        title: 'Keychron K6',
        price: 1000
    }
]
function saveToStorage(){
    localStorage.setItem('basket', JSON.stringify(basket))
}

function addBasket(productId){
    basket.push(productId)
    saveToStorage()
}
//  addBasket(2)
//  addBasket(3)

function removeBasket(productId){
    basket = basket.filter(id => id != productId)
    saveToStorage()
}

function totalPrice(){
    return basket.reduce((prev, productId) => {
        const product = products.find(p => p.id == productId)
        return prev += product.price
    }, 0)
}
console.log(totalPrice())
console.log(basket)

localStorage.clear()