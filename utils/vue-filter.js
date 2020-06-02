export default {
  install(Vue, filters = {}) {
    Object.keys(filters).map(key => Vue.filter(key, filters[key]));
  }
};
