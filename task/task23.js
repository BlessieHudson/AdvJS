const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
const fruits = (arr) => {
    return arr.reduce((count,value)=>{
        count[value] = (count[value]||0)+1;
        return count
    },{})
}
console.log(fruits(arr))