---
title: ES6 Modules Basics
menu:
  main:
    parent: playground_js_es6_modules
---

## Default

```javascript
// test.js
export default "I am an exported string.";

// test2.js
import str from "./test";
console.log(str);
```

## Named Export

```javascript
// Export
export const add = function() {
  return a + b;
};
export const multiply = function() {
  return a * b;
};
export const IDs = function() {
  return id;
};

// Import using original names
import { add, multiply, IDs } from ".test.js";
add(2, 5);
multiply(2, 5);
console.log(IDs);

// Import using different names
import { add as a, multiply as m, IDs as id } from ".test.js";
a(2, 5);
m(2, 5);
console.log(id);
```

## Everything

```javascript
import * as varName from ".test.js";
varName.a(2, 5);
varName.m(2, 5);
console.log(varName.id);
```
