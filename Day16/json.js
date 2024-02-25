/*
json javascript object notation
İletme ve depolama için bir veri formatı
Farklı dillerin haberleşemebilmesi için ortak bir format olarak düşünülebilir.

object should be double quotes or it should be string
*/

//converting json to js object

let sampleJson = `
[
    {
        "name" : "Yagmur",
        "surname" : "Karabıyık",
        "skills" : [
            {

            },
            {
                
            }
        ]
    },
    {
        "name" : "Buse",
        "surname" : "Karabiyik"
    }
]`

try{
    let users = JSON.parse(sampleJson, (key, value) => {
       return key == 'name' ? value.toUpperCase() : value
        // console.log('KEY', key)
        // console.log('VALUE', value)
    })
    console.log(users)
    console.log(typeof users)
} catch(err){
    console.log(err.message)
}

let categories = [
    {
        name : 'css',
        count : 5
    },
    {
        name : 'js',
        count : 16
    },
]
let categoryJson = JSON.stringify(categories, ['count','name'], 4)
console.log(categories)

