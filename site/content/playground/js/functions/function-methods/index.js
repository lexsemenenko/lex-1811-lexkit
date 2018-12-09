// =============================================================================
// call()
// =============================================================================

//                  - Use .call() or .apply() when you want to invoke the function
//                  immediately, and modify the context.
//                  - call attaches this into function and executes the function immediately:

// function.call(thisArg, arg1, arg2, ...)

function Product(name, price) {
  this.name = name;
  this.price = price;
  console.log("1. Product Constructor Ran");
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
  console.log("2. Food Constructor Ran");
}

console.log(new Food('cheese', 5).name);  // expected output: "cheese"


// =============================================================================
// apply()
// =============================================================================

// function.apply(thisArg, [argsArray])

var numbers = [5, 6, 2, 3, 7];

var max = Math.max.apply(null, numbers);

console.log(max);   // expected output: 7

var min = Math.min.apply(null, numbers);

console.log(min);   // expected output: 2


// =============================================================================
// bind()
// =============================================================================

//                  - Use .bind() when you want that function to later be called 
//                    with a certain context, useful in events
//                  - bind attaches this into function and it needs to be invoked
//                    separately like this:

var person1 = { firstName: 'Jon', lastName: 'Kuperman' };
var person2 = { firstName: 'Kelly', lastName: 'King' };

function say() {
  console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);

sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King