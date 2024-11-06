// const tasks = [
//     { taskName: 'Task 1', dueDate: '2023-06-01' },
//     { taskName: 'Task 2', dueDate: '2024-05-01' },
//     { taskName: 'Task 3', dueDate: '2024-01-01' }
//   ];
//   const findOverdueTask=(arr)=>{
//     const currentDate = new Date();
//     for(const element of arr){
//         const taskDueDate=new Date(element.dueDate);
//         if(taskDueDate<currentDate){
//             return element;
//         }
//     }
// }
// console.log(findOverdueTask(tasks))



const tasks = [
    { taskName: 'Task 1', dueDate: '2023-06-01' },
    { taskName: 'Task 2', dueDate: '2024-05-01' },
    { taskName: 'Task 3', dueDate: '2024-01-01' }
];

const findOverdueTask = (arr) => {
    const currentDate = new Date(); 

    return arr.find(element => new Date(element.dueDate) < currentDate);
}

console.log(findOverdueTask(tasks));
