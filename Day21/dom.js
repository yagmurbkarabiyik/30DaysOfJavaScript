//Document Object Model | HTML elemanlarına js ile müdahale etmek

//get elements by tag name
const html = document.getElementsByTagName('h1')

// console.log(html.length)

// for(let i = 0; i <= html.length; i++){
//     console.log(html[i])
// }

// console.log(...html)


//get elements by class name
const className = document.getElementsByClassName('title-1')
console.log(className)

//get element by id => targets a single value
const title = document.getElementById('title')
/***************** */
title.style.color = 'blue'
title.style.backgroundColor = 'yellow'
// title.className = 'Ankara'

title.setAttribute('style', 'color: yellow; background-color: purple')
title.setAttribute('title', 'test baslik')
title.setAttribute('class', 'İstanbul') //same with title.className = 'Ankara'

title.classList.add('Adana')
title.classList.remove('test1')
title.classList.toggle('test1') //yoksa ekle varsa çıkar anlamına gelir

//textContent is used to add text to an HTML element |düz yazı eklenmek istendiğinde
title.textContent = 'yeniii'

//innerHtml can add text or HTML element or elements as a child |html kodları da eklenebilir
//innerHtml var olan değiştireleceğinde ya da yeni bir şey ekleneceğinde kullanılır
// title.innerHTML = '<u>yeniiii</u>'
//title.innerHTML = '' //remove 

document.querySelectorAll('h1').forEach((h1, index) => {
    if(index % 2 == 0){
        h1.style.color = 'green'
        h1.style.fontSize = '70px'
    }else{
          h1.style.color = 'brown'
    }
})

console.log(
    document.querySelector('.title-1 + #title')
)

console.log(
    document.querySelector('.title-4')
)

document.querySelectorAll('.title-1').forEach(data => {
    console.log(data)
})