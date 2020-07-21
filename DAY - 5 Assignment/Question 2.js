class User {
    constructor(name,age,email,role='User') {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
      this.role=role;
    }

    static greet(){
        console.log("Hello There");
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email,role="Moderator"){
        super(name,age,email,role);
    }

    deleteUser(user){
        if(user instanceof Admin)
        {
            if(!(this instanceof Admin))
            {
                console.log("You do not have the permission")
                return
            }
        }
        users = users.filter(u =>{
            return u.email != user.email; 
        })
    }
    addCoins(user){
        
        user.luCoins++;
        console.log(`${user.name} has ${user.luCoins} coins`);        
    }
    deleteCoins(user){
        if(user instanceof Admin)
        {
            if(!(this instanceof Admin))
            {
                console.log("You do not have the permission")
                return
            }
        }
        user.luCoins--;
        console.log(`${user.name} has ${user.luCoins} coins`);
        
    }

}

class Admin extends Moderator{
   constructor(name,age,email){
    super(name,age,email,'Admin');
   }
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }
   deleteCourse(user,course){
    user.courses = user.courses.filter(u =>{
        return u != course; 
    })
    console.log(user);
}
}


let user1 = new User('Dilip',25,'dilip@gmail.com');
let user2 = new User('Krishnan',24,'k@gmai.com');
let mod = new Moderator('Berlin',24,'b@gmail.com','Moderator');
let admin = new Admin('Rio',25,'r@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});

User.greet();

admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');
admin.addCourse(user1,'C++');
admin.addCourse(user1,'DS');
admin.deleteCourse(user1,'C++');

users.forEach(element => {
    console.log(element);
});


mod.addCoins(user1);
mod.addCoins(user1);
mod.addCoins(user2);
mod.addCoins(admin);
mod.deleteCoins(user1)


mod.deleteUser(user1);
mod.deleteUser(admin);//cannot delete
console.log(users);
