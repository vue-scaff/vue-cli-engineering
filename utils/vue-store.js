// Use Foreach
import { foreach } from "../kit";

// Export
export default (Vuex, modules, utils, global) => {
  // Add Namespace
  foreach(modules, (module, key) => (module.namespaced = true));

  // Merge Global
  if (global) {
    Object.assign(modules, global);
  }

  // Return
  return new Vuex.Store({
    modules
  });
};
