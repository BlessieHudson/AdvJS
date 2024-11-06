const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 21 },
    { name: 'David', age: 25 },
    { name: 'Eve', age: 22 }
  ];
const group = (people, property) => {
    return people.reduce((count, value) => {
        const key = value[property];
        if(!count[key]){
            count[key]=[];
        }
        count[key].push(value);
        return count;
    }, {})
}
console.log(group(people, 'age'))