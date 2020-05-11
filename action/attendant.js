// Use Foreach
import { foreach } from "../kit";

// Export
export default (sniper, external) => {
  // Set Ruse
  const ruse = ["util", "api", "style"];

  // Ruse
  foreach(ruse, key => {
    // Assignment
    sniper[`\$${key}`] = sniper[key];
    // Delete
    delete sniper[key];
  });

  // External
  Object.assign(sniper, external);

  // Return
  return sniper;
};
