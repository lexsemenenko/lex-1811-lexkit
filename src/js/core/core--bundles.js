// =============================================================================
// Bundles
// Description:     A bundle is an array of functions. Each item in the array is
//                  an array of (name [optional], weight [optional], the function).
//                  These functions will be fired in sequence when the target event
//                  happens, or they can be fired manually (without an event) if
//                  useful
// Naming:
//                  Bundle = The array that holds th bundleItems
//                  BundleName = The property name where the bundle array is stored
//                  TaskFn or TaskFunction = The function inside a bundle task
//

import { _Base } from "./core--base"
import {_libraryArray} from "../library/library--array"

export let _bundle = new _Base()

_bundle._customEventsAvailable = [
  'on:Ready',
  'on:Resize',
  'on:ResizeEnd',
  'on:Scroll'
]
_bundle._bundlesStorage = []
_bundle._add = function (bundleObj) {
  _bundle._bundlesStorage.push(bundleObj)
}
_bundle.fire = function () {
  _bundle._bundlesStorage.forEach(function (eachBundle) {
    // Fire each bundle's function if events in bundles and events available cross
    if (_libraryArray.anyMatchInArray(_bundle._customEventsAvailable, eachBundle.event)) {
      eachBundle.event.map(function (event) {
        // When we fire eachBundle, we bound the bundle's 'this' to it,
        // This way, inside each bundle's main function, we make 'this' refer to
        // each bundles object
        let boundFunction = function () {
          eachBundle.fn()
        }
        // Call eachBundle functions with bound 'this'
        $(document).on(event, boundFunction)
      })
    }
  })
}
