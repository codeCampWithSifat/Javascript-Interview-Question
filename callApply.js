// const normalPerson = {
//     firstName : "Sifat",
//     lastName : "Sayed",
//     salaray : 15000,

//     getFullName : function () {
//         return this.firstName + " " + this.lastName +  " "+ this.salaray ;  
//     },
//     chargeBill : function (amount) {
//         return this.salaray  - amount ;
//     }
// }
// console.log(normalPerson.chargeBill(1500));
// console.log(normalPerson.salaray);
// console.log(normalPerson.getFullName())
const normalPerson = {
    firstName : "Sifat",
    lastName : "Sayed",
    salaray : 25000,
    getFullName : function () {
        return this.firstName +" "+ this.lastName ;
    },
    chargeBill : function (amount) {
        return this.salaray - amount ;
    }
};

const heroPerson = {
    firstName : "Hero",
    lastName : "Alam",
    salary : 20000 ,
};

normalPerson.chargeBill.call(heroPerson,2000)
console.log(heroPerson.salary)
