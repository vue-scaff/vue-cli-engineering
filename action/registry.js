// Use Contextual
import contextual from "@scaff/vue-cli-context";

// Use Alternate
import { alternate } from "../action";

// Use Foreach
import { foreach } from "../kit";

// Set Context into Registry
export default ({ registry }, glober, inject, late = false) => {
  // Require Registry
  if (!registry) {
    return glober;
  }

  // Just Store
  if (late === true) {
    // Set Key
    const key = "store";

    // Inset to Glober
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

  // Get Contextual
  foreach(registry, (set, key) => {
    // No Store
    if (key === "store") {
      return;
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
