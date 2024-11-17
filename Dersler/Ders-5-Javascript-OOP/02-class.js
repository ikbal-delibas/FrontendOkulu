// Class 
//class Empployee{
//    constructor(name,age, salary){
//        this.name = name;
//        this.age = age;
//        this.salary = salary;
//    }
//    showInfos(){
//        console.log(`İsim: ${this.name} Yaş: ${this.age} Maaş: ${this.salary}`);
//    }
//}
//
//const emp1=new Empployee('İkbal',24,4000);
//console.log(emp1);    
//emp1.showInfos();

//class Matematik{
//   cube(x){
//    console.log(x*x*x);
//   }
//   static cube2(x){
//    console.log(x*x*x);
//   }
//
//}
//const math=new Matematik();
//
//math.cube(3);

// Inheritance

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showInfos(){
        console.log(`İsim: ${this.name} Yaş: ${this.age} Maaş: ${this.salary}`);
    }
}

class Employee extends Person{
    constructor(name,age,salary){
        super(name,age);
        this.salary=salary;
        
    }
}

const emp1=new Employee('İkbal',24,4000);
console.log(emp1);
emp1.showInfos();