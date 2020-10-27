// Use Foreach
import { foreach } from "../kit";

// Export
export default (Vuex, modules, utils, getters, global) => {
  // Loop Modules
  foreach(modules, (module, key) => {
    // Add Namespace
    module.namespaced = true;
  });

  // Merge Global
  if (global) {
    Object.assign(modules, global);
  }

  // Return
  return new Vuex.Store({
    modules,
    getters
  });
};
