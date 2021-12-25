const normalPerson = {
    firstName : "Sifat",
    lastName : "Sayed",
    salary : 25000 ,

    getFullName : function () {
        return this.firstName + " " + this.lastName ;
    },
    chargeBill : function (amount , tips , tax) {
        return this.salary - amount - tips - tax;
    }
};


const heroPerson = {
    firstName : "Hero",
    lastName : "Alam",
    salary : 20000,
};

// normalPerson.chargeBill();
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// console.log(heroChargeBill(2000))
normalPerson.chargeBill.apply(heroPerson,[3000,300,30]);
console.log(heroPerson.salary)