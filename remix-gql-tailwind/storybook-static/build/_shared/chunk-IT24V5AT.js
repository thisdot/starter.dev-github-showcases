import {
  removeLastPathPart
} from "/_static/build/_shared/chunk-55ZPOKWQ.js";
import {
  FolderIcon_default
} from "/_static/build/_shared/chunk-MWJ6W5IQ.js";
import {
  DocumentIcon_default,
  TOCIcon_default
} from "/_static/build/_shared/chunk-LRTETJ3V.js";
import {
  Link
} from "/_static/build/_shared/chunk-KBE5JUUL.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react,
  require_object_assign,
  require_react
} from "/_static/build/_shared/chunk-6BO74FWO.js";

// node_modules/xtend/immutable.js
var require_immutable = __commonJS({
  "node_modules/xtend/immutable.js"(exports, module) {
    init_react();
    module.exports = extend;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function extend() {
      var target = {};
      for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    }
  }
});

// node_modules/bail/index.js
var require_bail = __commonJS({
  "node_modules/bail/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = bail;
    function bail(err) {
      if (err) {
        throw err;
      }
    }
  }
});

// node_modules/is-buffer/index.js
var require_is_buffer = __commonJS({
  "node_modules/is-buffer/index.js"(exports, module) {
    init_react();
    module.exports = function isBuffer(obj) {
      return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
    };
  }
});

// node_modules/extend/index.js
var require_extend = __commonJS({
  "node_modules/extend/index.js"(exports, module) {
    "use strict";
    init_react();
    var hasOwn = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var defineProperty = Object.defineProperty;
    var gOPD = Object.getOwnPropertyDescriptor;
    var isArray = function isArray2(arr) {
      if (typeof Array.isArray === "function") {
        return Array.isArray(arr);
      }
      return toStr.call(arr) === "[object Array]";
    };
    var isPlainObject = function isPlainObject2(obj) {
      if (!obj || toStr.call(obj) !== "[object Object]") {
        return false;
      }
      var hasOwnConstructor = hasOwn.call(obj, "constructor");
      var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
      if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
      }
      var key;
      for (key in obj) {
      }
      return typeof key === "undefined" || hasOwn.call(obj, key);
    };
    var setProperty = function setProperty2(target, options) {
      if (defineProperty && options.name === "__proto__") {
        defineProperty(target, options.name, {
          enumerable: true,
          configurable: true,
          value: options.newValue,
          writable: true
        });
      } else {
        target[options.name] = options.newValue;
      }
    };
    var getProperty = function getProperty2(obj, name) {
      if (name === "__proto__") {
        if (!hasOwn.call(obj, name)) {
          return void 0;
        } else if (gOPD) {
          return gOPD(obj, name).value;
        }
      }
      return obj[name];
    };
    module.exports = function extend() {
      var options, name, src, copy, copyIsArray, clone;
      var target = arguments[0];
      var i = 1;
      var length = arguments.length;
      var deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i = 2;
      }
      if (target == null || typeof target !== "object" && typeof target !== "function") {
        target = {};
      }
      for (; i < length; ++i) {
        options = arguments[i];
        if (options != null) {
          for (name in options) {
            src = getProperty(target, name);
            copy = getProperty(options, name);
            if (target !== copy) {
              if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && isArray(src) ? src : [];
                } else {
                  clone = src && isPlainObject(src) ? src : {};
                }
                setProperty(target, { name, newValue: extend(deep, clone, copy) });
              } else if (typeof copy !== "undefined") {
                setProperty(target, { name, newValue: copy });
              }
            }
          }
        }
      }
      return target;
    };
  }
});

// node_modules/is-plain-obj/index.js
var require_is_plain_obj = __commonJS({
  "node_modules/is-plain-obj/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = (value) => {
      if (Object.prototype.toString.call(value) !== "[object Object]") {
        return false;
      }
      const prototype = Object.getPrototypeOf(value);
      return prototype === null || prototype === Object.prototype;
    };
  }
});

// node_modules/trough/wrap.js
var require_wrap = __commonJS({
  "node_modules/trough/wrap.js"(exports, module) {
    "use strict";
    init_react();
    var slice = [].slice;
    module.exports = wrap;
    function wrap(fn, callback) {
      var invoked;
      return wrapped;
      function wrapped() {
        var params = slice.call(arguments, 0);
        var callback2 = fn.length > params.length;
        var result;
        if (callback2) {
          params.push(done);
        }
        try {
          result = fn.apply(null, params);
        } catch (error) {
          if (callback2 && invoked) {
            throw error;
          }
          return done(error);
        }
        if (!callback2) {
          if (result && typeof result.then === "function") {
            result.then(then, done);
          } else if (result instanceof Error) {
            done(result);
          } else {
            then(result);
          }
        }
      }
      function done() {
        if (!invoked) {
          invoked = true;
          callback.apply(null, arguments);
        }
      }
      function then(value) {
        done(null, value);
      }
    }
  }
});

// node_modules/trough/index.js
var require_trough = __commonJS({
  "node_modules/trough/index.js"(exports, module) {
    "use strict";
    init_react();
    var wrap = require_wrap();
    module.exports = trough;
    trough.wrap = wrap;
    var slice = [].slice;
    function trough() {
      var fns = [];
      var middleware = {};
      middleware.run = run;
      middleware.use = use;
      return middleware;
      function run() {
        var index = -1;
        var input = slice.call(arguments, 0, -1);
        var done = arguments[arguments.length - 1];
        if (typeof done !== "function") {
          throw new Error("Expected function as last argument, not " + done);
        }
        next.apply(null, [null].concat(input));
        function next(err) {
          var fn = fns[++index];
          var params = slice.call(arguments, 0);
          var values = params.slice(1);
          var length = input.length;
          var pos = -1;
          if (err) {
            done(err);
            return;
          }
          while (++pos < length) {
            if (values[pos] === null || values[pos] === void 0) {
              values[pos] = input[pos];
            }
          }
          input = values;
          if (fn) {
            wrap(fn, next).apply(null, input);
          } else {
            done.apply(null, [null].concat(input));
          }
        }
      }
      function use(fn) {
        if (typeof fn !== "function") {
          throw new Error("Expected `fn` to be a function, not " + fn);
        }
        fns.push(fn);
        return middleware;
      }
    }
  }
});

// node_modules/vfile/node_modules/unist-util-stringify-position/index.js
var require_unist_util_stringify_position = __commonJS({
  "node_modules/vfile/node_modules/unist-util-stringify-position/index.js"(exports, module) {
    "use strict";
    init_react();
    var own = {}.hasOwnProperty;
    module.exports = stringify;
    function stringify(value) {
      if (!value || typeof value !== "object") {
        return "";
      }
      if (own.call(value, "position") || own.call(value, "type")) {
        return position(value.position);
      }
      if (own.call(value, "start") || own.call(value, "end")) {
        return position(value);
      }
      if (own.call(value, "line") || own.call(value, "column")) {
        return point(value);
      }
      return "";
    }
    function point(point2) {
      if (!point2 || typeof point2 !== "object") {
        point2 = {};
      }
      return index(point2.line) + ":" + index(point2.column);
    }
    function position(pos) {
      if (!pos || typeof pos !== "object") {
        pos = {};
      }
      return point(pos.start) + "-" + point(pos.end);
    }
    function index(value) {
      return value && typeof value === "number" ? value : 1;
    }
  }
});

// node_modules/vfile/node_modules/vfile-message/index.js
var require_vfile_message = __commonJS({
  "node_modules/vfile/node_modules/vfile-message/index.js"(exports, module) {
    "use strict";
    init_react();
    var stringify = require_unist_util_stringify_position();
    module.exports = VMessage;
    function VMessagePrototype() {
    }
    VMessagePrototype.prototype = Error.prototype;
    VMessage.prototype = new VMessagePrototype();
    var proto = VMessage.prototype;
    proto.file = "";
    proto.name = "";
    proto.reason = "";
    proto.message = "";
    proto.stack = "";
    proto.fatal = null;
    proto.column = null;
    proto.line = null;
    function VMessage(reason, position, origin) {
      var parts;
      var range;
      var location;
      if (typeof position === "string") {
        origin = position;
        position = null;
      }
      parts = parseOrigin(origin);
      range = stringify(position) || "1:1";
      location = {
        start: { line: null, column: null },
        end: { line: null, column: null }
      };
      if (position && position.position) {
        position = position.position;
      }
      if (position) {
        if (position.start) {
          location = position;
          position = position.start;
        } else {
          location.start = position;
        }
      }
      if (reason.stack) {
        this.stack = reason.stack;
        reason = reason.message;
      }
      this.message = reason;
      this.name = range;
      this.reason = reason;
      this.line = position ? position.line : null;
      this.column = position ? position.column : null;
      this.location = location;
      this.source = parts[0];
      this.ruleId = parts[1];
    }
    function parseOrigin(origin) {
      var result = [null, null];
      var index;
      if (typeof origin === "string") {
        index = origin.indexOf(":");
        if (index === -1) {
          result[1] = origin;
        } else {
          result[0] = origin.slice(0, index);
          result[1] = origin.slice(index + 1);
        }
      }
      return result;
    }
  }
});

