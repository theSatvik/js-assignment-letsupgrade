console.log("API");

// // Method 1 - Fetch 
fetch('https://jsonplaceholder.typicode.com/todos')
.then(Res =>Res.json())
.then((data)=>{ 
    for(let i=0;i<data.length;i++)
        {
            if(data[i].completed)
                console.log(data[i])
        }
});

// Method 2 - Promise / async await 

// async function fetchapi(){
//     let response = (await fetch('https://jsonplaceholder.typicode.com/todos')).json();
//     const data =await response
    
//     for(let i=0;i<data.length;i++)
//     {
//         if(data[i].completed)
//             console.log(data[i])
//     }
// }
// fetchapi();