const person = {
  fname: "Tushar",
  lname: "Ahmed",
  salary: 20000,
  fullName: function () {
    return this.fname + " " + this.lname;
  },
  getCharge: function (amount) {
    this.salary = this.salary - amount;
    return this.salary;
  },
};
console.log(person.fullName());
console.log(person.getCharge(2000));
console.log(person.getCharge(2000));
