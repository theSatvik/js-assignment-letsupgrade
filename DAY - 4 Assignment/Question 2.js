const student ={
    name:"Helsinki",
    age:24,
    projects:{
        diceGame:"Two player dice game using JavaScript",
    }
}

let {name,age,projects:{diceGame}}=student;

console.log(`name = ${name} \nAge = ${age} \nProjects -> DiceGame = ${diceGame} `);