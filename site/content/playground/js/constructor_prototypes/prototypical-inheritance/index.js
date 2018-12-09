const obj = {
  firstName: "Lex"
};
const protoObj = {
  lastName: "Semenenko"
};

Object.setPrototypeOf(obj, protoObj);
console.log(obj.lastName); // Semenenko

// Understanding the .constructor property on JavaScript Objects
// =============================================================================

//                  When functions are declared, they are automatically given a
//                  property of prototype that has a value of an object.

function Foo() {
  //..
}

console.log(Foo.prototype); // Foo {}
console.log(Foo.prototype.constructor); // Foo

const a = new Foo();

//                  a.constructor property is not living on the newly created
//                  a object but on the prototype object of Foo

console.log(a.constructor === Foo); // true
console.log(a.constructor === Foo.prototype.constructor); // true
