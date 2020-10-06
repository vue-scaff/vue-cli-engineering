export default {
  install(Vue, directives = {}) {
    Object.keys(directives).map(key => Vue.directive(key, directives[key]));
  }
};
