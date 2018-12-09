
// =============================================================================
// Prototype Inheritance ES5
// =============================================================================

// Base Constructor
// =============================================================================

function Alert(title) {
  if (!(this instanceof Alert)) {
    return new Alert();
  }
  console.log("1->Alert->Constructor");
  this.title = title || "alert";
}

Alert.prototype.show = function () {
  console.log(this.title);
}

Alert.prototype.toString = function () {
  return `Alert->${this.title}`;
}


// Constructor that inherits from Base
// =============================================================================

//                  This class would inherit from base class

function SuccessAlert(title) {
  Alert.call(this, title); // Calling parent alert constructor                  WHY CALL THIS?
  this.type = "success";
  console.log("2->SuccessAlert");
}

//                  - Set prototype of Alert to prototype of SuccessAlert
//                  - Everything on the prototype will be cloned to the 
//                    Success.prototype including constructor as constructor is 
//                    attached to the prototype.
//                  - Now the Success function constructor will be reset to 
//                    Alert which is incorrect

SuccessAlert.prototype = Object.create(Alert.prototype);

// Usage
// =============================================================================

// var a = new Alert("My alert");

var alerts = [];

for (let i = 0; i < 10; i++) {
  alerts.push(new Alert(i))
}

// console.log(a.title);
// a.show();
// console.log(a.toString(), ":Method toString");


var success = new SuccessAlert("Succesfully Saved!");

//                  Now show method works as it is inherited from Alert
//                  constructor

success.show();