// let array = [1, 1, 2, 3, 5, 8, 13]
// let sumOfNum = function (arr, n) {
//     for (let i = 0; i < arr.length; i++) {
//      return arr[i] * n;
//     }
// }
// console.log(sumOfNum(array, 2))

let array = [1, 1, 2, 3, 5, 8, 13]
let array2 = [1, 2, 3, 4, 5]
//===============================

function summer(arr, n){
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let newNum = arr[i] * n;
        newArr.push(newNum)
    };
    return newArr
}
// console.log(summer(array, 15))
//====================

function summer2(arr, n){
    return arr.map(i => i*n)
}
// console.log(summer2(array2, 255))
//=======================

Array.prototype.summer3 = function (n) { //В глобальному обєкті Array створюємо прототип, метод, який
    //викликаємо до будь якого нового обєкту
    return this.map(i => i*n)
}
console.log(array.summer3(10))

//==============================
