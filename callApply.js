const normalPerson = {
    firstName : "Sifat",
    lastName : "Sayed",
    salaray : 15000,

    getFullName : function () {
        return this.firstName + " " + this.lastName +  " "+ this.salaray ;  
    },
    chargeBill : function (amount) {
        return this.salaray  - amount ;
    }
}
console.log(normalPerson.chargeBill(1500));
console.log(normalPerson.salaray);
console.log(normalPerson.getFullName())