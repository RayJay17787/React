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


// let promise1 = new Promise((resolve, reject) => {
//     console.log("Promise is pending right now")
//     setTimeout(() => {
//         resolve(true)
//     }, 5000)
// })

// let promise2 = new Promise((resolve, reject) => {
//     console.log("Promise is pending right now")
//     setTimeout(() => {
//         reject(new Error("I am an error"))
//     }, 5000)
// })

// promise1.then(() => {
//     console.log("I got accepted")
// })

// promise2.catch((error) => {
//     console.log("Some error has occurred. Please reload the page!")
// })

// let promise1 = new Promise((resolve, reject) => {
//     console.log("This promise is yet to be fulfilled")
//     setTimeout(() => {
//         console.log("Promise Fulfilled")
//         resolve(true)
//     }, 5000)
// })

// promise1.then(() => {
//     console.log("Task Done")
// })

// let promise2 = new Promise((resolve, reject) => {
//     console.log("This promise is yet to be fulfilled")
//     setTimeout(() => {
//         reject(new Error("Promise fulfilled, but...."))
//     }, 5000)
// })

// promise2.catch((error) => {
//     console.log("An unexpected error occurred")
// })

// let promise1 = new Promise((resolve, reject) => {
//     console.log("Fulfilling Promise 1 ....")
//     setTimeout(() => {
//         resolve(true)
//     }, 5000)
// })

// promise1.then(() => {
//     console.log("Promise Fulfilled")
// })

// let promise2 = new Promise((resolve, reject) => {
//     console.log("Fulfilling Promise 2 ....")
//     setTimeout(() => {
//         reject(new Error("Something's wrong, I can feel it"))
//     }, 5000)
// })

// promise2.catch((error) => {
//     console.log("An unexpected error occurred")
//     alert("The program will stop working now. Touch grass!")
// })

// let promise1 = new Promise((resolve, reject) => {
//     console.log("Fulfilling Promise 1 ...")
//     setTimeout(() => {
//         resolve(true)
//     }, 5000)
// })

// promise1.then(() => {
//     console.log("Promise Fulfilled successfully")
// })

// let promise2 = new Promise((resolve, reject) => {
//     console.log("Fulfilling Promise 2 ...")
//     setTimeout(() => {
//         reject(new Error())
//     }, 5000)
// })

// promise2.catch((error) => {
//     alert("An unexpected error has occurred")
// })

// Promise Chaining

// let p1 = new Promise((resolve, reject) => {
//     console.log("Resolving...")
//     setTimeout(() => {
//         console.log("Resolved after 5 seconds")
//         resolve(27)
//     }, 5000)
// })

// p1.then((value) => {
//     console.log(value)

//     let p2 = new Promise((resolve, reject) => {
//         console.log("Promise 2 initializing...")
//         setTimeout(() => {
//             resolve("Hello!")
//         }, 2000)
//     })
//     return p2
// }).then((value) => {
//     console.log(value)

//     let p3 = new Promise((resolve, reject) => {
//         console.log("Promise 3 initializing...")
//         setTimeout(() => {
//             resolve("How are you?")
//         }, 4000)
//     })
//     return p3
// }).then((value) => {
//     console.log(value)

//     let p4 = new Promise((resolve, reject) => {
//         console.log("Promise 4 initializing...")
//         setTimeout(() => {
//             resolve("Where are you from?")
//         }, 5000)
//     })
//     return p4
// }).then((value) => {
//     console.log(value)

//     let p5 = new Promise((resolve, reject) => {
//         console.log("Promise 5 initializing...")
//         setTimeout(() => {
//             resolve("Nice to meet you!")
//         }, 6000)
//     })
//     return p5
// }).then((value) => {
//     console.log(value)
// })

// let p1 = new Promise((resolve, reject) => {
//     console.log("P1 initializing...")
//     setTimeout(() => {
//         resolve("Hello!")
//     }, 5000)
//     return p1
// }).then((value) => {
//   console.log(value)  

//   let p2 = new Promise((resolve, reject) => {
//     console.log("P2 initializing...")
//     setTimeout(() => {
//         resolve("How are you?")
//     }, 5000)
//   })
//   return p2
// }).then((value) => {
//     console.log(value)

//     let p3 = new Promise((resolve, reject) => {
//         console.log("P3 initializing...")
//         setTimeout(() => {
//             resolve("What's your name?")
//         }, 5000)
//     })
//     return p3
// }).then((value) => {
//     console.log(value)

//     let p4 = new Promise((resolve, reject) => {
//         console.log("P4 initializing...")
//         setTimeout(() => {
//             resolve("What's your age?")
//         }, 5000)
//     })
//     return p4
// }).then((value) => {
//     console.log(value)

//     let p5 = new Promise((resolve, reject) => {
//         console.log("P5 initializing...")
//         setTimeout(() => {
//             resolve("Nice to meet you!")
//         }, 5000)
//     })
//     return p5
// }).then((value) => {
//     console.log(value)

//     let p6 = new Promise((resolve, reject) => {
//         console.log("P6 initializing...")
//         setTimeout(() => {
//             resolve("Code will now Terminate.")
//         }, 5000)
//     })
//     return p6
// }).then((value) => {
//     console.log(value)

//     let p7 = new Promise((resolve, reject) => {
//         console.log("P7 initializing...")
//         setTimeout(() => {
//             resolve("Code Terminated")
//         }, 5000)
//     })
//     return p7
// }).then((value) => {
//     alert(value)
// })

// Async/Await in JavaScript
// Async functions always return a promise. Any function can be made into an Async function and return a promise.

myFunc = async () => {
    return "This is an Asynchronous Function"
}

myFunc().then((value) => {
    alert(value)
})













