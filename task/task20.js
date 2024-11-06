const product=(numbers)=> {
    return numbers.reduce((accumulator, current) => accumulator * current, 1);
}
const result = product([1,2,3,4,5]);
console.log(result);