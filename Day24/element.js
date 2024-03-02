// const h1 = document.querySelector('h1')
// console.log(
//     h1.attributes.id.value
// );

// for (const attr of h1.attributes) {
//     console.log(attr.name, attr.value);
// }

const ul = document.querySelector('ul')
console.log(
    ul.childElementCount
);

const deleteButtons = document.querySelectorAll('.delete-btn')

console.log(ul.firstElementChild);

deleteButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        e.target.remove()
        if(ul.childElementCount == 0){
            ul.remove()
        }
    })
})

const scroll = document.querySelector('.scroll-content')
console.log(
    // scroll.clientHeight
    scroll.scrollHeight
);

let div = document.getElementById('test')

let h1 = document.createElement('h1')
h1.textContent = 'baslik'

let p = document.createElement('p')
p.textContent = 'paragraf'

div.before(h1)
div.after(p)

//toggleAttribute() 
//Seçilen elemana belirtilen nitelik varsa kaldırılmasını yoksa eklenmesini sağlar.