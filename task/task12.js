// Task 12: Array includes()
// Problem Statement: Write a function that takes an array and a value, and returns whether the array includes that value using the includes() method.
// Example Input:

// ['apple', 'banana', 'cherry']
// 'banana'


const checkIncludes = (input, word) => {
    return input.includes(word);
}
const input = ['apple', 'banana', 'cherry']
const output = checkIncludes(input, 'banans');
console.log(output); 