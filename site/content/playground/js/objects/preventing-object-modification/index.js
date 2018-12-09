// =============================================================================
// Sealing
// ============================================================================= 

(function () {

  const object1 = {
    property1: 42
  };

  Object.seal(object1);
  object1.property1 = 33;
  console.log(object1.property1);
  // expected output: 33

  delete object1.property1; // cannot delete when sealed
  console.log(object1.property1);
  // expected output: 33

})();


// =============================================================================
// Freezing
// ============================================================================= 

(function () {

  const object1 = {
    property1: 42
  };

  const object2 = Object.freeze(object1);

  object2.property1 = 33;
  // Throws an error in strict mode

  console.log(object2.property1);
  // expected output: 42

})();


// =============================================================================
// Sealing
// ============================================================================= 

(function () {

  const object1 = {
    property1: 42
  };

  Object.seal(object1);
  object1.property1 = 33;
  console.log(object1.property1);
  // expected output: 33

  delete object1.property1; // cannot delete when sealed
  console.log(object1.property1);
  // expected output: 33
})();
