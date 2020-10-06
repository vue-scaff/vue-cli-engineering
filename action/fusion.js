// Use Foreach
import { foreach } from "../kit";

// Fusion Sniper + Glober
export default (glober, sniper) => {
  // Transile
  foreach(glober, (part, key) => {
    if (sniper[key] === undefined) {
      sniper[key] = part;
    }
  });

  // Just For Route
  if (glober.route) {
    // Set Mantra
    let mantra = [...glober.route];
    // Inject
    foreach(sniper.route, route => mantra.push(route));
    // Assignment
    sniper.route = mantra;
  }
};
