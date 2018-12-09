// JavaScript's for-in Loop on Objects with Prototypes
// =============================================================================

const obj = {
  firstName: "Lex",
  lastName: "Semenenko"
};

const protoObj = {
  hair: "brown"
};
//                  The Object.setPrototypeOf() method sets the prototype (i.e.,
//                  the internal [[Prototype]] property) of a specified object
//                  to another object or null.
Object.setPrototypeOf(obj, protoObj);

// Version 1
let n = 0;
for (let property in obj) {
  n++;
}
console.log(n); // 3 Including the prototype property

// Version 2
let m = 0;
for (let property in obj) {
  if (obj.hasOwnProperty(property)) {
    m++;
  }
}
console.log(m); // 2 Only own properties and not inherited one
