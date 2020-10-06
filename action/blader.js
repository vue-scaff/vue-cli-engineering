// Use Alternate
import { procer } from "../action";

// Use Foreach
import { foreach } from "../kit";

// Export
export default projecter => {
  // Loop
  return foreach(projecter, (project, name) => {
    // ✿ Procer Util
    procer(projecter[name].util);

    // ✿ Procer Filter
    procer(projecter[name].filter);

    // Return
    return projecter[name];
  });
};
