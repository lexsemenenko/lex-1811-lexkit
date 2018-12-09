
// =============================================================================
// In a method
// ============================================================================= 

//                  1. In an an object method, this refers to the object

function sayNameforAll() {
  console.log(this.name);
};
var person1 = {
  name: "Lex",
  sayName: sayNameforAll
}

person1.sayName();            // Lex