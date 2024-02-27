/** Event Listeners
 * addEventListener takes two parameter ('eventListener', callbackFunc)
 * 
 */

const button = document.getElementById('btn')
button.addEventListener('mousemove', function(e) {
    console.log(e);
})

// function clickHandle(){
//     console.log('Butona tıkladın mı');
// }

// button.onclick = e=> {
//     console.log(e);
// }
// button.addEventListener('event', e=> {
// })

const input = document.getElementById('name')
input.addEventListener('keypress', e => {
    console.log('blalaal', e.target.value);
})

input.addEventListener('blur', e => {
    if(e.target.value == ''){
        e.target.classList.add('error')
    }
} )

const color = document.getElementById('color-picker')
color.addEventListener('input', e => {
    document.body.style.backgroundColor = e.target.value
})

const gender = document.getElementById('gender')
gender.addEventListener('change', e => {
    console.log(
        e.target.selectedOptions
    );
})

const check =document.getElementById('save-rules')
console.log(
    document.querySelector('input[name=stack]')
);

const form = document.getElementById('form')

const save = document.getElementById('save-btn')
save.addEventListener('click', e => {
    console.log(
        input.value,
        color.value,
        save.checked,
        form.elements.stack.value
     );
})

document.body.addEventListener('keydown', e => {
    console.log(e.key);
})