// node_modules/vfile/lib/minpath.browser.js
var require_minpath_browser = __commonJS({
  "node_modules/vfile/lib/minpath.browser.js"(exports) {
    "use strict";
    init_react();
    exports.basename = basename;
    exports.dirname = dirname;
    exports.extname = extname;
    exports.join = join;
    exports.sep = "/";
    function basename(path, ext) {
      var start = 0;
      var end = -1;
      var index;
      var firstNonSlashEnd;
      var seenNonSlash;
      var extIndex;
      if (ext !== void 0 && typeof ext !== "string") {
        throw new TypeError('"ext" argument must be a string');
      }
      assertPath(path);
      index = path.length;
      if (ext === void 0 || !ext.length || ext.length > path.length) {
        while (index--) {
          if (path.charCodeAt(index) === 47) {
            if (seenNonSlash) {
              start = index + 1;
              break;
            }
          } else if (end < 0) {
            seenNonSlash = true;
            end = index + 1;
          }
        }
        return end < 0 ? "" : path.slice(start, end);
      }
      if (ext === path) {
        return "";
      }
      firstNonSlashEnd = -1;
      extIndex = ext.length - 1;
      while (index--) {
        if (path.charCodeAt(index) === 47) {
          if (seenNonSlash) {
            start = index + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd < 0) {
            seenNonSlash = true;
            firstNonSlashEnd = index + 1;
          }
          if (extIndex > -1) {
            if (path.charCodeAt(index) === ext.charCodeAt(extIndex--)) {
              if (extIndex < 0) {
                end = index;
              }
            } else {
              extIndex = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }
      if (start === end) {
        end = firstNonSlashEnd;
      } else if (end < 0) {
        end = path.length;
      }
      return path.slice(start, end);
    }
    function dirname(path) {
      var end;
      var unmatchedSlash;
      var index;
      assertPath(path);
      if (!path.length) {
        return ".";
      }
      end = -1;
      index = path.length;
      while (--index) {
        if (path.charCodeAt(index) === 47) {
          if (unmatchedSlash) {
            end = index;
            break;
          }
        } else if (!unmatchedSlash) {
          unmatchedSlash = true;
        }
      }
      return end < 0 ? path.charCodeAt(0) === 47 ? "/" : "." : end === 1 && path.charCodeAt(0) === 47 ? "//" : path.slice(0, end);
    }
    function extname(path) {
      var startDot = -1;
      var startPart = 0;
      var end = -1;
      var preDotState = 0;
      var unmatchedSlash;
      var code;
      var index;
      assertPath(path);
      index = path.length;
      while (index--) {
        code = path.charCodeAt(index);
        if (code === 47) {
          if (unmatchedSlash) {
            startPart = index + 1;
            break;
          }
          continue;
        }
        if (end < 0) {
          unmatchedSlash = true;
          end = index + 1;
        }
        if (code === 46) {
          if (startDot < 0) {
            startDot = index;
          } else if (preDotState !== 1) {
            preDotState = 1;
          }
        } else if (startDot > -1) {
          preDotState = -1;
        }
      }
      if (startDot < 0 || end < 0 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        return "";
      }
      return path.slice(startDot, end);
    }
    function join() {
      var index = -1;
      var joined;
      while (++index < arguments.length) {
        assertPath(arguments[index]);
        if (arguments[index]) {
          joined = joined === void 0 ? arguments[index] : joined + "/" + arguments[index];
        }
      }
      return joined === void 0 ? "." : normalize(joined);
    }
    function normalize(path) {
      var absolute;
      var value;
      assertPath(path);
      absolute = path.charCodeAt(0) === 47;
      value = normalizeString(path, !absolute);
      if (!value.length && !absolute) {
        value = ".";
      }
      if (value.length && path.charCodeAt(path.length - 1) === 47) {
        value += "/";
      }
      return absolute ? "/" + value : value;
    }
    function normalizeString(path, allowAboveRoot) {
      var result = "";
      var lastSegmentLength = 0;
      var lastSlash = -1;
      var dots = 0;
      var index = -1;
      var code;
      var lastSlashIndex;
      while (++index <= path.length) {
        if (index < path.length) {
          code = path.charCodeAt(index);
        } else if (code === 47) {
          break;
        } else {
          code = 47;
        }
        if (code === 47) {
          if (lastSlash === index - 1 || dots === 1) {
          } else if (lastSlash !== index - 1 && dots === 2) {
            if (result.length < 2 || lastSegmentLength !== 2 || result.charCodeAt(result.length - 1) !== 46 || result.charCodeAt(result.length - 2) !== 46) {
              if (result.length > 2) {
                lastSlashIndex = result.lastIndexOf("/");
                if (lastSlashIndex !== result.length - 1) {
                  if (lastSlashIndex < 0) {
                    result = "";
                    lastSegmentLength = 0;
                  } else {
                    result = result.slice(0, lastSlashIndex);
                    lastSegmentLength = result.length - 1 - result.lastIndexOf("/");
                  }
                  lastSlash = index;
                  dots = 0;
                  continue;
                }
              } else if (result.length) {
                result = "";
                lastSegmentLength = 0;
                lastSlash = index;
                dots = 0;
                continue;
              }
            }
            if (allowAboveRoot) {
              result = result.length ? result + "/.." : "..";
              lastSegmentLength = 2;
            }
          } else {
            if (result.length) {
              result += "/" + path.slice(lastSlash + 1, index);
            } else {
              result = path.slice(lastSlash + 1, index);
            }
            lastSegmentLength = index - lastSlash - 1;
          }
          lastSlash = index;
          dots = 0;
        } else if (code === 46 && dots > -1) {
          dots++;
        } else {
          dots = -1;
        }
      }
      return result;
    }
    function assertPath(path) {
      if (typeof path !== "string") {
        throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
      }
    }
  }
});

// node_modules/vfile/lib/minproc.browser.js
var require_minproc_browser = __commonJS({
  "node_modules/vfile/lib/minproc.browser.js"(exports) {
    "use strict";
    init_react();
    exports.cwd = cwd;
    function cwd() {
      return "/";
    }
  }
});

// node_modules/vfile/lib/core.js
var require_core = __commonJS({
  "node_modules/vfile/lib/core.js"(exports, module) {
    "use strict";
    init_react();
    var p = require_minpath_browser();
    var proc = require_minproc_browser();
    var buffer = require_is_buffer();
    module.exports = VFile;
    var own = {}.hasOwnProperty;
    var order = ["history", "path", "basename", "stem", "extname", "dirname"];
    VFile.prototype.toString = toString;
    Object.defineProperty(VFile.prototype, "path", { get: getPath, set: setPath });
    Object.defineProperty(VFile.prototype, "dirname", {
      get: getDirname,
      set: setDirname
    });
    Object.defineProperty(VFile.prototype, "basename", {
      get: getBasename,
      set: setBasename
    });
    Object.defineProperty(VFile.prototype, "extname", {
      get: getExtname,
      set: setExtname
    });
    Object.defineProperty(VFile.prototype, "stem", { get: getStem, set: setStem });
    function VFile(options) {
      var prop;
      var index;
      if (!options) {
        options = {};
      } else if (typeof options === "string" || buffer(options)) {
        options = { contents: options };
      } else if ("message" in options && "messages" in options) {
        return options;
      }
      if (!(this instanceof VFile)) {
        return new VFile(options);
      }
      this.data = {};
      this.messages = [];
      this.history = [];
      this.cwd = proc.cwd();
      index = -1;
      while (++index < order.length) {
        prop = order[index];
        if (own.call(options, prop)) {
          this[prop] = options[prop];
        }
      }
      for (prop in options) {
        if (order.indexOf(prop) < 0) {
          this[prop] = options[prop];
        }
      }
    }
    function getPath() {
      return this.history[this.history.length - 1];
    }
    function setPath(path) {
      assertNonEmpty(path, "path");
      if (this.path !== path) {
        this.history.push(path);
      }
    }
    function getDirname() {
      return typeof this.path === "string" ? p.dirname(this.path) : void 0;
    }
    function setDirname(dirname) {
      assertPath(this.path, "dirname");
      this.path = p.join(dirname || "", this.basename);
    }
    function getBasename() {
      return typeof this.path === "string" ? p.basename(this.path) : void 0;
    }
    function setBasename(basename) {
      assertNonEmpty(basename, "basename");
      assertPart(basename, "basename");
      this.path = p.join(this.dirname || "", basename);
    }
    function getExtname() {
      return typeof this.path === "string" ? p.extname(this.path) : void 0;
    }
    function setExtname(extname) {
      assertPart(extname, "extname");
      assertPath(this.path, "extname");
      if (extname) {
        if (extname.charCodeAt(0) !== 46) {
          throw new Error("`extname` must start with `.`");
        }
        if (extname.indexOf(".", 1) > -1) {
          throw new Error("`extname` cannot contain multiple dots");
        }
      }
      this.path = p.join(this.dirname, this.stem + (extname || ""));
    }
    function getStem() {
      return typeof this.path === "string" ? p.basename(this.path, this.extname) : void 0;
    }
    function setStem(stem) {
      assertNonEmpty(stem, "stem");
      assertPart(stem, "stem");
      this.path = p.join(this.dirname || "", stem + (this.extname || ""));
    }
    function toString(encoding) {
      return (this.contents || "").toString(encoding);
    }
    function assertPart(part, name) {
      if (part && part.indexOf(p.sep) > -1) {
        throw new Error("`" + name + "` cannot be a path: did not expect `" + p.sep + "`");
      }
    }
    function assertNonEmpty(part, name) {
      if (!part) {
        throw new Error("`" + name + "` cannot be empty");
      }
    }
    function assertPath(path, name) {
      if (!path) {
        throw new Error("Setting `" + name + "` requires `path` to be set too");
      }
    }
  }
});

// node_modules/vfile/lib/index.js
var require_lib = __commonJS({
  "node_modules/vfile/lib/index.js"(exports, module) {
    "use strict";
    init_react();
    var VMessage = require_vfile_message();
    var VFile = require_core();
    module.exports = VFile;
    VFile.prototype.message = message;
    VFile.prototype.info = info;
    VFile.prototype.fail = fail;
    function message(reason, position, origin) {
      var message2 = new VMessage(reason, position, origin);
      if (this.path) {
        message2.name = this.path + ":" + message2.name;
        message2.file = this.path;
      }
      message2.fatal = false;
      this.messages.push(message2);
      return message2;
    }
    function fail() {
      var message2 = this.message.apply(this, arguments);
      message2.fatal = true;
      throw message2;
    }
    function info() {
      var message2 = this.message.apply(this, arguments);
      message2.fatal = null;
      return message2;
    }
  }
});

// node_modules/vfile/index.js
var require_vfile = __commonJS({
  "node_modules/vfile/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = require_lib();
  }
});

// node_modules/react-markdown/node_modules/unified/index.js
var require_unified = __commonJS({
  "node_modules/react-markdown/node_modules/unified/index.js"(exports, module) {
    "use strict";
    init_react();
    var bail = require_bail();
    var buffer = require_is_buffer();
    var extend = require_extend();
    var plain = require_is_plain_obj();
    var trough = require_trough();
    var vfile = require_vfile();
    module.exports = unified().freeze();
    var slice = [].slice;
    var own = {}.hasOwnProperty;
    var pipeline = trough().use(pipelineParse).use(pipelineRun).use(pipelineStringify);
    function pipelineParse(p, ctx) {
      ctx.tree = p.parse(ctx.file);
    }
    function pipelineRun(p, ctx, next) {
      p.run(ctx.tree, ctx.file, done);
      function done(error, tree, file) {
        if (error) {
          next(error);
        } else {
          ctx.tree = tree;
          ctx.file = file;
          next();
        }
      }
    }
    function pipelineStringify(p, ctx) {
      var result = p.stringify(ctx.tree, ctx.file);
      if (result === void 0 || result === null) {
      } else if (typeof result === "string" || buffer(result)) {
        if ("value" in ctx.file) {
          ctx.file.value = result;
        }
        ctx.file.contents = result;
      } else {
        ctx.file.result = result;
      }
    }
    function unified() {
      var attachers = [];
      var transformers = trough();
      var namespace = {};
      var freezeIndex = -1;
      var frozen;
      processor.data = data;
      processor.freeze = freeze;
      processor.attachers = attachers;
      processor.use = use;
      processor.parse = parse;
      processor.stringify = stringify;
      processor.run = run;
      processor.runSync = runSync;
      processor.process = process2;
      processor.processSync = processSync;
      return processor;
      function processor() {
        var destination = unified();
        var index = -1;
        while (++index < attachers.length) {
          destination.use.apply(null, attachers[index]);
        }
        destination.data(extend(true, {}, namespace));
        return destination;
      }
      function freeze() {
        var values;
        var transformer;
        if (frozen) {
          return processor;
        }
        while (++freezeIndex < attachers.length) {
          values = attachers[freezeIndex];
          if (values[1] === false) {
            continue;
          }
          if (values[1] === true) {
            values[1] = void 0;
          }
          transformer = values[0].apply(processor, values.slice(1));
          if (typeof transformer === "function") {
            transformers.use(transformer);
          }
        }
        frozen = true;
        freezeIndex = Infinity;
        return processor;
      }
      function data(key, value) {
        if (typeof key === "string") {
          if (arguments.length === 2) {
            assertUnfrozen("data", frozen);
            namespace[key] = value;
            return processor;
          }
          return own.call(namespace, key) && namespace[key] || null;
        }
        if (key) {
          assertUnfrozen("data", frozen);
          namespace = key;
          return processor;
        }
        return namespace;
      }
      function use(value) {
        var settings;
        assertUnfrozen("use", frozen);
        if (value === null || value === void 0) {
        } else if (typeof value === "function") {
          addPlugin.apply(null, arguments);
        } else if (typeof value === "object") {
          if ("length" in value) {
            addList(value);
          } else {
            addPreset(value);
          }
        } else {
          throw new Error("Expected usable value, not `" + value + "`");
        }
        if (settings) {
          namespace.settings = extend(namespace.settings || {}, settings);
        }
        return processor;
        function addPreset(result) {
          addList(result.plugins);
          if (result.settings) {
            settings = extend(settings || {}, result.settings);
          }
        }
        function add(value2) {
          if (typeof value2 === "function") {
            addPlugin(value2);
          } else if (typeof value2 === "object") {
            if ("length" in value2) {
              addPlugin.apply(null, value2);
            } else {
              addPreset(value2);
            }
          } else {
            throw new Error("Expected usable value, not `" + value2 + "`");
          }
        }
        function addList(plugins) {
          var index = -1;
          if (plugins === null || plugins === void 0) {
          } else if (typeof plugins === "object" && "length" in plugins) {
            while (++index < plugins.length) {
              add(plugins[index]);
            }
          } else {
            throw new Error("Expected a list of plugins, not `" + plugins + "`");
          }
        }
        function addPlugin(plugin, value2) {
          var entry = find(plugin);
          if (entry) {
            if (plain(entry[1]) && plain(value2)) {
              value2 = extend(true, entry[1], value2);
            }
            entry[1] = value2;
          } else {
            attachers.push(slice.call(arguments));
          }
        }
      }
      function find(plugin) {
        var index = -1;
        while (++index < attachers.length) {
          if (attachers[index][0] === plugin) {
            return attachers[index];
          }
        }
      }
      function parse(doc) {
        var file = vfile(doc);
        var Parser;
        freeze();
        Parser = processor.Parser;
        assertParser("parse", Parser);
        if (newable(Parser, "parse")) {
          return new Parser(String(file), file).parse();
        }
        return Parser(String(file), file);
      }
      function run(node, file, cb) {
        assertNode(node);
        freeze();
        if (!cb && typeof file === "function") {
          cb = file;
          file = null;
        }
        if (!cb) {
          return new Promise(executor);
        }
        executor(null, cb);
        function executor(resolve, reject) {
          transformers.run(node, vfile(file), done);
          function done(error, tree, file2) {
            tree = tree || node;
            if (error) {
              reject(error);
            } else if (resolve) {
              resolve(tree);
            } else {
              cb(null, tree, file2);
            }
          }
        }
      }
      function runSync(node, file) {
        var result;
        var complete;
        run(node, file, done);
        assertDone("runSync", "run", complete);
        return result;
        function done(error, tree) {
          complete = true;
          result = tree;
          bail(error);
        }
      }
      function stringify(node, doc) {
        var file = vfile(doc);
        var Compiler;
        freeze();
        Compiler = processor.Compiler;
        assertCompiler("stringify", Compiler);
        assertNode(node);
        if (newable(Compiler, "compile")) {
          return new Compiler(node, file).compile();
        }
        return Compiler(node, file);
      }
      function process2(doc, cb) {
        freeze();
        assertParser("process", processor.Parser);
        assertCompiler("process", processor.Compiler);
        if (!cb) {
          return new Promise(executor);
        }
        executor(null, cb);
        function executor(resolve, reject) {
          var file = vfile(doc);
          pipeline.run(processor, { file }, done);
          function done(error) {
            if (error) {
              reject(error);
            } else if (resolve) {
              resolve(file);
            } else {
              cb(null, file);
            }
          }
        }
      }
      function processSync(doc) {
        var file;
        var complete;
        freeze();
        assertParser("processSync", processor.Parser);
        assertCompiler("processSync", processor.Compiler);
        file = vfile(doc);
        process2(file, done);
        assertDone("processSync", "process", complete);
        return file;
        function done(error) {
          complete = true;
          bail(error);
        }
      }
    }
    function newable(value, name) {
      return typeof value === "function" && value.prototype && (keys(value.prototype) || name in value.prototype);
    }
    function keys(value) {
      var key;
      for (key in value) {
        return true;
      }
      return false;
    }
    function assertParser(name, Parser) {
      if (typeof Parser !== "function") {
        throw new Error("Cannot `" + name + "` without `Parser`");
      }
    }
    function assertCompiler(name, Compiler) {
      if (typeof Compiler !== "function") {
        throw new Error("Cannot `" + name + "` without `Compiler`");
      }
    }
    function assertUnfrozen(name, frozen) {
      if (frozen) {
        throw new Error("Cannot invoke `" + name + "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.");
      }
    }
    function assertNode(node) {
      if (!node || typeof node.type !== "string") {
        throw new Error("Expected node, got `" + node + "`");
      }
    }
    function assertDone(name, asyncName, complete) {
      if (!complete) {
        throw new Error("`" + name + "` finished async. Use `" + asyncName + "` instead");
      }
    }
  }
});

// node_modules/react-markdown/node_modules/mdast-util-to-string/index.js
var require_mdast_util_to_string = __commonJS({
  "node_modules/react-markdown/node_modules/mdast-util-to-string/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = toString;
    function toString(node) {
      return node && (node.value || node.alt || node.title || "children" in node && all(node.children) || "length" in node && all(node)) || "";
    }
    function all(values) {
      var result = [];
      var index = -1;
      while (++index < values.length) {
        result[index] = toString(values[index]);
      }
      return result.join("");
    }
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/constant/assign.js
var require_assign = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/constant/assign.js"(exports, module) {
    "use strict";
    init_react();
    var assign = Object.assign;
    module.exports = assign;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/constant/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/constant/has-own-property.js"(exports, module) {
    "use strict";
    init_react();
    var own = {}.hasOwnProperty;
    module.exports = own;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/util/normalize-identifier.js
var require_normalize_identifier = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/util/normalize-identifier.js"(exports, module) {
    "use strict";
    init_react();
    function normalizeIdentifier(value) {
      return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
    }
    module.exports = normalizeIdentifier;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/constant/from-char-code.js
var require_from_char_code = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/constant/from-char-code.js"(exports, module) {
    "use strict";
    init_react();
    var fromCharCode = String.fromCharCode;
    module.exports = fromCharCode;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/util/safe-from-int.js
var require_safe_from_int = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/util/safe-from-int.js"(exports, module) {
    "use strict";
    init_react();
    var fromCharCode = require_from_char_code();
    function safeFromInt(value, base) {
      var code = parseInt(value, base);
      if (code < 9 || code === 11 || code > 13 && code < 32 || code > 126 && code < 160 || code > 55295 && code < 57344 || code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 || code > 1114111) {
        return "\uFFFD";
      }
      return fromCharCode(code);
    }
    module.exports = safeFromInt;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/character/markdown-line-ending.js
var require_markdown_line_ending = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/character/markdown-line-ending.js"(exports, module) {
    "use strict";
    init_react();
    function markdownLineEnding(code) {
      return code < -2;
    }
    module.exports = markdownLineEnding;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/character/markdown-space.js
var require_markdown_space = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/character/markdown-space.js"(exports, module) {
    "use strict";
    init_react();
    function markdownSpace(code) {
      return code === -2 || code === -1 || code === 32;
    }
    module.exports = markdownSpace;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/factory-space.js
var require_factory_space = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/factory-space.js"(exports, module) {
    "use strict";
    init_react();
    var markdownSpace = require_markdown_space();
    function spaceFactory(effects, ok, type, max) {
      var limit = max ? max - 1 : Infinity;
      var size = 0;
      return start;
      function start(code) {
        if (markdownSpace(code)) {
          effects.enter(type);
          return prefix(code);
        }
        return ok(code);
      }
      function prefix(code) {
        if (markdownSpace(code) && size++ < limit) {
          effects.consume(code);
          return prefix;
        }
        effects.exit(type);
        return ok(code);
      }
    }
    module.exports = spaceFactory;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/initialize/content.js
var require_content = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/initialize/content.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var markdownLineEnding = require_markdown_line_ending();
    var factorySpace = require_factory_space();
    var tokenize = initializeContent;
    function initializeContent(effects) {
      var contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
      var previous;
      return contentStart;
      function afterContentStartConstruct(code) {
        if (code === null) {
          effects.consume(code);
          return;
        }
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace(effects, contentStart, "linePrefix");
      }
      function paragraphInitial(code) {
        effects.enter("paragraph");
        return lineStart(code);
      }
      function lineStart(code) {
        var token = effects.enter("chunkText", {
          contentType: "text",
          previous
        });
        if (previous) {
          previous.next = token;
        }
        previous = token;
        return data(code);
      }
      function data(code) {
        if (code === null) {
          effects.exit("chunkText");
          effects.exit("paragraph");
          effects.consume(code);
          return;
        }
        if (markdownLineEnding(code)) {
          effects.consume(code);
          effects.exit("chunkText");
          return lineStart;
        }
        effects.consume(code);
        return data;
      }
    }
    exports.tokenize = tokenize;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/partial-blank-line.js
var require_partial_blank_line = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/partial-blank-line.js"(exports, module) {
    "use strict";
    init_react();
    var markdownLineEnding = require_markdown_line_ending();
    var factorySpace = require_factory_space();
    var partialBlankLine = {
      tokenize: tokenizePartialBlankLine,
      partial: true
    };
    function tokenizePartialBlankLine(effects, ok, nok) {
      return factorySpace(effects, afterWhitespace, "linePrefix");
      function afterWhitespace(code) {
        return code === null || markdownLineEnding(code) ? ok(code) : nok(code);
      }
    }
    module.exports = partialBlankLine;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/initialize/document.js
var require_document = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/initialize/document.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var markdownLineEnding = require_markdown_line_ending();
    var factorySpace = require_factory_space();
    var partialBlankLine = require_partial_blank_line();
    var tokenize = initializeDocument;
    var containerConstruct = {
      tokenize: tokenizeContainer
    };
    var lazyFlowConstruct = {
      tokenize: tokenizeLazyFlow
    };
    function initializeDocument(effects) {
      var self = this;
      var stack = [];
      var continued = 0;
      var inspectConstruct = {
        tokenize: tokenizeInspect,
        partial: true
      };
      var inspectResult;
      var childFlow;
      var childToken;
      return start;
      function start(code) {
        if (continued < stack.length) {
          self.containerState = stack[continued][1];
          return effects.attempt(stack[continued][0].continuation, documentContinue, documentContinued)(code);
        }
        return documentContinued(code);
      }
      function documentContinue(code) {
        continued++;
        return start(code);
      }
      function documentContinued(code) {
        if (inspectResult && inspectResult.flowContinue) {
          return flowStart(code);
        }
        self.interrupt = childFlow && childFlow.currentConstruct && childFlow.currentConstruct.interruptible;
        self.containerState = {};
        return effects.attempt(containerConstruct, containerContinue, flowStart)(code);
      }
      function containerContinue(code) {
        stack.push([self.currentConstruct, self.containerState]);
        self.containerState = void 0;
        return documentContinued(code);
      }
      function flowStart(code) {
        if (code === null) {
          exitContainers(0, true);
          effects.consume(code);
          return;
        }
        childFlow = childFlow || self.parser.flow(self.now());
        effects.enter("chunkFlow", {
          contentType: "flow",
          previous: childToken,
          _tokenizer: childFlow
        });
        return flowContinue(code);
      }
      function flowContinue(code) {
        if (code === null) {
          continueFlow(effects.exit("chunkFlow"));
          return flowStart(code);
        }
        if (markdownLineEnding(code)) {
          effects.consume(code);
          continueFlow(effects.exit("chunkFlow"));
          return effects.check(inspectConstruct, documentAfterPeek);
        }
        effects.consume(code);
        return flowContinue;
      }
      function documentAfterPeek(code) {
        exitContainers(inspectResult.continued, inspectResult && inspectResult.flowEnd);
        continued = 0;
        return start(code);
      }
      function continueFlow(token) {
        if (childToken)
          childToken.next = token;
        childToken = token;
        childFlow.lazy = inspectResult && inspectResult.lazy;
        childFlow.defineSkip(token.start);
        childFlow.write(self.sliceStream(token));
      }
      function exitContainers(size, end) {
        var index = stack.length;
        if (childFlow && end) {
          childFlow.write([null]);
          childToken = childFlow = void 0;
        }
        while (index-- > size) {
          self.containerState = stack[index][1];
          stack[index][0].exit.call(self, effects);
        }
        stack.length = size;
      }
      function tokenizeInspect(effects2, ok) {
        var subcontinued = 0;
        inspectResult = {};
        return inspectStart;
        function inspectStart(code) {
          if (subcontinued < stack.length) {
            self.containerState = stack[subcontinued][1];
            return effects2.attempt(stack[subcontinued][0].continuation, inspectContinue, inspectLess)(code);
          }
          if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
            inspectResult.flowContinue = true;
            return inspectDone(code);
          }
          self.interrupt = childFlow.currentConstruct && childFlow.currentConstruct.interruptible;
          self.containerState = {};
          return effects2.attempt(containerConstruct, inspectFlowEnd, inspectDone)(code);
        }
        function inspectContinue(code) {
          subcontinued++;
          return self.containerState._closeFlow ? inspectFlowEnd(code) : inspectStart(code);
        }
        function inspectLess(code) {
          if (childFlow.currentConstruct && childFlow.currentConstruct.lazy) {
            self.containerState = {};
            return effects2.attempt(containerConstruct, inspectFlowEnd, effects2.attempt(lazyFlowConstruct, inspectFlowEnd, effects2.check(partialBlankLine, inspectFlowEnd, inspectLazy)))(code);
          }
          return inspectFlowEnd(code);
        }
        function inspectLazy(code) {
          subcontinued = stack.length;
          inspectResult.lazy = true;
          inspectResult.flowContinue = true;
          return inspectDone(code);
        }
        function inspectFlowEnd(code) {
          inspectResult.flowEnd = true;
          return inspectDone(code);
        }
        function inspectDone(code) {
          inspectResult.continued = subcontinued;
          self.interrupt = self.containerState = void 0;
          return ok(code);
        }
      }
    }
    function tokenizeContainer(effects, ok, nok) {
      return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok, nok), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
    }
    function tokenizeLazyFlow(effects, ok, nok) {
      return factorySpace(effects, effects.lazy(this.parser.constructs.flow, ok, nok), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
    }
    exports.tokenize = tokenize;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/util/size-chunks.js
var require_size_chunks = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/util/size-chunks.js"(exports, module) {
    "use strict";
    init_react();
    function sizeChunks(chunks) {
      var index = -1;
      var size = 0;
      while (++index < chunks.length) {
        size += typeof chunks[index] === "string" ? chunks[index].length : 1;
      }
      return size;
    }
    module.exports = sizeChunks;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/util/prefix-size.js
var require_prefix_size = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/util/prefix-size.js"(exports, module) {
    "use strict";
    init_react();
    var sizeChunks = require_size_chunks();
    function prefixSize(events, type) {
      var tail = events[events.length - 1];
      if (!tail || tail[1].type !== type)
        return 0;
      return sizeChunks(tail[2].sliceStream(tail[1]));
    }
    module.exports = prefixSize;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/constant/splice.js
var require_splice = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/constant/splice.js"(exports, module) {
    "use strict";
    init_react();
    var splice = [].splice;
    module.exports = splice;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/util/chunked-splice.js
var require_chunked_splice = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/util/chunked-splice.js"(exports, module) {
    "use strict";
    init_react();
    var splice = require_splice();
    function chunkedSplice(list, start, remove, items) {
      var end = list.length;
      var chunkStart = 0;
      var parameters;
      if (start < 0) {
        start = -start > end ? 0 : end + start;
      } else {
        start = start > end ? end : start;
      }
      remove = remove > 0 ? remove : 0;
      if (items.length < 1e4) {
        parameters = Array.from(items);
        parameters.unshift(start, remove);
        splice.apply(list, parameters);
      } else {
        if (remove)
          splice.apply(list, [start, remove]);
        while (chunkStart < items.length) {
          parameters = items.slice(chunkStart, chunkStart + 1e4);
          parameters.unshift(start, 0);
          splice.apply(list, parameters);
          chunkStart += 1e4;
          start += 1e4;
        }
      }
    }
    module.exports = chunkedSplice;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/util/shallow.js
var require_shallow = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/util/shallow.js"(exports, module) {
    "use strict";
    init_react();
    var assign = require_assign();
    function shallow(object) {
      return assign({}, object);
    }
    module.exports = shallow;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/util/subtokenize.js
var require_subtokenize = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/util/subtokenize.js"(exports, module) {
    "use strict";
    init_react();
    var assign = require_assign();
    var chunkedSplice = require_chunked_splice();
    var shallow = require_shallow();
    function subtokenize(events) {
      var jumps = {};
      var index = -1;
      var event;
      var lineIndex;
      var otherIndex;
      var otherEvent;
      var parameters;
      var subevents;
      var more;
      while (++index < events.length) {
        while (index in jumps) {
          index = jumps[index];
        }
        event = events[index];
        if (index && event[1].type === "chunkFlow" && events[index - 1][1].type === "listItemPrefix") {
          subevents = event[1]._tokenizer.events;
          otherIndex = 0;
          if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
            otherIndex += 2;
          }
          if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
            while (++otherIndex < subevents.length) {
              if (subevents[otherIndex][1].type === "content") {
                break;
              }
              if (subevents[otherIndex][1].type === "chunkText") {
                subevents[otherIndex][1].isInFirstContentOfListItem = true;
                otherIndex++;
              }
            }
          }
        }
        if (event[0] === "enter") {
          if (event[1].contentType) {
            assign(jumps, subcontent(events, index));
            index = jumps[index];
            more = true;
          }
        } else if (event[1]._container || event[1]._movePreviousLineEndings) {
          otherIndex = index;
          lineIndex = void 0;
          while (otherIndex--) {
            otherEvent = events[otherIndex];
            if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
              if (otherEvent[0] === "enter") {
                if (lineIndex) {
                  events[lineIndex][1].type = "lineEndingBlank";
                }
                otherEvent[1].type = "lineEnding";
                lineIndex = otherIndex;
              }
            } else {
              break;
            }
          }
          if (lineIndex) {
            event[1].end = shallow(events[lineIndex][1].start);
            parameters = events.slice(lineIndex, index);
            parameters.unshift(event);
            chunkedSplice(events, lineIndex, index - lineIndex + 1, parameters);
          }
        }
      }
      return !more;
    }
    function subcontent(events, eventIndex) {
      var token = events[eventIndex][1];
      var context = events[eventIndex][2];
      var startPosition = eventIndex - 1;
      var startPositions = [];
      var tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
      var childEvents = tokenizer.events;
      var jumps = [];
      var gaps = {};
      var stream;
      var previous;
      var index;
      var entered;
      var end;
      var adjust;
      while (token) {
        while (events[++startPosition][1] !== token) {
        }
        startPositions.push(startPosition);
        if (!token._tokenizer) {
          stream = context.sliceStream(token);
          if (!token.next) {
            stream.push(null);
          }
          if (previous) {
            tokenizer.defineSkip(token.start);
          }
          if (token.isInFirstContentOfListItem) {
            tokenizer._gfmTasklistFirstContentOfListItem = true;
          }
          tokenizer.write(stream);
          if (token.isInFirstContentOfListItem) {
            tokenizer._gfmTasklistFirstContentOfListItem = void 0;
          }
        }
        previous = token;
        token = token.next;
      }
      token = previous;
      index = childEvents.length;
      while (index--) {
        if (childEvents[index][0] === "enter") {
          entered = true;
        } else if (entered && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line) {
          add(childEvents.slice(index + 1, end));
          token._tokenizer = token.next = void 0;
          token = token.previous;
          end = index + 1;
        }
      }
      tokenizer.events = token._tokenizer = token.next = void 0;
      add(childEvents.slice(0, end));
      index = -1;
      adjust = 0;
      while (++index < jumps.length) {
        gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
        adjust += jumps[index][1] - jumps[index][0] - 1;
      }
      return gaps;
      function add(slice) {
        var start = startPositions.pop();
        jumps.unshift([start, start + slice.length - 1]);
        chunkedSplice(events, start, 2, slice);
      }
    }
    module.exports = subtokenize;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/content.js
var require_content2 = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/content.js"(exports, module) {
    "use strict";
    init_react();
    var markdownLineEnding = require_markdown_line_ending();
    var prefixSize = require_prefix_size();
    var subtokenize = require_subtokenize();
    var factorySpace = require_factory_space();
    var content = {
      tokenize: tokenizeContent,
      resolve: resolveContent,
      interruptible: true,
      lazy: true
    };
    var continuationConstruct = {
      tokenize: tokenizeContinuation,
      partial: true
    };
    function resolveContent(events) {
      subtokenize(events);
      return events;
    }
    function tokenizeContent(effects, ok) {
      var previous;
      return start;
      function start(code) {
        effects.enter("content");
        previous = effects.enter("chunkContent", {
          contentType: "content"
        });
        return data(code);
      }
      function data(code) {
        if (code === null) {
          return contentEnd(code);
        }
        if (markdownLineEnding(code)) {
          return effects.check(continuationConstruct, contentContinue, contentEnd)(code);
        }
        effects.consume(code);
        return data;
      }
      function contentEnd(code) {
        effects.exit("chunkContent");
        effects.exit("content");
        return ok(code);
      }
      function contentContinue(code) {
        effects.consume(code);
        effects.exit("chunkContent");
        previous = previous.next = effects.enter("chunkContent", {
          contentType: "content",
          previous
        });
        return data;
      }
    }
    function tokenizeContinuation(effects, ok, nok) {
      var self = this;
      return startLookahead;
      function startLookahead(code) {
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace(effects, prefixed, "linePrefix");
      }
      function prefixed(code) {
        if (code === null || markdownLineEnding(code)) {
          return nok(code);
        }
        if (self.parser.constructs.disable.null.indexOf("codeIndented") > -1 || prefixSize(self.events, "linePrefix") < 4) {
          return effects.interrupt(self.parser.constructs.flow, nok, ok)(code);
        }
        return ok(code);
      }
    }
    module.exports = content;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/initialize/flow.js
var require_flow = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/initialize/flow.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var content = require_content2();
    var factorySpace = require_factory_space();
    var partialBlankLine = require_partial_blank_line();
    var tokenize = initializeFlow;
    function initializeFlow(effects) {
      var self = this;
      var initial = effects.attempt(partialBlankLine, atBlankEnding, effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content, afterConstruct)), "linePrefix")));
      return initial;
      function atBlankEnding(code) {
        if (code === null) {
          effects.consume(code);
          return;
        }
        effects.enter("lineEndingBlank");
        effects.consume(code);
        effects.exit("lineEndingBlank");
        self.currentConstruct = void 0;
        return initial;
      }
      function afterConstruct(code) {
        if (code === null) {
          effects.consume(code);
          return;
        }
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        self.currentConstruct = void 0;
        return initial;
      }
    }
    exports.tokenize = tokenize;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/initialize/text.js
