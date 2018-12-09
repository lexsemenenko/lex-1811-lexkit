var property,
  myObject = {
    brand: "Honda",
    model: "Accord"
  }

//                  for-in goes through prototype properties too

for (property in myObject) {
  console.log("Name: " + property);
  console.log("Value: " + myObject[property]);
}

//                  Or use .keys() for keys

var properties = Object.keys(myObject);
console.log(properties);      // ["brand", "model"]

//                  Mimic for-in behavior, but it doesn't go through prototype

var i, len;

for (i = 0, len = properties.length; i < len; i++) {
  console.log("Name: " + properties[i]);
  console.log("Value: " + myObject[properties[i]]);
}