const avg=(arr)=>{
    return arr.reduce((ac,cv)=>{
        return (ac+cv/arr.length)
    },0)
}
let arr=[10, 20, 30, 40, 50]
console.log(avg(arr))