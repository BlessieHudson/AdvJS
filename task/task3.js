const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 }
  ];
const scores=students.find((data)=>{
    return data.name=="Bob"
})  
console.log(scores.score)
