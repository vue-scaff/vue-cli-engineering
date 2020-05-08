export default {
  install(Vue, components = {}, { prefix = "x" }) {
    Object.values(components).map(component =>
      Vue.component(`${prefix}-${component.name}`, component)
    );
  }
};
