// const flatten=(arr)=>{
//     return arr.reduce((i,c)=>{
//         return i.concat(c)
//     },[])
// }
// let arr=[[1, 2, 3], [4, 5], [6, 7, 8, 9]];
// console.log(flatten(arr))



const flatten=(arr)=>{
        return arr.flat()

}
let arr=[[1, 2, 3], [4, 5], [6, 7, 8, 9]];
console.log(flatten(arr))