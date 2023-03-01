// Tests for equality and inequality with strings
console.log("hello" == "hello");  // true
console.log("hello" == "world");  // false
console.log("hello" != "world");  // true

// Tests using the toLowerCase() function
console.log("HELLO".toLowerCase() == "hello");  // true
console.log("hello".toLowerCase() == "world");  // false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(5 == 5);  // true
console.log(5 == 10);  // false
console.log(5 != 10);  // true
console.log(5 > 3);  // true
console.log(5 < 3);  // false
console.log(5 >= 5);  // true
console.log(5 <= 3);  // false

// Tests using "and" and "or" operators
console.log((5 > 3) && (10 > 5));  // true
console.log((5 > 10) || (10 > 5));  // true

// Test whether an item is in an array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3));  // true
console.log(numbers.includes(10));  // false

// Test whether an item is not in an array
console.log(!numbers.includes(3));  // false
console.log(!numbers.includes(10));  // true