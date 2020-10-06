// Use Foreach
import { foreach } from "../kit";

// Get Property as Mode from Projects
export default (projecter, mode) => {
  // Set Json
  let json = {};

  // Loop
  foreach(projecter, (project, name) => {
    // Get Pack
    let pack = project[mode];

    if (pack.constructor === Function) {
      json = project[mode];
    }

    if (pack.constructor === Object) {
      Object.assign(json, pack);
    }
  });

  // Return
  return json;
};
