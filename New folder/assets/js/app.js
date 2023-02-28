// let arr = []
// let j = 0;
// for (let i = 0; i < 9; i++) {
//     arr[i] = j;
//     j = j + (i+1)
// }
// console.log(arr);

// let array = []
// let k = 1;
// for (let i = 0; i < 9; i++) {
//     array[i] = k;
//     k = k + (i+1)
// }
// console.log(array);

// function factorial(n){
//     let j = 1;
//     for(let i = n; i >= 1; i--){
//         j *= i;
//     }
//     return j;
// }
// console.log(factorial(4));

// let arr = []
// arr[0] = 1
// arr[1] = 1
// for (let i = 0; i < 20; i++) {
//     arr[arr.length] = arr[arr.length-1] + arr[i]
// }
// console.log(arr);

let str = 'Kamil'

let newStr = ''

let del = 2

for (let i = 0; i < str.length; i++) {
    if(i !== del){
        newStr = newStr + str[i]
    }
}
console.log(newStr);


let names = 'Kamil Huseyn Ramil'
let findName = ''
let find = 'm'
for (let i = 0; i < names.length; i++) {
    if (names[i] !== find) {
        findName = findName + names
    }
}
console.log(findName);