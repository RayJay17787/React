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
// Any function can be made into an Async function and return a promise.
// Async functions always return a promise. Which means:
// let p1 = new Promise((resolve, reject) => {"Code"}) == Function = async (parameter) => {return Promise}

// myFunc = async () => {
//     return "This is an Asynchronous Function"
// }

// myFunc().then((value) => {
//     alert(value)
// })

// let myFunc = async () => {

//     let karachiTemp = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("27 C")
//         }, 2000)
//     })

//     let bangaloreTemp = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("25 C")
//         }, 5000)
//     })

//     console.log("Fetching Karachi's Temperature. Please Wait...")
//     let kT = await karachiTemp
//     console.log(`Fetched Karachi's Temperature: ${kT}`)
//     console.log("Fetching Bangalore's's Temperature. Please Wait...")
//     let bT = await bangaloreTemp
//     console.log(`Fetched Bangalore's Temperature: ${bT}`)
//     return [kT, bT]
// }

// myFunc().then((value) => {console.log(value)})

// let myFunc = async() => {
//     let p1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hi, what is your name?")
//         }, 4000)
//     })

//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hi, Rayyan. Nice to meet you!")
//         }, 8000)
//     })

//     console.log("Fetching first promise...")
//     let pr1 = await p1
//     console.log(`First Promise says: ${pr1}`)
//     console.log("Fetching second promise...")
//     let pr2 = await p2
//     console.log(`Second Promise says: ${pr2}`)

//     return [pr1, pr2]
// }

// myFunc().then((value) => {console.log({value})})

// let myFunc = async() => {
//     let pr1;
//     try{
//         let p1 = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("What is your name?")
//             }, 4000)
//         })

//         let p2 = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 reject(new Error("Error 404: Page not found :("))
//             }, 8000)
//         })

//         console.log("Fetching Promise 1...")
//         pr1 = await p1
//         console.log(`Fetched successfully: ${pr1}`)
//         console.log("Fetching Promise 2...")
//         let pr2 = await p2

//     } 
//     catch(error){
//         console.error(`An error has occurred: ${error}`)
//         return [pr1, "Error Reported."]
//     } finally {
//         console.log("Fetching Complete")
//     }
// }

// myFunc().then((value) => {
//     console.log(value)
// })

// let myFunc = () => {
//     let val = document.getElementById('val').value;
//     let optBalance = 5000;
//     let hasError = false;
//     try{
//         if(val >= optBalance){
//             alert("Sufficient Balance")
//         }
//         else{
//             throw new Error("Insufficient Balance")
//         }
//     } catch(error){
//         hasError = true;
//         alert(`${error}`)
//         console.error(`${error}`)
//     } finally{
//         alert("Thankyou for using our bank app")
//         if(hasError == true){
//             console.log("Application Terminated with an error")
//         }
//         else{console.log("Application Terminated.")

//         }
//     }
// }
// myFunc(val)

// const myDetails = {
//     name: "Rayyan",
//     balance: 12000,
//     pin: 1234,
//     isLocked: false
// }

// let processWithdraw = (enteredPin, amount) => {

//     enteredPin = document.getElementById('val1').value
//     amount = document.getElementById('val2').value

//     alert("Please wait while we process your request...")

//     setTimeout(() => {
//         try{
//             if(myDetails.isLocked == true){throw new Error("Account Locked")}
//             if(enteredPin != myDetails.pin){throw new Error("Incorrect Pin")}
//             if(amount > myDetails.balance){throw new Error("Insufficient Funds")}
    
//             alert(`Cash Withdrawn: ${amount}`)
//             myDetails.balance = myDetails.balance - amount
//             console.log(`Remaining Balance: ${myDetails.balance}`)
//             alert(`Withdraw Successfull. Remaining Balance: ${myDetails.balance}`)
    
//         } catch(error){
//             console.error(`An error occurred: ${error.message}`)
//             alert(`${error.message}`)
//         } finally{
//             alert("Thank You For Using Our Service")
//             console.log("App Terminated")
//         }
//     }, 8000)
// }

// let processWithdraw = (enteredPin, amount) => {

//     amount = document.getElementById('val2').value
//     enteredPin = document.getElementById('val1').value

//     console.log("Processing Transaction. Please Wait...")
//     setTimeout(() => {
//         try{
//             if(myDetails.isLocked == false){
//                 console.log("Everything is correct. let's check the pin...")
//             }
//             else if(myDetails.isLocked == true){
//                 throw new Error("Account Locked")
//             }
//         } catch(error){
//             alert(`${error}`)
//             console.error(error)
//         }

//         try{
//             if(enteredPin == myDetails.pin){
//                 console.log("Everything is correct. User should be able to withdraw now")
//             }
//             else{
//                 throw new Error("Incorrect Pin")
//             }
//         } catch(error){
//             alert(`${error}`)
//             console.error(error)
//         }

//         try {
//             if (amount <= myDetails.balance && enteredPin == myDetails.pin) {
//                 let remBalance = myDetails.balance - amount
//                 alert(`Withdrawal Complete! Remaining Balance: ${remBalance}`)
//             }
//             else {
//                 throw new Error("Insufficient Balance or incorrect pin")
//             }
//         } catch (error) {
//             alert(`${error}`)
//             console.error(error)
//         } finally {
//             alert("Thank You For Using Our Application")
//         }
//     }, 2000)
// }

// Filter, Map, and Reduce in JavaScript

// let arr = [45, 23, 21]
// let a = arr.map((value) => {
//     console.log(value);
//     return value * 2
// })
// console.log(a)

// let arr = [10, 25, 30, 45, 50, 60]
// let a = arr.filter((value) => {
//     try{
//         if(value %2 == 0){
//             return `Values divisible by 2: ${value % 2 == 0}`
//         } else if(value %2 != 0){
//             throw new Error(`This value is not divible by 2: ${value}`)
//         }
//     } catch(error){
//         console.log(error.message)
//     }
// })
// console.log(a)

// let myObj = {
//     name: "Rayyan",
//     walk(){
//         return{
//             steps: 200,
//             location: "Karachi"
//         }
//     },
//     talk(){
//         return{
//             language: "Urdu",
//             proficiency: "Native"
//         }
//     }
// }

// let {steps, location} = myObj.walk()
// console.log(`Has walked over ${steps} steps`)
// let {language, proficiency} = myObj.talk()
// console.log(`Talks in ${language}`)





