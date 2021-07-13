/* // 1.---setTimeout() ---//
const dosomeSomething = () => {
    console.log("Do Something");
}
console.log(100);
setTimeout(dosomeSomething);
console.log(200);
console.log(200);
console.log(200); */

/* // 2.---setTimeout() ---//
console.log(100);
setTimeout(
  (dosomeSomething = () => {
    console.log("Do Something");
  }),
  5000                                    //--5000 = timeout in miliseconds --//
); 
console.log(200);
console.log(200);
console.log(200); */

// ---setInterval () ---//
console.log(100);
setInterval(
  (dosomeSomething = () => {
    console.log("Do Something");
  }),
  1000 //--1000 = timeout in miliseconds --(1000 msec = 1 sec--//
);
console.log(200);
console.log(200);
console.log(200);