var require_text = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/initialize/text.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var assign = require_assign();
    var shallow = require_shallow();
    var text = initializeFactory("text");
    var string = initializeFactory("string");
    var resolver = {
      resolveAll: createResolver()
    };
    function initializeFactory(field) {
      return {
        tokenize: initializeText,
        resolveAll: createResolver(field === "text" ? resolveAllLineSuffixes : void 0)
      };
      function initializeText(effects) {
        var self = this;
        var constructs = this.parser.constructs[field];
        var text2 = effects.attempt(constructs, start, notText);
        return start;
        function start(code) {
          return atBreak(code) ? text2(code) : notText(code);
        }
        function notText(code) {
          if (code === null) {
            effects.consume(code);
            return;
          }
          effects.enter("data");
          effects.consume(code);
          return data;
        }
        function data(code) {
          if (atBreak(code)) {
            effects.exit("data");
            return text2(code);
          }
          effects.consume(code);
          return data;
        }
        function atBreak(code) {
          var list = constructs[code];
          var index = -1;
          if (code === null) {
            return true;
          }
          if (list) {
            while (++index < list.length) {
              if (!list[index].previous || list[index].previous.call(self, self.previous)) {
                return true;
              }
            }
          }
        }
      }
    }
    function createResolver(extraResolver) {
      return resolveAllText;
      function resolveAllText(events, context) {
        var index = -1;
        var enter;
        while (++index <= events.length) {
          if (enter === void 0) {
            if (events[index] && events[index][1].type === "data") {
              enter = index;
              index++;
            }
          } else if (!events[index] || events[index][1].type !== "data") {
            if (index !== enter + 2) {
              events[enter][1].end = events[index - 1][1].end;
              events.splice(enter + 2, index - enter - 2);
              index = enter + 2;
            }
            enter = void 0;
          }
        }
        return extraResolver ? extraResolver(events, context) : events;
      }
    }
    function resolveAllLineSuffixes(events, context) {
      var eventIndex = -1;
      var chunks;
      var data;
      var chunk;
      var index;
      var bufferIndex;
      var size;
      var tabs;
      var token;
      while (++eventIndex <= events.length) {
        if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
          data = events[eventIndex - 1][1];
          chunks = context.sliceStream(data);
          index = chunks.length;
          bufferIndex = -1;
          size = 0;
          tabs = void 0;
          while (index--) {
            chunk = chunks[index];
            if (typeof chunk === "string") {
              bufferIndex = chunk.length;
              while (chunk.charCodeAt(bufferIndex - 1) === 32) {
                size++;
                bufferIndex--;
              }
              if (bufferIndex)
                break;
              bufferIndex = -1;
            } else if (chunk === -2) {
              tabs = true;
              size++;
            } else if (chunk === -1)
              ;
            else {
              index++;
              break;
            }
          }
          if (size) {
            token = {
              type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
              start: {
                line: data.end.line,
                column: data.end.column - size,
                offset: data.end.offset - size,
                _index: data.start._index + index,
                _bufferIndex: index ? bufferIndex : data.start._bufferIndex + bufferIndex
              },
              end: shallow(data.end)
            };
            data.end = shallow(token.start);
            if (data.start.offset === data.end.offset) {
              assign(data, token);
            } else {
              events.splice(eventIndex, 0, ["enter", token, context], ["exit", token, context]);
              eventIndex += 2;
            }
          }
          eventIndex++;
        }
      }
      return events;
    }
    exports.resolver = resolver;
    exports.string = string;
    exports.text = text;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/util/miniflat.js
var require_miniflat = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/util/miniflat.js"(exports, module) {
    "use strict";
    init_react();
    function miniflat(value) {
      return value === null || value === void 0 ? [] : "length" in value ? value : [value];
    }
    module.exports = miniflat;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/util/combine-extensions.js
var require_combine_extensions = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/util/combine-extensions.js"(exports, module) {
    "use strict";
    init_react();
    var hasOwnProperty = require_has_own_property();
    var chunkedSplice = require_chunked_splice();
    var miniflat = require_miniflat();
    function combineExtensions(extensions) {
      var all = {};
      var index = -1;
      while (++index < extensions.length) {
        extension(all, extensions[index]);
      }
      return all;
    }
    function extension(all, extension2) {
      var hook;
      var left;
      var right;
      var code;
      for (hook in extension2) {
        left = hasOwnProperty.call(all, hook) ? all[hook] : all[hook] = {};
        right = extension2[hook];
        for (code in right) {
          left[code] = constructs(miniflat(right[code]), hasOwnProperty.call(left, code) ? left[code] : []);
        }
      }
    }
    function constructs(list, existing) {
      var index = -1;
      var before = [];
      while (++index < list.length) {
        ;
        (list[index].add === "after" ? existing : before).push(list[index]);
      }
      chunkedSplice(existing, 0, 0, before);
      return existing;
    }
    module.exports = combineExtensions;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/util/chunked-push.js
var require_chunked_push = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/util/chunked-push.js"(exports, module) {
    "use strict";
    init_react();
    var chunkedSplice = require_chunked_splice();
    function chunkedPush(list, items) {
      if (list.length) {
        chunkedSplice(list, list.length, 0, items);
        return list;
      }
      return items;
    }
    module.exports = chunkedPush;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/util/resolve-all.js
var require_resolve_all = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/util/resolve-all.js"(exports, module) {
    "use strict";
    init_react();
    function resolveAll(constructs, events, context) {
      var called = [];
      var index = -1;
      var resolve;
      while (++index < constructs.length) {
        resolve = constructs[index].resolveAll;
        if (resolve && called.indexOf(resolve) < 0) {
          events = resolve(events, context);
          called.push(resolve);
        }
      }
      return events;
    }
    module.exports = resolveAll;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/util/serialize-chunks.js
var require_serialize_chunks = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/util/serialize-chunks.js"(exports, module) {
    "use strict";
    init_react();
    var fromCharCode = require_from_char_code();
    function serializeChunks(chunks) {
      var index = -1;
      var result = [];
      var chunk;
      var value;
      var atTab;
      while (++index < chunks.length) {
        chunk = chunks[index];
        if (typeof chunk === "string") {
          value = chunk;
        } else if (chunk === -5) {
          value = "\r";
        } else if (chunk === -4) {
          value = "\n";
        } else if (chunk === -3) {
          value = "\r\n";
        } else if (chunk === -2) {
          value = "	";
        } else if (chunk === -1) {
          if (atTab)
            continue;
          value = " ";
        } else {
          value = fromCharCode(chunk);
        }
        atTab = chunk === -2;
        result.push(value);
      }
      return result.join("");
    }
    module.exports = serializeChunks;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/util/slice-chunks.js
var require_slice_chunks = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/util/slice-chunks.js"(exports, module) {
    "use strict";
    init_react();
    function sliceChunks(chunks, token) {
      var startIndex = token.start._index;
      var startBufferIndex = token.start._bufferIndex;
      var endIndex = token.end._index;
      var endBufferIndex = token.end._bufferIndex;
      var view;
      if (startIndex === endIndex) {
        view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
      } else {
        view = chunks.slice(startIndex, endIndex);
        if (startBufferIndex > -1) {
          view[0] = view[0].slice(startBufferIndex);
        }
        if (endBufferIndex > 0) {
          view.push(chunks[endIndex].slice(0, endBufferIndex));
        }
      }
      return view;
    }
    module.exports = sliceChunks;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/util/create-tokenizer.js
var require_create_tokenizer = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/util/create-tokenizer.js"(exports, module) {
    "use strict";
    init_react();
    var assign = require_assign();
    var markdownLineEnding = require_markdown_line_ending();
    var chunkedPush = require_chunked_push();
    var chunkedSplice = require_chunked_splice();
    var miniflat = require_miniflat();
    var resolveAll = require_resolve_all();
    var serializeChunks = require_serialize_chunks();
    var shallow = require_shallow();
    var sliceChunks = require_slice_chunks();
    function createTokenizer(parser, initialize, from) {
      var point = from ? shallow(from) : {
        line: 1,
        column: 1,
        offset: 0
      };
      var columnStart = {};
      var resolveAllConstructs = [];
      var chunks = [];
      var stack = [];
      var effects = {
        consume,
        enter,
        exit,
        attempt: constructFactory(onsuccessfulconstruct),
        check: constructFactory(onsuccessfulcheck),
        interrupt: constructFactory(onsuccessfulcheck, {
          interrupt: true
        }),
        lazy: constructFactory(onsuccessfulcheck, {
          lazy: true
        })
      };
      var context = {
        previous: null,
        events: [],
        parser,
        sliceStream,
        sliceSerialize,
        now,
        defineSkip: skip,
        write
      };
      var state = initialize.tokenize.call(context, effects);
      if (initialize.resolveAll) {
        resolveAllConstructs.push(initialize);
      }
      point._index = 0;
      point._bufferIndex = -1;
      return context;
      function write(slice) {
        chunks = chunkedPush(chunks, slice);
        main();
        if (chunks[chunks.length - 1] !== null) {
          return [];
        }
        addResult(initialize, 0);
        context.events = resolveAll(resolveAllConstructs, context.events, context);
        return context.events;
      }
      function sliceSerialize(token) {
        return serializeChunks(sliceStream(token));
      }
      function sliceStream(token) {
        return sliceChunks(chunks, token);
      }
      function now() {
        return shallow(point);
      }
      function skip(value) {
        columnStart[value.line] = value.column;
        accountForPotentialSkip();
      }
      function main() {
        var chunkIndex;
        var chunk;
        while (point._index < chunks.length) {
          chunk = chunks[point._index];
          if (typeof chunk === "string") {
            chunkIndex = point._index;
            if (point._bufferIndex < 0) {
              point._bufferIndex = 0;
            }
            while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
              go(chunk.charCodeAt(point._bufferIndex));
            }
          } else {
            go(chunk);
          }
        }
      }
      function go(code) {
        state = state(code);
      }
      function consume(code) {
        if (markdownLineEnding(code)) {
          point.line++;
          point.column = 1;
          point.offset += code === -3 ? 2 : 1;
          accountForPotentialSkip();
        } else if (code !== -1) {
          point.column++;
          point.offset++;
        }
        if (point._bufferIndex < 0) {
          point._index++;
        } else {
          point._bufferIndex++;
          if (point._bufferIndex === chunks[point._index].length) {
            point._bufferIndex = -1;
            point._index++;
          }
        }
        context.previous = code;
      }
      function enter(type, fields) {
        var token = fields || {};
        token.type = type;
        token.start = now();
        context.events.push(["enter", token, context]);
        stack.push(token);
        return token;
      }
      function exit(type) {
        var token = stack.pop();
        token.end = now();
        context.events.push(["exit", token, context]);
        return token;
      }
      function onsuccessfulconstruct(construct, info) {
        addResult(construct, info.from);
      }
      function onsuccessfulcheck(construct, info) {
        info.restore();
      }
      function constructFactory(onreturn, fields) {
        return hook;
        function hook(constructs, returnState, bogusState) {
          var listOfConstructs;
          var constructIndex;
          var currentConstruct;
          var info;
          return constructs.tokenize || "length" in constructs ? handleListOfConstructs(miniflat(constructs)) : handleMapOfConstructs;
          function handleMapOfConstructs(code) {
            if (code in constructs || null in constructs) {
              return handleListOfConstructs(constructs.null ? miniflat(constructs[code]).concat(miniflat(constructs.null)) : constructs[code])(code);
            }
            return bogusState(code);
          }
          function handleListOfConstructs(list) {
            listOfConstructs = list;
            constructIndex = 0;
            return handleConstruct(list[constructIndex]);
          }
          function handleConstruct(construct) {
            return start;
            function start(code) {
              info = store();
              currentConstruct = construct;
              if (!construct.partial) {
                context.currentConstruct = construct;
              }
              if (construct.name && context.parser.constructs.disable.null.indexOf(construct.name) > -1) {
                return nok();
              }
              return construct.tokenize.call(fields ? assign({}, context, fields) : context, effects, ok, nok)(code);
            }
          }
          function ok(code) {
            onreturn(currentConstruct, info);
            return returnState;
          }
          function nok(code) {
            info.restore();
            if (++constructIndex < listOfConstructs.length) {
              return handleConstruct(listOfConstructs[constructIndex]);
            }
            return bogusState;
          }
        }
      }
      function addResult(construct, from2) {
        if (construct.resolveAll && resolveAllConstructs.indexOf(construct) < 0) {
          resolveAllConstructs.push(construct);
        }
        if (construct.resolve) {
          chunkedSplice(context.events, from2, context.events.length - from2, construct.resolve(context.events.slice(from2), context));
        }
        if (construct.resolveTo) {
          context.events = construct.resolveTo(context.events, context);
        }
      }
      function store() {
        var startPoint = now();
        var startPrevious = context.previous;
        var startCurrentConstruct = context.currentConstruct;
        var startEventsIndex = context.events.length;
        var startStack = Array.from(stack);
        return {
          restore,
          from: startEventsIndex
        };
        function restore() {
          point = startPoint;
          context.previous = startPrevious;
          context.currentConstruct = startCurrentConstruct;
          context.events.length = startEventsIndex;
          stack = startStack;
          accountForPotentialSkip();
        }
      }
      function accountForPotentialSkip() {
        if (point.line in columnStart && point.column < 2) {
          point.column = columnStart[point.line];
          point.offset += columnStart[point.line] - 1;
        }
      }
    }
    module.exports = createTokenizer;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/character/markdown-line-ending-or-space.js
var require_markdown_line_ending_or_space = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/character/markdown-line-ending-or-space.js"(exports, module) {
    "use strict";
    init_react();
    function markdownLineEndingOrSpace(code) {
      return code < 0 || code === 32;
    }
    module.exports = markdownLineEndingOrSpace;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/constant/unicode-punctuation-regex.js
var require_unicode_punctuation_regex = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/constant/unicode-punctuation-regex.js"(exports, module) {
    "use strict";
    init_react();
    var unicodePunctuation = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
    module.exports = unicodePunctuation;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/util/regex-check.js
var require_regex_check = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/util/regex-check.js"(exports, module) {
    "use strict";
    init_react();
    var fromCharCode = require_from_char_code();
    function regexCheck(regex) {
      return check;
      function check(code) {
        return regex.test(fromCharCode(code));
      }
    }
    module.exports = regexCheck;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/character/unicode-punctuation.js
var require_unicode_punctuation = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/character/unicode-punctuation.js"(exports, module) {
    "use strict";
    init_react();
    var unicodePunctuationRegex = require_unicode_punctuation_regex();
    var regexCheck = require_regex_check();
    var unicodePunctuation = regexCheck(unicodePunctuationRegex);
    module.exports = unicodePunctuation;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/character/unicode-whitespace.js
var require_unicode_whitespace = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/character/unicode-whitespace.js"(exports, module) {
    "use strict";
    init_react();
    var regexCheck = require_regex_check();
    var unicodeWhitespace = regexCheck(/\s/);
    module.exports = unicodeWhitespace;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/util/classify-character.js
var require_classify_character = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/util/classify-character.js"(exports, module) {
    "use strict";
    init_react();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var unicodePunctuation = require_unicode_punctuation();
    var unicodeWhitespace = require_unicode_whitespace();
    function classifyCharacter(code) {
      if (code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) {
        return 1;
      }
      if (unicodePunctuation(code)) {
        return 2;
      }
    }
    module.exports = classifyCharacter;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/util/move-point.js
var require_move_point = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/util/move-point.js"(exports, module) {
    "use strict";
    init_react();
    function movePoint(point, offset) {
      point.column += offset;
      point.offset += offset;
      point._bufferIndex += offset;
      return point;
    }
    module.exports = movePoint;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/attention.js
var require_attention = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/attention.js"(exports, module) {
    "use strict";
    init_react();
    var chunkedPush = require_chunked_push();
    var chunkedSplice = require_chunked_splice();
    var classifyCharacter = require_classify_character();
    var movePoint = require_move_point();
    var resolveAll = require_resolve_all();
    var shallow = require_shallow();
    var attention = {
      name: "attention",
      tokenize: tokenizeAttention,
      resolveAll: resolveAllAttention
    };
    function resolveAllAttention(events, context) {
      var index = -1;
      var open;
      var group;
      var text;
      var openingSequence;
      var closingSequence;
      var use;
      var nextEvents;
      var offset;
      while (++index < events.length) {
        if (events[index][0] === "enter" && events[index][1].type === "attentionSequence" && events[index][1]._close) {
          open = index;
          while (open--) {
            if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index][1]).charCodeAt(0)) {
              if ((events[open][1]._close || events[index][1]._open) && (events[index][1].end.offset - events[index][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index][1].end.offset - events[index][1].start.offset) % 3)) {
                continue;
              }
              use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index][1].end.offset - events[index][1].start.offset > 1 ? 2 : 1;
              openingSequence = {
                type: use > 1 ? "strongSequence" : "emphasisSequence",
                start: movePoint(shallow(events[open][1].end), -use),
                end: shallow(events[open][1].end)
              };
              closingSequence = {
                type: use > 1 ? "strongSequence" : "emphasisSequence",
                start: shallow(events[index][1].start),
                end: movePoint(shallow(events[index][1].start), use)
              };
              text = {
                type: use > 1 ? "strongText" : "emphasisText",
                start: shallow(events[open][1].end),
                end: shallow(events[index][1].start)
              };
              group = {
                type: use > 1 ? "strong" : "emphasis",
                start: shallow(openingSequence.start),
                end: shallow(closingSequence.end)
              };
              events[open][1].end = shallow(openingSequence.start);
              events[index][1].start = shallow(closingSequence.end);
              nextEvents = [];
              if (events[open][1].end.offset - events[open][1].start.offset) {
                nextEvents = chunkedPush(nextEvents, [
                  ["enter", events[open][1], context],
                  ["exit", events[open][1], context]
                ]);
              }
              nextEvents = chunkedPush(nextEvents, [
                ["enter", group, context],
                ["enter", openingSequence, context],
                ["exit", openingSequence, context],
                ["enter", text, context]
              ]);
              nextEvents = chunkedPush(nextEvents, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index), context));
              nextEvents = chunkedPush(nextEvents, [
                ["exit", text, context],
                ["enter", closingSequence, context],
                ["exit", closingSequence, context],
                ["exit", group, context]
              ]);
              if (events[index][1].end.offset - events[index][1].start.offset) {
                offset = 2;
                nextEvents = chunkedPush(nextEvents, [
                  ["enter", events[index][1], context],
                  ["exit", events[index][1], context]
                ]);
              } else {
                offset = 0;
              }
              chunkedSplice(events, open - 1, index - open + 3, nextEvents);
              index = open + nextEvents.length - offset - 2;
              break;
            }
          }
        }
      }
      index = -1;
      while (++index < events.length) {
        if (events[index][1].type === "attentionSequence") {
          events[index][1].type = "data";
        }
      }
      return events;
    }
    function tokenizeAttention(effects, ok) {
      var before = classifyCharacter(this.previous);
      var marker;
      return start;
      function start(code) {
        effects.enter("attentionSequence");
        marker = code;
        return sequence(code);
      }
      function sequence(code) {
        var token;
        var after;
        var open;
        var close;
        if (code === marker) {
          effects.consume(code);
          return sequence;
        }
        token = effects.exit("attentionSequence");
        after = classifyCharacter(code);
        open = !after || after === 2 && before;
        close = !before || before === 2 && after;
        token._open = marker === 42 ? open : open && (before || !close);
        token._close = marker === 42 ? close : close && (after || !open);
        return ok(code);
      }
    }
    module.exports = attention;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/character/ascii-alpha.js
var require_ascii_alpha = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/character/ascii-alpha.js"(exports, module) {
    "use strict";
    init_react();
    var regexCheck = require_regex_check();
    var asciiAlpha = regexCheck(/[A-Za-z]/);
    module.exports = asciiAlpha;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/character/ascii-alphanumeric.js
var require_ascii_alphanumeric = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/character/ascii-alphanumeric.js"(exports, module) {
    "use strict";
    init_react();
    var regexCheck = require_regex_check();
    var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
    module.exports = asciiAlphanumeric;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/character/ascii-atext.js
var require_ascii_atext = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/character/ascii-atext.js"(exports, module) {
    "use strict";
    init_react();
    var regexCheck = require_regex_check();
    var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
    module.exports = asciiAtext;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/character/ascii-control.js
var require_ascii_control = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/character/ascii-control.js"(exports, module) {
    "use strict";
    init_react();
    function asciiControl(code) {
      return code < 32 || code === 127;
    }
    module.exports = asciiControl;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/autolink.js
var require_autolink = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/autolink.js"(exports, module) {
    "use strict";
    init_react();
    var asciiAlpha = require_ascii_alpha();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var asciiAtext = require_ascii_atext();
    var asciiControl = require_ascii_control();
    var autolink = {
      name: "autolink",
      tokenize: tokenizeAutolink
    };
    function tokenizeAutolink(effects, ok, nok) {
      var size = 1;
      return start;
      function start(code) {
        effects.enter("autolink");
        effects.enter("autolinkMarker");
        effects.consume(code);
        effects.exit("autolinkMarker");
        effects.enter("autolinkProtocol");
        return open;
      }
      function open(code) {
        if (asciiAlpha(code)) {
          effects.consume(code);
          return schemeOrEmailAtext;
        }
        return asciiAtext(code) ? emailAtext(code) : nok(code);
      }
      function schemeOrEmailAtext(code) {
        return code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code) ? schemeInsideOrEmailAtext(code) : emailAtext(code);
      }
      function schemeInsideOrEmailAtext(code) {
        if (code === 58) {
          effects.consume(code);
          return urlInside;
        }
        if ((code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) && size++ < 32) {
          effects.consume(code);
          return schemeInsideOrEmailAtext;
        }
        return emailAtext(code);
      }
      function urlInside(code) {
        if (code === 62) {
          effects.exit("autolinkProtocol");
          return end(code);
        }
        if (code === 32 || code === 60 || asciiControl(code)) {
          return nok(code);
        }
        effects.consume(code);
        return urlInside;
      }
      function emailAtext(code) {
        if (code === 64) {
          effects.consume(code);
          size = 0;
          return emailAtSignOrDot;
        }
        if (asciiAtext(code)) {
          effects.consume(code);
          return emailAtext;
        }
        return nok(code);
      }
      function emailAtSignOrDot(code) {
        return asciiAlphanumeric(code) ? emailLabel(code) : nok(code);
      }
      function emailLabel(code) {
        if (code === 46) {
          effects.consume(code);
          size = 0;
          return emailAtSignOrDot;
        }
        if (code === 62) {
          effects.exit("autolinkProtocol").type = "autolinkEmail";
          return end(code);
        }
        return emailValue(code);
      }
      function emailValue(code) {
        if ((code === 45 || asciiAlphanumeric(code)) && size++ < 63) {
          effects.consume(code);
          return code === 45 ? emailValue : emailLabel;
        }
        return nok(code);
      }
      function end(code) {
        effects.enter("autolinkMarker");
        effects.consume(code);
        effects.exit("autolinkMarker");
        effects.exit("autolink");
        return ok;
      }
    }
    module.exports = autolink;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/block-quote.js
