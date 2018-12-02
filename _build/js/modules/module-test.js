var tabs = new _Module({
  _name: "Tabs",
  event: ["on:ready", "on:resize"],
  _init: function() {
    var module = this;
    // console.log("module ran:", module.getModuleName());
  }
});

new _Module({
  _name: "Equalheight",
  event: ["on:resize"],
  _init: function() {
    var module = this;
    // console.log("module ran:", module.getModuleName());
  }
});

new _Module({
  _name: "Body Color",
  event: ["on:resize"],
  _init: function() {
    var module = this;
    // console.log("module ran:", module.getModuleName());
    $("body").css("background-color", "#f1f1f1");
  }
});
