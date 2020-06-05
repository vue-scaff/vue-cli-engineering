// Import Action
import {
  support,
  registry,
  provider,
  procer,
  lint,
  fusion,
  attendant,
  taunt
} from "./action";

// Import Util
import {
  vueRunner,
  vueRegister,
  vueComponent,
  vueRouter,
  vueStore,
  vueLanguage
} from "./utils";

// Import Kit
import { http } from "./kit";

// Glober
const glober = {};

// Sniper
const sniper = {};

// Config
const config = {};

// External
function subscribe(mode, hand) {
  // Treatment
  config[mode] = ["request", "response"].includes(mode) ? lint(mode) : {};

  // Get Surface
  sniper[mode] = hand(config[mode], sniper[mode]) || sniper[mode];
}

// Export
export default ({ Vue, Router, Vuex, I18N, Configure, Root }) => {
  return {
    // Structure
    Structure() {
      // Basic Support
      support(Vue, { Router, Vuex, I18N });

      // Procer Utils
      procer(sniper.util);

      // ★ Snipe Provider
      provider(process.env.rc || {}, sniper);

      // ★ Registry Provider -- No Store
      registry(process.env.rc || {}, glober, sniper.util);

      // Api Hook External
      return {
        // Core
        Vue,
        // Model External
        subscribe
      };
    },

    // Compile
    Compile(App) {
      // Get Http
      const { request, response } = config;

      // Set Syringe
      const syringe = {
        $http: http(request, response),
        $style: sniper.style
      };

      // Set Senior
      const senior = {
        ...sniper.util,
        ...syringe
      };

      // ★ Snipe Provider -- Just Store
      provider(process.env.rc || {}, senior, true);

      // ★ Registry Provider -- Just Store
      registry(
        { registry: { store: process.env.rc.registry.store } },
        glober,
        senior,
        true
      );

      // Taunt
      taunt(glober);

      // Fusion Debris
      fusion(glober, sniper);

      // Waiting Prototype
      const waitress = attendant(sniper, syringe);

      // Util Register
      Vue.use(vueRegister, waitress);
      // Component Register
      Vue.use(vueComponent, sniper.component, { ...config.component });

      // Vue Runner
      Vue.use(vueRunner, App, {
        // Init Store
        store: vueStore(
          Vuex,
          sniper.store,
          waitress,
          config.store.getters || {},
          glober.store
        ),
        // Init Router
        router: vueRouter(Router, sniper.route, config.route, glober.route),
        // Init Language
        i18n: vueLanguage(I18N, sniper.i18n)
      });
    }
  };
};
