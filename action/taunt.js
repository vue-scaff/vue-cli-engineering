// Use Summary
import { summary } from "../action";

// Import Empty
import { empty } from "../kit";

// Export
export default (glober, extend) => {
  // Get Any
  let { api, host } = glober;

  // Get Hand of Api
  if (api && host) {
    // Reset Host
    glober.host = host[process.env.NODE_ENV];

    // Reset Api
    glober.api = summary(glober.host, api);

    // For Extend
    if (extend && !empty(extend)) {
      Object.assign(glober.api, summary(glober.host, extend));
    }
  }

  // Funny
  window.registry = glober;
};
