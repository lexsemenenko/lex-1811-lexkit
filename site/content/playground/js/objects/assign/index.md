---
title: Object.assign()
menu:
  main:
    parent: playground_js_object_methods
---

The `Object.assign()` method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.

## Cloning an Object

- It does a shallow copy. Not for prototype.

```javascript
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

## Use in a Constructor

```javascript
let c1 = function(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

// This is the same as

let c2 = function(x, y, z) {
  Object.assign(this, { x, y, z });
};
```
