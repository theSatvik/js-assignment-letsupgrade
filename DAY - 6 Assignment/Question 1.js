console.log("Automatic Background change");

let arrayOfColors = ['grey','maroon','lightgreen','aqua'];

let i=0;
function changeColor(){
    if(i==arrayOfColors.length)i=0;
    document.body.style
    .backgroundColor=arrayOfColors[i++];
}
setInterval(changeColor,5000);