// Use Contextual
import contextual from "@scaff/vue-cli-context";

// Use Convert
import { convert } from "../action";

// Use Foreach
import { foreach } from "../kit";

// Set Context into Sniper
export default ({ extract }, sniper, inject, late = false) => {
  // Require Extract
  if (!extract) {
    return sniper;
  }

  // Just Store
  if (late === true) {
    // Set Key
    const key = "store";

    // Inset to Sniper
    return (sniper[key] = contextual(
      {
        // Get Context
        context: convert(key, extract[key].suffix),
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
  foreach(extract, (set, key) => {
    // No Store
    if (key === "store") {
      // return;
    }

    // Others
    sniper[key] = contextual(
      {
        // Get Context
        context: convert(key, set.suffix),
        // Expect If
        expect: pkg => pkg
      },
      // Promise
      false
    );

    // Style
    if (key === "style") {
      sniper.style = sniper.style.variables;
    }
  });

  // Return
  return sniper;
};
