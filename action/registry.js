// Use Contextual
import contextual from "@scaff/vue-cli-context";

// Use Alternate
import { alternate } from "../action";

// Use Foreach
import { foreach } from "../kit";

// Set Context into Registry
export default ({ registry }, glober, inject) => {
  // Require Registry
  if (!registry) {
    return glober;
  }

  // Get Contextual
  foreach(registry, (set, key) => {
    // Set Contextual into Sniper
    if (key === "store") {
      return (glober[key] = contextual(
        {
          // Get Context
          context: alternate(key),
          // Expect If
          expect: pkg => pkg,
          // Empowerment
          inject: inject
        },
        // Promise
        false
      ));
    }

		// Others
    Object.assign(
      // Origin
      glober,
      // Target
      contextual(
        {
          // Get Context
          context: alternate(key),
          // Expect If
          expect: pkg => pkg
        },
        // Promise
        false
      )
    );
  });

  // Return
  return glober;
};
