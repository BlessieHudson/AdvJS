const input=['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape']
const result=input.filter((data)=>{
    return data.length>5
})
console.log(result);