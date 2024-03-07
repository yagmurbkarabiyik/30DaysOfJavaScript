// const form1 = document.getElementById('form1')
// console.log(
//     form1.elements
// );

// console.log(
//     document.forms.item(0)
// );

const submitBtn = document.getElementById('submit-btn')
const resetBtn = document.getElementById('reset-btn')

submitBtn.addEventListener('click', () => {
    document.forms.form1.submit()
})

//reset formun varsayılan değerleri ile döndürmemizi sağlar
// resetBtn.addEventListener('click', () => {
//     document.forms.form1.submit();
// })

//pattern[0-9]* 

const testBtn = document.getElementById('test-btn')
testBtn.addEventListener('click', () => {
    console.log('Butona tıkladın');
})
//butona tıklanmadan tıklandı cevabı döner
testBtn.dispatchEvent(
    new Event('click')
)

const tab = document.querySelector('.tab')
const buttons = tab.querySelectorAll('nav button')
const content = tab.querySelectorAll('.content section')

buttons[0].classList.add('active')