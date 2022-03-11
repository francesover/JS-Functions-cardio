// 1. Write a function that returns the sum of any two integers passed as arguments
function addTwoNumbers(x,y) {
  let total = x + y;
  console.log(total);
  return total;
}

// 2. Write a function that returns the difference of the second argument from the first
function subtractTwoNumbers(x,y) {
  let total = x - y;
  console.log(total);
  return total;
}

// 3. Write a function that allows a user to enter their name as an
// argument and returns a statement greeting them like, `Hello, Homer!`
function greetUser(firstName) {
  const greeting = `Hi  ${firstName}`;
  console.log(greeting);
  return greeting;
}

// 4. Write a function that returns the product of any argument
// multiplied by itself.
function multiplyTwoNumbers(x,y) {
  let total = x * y;
  console.log(total);
  return total;
}

// 5. Write a  function set equal to a variable called `volume`
// that returns a value of the dimensions of a box (l*w*h) and THEN
// invoke that function in a console.log() with a message of the box's
// dimensions
// ^ 🔥 This is s-tier/big-brain work and not for the faint of heart 🔥
function variable(l, w, h) {
  let dimensions = l * w * h;
  console.log(dimensions);
  const variables = (dimensions);
  console.log(`The dimensions of the box are ${dimensions} cubic meters.`);
  return dimensions;
}

variable(5, 5, 4);
