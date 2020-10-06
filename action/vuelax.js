// Use Foreach
import { foreach } from "../kit";

// Use Summary
import { summary } from "../action";

// Export
export default (projecter, glober, sniper, mode) => {
  // Loop
  foreach(projecter, (project, name) => {
    // As Mode
    if (mode) {
      return Object.assign(glober[mode], project[mode](glober));
    }

    // Get Packages
    const {
      api,
      store,
      route,
      util,
      filter,
      directive,
      component,
      style,
      i18n
    } = project;

    // Api
    Object.assign(glober.api, summary(glober.host, api));

    // Util
    Object.assign(sniper.util, util);

    // Filter
    Object.assign(sniper.filter, filter);

    // Component
    Object.assign(sniper.component, component);

    // i18n
    Object.assign(sniper.i18n, i18n);

    // Store
    Object.assign(sniper.store, { [name]: store });

    // Route
    Object.assign(sniper.route, {
      [name]: {
        name,
        path: `/${name}`,
        component: () => import(`#projects/${name}/app.vue`),
        children: [route]
      }
    });
  });
};
