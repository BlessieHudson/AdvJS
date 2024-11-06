const arr=[1,2,3,4,5]
const product=arr.reduce((acc,cv)=>{
    return acc*cv
},1)
console.log(product);