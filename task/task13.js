// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(res=>res.json())
// .then(data=>{
//     console.log(data)
// })
// .catch(err=>{
//     console.log(err)
// })
async function fetchData() {
try {
    // Making a GET request using fetch
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    
    // Checking if the response is ok (status in the range 200-299)
    // if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    // }
    
    // Parsing the response as JSON
    const data = await response.json();
    
    // Logging the response data
    console.log(data);
} catch (error) {
    // Handling errors
    console.log(error);
}
}

// Calling the async function
fetchData();