var require_block_quote = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/block-quote.js"(exports, module) {
    "use strict";
    init_react();
    var markdownSpace = require_markdown_space();
    var factorySpace = require_factory_space();
    var blockQuote = {
      name: "blockQuote",
      tokenize: tokenizeBlockQuoteStart,
      continuation: {
        tokenize: tokenizeBlockQuoteContinuation
      },
      exit
    };
    function tokenizeBlockQuoteStart(effects, ok, nok) {
      var self = this;
      return start;
      function start(code) {
        if (code === 62) {
          if (!self.containerState.open) {
            effects.enter("blockQuote", {
              _container: true
            });
            self.containerState.open = true;
          }
          effects.enter("blockQuotePrefix");
          effects.enter("blockQuoteMarker");
          effects.consume(code);
          effects.exit("blockQuoteMarker");
          return after;
        }
        return nok(code);
      }
      function after(code) {
        if (markdownSpace(code)) {
          effects.enter("blockQuotePrefixWhitespace");
          effects.consume(code);
          effects.exit("blockQuotePrefixWhitespace");
          effects.exit("blockQuotePrefix");
          return ok;
        }
        effects.exit("blockQuotePrefix");
        return ok(code);
      }
    }
    function tokenizeBlockQuoteContinuation(effects, ok, nok) {
      return factorySpace(effects, effects.attempt(blockQuote, ok, nok), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
    }
    function exit(effects) {
      effects.exit("blockQuote");
    }
    module.exports = blockQuote;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/character/ascii-punctuation.js
var require_ascii_punctuation = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/character/ascii-punctuation.js"(exports, module) {
    "use strict";
    init_react();
    var regexCheck = require_regex_check();
    var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
    module.exports = asciiPunctuation;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/character-escape.js
var require_character_escape = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/character-escape.js"(exports, module) {
    "use strict";
    init_react();
    var asciiPunctuation = require_ascii_punctuation();
    var characterEscape = {
      name: "characterEscape",
      tokenize: tokenizeCharacterEscape
    };
    function tokenizeCharacterEscape(effects, ok, nok) {
      return start;
      function start(code) {
        effects.enter("characterEscape");
        effects.enter("escapeMarker");
        effects.consume(code);
        effects.exit("escapeMarker");
        return open;
      }
      function open(code) {
        if (asciiPunctuation(code)) {
          effects.enter("characterEscapeValue");
          effects.consume(code);
          effects.exit("characterEscapeValue");
          effects.exit("characterEscape");
          return ok;
        }
        return nok(code);
      }
    }
    module.exports = characterEscape;
  }
});

// node_modules/parse-entities/decode-entity.browser.js
var require_decode_entity_browser = __commonJS({
  "node_modules/parse-entities/decode-entity.browser.js"(exports, module) {
    "use strict";
    init_react();
    var el;
    var semicolon = 59;
    module.exports = decodeEntity;
    function decodeEntity(characters) {
      var entity = "&" + characters + ";";
      var char;
      el = el || document.createElement("i");
      el.innerHTML = entity;
      char = el.textContent;
      if (char.charCodeAt(char.length - 1) === semicolon && characters !== "semi") {
        return false;
      }
      return char === entity ? false : char;
    }
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/character/ascii-digit.js
var require_ascii_digit = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/character/ascii-digit.js"(exports, module) {
    "use strict";
    init_react();
    var regexCheck = require_regex_check();
    var asciiDigit = regexCheck(/\d/);
    module.exports = asciiDigit;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/character/ascii-hex-digit.js
var require_ascii_hex_digit = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/character/ascii-hex-digit.js"(exports, module) {
    "use strict";
    init_react();
    var regexCheck = require_regex_check();
    var asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
    module.exports = asciiHexDigit;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/character-reference.js
var require_character_reference = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/character-reference.js"(exports, module) {
    "use strict";
    init_react();
    var decodeEntity = require_decode_entity_browser();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var asciiDigit = require_ascii_digit();
    var asciiHexDigit = require_ascii_hex_digit();
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { default: e };
    }
    var decodeEntity__default = /* @__PURE__ */ _interopDefaultLegacy(decodeEntity);
    var characterReference = {
      name: "characterReference",
      tokenize: tokenizeCharacterReference
    };
    function tokenizeCharacterReference(effects, ok, nok) {
      var self = this;
      var size = 0;
      var max;
      var test;
      return start;
      function start(code) {
        effects.enter("characterReference");
        effects.enter("characterReferenceMarker");
        effects.consume(code);
        effects.exit("characterReferenceMarker");
        return open;
      }
      function open(code) {
        if (code === 35) {
          effects.enter("characterReferenceMarkerNumeric");
          effects.consume(code);
          effects.exit("characterReferenceMarkerNumeric");
          return numeric;
        }
        effects.enter("characterReferenceValue");
        max = 31;
        test = asciiAlphanumeric;
        return value(code);
      }
      function numeric(code) {
        if (code === 88 || code === 120) {
          effects.enter("characterReferenceMarkerHexadecimal");
          effects.consume(code);
          effects.exit("characterReferenceMarkerHexadecimal");
          effects.enter("characterReferenceValue");
          max = 6;
          test = asciiHexDigit;
          return value;
        }
        effects.enter("characterReferenceValue");
        max = 7;
        test = asciiDigit;
        return value(code);
      }
      function value(code) {
        var token;
        if (code === 59 && size) {
          token = effects.exit("characterReferenceValue");
          if (test === asciiAlphanumeric && !decodeEntity__default["default"](self.sliceSerialize(token))) {
            return nok(code);
          }
          effects.enter("characterReferenceMarker");
          effects.consume(code);
          effects.exit("characterReferenceMarker");
          effects.exit("characterReference");
          return ok;
        }
        if (test(code) && size++ < max) {
          effects.consume(code);
          return value;
        }
        return nok(code);
      }
    }
    module.exports = characterReference;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/code-fenced.js
var require_code_fenced = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/code-fenced.js"(exports, module) {
    "use strict";
    init_react();
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var prefixSize = require_prefix_size();
    var factorySpace = require_factory_space();
    var codeFenced = {
      name: "codeFenced",
      tokenize: tokenizeCodeFenced,
      concrete: true
    };
    function tokenizeCodeFenced(effects, ok, nok) {
      var self = this;
      var closingFenceConstruct = {
        tokenize: tokenizeClosingFence,
        partial: true
      };
      var initialPrefix = prefixSize(this.events, "linePrefix");
      var sizeOpen = 0;
      var marker;
      return start;
      function start(code) {
        effects.enter("codeFenced");
        effects.enter("codeFencedFence");
        effects.enter("codeFencedFenceSequence");
        marker = code;
        return sequenceOpen(code);
      }
      function sequenceOpen(code) {
        if (code === marker) {
          effects.consume(code);
          sizeOpen++;
          return sequenceOpen;
        }
        effects.exit("codeFencedFenceSequence");
        return sizeOpen < 3 ? nok(code) : factorySpace(effects, infoOpen, "whitespace")(code);
      }
      function infoOpen(code) {
        if (code === null || markdownLineEnding(code)) {
          return openAfter(code);
        }
        effects.enter("codeFencedFenceInfo");
        effects.enter("chunkString", {
          contentType: "string"
        });
        return info(code);
      }
      function info(code) {
        if (code === null || markdownLineEndingOrSpace(code)) {
          effects.exit("chunkString");
          effects.exit("codeFencedFenceInfo");
          return factorySpace(effects, infoAfter, "whitespace")(code);
        }
        if (code === 96 && code === marker)
          return nok(code);
        effects.consume(code);
        return info;
      }
      function infoAfter(code) {
        if (code === null || markdownLineEnding(code)) {
          return openAfter(code);
        }
        effects.enter("codeFencedFenceMeta");
        effects.enter("chunkString", {
          contentType: "string"
        });
        return meta(code);
      }
      function meta(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("chunkString");
          effects.exit("codeFencedFenceMeta");
          return openAfter(code);
        }
        if (code === 96 && code === marker)
          return nok(code);
        effects.consume(code);
        return meta;
      }
      function openAfter(code) {
        effects.exit("codeFencedFence");
        return self.interrupt ? ok(code) : content(code);
      }
      function content(code) {
        if (code === null) {
          return after(code);
        }
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return effects.attempt(closingFenceConstruct, after, initialPrefix ? factorySpace(effects, content, "linePrefix", initialPrefix + 1) : content);
        }
        effects.enter("codeFlowValue");
        return contentContinue(code);
      }
      function contentContinue(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("codeFlowValue");
          return content(code);
        }
        effects.consume(code);
        return contentContinue;
      }
      function after(code) {
        effects.exit("codeFenced");
        return ok(code);
      }
      function tokenizeClosingFence(effects2, ok2, nok2) {
        var size = 0;
        return factorySpace(effects2, closingSequenceStart, "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
        function closingSequenceStart(code) {
          effects2.enter("codeFencedFence");
          effects2.enter("codeFencedFenceSequence");
          return closingSequence(code);
        }
        function closingSequence(code) {
          if (code === marker) {
            effects2.consume(code);
            size++;
            return closingSequence;
          }
          if (size < sizeOpen)
            return nok2(code);
          effects2.exit("codeFencedFenceSequence");
          return factorySpace(effects2, closingSequenceEnd, "whitespace")(code);
        }
        function closingSequenceEnd(code) {
          if (code === null || markdownLineEnding(code)) {
            effects2.exit("codeFencedFence");
            return ok2(code);
          }
          return nok2(code);
        }
      }
    }
    module.exports = codeFenced;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/code-indented.js
var require_code_indented = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/code-indented.js"(exports, module) {
    "use strict";
    init_react();
    var markdownLineEnding = require_markdown_line_ending();
    var chunkedSplice = require_chunked_splice();
    var prefixSize = require_prefix_size();
    var factorySpace = require_factory_space();
    var codeIndented = {
      name: "codeIndented",
      tokenize: tokenizeCodeIndented,
      resolve: resolveCodeIndented
    };
    var indentedContentConstruct = {
      tokenize: tokenizeIndentedContent,
      partial: true
    };
    function resolveCodeIndented(events, context) {
      var code = {
        type: "codeIndented",
        start: events[0][1].start,
        end: events[events.length - 1][1].end
      };
      chunkedSplice(events, 0, 0, [["enter", code, context]]);
      chunkedSplice(events, events.length, 0, [["exit", code, context]]);
      return events;
    }
    function tokenizeCodeIndented(effects, ok, nok) {
      return effects.attempt(indentedContentConstruct, afterPrefix, nok);
      function afterPrefix(code) {
        if (code === null) {
          return ok(code);
        }
        if (markdownLineEnding(code)) {
          return effects.attempt(indentedContentConstruct, afterPrefix, ok)(code);
        }
        effects.enter("codeFlowValue");
        return content(code);
      }
      function content(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("codeFlowValue");
          return afterPrefix(code);
        }
        effects.consume(code);
        return content;
      }
    }
    function tokenizeIndentedContent(effects, ok, nok) {
      var self = this;
      return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1);
      function afterPrefix(code) {
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1);
        }
        return prefixSize(self.events, "linePrefix") < 4 ? nok(code) : ok(code);
      }
    }
    module.exports = codeIndented;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/code-text.js
var require_code_text = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/code-text.js"(exports, module) {
    "use strict";
    init_react();
    var markdownLineEnding = require_markdown_line_ending();
    var codeText = {
      name: "codeText",
      tokenize: tokenizeCodeText,
      resolve: resolveCodeText,
      previous
    };
    function resolveCodeText(events) {
      var tailExitIndex = events.length - 4;
      var headEnterIndex = 3;
      var index;
      var enter;
      if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
        index = headEnterIndex;
        while (++index < tailExitIndex) {
          if (events[index][1].type === "codeTextData") {
            events[tailExitIndex][1].type = events[headEnterIndex][1].type = "codeTextPadding";
            headEnterIndex += 2;
            tailExitIndex -= 2;
            break;
          }
        }
      }
      index = headEnterIndex - 1;
      tailExitIndex++;
      while (++index <= tailExitIndex) {
        if (enter === void 0) {
          if (index !== tailExitIndex && events[index][1].type !== "lineEnding") {
            enter = index;
          }
        } else if (index === tailExitIndex || events[index][1].type === "lineEnding") {
          events[enter][1].type = "codeTextData";
          if (index !== enter + 2) {
            events[enter][1].end = events[index - 1][1].end;
            events.splice(enter + 2, index - enter - 2);
            tailExitIndex -= index - enter - 2;
            index = enter + 2;
          }
          enter = void 0;
        }
      }
      return events;
    }
    function previous(code) {
      return code !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
    }
    function tokenizeCodeText(effects, ok, nok) {
      var sizeOpen = 0;
      var size;
      var token;
      return start;
      function start(code) {
        effects.enter("codeText");
        effects.enter("codeTextSequence");
        return openingSequence(code);
      }
      function openingSequence(code) {
        if (code === 96) {
          effects.consume(code);
          sizeOpen++;
          return openingSequence;
        }
        effects.exit("codeTextSequence");
        return gap(code);
      }
      function gap(code) {
        if (code === null) {
          return nok(code);
        }
        if (code === 96) {
          token = effects.enter("codeTextSequence");
          size = 0;
          return closingSequence(code);
        }
        if (code === 32) {
          effects.enter("space");
          effects.consume(code);
          effects.exit("space");
          return gap;
        }
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return gap;
        }
        effects.enter("codeTextData");
        return data(code);
      }
      function data(code) {
        if (code === null || code === 32 || code === 96 || markdownLineEnding(code)) {
          effects.exit("codeTextData");
          return gap(code);
        }
        effects.consume(code);
        return data;
      }
      function closingSequence(code) {
        if (code === 96) {
          effects.consume(code);
          size++;
          return closingSequence;
        }
        if (size === sizeOpen) {
          effects.exit("codeTextSequence");
          effects.exit("codeText");
          return ok(code);
        }
        token.type = "codeTextData";
        return data(code);
      }
    }
    module.exports = codeText;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/factory-destination.js
var require_factory_destination = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/factory-destination.js"(exports, module) {
    "use strict";
    init_react();
    var asciiControl = require_ascii_control();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var markdownLineEnding = require_markdown_line_ending();
    function destinationFactory(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
      var limit = max || Infinity;
      var balance = 0;
      return start;
      function start(code) {
        if (code === 60) {
          effects.enter(type);
          effects.enter(literalType);
          effects.enter(literalMarkerType);
          effects.consume(code);
          effects.exit(literalMarkerType);
          return destinationEnclosedBefore;
        }
        if (asciiControl(code) || code === 41) {
          return nok(code);
        }
        effects.enter(type);
        effects.enter(rawType);
        effects.enter(stringType);
        effects.enter("chunkString", {
          contentType: "string"
        });
        return destinationRaw(code);
      }
      function destinationEnclosedBefore(code) {
        if (code === 62) {
          effects.enter(literalMarkerType);
          effects.consume(code);
          effects.exit(literalMarkerType);
          effects.exit(literalType);
          effects.exit(type);
          return ok;
        }
        effects.enter(stringType);
        effects.enter("chunkString", {
          contentType: "string"
        });
        return destinationEnclosed(code);
      }
      function destinationEnclosed(code) {
        if (code === 62) {
          effects.exit("chunkString");
          effects.exit(stringType);
          return destinationEnclosedBefore(code);
        }
        if (code === null || code === 60 || markdownLineEnding(code)) {
          return nok(code);
        }
        effects.consume(code);
        return code === 92 ? destinationEnclosedEscape : destinationEnclosed;
      }
      function destinationEnclosedEscape(code) {
        if (code === 60 || code === 62 || code === 92) {
          effects.consume(code);
          return destinationEnclosed;
        }
        return destinationEnclosed(code);
      }
      function destinationRaw(code) {
        if (code === 40) {
          if (++balance > limit)
            return nok(code);
          effects.consume(code);
          return destinationRaw;
        }
        if (code === 41) {
          if (!balance--) {
            effects.exit("chunkString");
            effects.exit(stringType);
            effects.exit(rawType);
            effects.exit(type);
            return ok(code);
          }
          effects.consume(code);
          return destinationRaw;
        }
        if (code === null || markdownLineEndingOrSpace(code)) {
          if (balance)
            return nok(code);
          effects.exit("chunkString");
          effects.exit(stringType);
          effects.exit(rawType);
          effects.exit(type);
          return ok(code);
        }
        if (asciiControl(code))
          return nok(code);
        effects.consume(code);
        return code === 92 ? destinationRawEscape : destinationRaw;
      }
      function destinationRawEscape(code) {
        if (code === 40 || code === 41 || code === 92) {
          effects.consume(code);
          return destinationRaw;
        }
        return destinationRaw(code);
      }
    }
    module.exports = destinationFactory;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/factory-label.js
var require_factory_label = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/factory-label.js"(exports, module) {
    "use strict";
    init_react();
    var markdownLineEnding = require_markdown_line_ending();
    var markdownSpace = require_markdown_space();
    function labelFactory(effects, ok, nok, type, markerType, stringType) {
      var self = this;
      var size = 0;
      var data;
      return start;
      function start(code) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        effects.enter(stringType);
        return atBreak;
      }
      function atBreak(code) {
        if (code === null || code === 91 || code === 93 && !data || code === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs || size > 999) {
          return nok(code);
        }
        if (code === 93) {
          effects.exit(stringType);
          effects.enter(markerType);
          effects.consume(code);
          effects.exit(markerType);
          effects.exit(type);
          return ok;
        }
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return atBreak;
        }
        effects.enter("chunkString", {
          contentType: "string"
        });
        return label(code);
      }
      function label(code) {
        if (code === null || code === 91 || code === 93 || markdownLineEnding(code) || size++ > 999) {
          effects.exit("chunkString");
          return atBreak(code);
        }
        effects.consume(code);
        data = data || !markdownSpace(code);
        return code === 92 ? labelEscape : label;
      }
      function labelEscape(code) {
        if (code === 91 || code === 92 || code === 93) {
          effects.consume(code);
          size++;
          return label;
        }
        return label(code);
      }
    }
    module.exports = labelFactory;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/factory-whitespace.js
var require_factory_whitespace = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/factory-whitespace.js"(exports, module) {
    "use strict";
    init_react();
    var markdownLineEnding = require_markdown_line_ending();
    var markdownSpace = require_markdown_space();
    var factorySpace = require_factory_space();
    function whitespaceFactory(effects, ok) {
      var seen;
      return start;
      function start(code) {
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          seen = true;
          return start;
        }
        if (markdownSpace(code)) {
          return factorySpace(effects, start, seen ? "linePrefix" : "lineSuffix")(code);
        }
        return ok(code);
      }
    }
    module.exports = whitespaceFactory;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/factory-title.js
var require_factory_title = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/factory-title.js"(exports, module) {
    "use strict";
    init_react();
    var markdownLineEnding = require_markdown_line_ending();
    var factorySpace = require_factory_space();
    function titleFactory(effects, ok, nok, type, markerType, stringType) {
      var marker;
      return start;
      function start(code) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        marker = code === 40 ? 41 : code;
        return atFirstTitleBreak;
      }
      function atFirstTitleBreak(code) {
        if (code === marker) {
          effects.enter(markerType);
          effects.consume(code);
          effects.exit(markerType);
          effects.exit(type);
          return ok;
        }
        effects.enter(stringType);
        return atTitleBreak(code);
      }
      function atTitleBreak(code) {
        if (code === marker) {
          effects.exit(stringType);
          return atFirstTitleBreak(marker);
        }
        if (code === null) {
          return nok(code);
        }
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return factorySpace(effects, atTitleBreak, "linePrefix");
        }
        effects.enter("chunkString", {
          contentType: "string"
        });
        return title(code);
      }
      function title(code) {
        if (code === marker || code === null || markdownLineEnding(code)) {
          effects.exit("chunkString");
          return atTitleBreak(code);
        }
        effects.consume(code);
        return code === 92 ? titleEscape : title;
      }
      function titleEscape(code) {
        if (code === marker || code === 92) {
          effects.consume(code);
          return title;
        }
        return title(code);
      }
    }
    module.exports = titleFactory;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/definition.js
var require_definition = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/definition.js"(exports, module) {
    "use strict";
    init_react();
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var normalizeIdentifier = require_normalize_identifier();
    var factoryDestination = require_factory_destination();
    var factoryLabel = require_factory_label();
    var factorySpace = require_factory_space();
    var factoryWhitespace = require_factory_whitespace();
    var factoryTitle = require_factory_title();
    var definition = {
      name: "definition",
      tokenize: tokenizeDefinition
    };
    var titleConstruct = {
      tokenize: tokenizeTitle,
      partial: true
    };
    function tokenizeDefinition(effects, ok, nok) {
      var self = this;
      var identifier;
      return start;
      function start(code) {
        effects.enter("definition");
        return factoryLabel.call(self, effects, labelAfter, nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code);
      }
      function labelAfter(code) {
        identifier = normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));
        if (code === 58) {
          effects.enter("definitionMarker");
          effects.consume(code);
          effects.exit("definitionMarker");
          return factoryWhitespace(effects, factoryDestination(effects, effects.attempt(titleConstruct, factorySpace(effects, after, "whitespace"), factorySpace(effects, after, "whitespace")), nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"));
        }
        return nok(code);
      }
      function after(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("definition");
          if (self.parser.defined.indexOf(identifier) < 0) {
            self.parser.defined.push(identifier);
          }
          return ok(code);
        }
        return nok(code);
      }
    }
    function tokenizeTitle(effects, ok, nok) {
      return start;
      function start(code) {
        return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, before)(code) : nok(code);
      }
      function before(code) {
        if (code === 34 || code === 39 || code === 40) {
          return factoryTitle(effects, factorySpace(effects, after, "whitespace"), nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code);
        }
        return nok(code);
      }
      function after(code) {
        return code === null || markdownLineEnding(code) ? ok(code) : nok(code);
      }
    }
    module.exports = definition;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/hard-break-escape.js
