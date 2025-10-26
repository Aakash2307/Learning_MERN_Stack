console.log("======SYNCHRONOUS CODE======")

console.log("Step 1")
console.log("Step 2")
console.log("Step 3")

// now here in the above code everything runs in an order no issue will come up 

console.log("=========ASYNCHRONOUS CODE=========")

console.log("Start")

setTimeout(()=>{
    console.log("This ran after two seconds")
} , 2000)


console.log("end")