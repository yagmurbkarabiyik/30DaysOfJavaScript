/**
 * Bazı etiketlerin varsayılan davranışları vardırç Örneğin bir
 * a etiketine basınca ilgili linke yönlendiriliriz vs
 *  Bu gibi varsayılan davranışları engellemek için preventDefault kullanılır.
 */

const aTags = document.querySelectorAll('a')
aTags.forEach(a => {
    a.addEventListener('click', e => {
        const href = e.target.getAttribute('href')
        if(href.includes('http)' && !confirm('Dis baglantiya gidiyoring'))){
            e.preventDefault()
        }
    })
})

//stop propagation varsayılan yayılmayı engellemek için kullanr. 
const test1 = document.querySelector('.test1')
const test2 = document.querySelector('.test2')
const test3 = document.querySelector('.test3')

test1.addEventListener('click', () => console.log("test1"))
test2.addEventListener('click', () => console.log("test2"))
test3.addEventListener('click', e => {
    e.stopPropagation()
    console.log('test3');
})

//stopImmediatePRopagation diğer olayın da çalışmasını durdurur. 


const h1 = document.querySelector('h1')
h1.style.setProperty('color', 'red')
// h1.style.color = 'purple'
// h1.style.removeProperty('background-color')

const mq = window.matchMedia('(max-width: 400px)')
console.log(mq);

function mobileDetectHandle(){
    if(isMobile.matches){
        document.body.classList.add('mobile')
    }else{
        document.body.classList.remove('mobile')
    }
}
const isMobile = window.matchMedia('(max-width: 480px)')
    isMobile.addEventListener('change', e => {
        console.log(isMobile);
    })

//seçilen değeri belirleme    
const input = document.querySelector('input')
input.addEventListener('select', e => {
    console.log(
        e.target.value.substring(
            e.target.selectionStart, e.target.selectionEnd
        )
    );
    console.log(e.target.selectionStart, e.target.selectionEnd);
})

//setRangeText başlangıç ve bitiş indislerine göre seçilen değeri belirlenen değer ile değiştirir.
const textarea = document.querySelector('textarea')
const actionButtons = document.querySelectorAll('.action-btn')

actionButtons.forEach(button => {
    button.addEventListener('click', e => {
        console.log(
            textarea.selectionStart,
            textarea.selectionEnd
        )
        console.log(
            e.target.dataset.type
        );
    })
})