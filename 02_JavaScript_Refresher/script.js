"use strict";

// const arr = [2, 3, 4, 5]

// // console.log(arr.length)

// let i;
// for (i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// let myFunc = (number) => {
//     console.log(`This is a number: ${number}`)
// }
// myFunc(48)

// Callbacks in JavaScript

// setTimeout(() => {
//    console.log("This is a callback function which runs after 3s") 
// }, 3000);

// let myFunc = () => {
//     console.log("This is an arrow function")
// }
// myFunc()

// Promises in JavaScript

// Syntax of Promises in JavaScript looks like:
/*
    let promise = new Promise((resolve, reject) => {
        *Code Execution*
    });
*/

// let promise = new Promise((resolve, reject) => {
//     console.log("Hello *")
//     resolve(56)
// })

// console.log("Hello 1")

// setTimeout(() => {console.log("Hello 2")}, 2000)

// function myFunc(){
//     return "Hello 3"
// }
// console.log(myFunc())
// console.log(promise)


let promise1 = new Promise((resolve, reject) => {
    console.log("Promise is pending right now")
    setTimeout(() => {
        resolve(true)
    }, 5000)
})

let promise2 = new Promise((resolve, reject) => {
    console.log("Promise is pending right now")
    setTimeout(() => {
        reject(new Error("I am an error"))
    }, 5000)
})

promise1.then(() => {
    console.log("I got accepted")
})

promise2.catch((error) => {
    console.log("Some error has occurred. Please reload the page!")
})