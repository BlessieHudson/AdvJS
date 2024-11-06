const arr=[1, 2, 3, 4, 5, 6]
const even=arr.filter((element)=>{
    return element%2==0
})
const square=even.map((data)=>{
    return data**2
})
console.log(square)