module.exports = function(wallaby) {
  return {
    files: ["_build/js/**/*.js"],

    tests: ["test/**/*Spec.js"],

    testFramework: "jasmine"
  };
};
