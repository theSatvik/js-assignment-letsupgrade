console.log("Calculator");
var operation = window.prompt("Enter the operator:( For Squareroot input value in num1 only)",'Ex.: + for addition');    
var num1 = +window.prompt("Enter the 1st number:"); console.log(num1);
var num2 = +window.prompt("Enter the 2nd number:"); console.log(num2);
switch(operation)
{
        case'+':
        console.log(num1+num2);
        break;
        case'-':
        console.log(num1-num2);
        break;
        case'*':
        console.log(num1*num2);
        break;
        case'/':
        console.log(num1/num2);
        break;
        case'**':
        console.log(num1**2);
        break;
        case'%':
        console.log(num1%num2);
        break;
}
