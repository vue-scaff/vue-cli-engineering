// Use Foreach
import { foreach, clone } from "../kit";

// Export
export default (group, black) => {
  // Set Cloner
  const cloner = clone(group);

  // Loop
  foreach(cloner, (item, key) => {
    // Item is Function
    if (black.includes(key) || item === undefined) {
      // Remove Item
      delete cloner[key];
    }
  });
  // Return
  return cloner;
};
