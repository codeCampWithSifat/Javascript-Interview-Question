class Person {
    constructor (firstName , lastName , salary) {
            this.firstName = firstName ,
            this.lastName = lastName ,
            this.salary = salary 
    }
};

const heroPerson = new Person ("sifat", "Sayed", 20000, "saifa");
// console.log(heroPerson);

function Person1 (firstName , lastName , salary) {
    this.firstName  = firstName;
    this.lastName = lastName ;
    this.salary = salary ;
};

const oldPerson = new Person1 ("Grand" ,"Papa", 2500);
console.log(oldPerson);