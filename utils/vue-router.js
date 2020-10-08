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

  // Set Route into Configure
  configure.$router = $router;

  // Create Update Api
  $router.update = (routes, config = {}) => {
    // Inherit
    config = Object.assign({}, configure, config);

    // New Router
    const newRouter = new Router({
      routes,
      ...configure,
      scrollBehavior: () => ({ y: 0 })
    });

    // New Matcher
    $router.matcher = newRouter.matcher;

    // Add Routes
    $router.addRoutes(routes);
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
