let h1 = document.querySelector('h1')

document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.querySelector('.year');

    function changeYearColor() {
        const currentYear = new Date().getFullYear();
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']; 
        const randomColor = colors[Math.floor(Math.random() * colors.length)]; 
        yearSpan.textContent = currentYear;
        yearSpan.style.color = randomColor; 
    }
    changeYearColor();
    setInterval(changeYearColor, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
    const jsChallenge = document.getElementById('completed');
    jsChallenge.style.backgroundColor = 'lightgreen';
});

document.addEventListener('DOMContentLoaded', function(){
    const ongoing = document.getElementById('ongoing')
    ongoing.style.backgroundColor = 'yellow'
})

document.addEventListener('DOMContentLoaded', function(){
    const coming = document.querySelectorAll('#coming')
    coming.forEach(function(element) {
        element.style.backgroundColor = 'red';
    });
})
