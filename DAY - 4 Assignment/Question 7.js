console.log("Prime number from 2 to N");
let N=+prompt("Enter a number","E.g:5");
for(let i=2;i<=N;i++)
{   let check=true;
    for(let j=2;j<=Math.sqrt(i);j++)
    {
        if(i%j==0)check=false;
    }
    if(check)console.log(i);
}