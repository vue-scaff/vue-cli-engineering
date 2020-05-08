// Use Summary
import { summary } from "../action";

// Export
export default glober => {
  // Get Any
  let { api, host } = glober;

  // Get Hand of Api
  if (api && host) {
    // Reset Host
    glober.host = host[process.env.NODE_ENV];

    // Reset Api
    glober.api = summary(glober.host, api);
  }

  // Funny
  (window || global || {}).registry = glober;
};
