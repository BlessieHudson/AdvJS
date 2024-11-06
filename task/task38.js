const arr1=[1,2,3]
const arr2=[3,4,5]
const uniqueElements=(arr1,arr2)=>{
    return [...new Set([...arr1,...arr2])]
}
console.log(uniqueElements(arr1,arr2))