var budgetController = (function() {
  // This is private part
  var x = 2;
  var add = function(a) {
    return x * a;
  };

  return {
    // This is public part
    //                        function publicTest uses outer variables even after
    //                        it was executed. Inner function has access to the
    //                        outer function even when the outer function has
    //                        returned
    publicTest: function(b) {
      console.log(add(b));
    }
  };
})();

console.log(budgetController.publicTest(5)); // 10
