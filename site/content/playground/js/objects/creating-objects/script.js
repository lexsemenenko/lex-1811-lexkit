// Way 1            new with a Constructor

var lex = new Object();
var lex2 = {};

console.log(lex);
console.log(lex2);

lex = null;         // Dereference
console.log(lex);

// Or

var person1 = {}

Object.defineProperty(person1, "Name", {
  value: "Lex",
  enumerable: true,
  configurable: true,
  writable: true
});

console.log(person1);