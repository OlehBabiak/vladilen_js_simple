// function createCalcFunction(n) {
// return function () {
// console.log(1000*n)
// }
// }
// createCalcFunction(42)()

//==============================

// function createIncrementor(n) {
//     return function (num) {
//         return n+num
//     }
// }
//
// const addFive = createIncrementor(5)
// console.log(addFive(20))

//==================

function urlGenerator(domain) {
return function (url) {
return `https://${url}.${domain}`
}
}

let urlCom = urlGenerator('com')
console.log(urlCom('google'))
console.log(urlCom('netflix'))

let urlComUa = urlGenerator('com.ua')
console.log(urlComUa('lider-shyna'))

//==================================================
function bind(context, fn) {
    return function (...args) {
fn.apply(context, args)
    }
}

function logPerson() {
        console.log(`Person: ${this.name}, ${this.age}, ${this.job}, Phone is ${this.phone}`)
    }



const person1 = {name: 'Oleg', age: 39, job: 'programmer'}
const person2 = {name: 'Nastja', age: 28, job: 'Bank worker'}

bind(person1, logPerson)('0676733950')
bind(person2, logPerson)()
