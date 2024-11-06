const numbers = [1, 2, 2, 3, 4, 4, 5];

const getUniqueNumbers = (numbers) => {
    return [...new Set(numbers)];
  }
  
  // Example usage:
  const uniqueNumbers = getUniqueNumbers(numbers);
  
  console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
  

///================================================================
const arr =[1,2,3,3,4,5,5,6,7,7]
const newarr=arr.filter((data,i)=>{
    return arr.indexOf(data)===i
})
console.log(newarr)

//=====================================================



function removeDuplicates(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
}

// Example usage:
let nums = [1, 2, 2, 3, 4, 4, 5];
let uniqueNums = removeDuplicates(nums);
console.log(uniqueNums);