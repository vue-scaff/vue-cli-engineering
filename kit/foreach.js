/**
 * Foreach
 * @param source {json}
 * @param callback {function}
 * ======== ======== ========
 */
function foreach(source, callback = () => {}) {
  // No Source
  if (source === undefined) {
    return console.error('please enter param.');
  }
  // No Call
  if (callback.constructor !== Function) {
    return console.error('callback must function.');
  }
  // Array
  if (source.constructor === Array) {
    return source.map((value, index) => callback(value, index));
  }
  // Any (Json)
  const json = {};

  Object.keys(source).map(key => {
    json[key] = callback(source[key], key);
  });

  return json;
}

// Export
export default foreach;
