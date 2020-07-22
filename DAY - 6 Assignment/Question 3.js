console.log("hello");

const wel=document.getElementById('welcome');
const ctime=document.getElementById('time');
let name=prompt("Enter your Name","Jonas Kahnwald");
wel.classList.add('blue');
wel.innerText="Welcome "+name;

const dmode=document.getElementById('dark');

dmode.onclick=()=>{
    document.body.classList.toggle('dark');
    ctime.classList.toggle('time');
}

function clock(){
    let date=new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText=time;
}
clock();
setInterval(clock,1000);