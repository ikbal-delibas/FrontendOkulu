//Object Literal
const person1={
    name: 'İkbal',
    age:24,
    langs:['Java','Javascript'],
    address:{
        street:'Beylikdüzü',
        city:'İstanbul'
    },
    showInfos: function() {
        console.log(this.name, this.age, this.langs,this.address);
    }
}

console.log(person1);

// Yapıcı Fonksiyon (Constructor)

function Person(name, age, langs) {
    this.name=name;
    this.age=age;
    this.langs=langs;
    this.showInfos=function() {
        console.log(this.name, this.age, this.langs);
    }
}
Person.prototype.showInfos=function() {
    console.log(this.name, this.age, this.langs);
};
function Employee(name, age, langs, salary) {
    Person.call(this, name, age, langs);
    this.salary=salary;
    
};
Employee.prototype=Object.create(Person.prototype);
const emp1=new Employee('Osman',24, ['Java','Javascript'],1000);
console.log(emp1);
emp1.showInfos();

const person2=new Person('Ahmet',26,['Python','C++']);

console.log(person2);
person2.showInfos();