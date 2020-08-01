let arr=[];
function addItem(){
  var ul = document.getElementById("dynamicList");
  var user = document.getElementById("inputValue");
  var li = document.createElement("li");
  arr.push(user.value);
  var isInArray = arr.indexOf(user.value) !== -1;
  if(isInArray==true){
    li.setAttribute('id',user.value);
  li.appendChild(document.createTextNode(user.value));
  ul.appendChild(li);
  
  localStorage.setItem('todolist',ul.innerHTML);
  }
  else setTimeout(function(){ alert("Already Added");});
}

function removeItem(){
  var ul = document.getElementById("dynamicList");
  var user = document.getElementById("inputValue");
  var item = document.getElementById(user.value);
  ul.removeChild(item);
}