var require_hard_break_escape = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/hard-break-escape.js"(exports, module) {
    "use strict";
    init_react();
    var markdownLineEnding = require_markdown_line_ending();
    var hardBreakEscape = {
      name: "hardBreakEscape",
      tokenize: tokenizeHardBreakEscape
    };
    function tokenizeHardBreakEscape(effects, ok, nok) {
      return start;
      function start(code) {
        effects.enter("hardBreakEscape");
        effects.enter("escapeMarker");
        effects.consume(code);
        return open;
      }
      function open(code) {
        if (markdownLineEnding(code)) {
          effects.exit("escapeMarker");
          effects.exit("hardBreakEscape");
          return ok(code);
        }
        return nok(code);
      }
    }
    module.exports = hardBreakEscape;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/heading-atx.js
var require_heading_atx = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/heading-atx.js"(exports, module) {
    "use strict";
    init_react();
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var markdownSpace = require_markdown_space();
    var chunkedSplice = require_chunked_splice();
    var factorySpace = require_factory_space();
    var headingAtx = {
      name: "headingAtx",
      tokenize: tokenizeHeadingAtx,
      resolve: resolveHeadingAtx
    };
    function resolveHeadingAtx(events, context) {
      var contentEnd = events.length - 2;
      var contentStart = 3;
      var content;
      var text;
      if (events[contentStart][1].type === "whitespace") {
        contentStart += 2;
      }
      if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
        contentEnd -= 2;
      }
      if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
        contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
      }
      if (contentEnd > contentStart) {
        content = {
          type: "atxHeadingText",
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end
        };
        text = {
          type: "chunkText",
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end,
          contentType: "text"
        };
        chunkedSplice(events, contentStart, contentEnd - contentStart + 1, [
          ["enter", content, context],
          ["enter", text, context],
          ["exit", text, context],
          ["exit", content, context]
        ]);
      }
      return events;
    }
    function tokenizeHeadingAtx(effects, ok, nok) {
      var self = this;
      var size = 0;
      return start;
      function start(code) {
        effects.enter("atxHeading");
        effects.enter("atxHeadingSequence");
        return fenceOpenInside(code);
      }
      function fenceOpenInside(code) {
        if (code === 35 && size++ < 6) {
          effects.consume(code);
          return fenceOpenInside;
        }
        if (code === null || markdownLineEndingOrSpace(code)) {
          effects.exit("atxHeadingSequence");
          return self.interrupt ? ok(code) : headingBreak(code);
        }
        return nok(code);
      }
      function headingBreak(code) {
        if (code === 35) {
          effects.enter("atxHeadingSequence");
          return sequence(code);
        }
        if (code === null || markdownLineEnding(code)) {
          effects.exit("atxHeading");
          return ok(code);
        }
        if (markdownSpace(code)) {
          return factorySpace(effects, headingBreak, "whitespace")(code);
        }
        effects.enter("atxHeadingText");
        return data(code);
      }
      function sequence(code) {
        if (code === 35) {
          effects.consume(code);
          return sequence;
        }
        effects.exit("atxHeadingSequence");
        return headingBreak(code);
      }
      function data(code) {
        if (code === null || code === 35 || markdownLineEndingOrSpace(code)) {
          effects.exit("atxHeadingText");
          return headingBreak(code);
        }
        effects.consume(code);
        return data;
      }
    }
    module.exports = headingAtx;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/constant/html-block-names.js
var require_html_block_names = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/constant/html-block-names.js"(exports, module) {
    "use strict";
    init_react();
    var basics = [
      "address",
      "article",
      "aside",
      "base",
      "basefont",
      "blockquote",
      "body",
      "caption",
      "center",
      "col",
      "colgroup",
      "dd",
      "details",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hr",
      "html",
      "iframe",
      "legend",
      "li",
      "link",
      "main",
      "menu",
      "menuitem",
      "nav",
      "noframes",
      "ol",
      "optgroup",
      "option",
      "p",
      "param",
      "section",
      "source",
      "summary",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "title",
      "tr",
      "track",
      "ul"
    ];
    module.exports = basics;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/constant/html-raw-names.js
var require_html_raw_names = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/constant/html-raw-names.js"(exports, module) {
    "use strict";
    init_react();
    var raws = ["pre", "script", "style", "textarea"];
    module.exports = raws;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/html-flow.js
var require_html_flow = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/html-flow.js"(exports, module) {
    "use strict";
    init_react();
    var asciiAlpha = require_ascii_alpha();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var markdownSpace = require_markdown_space();
    var fromCharCode = require_from_char_code();
    var htmlBlockNames = require_html_block_names();
    var htmlRawNames = require_html_raw_names();
    var partialBlankLine = require_partial_blank_line();
    var htmlFlow = {
      name: "htmlFlow",
      tokenize: tokenizeHtmlFlow,
      resolveTo: resolveToHtmlFlow,
      concrete: true
    };
    var nextBlankConstruct = {
      tokenize: tokenizeNextBlank,
      partial: true
    };
    function resolveToHtmlFlow(events) {
      var index = events.length;
      while (index--) {
        if (events[index][0] === "enter" && events[index][1].type === "htmlFlow") {
          break;
        }
      }
      if (index > 1 && events[index - 2][1].type === "linePrefix") {
        events[index][1].start = events[index - 2][1].start;
        events[index + 1][1].start = events[index - 2][1].start;
        events.splice(index - 2, 2);
      }
      return events;
    }
    function tokenizeHtmlFlow(effects, ok, nok) {
      var self = this;
      var kind;
      var startTag;
      var buffer;
      var index;
      var marker;
      return start;
      function start(code) {
        effects.enter("htmlFlow");
        effects.enter("htmlFlowData");
        effects.consume(code);
        return open;
      }
      function open(code) {
        if (code === 33) {
          effects.consume(code);
          return declarationStart;
        }
        if (code === 47) {
          effects.consume(code);
          return tagCloseStart;
        }
        if (code === 63) {
          effects.consume(code);
          kind = 3;
          return self.interrupt ? ok : continuationDeclarationInside;
        }
        if (asciiAlpha(code)) {
          effects.consume(code);
          buffer = fromCharCode(code);
          startTag = true;
          return tagName;
        }
        return nok(code);
      }
      function declarationStart(code) {
        if (code === 45) {
          effects.consume(code);
          kind = 2;
          return commentOpenInside;
        }
        if (code === 91) {
          effects.consume(code);
          kind = 5;
          buffer = "CDATA[";
          index = 0;
          return cdataOpenInside;
        }
        if (asciiAlpha(code)) {
          effects.consume(code);
          kind = 4;
          return self.interrupt ? ok : continuationDeclarationInside;
        }
        return nok(code);
      }
      function commentOpenInside(code) {
        if (code === 45) {
          effects.consume(code);
          return self.interrupt ? ok : continuationDeclarationInside;
        }
        return nok(code);
      }
      function cdataOpenInside(code) {
        if (code === buffer.charCodeAt(index++)) {
          effects.consume(code);
          return index === buffer.length ? self.interrupt ? ok : continuation : cdataOpenInside;
        }
        return nok(code);
      }
      function tagCloseStart(code) {
        if (asciiAlpha(code)) {
          effects.consume(code);
          buffer = fromCharCode(code);
          return tagName;
        }
        return nok(code);
      }
      function tagName(code) {
        if (code === null || code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
          if (code !== 47 && startTag && htmlRawNames.indexOf(buffer.toLowerCase()) > -1) {
            kind = 1;
            return self.interrupt ? ok(code) : continuation(code);
          }
          if (htmlBlockNames.indexOf(buffer.toLowerCase()) > -1) {
            kind = 6;
            if (code === 47) {
              effects.consume(code);
              return basicSelfClosing;
            }
            return self.interrupt ? ok(code) : continuation(code);
          }
          kind = 7;
          return self.interrupt ? nok(code) : startTag ? completeAttributeNameBefore(code) : completeClosingTagAfter(code);
        }
        if (code === 45 || asciiAlphanumeric(code)) {
          effects.consume(code);
          buffer += fromCharCode(code);
          return tagName;
        }
        return nok(code);
      }
      function basicSelfClosing(code) {
        if (code === 62) {
          effects.consume(code);
          return self.interrupt ? ok : continuation;
        }
        return nok(code);
      }
      function completeClosingTagAfter(code) {
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeClosingTagAfter;
        }
        return completeEnd(code);
      }
      function completeAttributeNameBefore(code) {
        if (code === 47) {
          effects.consume(code);
          return completeEnd;
        }
        if (code === 58 || code === 95 || asciiAlpha(code)) {
          effects.consume(code);
          return completeAttributeName;
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeAttributeNameBefore;
        }
        return completeEnd(code);
      }
      function completeAttributeName(code) {
        if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
          effects.consume(code);
          return completeAttributeName;
        }
        return completeAttributeNameAfter(code);
      }
      function completeAttributeNameAfter(code) {
        if (code === 61) {
          effects.consume(code);
          return completeAttributeValueBefore;
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeAttributeNameAfter;
        }
        return completeAttributeNameBefore(code);
      }
      function completeAttributeValueBefore(code) {
        if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
          return nok(code);
        }
        if (code === 34 || code === 39) {
          effects.consume(code);
          marker = code;
          return completeAttributeValueQuoted;
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeAttributeValueBefore;
        }
        marker = void 0;
        return completeAttributeValueUnquoted(code);
      }
      function completeAttributeValueQuoted(code) {
        if (code === marker) {
          effects.consume(code);
          return completeAttributeValueQuotedAfter;
        }
        if (code === null || markdownLineEnding(code)) {
          return nok(code);
        }
        effects.consume(code);
        return completeAttributeValueQuoted;
      }
      function completeAttributeValueUnquoted(code) {
        if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 62 || code === 96 || markdownLineEndingOrSpace(code)) {
          return completeAttributeNameAfter(code);
        }
        effects.consume(code);
        return completeAttributeValueUnquoted;
      }
      function completeAttributeValueQuotedAfter(code) {
        if (code === 47 || code === 62 || markdownSpace(code)) {
          return completeAttributeNameBefore(code);
        }
        return nok(code);
      }
      function completeEnd(code) {
        if (code === 62) {
          effects.consume(code);
          return completeAfter;
        }
        return nok(code);
      }
      function completeAfter(code) {
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeAfter;
        }
        return code === null || markdownLineEnding(code) ? continuation(code) : nok(code);
      }
      function continuation(code) {
        if (code === 45 && kind === 2) {
          effects.consume(code);
          return continuationCommentInside;
        }
        if (code === 60 && kind === 1) {
          effects.consume(code);
          return continuationRawTagOpen;
        }
        if (code === 62 && kind === 4) {
          effects.consume(code);
          return continuationClose;
        }
        if (code === 63 && kind === 3) {
          effects.consume(code);
          return continuationDeclarationInside;
        }
        if (code === 93 && kind === 5) {
          effects.consume(code);
          return continuationCharacterDataInside;
        }
        if (markdownLineEnding(code) && (kind === 6 || kind === 7)) {
          return effects.check(nextBlankConstruct, continuationClose, continuationAtLineEnding)(code);
        }
        if (code === null || markdownLineEnding(code)) {
          return continuationAtLineEnding(code);
        }
        effects.consume(code);
        return continuation;
      }
      function continuationAtLineEnding(code) {
        effects.exit("htmlFlowData");
        return htmlContinueStart(code);
      }
      function htmlContinueStart(code) {
        if (code === null) {
          return done(code);
        }
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return htmlContinueStart;
        }
        effects.enter("htmlFlowData");
        return continuation(code);
      }
      function continuationCommentInside(code) {
        if (code === 45) {
          effects.consume(code);
          return continuationDeclarationInside;
        }
        return continuation(code);
      }
      function continuationRawTagOpen(code) {
        if (code === 47) {
          effects.consume(code);
          buffer = "";
          return continuationRawEndTag;
        }
        return continuation(code);
      }
      function continuationRawEndTag(code) {
        if (code === 62 && htmlRawNames.indexOf(buffer.toLowerCase()) > -1) {
          effects.consume(code);
          return continuationClose;
        }
        if (asciiAlpha(code) && buffer.length < 8) {
          effects.consume(code);
          buffer += fromCharCode(code);
          return continuationRawEndTag;
        }
        return continuation(code);
      }
      function continuationCharacterDataInside(code) {
        if (code === 93) {
          effects.consume(code);
          return continuationDeclarationInside;
        }
        return continuation(code);
      }
      function continuationDeclarationInside(code) {
        if (code === 62) {
          effects.consume(code);
          return continuationClose;
        }
        return continuation(code);
      }
      function continuationClose(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("htmlFlowData");
          return done(code);
        }
        effects.consume(code);
        return continuationClose;
      }
      function done(code) {
        effects.exit("htmlFlow");
        return ok(code);
      }
    }
    function tokenizeNextBlank(effects, ok, nok) {
      return start;
      function start(code) {
        effects.exit("htmlFlowData");
        effects.enter("lineEndingBlank");
        effects.consume(code);
        effects.exit("lineEndingBlank");
        return effects.attempt(partialBlankLine, ok, nok);
      }
    }
    module.exports = htmlFlow;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/html-text.js
var require_html_text = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/html-text.js"(exports, module) {
    "use strict";
    init_react();
    var asciiAlpha = require_ascii_alpha();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var markdownSpace = require_markdown_space();
    var factorySpace = require_factory_space();
    var htmlText = {
      name: "htmlText",
      tokenize: tokenizeHtmlText
    };
    function tokenizeHtmlText(effects, ok, nok) {
      var self = this;
      var marker;
      var buffer;
      var index;
      var returnState;
      return start;
      function start(code) {
        effects.enter("htmlText");
        effects.enter("htmlTextData");
        effects.consume(code);
        return open;
      }
      function open(code) {
        if (code === 33) {
          effects.consume(code);
          return declarationOpen;
        }
        if (code === 47) {
          effects.consume(code);
          return tagCloseStart;
        }
        if (code === 63) {
          effects.consume(code);
          return instruction;
        }
        if (asciiAlpha(code)) {
          effects.consume(code);
          return tagOpen;
        }
        return nok(code);
      }
      function declarationOpen(code) {
        if (code === 45) {
          effects.consume(code);
          return commentOpen;
        }
        if (code === 91) {
          effects.consume(code);
          buffer = "CDATA[";
          index = 0;
          return cdataOpen;
        }
        if (asciiAlpha(code)) {
          effects.consume(code);
          return declaration;
        }
        return nok(code);
      }
      function commentOpen(code) {
        if (code === 45) {
          effects.consume(code);
          return commentStart;
        }
        return nok(code);
      }
      function commentStart(code) {
        if (code === null || code === 62) {
          return nok(code);
        }
        if (code === 45) {
          effects.consume(code);
          return commentStartDash;
        }
        return comment(code);
      }
      function commentStartDash(code) {
        if (code === null || code === 62) {
          return nok(code);
        }
        return comment(code);
      }
      function comment(code) {
        if (code === null) {
          return nok(code);
        }
        if (code === 45) {
          effects.consume(code);
          return commentClose;
        }
        if (markdownLineEnding(code)) {
          returnState = comment;
          return atLineEnding(code);
        }
        effects.consume(code);
        return comment;
      }
      function commentClose(code) {
        if (code === 45) {
          effects.consume(code);
          return end;
        }
        return comment(code);
      }
      function cdataOpen(code) {
        if (code === buffer.charCodeAt(index++)) {
          effects.consume(code);
          return index === buffer.length ? cdata : cdataOpen;
        }
        return nok(code);
      }
      function cdata(code) {
        if (code === null) {
          return nok(code);
        }
        if (code === 93) {
          effects.consume(code);
          return cdataClose;
        }
        if (markdownLineEnding(code)) {
          returnState = cdata;
          return atLineEnding(code);
        }
        effects.consume(code);
        return cdata;
      }
      function cdataClose(code) {
        if (code === 93) {
          effects.consume(code);
          return cdataEnd;
        }
        return cdata(code);
      }
      function cdataEnd(code) {
        if (code === 62) {
          return end(code);
        }
        if (code === 93) {
          effects.consume(code);
          return cdataEnd;
        }
        return cdata(code);
      }
      function declaration(code) {
        if (code === null || code === 62) {
          return end(code);
        }
        if (markdownLineEnding(code)) {
          returnState = declaration;
          return atLineEnding(code);
        }
        effects.consume(code);
        return declaration;
      }
      function instruction(code) {
        if (code === null) {
          return nok(code);
        }
        if (code === 63) {
          effects.consume(code);
          return instructionClose;
        }
        if (markdownLineEnding(code)) {
          returnState = instruction;
          return atLineEnding(code);
        }
        effects.consume(code);
        return instruction;
      }
      function instructionClose(code) {
        return code === 62 ? end(code) : instruction(code);
      }
      function tagCloseStart(code) {
        if (asciiAlpha(code)) {
          effects.consume(code);
          return tagClose;
        }
        return nok(code);
      }
      function tagClose(code) {
        if (code === 45 || asciiAlphanumeric(code)) {
          effects.consume(code);
          return tagClose;
        }
        return tagCloseBetween(code);
      }
      function tagCloseBetween(code) {
        if (markdownLineEnding(code)) {
          returnState = tagCloseBetween;
          return atLineEnding(code);
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return tagCloseBetween;
        }
        return end(code);
      }
      function tagOpen(code) {
        if (code === 45 || asciiAlphanumeric(code)) {
          effects.consume(code);
          return tagOpen;
        }
        if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
          return tagOpenBetween(code);
        }
        return nok(code);
      }
      function tagOpenBetween(code) {
        if (code === 47) {
          effects.consume(code);
          return end;
        }
        if (code === 58 || code === 95 || asciiAlpha(code)) {
          effects.consume(code);
          return tagOpenAttributeName;
        }
        if (markdownLineEnding(code)) {
          returnState = tagOpenBetween;
          return atLineEnding(code);
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return tagOpenBetween;
        }
        return end(code);
      }
      function tagOpenAttributeName(code) {
        if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
          effects.consume(code);
          return tagOpenAttributeName;
        }
        return tagOpenAttributeNameAfter(code);
      }
      function tagOpenAttributeNameAfter(code) {
        if (code === 61) {
          effects.consume(code);
          return tagOpenAttributeValueBefore;
        }
        if (markdownLineEnding(code)) {
          returnState = tagOpenAttributeNameAfter;
          return atLineEnding(code);
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return tagOpenAttributeNameAfter;
        }
        return tagOpenBetween(code);
      }
      function tagOpenAttributeValueBefore(code) {
        if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
          return nok(code);
        }
        if (code === 34 || code === 39) {
          effects.consume(code);
          marker = code;
          return tagOpenAttributeValueQuoted;
        }
        if (markdownLineEnding(code)) {
          returnState = tagOpenAttributeValueBefore;
          return atLineEnding(code);
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return tagOpenAttributeValueBefore;
        }
        effects.consume(code);
        marker = void 0;
        return tagOpenAttributeValueUnquoted;
      }
      function tagOpenAttributeValueQuoted(code) {
        if (code === marker) {
          effects.consume(code);
          return tagOpenAttributeValueQuotedAfter;
        }
        if (code === null) {
          return nok(code);
        }
        if (markdownLineEnding(code)) {
          returnState = tagOpenAttributeValueQuoted;
          return atLineEnding(code);
        }
        effects.consume(code);
        return tagOpenAttributeValueQuoted;
      }
      function tagOpenAttributeValueQuotedAfter(code) {
        if (code === 62 || code === 47 || markdownLineEndingOrSpace(code)) {
          return tagOpenBetween(code);
        }
        return nok(code);
      }
      function tagOpenAttributeValueUnquoted(code) {
        if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 96) {
          return nok(code);
        }
        if (code === 62 || markdownLineEndingOrSpace(code)) {
          return tagOpenBetween(code);
        }
        effects.consume(code);
        return tagOpenAttributeValueUnquoted;
      }
      function atLineEnding(code) {
        effects.exit("htmlTextData");
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace(effects, afterPrefix, "linePrefix", self.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
      }
      function afterPrefix(code) {
        effects.enter("htmlTextData");
        return returnState(code);
      }
      function end(code) {
        if (code === 62) {
          effects.consume(code);
          effects.exit("htmlTextData");
          effects.exit("htmlText");
          return ok;
        }
        return nok(code);
      }
    }
    module.exports = htmlText;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/label-end.js
