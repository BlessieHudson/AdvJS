const words= ['apple', 'banana', 'cherry']
const defaultParameter=(seperator=',', ...words)=>{
    return words.join(seperator)
}
console.log(defaultParameter('',words))
console.log(defaultParameter('-',...words))