// Promise Basics

console.log("=== PROMISE STATES ===\n");

// Pending promise
const pendingPromise = new Promise((resolve, reject) => {
  // Never resolves or rejects
});
console.log("Pending:", pendingPromise);

// Fulfilled promise
const fulfilledPromise = Promise.resolve("I am fulfilled");
console.log("Fulfilled:", fulfilledPromise);

// Rejected promise
const rejectedPromise = Promise.reject("I am rejected");
console.log("Rejected:", rejectedPromise);


console.log("\n=== THEN AND CATCH ===\n");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received");
  }, 1000);
});

promise.then((data) => {
  console.log("Then block:", data);
});


console.log("\n=== HANDLING ERRORS ===\n");

const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Network error"));
  }, 1000);
});

errorPromise
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.log("Error caught:", error.message);
  });


console.log("\n=== FINALLY BLOCK ===\n");

const cleanupPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operation complete");
  }, 1000);
});

cleanupPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Finally block - runs regardless of success/failure");
  });


console.log("\n=== PRACTICAL EXAMPLE: USER AUTHENTICATION ===\n");

function authenticateUser(username, password) {
  return new Promise((resolve, reject) => {
    console.log("Authenticating...");
    
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve({ 
          username: username, 
          role: "admin",
          token: "abc123xyz"
        });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1500);
  });
}

// Success case
authenticateUser("admin", "1234")
  .then((user) => {
    console.log("✅ Login successful!");
    console.log("User:", user);
  })
  .catch((error) => {
    console.log("❌ Login failed:", error.message);
  });

// Failure case
authenticateUser("hacker", "wrong")
  .then((user) => {
    console.log("✅ Login successful!");
    console.log("User:", user);
  })
  .catch((error) => {
    console.log("❌ Login failed:", error.message);
  });