const obj={ firstName: 'John', lastName: 'Doe', age: 30 }
const destructure=(obj)=>{
    return `${obj.firstName} ${obj.lastName} is ${obj.age} years old.`
}
console.log(destructure(obj))