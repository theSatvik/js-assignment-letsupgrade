var color_td;
document.write("<table border='1px'>");
let Num=+prompt("Enter a Number whose table has to be made","5");
let colNum=+prompt("Enter the number of columns","10");
for(let i = 1; i <= colNum ; i++) {

	document.write("<tr style='height:30px';>");
       
    color_td = "#ccc";		

    document.write("<td style='width:80px;background-color:" + color_td + ";'>" + `${Num} * ${i} = `+"<td style='width:60px';>"+ i*Num+"</center>");

}
