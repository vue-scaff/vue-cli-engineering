// Def
const def = {
  // Request
  request: {
    // Data
    data: {},
    // Headers
    headers: {}
  },
  // Response
  response: {
    // Success
    success() {},
    // Error
    error() {}
  }
};

export default mode => {
  // Return
  return def[mode];
};
