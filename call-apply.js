// ---object -1//
const person = {
  fname: "Tushar",
  lname: "Ahmed",
  salary: 20000,
  fullName: function () {
    return this.fname + " " + this.lname;
  },
  getCharge: function (amount, tax, tips) {
    //   console.log(this)
    this.salary = this.salary - amount - tax - tips;
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

// --for person 2 using call()--//
person.getCharge.call(person2, 1000, 1000, 500);
console.log(`Person 2: ${person2.salary}`);
console.log(`Person 1: ${person.salary}`);

// --for person 3 using apply()--//
person.getCharge.apply(person3, [100, 100, 500]);
console.log(`Person 3: ${person3.salary}`);
console.log(`Person 1: ${person.salary}`);
