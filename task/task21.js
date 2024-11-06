const longest = (arr) => {
    return arr.reduce((long, current) => {
        return current.length > long.length ? current : long;
    }, arr[0]);
}
const fruits=longest(['apple', 'banana', 'cherry', 'date'])
console.log(fruits)