var require_label_end = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/label-end.js"(exports, module) {
    "use strict";
    init_react();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var chunkedPush = require_chunked_push();
    var chunkedSplice = require_chunked_splice();
    var normalizeIdentifier = require_normalize_identifier();
    var resolveAll = require_resolve_all();
    var shallow = require_shallow();
    var factoryDestination = require_factory_destination();
    var factoryLabel = require_factory_label();
    var factoryTitle = require_factory_title();
    var factoryWhitespace = require_factory_whitespace();
    var labelEnd = {
      name: "labelEnd",
      tokenize: tokenizeLabelEnd,
      resolveTo: resolveToLabelEnd,
      resolveAll: resolveAllLabelEnd
    };
    var resourceConstruct = {
      tokenize: tokenizeResource
    };
    var fullReferenceConstruct = {
      tokenize: tokenizeFullReference
    };
    var collapsedReferenceConstruct = {
      tokenize: tokenizeCollapsedReference
    };
    function resolveAllLabelEnd(events) {
      var index = -1;
      var token;
      while (++index < events.length) {
        token = events[index][1];
        if (!token._used && (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd")) {
          events.splice(index + 1, token.type === "labelImage" ? 4 : 2);
          token.type = "data";
          index++;
        }
      }
      return events;
    }
    function resolveToLabelEnd(events, context) {
      var index = events.length;
      var offset = 0;
      var group;
      var label;
      var text;
      var token;
      var open;
      var close;
      var media;
      while (index--) {
        token = events[index][1];
        if (open) {
          if (token.type === "link" || token.type === "labelLink" && token._inactive) {
            break;
          }
          if (events[index][0] === "enter" && token.type === "labelLink") {
            token._inactive = true;
          }
        } else if (close) {
          if (events[index][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
            open = index;
            if (token.type !== "labelLink") {
              offset = 2;
              break;
            }
          }
        } else if (token.type === "labelEnd") {
          close = index;
        }
      }
      group = {
        type: events[open][1].type === "labelLink" ? "link" : "image",
        start: shallow(events[open][1].start),
        end: shallow(events[events.length - 1][1].end)
      };
      label = {
        type: "label",
        start: shallow(events[open][1].start),
        end: shallow(events[close][1].end)
      };
      text = {
        type: "labelText",
        start: shallow(events[open + offset + 2][1].end),
        end: shallow(events[close - 2][1].start)
      };
      media = [
        ["enter", group, context],
        ["enter", label, context]
      ];
      media = chunkedPush(media, events.slice(open + 1, open + offset + 3));
      media = chunkedPush(media, [["enter", text, context]]);
      media = chunkedPush(media, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context));
      media = chunkedPush(media, [
        ["exit", text, context],
        events[close - 2],
        events[close - 1],
        ["exit", label, context]
      ]);
      media = chunkedPush(media, events.slice(close + 1));
      media = chunkedPush(media, [["exit", group, context]]);
      chunkedSplice(events, open, events.length, media);
      return events;
    }
    function tokenizeLabelEnd(effects, ok, nok) {
      var self = this;
      var index = self.events.length;
      var labelStart;
      var defined;
      while (index--) {
        if ((self.events[index][1].type === "labelImage" || self.events[index][1].type === "labelLink") && !self.events[index][1]._balanced) {
          labelStart = self.events[index][1];
          break;
        }
      }
      return start;
      function start(code) {
        if (!labelStart) {
          return nok(code);
        }
        if (labelStart._inactive)
          return balanced(code);
        defined = self.parser.defined.indexOf(normalizeIdentifier(self.sliceSerialize({
          start: labelStart.end,
          end: self.now()
        }))) > -1;
        effects.enter("labelEnd");
        effects.enter("labelMarker");
        effects.consume(code);
        effects.exit("labelMarker");
        effects.exit("labelEnd");
        return afterLabelEnd;
      }
      function afterLabelEnd(code) {
        if (code === 40) {
          return effects.attempt(resourceConstruct, ok, defined ? ok : balanced)(code);
        }
        if (code === 91) {
          return effects.attempt(fullReferenceConstruct, ok, defined ? effects.attempt(collapsedReferenceConstruct, ok, balanced) : balanced)(code);
        }
        return defined ? ok(code) : balanced(code);
      }
      function balanced(code) {
        labelStart._balanced = true;
        return nok(code);
      }
    }
    function tokenizeResource(effects, ok, nok) {
      return start;
      function start(code) {
        effects.enter("resource");
        effects.enter("resourceMarker");
        effects.consume(code);
        effects.exit("resourceMarker");
        return factoryWhitespace(effects, open);
      }
      function open(code) {
        if (code === 41) {
          return end(code);
        }
        return factoryDestination(effects, destinationAfter, nok, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 3)(code);
      }
      function destinationAfter(code) {
        return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, between)(code) : end(code);
      }
      function between(code) {
        if (code === 34 || code === 39 || code === 40) {
          return factoryTitle(effects, factoryWhitespace(effects, end), nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code);
        }
        return end(code);
      }
      function end(code) {
        if (code === 41) {
          effects.enter("resourceMarker");
          effects.consume(code);
          effects.exit("resourceMarker");
          effects.exit("resource");
          return ok;
        }
        return nok(code);
      }
    }
    function tokenizeFullReference(effects, ok, nok) {
      var self = this;
      return start;
      function start(code) {
        return factoryLabel.call(self, effects, afterLabel, nok, "reference", "referenceMarker", "referenceString")(code);
      }
      function afterLabel(code) {
        return self.parser.defined.indexOf(normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) < 0 ? nok(code) : ok(code);
      }
    }
    function tokenizeCollapsedReference(effects, ok, nok) {
      return start;
      function start(code) {
        effects.enter("reference");
        effects.enter("referenceMarker");
        effects.consume(code);
        effects.exit("referenceMarker");
        return open;
      }
      function open(code) {
        if (code === 93) {
          effects.enter("referenceMarker");
          effects.consume(code);
          effects.exit("referenceMarker");
          effects.exit("reference");
          return ok;
        }
        return nok(code);
      }
    }
    module.exports = labelEnd;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/label-start-image.js
var require_label_start_image = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/label-start-image.js"(exports, module) {
    "use strict";
    init_react();
    var labelEnd = require_label_end();
    var labelStartImage = {
      name: "labelStartImage",
      tokenize: tokenizeLabelStartImage,
      resolveAll: labelEnd.resolveAll
    };
    function tokenizeLabelStartImage(effects, ok, nok) {
      var self = this;
      return start;
      function start(code) {
        effects.enter("labelImage");
        effects.enter("labelImageMarker");
        effects.consume(code);
        effects.exit("labelImageMarker");
        return open;
      }
      function open(code) {
        if (code === 91) {
          effects.enter("labelMarker");
          effects.consume(code);
          effects.exit("labelMarker");
          effects.exit("labelImage");
          return after;
        }
        return nok(code);
      }
      function after(code) {
        return code === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code) : ok(code);
      }
    }
    module.exports = labelStartImage;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/label-start-link.js
var require_label_start_link = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/label-start-link.js"(exports, module) {
    "use strict";
    init_react();
    var labelEnd = require_label_end();
    var labelStartLink = {
      name: "labelStartLink",
      tokenize: tokenizeLabelStartLink,
      resolveAll: labelEnd.resolveAll
    };
    function tokenizeLabelStartLink(effects, ok, nok) {
      var self = this;
      return start;
      function start(code) {
        effects.enter("labelLink");
        effects.enter("labelMarker");
        effects.consume(code);
        effects.exit("labelMarker");
        effects.exit("labelLink");
        return after;
      }
      function after(code) {
        return code === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code) : ok(code);
      }
    }
    module.exports = labelStartLink;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/line-ending.js
var require_line_ending = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/line-ending.js"(exports, module) {
    "use strict";
    init_react();
    var factorySpace = require_factory_space();
    var lineEnding = {
      name: "lineEnding",
      tokenize: tokenizeLineEnding
    };
    function tokenizeLineEnding(effects, ok) {
      return start;
      function start(code) {
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace(effects, ok, "linePrefix");
      }
    }
    module.exports = lineEnding;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/thematic-break.js
var require_thematic_break = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/thematic-break.js"(exports, module) {
    "use strict";
    init_react();
    var markdownLineEnding = require_markdown_line_ending();
    var markdownSpace = require_markdown_space();
    var factorySpace = require_factory_space();
    var thematicBreak = {
      name: "thematicBreak",
      tokenize: tokenizeThematicBreak
    };
    function tokenizeThematicBreak(effects, ok, nok) {
      var size = 0;
      var marker;
      return start;
      function start(code) {
        effects.enter("thematicBreak");
        marker = code;
        return atBreak(code);
      }
      function atBreak(code) {
        if (code === marker) {
          effects.enter("thematicBreakSequence");
          return sequence(code);
        }
        if (markdownSpace(code)) {
          return factorySpace(effects, atBreak, "whitespace")(code);
        }
        if (size < 3 || code !== null && !markdownLineEnding(code)) {
          return nok(code);
        }
        effects.exit("thematicBreak");
        return ok(code);
      }
      function sequence(code) {
        if (code === marker) {
          effects.consume(code);
          size++;
          return sequence;
        }
        effects.exit("thematicBreakSequence");
        return atBreak(code);
      }
    }
    module.exports = thematicBreak;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/list.js
var require_list = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/list.js"(exports, module) {
    "use strict";
    init_react();
    var asciiDigit = require_ascii_digit();
    var markdownSpace = require_markdown_space();
    var prefixSize = require_prefix_size();
    var sizeChunks = require_size_chunks();
    var factorySpace = require_factory_space();
    var partialBlankLine = require_partial_blank_line();
    var thematicBreak = require_thematic_break();
    var list = {
      name: "list",
      tokenize: tokenizeListStart,
      continuation: {
        tokenize: tokenizeListContinuation
      },
      exit: tokenizeListEnd
    };
    var listItemPrefixWhitespaceConstruct = {
      tokenize: tokenizeListItemPrefixWhitespace,
      partial: true
    };
    var indentConstruct = {
      tokenize: tokenizeIndent,
      partial: true
    };
    function tokenizeListStart(effects, ok, nok) {
      var self = this;
      var initialSize = prefixSize(self.events, "linePrefix");
      var size = 0;
      return start;
      function start(code) {
        var kind = self.containerState.type || (code === 42 || code === 43 || code === 45 ? "listUnordered" : "listOrdered");
        if (kind === "listUnordered" ? !self.containerState.marker || code === self.containerState.marker : asciiDigit(code)) {
          if (!self.containerState.type) {
            self.containerState.type = kind;
            effects.enter(kind, {
              _container: true
            });
          }
          if (kind === "listUnordered") {
            effects.enter("listItemPrefix");
            return code === 42 || code === 45 ? effects.check(thematicBreak, nok, atMarker)(code) : atMarker(code);
          }
          if (!self.interrupt || code === 49) {
            effects.enter("listItemPrefix");
            effects.enter("listItemValue");
            return inside(code);
          }
        }
        return nok(code);
      }
      function inside(code) {
        if (asciiDigit(code) && ++size < 10) {
          effects.consume(code);
          return inside;
        }
        if ((!self.interrupt || size < 2) && (self.containerState.marker ? code === self.containerState.marker : code === 41 || code === 46)) {
          effects.exit("listItemValue");
          return atMarker(code);
        }
        return nok(code);
      }
      function atMarker(code) {
        effects.enter("listItemMarker");
        effects.consume(code);
        effects.exit("listItemMarker");
        self.containerState.marker = self.containerState.marker || code;
        return effects.check(partialBlankLine, self.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
      }
      function onBlank(code) {
        self.containerState.initialBlankLine = true;
        initialSize++;
        return endOfPrefix(code);
      }
      function otherPrefix(code) {
        if (markdownSpace(code)) {
          effects.enter("listItemPrefixWhitespace");
          effects.consume(code);
          effects.exit("listItemPrefixWhitespace");
          return endOfPrefix;
        }
        return nok(code);
      }
      function endOfPrefix(code) {
        self.containerState.size = initialSize + sizeChunks(self.sliceStream(effects.exit("listItemPrefix")));
        return ok(code);
      }
    }
    function tokenizeListContinuation(effects, ok, nok) {
      var self = this;
      self.containerState._closeFlow = void 0;
      return effects.check(partialBlankLine, onBlank, notBlank);
      function onBlank(code) {
        self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine;
        return factorySpace(effects, ok, "listItemIndent", self.containerState.size + 1)(code);
      }
      function notBlank(code) {
        if (self.containerState.furtherBlankLines || !markdownSpace(code)) {
          self.containerState.furtherBlankLines = self.containerState.initialBlankLine = void 0;
          return notInCurrentItem(code);
        }
        self.containerState.furtherBlankLines = self.containerState.initialBlankLine = void 0;
        return effects.attempt(indentConstruct, ok, notInCurrentItem)(code);
      }
      function notInCurrentItem(code) {
        self.containerState._closeFlow = true;
        self.interrupt = void 0;
        return factorySpace(effects, effects.attempt(list, ok, nok), "linePrefix", self.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)(code);
      }
    }
    function tokenizeIndent(effects, ok, nok) {
      var self = this;
      return factorySpace(effects, afterPrefix, "listItemIndent", self.containerState.size + 1);
      function afterPrefix(code) {
        return prefixSize(self.events, "listItemIndent") === self.containerState.size ? ok(code) : nok(code);
      }
    }
    function tokenizeListEnd(effects) {
      effects.exit(this.containerState.type);
    }
    function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
      var self = this;
      return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4 + 1);
      function afterPrefix(code) {
        return markdownSpace(code) || !prefixSize(self.events, "listItemPrefixWhitespace") ? nok(code) : ok(code);
      }
    }
    module.exports = list;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/tokenize/setext-underline.js
var require_setext_underline = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/tokenize/setext-underline.js"(exports, module) {
    "use strict";
    init_react();
    var markdownLineEnding = require_markdown_line_ending();
    var shallow = require_shallow();
    var factorySpace = require_factory_space();
    var setextUnderline = {
      name: "setextUnderline",
      tokenize: tokenizeSetextUnderline,
      resolveTo: resolveToSetextUnderline
    };
    function resolveToSetextUnderline(events, context) {
      var index = events.length;
      var content;
      var text;
      var definition;
      var heading;
      while (index--) {
        if (events[index][0] === "enter") {
          if (events[index][1].type === "content") {
            content = index;
            break;
          }
          if (events[index][1].type === "paragraph") {
            text = index;
          }
        } else {
          if (events[index][1].type === "content") {
            events.splice(index, 1);
          }
          if (!definition && events[index][1].type === "definition") {
            definition = index;
          }
        }
      }
      heading = {
        type: "setextHeading",
        start: shallow(events[text][1].start),
        end: shallow(events[events.length - 1][1].end)
      };
      events[text][1].type = "setextHeadingText";
      if (definition) {
        events.splice(text, 0, ["enter", heading, context]);
        events.splice(definition + 1, 0, ["exit", events[content][1], context]);
        events[content][1].end = shallow(events[definition][1].end);
      } else {
        events[content][1] = heading;
      }
      events.push(["exit", heading, context]);
      return events;
    }
    function tokenizeSetextUnderline(effects, ok, nok) {
      var self = this;
      var index = self.events.length;
      var marker;
      var paragraph;
      while (index--) {
        if (self.events[index][1].type !== "lineEnding" && self.events[index][1].type !== "linePrefix" && self.events[index][1].type !== "content") {
          paragraph = self.events[index][1].type === "paragraph";
          break;
        }
      }
      return start;
      function start(code) {
        if (!self.lazy && (self.interrupt || paragraph)) {
          effects.enter("setextHeadingLine");
          effects.enter("setextHeadingLineSequence");
          marker = code;
          return closingSequence(code);
        }
        return nok(code);
      }
      function closingSequence(code) {
        if (code === marker) {
          effects.consume(code);
          return closingSequence;
        }
        effects.exit("setextHeadingLineSequence");
        return factorySpace(effects, closingSequenceEnd, "lineSuffix")(code);
      }
      function closingSequenceEnd(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("setextHeadingLine");
          return ok(code);
        }
        return nok(code);
      }
    }
    module.exports = setextUnderline;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/constructs.js
var require_constructs = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/constructs.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var text$1 = require_text();
    var attention = require_attention();
    var autolink = require_autolink();
    var blockQuote = require_block_quote();
    var characterEscape = require_character_escape();
    var characterReference = require_character_reference();
    var codeFenced = require_code_fenced();
    var codeIndented = require_code_indented();
    var codeText = require_code_text();
    var definition = require_definition();
    var hardBreakEscape = require_hard_break_escape();
    var headingAtx = require_heading_atx();
    var htmlFlow = require_html_flow();
    var htmlText = require_html_text();
    var labelEnd = require_label_end();
    var labelStartImage = require_label_start_image();
    var labelStartLink = require_label_start_link();
    var lineEnding = require_line_ending();
    var list = require_list();
    var setextUnderline = require_setext_underline();
    var thematicBreak = require_thematic_break();
    var document2 = {
      42: list,
      43: list,
      45: list,
      48: list,
      49: list,
      50: list,
      51: list,
      52: list,
      53: list,
      54: list,
      55: list,
      56: list,
      57: list,
      62: blockQuote
    };
    var contentInitial = {
      91: definition
    };
    var flowInitial = {
      "-2": codeIndented,
      "-1": codeIndented,
      32: codeIndented
    };
    var flow = {
      35: headingAtx,
      42: thematicBreak,
      45: [setextUnderline, thematicBreak],
      60: htmlFlow,
      61: setextUnderline,
      95: thematicBreak,
      96: codeFenced,
      126: codeFenced
    };
    var string = {
      38: characterReference,
      92: characterEscape
    };
    var text = {
      "-5": lineEnding,
      "-4": lineEnding,
      "-3": lineEnding,
      33: labelStartImage,
      38: characterReference,
      42: attention,
      60: [autolink, htmlText],
      91: labelStartLink,
      92: [hardBreakEscape, characterEscape],
      93: labelEnd,
      95: attention,
      96: codeText
    };
    var insideSpan = {
      null: [attention, text$1.resolver]
    };
    var disable = {
      null: []
    };
    exports.contentInitial = contentInitial;
    exports.disable = disable;
    exports.document = document2;
    exports.flow = flow;
    exports.flowInitial = flowInitial;
    exports.insideSpan = insideSpan;
    exports.string = string;
    exports.text = text;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/parse.js
var require_parse = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/parse.js"(exports, module) {
    "use strict";
    init_react();
    var content = require_content();
    var document2 = require_document();
    var flow = require_flow();
    var text = require_text();
    var combineExtensions = require_combine_extensions();
    var createTokenizer = require_create_tokenizer();
    var miniflat = require_miniflat();
    var constructs = require_constructs();
    function parse(options) {
      var settings = options || {};
      var parser = {
        defined: [],
        constructs: combineExtensions([constructs].concat(miniflat(settings.extensions))),
        content: create(content),
        document: create(document2),
        flow: create(flow),
        string: create(text.string),
        text: create(text.text)
      };
      return parser;
      function create(initializer) {
        return creator;
        function creator(from) {
          return createTokenizer(parser, initializer, from);
        }
      }
    }
    module.exports = parse;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/preprocess.js
var require_preprocess = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/preprocess.js"(exports, module) {
    "use strict";
    init_react();
    var search = /[\0\t\n\r]/g;
    function preprocess() {
      var start = true;
      var column = 1;
      var buffer = "";
      var atCarriageReturn;
      return preprocessor;
      function preprocessor(value, encoding, end) {
        var chunks = [];
        var match;
        var next;
        var startPosition;
        var endPosition;
        var code;
        value = buffer + value.toString(encoding);
        startPosition = 0;
        buffer = "";
        if (start) {
          if (value.charCodeAt(0) === 65279) {
            startPosition++;
          }
          start = void 0;
        }
        while (startPosition < value.length) {
          search.lastIndex = startPosition;
          match = search.exec(value);
          endPosition = match ? match.index : value.length;
          code = value.charCodeAt(endPosition);
          if (!match) {
            buffer = value.slice(startPosition);
            break;
          }
          if (code === 10 && startPosition === endPosition && atCarriageReturn) {
            chunks.push(-3);
            atCarriageReturn = void 0;
          } else {
            if (atCarriageReturn) {
              chunks.push(-5);
              atCarriageReturn = void 0;
            }
            if (startPosition < endPosition) {
              chunks.push(value.slice(startPosition, endPosition));
              column += endPosition - startPosition;
            }
            if (code === 0) {
              chunks.push(65533);
              column++;
            } else if (code === 9) {
              next = Math.ceil(column / 4) * 4;
              chunks.push(-2);
              while (column++ < next)
                chunks.push(-1);
            } else if (code === 10) {
              chunks.push(-4);
              column = 1;
            } else {
              atCarriageReturn = true;
              column = 1;
            }
          }
          startPosition = endPosition + 1;
        }
        if (end) {
          if (atCarriageReturn)
            chunks.push(-5);
          if (buffer)
            chunks.push(buffer);
          chunks.push(null);
        }
        return chunks;
      }
    }
    module.exports = preprocess;
  }
});

// node_modules/react-markdown/node_modules/micromark/dist/postprocess.js
var require_postprocess = __commonJS({
  "node_modules/react-markdown/node_modules/micromark/dist/postprocess.js"(exports, module) {
    "use strict";
    init_react();
    var subtokenize = require_subtokenize();
    function postprocess(events) {
      while (!subtokenize(events)) {
      }
      return events;
    }
    module.exports = postprocess;
  }
});

// node_modules/react-markdown/node_modules/unist-util-stringify-position/index.js
var require_unist_util_stringify_position2 = __commonJS({
  "node_modules/react-markdown/node_modules/unist-util-stringify-position/index.js"(exports, module) {
    "use strict";
    init_react();
    var own = {}.hasOwnProperty;
    module.exports = stringify;
    function stringify(value) {
      if (!value || typeof value !== "object") {
        return "";
      }
      if (own.call(value, "position") || own.call(value, "type")) {
        return position(value.position);
      }
      if (own.call(value, "start") || own.call(value, "end")) {
        return position(value);
      }
      if (own.call(value, "line") || own.call(value, "column")) {
        return point(value);
      }
      return "";
    }
    function point(point2) {
      if (!point2 || typeof point2 !== "object") {
        point2 = {};
      }
      return index(point2.line) + ":" + index(point2.column);
    }
    function position(pos) {
      if (!pos || typeof pos !== "object") {
        pos = {};
      }
      return point(pos.start) + "-" + point(pos.end);
    }
    function index(value) {
      return value && typeof value === "number" ? value : 1;
    }
  }
});

