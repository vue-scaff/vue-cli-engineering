// Must be fixed for `require.context`
function convert(mode, suffix) {
  if (suffix === undefined) {
    return;
  }
  if (mode === "component") {
    return require.context(`@component`, true, /.vue$/);
  }
  if (mode === "filter") {
    return require.context(`@filter`, true, /.js$/);
  }
  if (mode === "route") {
    return require.context(`@route`, true, /\S+\/route.js$/);
  }
  if (mode === "store") {
    return require.context(`@store`, true, /\S+\/store.js$/);
  }
  if (mode === "util") {
    return require.context(`@util`, true, /.js$/);
  }
  if (mode === "style") {
    return require.context(`@style`, true, /variables.scss$/);
  }
  if (mode === "i18n") {
    return require.context(`@i18n`, true, /.js$/);
  }
}

// Export
export default convert;
