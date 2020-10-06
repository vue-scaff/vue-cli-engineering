// Use Foreach
import { foreach } from "../kit";

export default (utils = {}) => {
  // Loop Utils
  foreach(utils, (util, key) => {
    // Secret
    const secret = key
      // Remove Vue
      .replace(/^vue-/, "$")
      // Change Hump
      .replace(/-(\w)/g, ($0, $1) => $1.toUpperCase());

    // Compare Key
    if (secret != key) {
      // Name
      utils[secret] = util;
      // Delete Origin
      delete utils[key];
    }
  });

  // Return
  return utils;
};
