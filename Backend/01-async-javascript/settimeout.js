// now we will go through an example which says about the settimeout 

// here we wil be also simulating an api call 

setTimeout(()=>{
    console.log("2 seconds have passes") 
} , 2000)


console.log("All timers are now started")



console.log("Fetching your api data ")

setTimeout(()=>{
    const user = {
        name : "sky" ,
        email : "tmkc@gmail.com hey "

    };
    console.log("Data has been recieved " , user)
} , 3000)


console.log("Request has been sent waiting for response")