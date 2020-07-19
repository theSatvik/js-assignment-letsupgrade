var printFizz = "fizz",printBuzz="buzz";

for(var i=1;i<=100;i++)
{
    if(i%3==0&&i%5==0)
    console.log(`${printFizz+printBuzz}`);
    else if(i%3==0)
    console.log(`${printFizz}`);
    else if(i%5==0)
    console.log(`${printBuzz}`);
    else console.log(i);
}
