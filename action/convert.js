// Must be fixed for `require.context`
function convert(mode, suffix) {
  if (suffix === undefined) {
    return;
  }
  if (mode === "component") {
    try {
      return require.context(`@component`, true, /.vue$/);
    } catch (e) {}
  }
  if (mode === "filter") {
    try {
      return require.context(`@filter`, true, /.js$/);
    } catch (e) {}
  }
  if (mode === "directive") {
    try {
      return require.context(`@directive`, true, /.js$/);
    } catch (e) {}
  }
  if (mode === "route") {
    try {
      return require.context(`@route`, true, /\S+\/route.js$/);
    } catch (e) {}
  }
  if (mode === "store") {
    try {
      return require.context(`@store`, true, /\S+\/store.js$/);
    } catch (e) {}
  }
  if (mode === "util") {
    try {
      return require.context(`@util`, true, /.js$/);
    } catch (e) {}
  }
  if (mode === "style") {
    try {
      return require.context(`@style`, true, /variables.scss$/);
    } catch (e) {}
  }
  if (mode === "i18n") {
    try {
      return require.context(`@i18n`, true, /.js$/);
    } catch (e) {}
  }
}

// Export
export default convert;
