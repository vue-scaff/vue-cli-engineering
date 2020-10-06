// Use Foreach
import { foreach } from "../kit";

// Export
export default names => {
  // Loop
  foreach(names, (name, key) => {
    // Rename
    names[`$${key}`] = name;
    // Delete
    delete names[key];
  });

  // Return
  return names;
};
