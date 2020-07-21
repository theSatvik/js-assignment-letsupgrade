console.log("Cubes of Odd Numbers");
let arrOdd=[],Num;
do{
      Num=+prompt("Enter a positive Number - To stop enter a -ve Number Or Zero",'Example - 7');
    (!isNaN(Num))?arrOdd.push(Num):'';
}while(Num>0);

let CubesOfOdd=arrOdd.filter(Ele=>Ele%2==1).map(El=>El**3);
console.log(CubesOfOdd);