// Use Axios
const Axios = require("axios");

// Use QS
const { stringify } = require("qs");

// Use Foreach
const { foreach, empty } = require("../kit");

// Set Methods
const METHODS = [
  "get",
  "post",
  "put",
  "delete",
  "connect",
  "head",
  "options",
  "trace"
];

// Intercept
const Intercept = {};

// Set Exp
let exp = undefined;

// Set Preset
let preset = {};

// Set Content-Type
let type = "application/x-www-form-urlencoded";

// Touch
let touch = "url method data headers".split(" ");

// Noop
function noop() {}

// Check Uni
function check() {
  // No Delete
  // return [undefined, "undefined"].includes(typeof uni) ? undefined : uni;

  // 4 nebular.js
  const u = [undefined, "undefined"].includes(typeof uni) ? undefined : uni;

  if (u) {
    return !u.simular;
  }

  return u;
}

// Transfer
function transfer(request, response) {
  // Assignment Request
  Intercept.Request = request || noop;
  // Assignment Response
  Intercept.Response = response || noop;
}

// Nova Key
function nova(target) {
  return empty(target) ? {} : target;
}

// Merge Option
function merge(keep, runtime, result = {}) {
  foreach(touch, key => {
    // Objects
    if (["data", "headers"].includes(key)) {
      return (result[key] = Object.assign(
        {},
        nova(keep[key]),
        nova(runtime[key])
      ));
    }

    // Others
    result[key] = keep[key] || runtime[key];
  });

  // Package Content Type
  if (!result.headers["Content-Type"]) {
    result.headers["Content-Type"] = type;
  }

  // Endless
  return result;
}

// Param Process
function process(data, method) {
  return {
    ...[{ params: data }, data][[`put`, `post`, `patch`].includes(method) - 0]
  };
}

// Handler
function help(url, method, data = {}, headers = {}) {
  // Interceptor
  const { Request, Response } = Intercept;

  // Runtime Options
  const options = {
    url,
    method,
    data,
    headers
  };

  // Case
  if (!exp) {
    // No Thing Impossible
  }

  // Preset
  preset = merge(Request, options);

  // Exp
  exp = Axios.create(preset);

  // Credentials
  Axios.defaults.withCredentials = true;

  // Data Cache
  let cache = process(preset.data, method);

  // Form Data Format
  if (~preset.headers["Content-Type"].indexOf(type) && method === "post") {
    cache = stringify(cache);
  }

  // Result
  return check()
    ? new Promise((resolve, reject) => {
        // Headers Error
        uni.request({
          ...preset,
          success: response => resolve(Response.success(response)),
          fail: error => reject(Response.error(error))
        });
      })
    : exp[method](url, cache)
        .then(response => Response.success(response))
        .catch(error => Response.error(error));
}

// Http Api Create
function http(url, handler = {}) {
  if (!url) {
    return console.error(`url is not defined .`);
  }

  METHODS.map(method => {
    handler[method.toLowerCase()] = (data, headers) =>
      help(url, method, data, headers);
  });

  return handler;
}

export default (request, response) => {
  // Transfer Http
  transfer(request, response);

  // Return Api
  return url => http(url);
};
