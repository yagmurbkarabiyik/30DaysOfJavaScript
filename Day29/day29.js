const greenInput = document.getElementById('green')
const redInput = document.getElementById('red')
const blueInput = document.getElementById('blue')

const inputs = document.querySelectorAll('input[type="range"]')
inputs.forEach(input => {
    
    input.addEventListener('input', () => {
        input.nextElementSibling.innerText = input.value
        changeBodyColor()
    })
})

redInput.addEventListener('input', changeBodyColor)
blueInput.addEventListener('input', changeBodyColor)
greenInput.addEventListener('input', changeBodyColor)


function changeBodyColor(){
    document.body.style.backgroundColor = `rgb(${greenInput.value}, ${redInput.value}, ${blueInput.value}`
}