(function () {

  function Person() {
    // Properties & methods here
  }

  var person1 = new Person();

  //                Omit parethesis when there are no parameters
  var person2 = new Person;

  console.log(person1 instanceof Person);         // true

  //                constructor propertyh
  console.log(person1.constructor === Person);    // true

})();