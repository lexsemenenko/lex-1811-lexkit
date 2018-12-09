var person1 = {
  _name: "Lex",

  get name() {
    console.log("Reading Name");
    return this._name;
  },

  set name(value) {
    console.log("Setting name to %s", value);
    this._name = value;
  }
};

console.log(person1.name); // Lex
person1.name = "Greg";
console.log(person1.name); // Greg

// console.log(person1.name());