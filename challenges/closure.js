// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation: Nested function can access this internal variable becuase it is called within the function and it goes outside the function to search for the variable with a similar name, finding the const external above, referncing that scope outside of the function.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num) {
  let count = 0;
  for (let i = 0; i < num; i++) {
    count < 10;
  }
  return num;
}
console.log(count(4));
