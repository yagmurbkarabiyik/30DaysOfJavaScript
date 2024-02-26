//to create an HTML element using js => document.createElement(). The method takes
//an HTML element tag name as a string parameter

for(let i = 1; i <= 10; i++){
    let title = document.createElement('h1')
    title.style.color = 'purple'
    title.style.backgroundColor = 'black'
    title.className = 'title'
    title.textContent = 'Creating an element with js' + i
    document.body.append(title)  //append sona eklememizi sağlar
    // document.body.prepend(title) //öncesine eklemek için
    //removing a child element => removeChild()
}
const all = document.querySelectorAll('h1')
for (const h1 of all) {
//   document.body.removeChild(h1)
    h1.remove()
}