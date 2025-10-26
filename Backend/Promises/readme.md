# Promises

## What is a Promise?

A **Promise** is an object representing the eventual completion or failure of an asynchronous operation.

## Why Promises?

**Problems with Callbacks:**
- Callback hell (nested callbacks)
- Hard to read and maintain
- Difficult error handling

**Promises solve this:**
- Cleaner syntax
- Better error handling
- Easier to chain operations

## Promise States

1. **Pending** - Initial state, operation not complete
2. **Fulfilled** - Operation completed successfully
3. **Rejected** - Operation failed

## Basic Syntax

```javascript
const promise = new Promise((resolve, reject) => {
  // Async operation
  if (success) {
    resolve(data);  // Success
  } else {
    reject(error);  // Failure
  }
});

promise
  .then(data => console.log(data))   // Handle success
  .catch(error => console.log(error)); // Handle error
```

## Callback vs Promise

**Callback:**
```javascript
readFile('file.txt', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
```

**Promise:**
```javascript
readFile('file.txt')
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

## Promise Chaining

```javascript
doSomething()
  .then(result1 => doAnotherThing(result1))
  .then(result2 => doThirdThing(result2))
  .then(result3 => console.log(result3))
  .catch(error => console.log(error));
```

## Key Methods

- `.then()` - Handle success
- `.catch()` - Handle errors
- `.finally()` - Runs regardless of success/failure
- `Promise.all()` - Wait for multiple promises
- `Promise.race()` - First promise to complete

## Key Points

✅ Promises represent future values
✅ Three states: pending, fulfilled, rejected
✅ Cleaner than callbacks
✅ Better error handling with .catch()
✅ Can be chained for sequential operations