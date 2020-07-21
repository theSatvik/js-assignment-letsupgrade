console.log("API");

// Method 1 - Fetch 
fetch('https://jsonplaceholder.typicode.com/todos')
.then(Res =>Res.json())
.then(data=>console.log(data));

// Method - Promise / async await 
async function fetchapi(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log(await response.json());
}
fetchapi();