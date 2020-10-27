// Use Foreach
import { foreach } from '../kit';

// Export
export default (group, inject, invoke) => {
  // Loop
  foreach(group, (item, key) => {
    // Item is Function
    if (item.constructor === Function) {
      // Get Result
      group[key] = invoke ? item.call(invoke, inject) : item(inject);
    }
  });
};
