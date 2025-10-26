// now in this code we would be learning about the io of blocking and non blocking 

console.log("Start of a blocking example")

// Blocking operation (BAD - freezes everything)
for (let i = 0; i < 3000; i++) {
  // Heavy computation - blocks everything
}

// the i that we ran just blocked the code which didnt able to do anythign

console.log("End of blocking example");
console.log("Notice: You had to wait for the loop to finish!\n");


// Non-blocking operation (GOOD - doesn't freeze)
console.log("Start of non-blocking example");

setTimeout(() => {
  console.log("This is non-blocking - doesn't freeze the program");
}, 2000);

console.log("End of non-blocking example");
console.log("Notice: This printed immediately, didn't wait for timeout!");