//Task 1: Function vs Arrow Function
//---------------------------------
//Problem Statement: Write two functions, one using traditional function syntax and the other using arrow function syntax. Both functions should take a list of numbers as input and return a new list containing the square of each number.

//Traditional Method

function square(a)
{
    let output=[]
    for(let i=0;i<a.length;i++)
        {
            let b=a[i]*a[i]
            output.push(b)
        }
        console.log(output);
}
square([1,2,3,4,5])
//Arrow Function 
const square1 = (a) => {
    let output = [];
    for (let i = 0; i < a.length; i++) {
        let b = a[i] * a[i];
        output.push(b);
    }
    console.log(output);
};
square1([1,2,3,4,5])

// square([1, 2, 3, 4, 5]);

// a=[6,7,8,9,10]
// let squares=a.map((data,index)=>{
//     return data*data
// })
// console.log(squares)

