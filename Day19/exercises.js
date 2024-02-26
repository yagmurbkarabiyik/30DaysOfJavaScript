//Level 1 Exercises
//1
let number = 5
let number2 = 5

function math(){
    function multiply(){
        return number * number2
    }
    function division(){
        return number / number2
    }

    return {
        multiply : multiply,
        division : division
    }
}

const funcc = math()
console.log(funcc.multiply())
console.log(funcc.division())

//Level 2 Exercises
//1
function getFullName(){
    function getName(){
        let name = 'Yagmur'
        return name;
    }
    function getSurname(){
        let surname = 'Karabiyik'
        return surname
    }

    function getAll(){
        let name = getName(); 
        let surname = getSurname();
        return name + ' ' + surname;
    }

    return {
        getName : getName,
        getSurname : getSurname,
        getAll : getAll
    }
}

const newFull = getFullName()
console.log(newFull.getAll())

//Level 3 Exercises
//1 ???
function personAccount(firstname, lastname) {
    let incomes = [];
    let expenses = [];

    function totalIncome() {
        let total = 0;
        for (let income of incomes) {
            total += income.amount;
        }
        return total;
    }

    function totalExpense() {
        let total = 0;
        for (let expense of expenses) {
            total += expense.amount;
        }
        return total;
    }

    function accountInfo() {
        return `${firstname} ${lastname}:\nTotal Income: ${totalIncome()}\nTotal Expense: ${totalExpense()}\nAccount Balance: ${accountBalance()}`;
    }

    function addIncome(description, amount) {
        incomes.push({ description, amount });
    }

    function addExpense(description, amount) {
        expenses.push({ description, amount });
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return {
        totalIncome,
        totalExpense,
        accountInfo,
        addIncome,
        addExpense,
        accountBalance
    };
}

const myAccount = personAccount("John", "Doe");
myAccount.addIncome("Salary", 3000);
myAccount.addIncome("Freelancing", 500);
myAccount.addExpense("Rent", 1000);
myAccount.addExpense("Food", 300);
console.log(myAccount.accountInfo());