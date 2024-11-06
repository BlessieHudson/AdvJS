const sum=(...numbers)=> {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
const result = sum(1, 2, 3, 4, 5,56);
console.log(result);