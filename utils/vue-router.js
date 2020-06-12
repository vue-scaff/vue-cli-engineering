// Use Foreach
import { foreach } from "../kit";

// Export
export default (Router, modules, configure = {}) => {
  // Set Routes
  let routes = [];

  // Rebuild Routes
  foreach(modules, route => routes.push(route));

  // Set Router
  const $router = new Router({
    routes,
    ...configure
  });

  // Create Update Api
  $router.update = (routes, config = {}) => {
    // Inherit
    config = Object.assign({}, configure, config);

    // New Matcher
    $router.matcher = new Router({
      routes,
      ...configure,
      scrollBehavior: () => ({ y: 0 })
    });
  };

  // Route Guard
  ["beforeEach", "afterEach", "beforeResolve"].forEach(key => {
    // in Configure
    if (configure[key] && $router[key]) {
      $router[key](configure[key]);
    }
  });

  // Return
  return $router;
};
