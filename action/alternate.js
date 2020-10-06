// For Registry
function alternate(mode) {
  if (mode === "host") {
    try {
      return require.context(`@registry`, true, /host.js$/);
    } catch (e) {}
  }
  if (mode === "api") {
    try {
      return require.context(`@registry`, true, /api.js$/);
    } catch (e) {}
  }
  if (mode === "route") {
    try {
      return require.context(`@registry`, true, /route.js$/);
    } catch (e) {}
  }
  if (mode === "store") {
    try {
      return require.context(`@registry`, true, /store.js$/);
    } catch (e) {}
  }
  if (mode === "mixin") {
    try {
      return require.context(`@registry`, true, /mixin.js$/);
    } catch (e) {}
  }
}

// Export
export default alternate;
