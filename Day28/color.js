const button = document.getElementById('generate-color-btn')
const colors = ['red', 'blue', 'purple', 'pink', 'orange', 'black']
button.addEventListener('click', () => {
    // console.log('tikladin');

        // document.body.style.backgroundColor = colors[2] 
        // Math.floor(Math.random() * colors.length)
        const randomColor = Math.floor(Math.random() * 256)
        const randomColor2 = Math.floor(Math.random() * 256)
        const randomColor3 = Math.floor(Math.random() * 256)
        // document.body.style.backgroundColor = colors[randomColor]
        document.body.style.backgroundColor = `rgb(${randomColor}, ${randomColor2}, ${randomColor3})`
})