// =============================================================================
// Function Mixins
// =============================================================================

// Simple Idea
// =============================================================================

//                  Making objects using mixins simple idea

const jsSkill = {
  knowsJS() {
    return true;
  }
};

const engDegree = {
  hasDegree() {
    return true;
  }
};
const backendSkill = {
  knowsBackend() {
    return true;
  }
};

const jsEngineer = Object.assign({}, jsSkill, engDegree);
const fullstackEngineer = Object.assign({}, jsSkill, engDegree, backendSkill);

console.log(jsEngineer); // Object has two methods
console.log(fullstackEngineer); // Object has three methods

// Using Factories
// =============================================================================

let car = function(color) {
  return Object.assign(
    {},
    {
      color: color
    }
  );
};

let redCar = car("Red"); // my red car object

// Factory functions with closure: [CHECK]
// =====================================

let car2 = function(color) {
  let moving = false;
  return Object.assign(
    {},
    {
      color: color,
      drive() {
        moving = true;
        return this;
      },
      isMoving() {
        return moving;
      }
    }
  );
};

let redCar2 = car2("Pink"); // my red car object

console.log(redCar2.drive().isMoving());

// Another Example
// =============================================================================

const humanFactory = function(obj) {
  let isCrying = false;

  return Object.assign({}, obj, {
    cry() {
      isCrying = true;
      return this;
    },
    isCrying() {
      return isCrying;
    }
  });
};

const lex = humanFactory({});

const flyFactory = function(obj) {
  let isFlying = false;

  return Object.assign({}, obj, {
    fly() {
      isFlying = true;
      return this;
    },
    isFlying() {
      return isFlying;
    }
  });
};

// Now lets build our Superman
// =====================================

const superman = humanFactory(flyFactory({}));

console.log(superman, "Superman here"); // it has all four methods.  He can fly, and cry
console.log(
  superman
    .fly()
    .cry()
    .isCrying(),
  "Crying"
);
console.log(
  superman
    .fly()
    .cry()
    .isFlying(),
  "Flying"
);
