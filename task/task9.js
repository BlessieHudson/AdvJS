// const input='The quick brown fox jumps over the lazy dog'
// const output=input.includes('fox')
// console.log(output);


const checkIncludes = (input, word) => {
     return input.includes(word);
}
const input = 'The quick brown fox jumps over the lazy dog';
const output = checkIncludes(input, 'fox');
console.log(output);