//Level 1 Exercises
//1
let parag = document.querySelector('p')
console.log(parag.textContent)

//2
let ids = document.querySelector('#pa')
console.log(ids)

//3
let all = document.querySelectorAll('p')
console.log(all)

//4
all.forEach(all => {
    console.log(all.textContent);
});

//5
all.forEach((p, index) => {
    console.log(p.textContent)

    if(index == 3){
        p.textContent = 'Fourth Paragraph'
    }
})

//6
document.querySelectorAll('p').forEach((paragraph, index) => {
    paragraph.setAttribute('id', `paragraph-${index + 1}`);
    paragraph.setAttribute('class', `paragraph-class-${index + 1}`);
});

//Level 2 Exercises
//1
// document.querySelectorAll('p').forEach((paragraph, index) => {
//     paragraph.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
//     paragraph.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
//     paragraph.style.border = '1px solid black';
//     paragraph.style.fontFamily = 'Arial, sans-serif';
// });

//2
document.querySelectorAll('p').forEach((paragraph, index) => {
    if(index % 2 == 0){
        paragraph.style.color = 'green'
    }else{
        paragraph.style.color = 'red'
    }
})

//3
document.querySelectorAll('p').forEach((paragraph, index) => {
    paragraph.textContent = 'yeni text context'
    paragraph.setAttribute('id', 'parag')
    paragraph.setAttribute('class', 'newClass')
})

//Level 3 Exercises
//1

