// Use Contextual
import contextual from "@scaff/vue-cli-context";

// Use Convert
import { convert } from "../action";

// Use Foreach
import { foreach } from "../kit";

// Set Context into Sniper
export default ({ extract }, sniper) => {
  // Require Extract
  if (!extract) {
    return sniper;
  }

  // Get Contextual
  foreach(extract, (set, key) => {
    // Set Contextual into Sniper
    if (key === "store") {
      return (sniper[key] = contextual(
        {
          // Get Context
          context: convert(key, set.suffix),
          // Expect If
          expect: pkg => pkg,
          // Empowerment
          inject: sniper.util
        },
        // Promise
        false
      ));
    }

		// Others
    sniper[key] = contextual(
      {
        // Get Context
        context: convert(key, set.suffix),
        // Expect If
        expect: pkg => pkg,
        // Empowerment
        inject: ["store"].includes(key) ? sniper.util : null
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
