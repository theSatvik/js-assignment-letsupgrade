console.log("Commission Earned by Salesman");
let Sales=+prompt("Enter your Sales","E.G:-7500");
let Salary=+prompt("Enter your Salary","E.G:-60000");
if(isNaN(Salary+Sales))
console.log("InValid Not a Number");
else{ 
    let Percent;
    if(Sales<=5000)Percent=2;
    else if(Sales>5000&&Sales<=10000)Percent=5;
    else if(Sales>10000&&Sales<=20000)Percent=7;
    else Percent=10;
    console.log(`The Commission ${Percent}%  \nTotal Commission Earned by the Salesman is ${Salary*(100+Percent)/100}`);

}