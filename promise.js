/*  
pending: inital state, neither fulfilled nor rejected
fulfill: meaning that the operation completed successfully
rejected: meaning that the operation failed

fulfilled durumuna ulaşmak için => prototype.then()
rejected durumuna ulaşmak için => prototype.catch()

callbacks => işlem bittiğinde belirtilen fonksiyonları çalıştırma durumu
*/

// const test = callback => {
//     setTimeout(() => {
//         callback('hata oluştu', [])
//     }, 2000)
// }
// const callback = (err, data) => {
//     if(err){
//         console.log('hata')
//     }else{
//         console.log('data', [])
//     }
// }
// test(callback)

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('succes')
//     }, 1500)
//     // resolve('success')
//     // reject('fail')
// })

// promise.then((data) => {
//     console.log(data)
// }).catch(err => {
//     console.warn(err)
// })

/*
fetch api => 
*/
const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'
console.log(
    fetch(url)
)

//birden fazla then kullanılabilir
fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))

//async and await is an elegant way to handle promises. It is easy to understand and it clean  to write
//async eklenildiği zaman bu bir promise olur.    
//öncelikli işlem yapmamızı sağlarlar. Async ve await beraber çalışır

async function getPost(){
  
    try{
        const response = await fetch(url)
        const data = response.json()
        console.log(data)  
    }catch(err){
        console.log(err)
    }   
}