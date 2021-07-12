// ---object -1//
const person = {
  fname: "Tushar",
  lname: "Ahmed",
  salary: 20000,
  fullName: function () {
    return this.fname + " " + this.lname;
  },
  getCharge: function (amount) {
    //   console.log(this)
    this.salary = this.salary - amount;
    return this.salary;
  },
};

//   --object -2//
const person2 = {
  fname: "Karim",
  lname: "Ahmed",
  salary: 25000,
};

// --object -3//
const person3 = {
  fname: "Tamim",
  lname: "Ahmed",
  salary: 10000,
};

// --for person 2--//
const person2ChargeBill = person.getCharge.bind(person2);
// console.log(person2ChargeBill);
person2ChargeBill(2000);
person2ChargeBill(3000);
person2ChargeBill(5000);
console.log(person2.salary);
console.log(person.salary);

// --for person 3--//
const person3ChargeBill = person.getCharge.bind(person3);
// console.log(person2ChargeBill);
person3ChargeBill(2000);
person3ChargeBill(3000);
person3ChargeBill(5000);
console.log(person3.salary);
console.log(person.salary);