// node_modules/react-markdown/node_modules/mdast-util-from-markdown/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-markdown/node_modules/mdast-util-from-markdown/dist/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = fromMarkdown;
    var toString = require_mdast_util_to_string();
    var assign = require_assign();
    var own = require_has_own_property();
    var normalizeIdentifier = require_normalize_identifier();
    var safeFromInt = require_safe_from_int();
    var parser = require_parse();
    var preprocessor = require_preprocess();
    var postprocess = require_postprocess();
    var decode = require_decode_entity_browser();
    var stringifyPosition = require_unist_util_stringify_position2();
    function fromMarkdown(value, encoding, options) {
      if (typeof encoding !== "string") {
        options = encoding;
        encoding = void 0;
      }
      return compiler(options)(postprocess(parser(options).document().write(preprocessor()(value, encoding, true))));
    }
    function compiler(options) {
      var settings = options || {};
      var config = configure({
        transforms: [],
        canContainEols: [
          "emphasis",
          "fragment",
          "heading",
          "paragraph",
          "strong"
        ],
        enter: {
          autolink: opener(link2),
          autolinkProtocol: onenterdata,
          autolinkEmail: onenterdata,
          atxHeading: opener(heading),
          blockQuote: opener(blockQuote),
          characterEscape: onenterdata,
          characterReference: onenterdata,
          codeFenced: opener(codeFlow),
          codeFencedFenceInfo: buffer,
          codeFencedFenceMeta: buffer,
          codeIndented: opener(codeFlow, buffer),
          codeText: opener(codeText, buffer),
          codeTextData: onenterdata,
          data: onenterdata,
          codeFlowValue: onenterdata,
          definition: opener(definition),
          definitionDestinationString: buffer,
          definitionLabelString: buffer,
          definitionTitleString: buffer,
          emphasis: opener(emphasis),
          hardBreakEscape: opener(hardBreak),
          hardBreakTrailing: opener(hardBreak),
          htmlFlow: opener(html, buffer),
          htmlFlowData: onenterdata,
          htmlText: opener(html, buffer),
          htmlTextData: onenterdata,
          image: opener(image),
          label: buffer,
          link: opener(link2),
          listItem: opener(listItem),
          listItemValue: onenterlistitemvalue,
          listOrdered: opener(list, onenterlistordered),
          listUnordered: opener(list),
          paragraph: opener(paragraph),
          reference: onenterreference,
          referenceString: buffer,
          resourceDestinationString: buffer,
          resourceTitleString: buffer,
          setextHeading: opener(heading),
          strong: opener(strong),
          thematicBreak: opener(thematicBreak)
        },
        exit: {
          atxHeading: closer(),
          atxHeadingSequence: onexitatxheadingsequence,
          autolink: closer(),
          autolinkEmail: onexitautolinkemail,
          autolinkProtocol: onexitautolinkprotocol,
          blockQuote: closer(),
          characterEscapeValue: onexitdata,
          characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
          characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
          characterReferenceValue: onexitcharacterreferencevalue,
          codeFenced: closer(onexitcodefenced),
          codeFencedFence: onexitcodefencedfence,
          codeFencedFenceInfo: onexitcodefencedfenceinfo,
          codeFencedFenceMeta: onexitcodefencedfencemeta,
          codeFlowValue: onexitdata,
          codeIndented: closer(onexitcodeindented),
          codeText: closer(onexitcodetext),
          codeTextData: onexitdata,
          data: onexitdata,
          definition: closer(),
          definitionDestinationString: onexitdefinitiondestinationstring,
          definitionLabelString: onexitdefinitionlabelstring,
          definitionTitleString: onexitdefinitiontitlestring,
          emphasis: closer(),
          hardBreakEscape: closer(onexithardbreak),
          hardBreakTrailing: closer(onexithardbreak),
          htmlFlow: closer(onexithtmlflow),
          htmlFlowData: onexitdata,
          htmlText: closer(onexithtmltext),
          htmlTextData: onexitdata,
          image: closer(onexitimage),
          label: onexitlabel,
          labelText: onexitlabeltext,
          lineEnding: onexitlineending,
          link: closer(onexitlink),
          listItem: closer(),
          listOrdered: closer(),
          listUnordered: closer(),
          paragraph: closer(),
          referenceString: onexitreferencestring,
          resourceDestinationString: onexitresourcedestinationstring,
          resourceTitleString: onexitresourcetitlestring,
          resource: onexitresource,
          setextHeading: closer(onexitsetextheading),
          setextHeadingLineSequence: onexitsetextheadinglinesequence,
          setextHeadingText: onexitsetextheadingtext,
          strong: closer(),
          thematicBreak: closer()
        }
      }, settings.mdastExtensions || []);
      var data = {};
      return compile;
      function compile(events) {
        var tree = { type: "root", children: [] };
        var stack = [tree];
        var tokenStack = [];
        var listStack = [];
        var index = -1;
        var handler;
        var listStart;
        var context = {
          stack,
          tokenStack,
          config,
          enter,
          exit,
          buffer,
          resume,
          setData,
          getData
        };
        while (++index < events.length) {
          if (events[index][1].type === "listOrdered" || events[index][1].type === "listUnordered") {
            if (events[index][0] === "enter") {
              listStack.push(index);
            } else {
              listStart = listStack.pop(index);
              index = prepareList(events, listStart, index);
            }
          }
        }
        index = -1;
        while (++index < events.length) {
          handler = config[events[index][0]];
          if (own.call(handler, events[index][1].type)) {
            handler[events[index][1].type].call(assign({ sliceSerialize: events[index][2].sliceSerialize }, context), events[index][1]);
          }
        }
        if (tokenStack.length) {
          throw new Error("Cannot close document, a token (`" + tokenStack[tokenStack.length - 1].type + "`, " + stringifyPosition({
            start: tokenStack[tokenStack.length - 1].start,
            end: tokenStack[tokenStack.length - 1].end
          }) + ") is still open");
        }
        tree.position = {
          start: point(events.length ? events[0][1].start : { line: 1, column: 1, offset: 0 }),
          end: point(events.length ? events[events.length - 2][1].end : { line: 1, column: 1, offset: 0 })
        };
        index = -1;
        while (++index < config.transforms.length) {
          tree = config.transforms[index](tree) || tree;
        }
        return tree;
      }
      function prepareList(events, start, length) {
        var index = start - 1;
        var containerBalance = -1;
        var listSpread = false;
        var listItem2;
        var tailIndex;
        var lineIndex;
        var tailEvent;
        var event;
        var firstBlankLineIndex;
        var atMarker;
        while (++index <= length) {
          event = events[index];
          if (event[1].type === "listUnordered" || event[1].type === "listOrdered" || event[1].type === "blockQuote") {
            if (event[0] === "enter") {
              containerBalance++;
            } else {
              containerBalance--;
            }
            atMarker = void 0;
          } else if (event[1].type === "lineEndingBlank") {
            if (event[0] === "enter") {
              if (listItem2 && !atMarker && !containerBalance && !firstBlankLineIndex) {
                firstBlankLineIndex = index;
              }
              atMarker = void 0;
            }
          } else if (event[1].type === "linePrefix" || event[1].type === "listItemValue" || event[1].type === "listItemMarker" || event[1].type === "listItemPrefix" || event[1].type === "listItemPrefixWhitespace") {
          } else {
            atMarker = void 0;
          }
          if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
            if (listItem2) {
              tailIndex = index;
              lineIndex = void 0;
              while (tailIndex--) {
                tailEvent = events[tailIndex];
                if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
                  if (tailEvent[0] === "exit")
                    continue;
                  if (lineIndex) {
                    events[lineIndex][1].type = "lineEndingBlank";
                    listSpread = true;
                  }
                  tailEvent[1].type = "lineEnding";
                  lineIndex = tailIndex;
                } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") {
                } else {
                  break;
                }
              }
              if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
                listItem2._spread = true;
              }
              listItem2.end = point(lineIndex ? events[lineIndex][1].start : event[1].end);
              events.splice(lineIndex || index, 0, ["exit", listItem2, event[2]]);
              index++;
              length++;
            }
            if (event[1].type === "listItemPrefix") {
              listItem2 = {
                type: "listItem",
                _spread: false,
                start: point(event[1].start)
              };
              events.splice(index, 0, ["enter", listItem2, event[2]]);
              index++;
              length++;
              firstBlankLineIndex = void 0;
              atMarker = true;
            }
          }
        }
        events[start][1]._spread = listSpread;
        return length;
      }
      function setData(key, value) {
        data[key] = value;
      }
      function getData(key) {
        return data[key];
      }
      function point(d) {
        return { line: d.line, column: d.column, offset: d.offset };
      }
      function opener(create, and) {
        return open;
        function open(token) {
          enter.call(this, create(token), token);
          if (and)
            and.call(this, token);
        }
      }
      function buffer() {
        this.stack.push({ type: "fragment", children: [] });
      }
      function enter(node, token) {
        this.stack[this.stack.length - 1].children.push(node);
        this.stack.push(node);
        this.tokenStack.push(token);
        node.position = { start: point(token.start) };
        return node;
      }
      function closer(and) {
        return close;
        function close(token) {
          if (and)
            and.call(this, token);
          exit.call(this, token);
        }
      }
      function exit(token) {
        var node = this.stack.pop();
        var open = this.tokenStack.pop();
        if (!open) {
          throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({ start: token.start, end: token.end }) + "): it\u2019s not open");
        } else if (open.type !== token.type) {
          throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({ start: token.start, end: token.end }) + "): a different token (`" + open.type + "`, " + stringifyPosition({ start: open.start, end: open.end }) + ") is open");
        }
        node.position.end = point(token.end);
        return node;
      }
      function resume() {
        return toString(this.stack.pop());
      }
      function onenterlistordered() {
        setData("expectingFirstListItemValue", true);
      }
      function onenterlistitemvalue(token) {
        if (getData("expectingFirstListItemValue")) {
          this.stack[this.stack.length - 2].start = parseInt(this.sliceSerialize(token), 10);
          setData("expectingFirstListItemValue");
        }
      }
      function onexitcodefencedfenceinfo() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].lang = data2;
      }
      function onexitcodefencedfencemeta() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].meta = data2;
      }
      function onexitcodefencedfence() {
        if (getData("flowCodeInside"))
          return;
        this.buffer();
        setData("flowCodeInside", true);
      }
      function onexitcodefenced() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
        setData("flowCodeInside");
      }
      function onexitcodeindented() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].value = data2;
      }
      function onexitdefinitionlabelstring(token) {
        var label = this.resume();
        this.stack[this.stack.length - 1].label = label;
        this.stack[this.stack.length - 1].identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
      }
      function onexitdefinitiontitlestring() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].title = data2;
      }
      function onexitdefinitiondestinationstring() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].url = data2;
      }
      function onexitatxheadingsequence(token) {
        if (!this.stack[this.stack.length - 1].depth) {
          this.stack[this.stack.length - 1].depth = this.sliceSerialize(token).length;
        }
      }
      function onexitsetextheadingtext() {
        setData("setextHeadingSlurpLineEnding", true);
      }
      function onexitsetextheadinglinesequence(token) {
        this.stack[this.stack.length - 1].depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
      }
      function onexitsetextheading() {
        setData("setextHeadingSlurpLineEnding");
      }
      function onenterdata(token) {
        var siblings = this.stack[this.stack.length - 1].children;
        var tail = siblings[siblings.length - 1];
        if (!tail || tail.type !== "text") {
          tail = text();
          tail.position = { start: point(token.start) };
          this.stack[this.stack.length - 1].children.push(tail);
        }
        this.stack.push(tail);
      }
      function onexitdata(token) {
        var tail = this.stack.pop();
        tail.value += this.sliceSerialize(token);
        tail.position.end = point(token.end);
      }
      function onexitlineending(token) {
        var context = this.stack[this.stack.length - 1];
        if (getData("atHardBreak")) {
          context.children[context.children.length - 1].position.end = point(token.end);
          setData("atHardBreak");
          return;
        }
        if (!getData("setextHeadingSlurpLineEnding") && config.canContainEols.indexOf(context.type) > -1) {
          onenterdata.call(this, token);
          onexitdata.call(this, token);
        }
      }
      function onexithardbreak() {
        setData("atHardBreak", true);
      }
      function onexithtmlflow() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].value = data2;
      }
      function onexithtmltext() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].value = data2;
      }
      function onexitcodetext() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].value = data2;
      }
      function onexitlink() {
        var context = this.stack[this.stack.length - 1];
        if (getData("inReference")) {
          context.type += "Reference";
          context.referenceType = getData("referenceType") || "shortcut";
          delete context.url;
          delete context.title;
        } else {
          delete context.identifier;
          delete context.label;
          delete context.referenceType;
        }
        setData("referenceType");
      }
      function onexitimage() {
        var context = this.stack[this.stack.length - 1];
        if (getData("inReference")) {
          context.type += "Reference";
          context.referenceType = getData("referenceType") || "shortcut";
          delete context.url;
          delete context.title;
        } else {
          delete context.identifier;
          delete context.label;
          delete context.referenceType;
        }
        setData("referenceType");
      }
      function onexitlabeltext(token) {
        this.stack[this.stack.length - 2].identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
      }
      function onexitlabel() {
        var fragment = this.stack[this.stack.length - 1];
        var value = this.resume();
        this.stack[this.stack.length - 1].label = value;
        setData("inReference", true);
        if (this.stack[this.stack.length - 1].type === "link") {
          this.stack[this.stack.length - 1].children = fragment.children;
        } else {
          this.stack[this.stack.length - 1].alt = value;
        }
      }
      function onexitresourcedestinationstring() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].url = data2;
      }
      function onexitresourcetitlestring() {
        var data2 = this.resume();
        this.stack[this.stack.length - 1].title = data2;
      }
      function onexitresource() {
        setData("inReference");
      }
      function onenterreference() {
        setData("referenceType", "collapsed");
      }
      function onexitreferencestring(token) {
        var label = this.resume();
        this.stack[this.stack.length - 1].label = label;
        this.stack[this.stack.length - 1].identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
        setData("referenceType", "full");
      }
      function onexitcharacterreferencemarker(token) {
        setData("characterReferenceType", token.type);
      }
      function onexitcharacterreferencevalue(token) {
        var data2 = this.sliceSerialize(token);
        var type = getData("characterReferenceType");
        var value;
        var tail;
        if (type) {
          value = safeFromInt(data2, type === "characterReferenceMarkerNumeric" ? 10 : 16);
          setData("characterReferenceType");
        } else {
          value = decode(data2);
        }
        tail = this.stack.pop();
        tail.value += value;
        tail.position.end = point(token.end);
      }
      function onexitautolinkprotocol(token) {
        onexitdata.call(this, token);
        this.stack[this.stack.length - 1].url = this.sliceSerialize(token);
      }
      function onexitautolinkemail(token) {
        onexitdata.call(this, token);
        this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(token);
      }
      function blockQuote() {
        return { type: "blockquote", children: [] };
      }
      function codeFlow() {
        return { type: "code", lang: null, meta: null, value: "" };
      }
      function codeText() {
        return { type: "inlineCode", value: "" };
      }
      function definition() {
        return {
          type: "definition",
          identifier: "",
          label: null,
          title: null,
          url: ""
        };
      }
      function emphasis() {
        return { type: "emphasis", children: [] };
      }
      function heading() {
        return { type: "heading", depth: void 0, children: [] };
      }
      function hardBreak() {
        return { type: "break" };
      }
      function html() {
        return { type: "html", value: "" };
      }
      function image() {
        return { type: "image", title: null, url: "", alt: null };
      }
      function link2() {
        return { type: "link", title: null, url: "", children: [] };
      }
      function list(token) {
        return {
          type: "list",
          ordered: token.type === "listOrdered",
          start: null,
          spread: token._spread,
          children: []
        };
      }
      function listItem(token) {
        return {
          type: "listItem",
          spread: token._spread,
          checked: null,
          children: []
        };
      }
      function paragraph() {
        return { type: "paragraph", children: [] };
      }
      function strong() {
        return { type: "strong", children: [] };
      }
      function text() {
        return { type: "text", value: "" };
      }
      function thematicBreak() {
        return { type: "thematicBreak" };
      }
    }
    function configure(config, extensions) {
      var index = -1;
      while (++index < extensions.length) {
        extension(config, extensions[index]);
      }
      return config;
    }
    function extension(config, extension2) {
      var key;
      var left;
      for (key in extension2) {
        left = own.call(config, key) ? config[key] : config[key] = {};
        if (key === "canContainEols" || key === "transforms") {
          config[key] = [].concat(left, extension2[key]);
        } else {
          Object.assign(left, extension2[key]);
        }
      }
    }
  }
});

// node_modules/react-markdown/node_modules/mdast-util-from-markdown/index.js
var require_mdast_util_from_markdown = __commonJS({
  "node_modules/react-markdown/node_modules/mdast-util-from-markdown/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = require_dist();
  }
});

// node_modules/react-markdown/node_modules/remark-parse/index.js
var require_remark_parse = __commonJS({
  "node_modules/react-markdown/node_modules/remark-parse/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = parse;
    var fromMarkdown = require_mdast_util_from_markdown();
    function parse(options) {
      var self = this;
      this.Parser = parse2;
      function parse2(doc) {
        return fromMarkdown(doc, Object.assign({}, self.data("settings"), options, {
          extensions: self.data("micromarkExtensions") || [],
          mdastExtensions: self.data("fromMarkdownExtensions") || []
        }));
      }
    }
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    init_react();
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    init_react();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    init_react();
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    init_react();
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    init_react();
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    init_react();
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data.hasOwnProperty("expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    init_react();
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/mdast-add-list-metadata/node_modules/unist-util-visit-parents/index.js
var require_unist_util_visit_parents = __commonJS({
  "node_modules/mdast-add-list-metadata/node_modules/unist-util-visit-parents/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = visitParents;
    function visitParents(tree, type, visitor) {
      var stack = [];
      if (typeof type === "function") {
        visitor = type;
        type = null;
      }
      one(tree);
      function one(node) {
        var result;
        if (!type || node.type === type) {
          result = visitor(node, stack.concat());
        }
        if (node.children && result !== false) {
          return all(node.children, node);
        }
        return result;
      }
      function all(children, parent) {
        var length = children.length;
        var index = -1;
        var child;
        stack.push(parent);
        while (++index < length) {
          child = children[index];
          if (child && one(child) === false) {
            return false;
          }
        }
        stack.pop();
        return true;
      }
    }
  }
});

// node_modules/mdast-add-list-metadata/index.js
var require_mdast_add_list_metadata = __commonJS({
  "node_modules/mdast-add-list-metadata/index.js"(exports, module) {
    init_react();
    var visitWithParents = require_unist_util_visit_parents();
    function addListMetadata() {
      return function(ast) {
        visitWithParents(ast, "list", function(listNode, parents) {
          var depth = 0, i, n;
          for (i = 0, n = parents.length; i < n; i++) {
            if (parents[i].type === "list")
              depth += 1;
          }
          for (i = 0, n = listNode.children.length; i < n; i++) {
            var child = listNode.children[i];
            child.index = i;
            child.ordered = listNode.ordered;
          }
          listNode.depth = depth;
        });
        return ast;
      };
    }
    module.exports = addListMetadata;
  }
});

// node_modules/unist-util-is/convert.js
var require_convert = __commonJS({
  "node_modules/unist-util-is/convert.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = convert;
    function convert(test) {
      if (test == null) {
        return ok;
      }
      if (typeof test === "string") {
        return typeFactory(test);
      }
      if (typeof test === "object") {
        return "length" in test ? anyFactory(test) : allFactory(test);
      }
      if (typeof test === "function") {
        return test;
      }
      throw new Error("Expected function, string, or object as test");
    }
    function allFactory(test) {
      return all;
      function all(node) {
        var key;
        for (key in test) {
          if (node[key] !== test[key])
            return false;
        }
        return true;
      }
    }
    function anyFactory(tests) {
      var checks = [];
      var index = -1;
      while (++index < tests.length) {
        checks[index] = convert(tests[index]);
      }
      return any;
      function any() {
        var index2 = -1;
        while (++index2 < checks.length) {
          if (checks[index2].apply(this, arguments)) {
            return true;
          }
        }
        return false;
      }
    }
    function typeFactory(test) {
      return type;
      function type(node) {
        return Boolean(node && node.type === test);
      }
    }
    function ok() {
      return true;
    }
  }
});

// node_modules/unist-util-visit-parents/color.browser.js
var require_color_browser = __commonJS({
  "node_modules/unist-util-visit-parents/color.browser.js"(exports, module) {
    init_react();
    module.exports = identity;
    function identity(d) {
      return d;
    }
  }
});

// node_modules/unist-util-visit-parents/index.js
var require_unist_util_visit_parents2 = __commonJS({
  "node_modules/unist-util-visit-parents/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = visitParents;
    var convert = require_convert();
    var color = require_color_browser();
    var CONTINUE = true;
    var SKIP = "skip";
    var EXIT = false;
    visitParents.CONTINUE = CONTINUE;
    visitParents.SKIP = SKIP;
    visitParents.EXIT = EXIT;
    function visitParents(tree, test, visitor, reverse) {
      var step;
      var is;
      if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      is = convert(test);
      step = reverse ? -1 : 1;
      factory(tree, null, [])();
      function factory(node, index, parents) {
        var value = typeof node === "object" && node !== null ? node : {};
        var name;
        if (typeof value.type === "string") {
          name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
          visit.displayName = "node (" + color(value.type + (name ? "<" + name + ">" : "")) + ")";
        }
        return visit;
        function visit() {
          var grandparents = parents.concat(node);
          var result = [];
          var subresult;
          var offset;
          if (!test || is(node, index, parents[parents.length - 1] || null)) {
            result = toResult(visitor(node, parents));
            if (result[0] === EXIT) {
              return result;
            }
          }
          if (node.children && result[0] !== SKIP) {
            offset = (reverse ? node.children.length : -1) + step;
            while (offset > -1 && offset < node.children.length) {
              subresult = factory(node.children[offset], offset, grandparents)();
              if (subresult[0] === EXIT) {
                return subresult;
              }
              offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
            }
          }
          return result;
        }
      }
    }
    function toResult(value) {
      if (value !== null && typeof value === "object" && "length" in value) {
        return value;
      }
      if (typeof value === "number") {
        return [CONTINUE, value];
      }
      return [value];
    }
  }
});

// node_modules/unist-util-visit/index.js
var require_unist_util_visit = __commonJS({
  "node_modules/unist-util-visit/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = visit;
    var visitParents = require_unist_util_visit_parents2();
    var CONTINUE = visitParents.CONTINUE;
    var SKIP = visitParents.SKIP;
    var EXIT = visitParents.EXIT;
    visit.CONTINUE = CONTINUE;
    visit.SKIP = SKIP;
    visit.EXIT = EXIT;
    function visit(tree, test, visitor, reverse) {
      if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      visitParents(tree, test, overload, reverse);
      function overload(node, parents) {
        var parent = parents[parents.length - 1];
        var index = parent ? parent.children.indexOf(node) : null;
        return visitor(node, index, parent);
      }
    }
  }
});

// node_modules/react-markdown/lib/plugins/naive-html.js
var require_naive_html = __commonJS({
  "node_modules/react-markdown/lib/plugins/naive-html.js"(exports, module) {
    "use strict";
    init_react();
    var visit = require_unist_util_visit();
    var type = "virtualHtml";
    var selfClosingRe = /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i;
    var simpleTagRe = /^<(\/?)([a-z]+)\s*>$/;
    module.exports = function(tree) {
      var open;
      var currentParent;
      visit(tree, "html", function(node, index, parent) {
        if (currentParent !== parent) {
          open = [];
          currentParent = parent;
        }
        var selfClosing = getSelfClosing(node);
        if (selfClosing) {
          parent.children.splice(index, 1, {
            type,
            tag: selfClosing,
            position: node.position
          });
          return true;
        }
        var current = getSimpleTag(node, parent);
        if (!current) {
          return true;
        }
        var matching = findAndPull(open, current.tag);
        if (matching) {
          parent.children.splice(index, 0, virtual(current, matching, parent));
        } else if (!current.opening) {
          open.push(current);
        }
        return true;
      }, true);
      return tree;
    };
    function findAndPull(open, matchingTag) {
      var i = open.length;
      while (i--) {
        if (open[i].tag === matchingTag) {
          return open.splice(i, 1)[0];
        }
      }
      return false;
    }
    function getSimpleTag(node, parent) {
      var match = node.value.match(simpleTagRe);
      return match ? {
        tag: match[2],
        opening: !match[1],
        node
      } : false;
    }
    function getSelfClosing(node) {
      var match = node.value.match(selfClosingRe);
      return match ? match[1] : false;
    }
    function virtual(fromNode, toNode, parent) {
      var fromIndex = parent.children.indexOf(fromNode.node);
      var toIndex = parent.children.indexOf(toNode.node);
      var extracted = parent.children.splice(fromIndex, toIndex - fromIndex + 1);
      var children = extracted.slice(1, -1);
      return {
        type,
        children,
        tag: fromNode.tag,
        position: {
          start: fromNode.node.position.start,
          end: toNode.node.position.end,
          indent: []
        }
      };
    }
  }
});

