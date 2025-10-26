# Callbacks

## What is a Callback?

A **callback** is a function passed as an argument to another function, which is then executed after some operation completes.

## Why Use Callbacks?

JavaScript is **asynchronous**. When operations take time (reading files, fetching data), we don't want to wait. Instead, we pass a callback function that runs when the operation finishes.

## Basic Syntax

```javascript
function doSomething(callback) {
  // Do some work
  callback(); // Execute the callback
}

doSomething(() => {
  console.log("Callback executed!");
});
```

## Real-World Analogy

**Pizza Order:**
1. You call pizza place (start async operation)
2. You give your phone number (callback function)
3. You continue your day (code keeps running)
4. They call you back when ready (callback executes)

## Error-First Callback Pattern

Node.js convention: First parameter is always error, second is data.

```javascript
function readFile(callback) {
  // If error occurs
  callback(error, null);
  
  // If success
  callback(null, data);
}

readFile((error, data) => {
  if (error) {
    // Handle error
  } else {
    // Use data
  }
});
```

## Callback Hell

Problem: Nesting too many callbacks makes code hard to read.

```javascript
doSomething((result1) => {
  doAnotherThing(result1, (result2) => {
    doThirdThing(result2, (result3) => {
      // This is callback hell!
    });
  });
});
```

**Solution:** Promises and Async/Await (we'll learn next!)

## Key Points

✅ Callback = function passed to another function
✅ Used for asynchronous operations
✅ Error-first pattern in Node.js
✅ Can lead to callback hell
✅ Modern alternative: Promises/Async-Await