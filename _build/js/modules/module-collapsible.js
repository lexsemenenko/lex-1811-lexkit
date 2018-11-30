// Create Base Collapsible Class
function Collapsible(title) {
  this.title = title;
}

// Create Base Methods for Collapsible
Collapsible.prototype.showTitle = function () {
  console.log(this.title);
}

// Create Collapsible Subclass that inherits base properties
function CollapsibleTabs(title) {

  // Calling parent->Collapsible->Constructor. This is neaded so we can sorta
  // inherit properties from the base Collapsible. Parameters should match
  Collapsible.call(this, title);
  // Add your unique to Tabs properties
  this.type = "Some Tabs Specific Property";
}

// Here Tabs inherit base Collapsible prototypes
CollapsibleTabs.prototype = Object.create(Collapsible.prototype);
// Resetting Constructor from Collapsibles to CollapsibleTabs
CollapsibleTabs.prototype.constructor = CollapsibleTabs;


// Acutally Create a Tabs Instance
var collapsibleTabs = new CollapsibleTabs('Module: Tabs');
// console.log(collapsibleTabs);
// collapsibleTabs.showTitle();
