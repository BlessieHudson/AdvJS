const students = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 23 }
];
const findStudentByName=(students,name)=>{
    return students.find(studentdata=>studentdata.name===name)
}
console.log(findStudentByName(students, 'Bob'))