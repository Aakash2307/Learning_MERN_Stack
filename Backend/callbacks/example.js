console.log("=== ARRAY METHODS WITH CALLBACKS ===\n");

// forEach - executes callback for each element
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log("Number:", num);
});


console.log("\n=== MAP WITH CALLBACKS ===\n");

// map - transforms each element using callback
const doubled = numbers.map((num) => {
  return num * 2;
});

const even = numbers.map((num) => {
    return num % 2 ;
})

console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Only even number : " , even)



console.log("\n=== CALLBACK WITH MULTIPLE PARAMETERS ===\n");

function fetchData(url, onSuccess, onError) {
  console.log("Fetching from:", url);
  
  const success = Math.random() > 0.5; // Random success/failure
  
  setTimeout(() => {
    if (success) {
      onSuccess({ data: "Some data", status: 200 });
    } else {
      onError({ message: "Failed to fetch", status: 500 });
    }
  }, 1500);
}

fetchData(
  "https://api.example.com/users",
  (response) => {
    console.log("Success:", response);
  },
  (error) => {
    console.log("Error:", error);
  }
);
