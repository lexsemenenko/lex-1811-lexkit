//= =============================================================================
// Core: Events
//= =============================================================================

// Description:     Pubsub design pattern (publish/subscribe), which allows us
//                  to decouple our modules. Once integrated with our pubsub
//                  module, they can emit events and not have to worry about
//                  which modules depend on them.  Modules can subscribe to
//                  events and be notified when any module publishes.

// Events PubSub Pattern
//= =============================================================================

const _events = {
  events: {},
  // Bind an event
  on(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  // Unbind an event if needed
  off(eventName, fn) {
    if (this.events[eventName]) {
      for (let i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      }
    }
  },
  // Create/Emit/Trigger Events
  // Params:          eventName - event name
  //                  data      - data to pass with your event
  trigger(eventName, data) {
    // If our events object has our events,
    if (this.events[eventName]) {
      // Fire per array item
      this.events[eventName].forEach(function(fn) {
        fn(data);
      });
    }
  },
};

export default _events;
