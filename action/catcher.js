// Use Foreach
import { importz, foreach, trues } from "../kit";

// Set Catcher
function catcher({ registry, projects }, projecter) {
  // Get White
  const white = Object.keys(registry);

  // Get Subers from Projects
  const subers = importz(trues(projects, true), (project, cip) => {
    // Get Various as White
    return foreach(cip(require(`#projects/${project}`)), (value, key) =>
      white.includes(key) ? value[key] : value
    );
  });

  // Get Depers from Projects
  const depers = importz(trues(projects, false), (project, cip) => {
    // Get Various as White
    return foreach(cip(require(`@repo/${project || "i"}`)), (value, key) =>
      white.includes(key) ? value[key] : value
    );
  });

  // Set Projecter
  Object.assign(projecter, subers, depers);
}

// Export
export default catcher;
