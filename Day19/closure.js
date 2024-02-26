/*
Bir fonksiyon içersinde birden fazla fonksiyon yazmamıza imkan sağlar.
*/

function outerFunction(){
    let count = 0;
    function innerFunction(){
        count++
        return count
    }
    return innerFunction
}

const innerFunc = outerFunction()
console.log(innerFunc())

