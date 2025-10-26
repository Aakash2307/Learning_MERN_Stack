// What is a Promise?

console.log("=== CREATING A SIMPLE PROMISE ===\n");

// Promise takes a function with two parameters: resolve and reject
const myPromise = new Promise((resolve, reject) => {
  console.log("Promise is created (pending state)");
  
  // Simulate async operation
  setTimeout(() => {
    const success = true;
    
    if (success) {
      resolve("Operation successful!"); // Fulfilled
    } else {
      reject("Operation failed!"); // Rejected
    }
  }, 2000);
});

console.log("Promise object:", myPromise);


console.log("\n=== USING THE PROMISE ===\n");

myPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });


console.log("\n=== PROMISE WITH REJECTION ===\n");

const failingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Something went wrong!");
  }, 1000);
});

failingPromise
  .then((result) => {
    console.log("Success:", result); // Won't run
  })
  .catch((error) => {
    console.log("Caught error:", error); // This runs
  });


console.log("\n=== REAL WORLD EXAMPLE: FOOD ORDER ===\n");

function orderFood(item) {
  return new Promise((resolve, reject) => {
    console.log(`Ordering ${item}...`);
    
    setTimeout(() => {
      const available = Math.random() > 0.6; // 70% chance available
      
      if (available) {
        resolve(`${item} is ready!`);
      } else {
        reject(`Sorry, ${item} is not available`);
      }
    }, 2000);
  });
}

orderFood("Pizza")
  .then((message) => {
    console.log("✅", message);
  })
  .catch((error) => {
    console.log("❌", error);
  });

console.log("You can do other things while waiting...");