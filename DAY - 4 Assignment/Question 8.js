// function ask(question,yes,no)
// {
//     if(confirm(question))yes();
//     else no();
// }
// ask(
//     "do you agree?",
//     function(){alert("You Agreed."); },
//     function(){alert("You Cancelled the execution."); },
// )
let ask=(question,yes,no) =>{
    confirm(question)?yes():no();
}
ask(
    "do you agree?",
    ()=>{alert("You Agreed."); },
    ()=>{alert("You Cancelled the execution."); },
)
