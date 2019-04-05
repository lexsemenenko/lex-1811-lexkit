//= =============================================================================
// Core: Events
//= =============================================================================

// Description:     Pubsub design pattern (publish/subscribe), which allows us
//                  to decouple our modules. Once integrated with our pubsub
//                  module, they can emit events and not have to worry about
//                  which modules depend on them.  Modules can subscribe to
//                  events and be notified when any module publishes.
//
// Subscriber or Listen
// _events.on('peopleChanaged', someHandler);
// _events.on('peopleChanaged', someOtherHandler);
//
// Trigger
// _events.emit('peopleChanaged', 3)

// Events PubSub Pattern
// =============================================================================

export const _events = {
  events: {},
  // Bind an event
  on(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  // Unbind an event
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
  // Emit
  trigger(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function(fn) {
        fn(data);
      });
    }
  }
};