// node_modules/react-markdown/lib/plugins/disallow-node.js
var require_disallow_node = __commonJS({
  "node_modules/react-markdown/lib/plugins/disallow-node.js"(exports) {
    "use strict";
    init_react();
    var visit = require_unist_util_visit();
    var splice = [].splice;
    exports.ofType = function(types, mode) {
      return ifNotMatch(allow, mode);
      function allow(node, index, parent) {
        return !types.includes(node.type);
      }
    };
    exports.ifNotMatch = ifNotMatch;
    function ifNotMatch(allow, mode) {
      return transform;
      function transform(tree) {
        visit(tree, filter);
        return tree;
      }
      function filter(node, index, parent) {
        if (parent && !allow(node, index, parent)) {
          var parameters = [index, 1];
          if (mode === "unwrap" && node.children) {
            parameters = parameters.concat(node.children);
          }
          splice.apply(parent.children, parameters);
          return index;
        }
      }
    }
  }
});

// node_modules/react-markdown/lib/ast-to-react.js
var require_ast_to_react = __commonJS({
  "node_modules/react-markdown/lib/ast-to-react.js"(exports, module) {
    "use strict";
    init_react();
    var React2 = require_react();
    var xtend = require_immutable();
    var ReactIs = require_react_is();
    function astToReact(node, options) {
      var parent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var index = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
      var renderer = options.renderers[node.type];
      if (!node.position) {
        node.position = {
          start: {
            line: null,
            column: null,
            offset: null
          },
          end: {
            line: null,
            column: null,
            offset: null
          }
        };
      }
      var pos = node.position.start;
      var key = [node.type, pos.line, pos.column, index].join("-");
      if (!ReactIs.isValidElementType(renderer)) {
        throw new Error("Renderer for type `".concat(node.type, "` not defined or is not renderable"));
      }
      var nodeProps = getNodeProps(node, key, options, renderer, parent, index);
      return React2.createElement(renderer, nodeProps, nodeProps.children || resolveChildren() || void 0);
      function resolveChildren() {
        return node.children && node.children.map(function(childNode, i) {
          return astToReact(childNode, options, {
            node,
            props: nodeProps
          }, i);
        });
      }
    }
    function getNodeProps(node, key, opts, renderer, parent, index) {
      var props = {
        key
      };
      var isSimpleRenderer = typeof renderer === "string" || renderer === React2.Fragment;
      if (opts.sourcePos && node.position) {
        props["data-sourcepos"] = flattenPosition(node.position);
      }
      if (opts.rawSourcePos && !isSimpleRenderer) {
        props.sourcePosition = node.position;
      }
      if (opts.includeNodeIndex && parent.node && parent.node.children && !isSimpleRenderer) {
        props.index = parent.node.children.indexOf(node);
        props.parentChildCount = parent.node.children.length;
      }
      var ref = node.identifier !== null && node.identifier !== void 0 ? opts.definitions[node.identifier.toUpperCase()] || {} : null;
      switch (node.type) {
        case "root":
          assignDefined(props, {
            className: opts.className
          });
          break;
        case "text":
          props.nodeKey = key;
          props.children = node.value;
          break;
        case "heading":
          props.level = node.depth;
          break;
        case "list":
          props.start = node.start;
          props.ordered = node.ordered;
          props.spread = node.spread;
          props.depth = node.depth;
          break;
        case "listItem":
          props.checked = node.checked;
          props.spread = node.spread;
          props.ordered = node.ordered;
          props.index = node.index;
          props.children = getListItemChildren(node, parent).map(function(childNode, i) {
            return astToReact(childNode, opts, {
              node,
              props
            }, i);
          });
          break;
        case "definition":
          assignDefined(props, {
            identifier: node.identifier,
            title: node.title,
            url: node.url
          });
          break;
        case "code":
          assignDefined(props, {
            language: node.lang && node.lang.split(/\s/, 1)[0]
          });
          break;
        case "inlineCode":
          props.children = node.value;
          props.inline = true;
          break;
        case "link":
          assignDefined(props, {
            title: node.title || void 0,
            target: typeof opts.linkTarget === "function" ? opts.linkTarget(node.url, node.children, node.title) : opts.linkTarget,
            href: opts.transformLinkUri ? opts.transformLinkUri(node.url, node.children, node.title) : node.url
          });
          break;
        case "image":
          assignDefined(props, {
            src: opts.transformImageUri ? opts.transformImageUri(node.url, node.children, node.title, node.alt) : node.url,
            alt: node.alt || "",
            title: node.title || void 0
          });
          break;
        case "linkReference":
          assignDefined(props, xtend(ref, {
            href: opts.transformLinkUri ? opts.transformLinkUri(ref.href) : ref.href
          }));
          break;
        case "imageReference":
          assignDefined(props, {
            src: opts.transformImageUri && ref.href ? opts.transformImageUri(ref.href, node.children, ref.title, node.alt) : ref.href,
            alt: node.alt || "",
            title: ref.title || void 0
          });
          break;
        case "table":
        case "tableHead":
        case "tableBody":
          props.columnAlignment = node.align;
          break;
        case "tableRow":
          props.isHeader = parent.node.type === "tableHead";
          props.columnAlignment = parent.props.columnAlignment;
          break;
        case "tableCell":
          assignDefined(props, {
            isHeader: parent.props.isHeader,
            align: parent.props.columnAlignment[index]
          });
          break;
        case "virtualHtml":
          props.tag = node.tag;
          break;
        case "html":
          props.isBlock = node.position.start.line !== node.position.end.line;
          props.allowDangerousHtml = opts.allowDangerousHtml;
          props.escapeHtml = opts.escapeHtml;
          props.skipHtml = opts.skipHtml;
          break;
        case "parsedHtml": {
          var parsedChildren;
          if (node.children) {
            parsedChildren = node.children.map(function(child, i) {
              return astToReact(child, opts, {
                node,
                props
              }, i);
            });
          }
          props.allowDangerousHtml = opts.allowDangerousHtml;
          props.escapeHtml = opts.escapeHtml;
          props.skipHtml = opts.skipHtml;
          props.element = node.element ? mergeNodeChildren(node, parsedChildren) : null;
          break;
        }
        default:
          assignDefined(props, xtend(node, {
            type: void 0,
            position: void 0,
            children: void 0
          }));
      }
      if (!isSimpleRenderer && node.value) {
        props.value = node.value;
      }
      if (!isSimpleRenderer) {
        props.node = node;
      }
      return props;
    }
    function assignDefined(target, attrs) {
      for (var key in attrs) {
        if (typeof attrs[key] !== "undefined") {
          target[key] = attrs[key];
        }
      }
    }
    function mergeNodeChildren(node, parsedChildren) {
      var el = node.element;
      if (Array.isArray(el)) {
        var Fragment = React2.Fragment || "div";
        return React2.createElement(Fragment, null, el);
      }
      if (el.props.children || parsedChildren) {
        var children = React2.Children.toArray(el.props.children).concat(parsedChildren);
        return React2.cloneElement(el, null, children);
      }
      return React2.cloneElement(el, null);
    }
    function flattenPosition(pos) {
      return [pos.start.line, ":", pos.start.column, "-", pos.end.line, ":", pos.end.column].map(String).join("");
    }
    function getListItemChildren(node, parent) {
      var loose = parent && parent.node ? listLoose(parent.node) : listItemLoose(node);
      return loose ? node.children : unwrapParagraphs(node);
    }
    function unwrapParagraphs(node) {
      return node.children.reduce(function(array, child) {
        return array.concat(child.type === "paragraph" ? child.children : [child]);
      }, []);
    }
    function listLoose(node) {
      var children = node.children;
      var loose = node.spread;
      var index = -1;
      while (!loose && ++index < children.length) {
        loose = listItemLoose(children[index]);
      }
      return loose;
    }
    function listItemLoose(node) {
      var spread = node.spread;
      return spread === void 0 || spread === null ? node.children.length > 1 : spread;
    }
    module.exports = astToReact;
  }
});

// node_modules/react-markdown/lib/wrap-table-rows.js
var require_wrap_table_rows = __commonJS({
  "node_modules/react-markdown/lib/wrap-table-rows.js"(exports, module) {
    "use strict";
    init_react();
    var visit = require_unist_util_visit();
    module.exports = function(node) {
      visit(node, "table", wrap);
      return node;
    };
    function wrap(table) {
      var children = table.children;
      table.children = [{
        type: "tableHead",
        align: table.align,
        children: [children[0]],
        position: children[0].position
      }];
      if (children.length > 1) {
        table.children.push({
          type: "tableBody",
          align: table.align,
          children: children.slice(1),
          position: {
            start: children[1].position.start,
            end: children[children.length - 1].position.end
          }
        });
      }
    }
  }
});

// node_modules/react-markdown/lib/get-definitions.js
var require_get_definitions = __commonJS({
  "node_modules/react-markdown/lib/get-definitions.js"(exports, module) {
    "use strict";
    init_react();
    var visit = require_unist_util_visit();
    module.exports = function getDefinitions(tree) {
      var definitions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      visit(tree, "definition", function(node) {
        var identifier = node.identifier.toUpperCase();
        if (identifier in definitions)
          return;
        definitions[identifier] = {
          href: node.url,
          title: node.title
        };
      });
      return definitions;
    };
  }
});

// node_modules/react-markdown/lib/uri-transformer.js
var require_uri_transformer = __commonJS({
  "node_modules/react-markdown/lib/uri-transformer.js"(exports, module) {
    "use strict";
    init_react();
    var protocols = ["http", "https", "mailto", "tel"];
    module.exports = function uriTransformer(uri) {
      var url = (uri || "").trim();
      var first = url.charAt(0);
      if (first === "#" || first === "/") {
        return url;
      }
      var colon = url.indexOf(":");
      if (colon === -1) {
        return url;
      }
      var length = protocols.length;
      var index = -1;
      while (++index < length) {
        var protocol = protocols[index];
        if (colon === protocol.length && url.slice(0, protocol.length).toLowerCase() === protocol) {
          return url;
        }
      }
      index = url.indexOf("?");
      if (index !== -1 && colon > index) {
        return url;
      }
      index = url.indexOf("#");
      if (index !== -1 && colon > index) {
        return url;
      }
      return "javascript:void(0)";
    };
  }
});

// node_modules/react-markdown/lib/renderers.js
var require_renderers = __commonJS({
  "node_modules/react-markdown/lib/renderers.js"(exports, module) {
    "use strict";
    init_react();
    var xtend = require_immutable();
    var React2 = require_react();
    var supportsStringRender = parseInt((React2.version || "16").slice(0, 2), 10) >= 16;
    var createElement = React2.createElement;
    module.exports = {
      break: "br",
      paragraph: "p",
      emphasis: "em",
      strong: "strong",
      thematicBreak: "hr",
      blockquote: "blockquote",
      delete: "del",
      link: "a",
      image: "img",
      linkReference: "a",
      imageReference: "img",
      table: SimpleRenderer.bind(null, "table"),
      tableHead: SimpleRenderer.bind(null, "thead"),
      tableBody: SimpleRenderer.bind(null, "tbody"),
      tableRow: SimpleRenderer.bind(null, "tr"),
      tableCell: TableCell,
      root: Root,
      text: TextRenderer,
      list: List,
      listItem: ListItem,
      definition: NullRenderer,
      heading: Heading,
      inlineCode: InlineCode,
      code: CodeBlock,
      html: Html,
      virtualHtml: VirtualHtml,
      parsedHtml: ParsedHtml
    };
    function TextRenderer(props) {
      var children = props.children || "";
      return supportsStringRender ? children : createElement("span", null, children);
    }
    function Root(props) {
      var className = props.className;
      var root = !className && React2.Fragment || "div";
      return createElement(root, className ? {
        className
      } : null, props.children);
    }
    function SimpleRenderer(tag, props) {
      return createElement(tag, getCoreProps(props), props.children);
    }
    function TableCell(props) {
      var style = props.align ? {
        textAlign: props.align
      } : void 0;
      var coreProps = getCoreProps(props);
      return createElement(props.isHeader ? "th" : "td", style ? xtend({
        style
      }, coreProps) : coreProps, props.children);
    }
    function Heading(props) {
      return createElement("h".concat(props.level), getCoreProps(props), props.children);
    }
    function List(props) {
      var attrs = getCoreProps(props);
      if (props.start !== null && props.start !== 1 && props.start !== void 0) {
        attrs.start = props.start.toString();
      }
      return createElement(props.ordered ? "ol" : "ul", attrs, props.children);
    }
    function ListItem(props) {
      var checkbox = null;
      if (props.checked !== null && props.checked !== void 0) {
        var checked = props.checked;
        checkbox = createElement("input", {
          type: "checkbox",
          checked,
          readOnly: true
        });
      }
      return createElement("li", getCoreProps(props), checkbox, props.children);
    }
    function CodeBlock(props) {
      var className = props.language && "language-".concat(props.language);
      var code = createElement("code", className ? {
        className
      } : null, props.value);
      return createElement("pre", getCoreProps(props), code);
    }
    function InlineCode(props) {
      return createElement("code", getCoreProps(props), props.children);
    }
    function Html(props) {
      if (props.skipHtml) {
        return null;
      }
      var dangerous = props.allowDangerousHtml || props.escapeHtml === false;
      var tag = props.isBlock ? "div" : "span";
      if (!dangerous) {
        return createElement(React2.Fragment || tag, null, props.value);
      }
      var nodeProps = {
        dangerouslySetInnerHTML: {
          __html: props.value
        }
      };
      return createElement(tag, nodeProps);
    }
    function ParsedHtml(props) {
      return props["data-sourcepos"] ? React2.cloneElement(props.element, {
        "data-sourcepos": props["data-sourcepos"]
      }) : props.element;
    }
    function VirtualHtml(props) {
      return createElement(props.tag, getCoreProps(props), props.children);
    }
    function NullRenderer() {
      return null;
    }
    function getCoreProps(props) {
      var source = props["data-sourcepos"];
      return source ? {
        "data-sourcepos": source
      } : {};
    }
  }
});

// node_modules/react-markdown/lib/symbols.js
var require_symbols = __commonJS({
  "node_modules/react-markdown/lib/symbols.js"(exports) {
    "use strict";
    init_react();
    var HtmlParser = "__RMD_HTML_PARSER__";
    exports.HtmlParser = typeof Symbol === "undefined" ? HtmlParser : Symbol(HtmlParser);
  }
});

// node_modules/react-markdown/lib/react-markdown.js
var require_react_markdown = __commonJS({
  "node_modules/react-markdown/lib/react-markdown.js"(exports, module) {
    "use strict";
    init_react();
    var xtend = require_immutable();
    var unified = require_unified();
    var parse = require_remark_parse();
    var PropTypes = require_prop_types();
    var addListMetadata = require_mdast_add_list_metadata();
    var naiveHtml = require_naive_html();
    var disallowNode = require_disallow_node();
    var astToReact = require_ast_to_react();
    var wrapTableRows = require_wrap_table_rows();
    var getDefinitions = require_get_definitions();
    var uriTransformer = require_uri_transformer();
    var defaultRenderers = require_renderers();
    var symbols = require_symbols();
    var allTypes = Object.keys(defaultRenderers);
    var ReactMarkdown2 = function ReactMarkdown3(props) {
      var src = props.source || props.children || "";
      if (props.allowedTypes && props.disallowedTypes) {
        throw new Error("Only one of `allowedTypes` and `disallowedTypes` should be defined");
      }
      var renderers = xtend(defaultRenderers, props.renderers);
      var processor = unified().use(parse).use(props.plugins || []);
      var tree = processor.runSync(processor.parse(src));
      var renderProps = xtend(props, {
        renderers,
        definitions: getDefinitions(tree)
      });
      determineAstToReactTransforms(props).forEach(function(transform) {
        tree = transform(tree, renderProps);
      });
      return tree;
    };
    function determineAstToReactTransforms(props) {
      var transforms = [wrapTableRows, addListMetadata()];
      var disallowedTypes = props.disallowedTypes;
      if (props.allowedTypes) {
        disallowedTypes = allTypes.filter(function(type) {
          return type !== "root" && props.allowedTypes.indexOf(type) === -1;
        });
      }
      var removalMethod = props.unwrapDisallowed ? "unwrap" : "remove";
      if (disallowedTypes && disallowedTypes.length > 0) {
        transforms.push(disallowNode.ofType(disallowedTypes, removalMethod));
      }
      if (props.allowNode) {
        transforms.push(disallowNode.ifNotMatch(props.allowNode, removalMethod));
      }
      var renderHtml = (props.allowDangerousHtml || props.escapeHtml === false) && !props.skipHtml;
      var hasHtmlParser = (props.astPlugins || []).some(function(transform) {
        return transform.identity === symbols.HtmlParser;
      });
      if (renderHtml && !hasHtmlParser) {
        transforms.push(naiveHtml);
      }
      if (props.astPlugins) {
        transforms = transforms.concat(props.astPlugins);
      }
      transforms.push(astToReact);
      return transforms;
    }
    ReactMarkdown2.defaultProps = {
      transformLinkUri: uriTransformer
    };
    ReactMarkdown2.propTypes = {
      className: PropTypes.string,
      source: PropTypes.string,
      children: PropTypes.string,
      sourcePos: PropTypes.bool,
      rawSourcePos: PropTypes.bool,
      escapeHtml: PropTypes.bool,
      allowDangerousHtml: PropTypes.bool,
      skipHtml: PropTypes.bool,
      allowNode: PropTypes.func,
      allowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
      disallowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
      transformLinkUri: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
      linkTarget: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
      transformImageUri: PropTypes.func,
      astPlugins: PropTypes.arrayOf(PropTypes.func),
      unwrapDisallowed: PropTypes.bool,
      renderers: PropTypes.object,
      plugins: PropTypes.array
    };
    ReactMarkdown2.types = allTypes;
    ReactMarkdown2.renderers = defaultRenderers;
    ReactMarkdown2.uriTransformer = uriTransformer;
    module.exports = ReactMarkdown2;
  }
});

// app/components/FileExplorer/FileExplorer.view.tsx
init_react();

// app/components/FileExplorer/FileExplorer.classNames.ts
init_react();
var container = "border rounded border-gray-300 text-sm";
var cellBack = "block py-2 px-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer";
var cell = "py-2 px-4 border-b border-gray-300 last-of-type:border-none hover:bg-gray-50";
var iconFile = "w-5 h-5 text-gray-500";
var iconDir = "w-5 h-5 text-blue-400";
var link = "hover:text-blue-600 hover:underline";

// app/components/FileExplorer/FileExplorer.view.tsx
function FileExplorerView({
  items,
  branch,
  basePath,
  repoPath
}) {
  const backPath = removeLastPathPart(repoPath);
  const backLink = `${basePath}/tree/${branch}/${backPath}`;
  return /* @__PURE__ */ React.createElement("div", {
    className: container
  }, repoPath && /* @__PURE__ */ React.createElement(Link, {
    to: backLink,
    className: cellBack
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-blue-600"
  }, "..")), items.map((item) => /* @__PURE__ */ React.createElement("div", {
    key: item.path,
    className: cell
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mr-2.5"
  }, item.type === "tree" ? /* @__PURE__ */ React.createElement(FolderIcon_default, {
    className: iconDir
  }) : /* @__PURE__ */ React.createElement(DocumentIcon_default, {
    className: iconFile
  })), /* @__PURE__ */ React.createElement(Link, {
    to: `${basePath}/${item.type}/${branch}/${item.path}`,
    className: link
  }, item.name)))));
}
var FileExplorer_view_default = FileExplorerView;

// app/components/RepoReadMe/RepoReadMe.view.tsx
init_react();
var import_react_markdown = __toESM(require_react_markdown());

// app/components/RepoReadMe/Empty.tsx
init_react();

// app/components/RepoReadMe/RepoReadMe.classNames.ts
init_react();
var container2 = "rounded-md border border-gray-300 my-4";
var header = "p-2.5 border-b border-gray-300 sticky top-0 bg-white z-30";
var tocIconContainer = "hover:bg-gray-100 mr-2 p-1.5 rounded";
var tocIcon = "inline-block -mt-0.5";
var filename = "text-sm font-semibold";
var emptyContainer = "bg-sky-100 p-4 rounded-md border border-sky-200 flex items-center justify-between my-4";
var emptyText = "text-gray-800 text-sm";
var addReadmeBtn = "bg-green-600 hover:bg-green-700 inline-flex text-white font-semibold rounded-lg border border-gray-200 py-1.5 px-4 text-xs";

// app/components/RepoReadMe/Empty.tsx
function Empty() {
  return /* @__PURE__ */ React.createElement("div", {
    className: emptyContainer
  }, /* @__PURE__ */ React.createElement("div", {
    className: emptyText
  }, "Help people interested in this repository understand your project by adding a README."), /* @__PURE__ */ React.createElement("button", {
    className: addReadmeBtn
  }, "Add a README"));
}
var Empty_default = Empty;

// app/components/RepoReadMe/RepoReadMe.view.tsx
function RepoReadMeView({ readme }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, readme ? /* @__PURE__ */ React.createElement("div", {
    className: container2,
    "data-testid": "readme"
  }, /* @__PURE__ */ React.createElement("header", {
    className: header
  }, /* @__PURE__ */ React.createElement("span", {
    className: tocIconContainer
  }, /* @__PURE__ */ React.createElement(TOCIcon_default, {
    className: tocIcon
  })), /* @__PURE__ */ React.createElement("span", {
    className: filename
  }, "README.md")), /* @__PURE__ */ React.createElement("article", {
    className: "prose-h5:border-none prose max-w-none py-6 px-10 text-gray-800 prose-headings:my-1 prose-headings:border-b prose-headings:pb-2 prose-headings:font-medium prose-h1:my-4 prose-h2:my-4 prose-h3:border-none prose-h4:border-none prose-p:my-3 prose-p:leading-6 prose-a:font-normal prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-code:text-gray-800 prose-pre:bg-gray-100 prose-li:my-0.5  prose-img:m-0 prose-img:inline"
  }, /* @__PURE__ */ React.createElement(import_react_markdown.default, null, readme))) : /* @__PURE__ */ React.createElement(Empty_default, null));
}
var RepoReadMe_view_default = RepoReadMeView;

export {
  FileExplorer_view_default,
  RepoReadMe_view_default
};
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/_static/build/_shared/chunk-IT24V5AT.js.map
