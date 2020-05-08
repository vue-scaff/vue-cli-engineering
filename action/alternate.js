function alternate(mode) {
  if (mode === "host") {
    return require.context(`@registry`, true, /host.js$/);
  }
  if (mode === "api") {
    return require.context(`@registry`, true, /api.js$/);
  }
  if (mode === "route") {
    return require.context(`@registry`, true, /route.js$/);
  }
  if (mode === "store") {
    return require.context(`@registry`, true, /store.js$/);
  }
  if (mode === "mixin") {
    return require.context(`@registry`, true, /mixin.js$/);
  }
}

// Export
export default alternate;
