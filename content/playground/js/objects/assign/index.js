const object1 = {
  a: 1,
  b: 2,
  c: 3
};

const object2 = Object.assign({ c: 4, d: 5 }, object1);

console.log(object2.c, object2.d);
// expected output: 3 5

// Usage in a constructor function
// =============================================================================

let c1 = function(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

// This is the same as

let c2 = function(x, y, z) {
  Object.assign(this, { x, y, z });
};

var c1Child = new c1("Lex", "Kate", "Vikki");
var c2Child = new c2("Lex", "Kate", "Vikki");

console.log(c1Child); // same
console.log(c2Child); // same
