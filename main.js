"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../../../sdk/dist/connection/Interfaces.js
  var require_Interfaces = __commonJS({
    "../../../sdk/dist/connection/Interfaces.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../sdk/node_modules/axios/dist/browser/axios.cjs
  var require_axios = __commonJS({
    "../../../sdk/node_modules/axios/dist/browser/axios.cjs"(exports, module) {
      "use strict";
      function bind(fn, thisArg) {
        return function wrap() {
          return fn.apply(thisArg, arguments);
        };
      }
      var { toString } = Object.prototype;
      var { getPrototypeOf } = Object;
      var { iterator, toStringTag } = Symbol;
      var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
      var isUnsafeObjectKey = (prop) => typeof prop === "string" && (prop === "__proto__" || prop === "constructor" || prop === "prototype");
      var isPrototypeBoundary = (obj, prototype2, source) => obj === Object.prototype || !source && prototype2 === null;
      var isSafeAndFullyMutable = (obj) => {
        if (!Object.isExtensible(obj)) {
          return false;
        }
        const props = Object.getOwnPropertyNames(obj);
        if (Object.getOwnPropertySymbols) {
          props.push(...Object.getOwnPropertySymbols(obj));
        }
        return props.every((prop) => {
          if (isUnsafeObjectKey(prop)) {
            return false;
          }
          const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
          return !!descriptor && descriptor.configurable && descriptor.writable === true;
        });
      };
      var hasOwnInPrototypeChain = (thing, prop) => {
        let obj = thing;
        const seen = [];
        while (obj != null) {
          if (seen.indexOf(obj) !== -1) {
            return false;
          }
          seen.push(obj);
          const prototype2 = getPrototypeOf(obj);
          if (isPrototypeBoundary(obj, prototype2, obj === thing)) {
            return false;
          }
          if (hasOwnProperty(obj, prop)) {
            return true;
          }
          obj = prototype2;
        }
        return false;
      };
      var getSafeProp = (obj, prop) => obj != null && hasOwnInPrototypeChain(obj, prop) ? obj[prop] : void 0;
      var toSafeFlatObject = (thing) => {
        if (thing == null || typeof thing !== "object" && typeof thing !== "function") {
          return thing;
        }
        const sourcePrototype = getPrototypeOf(thing);
        if (sourcePrototype === null && isSafeAndFullyMutable(thing)) {
          return thing;
        }
        const result = /* @__PURE__ */ Object.create(null);
        const merged = /* @__PURE__ */ Object.create(null);
        const seen = [];
        let current = thing;
        while (current != null) {
          if (seen.indexOf(current) !== -1) {
            break;
          }
          seen.push(current);
          const prototype2 = current === thing ? sourcePrototype : getPrototypeOf(current);
          if (isPrototypeBoundary(current, prototype2, current === thing)) {
            break;
          }
          const props = Object.getOwnPropertyNames(current);
          if (Object.getOwnPropertySymbols) {
            props.push(...Object.getOwnPropertySymbols(current));
          }
          for (const prop of props) {
            if (isUnsafeObjectKey(prop)) {
              continue;
            }
            if (!hasOwnProperty(merged, prop)) {
              result[prop] = thing[prop];
              merged[prop] = true;
            }
          }
          current = prototype2;
        }
        return result;
      };
      var kindOf = /* @__PURE__ */ ((cache) => (thing) => {
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
      })(/* @__PURE__ */ Object.create(null));
      var kindOfTest = (type) => {
        type = type.toLowerCase();
        return (thing) => kindOf(thing) === type;
      };
      var typeOfTest = (type) => (thing) => typeof thing === type;
      var { isArray } = Array;
      var isUndefined = typeOfTest("undefined");
      function isBuffer(val) {
        return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
      }
      var isArrayBuffer = kindOfTest("ArrayBuffer");
      function isArrayBufferView(val) {
        let result;
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          result = ArrayBuffer.isView(val);
        } else {
          result = val && val.buffer && isArrayBuffer(val.buffer);
        }
        return result;
      }
      var isString = typeOfTest("string");
      var isFunction$1 = typeOfTest("function");
      var isNumber = typeOfTest("number");
      var isObject = (thing) => thing !== null && typeof thing === "object";
      var isBoolean = (thing) => thing === true || thing === false;
      var isPlainObject = (val) => {
        if (!isObject(val)) {
          return false;
        }
        const prototype2 = getPrototypeOf(val);
        return (prototype2 === null || prototype2 === Object.prototype || getPrototypeOf(prototype2) === null) && // Treat safe own/inherited Symbol.toStringTag or Symbol.iterator members as
        // evidence the value is tagged/iterable, while ignoring members reachable
        // only through shared or terminal prototype boundaries.
        !hasOwnInPrototypeChain(val, toStringTag) && !hasOwnInPrototypeChain(val, iterator);
      };
      var isEmptyObject = (val) => {
        if (!isObject(val) || isBuffer(val)) {
          return false;
        }
        try {
          return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
        } catch (e) {
          return false;
        }
      };
      var isDate = kindOfTest("Date");
      var isFile = kindOfTest("File");
      var isReactNativeBlob = (value) => {
        return !!(value && typeof value.uri !== "undefined");
      };
      var isReactNative = (formData) => formData && typeof formData.getParts !== "undefined";
      var isBlob = kindOfTest("Blob");
      var isFileList = kindOfTest("FileList");
      var isSet = kindOfTest("Set");
      var isStream = (val) => isObject(val) && isFunction$1(val.pipe);
      function getGlobal() {
        if (typeof globalThis !== "undefined") return globalThis;
        if (typeof self !== "undefined") return self;
        if (typeof window !== "undefined") return window;
        if (typeof global !== "undefined") return global;
        return {};
      }
      var G = getGlobal();
      var FormDataCtor = typeof G.FormData !== "undefined" ? G.FormData : void 0;
      var isFormData = (thing) => {
        if (!thing) return false;
        if (FormDataCtor && thing instanceof FormDataCtor) return true;
        const proto = getPrototypeOf(thing);
        if (!proto || proto === Object.prototype) return false;
        if (!isFunction$1(thing.append)) return false;
        const kind = kindOf(thing);
        return kind === "formdata" || // detect form-data instance
        kind === "object" && isFunction$1(thing.toString) && thing.toString() === "[object FormData]";
      };
      var isURLSearchParams = kindOfTest("URLSearchParams");
      var [isReadableStream, isRequest, isResponse, isHeaders] = [
        "ReadableStream",
        "Request",
        "Response",
        "Headers"
      ].map(kindOfTest);
      var trim = (str) => {
        return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      };
      function forEach(obj, fn, { allOwnKeys = false } = {}) {
        if (obj === null || typeof obj === "undefined") {
          return;
        }
        let i;
        let l;
        if (typeof obj !== "object") {
          obj = [obj];
        }
        if (isArray(obj)) {
          for (i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
          }
        } else {
          if (isBuffer(obj)) {
            return;
          }
          const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
          const len = keys.length;
          let key;
          for (i = 0; i < len; i++) {
            key = keys[i];
            fn.call(null, obj[key], key, obj);
          }
        }
      }
      function findKey(obj, key) {
        if (isBuffer(obj)) {
          return null;
        }
        key = key.toLowerCase();
        const keys = Object.keys(obj);
        let i = keys.length;
        let _key;
        while (i-- > 0) {
          _key = keys[i];
          if (key === _key.toLowerCase()) {
            return _key;
          }
        }
        return null;
      }
      var _global = (() => {
        if (typeof globalThis !== "undefined") return globalThis;
        return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
      })();
      var isContextDefined = (context) => !isUndefined(context) && context !== _global;
      function merge(...objs) {
        const { caseless, skipUndefined } = isContextDefined(this) && this || {};
        const result = {};
        const assignValue = (val, key) => {
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return;
          }
          const targetKey = caseless && typeof key === "string" && findKey(result, key) || key;
          const existing = hasOwnProperty(result, targetKey) ? result[targetKey] : void 0;
          if (isPlainObject(existing) && isPlainObject(val)) {
            result[targetKey] = merge(existing, val);
          } else if (isPlainObject(val)) {
            result[targetKey] = merge({}, val);
          } else if (isArray(val)) {
            result[targetKey] = val.slice();
          } else if (!skipUndefined || !isUndefined(val)) {
            result[targetKey] = val;
          }
        };
        for (let i = 0, l = objs.length; i < l; i++) {
          const source = objs[i];
          if (!source || isBuffer(source)) {
            continue;
          }
          forEach(source, assignValue);
          if (typeof source !== "object" || isArray(source)) {
            continue;
          }
          const symbols = Object.getOwnPropertySymbols(source);
          for (let j = 0; j < symbols.length; j++) {
            const symbol = symbols[j];
            if (propertyIsEnumerable.call(source, symbol)) {
              assignValue(source[symbol], symbol);
            }
          }
        }
        return result;
      }
      var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
        forEach(
          b,
          (val, key) => {
            if (thisArg && isFunction$1(val)) {
              Object.defineProperty(a, key, {
                // Null-proto descriptor so a polluted Object.prototype.get cannot
                // hijack defineProperty's accessor-vs-data resolution.
                __proto__: null,
                value: bind(val, thisArg),
                writable: true,
                enumerable: true,
                configurable: true
              });
            } else {
              Object.defineProperty(a, key, {
                __proto__: null,
                value: val,
                writable: true,
                enumerable: true,
                configurable: true
              });
            }
          },
          { allOwnKeys }
        );
        return a;
      };
      var stripBOM = (content) => {
        if (content.charCodeAt(0) === 65279) {
          content = content.slice(1);
        }
        return content;
      };
      var inherits = (constructor, superConstructor, props, descriptors) => {
        constructor.prototype = Object.create(superConstructor.prototype, descriptors);
        Object.defineProperty(constructor.prototype, "constructor", {
          __proto__: null,
          value: constructor,
          writable: true,
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(constructor, "super", {
          __proto__: null,
          value: superConstructor.prototype
        });
        props && Object.assign(constructor.prototype, props);
      };
      var toFlatObject = (sourceObj, destObj, filter, propFilter) => {
        let props;
        let i;
        let prop;
        const merged = {};
        destObj = destObj || {};
        if (sourceObj == null) return destObj;
        do {
          props = Object.getOwnPropertyNames(sourceObj);
          i = props.length;
          while (i-- > 0) {
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
              destObj[prop] = sourceObj[prop];
              merged[prop] = true;
            }
          }
          sourceObj = filter !== false && getPrototypeOf(sourceObj);
        } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
        return destObj;
      };
      var endsWith = (str, searchString, position) => {
        str = String(str);
        if (position === void 0 || position > str.length) {
          position = str.length;
        }
        position -= searchString.length;
        const lastIndex = str.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
      };
      var toArray = (thing) => {
        if (!thing) return null;
        if (isArray(thing)) return thing;
        let i = thing.length;
        if (!isNumber(i)) return null;
        const arr = new Array(i);
        while (i-- > 0) {
          arr[i] = thing[i];
        }
        return arr;
      };
      var isTypedArray = /* @__PURE__ */ ((TypedArray) => {
        return (thing) => {
          return TypedArray && thing instanceof TypedArray;
        };
      })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
      var forEachEntry = (obj, fn) => {
        const generator = obj && obj[iterator];
        const _iterator = generator.call(obj);
        let result;
        while ((result = _iterator.next()) && !result.done) {
          const pair = result.value;
          fn.call(obj, pair[0], pair[1]);
        }
      };
      var matchAll = (regExp, str) => {
        let matches;
        const arr = [];
        while ((matches = regExp.exec(str)) !== null) {
          arr.push(matches);
        }
        return arr;
      };
      var isHTMLForm = kindOfTest("HTMLFormElement");
      var toCamelCase = (str) => {
        return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
          return p1.toUpperCase() + p2;
        });
      };
      var { propertyIsEnumerable } = Object.prototype;
      var isRegExp = kindOfTest("RegExp");
      var reduceDescriptors = (obj, reducer) => {
        const descriptors = Object.getOwnPropertyDescriptors(obj);
        const reducedDescriptors = {};
        forEach(descriptors, (descriptor, name) => {
          let ret;
          if ((ret = reducer(descriptor, name, obj)) !== false) {
            reducedDescriptors[name] = ret || descriptor;
          }
        });
        Object.defineProperties(obj, reducedDescriptors);
      };
      var freezeMethods = (obj) => {
        reduceDescriptors(obj, (descriptor, name) => {
          if (isFunction$1(obj) && ["arguments", "caller", "callee"].includes(name)) {
            return false;
          }
          const value = obj[name];
          if (!isFunction$1(value)) return;
          descriptor.enumerable = false;
          if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
          }
          if (!descriptor.set) {
            descriptor.set = () => {
              throw Error("Can not rewrite read-only method '" + name + "'");
            };
          }
        });
      };
      var toObjectSet = (arrayOrString, delimiter) => {
        const obj = {};
        const define2 = (arr) => {
          arr.forEach((value) => {
            obj[value] = true;
          });
        };
        isArray(arrayOrString) ? define2(arrayOrString) : define2(String(arrayOrString).split(delimiter));
        return obj;
      };
      var noop = () => {
      };
      var toFiniteNumber = (value, defaultValue) => {
        return value != null && Number.isFinite(value = +value) ? value : defaultValue;
      };
      function isSpecCompliantForm(thing) {
        return !!(thing && isFunction$1(thing.append) && thing[toStringTag] === "FormData" && thing[iterator]);
      }
      var toJSONObject = (obj) => {
        const visited = /* @__PURE__ */ new WeakSet();
        const visit = (source) => {
          if (isObject(source)) {
            if (visited.has(source)) {
              return;
            }
            if (isBuffer(source)) {
              return source;
            }
            if (!("toJSON" in source)) {
              visited.add(source);
              let target;
              if (isSet(source)) {
                target = [];
                for (const value of source) {
                  const reducedValue = visit(value);
                  !isUndefined(reducedValue) && target.push(reducedValue);
                }
              } else {
                target = isArray(source) ? [] : {};
                forEach(source, (value, key) => {
                  const reducedValue = visit(value);
                  !isUndefined(reducedValue) && (target[key] = reducedValue);
                });
              }
              visited.delete(source);
              return target;
            }
          }
          return source;
        };
        return visit(obj);
      };
      var isAsyncFn = kindOfTest("AsyncFunction");
      var isThenable = (thing) => thing && (isObject(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);
      var _setImmediate = ((setImmediateSupported, postMessageSupported) => {
        if (setImmediateSupported) {
          return setImmediate;
        }
        return postMessageSupported ? ((token, callbacks) => {
          _global.addEventListener(
            "message",
            ({ source, data }) => {
              if (source === _global && data === token) {
                callbacks.length && callbacks.shift()();
              }
            },
            false
          );
          return (cb) => {
            callbacks.push(cb);
            _global.postMessage(token, "*");
          };
        })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
      })(typeof setImmediate === "function", isFunction$1(_global.postMessage));
      var asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
      var isIterable = (thing) => thing != null && isFunction$1(thing[iterator]);
      var isSafeIterable = (thing) => thing != null && hasOwnInPrototypeChain(thing, iterator) && isIterable(thing);
      var utils$1 = {
        isArray,
        isArrayBuffer,
        isBuffer,
        isFormData,
        isArrayBufferView,
        isString,
        isNumber,
        isBoolean,
        isObject,
        isPlainObject,
        isEmptyObject,
        isReadableStream,
        isRequest,
        isResponse,
        isHeaders,
        isUndefined,
        isDate,
        isFile,
        isReactNativeBlob,
        isReactNative,
        isBlob,
        isRegExp,
        isFunction: isFunction$1,
        isStream,
        isURLSearchParams,
        isTypedArray,
        isFileList,
        forEach,
        merge,
        extend,
        trim,
        stripBOM,
        inherits,
        toFlatObject,
        kindOf,
        kindOfTest,
        endsWith,
        toArray,
        forEachEntry,
        matchAll,
        isHTMLForm,
        hasOwnProperty,
        hasOwnProp: hasOwnProperty,
        // an alias to avoid ESLint no-prototype-builtins detection
        hasOwnInPrototypeChain,
        getSafeProp,
        toSafeFlatObject,
        reduceDescriptors,
        freezeMethods,
        toObjectSet,
        toCamelCase,
        noop,
        toFiniteNumber,
        findKey,
        global: _global,
        isContextDefined,
        isSpecCompliantForm,
        toJSONObject,
        isAsyncFn,
        isThenable,
        setImmediate: _setImmediate,
        asap,
        isIterable,
        isSafeIterable
      };
      var ignoreDuplicateOf = utils$1.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ]);
      var parseHeaders = (rawHeaders) => {
        const parsed = {};
        let key;
        let val;
        let i;
        rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
          i = line.indexOf(":");
          key = line.substring(0, i).trim().toLowerCase();
          val = line.substring(i + 1).trim();
          const hasKey = utils$1.hasOwnProp(parsed, key);
          if (!key || hasKey && utils$1.hasOwnProp(ignoreDuplicateOf, key)) {
            return;
          }
          if (key === "set-cookie") {
            if (hasKey) {
              parsed[key].push(val);
            } else {
              parsed[key] = [val];
            }
          } else {
            parsed[key] = hasKey ? parsed[key] + ", " + val : val;
          }
        });
        return parsed;
      };
      function trimSPorHTAB(str) {
        let start = 0;
        let end = str.length;
        while (start < end) {
          const code = str.charCodeAt(start);
          if (code !== 9 && code !== 32) {
            break;
          }
          start += 1;
        }
        while (end > start) {
          const code = str.charCodeAt(end - 1);
          if (code !== 9 && code !== 32) {
            break;
          }
          end -= 1;
        }
        return start === 0 && end === str.length ? str : str.slice(start, end);
      }
      var INVALID_UNICODE_HEADER_VALUE_CHARS = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g");
      var INVALID_BYTE_STRING_HEADER_VALUE_CHARS = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
      function sanitizeValue(value, invalidChars) {
        if (utils$1.isArray(value)) {
          return value.map((item) => sanitizeValue(item, invalidChars));
        }
        return trimSPorHTAB(String(value).replace(invalidChars, ""));
      }
      var sanitizeHeaderValue = (value) => sanitizeValue(value, INVALID_UNICODE_HEADER_VALUE_CHARS);
      var sanitizeByteStringHeaderValue = (value) => sanitizeValue(value, INVALID_BYTE_STRING_HEADER_VALUE_CHARS);
      function toByteStringHeaderObject(headers) {
        const byteStringHeaders = /* @__PURE__ */ Object.create(null);
        utils$1.forEach(headers.toJSON(), (value, header) => {
          byteStringHeaders[header] = sanitizeByteStringHeaderValue(value);
        });
        return byteStringHeaders;
      }
      var $internals$1 = /* @__PURE__ */ Symbol("internals");
      function normalizeHeader(header) {
        return header && String(header).trim().toLowerCase();
      }
      function normalizeValue(value) {
        if (value === false || value == null) {
          return value;
        }
        return utils$1.isArray(value) ? value.map(normalizeValue) : sanitizeHeaderValue(String(value));
      }
      function parseTokens(str) {
        const tokens = /* @__PURE__ */ Object.create(null);
        const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
        let match;
        while (match = tokensRE.exec(str)) {
          tokens[match[1]] = match[2];
        }
        return tokens;
      }
      var parameterNameRE = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
      function trimOWS(value) {
        let start = 0;
        let end = value.length;
        while (start < end) {
          const code = value.charCodeAt(start);
          if (code !== 9 && code !== 32) {
            break;
          }
          start += 1;
        }
        while (end > start) {
          const code = value.charCodeAt(end - 1);
          if (code !== 9 && code !== 32) {
            break;
          }
          end -= 1;
        }
        return start === 0 && end === value.length ? value : value.slice(start, end);
      }
      function decodeQuotedString(value) {
        const last = value.length - 1;
        if (last < 1 || value.charCodeAt(0) !== 34 || value.charCodeAt(last) !== 34) {
          return value;
        }
        let decoded = "";
        for (let i = 1; i < last; i++) {
          const code = value.charCodeAt(i);
          if (code === 34) {
            return value;
          }
          if (code === 92) {
            i += 1;
            if (i >= last) {
              return value;
            }
          }
          decoded += value[i];
        }
        return decoded;
      }
      function parseParameters(value) {
        const parameters = /* @__PURE__ */ Object.create(null);
        const str = String(value);
        let start = 0;
        let quoted = false;
        let escaped = false;
        function parseParameter(end) {
          const part = trimOWS(str.slice(start, end));
          const equals = part.indexOf("=");
          if (equals < 1) {
            return;
          }
          const name = trimOWS(part.slice(0, equals));
          if (!parameterNameRE.test(name)) {
            return;
          }
          const normalizedName = name.toLowerCase();
          if (normalizedName === "__proto__" || normalizedName === "constructor" || normalizedName === "prototype") {
            return;
          }
          const parameterValue = trimOWS(part.slice(equals + 1));
          parameters[normalizedName] = decodeQuotedString(parameterValue);
        }
        for (let i = 0; i < str.length; i++) {
          const code = str.charCodeAt(i);
          if (quoted) {
            if (escaped) {
              escaped = false;
            } else if (code === 92) {
              escaped = true;
            } else if (code === 34) {
              quoted = false;
            }
          } else if (code === 34) {
            quoted = true;
          } else if (code === 44 || code === 59) {
            parseParameter(i);
            start = i + 1;
          }
        }
        parseParameter(str.length);
        return parameters;
      }
      var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
      function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
        if (utils$1.isFunction(filter)) {
          return filter.call(this, value, header);
        }
        if (isHeaderNameFilter) {
          value = header;
        }
        if (!utils$1.isString(value)) return;
        if (utils$1.isString(filter)) {
          return value.indexOf(filter) !== -1;
        }
        if (utils$1.isRegExp(filter)) {
          return filter.test(value);
        }
      }
      function formatHeader(header) {
        return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
          return char.toUpperCase() + str;
        });
      }
      function buildAccessors(obj, header) {
        const accessorName = utils$1.toCamelCase(" " + header);
        ["get", "set", "has"].forEach((methodName) => {
          Object.defineProperty(obj, methodName + accessorName, {
            // Null-proto descriptor so a polluted Object.prototype.get cannot turn
            // this data descriptor into an accessor descriptor on the way in.
            __proto__: null,
            value: function(arg1, arg2, arg3) {
              return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
          });
        });
      }
      var AxiosHeaders = class {
        constructor(headers) {
          headers && this.set(headers);
        }
        set(header, valueOrRewrite, rewrite) {
          const self2 = this;
          function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) {
              return;
            }
            const key = utils$1.findKey(self2, lHeader);
            if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
              self2[key || _header] = normalizeValue(_value);
            }
          }
          const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
          if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
            setHeaders(header, valueOrRewrite);
          } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
            setHeaders(parseHeaders(header), valueOrRewrite);
          } else if (utils$1.isObject(header) && utils$1.isSafeIterable(header)) {
            let obj = /* @__PURE__ */ Object.create(null), dest, key;
            for (const entry of header) {
              if (!utils$1.isArray(entry)) {
                throw new TypeError("Object iterator must return a key-value pair");
              }
              key = entry[0];
              if (utils$1.hasOwnProp(obj, key)) {
                dest = obj[key];
                obj[key] = utils$1.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]];
              } else {
                obj[key] = entry[1];
              }
            }
            setHeaders(obj, valueOrRewrite);
          } else {
            header != null && setHeader(valueOrRewrite, header, rewrite);
          }
          return this;
        }
        get(header, parser) {
          header = normalizeHeader(header);
          if (header) {
            const key = utils$1.findKey(this, header);
            if (key) {
              const value = this[key];
              if (!parser) {
                return value;
              }
              if (parser === true) {
                return parseTokens(value);
              }
              if (utils$1.isFunction(parser)) {
                return parser.call(this, value, key);
              }
              if (utils$1.isRegExp(parser)) {
                return parser.exec(value);
              }
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(header, matcher) {
          header = normalizeHeader(header);
          if (header) {
            const key = utils$1.findKey(this, header);
            return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
          }
          return false;
        }
        delete(header, matcher) {
          const self2 = this;
          let deleted = false;
          function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
              const key = utils$1.findKey(self2, _header);
              if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
                delete self2[key];
                deleted = true;
              }
            }
          }
          if (utils$1.isArray(header)) {
            header.forEach(deleteHeader);
          } else {
            deleteHeader(header);
          }
          return deleted;
        }
        clear(matcher) {
          const keys = Object.keys(this);
          let i = keys.length;
          let deleted = false;
          while (i--) {
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
              delete this[key];
              deleted = true;
            }
          }
          return deleted;
        }
        normalize(format) {
          const self2 = this;
          const headers = {};
          utils$1.forEach(this, (value, header) => {
            const key = utils$1.findKey(headers, header);
            if (key) {
              self2[key] = normalizeValue(value);
              delete self2[header];
              return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) {
              delete self2[header];
            }
            self2[normalized] = normalizeValue(value);
            headers[normalized] = true;
          });
          return this;
        }
        concat(...targets) {
          return this.constructor.concat(this, ...targets);
        }
        toJSON(asStrings) {
          const obj = /* @__PURE__ */ Object.create(null);
          utils$1.forEach(this, (value, header) => {
            value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(", ") : value);
          });
          return obj;
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
        }
        getSetCookie() {
          const value = this.get("set-cookie");
          return utils$1.isArray(value) ? value : value == null || value === false ? [] : [value];
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(thing) {
          return thing instanceof this ? thing : new this(thing);
        }
        static parseParameters(value) {
          return parseParameters(value);
        }
        static concat(first, ...targets) {
          const computed = new this(first);
          targets.forEach((target) => computed.set(target));
          return computed;
        }
        static accessor(header) {
          const internals = this[$internals$1] = this[$internals$1] = {
            accessors: {}
          };
          const accessors = internals.accessors;
          const prototype2 = this.prototype;
          function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
              buildAccessors(prototype2, _header);
              accessors[lHeader] = true;
            }
          }
          utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
          return this;
        }
      };
      AxiosHeaders.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization"
      ]);
      utils$1.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
        let mapped = key[0].toUpperCase() + key.slice(1);
        return {
          get: () => value,
          set(headerValue) {
            this[mapped] = headerValue;
          }
        };
      });
      utils$1.freezeMethods(AxiosHeaders);
      var REDACTED = "[REDACTED ****]";
      function hasOwnOrPrototypeToJSON(source) {
        if (utils$1.hasOwnProp(source, "toJSON")) {
          return true;
        }
        let prototype2 = Object.getPrototypeOf(source);
        while (prototype2 && prototype2 !== Object.prototype) {
          if (utils$1.hasOwnProp(prototype2, "toJSON")) {
            return true;
          }
          prototype2 = Object.getPrototypeOf(prototype2);
        }
        return false;
      }
      function redactConfig(config, redactKeys) {
        const lowerKeys = new Set(redactKeys.map((k) => String(k).toLowerCase()));
        const seen = [];
        const visit = (source) => {
          if (source === null || typeof source !== "object") return source;
          if (utils$1.isBuffer(source)) return source;
          if (seen.indexOf(source) !== -1) return void 0;
          if (source instanceof AxiosHeaders) {
            source = source.toJSON();
          }
          seen.push(source);
          let result;
          if (utils$1.isArray(source)) {
            result = [];
            source.forEach((v, i) => {
              const reducedValue = visit(v);
              if (!utils$1.isUndefined(reducedValue)) {
                result[i] = reducedValue;
              }
            });
          } else {
            if (!utils$1.isPlainObject(source) && hasOwnOrPrototypeToJSON(source)) {
              seen.pop();
              return source;
            }
            result = /* @__PURE__ */ Object.create(null);
            for (const [key, value] of Object.entries(source)) {
              const reducedValue = lowerKeys.has(key.toLowerCase()) ? REDACTED : visit(value);
              if (!utils$1.isUndefined(reducedValue)) {
                result[key] = reducedValue;
              }
            }
          }
          seen.pop();
          return result;
        };
        return visit(config);
      }
      function stringifySafely$1(value) {
        try {
          return String(value);
        } catch (err) {
          return "";
        }
      }
      function aggregateErrorMessage(error) {
        const message2 = error.errors.map((entry) => {
          try {
            return entry && entry.message ? stringifySafely$1(entry.message) : stringifySafely$1(entry);
          } catch (err) {
            return "";
          }
        }).filter(Boolean).join("; ");
        return message2 || error.name || "AggregateError";
      }
      var AxiosError = class _AxiosError extends Error {
        static from(error, code, config, request2, response, customProps) {
          let message2 = error.message;
          if (!message2 && utils$1.isArray(error.errors) && error.errors.length) {
            message2 = aggregateErrorMessage(error);
          }
          const axiosError = new _AxiosError(message2, code || error.code, config, request2, response);
          Object.defineProperty(axiosError, "cause", {
            __proto__: null,
            value: error,
            writable: true,
            enumerable: false,
            configurable: true
          });
          axiosError.name = error.name;
          if (error.status != null && axiosError.status == null) {
            axiosError.status = error.status;
          }
          customProps && Object.assign(axiosError, customProps);
          return axiosError;
        }
        /**
         * Create an Error with the specified message, config, error code, request and response.
         *
         * @param {string} message The error message.
         * @param {string} [code] The error code (for example, 'ECONNABORTED').
         * @param {Object} [config] The config.
         * @param {Object} [request] The request.
         * @param {Object} [response] The response.
         *
         * @returns {Error} The created error.
         */
        constructor(message2, code, config, request2, response) {
          super(message2);
          Object.defineProperty(this, "message", {
            // Null-proto descriptor so a polluted Object.prototype.get cannot turn
            // this data descriptor into an accessor descriptor on the way in.
            __proto__: null,
            value: message2,
            enumerable: true,
            writable: true,
            configurable: true
          });
          this.name = "AxiosError";
          this.isAxiosError = true;
          code && (this.code = code);
          config && (this.config = config);
          request2 && (this.request = request2);
          if (response) {
            this.response = response;
            this.status = response.status;
          }
        }
        toJSON() {
          const config = this.config;
          const redactKeys = config && utils$1.hasOwnProp(config, "redact") ? config.redact : void 0;
          const serializedConfig = utils$1.isArray(redactKeys) && redactKeys.length > 0 ? redactConfig(config, redactKeys) : utils$1.toJSONObject(config);
          return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: serializedConfig,
            code: this.code,
            status: this.status
          };
        }
      };
      AxiosError.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
      AxiosError.ERR_BAD_OPTION = "ERR_BAD_OPTION";
      AxiosError.ECONNABORTED = "ECONNABORTED";
      AxiosError.ETIMEDOUT = "ETIMEDOUT";
      AxiosError.ECONNREFUSED = "ECONNREFUSED";
      AxiosError.ERR_NETWORK = "ERR_NETWORK";
      AxiosError.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
      AxiosError.ERR_DEPRECATED = "ERR_DEPRECATED";
      AxiosError.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
      AxiosError.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
      AxiosError.ERR_CANCELED = "ERR_CANCELED";
      AxiosError.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
      AxiosError.ERR_INVALID_URL = "ERR_INVALID_URL";
      AxiosError.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
      var httpAdapter = null;
      var DEFAULT_FORM_DATA_MAX_DEPTH = 100;
      function isVisitable(thing) {
        return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
      }
      function removeBrackets(key) {
        return utils$1.endsWith(key, "[]") ? key.slice(0, -2) : key;
      }
      function renderKey(path, key, dots) {
        if (!path) return key;
        return path.concat(key).map(function each(token, i) {
          token = removeBrackets(token);
          return !dots && i ? "[" + token + "]" : token;
        }).join(dots ? "." : "");
      }
      function isFlatArray(arr) {
        return utils$1.isArray(arr) && !arr.some(isVisitable);
      }
      var predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
        return /^is[A-Z]/.test(prop);
      });
      function toFormData(obj, formData, options) {
        if (!utils$1.isObject(obj)) {
          throw new TypeError("target must be an object");
        }
        formData = formData || new FormData();
        const option = (name, fallback) => {
          const value = utils$1.getSafeProp(options, name);
          return utils$1.isUndefined(value) ? fallback : value;
        };
        const metaTokens = option("metaTokens", true);
        const visitor = option("visitor") || defaultVisitor;
        const dots = option("dots", false);
        const indexes = option("indexes", false);
        const _Blob = option("Blob") || typeof Blob !== "undefined" && Blob;
        const maxDepth = option("maxDepth", DEFAULT_FORM_DATA_MAX_DEPTH);
        const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
        const stack = [];
        if (!utils$1.isFunction(visitor)) {
          throw new TypeError("visitor must be a function");
        }
        function convertValue(value) {
          if (value === null) return "";
          if (utils$1.isDate(value)) {
            return value.toISOString();
          }
          if (utils$1.isBoolean(value)) {
            return value.toString();
          }
          if (!useBlob && utils$1.isBlob(value)) {
            throw new AxiosError("Blob is not supported. Use a Buffer instead.");
          }
          if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
            if (useBlob && typeof _Blob === "function") {
              return new _Blob([value]);
            }
            throw new AxiosError(
              "Blob is not supported. Use a Buffer instead.",
              AxiosError.ERR_NOT_SUPPORT
            );
          }
          return value;
        }
        function throwIfMaxDepthExceeded(depth) {
          if (depth > maxDepth) {
            throw new AxiosError(
              "Object is too deeply nested (" + depth + " levels). Max depth: " + maxDepth,
              AxiosError.ERR_FORM_DATA_DEPTH_EXCEEDED
            );
          }
        }
        function stringifyWithDepthLimit(value, depth) {
          if (maxDepth === Infinity) {
            return JSON.stringify(value);
          }
          const ancestors = [];
          return JSON.stringify(value, function limitDepth(_key, currentValue) {
            if (!utils$1.isObject(currentValue)) {
              return currentValue;
            }
            while (ancestors.length && ancestors[ancestors.length - 1] !== this) {
              ancestors.pop();
            }
            ancestors.push(currentValue);
            throwIfMaxDepthExceeded(depth + ancestors.length - 1);
            return currentValue;
          });
        }
        function defaultVisitor(value, key, path) {
          let arr = value;
          if (utils$1.isReactNative(formData) && utils$1.isReactNativeBlob(value)) {
            formData.append(renderKey(path, key, dots), convertValue(value));
            return false;
          }
          if (value && !path && typeof value === "object") {
            if (utils$1.endsWith(key, "{}")) {
              key = metaTokens ? key : key.slice(0, -2);
              value = stringifyWithDepthLimit(value, 1);
            } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, "[]")) && (arr = utils$1.toArray(value))) {
              key = removeBrackets(key);
              arr.forEach(function each(el, index) {
                !(utils$1.isUndefined(el) || el === null) && formData.append(
                  // eslint-disable-next-line no-nested-ternary
                  indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
                  convertValue(el)
                );
              });
              return false;
            }
          }
          if (isVisitable(value)) {
            return true;
          }
          formData.append(renderKey(path, key, dots), convertValue(value));
          return false;
        }
        const exposedHelpers = Object.assign(predicates, {
          defaultVisitor,
          convertValue,
          isVisitable
        });
        function build(value, path, depth = 0) {
          if (utils$1.isUndefined(value)) return;
          throwIfMaxDepthExceeded(depth);
          if (stack.indexOf(value) !== -1) {
            throw new Error("Circular reference detected in " + path.join("."));
          }
          stack.push(value);
          utils$1.forEach(value, function each(el, key) {
            const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) {
              build(el, path ? path.concat(key) : [key], depth + 1);
            }
          });
          stack.pop();
        }
        if (!utils$1.isObject(obj)) {
          throw new TypeError("data must be an object");
        }
        build(obj);
        return formData;
      }
      function encode$1(str) {
        const charMap = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+"
        };
        return encodeURIComponent(str).replace(/[!'()~]|%20/g, function replacer(match) {
          return charMap[match];
        });
      }
      function AxiosURLSearchParams(params, options) {
        this._pairs = [];
        params && toFormData(params, this, options);
      }
      var prototype = AxiosURLSearchParams.prototype;
      prototype.append = function append(name, value) {
        this._pairs.push([name, value]);
      };
      prototype.toString = function toString2(encoder2) {
        const _encode = encoder2 ? (value) => encoder2.call(this, value, encode$1) : encode$1;
        return this._pairs.map(function each(pair) {
          return _encode(pair[0]) + "=" + _encode(pair[1]);
        }, "").join("&");
      };
      function encode(val) {
        return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
      }
      function buildURL(url, params, options) {
        if (!params) {
          return url;
        }
        url = url || "";
        const _options = utils$1.isFunction(options) ? {
          serialize: options
        } : options;
        const _encode = utils$1.getSafeProp(_options, "encode") || encode;
        const serializeFn = utils$1.getSafeProp(_options, "serialize");
        let serializedParams;
        if (serializeFn) {
          serializedParams = serializeFn(params, _options);
        } else {
          serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, _options).toString(_encode);
        }
        if (serializedParams) {
          const hashmarkIndex = url.indexOf("#");
          if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
          }
          url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
        }
        return url;
      }
      var $internals = /* @__PURE__ */ Symbol("internals");
      function countHandlers(handlers) {
        return handlers ? handlers.length : 0;
      }
      function trimHandlers(handlers) {
        if (!handlers) {
          return;
        }
        while (handlers.length && handlers[handlers.length - 1] === null) {
          handlers.pop();
        }
      }
      function syncHandlerEntries(manager, internals) {
        const handlers = manager.handlers;
        const length = countHandlers(handlers);
        if (handlers !== internals.handlersRef) {
          internals.handlersRef = handlers;
          internals.handlerEntries.clear();
        } else if (length !== internals.handlersLength) {
          if (!length) {
            internals.handlerEntries.clear();
          } else {
            internals.handlerEntries.forEach(function removeStaleEntry(entry, id) {
              if (handlers[entry.index] !== entry.handler) {
                internals.handlerEntries.delete(id);
              }
            });
          }
        }
        internals.handlersLength = length;
      }
      var InterceptorManager = class {
        constructor() {
          this.handlers = [];
          this[$internals] = {
            handlersRef: this.handlers,
            handlersLength: this.handlers.length,
            handlerEntries: /* @__PURE__ */ new Map(),
            iterationDepth: 0,
            nextId: 0
          };
        }
        /**
         * Add a new interceptor to the stack
         *
         * @param {Function} fulfilled The function to handle `then` for a `Promise`
         * @param {Function} rejected The function to handle `reject` for a `Promise`
         * @param {Object} options The options for the interceptor, synchronous and runWhen
         *
         * @return {Number} An ID used to remove interceptor later
         */
        use(fulfilled, rejected, options) {
          const handler = {
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
          };
          const internals = this[$internals];
          if (this.handlers == null) {
            this.handlers = [];
          }
          syncHandlerEntries(this, internals);
          const id = internals.nextId++;
          this.handlers.push(handler);
          internals.handlerEntries.set(id, {
            handler,
            index: this.handlers.length - 1
          });
          internals.handlersLength = this.handlers.length;
          return id;
        }
        /**
         * Remove an interceptor from the stack
         *
         * @param {Number} id The ID that was returned by `use`
         *
         * @returns {void}
         */
        eject(id) {
          const internals = this[$internals];
          syncHandlerEntries(this, internals);
          const entry = internals.handlerEntries.get(id);
          if (entry) {
            internals.handlerEntries.delete(id);
            if (this.handlers[entry.index] !== entry.handler) {
              return;
            }
            this.handlers[entry.index] = null;
            if (!internals.iterationDepth) {
              trimHandlers(this.handlers);
              internals.handlersLength = this.handlers.length;
            }
          }
        }
        /**
         * Clear all interceptors from the stack
         *
         * @returns {void}
         */
        clear() {
          if (this.handlers) {
            this.handlers = [];
            syncHandlerEntries(this, this[$internals]);
          }
        }
        /**
         * Iterate over all the registered interceptors
         *
         * This method is particularly useful for skipping over any
         * interceptors that may have become `null` calling `eject`.
         *
         * @param {Function} fn The function to call for each interceptor
         *
         * @returns {void}
         */
        forEach(fn) {
          const internals = this[$internals];
          syncHandlerEntries(this, internals);
          internals.iterationDepth++;
          try {
            utils$1.forEach(this.handlers, function forEachHandler(h) {
              if (h !== null) {
                fn(h);
              }
            });
          } finally {
            if (!--internals.iterationDepth) {
              syncHandlerEntries(this, internals);
              trimHandlers(this.handlers);
              internals.handlersLength = countHandlers(this.handlers);
            }
          }
        }
      };
      var transitionalDefaults = {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false,
        legacyInterceptorReqResOrdering: true,
        advertiseZstdAcceptEncoding: false,
        validateStatusUndefinedResolves: true
      };
      var URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
      var FormData$1 = typeof FormData !== "undefined" ? FormData : null;
      var Blob$1 = typeof Blob !== "undefined" ? Blob : null;
      var platform$1 = {
        isBrowser: true,
        classes: {
          URLSearchParams: URLSearchParams$1,
          FormData: FormData$1,
          Blob: Blob$1
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
      };
      var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
      var _navigator = typeof navigator === "object" && navigator || void 0;
      var hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
      var hasStandardBrowserWebWorkerEnv = (() => {
        return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
        self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
      })();
      var origin = hasBrowserEnv && window.location.href || "http://localhost";
      var utils = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        hasBrowserEnv,
        hasStandardBrowserEnv,
        hasStandardBrowserWebWorkerEnv,
        navigator: _navigator,
        origin
      });
      var platform = {
        ...utils,
        ...platform$1
      };
      function toURLEncodedForm(data, options) {
        return toFormData(data, new platform.classes.URLSearchParams(), {
          visitor: function(value, key, path, helpers) {
            if (platform.isNode && utils$1.isBuffer(value)) {
              this.append(key, value.toString("base64"));
              return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
          },
          ...options
        });
      }
      var MAX_DEPTH = DEFAULT_FORM_DATA_MAX_DEPTH;
      function throwIfDepthExceeded(index) {
        if (index > MAX_DEPTH) {
          throw new AxiosError(
            "FormData field is too deeply nested (" + index + " levels). Max depth: " + MAX_DEPTH,
            AxiosError.ERR_FORM_DATA_DEPTH_EXCEEDED
          );
        }
      }
      function parsePropPath(name) {
        const path = [];
        const pattern = /[^.[\]]+|\[([^.[\]]*)]/g;
        let match;
        while ((match = pattern.exec(name)) !== null) {
          throwIfDepthExceeded(path.length);
          path.push(match[0] === "[]" ? "" : match[1] || match[0]);
        }
        return path;
      }
      function arrayToObject(arr) {
        const obj = {};
        const keys = Object.keys(arr);
        let i;
        const len = keys.length;
        let key;
        for (i = 0; i < len; i++) {
          key = keys[i];
          obj[key] = arr[key];
        }
        return obj;
      }
      function formDataToJSON(formData) {
        function buildPath(path, value, target, index) {
          throwIfDepthExceeded(index);
          let name = path[index++];
          if (name === "__proto__") return true;
          const isNumericKey = Number.isFinite(+name);
          const isLast = index >= path.length;
          name = !name && utils$1.isArray(target) ? target.length : name;
          if (isLast) {
            if (utils$1.hasOwnProp(target, name)) {
              target[name] = utils$1.isArray(target[name]) ? target[name].concat(value) : [target[name], value];
            } else {
              target[name] = value;
            }
            return !isNumericKey;
          }
          if (!utils$1.hasOwnProp(target, name) || !utils$1.isObject(target[name])) {
            target[name] = [];
          }
          const result = buildPath(path, value, target[name], index);
          if (result && utils$1.isArray(target[name])) {
            target[name] = arrayToObject(target[name]);
          }
          return !isNumericKey;
        }
        if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
          const obj = {};
          utils$1.forEachEntry(formData, (name, value) => {
            buildPath(parsePropPath(name), value, obj, 0);
          });
          return obj;
        }
        return null;
      }
      var methodList = Object.freeze([
        "get",
        "delete",
        "head",
        "options",
        "post",
        "put",
        "patch",
        "purge",
        "link",
        "unlink",
        "query"
      ]);
      var own = (obj, key) => obj != null && utils$1.hasOwnProp(obj, key) ? obj[key] : void 0;
      function stringifySafely(rawValue, parser, encoder2) {
        if (utils$1.isString(rawValue)) {
          try {
            (parser || JSON.parse)(rawValue);
            return utils$1.trim(rawValue);
          } catch (e) {
            if (e.name !== "SyntaxError") {
              throw e;
            }
          }
        }
        return (encoder2 || JSON.stringify)(rawValue);
      }
      var defaults = {
        transitional: transitionalDefaults,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [
          function transformRequest(data, headers) {
            const contentType = headers.getContentType() || "";
            const hasJSONContentType = contentType.indexOf("application/json") > -1;
            const isObjectPayload = utils$1.isObject(data);
            if (isObjectPayload && utils$1.isHTMLForm(data)) {
              data = new FormData(data);
            }
            const isFormData2 = utils$1.isFormData(data);
            if (isFormData2) {
              return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
            }
            if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) {
              return data;
            }
            if (utils$1.isArrayBufferView(data)) {
              return data.buffer;
            }
            if (utils$1.isURLSearchParams(data)) {
              headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
              return data.toString();
            }
            let isFileList2;
            if (isObjectPayload) {
              const formSerializer = own(this, "formSerializer");
              if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
                return toURLEncodedForm(data, formSerializer).toString();
              }
              if ((isFileList2 = utils$1.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
                const env = own(this, "env");
                const _FormData = env && env.FormData;
                return toFormData(
                  isFileList2 ? { "files[]": data } : data,
                  _FormData && new _FormData(),
                  formSerializer
                );
              }
            }
            if (isObjectPayload || hasJSONContentType) {
              headers.setContentType("application/json", false);
              return stringifySafely(data);
            }
            return data;
          }
        ],
        transformResponse: [
          function transformResponse(data) {
            const transitional = own(this, "transitional") || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const responseType = own(this, "responseType");
            const JSONRequested = responseType === "json";
            if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
              return data;
            }
            if (data && utils$1.isString(data) && (forcedJSONParsing && !responseType || JSONRequested)) {
              const silentJSONParsing = transitional && transitional.silentJSONParsing;
              const strictJSONParsing = !silentJSONParsing && JSONRequested;
              try {
                return JSON.parse(data, own(this, "parseReviver"));
              } catch (e) {
                if (strictJSONParsing) {
                  if (e.name === "SyntaxError") {
                    throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, own(this, "response"));
                  }
                  throw e;
                }
              }
            }
            return data;
          }
        ],
        /**
         * A timeout in milliseconds to abort a request. If set to 0 (default) a
         * timeout is not created.
         */
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
          FormData: platform.classes.FormData,
          Blob: platform.classes.Blob
        },
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
          }
        }
      };
      utils$1.forEach(methodList, (method) => {
        defaults.headers[method] = {};
      });
      function transformData(fns, response) {
        const config = this || defaults;
        const context = response || config;
        const headers = AxiosHeaders.from(context.headers);
        let data = context.data;
        utils$1.forEach(fns, function transform(fn) {
          data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
        });
        headers.normalize();
        return data;
      }
      function isCancel(value) {
        return !!(value && value.__CANCEL__);
      }
      var CanceledError = class extends AxiosError {
        /**
         * A `CanceledError` is an object that is thrown when an operation is canceled.
         *
         * @param {string=} message The message.
         * @param {Object=} config The config.
         * @param {Object=} request The request.
         *
         * @returns {CanceledError} The created error.
         */
        constructor(message2, config, request2) {
          super(message2 == null ? "canceled" : message2, AxiosError.ERR_CANCELED, config, request2);
          this.name = "CanceledError";
          this.__CANCEL__ = true;
        }
      };
      function settle(resolve, reject, response) {
        const validateStatus = response.config.validateStatus;
        if (!response.status || !validateStatus || validateStatus(response.status)) {
          resolve(response);
        } else {
          reject(new AxiosError(
            "Request failed with status code " + response.status,
            response.status >= 400 && response.status < 500 ? AxiosError.ERR_BAD_REQUEST : AxiosError.ERR_BAD_RESPONSE,
            response.config,
            response.request,
            response
          ));
        }
      }
      var urlParserControlCharacters = /[\t\n\r]/g;
      function normalizeURLForProtocolCheck(url) {
        if (typeof url !== "string") {
          return url;
        }
        let start = 0;
        while (start < url.length && url.charCodeAt(start) <= 32) {
          start++;
        }
        return url.slice(start).replace(urlParserControlCharacters, "");
      }
      function parseProtocol(url) {
        const match = /^([-+\w]{1,25}):(?:\/\/)?/.exec(url);
        return match && match[1] || "";
      }
      function speedometer(samplesCount, min) {
        samplesCount = samplesCount || 10;
        const bytes = new Array(samplesCount);
        const timestamps = new Array(samplesCount);
        let head = 0;
        let tail = 0;
        let firstSampleTS;
        min = min !== void 0 ? min : 1e3;
        return function push(chunkLength) {
          const now = Date.now();
          const startedAt = timestamps[tail];
          if (!firstSampleTS) {
            firstSampleTS = now;
          }
          bytes[head] = chunkLength;
          timestamps[head] = now;
          let i = tail;
          let bytesCount = 0;
          while (i !== head) {
            bytesCount += bytes[i++];
            i = i % samplesCount;
          }
          head = (head + 1) % samplesCount;
          if (head === tail) {
            tail = (tail + 1) % samplesCount;
          }
          if (now - firstSampleTS < min) {
            return;
          }
          const passed = startedAt && now - startedAt;
          return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
        };
      }
      function throttle(fn, freq) {
        let timestamp = 0;
        let threshold = 1e3 / freq;
        let lastArgs;
        let timer;
        const invoke = (args, now = Date.now()) => {
          timestamp = now;
          lastArgs = null;
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
          fn(...args);
        };
        const throttled = (...args) => {
          const now = Date.now();
          const passed = now - timestamp;
          if (passed >= threshold) {
            invoke(args, now);
          } else {
            lastArgs = args;
            if (!timer) {
              timer = setTimeout(() => {
                timer = null;
                invoke(lastArgs);
              }, threshold - passed);
            }
          }
        };
        const flush = () => lastArgs && invoke(lastArgs);
        const flushWith = (...args) => invoke(args);
        return [throttled, flush, flushWith];
      }
      var progressEventReducer = (listener, isDownloadStream, freq = 3) => {
        let bytesNotified = 0;
        const _speedometer = speedometer(50, 250);
        return throttle((e) => {
          if (!e || !utils$1.isNumber(e.loaded)) {
            return;
          }
          const rawLoaded = e.loaded;
          const total = e.lengthComputable ? e.total : void 0;
          const loaded = Math.max(0, total != null ? Math.min(rawLoaded, total) : rawLoaded);
          const progressBytes = Math.max(0, loaded - bytesNotified);
          const rate = _speedometer(progressBytes);
          bytesNotified = Math.max(bytesNotified, loaded);
          const data = {
            loaded,
            total,
            progress: total ? loaded / total : void 0,
            bytes: progressBytes,
            rate: rate ? rate : void 0,
            estimated: rate && total ? (total - loaded) / rate : void 0,
            event: e,
            lengthComputable: total != null,
            [isDownloadStream ? "download" : "upload"]: true
          };
          listener(data);
        }, freq);
      };
      var progressEventDecorator = (total, throttled) => {
        const lengthComputable = total != null;
        return [
          (loaded) => throttled[0]({
            lengthComputable,
            total,
            loaded
          }),
          throttled[1]
        ];
      };
      var asyncDecorator = (fn, scheduler = utils$1.asap) => (...args) => scheduler(() => fn(...args));
      var isURLSameOrigin = platform.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url) => {
        url = new URL(url, platform.origin);
        return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
      })(
        new URL(platform.origin),
        platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
      ) : () => true;
      var cookies = platform.hasStandardBrowserEnv ? (
        // Standard browser envs support document.cookie
        {
          write(name, value, expires, path, domain, secure, sameSite) {
            if (typeof document === "undefined") return;
            const cookie = [`${name}=${encodeURIComponent(value)}`];
            if (utils$1.isNumber(expires)) {
              cookie.push(`expires=${new Date(expires).toUTCString()}`);
            }
            if (utils$1.isString(path)) {
              cookie.push(`path=${path}`);
            }
            if (utils$1.isString(domain)) {
              cookie.push(`domain=${domain}`);
            }
            if (secure === true) {
              cookie.push("secure");
            }
            if (utils$1.isString(sameSite)) {
              cookie.push(`SameSite=${sameSite}`);
            }
            document.cookie = cookie.join("; ");
          },
          read(name) {
            if (typeof document === "undefined") return null;
            const cookies2 = document.cookie.split(";");
            for (let i = 0; i < cookies2.length; i++) {
              const cookie = cookies2[i].replace(/^\s+/, "");
              const eq = cookie.indexOf("=");
              if (eq !== -1 && cookie.slice(0, eq) === name) {
                try {
                  return decodeURIComponent(cookie.slice(eq + 1));
                } catch (e) {
                  return cookie.slice(eq + 1);
                }
              }
            }
            return null;
          },
          remove(name) {
            this.write(name, "", Date.now() - 864e5, "/");
          }
        }
      ) : (
        // Non-standard browser env (web workers, react-native) lack needed support.
        {
          write() {
          },
          read() {
            return null;
          },
          remove() {
          }
        }
      );
      function isAbsoluteURL(url) {
        if (typeof url !== "string") {
          return false;
        }
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
      }
      function combineURLs(baseURL, relativeURL) {
        if (!relativeURL) {
          return baseURL;
        }
        let end = baseURL.length;
        while (end > 0 && baseURL.charCodeAt(end - 1) === 47) {
          end--;
        }
        return baseURL.slice(0, end) + "/" + relativeURL.replace(/^\/+/, "");
      }
      var malformedHttpProtocol = /^https?:(?!\/\/)/i;
      function redactFragment(fragment) {
        if (!fragment) {
          return fragment;
        }
        return fragment.replace(/(^|&)([^=&]*=)?[^&]+/g, (match, separator, parameterName = "") => {
          return `${separator}${parameterName}${REDACTED}`;
        });
      }
      function redactSensitiveURLParts(url) {
        const redactedURL = url.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${REDACTED}@`);
        const fragmentIndex = redactedURL.indexOf("#");
        const urlWithoutFragment = fragmentIndex === -1 ? redactedURL : redactedURL.slice(0, fragmentIndex);
        const redactedURLWithoutFragment = urlWithoutFragment.replace(
          /([?&][^=&#]*=)[^&#]*/g,
          `$1${REDACTED}`
        );
        if (fragmentIndex === -1) {
          return redactedURLWithoutFragment;
        }
        return `${redactedURLWithoutFragment}#${redactFragment(redactedURL.slice(fragmentIndex + 1))}`;
      }
      function assertValidHttpProtocolURL(url, config) {
        if (typeof url === "string") {
          const normalizedURL = normalizeURLForProtocolCheck(url);
          if (malformedHttpProtocol.test(normalizedURL)) {
            throw new AxiosError(
              `Invalid URL ${JSON.stringify(redactSensitiveURLParts(normalizedURL))}: missing "//" after protocol`,
              AxiosError.ERR_INVALID_URL,
              config
            );
          }
        }
      }
      function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls, config) {
        assertValidHttpProtocolURL(requestedURL, config);
        let isRelativeUrl = !isAbsoluteURL(requestedURL);
        if (baseURL && (isRelativeUrl || allowAbsoluteUrls === false)) {
          assertValidHttpProtocolURL(baseURL, config);
          return combineURLs(baseURL, requestedURL);
        }
        return requestedURL;
      }
      var headersToObject = (thing) => thing instanceof AxiosHeaders ? { ...thing } : thing;
      var ownEnumerableKeys = (thing) => {
        if (Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor) {
          return Object.keys(thing).concat(
            Object.getOwnPropertySymbols(thing).filter(
              (symbol) => Object.getOwnPropertyDescriptor(thing, symbol).enumerable
            )
          );
        }
        return Object.keys(thing);
      };
      function mergeConfig(config1, config2) {
        config1 = config1 || {};
        config2 = config2 || {};
        const config = /* @__PURE__ */ Object.create(null);
        Object.defineProperty(config, "hasOwnProperty", {
          // Null-proto descriptor so a polluted Object.prototype.get cannot turn
          // this data descriptor into an accessor descriptor on the way in.
          __proto__: null,
          value: Object.prototype.hasOwnProperty,
          enumerable: false,
          writable: true,
          configurable: true
        });
        function getMergedValue(target, source, prop, caseless) {
          if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
            return utils$1.merge.call({ caseless }, target, source);
          } else if (utils$1.isPlainObject(source)) {
            return utils$1.merge({}, source);
          } else if (utils$1.isArray(source)) {
            return source.slice();
          }
          return source;
        }
        function mergeDeepProperties(a, b, prop, caseless) {
          if (!utils$1.isUndefined(b)) {
            return getMergedValue(a, b, prop, caseless);
          } else if (!utils$1.isUndefined(a)) {
            return getMergedValue(void 0, a, prop, caseless);
          }
        }
        function valueFromConfig2(a, b) {
          if (!utils$1.isUndefined(b)) {
            return getMergedValue(void 0, b);
          }
        }
        function defaultToConfig2(a, b) {
          if (!utils$1.isUndefined(b)) {
            return getMergedValue(void 0, b);
          } else if (!utils$1.isUndefined(a)) {
            return getMergedValue(void 0, a);
          }
        }
        function getMergedTransitionalOption(prop) {
          const transitional2 = utils$1.hasOwnProp(config2, "transitional") ? config2.transitional : void 0;
          if (!utils$1.isUndefined(transitional2)) {
            if (utils$1.isPlainObject(transitional2)) {
              if (utils$1.hasOwnProp(transitional2, prop)) {
                return transitional2[prop];
              }
            } else {
              return void 0;
            }
          }
          const transitional1 = utils$1.hasOwnProp(config1, "transitional") ? config1.transitional : void 0;
          if (utils$1.isPlainObject(transitional1) && utils$1.hasOwnProp(transitional1, prop)) {
            return transitional1[prop];
          }
          return void 0;
        }
        function mergeDirectKeys(a, b, prop) {
          if (utils$1.hasOwnProp(config2, prop)) {
            return getMergedValue(a, b);
          } else if (utils$1.hasOwnProp(config1, prop)) {
            return getMergedValue(void 0, a);
          }
        }
        const mergeMap = {
          url: valueFromConfig2,
          method: valueFromConfig2,
          data: valueFromConfig2,
          baseURL: defaultToConfig2,
          transformRequest: defaultToConfig2,
          transformResponse: defaultToConfig2,
          paramsSerializer: defaultToConfig2,
          timeout: defaultToConfig2,
          timeoutErrorMessage: defaultToConfig2,
          withCredentials: defaultToConfig2,
          withXSRFToken: defaultToConfig2,
          adapter: defaultToConfig2,
          responseType: defaultToConfig2,
          xsrfCookieName: defaultToConfig2,
          xsrfHeaderName: defaultToConfig2,
          onUploadProgress: defaultToConfig2,
          onDownloadProgress: defaultToConfig2,
          decompress: defaultToConfig2,
          maxContentLength: defaultToConfig2,
          maxBodyLength: defaultToConfig2,
          beforeRedirect: defaultToConfig2,
          transport: defaultToConfig2,
          httpAgent: defaultToConfig2,
          httpsAgent: defaultToConfig2,
          cancelToken: defaultToConfig2,
          socketPath: defaultToConfig2,
          allowedSocketPaths: defaultToConfig2,
          responseEncoding: defaultToConfig2,
          validateStatus: mergeDirectKeys,
          headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
        };
        utils$1.forEach(ownEnumerableKeys({ ...config1, ...config2 }), function computeConfigValue(prop) {
          if (prop === "__proto__" || prop === "constructor" || prop === "prototype") return;
          const merge2 = utils$1.hasOwnProp(mergeMap, prop) ? mergeMap[prop] : mergeDeepProperties;
          const a = utils$1.hasOwnProp(config1, prop) ? config1[prop] : void 0;
          const b = utils$1.hasOwnProp(config2, prop) ? config2[prop] : void 0;
          const configValue = merge2(a, b, prop);
          utils$1.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
        });
        if (utils$1.hasOwnProp(config2, "validateStatus") && utils$1.isUndefined(config2.validateStatus) && getMergedTransitionalOption("validateStatusUndefinedResolves") === false) {
          if (utils$1.hasOwnProp(config1, "validateStatus")) {
            config.validateStatus = getMergedValue(void 0, config1.validateStatus);
          } else {
            delete config.validateStatus;
          }
        }
        return config;
      }
      var FORM_DATA_CONTENT_HEADERS = ["content-type", "content-length"];
      function setFormDataHeaders(headers, formHeaders, policy) {
        if (policy !== "content-only") {
          headers.set(formHeaders);
          return;
        }
        Object.entries(formHeaders || {}).forEach(([key, val]) => {
          if (FORM_DATA_CONTENT_HEADERS.includes(key.toLowerCase())) {
            headers.set(key, val);
          }
        });
      }
      var encodeUTF8$1 = (str) => encodeURIComponent(str).replace(
        /%([0-9A-F]{2})/gi,
        (_, hex) => String.fromCharCode(parseInt(hex, 16))
      );
      function resolveConfig(config) {
        const newConfig = mergeConfig({}, config);
        const own2 = (key) => utils$1.hasOwnProp(newConfig, key) ? newConfig[key] : void 0;
        const data = own2("data");
        let withXSRFToken = own2("withXSRFToken");
        const xsrfHeaderName = own2("xsrfHeaderName");
        const xsrfCookieName = own2("xsrfCookieName");
        let headers = own2("headers");
        const auth = own2("auth");
        const baseURL = own2("baseURL");
        const allowAbsoluteUrls = own2("allowAbsoluteUrls");
        const url = own2("url");
        newConfig.headers = headers = AxiosHeaders.from(headers);
        newConfig.url = buildURL(
          buildFullPath(baseURL, url, allowAbsoluteUrls, newConfig),
          own2("params"),
          own2("paramsSerializer")
        );
        if (auth) {
          const username = utils$1.getSafeProp(auth, "username") || "";
          const password = utils$1.getSafeProp(auth, "password") || "";
          try {
            headers.set(
              "Authorization",
              "Basic " + btoa(username + ":" + (password ? encodeUTF8$1(password) : ""))
            );
          } catch (e) {
            throw AxiosError.from(e, AxiosError.ERR_BAD_OPTION_VALUE, config);
          }
        }
        if (utils$1.isFormData(data)) {
          const getHeaders = utils$1.getSafeProp(data, "getHeaders");
          if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv || utils$1.isReactNative(data)) {
            headers.setContentType(void 0);
          } else if (utils$1.isFunction(getHeaders)) {
            setFormDataHeaders(headers, getHeaders.call(data), own2("formDataHeaderPolicy"));
          }
        }
        if (platform.hasStandardBrowserEnv) {
          if (utils$1.isFunction(withXSRFToken)) {
            withXSRFToken = withXSRFToken(newConfig);
          }
          const shouldSendXSRF = withXSRFToken === true || withXSRFToken == null && isURLSameOrigin(newConfig.url);
          if (shouldSendXSRF) {
            const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
            if (xsrfValue) {
              headers.set(xsrfHeaderName, xsrfValue);
            }
          }
        }
        return newConfig;
      }
      var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
      var xhrAdapter = isXHRAdapterSupported && function(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          const _config = resolveConfig(config);
          let requestData = _config.data;
          const requestHeaders = AxiosHeaders.from(_config.headers).normalize();
          let { responseType, onUploadProgress, onDownloadProgress } = _config;
          let onCanceled;
          let uploadThrottled, downloadThrottled;
          let flushUpload, flushDownload, flushDownloadWithEvent;
          function done() {
            flushUpload && flushUpload();
            flushDownload && flushDownload();
            _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
            _config.signal && _config.signal.removeEventListener("abort", onCanceled);
          }
          let request2 = new XMLHttpRequest();
          request2.open(_config.method.toUpperCase(), _config.url, true);
          request2.timeout = _config.timeout;
          function onloadend(event) {
            if (!request2) {
              return;
            }
            if (request2.status === 0 && (parseProtocol(normalizeURLForProtocolCheck(_config.url)) || parseProtocol(platform.origin)) !== "file" && !(request2.responseURL && request2.responseURL.startsWith("file:"))) {
              reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request2));
              done();
              request2 = null;
              return;
            }
            try {
              if (event) {
                flushDownloadWithEvent && flushDownloadWithEvent(event);
              } else {
                flushDownload && flushDownload();
              }
            } catch (err) {
              setTimeout(() => {
                throw err;
              });
            }
            if (!request2) {
              return;
            }
            const responseHeaders = AxiosHeaders.from(
              "getAllResponseHeaders" in request2 && request2.getAllResponseHeaders()
            );
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
            const response = {
              data: responseData,
              status: request2.status,
              statusText: request2.statusText,
              headers: responseHeaders,
              config,
              request: request2
            };
            settle(
              function _resolve(value) {
                resolve(value);
                done();
              },
              function _reject(err) {
                reject(err);
                done();
              },
              response
            );
            request2 = null;
          }
          if ("onloadend" in request2) {
            request2.onloadend = onloadend;
          } else {
            request2.onreadystatechange = function handleLoad() {
              if (!request2 || request2.readyState !== 4) {
                return;
              }
              if (request2.status === 0 && !(request2.responseURL && request2.responseURL.startsWith("file:"))) {
                return;
              }
              setTimeout(onloadend);
            };
          }
          request2.onabort = function handleAbort() {
            if (!request2) {
              return;
            }
            reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request2));
            done();
            request2 = null;
          };
          request2.onerror = function handleError(event) {
            const msg = event && event.message ? event.message : "Network Error";
            const err = new AxiosError(msg, AxiosError.ERR_NETWORK, config, request2);
            err.event = event || null;
            reject(err);
            done();
            request2 = null;
          };
          request2.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional = _config.transitional || transitionalDefaults;
            if (_config.timeoutErrorMessage) {
              timeoutErrorMessage = _config.timeoutErrorMessage;
            }
            reject(
              new AxiosError(
                timeoutErrorMessage,
                transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
                config,
                request2
              )
            );
            done();
            request2 = null;
          };
          requestData === void 0 && requestHeaders.setContentType(null);
          if ("setRequestHeader" in request2) {
            utils$1.forEach(toByteStringHeaderObject(requestHeaders), function setRequestHeader(val, key) {
              request2.setRequestHeader(key, val);
            });
          }
          if (!utils$1.isUndefined(_config.withCredentials)) {
            request2.withCredentials = !!_config.withCredentials;
          }
          if (responseType && responseType !== "json") {
            request2.responseType = _config.responseType;
          }
          if (onDownloadProgress) {
            [downloadThrottled, flushDownload, flushDownloadWithEvent] = progressEventReducer(
              onDownloadProgress,
              true
            );
            request2.addEventListener("progress", downloadThrottled);
          }
          if (onUploadProgress && request2.upload) {
            [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
            request2.upload.addEventListener("progress", uploadThrottled);
            request2.upload.addEventListener("loadend", flushUpload);
          }
          if (_config.cancelToken || _config.signal) {
            onCanceled = (cancel) => {
              if (!request2) {
                return;
              }
              reject(!cancel || cancel.type ? new CanceledError(null, config, request2) : cancel);
              request2.abort();
              done();
              request2 = null;
            };
            _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
            if (_config.signal) {
              _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
            }
          }
          const protocol = parseProtocol(_config.url);
          if (protocol && !platform.protocols.includes(protocol)) {
            reject(
              new AxiosError(
                "Unsupported protocol " + protocol + ":",
                AxiosError.ERR_BAD_REQUEST,
                config
              )
            );
            done();
            return;
          }
          request2.send(requestData || null);
        });
      };
      var composeSignals = (signals, timeout) => {
        signals = signals ? signals.filter(Boolean) : [];
        if (!timeout && !signals.length) {
          return;
        }
        const controller = new AbortController();
        let aborted = false;
        const onabort = function(reason) {
          if (!aborted) {
            aborted = true;
            unsubscribe();
            const err = reason instanceof Error ? reason : this.reason;
            controller.abort(
              err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err)
            );
          }
        };
        let timer = timeout && setTimeout(() => {
          timer = null;
          onabort(new AxiosError(`timeout of ${timeout}ms exceeded`, AxiosError.ETIMEDOUT));
        }, timeout);
        const unsubscribe = () => {
          if (!signals) {
            return;
          }
          timer && clearTimeout(timer);
          timer = null;
          signals.forEach((signal3) => {
            signal3.unsubscribe ? signal3.unsubscribe(onabort) : signal3.removeEventListener("abort", onabort);
          });
          signals = null;
        };
        signals.forEach((signal3) => {
          if (aborted) {
            return;
          }
          if (signal3.aborted) {
            onabort.call(signal3);
            return;
          }
          signal3.addEventListener("abort", onabort, { once: true });
        });
        const { signal: signal2 } = controller;
        signal2.unsubscribe = () => utils$1.asap(unsubscribe);
        return signal2;
      };
      var streamChunk = function* (chunk, chunkSize) {
        let len = chunk.byteLength;
        if (len < chunkSize) {
          yield chunk;
          return;
        }
        let pos = 0;
        let end;
        while (pos < len) {
          end = pos + chunkSize;
          yield chunk.slice(pos, end);
          pos = end;
        }
      };
      var readBytes = async function* (iterable, chunkSize) {
        for await (const chunk of readStream(iterable)) {
          yield* streamChunk(chunk, chunkSize);
        }
      };
      var readStream = async function* (stream) {
        if (stream[Symbol.asyncIterator]) {
          yield* stream;
          return;
        }
        const reader = stream.getReader();
        try {
          for (; ; ) {
            const { done, value } = await reader.read();
            if (done) {
              break;
            }
            yield value;
          }
        } finally {
          await reader.cancel();
        }
      };
      var trackStream = (stream, chunkSize, onProgress, onFinish) => {
        const iterator2 = readBytes(stream, chunkSize);
        let bytes = 0;
        let done;
        let _onFinish = (e) => {
          if (!done) {
            done = true;
            onFinish && onFinish(e);
          }
        };
        return new ReadableStream(
          {
            async pull(controller) {
              try {
                const { done: done2, value } = await iterator2.next();
                if (done2) {
                  _onFinish();
                  controller.close();
                  return;
                }
                let len = value.byteLength;
                if (onProgress) {
                  let loadedBytes = bytes += len;
                  onProgress(loadedBytes);
                }
                controller.enqueue(new Uint8Array(value));
              } catch (err) {
                _onFinish(err);
                throw err;
              }
            },
            cancel(reason) {
              _onFinish(reason);
              return iterator2.return();
            }
          },
          {
            highWaterMark: 2
          }
        );
      };
      var isHexDigit = (charCode) => charCode >= 48 && charCode <= 57 || charCode >= 65 && charCode <= 70 || charCode >= 97 && charCode <= 102;
      var isPercentEncodedByte = (str, i, len) => i + 2 < len && isHexDigit(str.charCodeAt(i + 1)) && isHexDigit(str.charCodeAt(i + 2));
      var hexValue = (charCode) => charCode <= 57 ? charCode - 48 : (charCode & 223) - 55;
      var isBase64Char = (charCode) => charCode >= 65 && charCode <= 90 || // A-Z
      charCode >= 97 && charCode <= 122 || // a-z
      charCode >= 48 && charCode <= 57 || // 0-9
      charCode === 43 || // +
      charCode === 47 || // /
      charCode === 45 || // - (base64url)
      charCode === 95;
      var isBase64Whitespace = (charCode) => charCode === 9 || charCode === 10 || charCode === 12 || charCode === 13 || charCode === 32;
      var base64Bytes = (significant) => {
        const groups = Math.floor(significant / 4);
        const remainder = significant % 4;
        return groups * 3 + (remainder === 2 ? 1 : remainder === 3 ? 2 : 0);
      };
      var estimateBase64BufferAllocation = (body) => {
        const len = body.length;
        let padding = 0;
        if (len > 0 && body.charCodeAt(len - 1) === 61) {
          padding++;
          if (len > 1 && body.charCodeAt(len - 2) === 61) {
            padding++;
          }
        }
        return Math.floor((len - padding) * 3 / 4);
      };
      var estimatePercentDecodedBase64Bytes = (body) => {
        const len = body.length;
        let significant = 0;
        let padding = 0;
        let invalid = false;
        for (let i = 0; i < len; i++) {
          let code = body.charCodeAt(i);
          if (code === 37 && isPercentEncodedByte(body, i, len)) {
            code = hexValue(body.charCodeAt(i + 1)) * 16 + hexValue(body.charCodeAt(i + 2));
            i += 2;
          }
          if (isBase64Whitespace(code)) {
            continue;
          }
          if (code === 61) {
            padding++;
            continue;
          }
          if (!isBase64Char(code) || padding > 0) {
            invalid = true;
            continue;
          }
          significant++;
        }
        if (invalid || padding > 2 || padding > 0 && (significant + padding) % 4 !== 0 || significant % 4 === 1) {
          return estimateBase64BufferAllocation(body);
        }
        return base64Bytes(significant);
      };
      var estimateDataURLBytes = (url, estimateBase64) => {
        if (!url || typeof url !== "string") return 0;
        if (!url.startsWith("data:")) return 0;
        const comma = url.indexOf(",");
        if (comma < 0) return 0;
        const meta = url.slice(5, comma);
        const body = url.slice(comma + 1);
        const isBase64 = /;base64/i.test(meta);
        if (isBase64) {
          return estimateBase64(body);
        }
        let bytes = 0;
        for (let i = 0, len = body.length; i < len; i++) {
          const c = body.charCodeAt(i);
          if (c === 37 && isPercentEncodedByte(body, i, len)) {
            bytes += 1;
            i += 2;
          } else if (c < 128) {
            bytes += 1;
          } else if (c < 2048) {
            bytes += 2;
          } else if (c >= 55296 && c <= 56319 && i + 1 < len) {
            const next = body.charCodeAt(i + 1);
            if (next >= 56320 && next <= 57343) {
              bytes += 4;
              i++;
            } else {
              bytes += 3;
            }
          } else {
            bytes += 3;
          }
        }
        return bytes;
      };
      function estimateDataURLDecodedBytes(url) {
        const fragmentIndex = typeof url === "string" ? url.indexOf("#") : -1;
        return estimateDataURLBytes(
          fragmentIndex === -1 ? url : url.slice(0, fragmentIndex),
          estimatePercentDecodedBase64Bytes
        );
      }
      var VERSION = "1.20.0";
      var DEFAULT_CHUNK_SIZE = 64 * 1024;
      var DEFAULT_REQUEST_OPTIONS = {
        cache: "default",
        redirect: "follow",
        referrer: "about:client",
        referrerPolicy: "",
        mode: "cors",
        integrity: "",
        keepalive: false,
        priority: "auto",
        window: null
      };
      var { isFunction } = utils$1;
      var encodeUTF8 = (str) => encodeURIComponent(str).replace(
        /%([0-9A-F]{2})/gi,
        (_, hex) => String.fromCharCode(parseInt(hex, 16))
      );
      var decodeURIComponentSafe = (value) => {
        if (!utils$1.isString(value)) {
          return value;
        }
        try {
          return decodeURIComponent(value);
        } catch (error) {
          return value;
        }
      };
      var test = (fn, ...args) => {
        try {
          return !!fn(...args);
        } catch (e) {
          return false;
        }
      };
      var maybeWithAuthCredentials = (url) => {
        const protocolIndex = url.indexOf("://");
        let urlToCheck = url;
        if (protocolIndex !== -1) {
          urlToCheck = urlToCheck.slice(protocolIndex + 3);
        }
        return urlToCheck.includes("@") || urlToCheck.includes(":");
      };
      var factory = (env) => {
        const globalObject = utils$1.global !== void 0 && utils$1.global !== null ? utils$1.global : globalThis;
        const { ReadableStream: ReadableStream2, TextEncoder: TextEncoder2 } = globalObject;
        env = utils$1.merge.call(
          {
            skipUndefined: true
          },
          {
            Request: globalObject.Request,
            Response: globalObject.Response
          },
          env
        );
        const { fetch: envFetch, Request: Request2, Response: Response2 } = env;
        const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === "function";
        const isRequestSupported = isFunction(Request2);
        const isResponseSupported = isFunction(Response2);
        if (!isFetchSupported) {
          return false;
        }
        const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream2);
        const encodeText = isFetchSupported && (typeof TextEncoder2 === "function" ? /* @__PURE__ */ ((encoder2) => (str) => encoder2.encode(str))(new TextEncoder2()) : async (str) => new Uint8Array(await new Request2(str).arrayBuffer()));
        const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(() => {
          let duplexAccessed = false;
          const request2 = new Request2(platform.origin, {
            body: new ReadableStream2(),
            method: "POST",
            get duplex() {
              duplexAccessed = true;
              return "half";
            }
          });
          const hasContentType = request2.headers.has("Content-Type");
          if (request2.body != null) {
            request2.body.cancel();
          }
          return duplexAccessed && !hasContentType;
        });
        const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(() => utils$1.isReadableStream(new Response2("").body));
        const resolvers = {
          stream: supportsResponseStream && ((res) => res.body)
        };
        isFetchSupported && (() => {
          ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
            !resolvers[type] && (resolvers[type] = (res, config) => {
              let method = res && res[type];
              if (method) {
                return method.call(res);
              }
              throw new AxiosError(
                `Response type '${type}' is not supported`,
                AxiosError.ERR_NOT_SUPPORT,
                config
              );
            });
          });
        })();
        const getBodyLength = async (body) => {
          if (body == null) {
            return 0;
          }
          if (utils$1.isBlob(body)) {
            return body.size;
          }
          if (utils$1.isSpecCompliantForm(body)) {
            const _request = new Request2(platform.origin, {
              method: "POST",
              body
            });
            return (await _request.arrayBuffer()).byteLength;
          }
          if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
            return body.byteLength;
          }
          if (utils$1.isURLSearchParams(body)) {
            body = body + "";
          }
          if (utils$1.isString(body)) {
            return (await encodeText(body)).byteLength;
          }
        };
        const resolveBodyLength = async (headers, body) => {
          const length = utils$1.toFiniteNumber(headers.getContentLength());
          return length == null ? getBodyLength(body) : length;
        };
        return async (config) => {
          let {
            url,
            method,
            data,
            signal: signal2,
            cancelToken,
            timeout,
            onDownloadProgress,
            onUploadProgress,
            responseType,
            headers,
            withCredentials = "same-origin",
            fetchOptions,
            maxContentLength,
            maxBodyLength,
            maxRedirects
          } = resolveConfig(config);
          const hasMaxContentLength = utils$1.isNumber(maxContentLength) && maxContentLength > -1;
          const hasMaxBodyLength = utils$1.isNumber(maxBodyLength) && maxBodyLength > -1;
          const own2 = (key) => utils$1.hasOwnProp(config, key) ? config[key] : void 0;
          let _fetch = envFetch || fetch;
          responseType = responseType ? (responseType + "").toLowerCase() : "text";
          let composedSignal = composeSignals(
            [signal2, cancelToken && cancelToken.toAbortSignal()],
            timeout
          );
          let request2 = null;
          const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
            composedSignal.unsubscribe();
          });
          let requestContentLength;
          let pendingBodyError = null;
          const maxBodyLengthError = () => new AxiosError(
            "Request body larger than maxBodyLength limit",
            AxiosError.ERR_BAD_REQUEST,
            config,
            request2
          );
          try {
            let auth = void 0;
            const configAuth = own2("auth");
            if (configAuth) {
              const username = utils$1.getSafeProp(configAuth, "username") || "";
              const password = utils$1.getSafeProp(configAuth, "password") || "";
              auth = {
                username,
                password
              };
            }
            if (maybeWithAuthCredentials(url)) {
              const parsedURL = new URL(url, platform.origin);
              if (!auth && (parsedURL.username || parsedURL.password)) {
                const urlUsername = decodeURIComponentSafe(parsedURL.username);
                const urlPassword = decodeURIComponentSafe(parsedURL.password);
                auth = {
                  username: urlUsername,
                  password: urlPassword
                };
              }
              if (parsedURL.username || parsedURL.password) {
                parsedURL.username = "";
                parsedURL.password = "";
                url = parsedURL.href;
              }
            }
            if (auth) {
              headers.delete("authorization");
              headers.set(
                "Authorization",
                "Basic " + btoa(encodeUTF8((auth.username || "") + ":" + (auth.password || "")))
              );
            }
            if (hasMaxContentLength && typeof url === "string" && url.startsWith("data:")) {
              const estimated = estimateDataURLDecodedBytes(url);
              if (estimated > maxContentLength) {
                throw new AxiosError(
                  "maxContentLength size of " + maxContentLength + " exceeded",
                  AxiosError.ERR_BAD_RESPONSE,
                  config,
                  request2
                );
              }
            }
            if (hasMaxBodyLength && method !== "get" && method !== "head") {
              const outboundLength = await getBodyLength(data);
              if (typeof outboundLength === "number" && isFinite(outboundLength)) {
                requestContentLength = outboundLength;
                if (outboundLength > maxBodyLength) {
                  throw maxBodyLengthError();
                }
              }
            }
            const mustEnforceStreamBody = hasMaxBodyLength && (utils$1.isReadableStream(data) || utils$1.isStream(data));
            const trackRequestStream = (stream, onProgress, flush) => trackStream(
              stream,
              DEFAULT_CHUNK_SIZE,
              (loadedBytes) => {
                if (hasMaxBodyLength && loadedBytes > maxBodyLength) {
                  throw pendingBodyError = maxBodyLengthError();
                }
                onProgress && onProgress(loadedBytes);
              },
              flush
            );
            if (supportsRequestStream && method !== "get" && method !== "head" && (onUploadProgress || mustEnforceStreamBody)) {
              requestContentLength = requestContentLength == null ? await resolveBodyLength(headers, data) : requestContentLength;
              if (requestContentLength !== 0 || mustEnforceStreamBody) {
                let _request = new Request2(url, {
                  method: "POST",
                  body: data,
                  duplex: "half"
                });
                let contentTypeHeader;
                if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
                  headers.setContentType(contentTypeHeader);
                }
                if (_request.body) {
                  const [onProgress, flush] = onUploadProgress && progressEventDecorator(
                    requestContentLength,
                    progressEventReducer(asyncDecorator(onUploadProgress))
                  ) || [];
                  data = trackRequestStream(_request.body, onProgress, flush);
                }
              }
            } else if (mustEnforceStreamBody && !isRequestSupported && isReadableStreamSupported && method !== "get" && method !== "head") {
              data = trackRequestStream(data);
            } else if (mustEnforceStreamBody && isRequestSupported && !supportsRequestStream && method !== "get" && method !== "head") {
              throw new AxiosError(
                "Stream request bodies are not supported by the current fetch implementation",
                AxiosError.ERR_NOT_SUPPORT,
                config,
                request2
              );
            }
            if (!utils$1.isString(withCredentials)) {
              withCredentials = withCredentials ? "include" : "omit";
            }
            const isCredentialsSupported = isRequestSupported && "credentials" in Request2.prototype;
            if (utils$1.isFormData(data)) {
              const contentType = headers.getContentType();
              if (contentType && /^multipart\/form-data/i.test(contentType) && !/boundary=/i.test(contentType)) {
                headers.delete("content-type");
              }
            }
            headers.set("User-Agent", "axios/" + VERSION, false);
            const safeFetchOptions = fetchOptions == null ? fetchOptions : Object.assign(/* @__PURE__ */ Object.create(null), fetchOptions);
            if (safeFetchOptions) {
              delete safeFetchOptions.body;
              delete safeFetchOptions.headers;
              delete safeFetchOptions.method;
              delete safeFetchOptions.signal;
              delete safeFetchOptions.duplex;
              delete safeFetchOptions.credentials;
            }
            const resolvedOptions = Object.assign(/* @__PURE__ */ Object.create(null), safeFetchOptions, {
              signal: composedSignal,
              method: method.toUpperCase(),
              headers: toByteStringHeaderObject(headers.normalize()),
              body: data,
              duplex: "half",
              credentials: isCredentialsSupported ? withCredentials : void 0
            });
            if (isRequestSupported) {
              utils$1.forEach(DEFAULT_REQUEST_OPTIONS, (value, key) => {
                if (resolvedOptions[key] === void 0) {
                  resolvedOptions[key] = value;
                }
              });
              if (resolvedOptions.signal === void 0) {
                resolvedOptions.signal = null;
              }
              if (resolvedOptions.body === void 0) {
                resolvedOptions.body = null;
              }
            }
            if (maxRedirects === 0) {
              resolvedOptions.redirect = "manual";
              if (safeFetchOptions) {
                safeFetchOptions.redirect = "manual";
              }
            }
            request2 = isRequestSupported && new Request2(url, resolvedOptions);
            let response = await (isRequestSupported ? _fetch(request2, safeFetchOptions) : _fetch(url, resolvedOptions));
            const responseHeaders = AxiosHeaders.from(response.headers);
            if (hasMaxContentLength) {
              const declaredLength = utils$1.toFiniteNumber(responseHeaders.getContentLength());
              if (declaredLength != null && declaredLength > maxContentLength) {
                throw new AxiosError(
                  "maxContentLength size of " + maxContentLength + " exceeded",
                  AxiosError.ERR_BAD_RESPONSE,
                  config,
                  request2
                );
              }
            }
            const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
            if (supportsResponseStream && response.body && (onDownloadProgress || hasMaxContentLength || isStreamResponse && unsubscribe)) {
              const options = {};
              ["status", "statusText", "headers"].forEach((prop) => {
                options[prop] = response[prop];
              });
              const responseContentLength = utils$1.toFiniteNumber(responseHeaders.getContentLength());
              const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
                responseContentLength,
                progressEventReducer(asyncDecorator(onDownloadProgress), true)
              ) || [];
              let bytesRead = 0;
              const onChunkProgress = (loadedBytes) => {
                if (hasMaxContentLength) {
                  bytesRead = loadedBytes;
                  if (bytesRead > maxContentLength) {
                    throw new AxiosError(
                      "maxContentLength size of " + maxContentLength + " exceeded",
                      AxiosError.ERR_BAD_RESPONSE,
                      config,
                      request2
                    );
                  }
                }
                onProgress && onProgress(loadedBytes);
              };
              response = new Response2(
                trackStream(response.body, DEFAULT_CHUNK_SIZE, onChunkProgress, () => {
                  flush && flush();
                  unsubscribe && unsubscribe();
                }),
                options
              );
            }
            responseType = responseType || "text";
            let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || "text"](
              response,
              config
            );
            if (hasMaxContentLength && !supportsResponseStream && !isStreamResponse) {
              let materializedSize;
              if (responseData != null) {
                if (typeof responseData.byteLength === "number") {
                  materializedSize = responseData.byteLength;
                } else if (typeof responseData.size === "number") {
                  materializedSize = responseData.size;
                } else if (typeof responseData === "string") {
                  materializedSize = typeof TextEncoder2 === "function" ? new TextEncoder2().encode(responseData).byteLength : responseData.length;
                }
              }
              if (typeof materializedSize === "number" && materializedSize > maxContentLength) {
                throw new AxiosError(
                  "maxContentLength size of " + maxContentLength + " exceeded",
                  AxiosError.ERR_BAD_RESPONSE,
                  config,
                  request2
                );
              }
            }
            !isStreamResponse && unsubscribe && unsubscribe();
            return await new Promise((resolve, reject) => {
              settle(resolve, reject, {
                data: responseData,
                headers: AxiosHeaders.from(response.headers),
                status: response.status,
                statusText: response.statusText,
                config,
                request: request2
              });
            });
          } catch (err) {
            unsubscribe && unsubscribe();
            if (composedSignal && composedSignal.aborted && composedSignal.reason instanceof AxiosError) {
              const canceledError = composedSignal.reason;
              canceledError.config = config;
              request2 && (canceledError.request = request2);
              if (err !== canceledError) {
                Object.defineProperty(canceledError, "cause", {
                  __proto__: null,
                  value: err,
                  writable: true,
                  enumerable: false,
                  configurable: true
                });
              }
              throw canceledError;
            }
            if (pendingBodyError) {
              request2 && !pendingBodyError.request && (pendingBodyError.request = request2);
              throw pendingBodyError;
            }
            if (err instanceof AxiosError) {
              request2 && !err.request && (err.request = request2);
              throw err;
            }
            if (err && err.name === "TypeError" && /Load failed|fetch/i.test(err.message)) {
              const networkError = new AxiosError(
                "Network Error",
                AxiosError.ERR_NETWORK,
                config,
                request2,
                err && err.response
              );
              Object.defineProperty(networkError, "cause", {
                __proto__: null,
                value: err.cause || err,
                writable: true,
                enumerable: false,
                configurable: true
              });
              throw networkError;
            }
            throw AxiosError.from(err, err && err.code, config, request2, err && err.response);
          }
        };
      };
      var seedCache = /* @__PURE__ */ new Map();
      var getFetch = (config) => {
        let env = config && config.env || {};
        const { fetch: fetch2, Request: Request2, Response: Response2 } = env;
        const seeds = [Request2, Response2, fetch2];
        let len = seeds.length, i = len, seed, target, map = seedCache;
        while (i--) {
          seed = seeds[i];
          target = map.get(seed);
          target === void 0 && map.set(seed, target = i ? /* @__PURE__ */ new Map() : factory(env));
          map = target;
        }
        return target;
      };
      getFetch();
      var knownAdapters = {
        http: httpAdapter,
        xhr: xhrAdapter,
        fetch: {
          get: getFetch
        }
      };
      utils$1.forEach(knownAdapters, (fn, value) => {
        if (fn) {
          try {
            Object.defineProperty(fn, "name", { __proto__: null, value });
          } catch (e) {
          }
          Object.defineProperty(fn, "adapterName", { __proto__: null, value });
        }
      });
      var renderReason = (reason) => `- ${reason}`;
      var isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;
      function getAdapter(adapters2, config) {
        adapters2 = utils$1.isArray(adapters2) ? adapters2 : [adapters2];
        const { length } = adapters2;
        let nameOrAdapter;
        let adapter;
        const rejectedReasons = {};
        for (let i = 0; i < length; i++) {
          nameOrAdapter = adapters2[i];
          let id;
          adapter = nameOrAdapter;
          if (!isResolvedHandle(nameOrAdapter)) {
            adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
            if (adapter === void 0) {
              throw new AxiosError(`Unknown adapter '${id}'`);
            }
          }
          if (adapter && (utils$1.isFunction(adapter) || (adapter = adapter.get(config)))) {
            break;
          }
          rejectedReasons[id || "#" + i] = adapter;
        }
        if (!adapter) {
          const reasons = Object.entries(rejectedReasons).map(
            ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
          );
          let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
          throw new AxiosError(
            `There is no suitable adapter to dispatch the request ` + s,
            AxiosError.ERR_NOT_SUPPORT
          );
        }
        return adapter;
      }
      var adapters = {
        /**
         * Resolve an adapter from a list of adapter names or functions.
         * @type {Function}
         */
        getAdapter,
        /**
         * Exposes all known adapters
         * @type {Object<string, Function|Object>}
         */
        adapters: knownAdapters
      };
      function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
          config.cancelToken.throwIfRequested();
        }
        if (config.signal && config.signal.aborted) {
          throw new CanceledError(null, config);
        }
      }
      function dispatchRequest(_config) {
        const config = utils$1.toSafeFlatObject(_config);
        throwIfCancellationRequested(config);
        config.headers = AxiosHeaders.from(utils$1.getSafeProp(config, "headers"));
        config.data = transformData.call(config, config.transformRequest);
        if (["post", "put", "patch"].indexOf(config.method) !== -1) {
          config.headers.setContentType("application/x-www-form-urlencoded", false);
        }
        const adapter = adapters.getAdapter(config.adapter || defaults.adapter, config);
        return adapter(config).then(
          function onAdapterResolution(response) {
            throwIfCancellationRequested(config);
            config.response = response;
            try {
              response.data = transformData.call(config, config.transformResponse, response);
            } finally {
              delete config.response;
            }
            response.headers = AxiosHeaders.from(response.headers);
            return response;
          },
          function onAdapterRejection(reason) {
            if (!isCancel(reason)) {
              throwIfCancellationRequested(config);
              if (reason && reason.response) {
                config.response = reason.response;
                try {
                  reason.response.data = transformData.call(
                    config,
                    config.transformResponse,
                    reason.response
                  );
                } finally {
                  delete config.response;
                }
                reason.response.headers = AxiosHeaders.from(reason.response.headers);
              }
            }
            return Promise.reject(reason);
          }
        );
      }
      var validators$1 = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
        validators$1[type] = function validator2(thing) {
          return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
        };
      });
      var deprecatedWarnings = {};
      validators$1.transitional = function transitional(validator2, version, message2) {
        function formatMessage(opt, desc) {
          return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message2 ? ". " + message2 : "");
        }
        return (value, opt, opts) => {
          if (validator2 === false) {
            throw new AxiosError(
              formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
              AxiosError.ERR_DEPRECATED
            );
          }
          if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            console.warn(
              formatMessage(
                opt,
                " has been deprecated since v" + version + " and will be removed in the near future"
              )
            );
          }
          return validator2 ? validator2(value, opt, opts) : true;
        };
      };
      validators$1.spelling = function spelling(correctSpelling) {
        return (value, opt) => {
          console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
          return true;
        };
      };
      function assertOptions(options, schema, allowUnknown) {
        if (typeof options !== "object" || options === null) {
          throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
        }
        const keys = Object.keys(options);
        let i = keys.length;
        while (i-- > 0) {
          const opt = keys[i];
          const validator2 = Object.prototype.hasOwnProperty.call(schema, opt) ? schema[opt] : void 0;
          if (validator2) {
            const value = options[opt];
            const result = value === void 0 || validator2(value, opt, options);
            if (result !== true) {
              throw new AxiosError(
                "option " + opt + " must be " + result,
                AxiosError.ERR_BAD_OPTION_VALUE
              );
            }
            continue;
          }
          if (allowUnknown !== true) {
            throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
          }
        }
      }
      var validator = {
        assertOptions,
        validators: validators$1
      };
      var validators = validator.validators;
      var Axios = class {
        constructor(instanceConfig) {
          this.defaults = instanceConfig || {};
          this.interceptors = {
            request: new InterceptorManager(),
            response: new InterceptorManager()
          };
        }
        /**
         * Dispatch a request
         *
         * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
         * @param {?Object} config
         *
         * @returns {Promise} The Promise to be fulfilled
         */
        async request(configOrUrl, config) {
          try {
            return await this._request(configOrUrl, config);
          } catch (err) {
            if (err instanceof Error) {
              try {
                let dummy = {};
                Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
                const dummyStack = dummy.stack;
                let stack = "";
                if (typeof dummyStack === "string") {
                  const firstNewlineIndex = dummyStack.indexOf("\n");
                  stack = firstNewlineIndex === -1 ? "" : dummyStack.slice(firstNewlineIndex + 1);
                }
                if (!err.stack) {
                  err.stack = stack;
                } else if (stack) {
                  const firstNewlineIndex = stack.indexOf("\n");
                  const secondNewlineIndex = firstNewlineIndex === -1 ? -1 : stack.indexOf("\n", firstNewlineIndex + 1);
                  const stackWithoutTwoTopLines = secondNewlineIndex === -1 ? "" : stack.slice(secondNewlineIndex + 1);
                  if (!String(err.stack).endsWith(stackWithoutTwoTopLines)) {
                    err.stack += "\n" + stack;
                  }
                }
              } catch (e) {
              }
            }
            throw err;
          }
        }
        _request(configOrUrl, config) {
          if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
          } else {
            config = configOrUrl || {};
          }
          config = mergeConfig(this.defaults, config);
          const { transitional, paramsSerializer, headers } = config;
          if (transitional !== void 0) {
            validator.assertOptions(
              transitional,
              {
                silentJSONParsing: validators.transitional(validators.boolean),
                forcedJSONParsing: validators.transitional(validators.boolean),
                clarifyTimeoutError: validators.transitional(validators.boolean),
                legacyInterceptorReqResOrdering: validators.transitional(validators.boolean),
                advertiseZstdAcceptEncoding: validators.transitional(validators.boolean),
                validateStatusUndefinedResolves: validators.transitional(validators.boolean)
              },
              false
            );
          }
          if (paramsSerializer != null) {
            if (utils$1.isFunction(paramsSerializer)) {
              config.paramsSerializer = {
                serialize: paramsSerializer
              };
            } else {
              validator.assertOptions(
                paramsSerializer,
                {
                  encode: validators.function,
                  serialize: validators.function
                },
                true
              );
            }
          }
          if (config.allowAbsoluteUrls !== void 0) ;
          else if (this.defaults.allowAbsoluteUrls !== void 0) {
            config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
          } else {
            config.allowAbsoluteUrls = true;
          }
          validator.assertOptions(
            config,
            {
              baseUrl: validators.spelling("baseURL"),
              withXsrfToken: validators.spelling("withXSRFToken")
            },
            true
          );
          config.method = (utils$1.getSafeProp(config, "method") || utils$1.getSafeProp(this.defaults, "method") || "get").toLowerCase();
          let contextHeaders = headers && utils$1.merge(headers.common, headers[config.method]);
          headers && utils$1.forEach(methodList.concat("common"), (method) => {
            delete headers[method];
          });
          config.headers = AxiosHeaders.concat(contextHeaders, headers);
          const requestInterceptorChain = [];
          let synchronousRequestInterceptors = true;
          this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
              return;
            }
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            const transitional2 = config.transitional || transitionalDefaults;
            const legacyInterceptorReqResOrdering = transitional2 && transitional2.legacyInterceptorReqResOrdering;
            if (legacyInterceptorReqResOrdering) {
              requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
            } else {
              requestInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
            }
          });
          const responseInterceptorChain = [];
          this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
          });
          let promise;
          let i = 0;
          let len;
          if (!synchronousRequestInterceptors) {
            const chain = [dispatchRequest.bind(this), void 0];
            chain.unshift(...requestInterceptorChain);
            chain.push(...responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while (i < len) {
              promise = promise.then(chain[i++], chain[i++]);
            }
            return promise;
          }
          len = requestInterceptorChain.length;
          let newConfig = config;
          while (i < len) {
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
              newConfig = onFulfilled ? onFulfilled(newConfig) : newConfig;
            } catch (error) {
              if (!onRejected) {
                promise = Promise.reject(error);
                break;
              }
              try {
                const rejectedResult = onRejected.call(this, error);
                if (utils$1.isThenable(rejectedResult)) {
                  promise = Promise.resolve(rejectedResult).then(
                    () => dispatchRequest.call(this, newConfig)
                  );
                }
              } catch (rejectedError) {
                promise = Promise.reject(rejectedError);
              }
              break;
            }
          }
          if (!promise) {
            try {
              promise = dispatchRequest.call(this, newConfig);
            } catch (error) {
              promise = Promise.reject(error);
            }
          }
          i = 0;
          len = responseInterceptorChain.length;
          while (i < len) {
            promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
          }
          return promise;
        }
        getUri(config) {
          config = mergeConfig(this.defaults, config);
          const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls, config);
          return buildURL(fullPath, config.params, config.paramsSerializer);
        }
      };
      utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
        Axios.prototype[method] = function(url, config) {
          return this.request(
            mergeConfig(config || {}, {
              method,
              url,
              data: config && utils$1.hasOwnProp(config, "data") ? config.data : void 0
            })
          );
        };
      });
      utils$1.forEach(["post", "put", "patch", "query"], function forEachMethodWithData(method) {
        function generateHTTPMethod(isForm) {
          return function httpMethod(url, data, config) {
            return this.request(
              mergeConfig(config || {}, {
                method,
                headers: isForm ? {
                  "Content-Type": "multipart/form-data"
                } : {},
                url,
                data
              })
            );
          };
        }
        Axios.prototype[method] = generateHTTPMethod();
        if (method !== "query") {
          Axios.prototype[method + "Form"] = generateHTTPMethod(true);
        }
      });
      var CancelToken = class _CancelToken {
        constructor(executor) {
          if (typeof executor !== "function") {
            throw new TypeError("executor must be a function.");
          }
          let resolvePromise;
          this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
          });
          const token = this;
          this.promise.then((cancel) => {
            if (!token._listeners) return;
            let i = token._listeners.length;
            while (i-- > 0) {
              token._listeners[i](cancel);
            }
            token._listeners = null;
          });
          this.promise.then = (onfulfilled) => {
            let _resolve;
            const promise = new Promise((resolve) => {
              token.subscribe(resolve);
              _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
              token.unsubscribe(_resolve);
            };
            return promise;
          };
          executor(function cancel(message2, config, request2) {
            if (token.reason) {
              return;
            }
            token.reason = new CanceledError(message2, config, request2);
            resolvePromise(token.reason);
          });
        }
        /**
         * Throws a `CanceledError` if cancellation has been requested.
         */
        throwIfRequested() {
          if (this.reason) {
            throw this.reason;
          }
        }
        /**
         * Subscribe to the cancel signal
         */
        subscribe(listener) {
          if (this.reason) {
            listener(this.reason);
            return;
          }
          if (this._listeners) {
            this._listeners.push(listener);
          } else {
            this._listeners = [listener];
          }
        }
        /**
         * Unsubscribe from the cancel signal
         */
        unsubscribe(listener) {
          if (!this._listeners) {
            return;
          }
          const index = this._listeners.indexOf(listener);
          if (index !== -1) {
            this._listeners.splice(index, 1);
          }
        }
        toAbortSignal() {
          const controller = new AbortController();
          const abort = (err) => {
            controller.abort(err);
          };
          this.subscribe(abort);
          controller.signal.unsubscribe = () => this.unsubscribe(abort);
          return controller.signal;
        }
        /**
         * Returns an object that contains a new `CancelToken` and a function that, when called,
         * cancels the `CancelToken`.
         */
        static source() {
          let cancel;
          const token = new _CancelToken(function executor(c) {
            cancel = c;
          });
          return {
            token,
            cancel
          };
        }
      };
      function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      }
      function isAxiosError(payload) {
        return utils$1.isObject(payload) && payload.isAxiosError === true;
      }
      var HttpStatusCode = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        /**
         * @deprecated Use `ContentTooLarge` instead.
         */
        PayloadTooLarge: 413,
        ContentTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        /**
         * @deprecated Use `UnprocessableContent` instead.
         */
        UnprocessableEntity: 422,
        UnprocessableContent: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
        WebServerReturnsAnUnknownError: 520,
        WebServerIsDown: 521,
        ConnectionTimedOut: 522,
        OriginIsUnreachable: 523,
        TimeoutOccurred: 524,
        SslHandshakeFailed: 525,
        InvalidSslCertificate: 526
      };
      Object.entries(HttpStatusCode).forEach(([key, value]) => {
        if (HttpStatusCode[value] === void 0) {
          HttpStatusCode[value] = key;
        }
      });
      function createInstance(defaultConfig) {
        const context = new Axios(defaultConfig);
        const instance = bind(Axios.prototype.request, context);
        utils$1.extend(instance, Axios.prototype, context, { allOwnKeys: true });
        utils$1.extend(instance, context, null, { allOwnKeys: true });
        instance.create = function create(instanceConfig) {
          return createInstance(mergeConfig(defaultConfig, instanceConfig));
        };
        return instance;
      }
      var axios = createInstance(defaults);
      axios.Axios = Axios;
      axios.CanceledError = CanceledError;
      axios.CancelToken = CancelToken;
      axios.isCancel = isCancel;
      axios.VERSION = VERSION;
      axios.toFormData = toFormData;
      axios.AxiosError = AxiosError;
      axios.Cancel = axios.CanceledError;
      axios.all = function all(promises) {
        return Promise.all(promises);
      };
      axios.spread = spread;
      axios.isAxiosError = isAxiosError;
      axios.mergeConfig = mergeConfig;
      axios.AxiosHeaders = AxiosHeaders;
      axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
      axios.getAdapter = adapters.getAdapter;
      axios.HttpStatusCode = HttpStatusCode;
      axios.default = axios;
      module.exports = axios;
    }
  });

  // ../../../sdk/dist/connection/Ajax.js
  var require_Ajax = __commonJS({
    "../../../sdk/dist/connection/Ajax.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Ajax = exports.XhrErrorReason = void 0;
      var axios_1 = __importDefault(require_axios());
      var XhrErrorReason;
      (function(XhrErrorReason2) {
        XhrErrorReason2["UNKNOWN"] = "UNKNOWN";
        XhrErrorReason2["TIMEOUT"] = "TIMEOUT";
        XhrErrorReason2["STATUS"] = "STATUS";
        XhrErrorReason2["ECONNREFUSED"] = "ECONNREFUSED";
        XhrErrorReason2["ENOTFOUND"] = "ENOTFOUND";
        XhrErrorReason2["ETIMEDOUT"] = "ETIMEDOUT";
        XhrErrorReason2["ECONNRESET"] = "ECONNRESET";
        XhrErrorReason2["EHOSTUNREACH"] = "EHOSTUNREACH";
      })(XhrErrorReason || (exports.XhrErrorReason = XhrErrorReason = {}));
      var Ajax = class _Ajax {
        constructor() {
        }
        static formatResponseData(response) {
          if ((response === null || response === void 0 ? void 0 : response.status) && (parseInt(response.status, 10) < 200 || parseInt(response.status, 10) >= 300)) {
            throw _Ajax.formatError(response);
          }
          const status = (response === null || response === void 0 ? void 0 : response.status) ? response.status : 200;
          let data = response;
          while (data && typeof data.data !== "undefined") {
            data = data.data;
          }
          try {
            data = JSON.parse(response.data);
          } catch (e) {
          }
          return { status, data };
        }
        static formatError(error) {
          const errorFormatted = {
            reason: XhrErrorReason.UNKNOWN,
            status: 500,
            code: 500,
            message: ""
          };
          if (error.status) {
            errorFormatted.reason = XhrErrorReason.STATUS;
            errorFormatted.status = parseInt(error.status, 10);
            errorFormatted.code = parseInt(error.status, 10);
          }
          if (error.response) {
            if (error.response.data) {
              errorFormatted.message = error.response.data;
            } else {
              errorFormatted.message = error.response;
            }
            if (error.response.status) {
              errorFormatted.reason = XhrErrorReason.STATUS;
              errorFormatted.status = parseInt(error.response.status, 10);
              errorFormatted.code = parseInt(error.response.status, 10);
            } else if (error.response.status === null) {
              errorFormatted.reason = XhrErrorReason.TIMEOUT;
              errorFormatted.status = 408;
              errorFormatted.code = 408;
            }
          } else {
            if (error.code === XhrErrorReason.ECONNREFUSED) {
              errorFormatted.reason = XhrErrorReason.ECONNREFUSED;
              errorFormatted.status = 503;
              errorFormatted.code = 503;
            } else if (error.code === XhrErrorReason.ENOTFOUND) {
              errorFormatted.reason = XhrErrorReason.ENOTFOUND;
              errorFormatted.status = 404;
              errorFormatted.code = 404;
            } else if (error.code === XhrErrorReason.ETIMEDOUT) {
              errorFormatted.reason = XhrErrorReason.ETIMEDOUT;
              errorFormatted.status = 408;
              errorFormatted.code = 408;
            } else if (error.code === XhrErrorReason.ECONNRESET) {
              errorFormatted.reason = XhrErrorReason.ECONNRESET;
              errorFormatted.status = 429;
              errorFormatted.code = 429;
            } else if (error.code === XhrErrorReason.EHOSTUNREACH) {
              errorFormatted.reason = XhrErrorReason.EHOSTUNREACH;
              errorFormatted.status = 404;
              errorFormatted.code = 404;
            }
            if (error.message) {
              errorFormatted.message = error.message;
            } else if (error.request) {
              errorFormatted.message = error.request;
            }
          }
          return errorFormatted;
        }
        /**
         * @throws XhrErrorInterface
         * @param args
         */
        post(args) {
          return __awaiter(this, void 0, void 0, function* () {
            const opt = {
              method: "POST",
              url: args.url,
              data: typeof args.data === "string" ? args.data : JSON.stringify(args.data)
            };
            if (args.headers) {
              opt.headers = args.headers;
            }
            const options = { headers: opt.headers };
            if (args.timeout) {
              options["timeout"] = args.timeout;
            }
            let res;
            try {
              res = yield axios_1.default.post(opt.url, opt.data, options);
            } catch (err) {
              throw _Ajax.formatError(err);
            }
            return _Ajax.formatResponseData(res);
          });
        }
        /**
         * @throws XhrErrorInterface
         * @param args
         */
        put(args) {
          return __awaiter(this, void 0, void 0, function* () {
            const opt = {
              method: "PUT",
              url: args.url,
              data: typeof args.data === "string" ? args.data : JSON.stringify(args.data)
            };
            if (args.headers) {
              opt.headers = args.headers;
            }
            const options = { headers: opt.headers };
            if (args.timeout) {
              options["timeout"] = args.timeout;
            }
            let res;
            try {
              res = yield axios_1.default.put(opt.url, opt.data, options);
            } catch (err) {
              throw _Ajax.formatError(err);
            }
            return _Ajax.formatResponseData(res);
          });
        }
        /**
         * @throws XhrErrorInterface
         * @param args
         */
        delete(args) {
          return __awaiter(this, void 0, void 0, function* () {
            const opt = {
              method: "DELETE",
              url: args.url,
              data: typeof args.data === "string" ? args.data : JSON.stringify(args.data)
            };
            if (args.headers) {
              opt.headers = args.headers;
            }
            const options = { headers: opt.headers, data: opt.data };
            if (args.timeout) {
              options["timeout"] = args.timeout;
            }
            let res;
            try {
              res = yield axios_1.default.delete(opt.url, options);
            } catch (err) {
              throw _Ajax.formatError(err);
            }
            return _Ajax.formatResponseData(res);
          });
        }
        /**
         * @throws XhrErrorInterface
         * @param args
         */
        get(args) {
          return __awaiter(this, void 0, void 0, function* () {
            const opt = {
              method: "GET",
              url: args.url
            };
            if (args.data) {
              opt.data = args.data;
            }
            if (args.headers) {
              opt.headers = args.headers;
            }
            const options = { headers: opt.headers };
            if (args.timeout) {
              options["timeout"] = args.timeout;
            }
            let res;
            try {
              res = yield axios_1.default.get(opt.url, options);
            } catch (err) {
              throw _Ajax.formatError(err);
            }
            return _Ajax.formatResponseData(res);
          });
        }
      };
      exports.Ajax = Ajax;
    }
  });

  // ../../../sdk/node_modules/base-64/base64.js
  var require_base64 = __commonJS({
    "../../../sdk/node_modules/base-64/base64.js"(exports, module) {
      (function(root2) {
        var freeExports = typeof exports == "object" && exports;
        var freeModule = typeof module == "object" && module && module.exports == freeExports && module;
        var freeGlobal = typeof global == "object" && global;
        if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
          root2 = freeGlobal;
        }
        var InvalidCharacterError = function(message2) {
          this.message = message2;
        };
        InvalidCharacterError.prototype = new Error();
        InvalidCharacterError.prototype.name = "InvalidCharacterError";
        var error = function(message2) {
          throw new InvalidCharacterError(message2);
        };
        var TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g;
        var decode = function(input) {
          input = String(input).replace(REGEX_SPACE_CHARACTERS, "");
          var length = input.length;
          if (length % 4 == 0) {
            input = input.replace(/==?$/, "");
            length = input.length;
          }
          if (length % 4 == 1 || // http://whatwg.org/C#alphanumeric-ascii-characters
          /[^+a-zA-Z0-9/]/.test(input)) {
            error(
              "Invalid character: the string to be decoded is not correctly encoded."
            );
          }
          var bitCounter = 0;
          var bitStorage;
          var buffer;
          var output = "";
          var position = -1;
          while (++position < length) {
            buffer = TABLE.indexOf(input.charAt(position));
            bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
            if (bitCounter++ % 4) {
              output += String.fromCharCode(
                255 & bitStorage >> (-2 * bitCounter & 6)
              );
            }
          }
          return output;
        };
        var encode = function(input) {
          input = String(input);
          if (/[^\0-\xFF]/.test(input)) {
            error(
              "The string to be encoded contains characters outside of the Latin1 range."
            );
          }
          var padding = input.length % 3;
          var output = "";
          var position = -1;
          var a;
          var b;
          var c;
          var buffer;
          var length = input.length - padding;
          while (++position < length) {
            a = input.charCodeAt(position) << 16;
            b = input.charCodeAt(++position) << 8;
            c = input.charCodeAt(++position);
            buffer = a + b + c;
            output += TABLE.charAt(buffer >> 18 & 63) + TABLE.charAt(buffer >> 12 & 63) + TABLE.charAt(buffer >> 6 & 63) + TABLE.charAt(buffer & 63);
          }
          if (padding == 2) {
            a = input.charCodeAt(position) << 8;
            b = input.charCodeAt(++position);
            buffer = a + b;
            output += TABLE.charAt(buffer >> 10) + TABLE.charAt(buffer >> 4 & 63) + TABLE.charAt(buffer << 2 & 63) + "=";
          } else if (padding == 1) {
            buffer = input.charCodeAt(position);
            output += TABLE.charAt(buffer >> 2) + TABLE.charAt(buffer << 4 & 63) + "==";
          }
          return output;
        };
        var base64 = {
          "encode": encode,
          "decode": decode,
          "version": "1.0.0"
        };
        if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
          define(function() {
            return base64;
          });
        } else if (freeExports && !freeExports.nodeType) {
          if (freeModule) {
            freeModule.exports = base64;
          } else {
            for (var key in base64) {
              base64.hasOwnProperty(key) && (freeExports[key] = base64[key]);
            }
          }
        } else {
          root2.base64 = base64;
        }
      })(exports);
    }
  });

  // ../../../sdk/dist/tools/Base64.js
  var require_Base64 = __commonJS({
    "../../../sdk/dist/tools/Base64.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Base64 = void 0;
      var Base64 = class {
        /**
         * Decodes string from Base64 string
         */
        static encode(input) {
          if (!input) {
            return null;
          }
          const base64 = require_base64();
          let result = "";
          try {
            result = encodeURIComponent(input);
            result = result.replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode(parseInt("0x" + p1, 16)));
            result = base64.encode(result);
          } catch (e) {
            console.error(e);
          }
          return result;
        }
        static decode(input) {
          if (!input) {
            return null;
          }
          const base64 = require_base64();
          let result = "";
          try {
            result = base64.decode(input);
            const results = result.split("");
            result = results.map((c) => {
              return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            }).join("");
            result = decodeURIComponent(result);
          } catch (e) {
            console.error(e);
          }
          return result;
        }
      };
      exports.Base64 = Base64;
    }
  });

  // ../../../sdk/dist/tools/Storage.js
  var require_Storage = __commonJS({
    "../../../sdk/dist/tools/Storage.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LocalStorage = void 0;
      var isNodeContext = () => typeof window === "undefined";
      var SimpleMemoryStorage = class {
        constructor(mem = {}) {
          this.mem = mem;
        }
        setItem(key, value) {
          this.mem[key] = value;
        }
        getItem(key) {
          return this.mem[key];
        }
        removeItem(key) {
          delete this.mem[key];
        }
      };
      var LocalStorage = class {
        constructor(storageKey) {
          this.storageKey = storageKey;
          this.version = "0.1";
          if (isNodeContext()) {
            this.storage = new SimpleMemoryStorage();
          } else {
            this.storage = localStorage;
          }
        }
        /**
         * Sets a key's value.
         *
         * @param key - Key to set. If this value is not set or not
         *              a string an exception is raised.
         * @param value - Value to set. This can be any value that is JSON
         *              compatible (Numbers, Strings, Objects etc.).
         * @returns the stored value which is a container of user value.
         */
        set(key, value) {
          key = this.storageKey + key;
          this.checkKey(key);
          const t = typeof value;
          if (t === "undefined") {
            value = "null";
          } else if (value === null) {
            value = "null";
          } else if (t === "string") {
            value = JSON.stringify({ string: value });
          } else if (t === "number") {
            value = JSON.stringify({ number: value });
          } else if (t === "boolean") {
            value = JSON.stringify({ bool: value });
          } else if (t === "object") {
            value = JSON.stringify({ json: value });
          } else {
            throw new TypeError("Value type " + t + " is invalid. It must be null, undefined, xml, string, number, boolean or object");
          }
          this.storage.setItem(key, value);
          return value;
        }
        /**
         * Looks up a key in cache
         *
         * @param key - Key to look up.
         * @param def - Default value to return, if key didn't exist.
         * @returns the key value, default value or <null>
         */
        get(key, def) {
          key = this.storageKey + key;
          this.checkKey(key);
          try {
            const item = this.storage.getItem(key);
            if (item !== null) {
              if (item === "null") {
                return null;
              }
              const value = JSON.parse(item);
              if ("string" in value) {
                return value.string;
              } else if ("number" in value) {
                return value.number.valueOf();
              } else if ("bool" in value) {
                return value.bool.valueOf();
              } else {
                return value.json;
              }
            }
          } catch (e) {
          }
          return !def ? null : def;
        }
        /**
         * Deletes a key from cache.
         *
         * @param  key - Key to delete.
         * @returns true if key existed or false if it didn't
         */
        remove(key) {
          key = this.storageKey + key;
          this.checkKey(key);
          const val = this.storage.getItem(key);
          const existed = !!val;
          if (existed) {
            this.storage.removeItem(key);
          }
          return existed;
        }
        checkKey(key) {
          if (!key || typeof key !== "string") {
            throw new TypeError("Key type must be string");
          }
          return true;
        }
      };
      exports.LocalStorage = LocalStorage;
    }
  });

  // ../../../sdk/dist/tools/Xor.js
  var require_Xor = __commonJS({
    "../../../sdk/dist/tools/Xor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Xor = void 0;
      var Base64_1 = require_Base64();
      var Xor = class _Xor {
        constructor() {
        }
        static encrypt(value, key) {
          let result = "";
          value = _Xor.header + value;
          for (let i = 0; i < value.length; i++) {
            result += String.fromCharCode(value[i].charCodeAt(0).toString(10) ^ _Xor.keyCharAt(key, i));
          }
          result = Base64_1.Base64.encode(result);
          return result;
        }
        static decrypt(value, key, oldStyle) {
          let result = "";
          value = Base64_1.Base64.decode(value);
          for (let i = 0; i < value.length; i++) {
            result += String.fromCharCode(value[i].charCodeAt(0).toString(10) ^ _Xor.keyCharAt(key, i));
          }
          if (!oldStyle && _Xor.header !== result.substring(0, _Xor.header.length)) {
            return null;
          }
          if (!oldStyle) {
            result = result.substring(_Xor.header.length);
          }
          return result;
        }
        static keyCharAt(key, i) {
          return key[Math.floor(i % key.length)].charCodeAt(0).toString(10);
        }
      };
      exports.Xor = Xor;
      Xor.header = "artemis-lotsum";
    }
  });

  // ../../../sdk/dist/tools/index.js
  var require_tools = __commonJS({
    "../../../sdk/dist/tools/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }));
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_Base64(), exports);
      __exportStar(require_Storage(), exports);
      __exportStar(require_Xor(), exports);
    }
  });

  // ../../../sdk/dist/sdk/FidjError.js
  var require_FidjError = __commonJS({
    "../../../sdk/dist/sdk/FidjError.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FidjError = void 0;
      var FidjError = class {
        constructor(code, reason) {
          this.code = code;
          this.reason = reason;
        }
        equals(err) {
          return this.code === err.code && this.reason === err.reason;
        }
        toString() {
          const msg = typeof this.reason === "string" ? this.reason : JSON.stringify(this.reason);
          return "" + this.code + " - " + msg;
        }
      };
      exports.FidjError = FidjError;
    }
  });

  // ../../../sdk/dist/sdk/Interfaces.js
  var require_Interfaces2 = __commonJS({
    "../../../sdk/dist/sdk/Interfaces.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LoggerLevelEnum = void 0;
      var LoggerLevelEnum;
      (function(LoggerLevelEnum2) {
        LoggerLevelEnum2[LoggerLevelEnum2["INFO"] = 1] = "INFO";
        LoggerLevelEnum2[LoggerLevelEnum2["WARN"] = 2] = "WARN";
        LoggerLevelEnum2[LoggerLevelEnum2["ERROR"] = 3] = "ERROR";
        LoggerLevelEnum2[LoggerLevelEnum2["NONE"] = 4] = "NONE";
      })(LoggerLevelEnum || (exports.LoggerLevelEnum = LoggerLevelEnum = {}));
    }
  });

  // ../../../sdk/dist/sdk/IService.js
  var require_IService = __commonJS({
    "../../../sdk/dist/sdk/IService.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../sdk/node_modules/oauth4webapi/build/index.js
  var build_exports = {};
  __export(build_exports, {
    AUTHORIZATION_RESPONSE_ERROR: () => AUTHORIZATION_RESPONSE_ERROR,
    AuthorizationResponseError: () => AuthorizationResponseError,
    ClientSecretBasic: () => ClientSecretBasic,
    ClientSecretJwt: () => ClientSecretJwt,
    ClientSecretPost: () => ClientSecretPost,
    DPoP: () => DPoP,
    HTTP_REQUEST_FORBIDDEN: () => HTTP_REQUEST_FORBIDDEN,
    INVALID_REQUEST: () => INVALID_REQUEST,
    INVALID_RESPONSE: () => INVALID_RESPONSE,
    INVALID_SERVER_METADATA: () => INVALID_SERVER_METADATA,
    JSON_ATTRIBUTE_COMPARISON: () => JSON_ATTRIBUTE_COMPARISON,
    JWT_CLAIM_COMPARISON: () => JWT_CLAIM_COMPARISON,
    JWT_TIMESTAMP_CHECK: () => JWT_TIMESTAMP_CHECK,
    JWT_USERINFO_EXPECTED: () => JWT_USERINFO_EXPECTED,
    KEY_SELECTION: () => KEY_SELECTION,
    MISSING_SERVER_METADATA: () => MISSING_SERVER_METADATA,
    None: () => None,
    OperationProcessingError: () => OperationProcessingError,
    PARSE_ERROR: () => PARSE_ERROR,
    PrivateKeyJwt: () => PrivateKeyJwt,
    REQUEST_PROTOCOL_FORBIDDEN: () => REQUEST_PROTOCOL_FORBIDDEN,
    RESPONSE_BODY_ERROR: () => RESPONSE_BODY_ERROR,
    RESPONSE_IS_NOT_CONFORM: () => RESPONSE_IS_NOT_CONFORM,
    RESPONSE_IS_NOT_JSON: () => RESPONSE_IS_NOT_JSON,
    ResponseBodyError: () => ResponseBodyError,
    TlsClientAuth: () => TlsClientAuth,
    UNSUPPORTED_OPERATION: () => UNSUPPORTED_OPERATION,
    UnsupportedOperationError: () => UnsupportedOperationError,
    WWWAuthenticateChallengeError: () => WWWAuthenticateChallengeError,
    WWW_AUTHENTICATE_CHALLENGE: () => WWW_AUTHENTICATE_CHALLENGE,
    _expectedIssuer: () => _expectedIssuer,
    _nodiscoverycheck: () => _nodiscoverycheck,
    _nopkce: () => _nopkce,
    allowInsecureRequests: () => allowInsecureRequests,
    authorizationCodeGrantRequest: () => authorizationCodeGrantRequest,
    backchannelAuthenticationGrantRequest: () => backchannelAuthenticationGrantRequest,
    backchannelAuthenticationRequest: () => backchannelAuthenticationRequest,
    calculatePKCECodeChallenge: () => calculatePKCECodeChallenge,
    checkProtocol: () => checkProtocol,
    clientCredentialsGrantRequest: () => clientCredentialsGrantRequest,
    clockSkew: () => clockSkew,
    clockTolerance: () => clockTolerance,
    customFetch: () => customFetch,
    deviceAuthorizationRequest: () => deviceAuthorizationRequest,
    deviceCodeGrantRequest: () => deviceCodeGrantRequest,
    discoveryRequest: () => discoveryRequest,
    dynamicClientRegistrationRequest: () => dynamicClientRegistrationRequest,
    expectNoNonce: () => expectNoNonce,
    expectNoState: () => expectNoState,
    formPostResponse: () => formPostResponse,
    generateKeyPair: () => generateKeyPair,
    generateRandomCodeVerifier: () => generateRandomCodeVerifier,
    generateRandomNonce: () => generateRandomNonce,
    generateRandomState: () => generateRandomState,
    genericTokenEndpointRequest: () => genericTokenEndpointRequest,
    getContentType: () => getContentType,
    getValidatedIdTokenClaims: () => getValidatedIdTokenClaims,
    introspectionRequest: () => introspectionRequest,
    isDPoPNonceError: () => isDPoPNonceError,
    issueRequestObject: () => issueRequestObject,
    jweDecrypt: () => jweDecrypt,
    jwksCache: () => jwksCache,
    modifyAssertion: () => modifyAssertion,
    nopkce: () => nopkce,
    processAuthorizationCodeResponse: () => processAuthorizationCodeResponse,
    processBackchannelAuthenticationGrantResponse: () => processBackchannelAuthenticationGrantResponse,
    processBackchannelAuthenticationResponse: () => processBackchannelAuthenticationResponse,
    processClientCredentialsResponse: () => processClientCredentialsResponse,
    processDeviceAuthorizationResponse: () => processDeviceAuthorizationResponse,
    processDeviceCodeResponse: () => processDeviceCodeResponse,
    processDiscoveryResponse: () => processDiscoveryResponse,
    processDynamicClientRegistrationResponse: () => processDynamicClientRegistrationResponse,
    processGenericTokenEndpointResponse: () => processGenericTokenEndpointResponse,
    processIntrospectionResponse: () => processIntrospectionResponse,
    processPushedAuthorizationResponse: () => processPushedAuthorizationResponse,
    processRefreshTokenResponse: () => processRefreshTokenResponse,
    processResourceDiscoveryResponse: () => processResourceDiscoveryResponse,
    processRevocationResponse: () => processRevocationResponse,
    processUserInfoResponse: () => processUserInfoResponse,
    protectedResourceRequest: () => protectedResourceRequest,
    pushedAuthorizationRequest: () => pushedAuthorizationRequest,
    refreshTokenGrantRequest: () => refreshTokenGrantRequest,
    resolveEndpoint: () => resolveEndpoint,
    resourceDiscoveryRequest: () => resourceDiscoveryRequest,
    revocationRequest: () => revocationRequest,
    skipAuthTimeCheck: () => skipAuthTimeCheck,
    skipStateCheck: () => skipStateCheck,
    skipSubjectCheck: () => skipSubjectCheck,
    userInfoRequest: () => userInfoRequest,
    validateApplicationLevelSignature: () => validateApplicationLevelSignature,
    validateAuthResponse: () => validateAuthResponse,
    validateCodeIdTokenResponse: () => validateCodeIdTokenResponse,
    validateDetachedSignatureResponse: () => validateDetachedSignatureResponse,
    validateJwtAccessToken: () => validateJwtAccessToken,
    validateJwtAuthResponse: () => validateJwtAuthResponse
  });
  function looseInstanceOf(input, expected) {
    if (input == null) {
      return false;
    }
    try {
      return input instanceof expected || Object.getPrototypeOf(input)[Symbol.toStringTag] === expected.prototype[Symbol.toStringTag];
    } catch {
      return false;
    }
  }
  function CodedTypeError(message2, code, cause) {
    const err = new TypeError(message2, { cause });
    Object.assign(err, { code });
    return err;
  }
  function buf(input) {
    if (typeof input === "string") {
      return encoder.encode(input);
    }
    return decoder.decode(input);
  }
  function b64u(input) {
    if (typeof input === "string") {
      return decodeBase64Url(input);
    }
    return encodeBase64Url(input);
  }
  function OPE(message2, code, cause) {
    return new OperationProcessingError(message2, { code, cause });
  }
  async function calculateJwkThumbprint(jwk) {
    let components;
    switch (jwk.kty) {
      case "EC":
        components = {
          crv: jwk.crv,
          kty: jwk.kty,
          x: jwk.x,
          y: jwk.y
        };
        break;
      case "OKP":
        components = {
          crv: jwk.crv,
          kty: jwk.kty,
          x: jwk.x
        };
        break;
      case "AKP":
        components = {
          alg: jwk.alg,
          kty: jwk.kty,
          pub: jwk.pub
        };
        break;
      case "RSA":
        components = {
          e: jwk.e,
          kty: jwk.kty,
          n: jwk.n
        };
        break;
      default:
        throw new UnsupportedOperationError("unsupported JWK key type", { cause: jwk });
    }
    return b64u(await crypto.subtle.digest("SHA-256", buf(JSON.stringify(components))));
  }
  function assertCryptoKey(key, it) {
    if (!(key instanceof CryptoKey)) {
      throw CodedTypeError(`${it} must be a CryptoKey`, ERR_INVALID_ARG_TYPE);
    }
  }
  function assertPrivateKey(key, it) {
    assertCryptoKey(key, it);
    if (key.type !== "private") {
      throw CodedTypeError(`${it} must be a private CryptoKey`, ERR_INVALID_ARG_VALUE);
    }
  }
  function assertPublicKey(key, it) {
    assertCryptoKey(key, it);
    if (key.type !== "public") {
      throw CodedTypeError(`${it} must be a public CryptoKey`, ERR_INVALID_ARG_VALUE);
    }
  }
  function normalizeTyp(value) {
    return value.toLowerCase().replace(/^application\//, "");
  }
  function isJsonObject(input) {
    if (input === null || typeof input !== "object" || Array.isArray(input)) {
      return false;
    }
    return true;
  }
  function prepareHeaders(input) {
    if (looseInstanceOf(input, Headers)) {
      input = Object.fromEntries(input.entries());
    }
    const headers = new Headers(input ?? {});
    if (USER_AGENT && !headers.has("user-agent")) {
      headers.set("user-agent", USER_AGENT);
    }
    if (headers.has("authorization")) {
      throw CodedTypeError('"options.headers" must not include the "authorization" header name', ERR_INVALID_ARG_VALUE);
    }
    return headers;
  }
  function signal(url, value) {
    if (value !== void 0) {
      if (typeof value === "function") {
        value = value(url.href);
      }
      if (!(value instanceof AbortSignal)) {
        throw CodedTypeError('"options.signal" must return or be an instance of AbortSignal', ERR_INVALID_ARG_TYPE);
      }
      return value;
    }
    return void 0;
  }
  function replaceDoubleSlash(pathname) {
    if (pathname.includes("//")) {
      return pathname.replace("//", "/");
    }
    return pathname;
  }
  function prependWellKnown(url, wellKnown, allowTerminatingSlash = false) {
    if (url.pathname === "/") {
      url.pathname = wellKnown;
    } else {
      url.pathname = replaceDoubleSlash(`${wellKnown}/${allowTerminatingSlash ? url.pathname : url.pathname.replace(/(\/)$/, "")}`);
    }
    return url;
  }
  function appendWellKnown(url, wellKnown) {
    url.pathname = replaceDoubleSlash(`${url.pathname}/${wellKnown}`);
    return url;
  }
  async function performDiscovery(input, urlName, transform, options) {
    if (!(input instanceof URL)) {
      throw CodedTypeError(`"${urlName}" must be an instance of URL`, ERR_INVALID_ARG_TYPE);
    }
    checkProtocol(input, options?.[allowInsecureRequests] !== true);
    const url = transform(new URL(input.href));
    const headers = prepareHeaders(options?.headers);
    headers.set("accept", "application/json");
    return (options?.[customFetch] || fetch)(url.href, {
      body: void 0,
      headers: Object.fromEntries(headers.entries()),
      method: "GET",
      redirect: "manual",
      signal: signal(url, options?.signal)
    });
  }
  async function discoveryRequest(issuerIdentifier, options) {
    return performDiscovery(issuerIdentifier, "issuerIdentifier", (url) => {
      switch (options?.algorithm) {
        case void 0:
        case "oidc":
          appendWellKnown(url, ".well-known/openid-configuration");
          break;
        case "oauth2":
          prependWellKnown(url, ".well-known/oauth-authorization-server");
          break;
        default:
          throw CodedTypeError('"options.algorithm" must be "oidc" (default), or "oauth2"', ERR_INVALID_ARG_VALUE);
      }
      return url;
    }, options);
  }
  function assertNumber(input, allow0, it, code, cause) {
    try {
      if (typeof input !== "number" || !Number.isFinite(input)) {
        throw CodedTypeError(`${it} must be a number`, ERR_INVALID_ARG_TYPE, cause);
      }
      if (input > 0)
        return;
      if (allow0) {
        if (input !== 0) {
          throw CodedTypeError(`${it} must be a non-negative number`, ERR_INVALID_ARG_VALUE, cause);
        }
        return;
      }
      throw CodedTypeError(`${it} must be a positive number`, ERR_INVALID_ARG_VALUE, cause);
    } catch (err) {
      if (code) {
        throw OPE(err.message, code, cause);
      }
      throw err;
    }
  }
  function assertString(input, it, code, cause) {
    try {
      if (typeof input !== "string") {
        throw CodedTypeError(`${it} must be a string`, ERR_INVALID_ARG_TYPE, cause);
      }
      if (input.length === 0) {
        throw CodedTypeError(`${it} must not be empty`, ERR_INVALID_ARG_VALUE, cause);
      }
    } catch (err) {
      if (code) {
        throw OPE(err.message, code, cause);
      }
      throw err;
    }
  }
  async function processDiscoveryResponse(expectedIssuerIdentifier, response) {
    const expected = expectedIssuerIdentifier;
    if (!(expected instanceof URL) && expected !== _nodiscoverycheck) {
      throw CodedTypeError('"expectedIssuerIdentifier" must be an instance of URL', ERR_INVALID_ARG_TYPE);
    }
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    if (response.status !== 200) {
      throw OPE('"response" is not a conform Authorization Server Metadata response (unexpected HTTP status code)', RESPONSE_IS_NOT_CONFORM, response);
    }
    assertReadableResponse(response);
    const json = await getResponseJsonBody(response);
    assertString(json.issuer, '"response" body "issuer" property', INVALID_RESPONSE, { body: json });
    if (expected !== _nodiscoverycheck && new URL(json.issuer).href !== expected.href) {
      throw OPE('"response" body "issuer" property does not match the expected value', JSON_ATTRIBUTE_COMPARISON, { expected: expected.href, body: json, attribute: "issuer" });
    }
    return json;
  }
  function assertApplicationJson(response) {
    assertContentType(response, "application/json");
  }
  function notJson(response, ...types) {
    let msg = '"response" content-type must be ';
    if (types.length > 2) {
      const last = types.pop();
      msg += `${types.join(", ")}, or ${last}`;
    } else if (types.length === 2) {
      msg += `${types[0]} or ${types[1]}`;
    } else {
      msg += types[0];
    }
    return OPE(msg, RESPONSE_IS_NOT_JSON, response);
  }
  function assertContentTypes(response, ...types) {
    if (!types.includes(getContentType(response))) {
      throw notJson(response, ...types);
    }
  }
  function assertContentType(response, contentType) {
    if (getContentType(response) !== contentType) {
      throw notJson(response, contentType);
    }
  }
  function randomBytes() {
    return b64u(crypto.getRandomValues(new Uint8Array(32)));
  }
  function generateRandomCodeVerifier() {
    return randomBytes();
  }
  function generateRandomState() {
    return randomBytes();
  }
  function generateRandomNonce() {
    return randomBytes();
  }
  async function calculatePKCECodeChallenge(codeVerifier) {
    assertString(codeVerifier, "codeVerifier");
    return b64u(await crypto.subtle.digest("SHA-256", buf(codeVerifier)));
  }
  function getKeyAndKid(input) {
    if (input instanceof CryptoKey) {
      return { key: input };
    }
    if (!(input?.key instanceof CryptoKey)) {
      return {};
    }
    if (input.kid !== void 0) {
      assertString(input.kid, '"kid"');
    }
    return {
      key: input.key,
      kid: input.kid
    };
  }
  function psAlg(key) {
    switch (key.algorithm.hash.name) {
      case "SHA-256":
        return "PS256";
      case "SHA-384":
        return "PS384";
      case "SHA-512":
        return "PS512";
      default:
        throw new UnsupportedOperationError("unsupported RsaHashedKeyAlgorithm hash name", {
          cause: key
        });
    }
  }
  function rsAlg(key) {
    switch (key.algorithm.hash.name) {
      case "SHA-256":
        return "RS256";
      case "SHA-384":
        return "RS384";
      case "SHA-512":
        return "RS512";
      default:
        throw new UnsupportedOperationError("unsupported RsaHashedKeyAlgorithm hash name", {
          cause: key
        });
    }
  }
  function esAlg(key) {
    switch (key.algorithm.namedCurve) {
      case "P-256":
        return "ES256";
      case "P-384":
        return "ES384";
      case "P-521":
        return "ES512";
      default:
        throw new UnsupportedOperationError("unsupported EcKeyAlgorithm namedCurve", { cause: key });
    }
  }
  function keyToJws(key) {
    switch (key.algorithm.name) {
      case "RSA-PSS":
        return psAlg(key);
      case "RSASSA-PKCS1-v1_5":
        return rsAlg(key);
      case "ECDSA":
        return esAlg(key);
      case "Ed25519":
      case "ML-DSA-44":
      case "ML-DSA-65":
      case "ML-DSA-87":
        return key.algorithm.name;
      case "EdDSA":
        return "Ed25519";
      default:
        throw new UnsupportedOperationError("unsupported CryptoKey algorithm name", { cause: key });
    }
  }
  function getClockSkew(client) {
    const skew = client?.[clockSkew];
    return typeof skew === "number" && Number.isFinite(skew) ? skew : 0;
  }
  function getClockTolerance(client) {
    const tolerance = client?.[clockTolerance];
    return typeof tolerance === "number" && Number.isFinite(tolerance) && Math.sign(tolerance) !== -1 ? tolerance : 30;
  }
  function epochTime() {
    return Math.floor(Date.now() / 1e3);
  }
  function assertAs(as) {
    if (typeof as !== "object" || as === null) {
      throw CodedTypeError('"as" must be an object', ERR_INVALID_ARG_TYPE);
    }
    assertString(as.issuer, '"as.issuer"');
  }
  function assertClient(client) {
    if (typeof client !== "object" || client === null) {
      throw CodedTypeError('"client" must be an object', ERR_INVALID_ARG_TYPE);
    }
    assertString(client.client_id, '"client.client_id"');
  }
  function formUrlEncode(token) {
    return encodeURIComponent(token).replace(/(?:[-_.!~*'()]|%20)/g, (substring) => {
      switch (substring) {
        case "-":
        case "_":
        case ".":
        case "!":
        case "~":
        case "*":
        case "'":
        case "(":
        case ")":
          return `%${substring.charCodeAt(0).toString(16).toUpperCase()}`;
        case "%20":
          return "+";
        default:
          throw new Error();
      }
    });
  }
  function ClientSecretPost(clientSecret) {
    assertString(clientSecret, '"clientSecret"');
    return (_as, client, body, _headers) => {
      body.set("client_id", client.client_id);
      body.set("client_secret", clientSecret);
    };
  }
  function ClientSecretBasic(clientSecret) {
    assertString(clientSecret, '"clientSecret"');
    return (_as, client, _body, headers) => {
      const username = formUrlEncode(client.client_id);
      const password = formUrlEncode(clientSecret);
      const credentials = btoa(`${username}:${password}`);
      headers.set("authorization", `Basic ${credentials}`);
    };
  }
  function clientAssertionPayload(as, client) {
    const now = epochTime() + getClockSkew(client);
    return {
      jti: randomBytes(),
      aud: as.issuer,
      exp: now + 60,
      iat: now,
      nbf: now,
      iss: client.client_id,
      sub: client.client_id
    };
  }
  function PrivateKeyJwt(clientPrivateKey, options) {
    const { key, kid } = getKeyAndKid(clientPrivateKey);
    assertPrivateKey(key, '"clientPrivateKey.key"');
    return async (as, client, body, _headers) => {
      const header = { alg: keyToJws(key), kid };
      const payload = clientAssertionPayload(as, client);
      options?.[modifyAssertion]?.(header, payload);
      body.set("client_id", client.client_id);
      body.set("client_assertion_type", "urn:ietf:params:oauth:client-assertion-type:jwt-bearer");
      body.set("client_assertion", await signJwt(header, payload, key));
    };
  }
  function ClientSecretJwt(clientSecret, options) {
    assertString(clientSecret, '"clientSecret"');
    const modify = options?.[modifyAssertion];
    let key;
    return async (as, client, body, _headers) => {
      key ||= await crypto.subtle.importKey("raw", buf(clientSecret), { hash: "SHA-256", name: "HMAC" }, false, ["sign"]);
      const header = { alg: "HS256" };
      const payload = clientAssertionPayload(as, client);
      modify?.(header, payload);
      const data = `${b64u(buf(JSON.stringify(header)))}.${b64u(buf(JSON.stringify(payload)))}`;
      const hmac = await crypto.subtle.sign(key.algorithm, key, buf(data));
      body.set("client_id", client.client_id);
      body.set("client_assertion_type", "urn:ietf:params:oauth:client-assertion-type:jwt-bearer");
      body.set("client_assertion", `${data}.${b64u(new Uint8Array(hmac))}`);
    };
  }
  function None() {
    return (_as, client, body, _headers) => {
      body.set("client_id", client.client_id);
    };
  }
  function TlsClientAuth() {
    return None();
  }
  async function signJwt(header, payload, key) {
    if (!key.usages.includes("sign")) {
      throw CodedTypeError('CryptoKey instances used for signing assertions must include "sign" in their "usages"', ERR_INVALID_ARG_VALUE);
    }
    const input = `${b64u(buf(JSON.stringify(header)))}.${b64u(buf(JSON.stringify(payload)))}`;
    const signature = b64u(await crypto.subtle.sign(keyToSubtle(key), key, buf(input)));
    return `${input}.${signature}`;
  }
  async function issueRequestObject(as, client, parameters, privateKey, options) {
    assertAs(as);
    assertClient(client);
    parameters = new URLSearchParams(parameters);
    const { key, kid } = getKeyAndKid(privateKey);
    assertPrivateKey(key, '"privateKey.key"');
    parameters.set("client_id", client.client_id);
    const now = epochTime() + getClockSkew(client);
    const claims = {
      ...Object.fromEntries(parameters.entries()),
      jti: randomBytes(),
      aud: as.issuer,
      exp: now + 60,
      iat: now,
      nbf: now,
      iss: client.client_id
    };
    let resource;
    if (parameters.has("resource") && (resource = parameters.getAll("resource")) && resource.length > 1) {
      claims.resource = resource;
    }
    {
      let value = parameters.get("max_age");
      if (value !== null) {
        claims.max_age = parseInt(value, 10);
        assertNumber(claims.max_age, true, '"max_age" parameter');
      }
    }
    {
      let value = parameters.get("claims");
      if (value !== null) {
        try {
          claims.claims = JSON.parse(value);
        } catch (cause) {
          throw OPE('failed to parse the "claims" parameter as JSON', PARSE_ERROR, cause);
        }
        if (!isJsonObject(claims.claims)) {
          throw CodedTypeError('"claims" parameter must be a JSON with a top level object', ERR_INVALID_ARG_VALUE);
        }
      }
    }
    {
      let value = parameters.get("authorization_details");
      if (value !== null) {
        try {
          claims.authorization_details = JSON.parse(value);
        } catch (cause) {
          throw OPE('failed to parse the "authorization_details" parameter as JSON', PARSE_ERROR, cause);
        }
        if (!Array.isArray(claims.authorization_details)) {
          throw CodedTypeError('"authorization_details" parameter must be a JSON with a top level array', ERR_INVALID_ARG_VALUE);
        }
      }
    }
    const header = {
      alg: keyToJws(key),
      typ: "oauth-authz-req+jwt",
      kid
    };
    options?.[modifyAssertion]?.(header, claims);
    return signJwt(header, claims, key);
  }
  async function getSetPublicJwkCache(key, alg) {
    const { kty, e, n, x, y, crv, pub } = await crypto.subtle.exportKey("jwk", key);
    const jwk = { kty, e, n, x, y, crv, pub };
    if (kty === "AKP")
      jwk.alg = alg;
    jwkCache.set(key, jwk);
    return jwk;
  }
  async function publicJwk(key, alg) {
    jwkCache ||= /* @__PURE__ */ new WeakMap();
    return jwkCache.get(key) || getSetPublicJwkCache(key, alg);
  }
  function checkProtocol(url, enforceHttps) {
    if (enforceHttps && url.protocol !== "https:") {
      throw OPE("only requests to HTTPS are allowed", HTTP_REQUEST_FORBIDDEN, url);
    }
    if (url.protocol !== "https:" && url.protocol !== "http:") {
      throw OPE("only HTTP and HTTPS requests are allowed", REQUEST_PROTOCOL_FORBIDDEN, url);
    }
  }
  function validateEndpoint(value, endpoint, useMtlsAlias, enforceHttps) {
    let url;
    if (typeof value !== "string" || !(url = URLParse(value))) {
      throw OPE(`authorization server metadata does not contain a valid ${useMtlsAlias ? `"as.mtls_endpoint_aliases.${endpoint}"` : `"as.${endpoint}"`}`, value === void 0 ? MISSING_SERVER_METADATA : INVALID_SERVER_METADATA, { attribute: useMtlsAlias ? `mtls_endpoint_aliases.${endpoint}` : endpoint });
    }
    checkProtocol(url, enforceHttps);
    return url;
  }
  function resolveEndpoint(as, endpoint, useMtlsAlias, enforceHttps) {
    if (useMtlsAlias && as.mtls_endpoint_aliases && endpoint in as.mtls_endpoint_aliases) {
      return validateEndpoint(as.mtls_endpoint_aliases[endpoint], endpoint, useMtlsAlias, enforceHttps);
    }
    return validateEndpoint(as[endpoint], endpoint, useMtlsAlias, enforceHttps);
  }
  async function pushedAuthorizationRequest(as, client, clientAuthentication, parameters, options) {
    assertAs(as);
    assertClient(client);
    const url = resolveEndpoint(as, "pushed_authorization_request_endpoint", client.use_mtls_endpoint_aliases, options?.[allowInsecureRequests] !== true);
    const body = new URLSearchParams(parameters);
    body.set("client_id", client.client_id);
    const headers = prepareHeaders(options?.headers);
    headers.set("accept", "application/json");
    if (options?.DPoP !== void 0) {
      assertDPoP(options.DPoP);
      await options.DPoP.addProof(url, headers, "POST");
    }
    const response = await authenticatedRequest(as, client, clientAuthentication, url, body, headers, options);
    options?.DPoP?.cacheNonce(response, url);
    return response;
  }
  function isDPoPNonceError(err) {
    if (err instanceof WWWAuthenticateChallengeError) {
      const { 0: challenge, length } = err.cause;
      return length === 1 && challenge.scheme === "dpop" && challenge.parameters.error === "use_dpop_nonce";
    }
    if (err instanceof ResponseBodyError) {
      return err.error === "use_dpop_nonce";
    }
    return false;
  }
  function DPoP(client, keyPair, options) {
    return new DPoPHandler(client, keyPair, options);
  }
  function parseWwwAuthenticateChallenges(response) {
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    const header = response.headers.get("www-authenticate");
    if (header === null) {
      return void 0;
    }
    const challenges = [];
    let rest = header;
    while (rest) {
      let match = rest.match(schemeRE);
      const scheme = match?.["1"].toLowerCase();
      rest = match?.["2"];
      if (!scheme) {
        return void 0;
      }
      const parameters = {};
      let token68;
      while (rest) {
        let key;
        let value;
        if (match = rest.match(quotedParamRE)) {
          ;
          [, key, value, rest] = match;
          if (value.includes("\\")) {
            try {
              value = JSON.parse(`"${value}"`);
            } catch {
            }
          }
          parameters[key.toLowerCase()] = value;
          continue;
        }
        if (match = rest.match(unquotedParamRE)) {
          ;
          [, key, value, rest] = match;
          parameters[key.toLowerCase()] = value;
          continue;
        }
        if (match = rest.match(token68ParamRE)) {
          if (Object.keys(parameters).length) {
            break;
          }
          ;
          [, token68, rest] = match;
          break;
        }
        return void 0;
      }
      const challenge = { scheme, parameters };
      if (token68) {
        challenge.token68 = token68;
      }
      challenges.push(challenge);
    }
    if (!challenges.length) {
      return void 0;
    }
    return challenges;
  }
  async function processPushedAuthorizationResponse(as, client, response) {
    assertAs(as);
    assertClient(client);
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    await checkOAuthBodyError(response, 201, "Pushed Authorization Request Endpoint");
    assertReadableResponse(response);
    const json = await getResponseJsonBody(response);
    assertString(json.request_uri, '"response" body "request_uri" property', INVALID_RESPONSE, {
      body: json
    });
    let expiresIn = typeof json.expires_in !== "number" ? parseFloat(json.expires_in) : json.expires_in;
    assertNumber(expiresIn, true, '"response" body "expires_in" property', INVALID_RESPONSE, {
      body: json
    });
    json.expires_in = expiresIn;
    return json;
  }
  async function parseOAuthResponseErrorBody(response) {
    if (response.status > 399 && response.status < 500) {
      assertReadableResponse(response);
      assertApplicationJson(response);
      try {
        const json = await response.clone().json();
        if (isJsonObject(json) && typeof json.error === "string" && json.error.length) {
          return json;
        }
      } catch {
      }
    }
    return void 0;
  }
  async function checkOAuthBodyError(response, expected, label) {
    if (response.status !== expected) {
      checkAuthenticationChallenges(response);
      let err;
      if (err = await parseOAuthResponseErrorBody(response)) {
        await response.body?.cancel();
        throw new ResponseBodyError("server responded with an error in the response body", {
          cause: err,
          response
        });
      }
      throw OPE(`"response" is not a conform ${label} response (unexpected HTTP status code)`, RESPONSE_IS_NOT_CONFORM, response);
    }
  }
  function assertDPoP(option) {
    if (!branded.has(option)) {
      throw CodedTypeError('"options.DPoP" is not a valid DPoPHandle', ERR_INVALID_ARG_VALUE);
    }
  }
  async function resourceRequest(accessToken, method, url, headers, body, options) {
    assertString(accessToken, '"accessToken"');
    if (!(url instanceof URL)) {
      throw CodedTypeError('"url" must be an instance of URL', ERR_INVALID_ARG_TYPE);
    }
    checkProtocol(url, options?.[allowInsecureRequests] !== true);
    headers = prepareHeaders(headers);
    if (options?.DPoP) {
      assertDPoP(options.DPoP);
      await options.DPoP.addProof(url, headers, method.toUpperCase(), accessToken);
    }
    headers.set("authorization", `${headers.has("dpop") ? "DPoP" : "Bearer"} ${accessToken}`);
    const response = await (options?.[customFetch] || fetch)(url.href, {
      body,
      headers: Object.fromEntries(headers.entries()),
      method,
      redirect: "manual",
      signal: signal(url, options?.signal)
    });
    options?.DPoP?.cacheNonce(response, url);
    return response;
  }
  async function protectedResourceRequest(accessToken, method, url, headers, body, options) {
    const response = await resourceRequest(accessToken, method, url, headers, body, options);
    checkAuthenticationChallenges(response);
    return response;
  }
  async function userInfoRequest(as, client, accessToken, options) {
    assertAs(as);
    assertClient(client);
    const url = resolveEndpoint(as, "userinfo_endpoint", client.use_mtls_endpoint_aliases, options?.[allowInsecureRequests] !== true);
    const headers = prepareHeaders(options?.headers);
    if (client.userinfo_signed_response_alg) {
      headers.set("accept", "application/jwt");
    } else {
      headers.set("accept", "application/json");
      headers.append("accept", "application/jwt");
    }
    return resourceRequest(accessToken, "GET", url, headers, null, {
      ...options,
      [clockSkew]: getClockSkew(client)
    });
  }
  function setJwksCache(as, jwks, uat, cache) {
    jwksMap ||= /* @__PURE__ */ new WeakMap();
    jwksMap.set(as, {
      jwks,
      uat,
      get age() {
        return epochTime() - this.uat;
      }
    });
    if (cache) {
      Object.assign(cache, { jwks: structuredClone(jwks), uat });
    }
  }
  function isFreshJwksCache(input) {
    if (typeof input !== "object" || input === null) {
      return false;
    }
    if (!("uat" in input) || typeof input.uat !== "number" || epochTime() - input.uat >= 300) {
      return false;
    }
    if (!("jwks" in input) || !isJsonObject(input.jwks) || !Array.isArray(input.jwks.keys) || !Array.prototype.every.call(input.jwks.keys, isJsonObject)) {
      return false;
    }
    return true;
  }
  function clearJwksCache(as, cache) {
    jwksMap?.delete(as);
    delete cache?.jwks;
    delete cache?.uat;
  }
  async function getPublicSigKeyFromIssuerJwksUri(as, options, header) {
    const { alg, kid } = header;
    checkSupportedJwsAlg(header);
    if (!jwksMap?.has(as) && isFreshJwksCache(options?.[jwksCache])) {
      setJwksCache(as, options?.[jwksCache].jwks, options?.[jwksCache].uat);
    }
    let jwks;
    let age;
    if (jwksMap?.has(as)) {
      ;
      ({ jwks, age } = jwksMap.get(as));
      if (age >= 300) {
        clearJwksCache(as, options?.[jwksCache]);
        return getPublicSigKeyFromIssuerJwksUri(as, options, header);
      }
    } else {
      jwks = await jwksRequest(as, options).then(processJwksResponse);
      age = 0;
      setJwksCache(as, jwks, epochTime(), options?.[jwksCache]);
    }
    let kty;
    switch (alg.slice(0, 2)) {
      case "RS":
      case "PS":
        kty = "RSA";
        break;
      case "ES":
        kty = "EC";
        break;
      case "Ed":
        kty = "OKP";
        break;
      case "ML":
        kty = "AKP";
        break;
      default:
        throw new UnsupportedOperationError("unsupported JWS algorithm", { cause: { alg } });
    }
    const candidates = jwks.keys.filter((jwk2) => {
      if (jwk2.kty !== kty) {
        return false;
      }
      if (kid !== void 0 && kid !== jwk2.kid) {
        return false;
      }
      if (jwk2.alg !== void 0 && alg !== jwk2.alg) {
        return false;
      }
      if (jwk2.use !== void 0 && jwk2.use !== "sig") {
        return false;
      }
      if (jwk2.key_ops?.includes("verify") === false) {
        return false;
      }
      switch (true) {
        case (alg === "ES256" && jwk2.crv !== "P-256"):
        case (alg === "ES384" && jwk2.crv !== "P-384"):
        case (alg === "ES512" && jwk2.crv !== "P-521"):
        case (alg === "Ed25519" && jwk2.crv !== "Ed25519"):
        case (alg === "EdDSA" && jwk2.crv !== "Ed25519"):
          return false;
      }
      return true;
    });
    const { 0: jwk, length } = candidates;
    if (!length) {
      if (age >= 60) {
        clearJwksCache(as, options?.[jwksCache]);
        return getPublicSigKeyFromIssuerJwksUri(as, options, header);
      }
      throw OPE("error when selecting a JWT verification key, no applicable keys found", KEY_SELECTION, { header, candidates, jwks_uri: new URL(as.jwks_uri) });
    }
    if (length !== 1) {
      throw OPE('error when selecting a JWT verification key, multiple applicable keys found, a "kid" JWT Header Parameter is required', KEY_SELECTION, { header, candidates, jwks_uri: new URL(as.jwks_uri) });
    }
    return importJwk(alg, jwk);
  }
  function getContentType(input) {
    return input.headers.get("content-type")?.split(";")[0];
  }
  async function processUserInfoResponse(as, client, expectedSubject, response, options) {
    assertAs(as);
    assertClient(client);
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    checkAuthenticationChallenges(response);
    if (response.status !== 200) {
      throw OPE('"response" is not a conform UserInfo Endpoint response (unexpected HTTP status code)', RESPONSE_IS_NOT_CONFORM, response);
    }
    assertReadableResponse(response);
    let json;
    if (getContentType(response) === "application/jwt") {
      const { claims, jwt } = await validateJwt(await response.text(), checkSigningAlgorithm.bind(void 0, client.userinfo_signed_response_alg, as.userinfo_signing_alg_values_supported, void 0), getClockSkew(client), getClockTolerance(client), options?.[jweDecrypt]).then(validateOptionalAudience.bind(void 0, client.client_id)).then(validateOptionalIssuer.bind(void 0, as));
      jwtRefs.set(response, jwt);
      json = claims;
    } else {
      if (client.userinfo_signed_response_alg) {
        throw OPE("JWT UserInfo Response expected", JWT_USERINFO_EXPECTED, response);
      }
      json = await getResponseJsonBody(response);
    }
    assertString(json.sub, '"response" body "sub" property', INVALID_RESPONSE, { body: json });
    switch (expectedSubject) {
      case skipSubjectCheck:
        break;
      default:
        assertString(expectedSubject, '"expectedSubject"');
        if (json.sub !== expectedSubject) {
          throw OPE('unexpected "response" body "sub" property value', JSON_ATTRIBUTE_COMPARISON, {
            expected: expectedSubject,
            body: json,
            attribute: "sub"
          });
        }
    }
    return json;
  }
  async function authenticatedRequest(as, client, clientAuthentication, url, body, headers, options) {
    await clientAuthentication(as, client, body, headers);
    headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
    return (options?.[customFetch] || fetch)(url.href, {
      body,
      headers: Object.fromEntries(headers.entries()),
      method: "POST",
      redirect: "manual",
      signal: signal(url, options?.signal)
    });
  }
  async function tokenEndpointRequest(as, client, clientAuthentication, grantType, parameters, options) {
    const url = resolveEndpoint(as, "token_endpoint", client.use_mtls_endpoint_aliases, options?.[allowInsecureRequests] !== true);
    parameters.set("grant_type", grantType);
    const headers = prepareHeaders(options?.headers);
    headers.set("accept", "application/json");
    if (options?.DPoP !== void 0) {
      assertDPoP(options.DPoP);
      await options.DPoP.addProof(url, headers, "POST");
    }
    const response = await authenticatedRequest(as, client, clientAuthentication, url, parameters, headers, options);
    options?.DPoP?.cacheNonce(response, url);
    return response;
  }
  async function refreshTokenGrantRequest(as, client, clientAuthentication, refreshToken, options) {
    assertAs(as);
    assertClient(client);
    assertString(refreshToken, '"refreshToken"');
    const parameters = new URLSearchParams(options?.additionalParameters);
    parameters.set("refresh_token", refreshToken);
    return tokenEndpointRequest(as, client, clientAuthentication, "refresh_token", parameters, options);
  }
  function getValidatedIdTokenClaims(ref) {
    if (!ref.id_token) {
      return void 0;
    }
    const claims = idTokenClaims.get(ref);
    if (!claims) {
      throw CodedTypeError('"ref" was already garbage collected or did not resolve from the proper sources', ERR_INVALID_ARG_VALUE);
    }
    return claims;
  }
  async function validateApplicationLevelSignature(as, ref, options) {
    assertAs(as);
    if (!jwtRefs.has(ref)) {
      throw CodedTypeError('"ref" does not contain a processed JWT Response to verify the signature of', ERR_INVALID_ARG_VALUE);
    }
    const { 0: protectedHeader, 1: payload, 2: encodedSignature } = jwtRefs.get(ref).split(".");
    const header = JSON.parse(buf(b64u(protectedHeader)));
    if (header.alg.startsWith("HS")) {
      throw new UnsupportedOperationError("unsupported JWS algorithm", { cause: { alg: header.alg } });
    }
    let key;
    key = await getPublicSigKeyFromIssuerJwksUri(as, options, header);
    await validateJwsSignature(protectedHeader, payload, key, b64u(encodedSignature));
  }
  async function processGenericAccessTokenResponse(as, client, response, additionalRequiredIdTokenClaims, decryptFn, recognizedTokenTypes) {
    assertAs(as);
    assertClient(client);
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    await checkOAuthBodyError(response, 200, "Token Endpoint");
    assertReadableResponse(response);
    const json = await getResponseJsonBody(response);
    assertString(json.access_token, '"response" body "access_token" property', INVALID_RESPONSE, {
      body: json
    });
    assertString(json.token_type, '"response" body "token_type" property', INVALID_RESPONSE, {
      body: json
    });
    json.token_type = json.token_type.toLowerCase();
    if (json.expires_in !== void 0) {
      let expiresIn = typeof json.expires_in !== "number" ? parseFloat(json.expires_in) : json.expires_in;
      assertNumber(expiresIn, true, '"response" body "expires_in" property', INVALID_RESPONSE, {
        body: json
      });
      json.expires_in = expiresIn;
    }
    if (json.refresh_token !== void 0) {
      assertString(json.refresh_token, '"response" body "refresh_token" property', INVALID_RESPONSE, {
        body: json
      });
    }
    if (json.scope !== void 0 && typeof json.scope !== "string") {
      throw OPE('"response" body "scope" property must be a string', INVALID_RESPONSE, { body: json });
    }
    if (json.id_token !== void 0) {
      assertString(json.id_token, '"response" body "id_token" property', INVALID_RESPONSE, {
        body: json
      });
      const requiredClaims = ["aud", "exp", "iat", "iss", "sub"];
      if (client.require_auth_time === true) {
        requiredClaims.push("auth_time");
      }
      if (client.default_max_age !== void 0) {
        assertNumber(client.default_max_age, true, '"client.default_max_age"');
        requiredClaims.push("auth_time");
      }
      if (additionalRequiredIdTokenClaims?.length) {
        requiredClaims.push(...additionalRequiredIdTokenClaims);
      }
      const { claims, jwt } = await validateJwt(json.id_token, checkSigningAlgorithm.bind(void 0, client.id_token_signed_response_alg, as.id_token_signing_alg_values_supported, "RS256"), getClockSkew(client), getClockTolerance(client), decryptFn).then(validatePresence.bind(void 0, requiredClaims)).then(validateIssuer.bind(void 0, as)).then(validateAudience.bind(void 0, client.client_id));
      if (Array.isArray(claims.aud) && claims.aud.length !== 1) {
        if (claims.azp === void 0) {
          throw OPE('ID Token "aud" (audience) claim includes additional untrusted audiences', JWT_CLAIM_COMPARISON, { claims, claim: "aud" });
        }
        if (claims.azp !== client.client_id) {
          throw OPE('unexpected ID Token "azp" (authorized party) claim value', JWT_CLAIM_COMPARISON, { expected: client.client_id, claims, claim: "azp" });
        }
      }
      if (claims.auth_time !== void 0) {
        assertNumber(claims.auth_time, true, 'ID Token "auth_time" (authentication time)', INVALID_RESPONSE, { claims });
      }
      jwtRefs.set(response, jwt);
      idTokenClaims.set(json, claims);
    }
    if (recognizedTokenTypes?.[json.token_type] !== void 0) {
      recognizedTokenTypes[json.token_type](response, json);
    } else if (json.token_type !== "dpop" && json.token_type !== "bearer") {
      throw new UnsupportedOperationError("unsupported `token_type` value", { cause: { body: json } });
    }
    return json;
  }
  function checkAuthenticationChallenges(response) {
    let challenges;
    if (challenges = parseWwwAuthenticateChallenges(response)) {
      throw new WWWAuthenticateChallengeError("server responded with a challenge in the WWW-Authenticate HTTP Header", { cause: challenges, response });
    }
  }
  async function processRefreshTokenResponse(as, client, response, options) {
    return processGenericAccessTokenResponse(as, client, response, void 0, options?.[jweDecrypt], options?.recognizedTokenTypes);
  }
  function validateOptionalAudience(expected, result) {
    if (result.claims.aud !== void 0) {
      return validateAudience(expected, result);
    }
    return result;
  }
  function validateAudience(expected, result) {
    if (Array.isArray(result.claims.aud)) {
      if (!result.claims.aud.includes(expected)) {
        throw OPE('unexpected JWT "aud" (audience) claim value', JWT_CLAIM_COMPARISON, {
          expected,
          claims: result.claims,
          claim: "aud"
        });
      }
    } else if (result.claims.aud !== expected) {
      throw OPE('unexpected JWT "aud" (audience) claim value', JWT_CLAIM_COMPARISON, {
        expected,
        claims: result.claims,
        claim: "aud"
      });
    }
    return result;
  }
  function validateOptionalIssuer(as, result) {
    if (result.claims.iss !== void 0) {
      return validateIssuer(as, result);
    }
    return result;
  }
  function validateIssuer(as, result) {
    const expected = as[_expectedIssuer]?.(result) ?? as.issuer;
    if (result.claims.iss !== expected) {
      throw OPE('unexpected JWT "iss" (issuer) claim value', JWT_CLAIM_COMPARISON, {
        expected,
        claims: result.claims,
        claim: "iss"
      });
    }
    return result;
  }
  function brand(searchParams) {
    branded.add(searchParams);
    return searchParams;
  }
  async function authorizationCodeGrantRequest(as, client, clientAuthentication, callbackParameters, redirectUri, codeVerifier, options) {
    assertAs(as);
    assertClient(client);
    if (!branded.has(callbackParameters)) {
      throw CodedTypeError('"callbackParameters" must be an instance of URLSearchParams obtained from "validateAuthResponse()", or "validateJwtAuthResponse()', ERR_INVALID_ARG_VALUE);
    }
    assertString(redirectUri, '"redirectUri"');
    const code = getURLSearchParameter(callbackParameters, "code");
    if (!code) {
      throw OPE('no authorization code in "callbackParameters"', INVALID_RESPONSE);
    }
    const parameters = new URLSearchParams(options?.additionalParameters);
    parameters.set("redirect_uri", redirectUri);
    parameters.set("code", code);
    if (codeVerifier !== nopkce) {
      assertString(codeVerifier, '"codeVerifier"');
      parameters.set("code_verifier", codeVerifier);
    }
    return tokenEndpointRequest(as, client, clientAuthentication, "authorization_code", parameters, options);
  }
  function validatePresence(required, result) {
    for (const claim of required) {
      if (result.claims[claim] === void 0) {
        throw OPE(`JWT "${claim}" (${jwtClaimNames[claim]}) claim missing`, INVALID_RESPONSE, {
          claims: result.claims
        });
      }
    }
    return result;
  }
  async function processAuthorizationCodeResponse(as, client, response, options) {
    if (typeof options?.expectedNonce === "string" || typeof options?.maxAge === "number" || options?.requireIdToken) {
      return processAuthorizationCodeOpenIDResponse(as, client, response, options.expectedNonce, options.maxAge, options[jweDecrypt], options.recognizedTokenTypes);
    }
    return processAuthorizationCodeOAuth2Response(as, client, response, options?.[jweDecrypt], options?.recognizedTokenTypes);
  }
  async function processAuthorizationCodeOpenIDResponse(as, client, response, expectedNonce, maxAge, decryptFn, recognizedTokenTypes) {
    const additionalRequiredClaims = [];
    switch (expectedNonce) {
      case void 0:
        expectedNonce = expectNoNonce;
        break;
      case expectNoNonce:
        break;
      default:
        assertString(expectedNonce, '"expectedNonce" argument');
        additionalRequiredClaims.push("nonce");
    }
    maxAge ??= client.default_max_age;
    switch (maxAge) {
      case void 0:
        maxAge = skipAuthTimeCheck;
        break;
      case skipAuthTimeCheck:
        break;
      default:
        assertNumber(maxAge, true, '"maxAge" argument');
        additionalRequiredClaims.push("auth_time");
    }
    const result = await processGenericAccessTokenResponse(as, client, response, additionalRequiredClaims, decryptFn, recognizedTokenTypes);
    assertString(result.id_token, '"response" body "id_token" property', INVALID_RESPONSE, {
      body: result
    });
    const claims = getValidatedIdTokenClaims(result);
    if (maxAge !== skipAuthTimeCheck) {
      const now = epochTime() + getClockSkew(client);
      const tolerance = getClockTolerance(client);
      if (claims.auth_time + maxAge < now - tolerance) {
        throw OPE("too much time has elapsed since the last End-User authentication", JWT_TIMESTAMP_CHECK, { claims, now, tolerance, claim: "auth_time" });
      }
    }
    if (expectedNonce === expectNoNonce) {
      if (claims.nonce !== void 0) {
        throw OPE('unexpected ID Token "nonce" claim value', JWT_CLAIM_COMPARISON, {
          expected: void 0,
          claims,
          claim: "nonce"
        });
      }
    } else if (claims.nonce !== expectedNonce) {
      throw OPE('unexpected ID Token "nonce" claim value', JWT_CLAIM_COMPARISON, {
        expected: expectedNonce,
        claims,
        claim: "nonce"
      });
    }
    return result;
  }
  async function processAuthorizationCodeOAuth2Response(as, client, response, decryptFn, recognizedTokenTypes) {
    const result = await processGenericAccessTokenResponse(as, client, response, void 0, decryptFn, recognizedTokenTypes);
    const claims = getValidatedIdTokenClaims(result);
    if (claims) {
      if (client.default_max_age !== void 0) {
        assertNumber(client.default_max_age, true, '"client.default_max_age"');
        const now = epochTime() + getClockSkew(client);
        const tolerance = getClockTolerance(client);
        if (claims.auth_time + client.default_max_age < now - tolerance) {
          throw OPE("too much time has elapsed since the last End-User authentication", JWT_TIMESTAMP_CHECK, { claims, now, tolerance, claim: "auth_time" });
        }
      }
      if (claims.nonce !== void 0) {
        throw OPE('unexpected ID Token "nonce" claim value', JWT_CLAIM_COMPARISON, {
          expected: void 0,
          claims,
          claim: "nonce"
        });
      }
    }
    return result;
  }
  function checkJwtType(expected, result) {
    if (typeof result.header.typ !== "string" || normalizeTyp(result.header.typ) !== expected) {
      throw OPE('unexpected JWT "typ" header parameter value', INVALID_RESPONSE, {
        header: result.header
      });
    }
    return result;
  }
  async function clientCredentialsGrantRequest(as, client, clientAuthentication, parameters, options) {
    assertAs(as);
    assertClient(client);
    return tokenEndpointRequest(as, client, clientAuthentication, "client_credentials", new URLSearchParams(parameters), options);
  }
  async function genericTokenEndpointRequest(as, client, clientAuthentication, grantType, parameters, options) {
    assertAs(as);
    assertClient(client);
    assertString(grantType, '"grantType"');
    return tokenEndpointRequest(as, client, clientAuthentication, grantType, new URLSearchParams(parameters), options);
  }
  async function processGenericTokenEndpointResponse(as, client, response, options) {
    return processGenericAccessTokenResponse(as, client, response, void 0, options?.[jweDecrypt], options?.recognizedTokenTypes);
  }
  async function processClientCredentialsResponse(as, client, response, options) {
    return processGenericAccessTokenResponse(as, client, response, void 0, options?.[jweDecrypt], options?.recognizedTokenTypes);
  }
  async function revocationRequest(as, client, clientAuthentication, token, options) {
    assertAs(as);
    assertClient(client);
    assertString(token, '"token"');
    const url = resolveEndpoint(as, "revocation_endpoint", client.use_mtls_endpoint_aliases, options?.[allowInsecureRequests] !== true);
    const body = new URLSearchParams(options?.additionalParameters);
    body.set("token", token);
    const headers = prepareHeaders(options?.headers);
    headers.delete("accept");
    return authenticatedRequest(as, client, clientAuthentication, url, body, headers, options);
  }
  async function processRevocationResponse(response) {
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    await checkOAuthBodyError(response, 200, "Revocation Endpoint");
    return void 0;
  }
  function assertReadableResponse(response) {
    if (response.bodyUsed) {
      throw CodedTypeError('"response" body has been used already', ERR_INVALID_ARG_VALUE);
    }
  }
  async function introspectionRequest(as, client, clientAuthentication, token, options) {
    assertAs(as);
    assertClient(client);
    assertString(token, '"token"');
    const url = resolveEndpoint(as, "introspection_endpoint", client.use_mtls_endpoint_aliases, options?.[allowInsecureRequests] !== true);
    const body = new URLSearchParams(options?.additionalParameters);
    body.set("token", token);
    const headers = prepareHeaders(options?.headers);
    if (options?.requestJwtResponse ?? client.introspection_signed_response_alg) {
      headers.set("accept", "application/token-introspection+jwt");
    } else {
      headers.set("accept", "application/json");
    }
    return authenticatedRequest(as, client, clientAuthentication, url, body, headers, options);
  }
  async function processIntrospectionResponse(as, client, response, options) {
    assertAs(as);
    assertClient(client);
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    await checkOAuthBodyError(response, 200, "Introspection Endpoint");
    let json;
    if (getContentType(response) === "application/token-introspection+jwt") {
      assertReadableResponse(response);
      const { claims, jwt } = await validateJwt(await response.text(), checkSigningAlgorithm.bind(void 0, client.introspection_signed_response_alg, as.introspection_signing_alg_values_supported, "RS256"), getClockSkew(client), getClockTolerance(client), options?.[jweDecrypt]).then(checkJwtType.bind(void 0, "token-introspection+jwt")).then(validatePresence.bind(void 0, ["aud", "iat", "iss"])).then(validateIssuer.bind(void 0, as)).then(validateAudience.bind(void 0, client.client_id));
      jwtRefs.set(response, jwt);
      if (!isJsonObject(claims.token_introspection)) {
        throw OPE('JWT "token_introspection" claim must be a JSON object', INVALID_RESPONSE, {
          claims
        });
      }
      json = claims.token_introspection;
    } else {
      assertReadableResponse(response);
      json = await getResponseJsonBody(response);
    }
    if (typeof json.active !== "boolean") {
      throw OPE('"response" body "active" property must be a boolean', INVALID_RESPONSE, {
        body: json
      });
    }
    return json;
  }
  async function jwksRequest(as, options) {
    assertAs(as);
    const url = resolveEndpoint(as, "jwks_uri", false, options?.[allowInsecureRequests] !== true);
    const headers = prepareHeaders(options?.headers);
    headers.set("accept", "application/json");
    headers.append("accept", "application/jwk-set+json");
    return (options?.[customFetch] || fetch)(url.href, {
      body: void 0,
      headers: Object.fromEntries(headers.entries()),
      method: "GET",
      redirect: "manual",
      signal: signal(url, options?.signal)
    });
  }
  async function processJwksResponse(response) {
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    if (response.status !== 200) {
      throw OPE('"response" is not a conform JSON Web Key Set response (unexpected HTTP status code)', RESPONSE_IS_NOT_CONFORM, response);
    }
    assertReadableResponse(response);
    const json = await getResponseJsonBody(response, (response2) => assertContentTypes(response2, "application/json", "application/jwk-set+json"));
    if (!Array.isArray(json.keys)) {
      throw OPE('"response" body "keys" property must be an array', INVALID_RESPONSE, { body: json });
    }
    if (!Array.prototype.every.call(json.keys, isJsonObject)) {
      throw OPE('"response" body "keys" property members must be JWK formatted objects', INVALID_RESPONSE, { body: json });
    }
    return json;
  }
  function supported(alg) {
    switch (alg) {
      case "PS256":
      case "ES256":
      case "RS256":
      case "PS384":
      case "ES384":
      case "RS384":
      case "PS512":
      case "ES512":
      case "RS512":
      case "Ed25519":
      case "EdDSA":
      case "ML-DSA-44":
      case "ML-DSA-65":
      case "ML-DSA-87":
        return true;
      default:
        return false;
    }
  }
  function checkSupportedJwsAlg(header) {
    if (!supported(header.alg)) {
      throw new UnsupportedOperationError('unsupported JWS "alg" identifier', {
        cause: { alg: header.alg }
      });
    }
  }
  function checkRsaKeyAlgorithm(key) {
    const { algorithm } = key;
    if (typeof algorithm.modulusLength !== "number" || algorithm.modulusLength < 2048) {
      throw new UnsupportedOperationError(`unsupported ${algorithm.name} modulusLength`, {
        cause: key
      });
    }
  }
  function ecdsaHashName(key) {
    const { algorithm } = key;
    switch (algorithm.namedCurve) {
      case "P-256":
        return "SHA-256";
      case "P-384":
        return "SHA-384";
      case "P-521":
        return "SHA-512";
      default:
        throw new UnsupportedOperationError("unsupported ECDSA namedCurve", { cause: key });
    }
  }
  function keyToSubtle(key) {
    switch (key.algorithm.name) {
      case "ECDSA":
        return {
          name: key.algorithm.name,
          hash: ecdsaHashName(key)
        };
      case "RSA-PSS": {
        checkRsaKeyAlgorithm(key);
        switch (key.algorithm.hash.name) {
          case "SHA-256":
          case "SHA-384":
          case "SHA-512":
            return {
              name: key.algorithm.name,
              saltLength: parseInt(key.algorithm.hash.name.slice(-3), 10) >> 3
            };
          default:
            throw new UnsupportedOperationError("unsupported RSA-PSS hash name", { cause: key });
        }
      }
      case "RSASSA-PKCS1-v1_5":
        checkRsaKeyAlgorithm(key);
        return key.algorithm.name;
      case "ML-DSA-44":
      case "ML-DSA-65":
      case "ML-DSA-87":
      case "Ed25519":
        return key.algorithm.name;
    }
    throw new UnsupportedOperationError("unsupported CryptoKey algorithm name", { cause: key });
  }
  async function validateJwsSignature(protectedHeader, payload, key, signature) {
    const data = buf(`${protectedHeader}.${payload}`);
    const algorithm = keyToSubtle(key);
    const verified = await crypto.subtle.verify(algorithm, key, signature, data);
    if (!verified) {
      throw OPE("JWT signature verification failed", INVALID_RESPONSE, {
        key,
        data,
        signature,
        algorithm
      });
    }
  }
  async function validateJwt(jws, checkAlg, clockSkew2, clockTolerance2, decryptJwt) {
    let { 0: protectedHeader, 1: payload, length } = jws.split(".");
    if (length === 5) {
      if (decryptJwt !== void 0) {
        jws = await decryptJwt(jws);
        ({ 0: protectedHeader, 1: payload, length } = jws.split("."));
      } else {
        throw new UnsupportedOperationError("JWE decryption is not configured", { cause: jws });
      }
    }
    if (length !== 3) {
      throw OPE("Invalid JWT", INVALID_RESPONSE, jws);
    }
    let header;
    try {
      header = JSON.parse(buf(b64u(protectedHeader)));
    } catch (cause) {
      throw OPE("failed to parse JWT Header body as base64url encoded JSON", PARSE_ERROR, cause);
    }
    if (!isJsonObject(header)) {
      throw OPE("JWT Header must be a top level object", INVALID_RESPONSE, jws);
    }
    checkAlg(header);
    if (header.crit !== void 0) {
      throw new UnsupportedOperationError('no JWT "crit" header parameter extensions are supported', {
        cause: { header }
      });
    }
    let claims;
    try {
      claims = JSON.parse(buf(b64u(payload)));
    } catch (cause) {
      throw OPE("failed to parse JWT Payload body as base64url encoded JSON", PARSE_ERROR, cause);
    }
    if (!isJsonObject(claims)) {
      throw OPE("JWT Payload must be a top level object", INVALID_RESPONSE, jws);
    }
    const now = epochTime() + clockSkew2;
    if (claims.exp !== void 0) {
      if (typeof claims.exp !== "number") {
        throw OPE('unexpected JWT "exp" (expiration time) claim type', INVALID_RESPONSE, { claims });
      }
      if (claims.exp <= now - clockTolerance2) {
        throw OPE('unexpected JWT "exp" (expiration time) claim value, expiration is past current timestamp', JWT_TIMESTAMP_CHECK, { claims, now, tolerance: clockTolerance2, claim: "exp" });
      }
    }
    if (claims.iat !== void 0) {
      if (typeof claims.iat !== "number") {
        throw OPE('unexpected JWT "iat" (issued at) claim type', INVALID_RESPONSE, { claims });
      }
    }
    if (claims.iss !== void 0) {
      if (typeof claims.iss !== "string") {
        throw OPE('unexpected JWT "iss" (issuer) claim type', INVALID_RESPONSE, { claims });
      }
    }
    if (claims.nbf !== void 0) {
      if (typeof claims.nbf !== "number") {
        throw OPE('unexpected JWT "nbf" (not before) claim type', INVALID_RESPONSE, { claims });
      }
      if (claims.nbf > now + clockTolerance2) {
        throw OPE('unexpected JWT "nbf" (not before) claim value', JWT_TIMESTAMP_CHECK, {
          claims,
          now,
          tolerance: clockTolerance2,
          claim: "nbf"
        });
      }
    }
    if (claims.aud !== void 0) {
      if (typeof claims.aud !== "string" && !Array.isArray(claims.aud)) {
        throw OPE('unexpected JWT "aud" (audience) claim type', INVALID_RESPONSE, { claims });
      }
    }
    return { header, claims, jwt: jws };
  }
  async function validateJwtAuthResponse(as, client, parameters, expectedState, options) {
    assertAs(as);
    assertClient(client);
    if (parameters instanceof URL) {
      parameters = parameters.searchParams;
    }
    if (!(parameters instanceof URLSearchParams)) {
      throw CodedTypeError('"parameters" must be an instance of URLSearchParams, or URL', ERR_INVALID_ARG_TYPE);
    }
    const response = getURLSearchParameter(parameters, "response");
    if (!response) {
      throw OPE('"parameters" does not contain a JARM response', INVALID_RESPONSE);
    }
    const { claims, header, jwt } = await validateJwt(response, checkSigningAlgorithm.bind(void 0, client.authorization_signed_response_alg, as.authorization_signing_alg_values_supported, "RS256"), getClockSkew(client), getClockTolerance(client), options?.[jweDecrypt]).then(validatePresence.bind(void 0, ["aud", "exp", "iss"])).then(validateIssuer.bind(void 0, as)).then(validateAudience.bind(void 0, client.client_id));
    const { 0: protectedHeader, 1: payload, 2: encodedSignature } = jwt.split(".");
    const signature = b64u(encodedSignature);
    const key = await getPublicSigKeyFromIssuerJwksUri(as, options, header);
    await validateJwsSignature(protectedHeader, payload, key, signature);
    const result = new URLSearchParams();
    for (const [key2, value] of Object.entries(claims)) {
      if (typeof value === "string" && key2 !== "aud") {
        result.set(key2, value);
      }
    }
    return validateAuthResponse(as, client, result, expectedState);
  }
  async function idTokenHash(data, header, claimName) {
    let algorithm;
    switch (header.alg) {
      case "RS256":
      case "PS256":
      case "ES256":
        algorithm = "SHA-256";
        break;
      case "RS384":
      case "PS384":
      case "ES384":
        algorithm = "SHA-384";
        break;
      case "RS512":
      case "PS512":
      case "ES512":
      case "Ed25519":
      case "EdDSA":
        algorithm = "SHA-512";
        break;
      case "ML-DSA-44":
      case "ML-DSA-65":
      case "ML-DSA-87":
        algorithm = { name: "cSHAKE256", length: 512 };
        break;
      default:
        throw new UnsupportedOperationError(`unsupported JWS algorithm for ${claimName} calculation`, { cause: { alg: header.alg } });
    }
    const digest = await crypto.subtle.digest(algorithm, buf(data));
    return b64u(digest.slice(0, digest.byteLength / 2));
  }
  async function idTokenHashMatches(data, actual, header, claimName) {
    const expected = await idTokenHash(data, header, claimName);
    return actual === expected;
  }
  async function validateDetachedSignatureResponse(as, client, parameters, expectedNonce, expectedState, maxAge, options) {
    return validateHybridResponse(as, client, parameters, expectedNonce, expectedState, maxAge, options, true);
  }
  async function validateCodeIdTokenResponse(as, client, parameters, expectedNonce, expectedState, maxAge, options) {
    return validateHybridResponse(as, client, parameters, expectedNonce, expectedState, maxAge, options, false);
  }
  async function consumeStream(request2) {
    if (request2.bodyUsed) {
      throw CodedTypeError("form_post Request instances must contain a readable body", ERR_INVALID_ARG_VALUE, { cause: request2 });
    }
    return request2.text();
  }
  async function formPostResponse(request2) {
    if (request2.method !== "POST") {
      throw CodedTypeError("form_post responses are expected to use the POST method", ERR_INVALID_ARG_VALUE, { cause: request2 });
    }
    if (getContentType(request2) !== "application/x-www-form-urlencoded") {
      throw CodedTypeError("form_post responses are expected to use the application/x-www-form-urlencoded content-type", ERR_INVALID_ARG_VALUE, { cause: request2 });
    }
    return consumeStream(request2);
  }
  async function validateHybridResponse(as, client, parameters, expectedNonce, expectedState, maxAge, options, fapi) {
    assertAs(as);
    assertClient(client);
    if (parameters instanceof URL) {
      if (!parameters.hash.length) {
        throw CodedTypeError('"parameters" as an instance of URL must contain a hash (fragment) with the Authorization Response parameters', ERR_INVALID_ARG_VALUE);
      }
      parameters = new URLSearchParams(parameters.hash.slice(1));
    } else if (looseInstanceOf(parameters, Request)) {
      parameters = new URLSearchParams(await formPostResponse(parameters));
    } else if (parameters instanceof URLSearchParams) {
      parameters = new URLSearchParams(parameters);
    } else {
      throw CodedTypeError('"parameters" must be an instance of URLSearchParams, URL, or Response', ERR_INVALID_ARG_TYPE);
    }
    const id_token = getURLSearchParameter(parameters, "id_token");
    parameters.delete("id_token");
    switch (expectedState) {
      case void 0:
      case expectNoState:
        break;
      default:
        assertString(expectedState, '"expectedState" argument');
    }
    const result = validateAuthResponse({
      ...as,
      authorization_response_iss_parameter_supported: false
    }, client, parameters, expectedState);
    if (!id_token) {
      throw OPE('"parameters" does not contain an ID Token', INVALID_RESPONSE);
    }
    const code = getURLSearchParameter(parameters, "code");
    if (!code) {
      throw OPE('"parameters" does not contain an Authorization Code', INVALID_RESPONSE);
    }
    const requiredClaims = [
      "aud",
      "exp",
      "iat",
      "iss",
      "sub",
      "nonce",
      "c_hash"
    ];
    const state = parameters.get("state");
    if (fapi && (typeof expectedState === "string" || state !== null)) {
      requiredClaims.push("s_hash");
    }
    if (maxAge !== void 0) {
      assertNumber(maxAge, true, '"maxAge" argument');
    } else if (client.default_max_age !== void 0) {
      assertNumber(client.default_max_age, true, '"client.default_max_age"');
    }
    maxAge ??= client.default_max_age ?? skipAuthTimeCheck;
    if (client.require_auth_time || maxAge !== skipAuthTimeCheck) {
      requiredClaims.push("auth_time");
    }
    const { claims, header, jwt } = await validateJwt(id_token, checkSigningAlgorithm.bind(void 0, client.id_token_signed_response_alg, as.id_token_signing_alg_values_supported, "RS256"), getClockSkew(client), getClockTolerance(client), options?.[jweDecrypt]).then(validatePresence.bind(void 0, requiredClaims)).then(validateIssuer.bind(void 0, as)).then(validateAudience.bind(void 0, client.client_id));
    const clockSkew2 = getClockSkew(client);
    const now = epochTime() + clockSkew2;
    if (claims.iat < now - 3600) {
      throw OPE('unexpected JWT "iat" (issued at) claim value, it is too far in the past', JWT_TIMESTAMP_CHECK, { now, claims, claim: "iat" });
    }
    assertString(claims.c_hash, 'ID Token "c_hash" (code hash) claim value', INVALID_RESPONSE, {
      claims
    });
    if (claims.auth_time !== void 0) {
      assertNumber(claims.auth_time, true, 'ID Token "auth_time" (authentication time)', INVALID_RESPONSE, { claims });
    }
    if (maxAge !== skipAuthTimeCheck) {
      const now2 = epochTime() + getClockSkew(client);
      const tolerance = getClockTolerance(client);
      if (claims.auth_time + maxAge < now2 - tolerance) {
        throw OPE("too much time has elapsed since the last End-User authentication", JWT_TIMESTAMP_CHECK, { claims, now: now2, tolerance, claim: "auth_time" });
      }
    }
    assertString(expectedNonce, '"expectedNonce" argument');
    if (claims.nonce !== expectedNonce) {
      throw OPE('unexpected ID Token "nonce" claim value', JWT_CLAIM_COMPARISON, {
        expected: expectedNonce,
        claims,
        claim: "nonce"
      });
    }
    if (Array.isArray(claims.aud) && claims.aud.length !== 1) {
      if (claims.azp === void 0) {
        throw OPE('ID Token "aud" (audience) claim includes additional untrusted audiences', JWT_CLAIM_COMPARISON, { claims, claim: "aud" });
      }
      if (claims.azp !== client.client_id) {
        throw OPE('unexpected ID Token "azp" (authorized party) claim value', JWT_CLAIM_COMPARISON, {
          expected: client.client_id,
          claims,
          claim: "azp"
        });
      }
    }
    const { 0: protectedHeader, 1: payload, 2: encodedSignature } = jwt.split(".");
    const signature = b64u(encodedSignature);
    const key = await getPublicSigKeyFromIssuerJwksUri(as, options, header);
    await validateJwsSignature(protectedHeader, payload, key, signature);
    if (await idTokenHashMatches(code, claims.c_hash, header, "c_hash") !== true) {
      throw OPE('invalid ID Token "c_hash" (code hash) claim value', JWT_CLAIM_COMPARISON, {
        code,
        alg: header.alg,
        claim: "c_hash",
        claims
      });
    }
    if (fapi && state !== null || claims.s_hash !== void 0) {
      assertString(claims.s_hash, 'ID Token "s_hash" (state hash) claim value', INVALID_RESPONSE, {
        claims
      });
      assertString(state, '"state" response parameter', INVALID_RESPONSE, { parameters });
      if (await idTokenHashMatches(state, claims.s_hash, header, "s_hash") !== true) {
        throw OPE('invalid ID Token "s_hash" (state hash) claim value', JWT_CLAIM_COMPARISON, {
          state,
          alg: header.alg,
          claim: "s_hash",
          claims
        });
      }
    }
    return result;
  }
  function checkSigningAlgorithm(client, issuer, fallback, header) {
    if (client !== void 0) {
      if (typeof client === "string" ? header.alg !== client : !client.includes(header.alg)) {
        throw OPE('unexpected JWT "alg" header parameter', INVALID_RESPONSE, {
          header,
          expected: client,
          reason: "client configuration"
        });
      }
      return;
    }
    if (Array.isArray(issuer)) {
      if (!issuer.includes(header.alg)) {
        throw OPE('unexpected JWT "alg" header parameter', INVALID_RESPONSE, {
          header,
          expected: issuer,
          reason: "authorization server metadata"
        });
      }
      return;
    }
    if (fallback !== void 0) {
      if (typeof fallback === "string" ? header.alg !== fallback : typeof fallback === "function" ? !fallback(header.alg) : !fallback.includes(header.alg)) {
        throw OPE('unexpected JWT "alg" header parameter', INVALID_RESPONSE, {
          header,
          expected: fallback,
          reason: "default value"
        });
      }
      return;
    }
    throw OPE('missing client or server configuration to verify used JWT "alg" header parameter', void 0, { client, issuer, fallback });
  }
  function getURLSearchParameter(parameters, name) {
    const { 0: value, length } = parameters.getAll(name);
    if (length > 1) {
      throw OPE(`"${name}" parameter must be provided only once`, INVALID_RESPONSE);
    }
    return value;
  }
  function validateAuthResponse(as, client, parameters, expectedState) {
    assertAs(as);
    assertClient(client);
    if (parameters instanceof URL) {
      parameters = parameters.searchParams;
    }
    if (!(parameters instanceof URLSearchParams)) {
      throw CodedTypeError('"parameters" must be an instance of URLSearchParams, or URL', ERR_INVALID_ARG_TYPE);
    }
    if (getURLSearchParameter(parameters, "response")) {
      throw OPE('"parameters" contains a JARM response, use validateJwtAuthResponse() instead of validateAuthResponse()', INVALID_RESPONSE, { parameters });
    }
    const iss = getURLSearchParameter(parameters, "iss");
    const state = getURLSearchParameter(parameters, "state");
    if (!iss && as.authorization_response_iss_parameter_supported) {
      throw OPE('response parameter "iss" (issuer) missing', INVALID_RESPONSE, { parameters });
    }
    if (iss && iss !== as.issuer) {
      throw OPE('unexpected "iss" (issuer) response parameter value', INVALID_RESPONSE, {
        expected: as.issuer,
        parameters
      });
    }
    switch (expectedState) {
      case void 0:
      case expectNoState:
        if (state !== void 0) {
          throw OPE('unexpected "state" response parameter encountered', INVALID_RESPONSE, {
            expected: void 0,
            parameters
          });
        }
        break;
      case skipStateCheck:
        break;
      default:
        assertString(expectedState, '"expectedState" argument');
        if (state !== expectedState) {
          throw OPE(state === void 0 ? 'response parameter "state" missing' : 'unexpected "state" response parameter value', INVALID_RESPONSE, { expected: expectedState, parameters });
        }
    }
    const error = getURLSearchParameter(parameters, "error");
    if (error) {
      throw new AuthorizationResponseError("authorization response from the server is an error", {
        cause: parameters
      });
    }
    const id_token = getURLSearchParameter(parameters, "id_token");
    const token = getURLSearchParameter(parameters, "token");
    if (id_token !== void 0 || token !== void 0) {
      throw new UnsupportedOperationError("implicit and hybrid flows are not supported");
    }
    return brand(new URLSearchParams(parameters));
  }
  function algToSubtle(alg) {
    switch (alg) {
      case "PS256":
      case "PS384":
      case "PS512":
        return { name: "RSA-PSS", hash: `SHA-${alg.slice(-3)}` };
      case "RS256":
      case "RS384":
      case "RS512":
        return { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${alg.slice(-3)}` };
      case "ES256":
      case "ES384":
        return { name: "ECDSA", namedCurve: `P-${alg.slice(-3)}` };
      case "ES512":
        return { name: "ECDSA", namedCurve: "P-521" };
      case "EdDSA":
        return "Ed25519";
      case "Ed25519":
      case "ML-DSA-44":
      case "ML-DSA-65":
      case "ML-DSA-87":
        return alg;
      default:
        throw new UnsupportedOperationError("unsupported JWS algorithm", { cause: { alg } });
    }
  }
  async function importJwk(alg, jwk) {
    const { ext, key_ops, use, ...key } = jwk;
    return crypto.subtle.importKey("jwk", key, algToSubtle(alg), true, ["verify"]);
  }
  async function deviceAuthorizationRequest(as, client, clientAuthentication, parameters, options) {
    assertAs(as);
    assertClient(client);
    const url = resolveEndpoint(as, "device_authorization_endpoint", client.use_mtls_endpoint_aliases, options?.[allowInsecureRequests] !== true);
    const body = new URLSearchParams(parameters);
    body.set("client_id", client.client_id);
    const headers = prepareHeaders(options?.headers);
    headers.set("accept", "application/json");
    return authenticatedRequest(as, client, clientAuthentication, url, body, headers, options);
  }
  async function processDeviceAuthorizationResponse(as, client, response) {
    assertAs(as);
    assertClient(client);
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    await checkOAuthBodyError(response, 200, "Device Authorization Endpoint");
    assertReadableResponse(response);
    const json = await getResponseJsonBody(response);
    assertString(json.device_code, '"response" body "device_code" property', INVALID_RESPONSE, {
      body: json
    });
    assertString(json.user_code, '"response" body "user_code" property', INVALID_RESPONSE, {
      body: json
    });
    assertString(json.verification_uri, '"response" body "verification_uri" property', INVALID_RESPONSE, { body: json });
    let expiresIn = typeof json.expires_in !== "number" ? parseFloat(json.expires_in) : json.expires_in;
    assertNumber(expiresIn, true, '"response" body "expires_in" property', INVALID_RESPONSE, {
      body: json
    });
    json.expires_in = expiresIn;
    if (json.verification_uri_complete !== void 0) {
      assertString(json.verification_uri_complete, '"response" body "verification_uri_complete" property', INVALID_RESPONSE, { body: json });
    }
    if (json.interval !== void 0) {
      assertNumber(json.interval, false, '"response" body "interval" property', INVALID_RESPONSE, {
        body: json
      });
    }
    return json;
  }
  async function deviceCodeGrantRequest(as, client, clientAuthentication, deviceCode, options) {
    assertAs(as);
    assertClient(client);
    assertString(deviceCode, '"deviceCode"');
    const parameters = new URLSearchParams(options?.additionalParameters);
    parameters.set("device_code", deviceCode);
    return tokenEndpointRequest(as, client, clientAuthentication, "urn:ietf:params:oauth:grant-type:device_code", parameters, options);
  }
  async function processDeviceCodeResponse(as, client, response, options) {
    return processGenericAccessTokenResponse(as, client, response, void 0, options?.[jweDecrypt], options?.recognizedTokenTypes);
  }
  async function generateKeyPair(alg, options) {
    assertString(alg, '"alg"');
    const algorithm = algToSubtle(alg);
    if (alg.startsWith("PS") || alg.startsWith("RS")) {
      Object.assign(algorithm, {
        modulusLength: options?.modulusLength ?? 2048,
        publicExponent: new Uint8Array([1, 0, 1])
      });
    }
    return crypto.subtle.generateKey(algorithm, options?.extractable ?? false, [
      "sign",
      "verify"
    ]);
  }
  function normalizeHtu(htu) {
    const url = new URL(htu);
    url.search = "";
    url.hash = "";
    return url.href;
  }
  async function validateDPoP(request2, accessToken, accessTokenClaims, options) {
    const headerValue = request2.headers.get("dpop");
    if (headerValue === null) {
      throw OPE("operation indicated DPoP use but the request has no DPoP HTTP Header", INVALID_REQUEST, { headers: request2.headers });
    }
    if (request2.headers.get("authorization")?.toLowerCase().startsWith("dpop ") === false) {
      throw OPE(`operation indicated DPoP use but the request's Authorization HTTP Header scheme is not DPoP`, INVALID_REQUEST, { headers: request2.headers });
    }
    if (typeof accessTokenClaims.cnf?.jkt !== "string") {
      throw OPE("operation indicated DPoP use but the JWT Access Token has no jkt confirmation claim", INVALID_REQUEST, { claims: accessTokenClaims });
    }
    const clockSkew2 = getClockSkew(options);
    const proof = await validateJwt(headerValue, checkSigningAlgorithm.bind(void 0, options?.signingAlgorithms, void 0, supported), clockSkew2, getClockTolerance(options), void 0).then(checkJwtType.bind(void 0, "dpop+jwt")).then(validatePresence.bind(void 0, ["iat", "jti", "ath", "htm", "htu"]));
    const now = epochTime() + clockSkew2;
    const diff = Math.abs(now - proof.claims.iat);
    if (diff > 300) {
      throw OPE("DPoP Proof iat is not recent enough", JWT_TIMESTAMP_CHECK, {
        now,
        claims: proof.claims,
        claim: "iat"
      });
    }
    if (proof.claims.htm !== request2.method) {
      throw OPE("DPoP Proof htm mismatch", JWT_CLAIM_COMPARISON, {
        expected: request2.method,
        claims: proof.claims,
        claim: "htm"
      });
    }
    if (typeof proof.claims.htu !== "string" || normalizeHtu(proof.claims.htu) !== normalizeHtu(request2.url)) {
      throw OPE("DPoP Proof htu mismatch", JWT_CLAIM_COMPARISON, {
        expected: normalizeHtu(request2.url),
        claims: proof.claims,
        claim: "htu"
      });
    }
    {
      const expected = b64u(await crypto.subtle.digest("SHA-256", buf(accessToken)));
      if (proof.claims.ath !== expected) {
        throw OPE("DPoP Proof ath mismatch", JWT_CLAIM_COMPARISON, {
          expected,
          claims: proof.claims,
          claim: "ath"
        });
      }
    }
    {
      const expected = await calculateJwkThumbprint(proof.header.jwk);
      if (accessTokenClaims.cnf.jkt !== expected) {
        throw OPE("JWT Access Token confirmation mismatch", JWT_CLAIM_COMPARISON, {
          expected,
          claims: accessTokenClaims,
          claim: "cnf.jkt"
        });
      }
    }
    const { 0: protectedHeader, 1: payload, 2: encodedSignature } = headerValue.split(".");
    const signature = b64u(encodedSignature);
    const { jwk, alg } = proof.header;
    if (!jwk) {
      throw OPE("DPoP Proof is missing the jwk header parameter", INVALID_REQUEST, {
        header: proof.header
      });
    }
    const key = await importJwk(alg, jwk);
    if (key.type !== "public") {
      throw OPE("DPoP Proof jwk header parameter must contain a public key", INVALID_REQUEST, {
        header: proof.header
      });
    }
    await validateJwsSignature(protectedHeader, payload, key, signature);
  }
  async function validateJwtAccessToken(as, request2, expectedAudience, options) {
    assertAs(as);
    if (!looseInstanceOf(request2, Request)) {
      throw CodedTypeError('"request" must be an instance of Request', ERR_INVALID_ARG_TYPE);
    }
    assertString(expectedAudience, '"expectedAudience"');
    const authorization = request2.headers.get("authorization");
    if (authorization === null) {
      throw OPE('"request" is missing an Authorization HTTP Header', INVALID_REQUEST, {
        headers: request2.headers
      });
    }
    let { 0: scheme, 1: accessToken, length } = authorization.split(" ");
    scheme = scheme.toLowerCase();
    switch (scheme) {
      case "dpop":
      case "bearer":
        break;
      default:
        throw new UnsupportedOperationError("unsupported Authorization HTTP Header scheme", {
          cause: { headers: request2.headers }
        });
    }
    if (length !== 2) {
      throw OPE("invalid Authorization HTTP Header format", INVALID_REQUEST, {
        headers: request2.headers
      });
    }
    const requiredClaims = [
      "iss",
      "exp",
      "aud",
      "sub",
      "iat",
      "jti",
      "client_id"
    ];
    if (options?.requireDPoP || scheme === "dpop" || request2.headers.has("dpop")) {
      requiredClaims.push("cnf");
    }
    const { claims, header } = await validateJwt(accessToken, checkSigningAlgorithm.bind(void 0, options?.signingAlgorithms, void 0, supported), getClockSkew(options), getClockTolerance(options), void 0).then(checkJwtType.bind(void 0, "at+jwt")).then(validatePresence.bind(void 0, requiredClaims)).then(validateIssuer.bind(void 0, as)).then(validateAudience.bind(void 0, expectedAudience)).catch(reassignRSCode);
    for (const claim of ["client_id", "jti", "sub"]) {
      if (typeof claims[claim] !== "string") {
        throw OPE(`unexpected JWT "${claim}" claim type`, INVALID_REQUEST, { claims });
      }
    }
    if ("cnf" in claims) {
      if (!isJsonObject(claims.cnf)) {
        throw OPE('unexpected JWT "cnf" (confirmation) claim value', INVALID_REQUEST, { claims });
      }
      const { 0: cnf, length: length2 } = Object.keys(claims.cnf);
      if (length2) {
        if (length2 !== 1) {
          throw new UnsupportedOperationError("multiple confirmation claims are not supported", {
            cause: { claims }
          });
        }
        if (cnf !== "jkt") {
          throw new UnsupportedOperationError("unsupported JWT Confirmation method", {
            cause: { claims }
          });
        }
      }
    }
    const { 0: protectedHeader, 1: payload, 2: encodedSignature } = accessToken.split(".");
    const signature = b64u(encodedSignature);
    const key = await getPublicSigKeyFromIssuerJwksUri(as, options, header);
    await validateJwsSignature(protectedHeader, payload, key, signature);
    if (options?.requireDPoP || scheme === "dpop" || claims.cnf?.jkt !== void 0 || request2.headers.has("dpop")) {
      await validateDPoP(request2, accessToken, claims, options).catch(reassignRSCode);
    }
    return claims;
  }
  function reassignRSCode(err) {
    if (err instanceof OperationProcessingError && err?.code === INVALID_REQUEST) {
      err.code = INVALID_RESPONSE;
    }
    throw err;
  }
  async function backchannelAuthenticationRequest(as, client, clientAuthentication, parameters, options) {
    assertAs(as);
    assertClient(client);
    const url = resolveEndpoint(as, "backchannel_authentication_endpoint", client.use_mtls_endpoint_aliases, options?.[allowInsecureRequests] !== true);
    const body = new URLSearchParams(parameters);
    body.set("client_id", client.client_id);
    const headers = prepareHeaders(options?.headers);
    headers.set("accept", "application/json");
    return authenticatedRequest(as, client, clientAuthentication, url, body, headers, options);
  }
  async function processBackchannelAuthenticationResponse(as, client, response) {
    assertAs(as);
    assertClient(client);
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    await checkOAuthBodyError(response, 200, "Backchannel Authentication Endpoint");
    assertReadableResponse(response);
    const json = await getResponseJsonBody(response);
    assertString(json.auth_req_id, '"response" body "auth_req_id" property', INVALID_RESPONSE, {
      body: json
    });
    let expiresIn = typeof json.expires_in !== "number" ? parseFloat(json.expires_in) : json.expires_in;
    assertNumber(expiresIn, true, '"response" body "expires_in" property', INVALID_RESPONSE, {
      body: json
    });
    json.expires_in = expiresIn;
    if (json.interval !== void 0) {
      assertNumber(json.interval, false, '"response" body "interval" property', INVALID_RESPONSE, {
        body: json
      });
    }
    return json;
  }
  async function backchannelAuthenticationGrantRequest(as, client, clientAuthentication, authReqId, options) {
    assertAs(as);
    assertClient(client);
    assertString(authReqId, '"authReqId"');
    const parameters = new URLSearchParams(options?.additionalParameters);
    parameters.set("auth_req_id", authReqId);
    return tokenEndpointRequest(as, client, clientAuthentication, "urn:openid:params:grant-type:ciba", parameters, options);
  }
  async function processBackchannelAuthenticationGrantResponse(as, client, response, options) {
    return processGenericAccessTokenResponse(as, client, response, void 0, options?.[jweDecrypt], options?.recognizedTokenTypes);
  }
  async function dynamicClientRegistrationRequest(as, metadata, options) {
    assertAs(as);
    const url = resolveEndpoint(as, "registration_endpoint", metadata.use_mtls_endpoint_aliases, options?.[allowInsecureRequests] !== true);
    const headers = prepareHeaders(options?.headers);
    headers.set("accept", "application/json");
    headers.set("content-type", "application/json");
    const method = "POST";
    if (options?.DPoP) {
      assertDPoP(options.DPoP);
      await options.DPoP.addProof(url, headers, method, options.initialAccessToken);
    }
    if (options?.initialAccessToken) {
      headers.set("authorization", `${headers.has("dpop") ? "DPoP" : "Bearer"} ${options.initialAccessToken}`);
    }
    const response = await (options?.[customFetch] || fetch)(url.href, {
      body: JSON.stringify(metadata),
      headers: Object.fromEntries(headers.entries()),
      method,
      redirect: "manual",
      signal: signal(url, options?.signal)
    });
    options?.DPoP?.cacheNonce(response, url);
    return response;
  }
  async function processDynamicClientRegistrationResponse(response) {
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    await checkOAuthBodyError(response, 201, "Dynamic Client Registration Endpoint");
    assertReadableResponse(response);
    const json = await getResponseJsonBody(response);
    assertString(json.client_id, '"response" body "client_id" property', INVALID_RESPONSE, {
      body: json
    });
    if (json.client_secret !== void 0) {
      assertString(json.client_secret, '"response" body "client_secret" property', INVALID_RESPONSE, {
        body: json
      });
    }
    if (json.client_secret) {
      assertNumber(json.client_secret_expires_at, true, '"response" body "client_secret_expires_at" property', INVALID_RESPONSE, {
        body: json
      });
    }
    return json;
  }
  async function resourceDiscoveryRequest(resourceIdentifier, options) {
    return performDiscovery(resourceIdentifier, "resourceIdentifier", (url) => {
      prependWellKnown(url, ".well-known/oauth-protected-resource", true);
      return url;
    }, options);
  }
  async function processResourceDiscoveryResponse(expectedResourceIdentifier, response) {
    const expected = expectedResourceIdentifier;
    if (!(expected instanceof URL) && expected !== _nodiscoverycheck) {
      throw CodedTypeError('"expectedResourceIdentifier" must be an instance of URL', ERR_INVALID_ARG_TYPE);
    }
    if (!looseInstanceOf(response, Response)) {
      throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
    }
    if (response.status !== 200) {
      throw OPE('"response" is not a conform Resource Server Metadata response (unexpected HTTP status code)', RESPONSE_IS_NOT_CONFORM, response);
    }
    assertReadableResponse(response);
    const json = await getResponseJsonBody(response);
    assertString(json.resource, '"response" body "resource" property', INVALID_RESPONSE, {
      body: json
    });
    if (expected !== _nodiscoverycheck && new URL(json.resource).href !== expected.href) {
      throw OPE('"response" body "resource" property does not match the expected value', JSON_ATTRIBUTE_COMPARISON, { expected: expected.href, body: json, attribute: "resource" });
    }
    return json;
  }
  async function getResponseJsonBody(response, check = assertApplicationJson) {
    let json;
    try {
      json = await response.json();
    } catch (cause) {
      check(response);
      throw OPE('failed to parse "response" body as JSON', PARSE_ERROR, cause);
    }
    if (!isJsonObject(json)) {
      throw OPE('"response" body must be a top level object', INVALID_RESPONSE, { body: json });
    }
    return json;
  }
  var USER_AGENT, ERR_INVALID_ARG_VALUE, ERR_INVALID_ARG_TYPE, allowInsecureRequests, clockSkew, clockTolerance, customFetch, modifyAssertion, jweDecrypt, jwksCache, encoder, decoder, encodeBase64Url, decodeBase64Url, UnsupportedOperationError, OperationProcessingError, jwkCache, URLParse, DPoPHandler, ResponseBodyError, AuthorizationResponseError, WWWAuthenticateChallengeError, tokenMatch, token68Match, quotedMatch, quotedParamMatcher, paramMatcher, schemeRE, quotedParamRE, unquotedParamRE, token68ParamRE, jwksMap, skipSubjectCheck, idTokenClaims, jwtRefs, branded, nopkce, jwtClaimNames, expectNoNonce, skipAuthTimeCheck, WWW_AUTHENTICATE_CHALLENGE, RESPONSE_BODY_ERROR, UNSUPPORTED_OPERATION, AUTHORIZATION_RESPONSE_ERROR, JWT_USERINFO_EXPECTED, PARSE_ERROR, INVALID_RESPONSE, INVALID_REQUEST, RESPONSE_IS_NOT_JSON, RESPONSE_IS_NOT_CONFORM, HTTP_REQUEST_FORBIDDEN, REQUEST_PROTOCOL_FORBIDDEN, JWT_TIMESTAMP_CHECK, JWT_CLAIM_COMPARISON, JSON_ATTRIBUTE_COMPARISON, KEY_SELECTION, MISSING_SERVER_METADATA, INVALID_SERVER_METADATA, skipStateCheck, expectNoState, _nopkce, _nodiscoverycheck, _expectedIssuer;
  var init_build = __esm({
    "../../../sdk/node_modules/oauth4webapi/build/index.js"() {
      if (typeof navigator === "undefined" || !navigator.userAgent?.startsWith?.("Mozilla/5.0 ")) {
        const NAME = "oauth4webapi";
        const VERSION = "v3.8.2";
        USER_AGENT = `${NAME}/${VERSION}`;
      }
      ERR_INVALID_ARG_VALUE = "ERR_INVALID_ARG_VALUE";
      ERR_INVALID_ARG_TYPE = "ERR_INVALID_ARG_TYPE";
      allowInsecureRequests = /* @__PURE__ */ Symbol();
      clockSkew = /* @__PURE__ */ Symbol();
      clockTolerance = /* @__PURE__ */ Symbol();
      customFetch = /* @__PURE__ */ Symbol();
      modifyAssertion = /* @__PURE__ */ Symbol();
      jweDecrypt = /* @__PURE__ */ Symbol();
      jwksCache = /* @__PURE__ */ Symbol();
      encoder = new TextEncoder();
      decoder = new TextDecoder();
      if (Uint8Array.prototype.toBase64) {
        encodeBase64Url = (input) => {
          if (input instanceof ArrayBuffer) {
            input = new Uint8Array(input);
          }
          return input.toBase64({ alphabet: "base64url", omitPadding: true });
        };
      } else {
        const CHUNK_SIZE = 32768;
        encodeBase64Url = (input) => {
          if (input instanceof ArrayBuffer) {
            input = new Uint8Array(input);
          }
          const arr = [];
          for (let i = 0; i < input.byteLength; i += CHUNK_SIZE) {
            arr.push(String.fromCharCode.apply(null, input.subarray(i, i + CHUNK_SIZE)));
          }
          return btoa(arr.join("")).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
        };
      }
      if (Uint8Array.fromBase64) {
        decodeBase64Url = (input) => {
          try {
            return Uint8Array.fromBase64(input, { alphabet: "base64url" });
          } catch (cause) {
            throw CodedTypeError("The input to be decoded is not correctly encoded.", ERR_INVALID_ARG_VALUE, cause);
          }
        };
      } else {
        decodeBase64Url = (input) => {
          try {
            const binary = atob(input.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, ""));
            const bytes = new Uint8Array(binary.length);
            for (let i = 0; i < binary.length; i++) {
              bytes[i] = binary.charCodeAt(i);
            }
            return bytes;
          } catch (cause) {
            throw CodedTypeError("The input to be decoded is not correctly encoded.", ERR_INVALID_ARG_VALUE, cause);
          }
        };
      }
      UnsupportedOperationError = class extends Error {
        code;
        constructor(message2, options) {
          super(message2, options);
          this.name = this.constructor.name;
          this.code = UNSUPPORTED_OPERATION;
          Error.captureStackTrace?.(this, this.constructor);
        }
      };
      OperationProcessingError = class extends Error {
        code;
        constructor(message2, options) {
          super(message2, options);
          this.name = this.constructor.name;
          if (options?.code) {
            this.code = options?.code;
          }
          Error.captureStackTrace?.(this, this.constructor);
        }
      };
      URLParse = URL.parse ? (url, base) => URL.parse(url, base) : (url, base) => {
        try {
          return new URL(url, base);
        } catch {
          return null;
        }
      };
      DPoPHandler = class {
        #header;
        #privateKey;
        #publicKey;
        #clockSkew;
        #modifyAssertion;
        #map;
        #jkt;
        constructor(client, keyPair, options) {
          assertPrivateKey(keyPair?.privateKey, '"DPoP.privateKey"');
          assertPublicKey(keyPair?.publicKey, '"DPoP.publicKey"');
          if (!keyPair.publicKey.extractable) {
            throw CodedTypeError('"DPoP.publicKey.extractable" must be true', ERR_INVALID_ARG_VALUE);
          }
          this.#modifyAssertion = options?.[modifyAssertion];
          this.#clockSkew = getClockSkew(client);
          this.#privateKey = keyPair.privateKey;
          this.#publicKey = keyPair.publicKey;
          branded.add(this);
        }
        #get(key) {
          this.#map ||= /* @__PURE__ */ new Map();
          let item = this.#map.get(key);
          if (item) {
            this.#map.delete(key);
            this.#map.set(key, item);
          }
          return item;
        }
        #set(key, val) {
          this.#map ||= /* @__PURE__ */ new Map();
          this.#map.delete(key);
          if (this.#map.size === 100) {
            this.#map.delete(this.#map.keys().next().value);
          }
          this.#map.set(key, val);
        }
        async calculateThumbprint() {
          if (!this.#jkt) {
            const jwk = await crypto.subtle.exportKey("jwk", this.#publicKey);
            this.#jkt ||= await calculateJwkThumbprint(jwk);
          }
          return this.#jkt;
        }
        async addProof(url, headers, htm, accessToken) {
          const alg = keyToJws(this.#privateKey);
          this.#header ||= {
            alg,
            typ: "dpop+jwt",
            jwk: await publicJwk(this.#publicKey, alg)
          };
          const nonce = this.#get(url.origin);
          const now = epochTime() + this.#clockSkew;
          const payload = {
            iat: now,
            jti: randomBytes(),
            htm,
            nonce,
            htu: `${url.origin}${url.pathname}`,
            ath: accessToken ? b64u(await crypto.subtle.digest("SHA-256", buf(accessToken))) : void 0
          };
          this.#modifyAssertion?.(this.#header, payload);
          headers.set("dpop", await signJwt(this.#header, payload, this.#privateKey));
        }
        cacheNonce(response, url) {
          try {
            const nonce = response.headers.get("dpop-nonce");
            if (nonce) {
              this.#set(url.origin, nonce);
            }
          } catch {
          }
        }
      };
      ResponseBodyError = class extends Error {
        cause;
        code;
        error;
        status;
        error_description;
        response;
        constructor(message2, options) {
          super(message2, options);
          this.name = this.constructor.name;
          this.code = RESPONSE_BODY_ERROR;
          this.cause = options.cause;
          this.error = options.cause.error;
          this.status = options.response.status;
          this.error_description = options.cause.error_description;
          Object.defineProperty(this, "response", { enumerable: false, value: options.response });
          Error.captureStackTrace?.(this, this.constructor);
        }
      };
      AuthorizationResponseError = class extends Error {
        cause;
        code;
        error;
        error_description;
        constructor(message2, options) {
          super(message2, options);
          this.name = this.constructor.name;
          this.code = AUTHORIZATION_RESPONSE_ERROR;
          this.cause = options.cause;
          this.error = options.cause.get("error");
          this.error_description = options.cause.get("error_description") ?? void 0;
          Error.captureStackTrace?.(this, this.constructor);
        }
      };
      WWWAuthenticateChallengeError = class extends Error {
        cause;
        code;
        response;
        status;
        constructor(message2, options) {
          super(message2, options);
          this.name = this.constructor.name;
          this.code = WWW_AUTHENTICATE_CHALLENGE;
          this.cause = options.cause;
          this.status = options.response.status;
          this.response = options.response;
          Object.defineProperty(this, "response", { enumerable: false });
          Error.captureStackTrace?.(this, this.constructor);
        }
      };
      tokenMatch = "[a-zA-Z0-9!#$%&\\'\\*\\+\\-\\.\\^_`\\|~]+";
      token68Match = "[a-zA-Z0-9\\-\\._\\~\\+\\/]+[=]{0,2}";
      quotedMatch = '"((?:[^"\\\\]|\\\\.)*)"';
      quotedParamMatcher = "(" + tokenMatch + ")\\s*=\\s*" + quotedMatch;
      paramMatcher = "(" + tokenMatch + ")\\s*=\\s*(" + tokenMatch + ")";
      schemeRE = new RegExp("^[,\\s]*(" + tokenMatch + ")\\s(.*)");
      quotedParamRE = new RegExp("^[,\\s]*" + quotedParamMatcher + "[,\\s]*(.*)");
      unquotedParamRE = new RegExp("^[,\\s]*" + paramMatcher + "[,\\s]*(.*)");
      token68ParamRE = new RegExp("^(" + token68Match + ")(?:$|[,\\s])(.*)");
      skipSubjectCheck = /* @__PURE__ */ Symbol();
      idTokenClaims = /* @__PURE__ */ new WeakMap();
      jwtRefs = /* @__PURE__ */ new WeakMap();
      branded = /* @__PURE__ */ new WeakSet();
      nopkce = /* @__PURE__ */ Symbol();
      jwtClaimNames = {
        aud: "audience",
        c_hash: "code hash",
        client_id: "client id",
        exp: "expiration time",
        iat: "issued at",
        iss: "issuer",
        jti: "jwt id",
        nonce: "nonce",
        s_hash: "state hash",
        sub: "subject",
        ath: "access token hash",
        htm: "http method",
        htu: "http uri",
        cnf: "confirmation",
        auth_time: "authentication time"
      };
      expectNoNonce = /* @__PURE__ */ Symbol();
      skipAuthTimeCheck = /* @__PURE__ */ Symbol();
      WWW_AUTHENTICATE_CHALLENGE = "OAUTH_WWW_AUTHENTICATE_CHALLENGE";
      RESPONSE_BODY_ERROR = "OAUTH_RESPONSE_BODY_ERROR";
      UNSUPPORTED_OPERATION = "OAUTH_UNSUPPORTED_OPERATION";
      AUTHORIZATION_RESPONSE_ERROR = "OAUTH_AUTHORIZATION_RESPONSE_ERROR";
      JWT_USERINFO_EXPECTED = "OAUTH_JWT_USERINFO_EXPECTED";
      PARSE_ERROR = "OAUTH_PARSE_ERROR";
      INVALID_RESPONSE = "OAUTH_INVALID_RESPONSE";
      INVALID_REQUEST = "OAUTH_INVALID_REQUEST";
      RESPONSE_IS_NOT_JSON = "OAUTH_RESPONSE_IS_NOT_JSON";
      RESPONSE_IS_NOT_CONFORM = "OAUTH_RESPONSE_IS_NOT_CONFORM";
      HTTP_REQUEST_FORBIDDEN = "OAUTH_HTTP_REQUEST_FORBIDDEN";
      REQUEST_PROTOCOL_FORBIDDEN = "OAUTH_REQUEST_PROTOCOL_FORBIDDEN";
      JWT_TIMESTAMP_CHECK = "OAUTH_JWT_TIMESTAMP_CHECK_FAILED";
      JWT_CLAIM_COMPARISON = "OAUTH_JWT_CLAIM_COMPARISON_FAILED";
      JSON_ATTRIBUTE_COMPARISON = "OAUTH_JSON_ATTRIBUTE_COMPARISON_FAILED";
      KEY_SELECTION = "OAUTH_KEY_SELECTION_FAILED";
      MISSING_SERVER_METADATA = "OAUTH_MISSING_SERVER_METADATA";
      INVALID_SERVER_METADATA = "OAUTH_INVALID_SERVER_METADATA";
      skipStateCheck = /* @__PURE__ */ Symbol();
      expectNoState = /* @__PURE__ */ Symbol();
      _nopkce = nopkce;
      _nodiscoverycheck = /* @__PURE__ */ Symbol();
      _expectedIssuer = /* @__PURE__ */ Symbol();
    }
  });

  // ../../../sdk/dist/identity/FidjOidcClient.js
  var require_FidjOidcClient = __commonJS({
    "../../../sdk/dist/identity/FidjOidcClient.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }));
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }) : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
        var ownKeys = function(o) {
          ownKeys = Object.getOwnPropertyNames || function(o2) {
            var ar = [];
            for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
            return ar;
          };
          return ownKeys(o);
        };
        return function(mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null) {
            for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
          }
          __setModuleDefault(result, mod);
          return result;
        };
      })();
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __rest = exports && exports.__rest || function(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FidjOidcClient = void 0;
      var oauth = __importStar((init_build(), __toCommonJS(build_exports)));
      var FidjOidcClient2 = class {
        constructor(options) {
          this.options = options;
          const issuer = new URL(options.issuer), api = new URL(options.apiEndpoint), redirect = new URL(options.redirectUri);
          if (issuer.origin !== api.origin || issuer.pathname !== "/oidc" || issuer.search || issuer.hash || issuer.username || issuer.password || issuer.protocol !== "https:" && !["localhost", "127.0.0.1"].includes(issuer.hostname) || redirect.hash || redirect.username || redirect.password || redirect.protocol !== "https:" && !["localhost", "127.0.0.1"].includes(redirect.hostname))
            throw new Error("Use a trusted issuer/API origin and an exact HTTPS callback (loopback allowed for development).");
          this.prefix = "fidj.oidc." + options.clientId;
        }
        network() {
          return Object.assign(Object.assign({}, this.options.issuer.startsWith("http:") ? { [oauth.allowInsecureRequests]: true } : {}), { signal: AbortSignal.timeout(1e4) });
        }
        // The API's provider is beta and serves nothing until an operator sets an
        // issuer and signing keys, so "no provider answered" is the common case.
        // Anyone pointing an app at an issuer that does not answer deserves that
        // sentence, not a bare 'fetch failed'.
        discover(issuer) {
          return __awaiter(this, void 0, void 0, function* () {
            try {
              return yield oauth.processDiscoveryResponse(issuer, yield oauth.discoveryRequest(issuer, Object.assign(Object.assign({}, this.network()), { algorithm: "oidc" })));
            } catch (cause) {
              throw Object.assign(new Error("No OpenID Connect provider answered at " + issuer.href + ". OIDC support is beta: check the deployment configures an issuer and signing keys before using it."), { cause });
            }
          });
        }
        discovery() {
          return __awaiter(this, void 0, void 0, function* () {
            if (!this.metadata) {
              const issuer = new URL(this.options.issuer);
              this.metadata = yield this.discover(issuer);
              for (const endpoint of ["authorization_endpoint", "token_endpoint", "jwks_uri"])
                if (new URL(String(this.metadata[endpoint])).origin !== issuer.origin)
                  throw new Error("Unexpected identity endpoint origin");
            }
            return this.metadata;
          });
        }
        hasSession() {
          return !!this.options.storage.getItem(this.prefix + ".session");
        }
        session() {
          return JSON.parse(this.options.storage.getItem(this.prefix + ".session") || "null");
        }
        beginLogin() {
          return __awaiter(this, void 0, void 0, function* () {
            const as = yield this.discovery(), verifier = oauth.generateRandomCodeVerifier(), state = oauth.generateRandomState(), nonce = oauth.generateRandomNonce();
            this.options.storage.setItem(this.prefix + ".transaction", JSON.stringify({ verifier, state, nonce, createdAt: Date.now() }));
            const url = new URL(as.authorization_endpoint);
            url.search = new URLSearchParams({ client_id: this.options.clientId, redirect_uri: this.options.redirectUri, response_type: "code", scope: "openid profile email offline_access fidj:api", prompt: "login consent", state, nonce, code_challenge: yield oauth.calculatePKCECodeChallenge(verifier), code_challenge_method: "S256" }).toString();
            return url.href;
          });
        }
        completeLogin(callback) {
          return __awaiter(this, void 0, void 0, function* () {
            const transaction = JSON.parse(this.options.storage.getItem(this.prefix + ".transaction") || "null");
            this.options.storage.removeItem(this.prefix + ".transaction");
            const expected = new URL(this.options.redirectUri);
            if (!transaction || Date.now() - transaction.createdAt > 6e5 || callback.origin !== expected.origin || callback.pathname !== expected.pathname)
              throw new Error("Login transaction expired or callback mismatch");
            const as = yield this.discovery(), client = { client_id: this.options.clientId };
            const params = oauth.validateAuthResponse(as, client, callback, transaction.state);
            const response = yield oauth.authorizationCodeGrantRequest(as, client, oauth.None(), params, this.options.redirectUri, transaction.verifier, this.network());
            const tokens = yield oauth.processAuthorizationCodeResponse(as, client, response, { expectedNonce: transaction.nonce, requireIdToken: true });
            yield oauth.validateApplicationLevelSignature(as, response, this.network());
            const identity = oauth.getValidatedIdTokenClaims(tokens);
            this.save(tokens, identity);
            const _a = this.options, { storage } = _a, publicOptions = __rest(_a, ["storage"]);
            storage.setItem(this.prefix + ".config", JSON.stringify(publicOptions));
            return identity;
          });
        }
        save(tokens, identity) {
          this.options.storage.setItem(this.prefix + ".session", JSON.stringify({ tokens, identity, expiresAt: Date.now() + Number(tokens.expires_in || 300) * 1e3 }));
        }
        accessToken() {
          return __awaiter(this, void 0, void 0, function* () {
            const session = this.session();
            if (!session)
              throw Object.assign(new Error("Sign in first"), { code: 401 });
            if (session.expiresAt < Date.now() + 3e4) {
              if (!this.refreshPending)
                this.refreshPending = this.refresh().finally(() => {
                  this.refreshPending = void 0;
                });
              yield this.refreshPending;
            }
            return this.session().tokens.access_token;
          });
        }
        refresh() {
          return __awaiter(this, void 0, void 0, function* () {
            const session = this.session();
            try {
              const as = yield this.discovery(), client = { client_id: this.options.clientId };
              if (!(session === null || session === void 0 ? void 0 : session.tokens.refresh_token))
                throw new Error("No refresh token");
              const response = yield oauth.refreshTokenGrantRequest(as, client, oauth.None(), session.tokens.refresh_token, this.network());
              const tokens = yield oauth.processRefreshTokenResponse(as, client, response);
              if (tokens.id_token)
                yield oauth.validateApplicationLevelSignature(as, response, this.network());
              this.save(tokens, session.identity);
            } catch (error) {
              this.clear();
              throw Object.assign(new Error("Session expired; sign in again"), { code: 401, cause: error });
            }
          });
        }
        request(path_1) {
          return __awaiter(this, arguments, void 0, function* (path, method = "GET", data) {
            if (!path.startsWith("/") || path.startsWith("//") || path.includes(".."))
              throw new Error("Use an API-relative path");
            const response = yield fetch(this.options.apiEndpoint.replace(/\/$/, "") + path, { method, headers: { Authorization: "Bearer " + (yield this.accessToken()), "Content-Type": "application/json" }, body: data === void 0 ? void 0 : JSON.stringify(data), redirect: "error", signal: AbortSignal.timeout(1e4) });
            const result = response.status === 204 ? void 0 : yield response.json();
            if (!response.ok) {
              if (response.status === 401)
                this.clear();
              throw Object.assign(new Error((result === null || result === void 0 ? void 0 : result.message) || "Request failed"), { code: response.status });
            }
            return { status: response.status, data: result };
          });
        }
        logout() {
          return __awaiter(this, void 0, void 0, function* () {
            try {
              if (this.hasSession())
                yield this.request("/me/oidc/logout", "POST", {});
            } finally {
              this.clear();
            }
          });
        }
        clear() {
          this.options.storage.removeItem(this.prefix + ".session");
          this.options.storage.removeItem(this.prefix + ".transaction");
        }
      };
      exports.FidjOidcClient = FidjOidcClient2;
    }
  });

  // ../../../sdk/dist/session/Session.js
  var require_Session = __commonJS({
    "../../../sdk/dist/session/Session.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Session = void 0;
      var sdk_1 = require_sdk();
      var FidjPouch = null;
      var Session = class _Session {
        constructor() {
          this.db = null;
          this.dbRecordCount = 0;
          this.dbLastSync = null;
          this.remoteDb = null;
          this.dbs = [];
        }
        static write(item) {
          let value = "null";
          const t = typeof item;
          if (t === "undefined") {
            value = "null";
          } else if (value === null) {
            value = "null";
          } else if (t === "string") {
            value = JSON.stringify({ string: item });
          } else if (t === "number") {
            value = JSON.stringify({ number: item });
          } else if (t === "boolean") {
            value = JSON.stringify({ bool: item });
          } else if (t === "object") {
            value = JSON.stringify({ json: item });
          }
          return value;
        }
        static value(item) {
          let result = item;
          if (typeof item !== "object") {
          } else if ("string" in item) {
            result = item.string;
          } else if ("number" in item) {
            result = item.number.valueOf();
          } else if ("bool" in item) {
            result = item.bool.valueOf();
          } else if ("json" in item) {
            result = item.json;
            if (typeof result !== "object") {
              result = JSON.parse(result);
            }
          }
          return result;
        }
        static extractJson(item) {
          let result = item;
          if (!item) {
            return null;
          }
          if (typeof item === "object" && "json" in item) {
            result = item.json;
          }
          if (typeof result === "string") {
            result = JSON.parse(result);
          }
          if (typeof result === "object" && "json" in result) {
            result = result.json;
          }
          if (typeof result !== "object") {
            result = null;
          }
          return result;
        }
        isReady() {
          return !!this.db;
        }
        create(uid, force) {
          if (!force && this.db) {
            return Promise.resolve(this.db);
          }
          this.dbRecordCount = 0;
          this.dbLastSync = null;
          this.db = null;
          uid = uid || "default";
          if (typeof window === "undefined" || !FidjPouch) {
            return Promise.resolve(this.db);
          }
          return new Promise((resolve, reject) => {
            let opts = { location: "default" };
            try {
              if (window["cordova"]) {
                opts = { location: "default", adapter: "cordova-sqlite" };
              }
              this.db = new FidjPouch("fidj_db_" + uid, opts);
              this.db.info().then((info) => {
                return resolve(this.db);
              }).catch((err) => {
                reject(new sdk_1.FidjError(400, err));
              });
            } catch (err) {
              reject(new sdk_1.FidjError(500, err));
            }
          });
        }
        destroy() {
          return __awaiter(this, void 0, void 0, function* () {
            if (!this.db) {
              this.dbRecordCount = 0;
              this.dbLastSync = null;
              return;
            }
            if (this.db && !this.db.destroy) {
              return Promise.reject(new sdk_1.FidjError(408, "Need a valid db"));
            }
            return new Promise((resolve, reject) => {
              this.db.destroy((err, info) => {
                if (err) {
                  reject(new sdk_1.FidjError(500, err));
                } else {
                  this.dbRecordCount = 0;
                  this.dbLastSync = null;
                  this.db = null;
                  resolve();
                }
              });
            });
          });
        }
        setRemote(dbs) {
          this.dbs = dbs;
        }
        sync(userId) {
          if (!this.db) {
            return Promise.reject(new sdk_1.FidjError(408, "need db"));
          }
          if (!this.dbs || !this.dbs.length) {
            return Promise.reject(new sdk_1.FidjError(408, "need a remote db"));
          }
          return new Promise((resolve, reject) => {
            try {
              if (!FidjPouch) {
                return;
              }
              if (!this.remoteDb || this.remoteUri !== this.dbs[0].url) {
                this.remoteUri = this.dbs[0].url;
                this.remoteDb = new FidjPouch(this.remoteUri);
              }
              this.db.replicate.to(this.remoteDb).on("complete", (info) => {
                return this.remoteDb.replicate.to(this.db, {
                  filter: (doc) => {
                    return !!userId && !!doc && doc.fidjUserId === userId;
                  }
                }).on("complete", () => {
                  resolve();
                }).on("denied", (err) => reject({ code: 403, reason: { second: err } })).on("error", (err) => reject({ code: 401, reason: { second: err } }));
              }).on("denied", (err) => reject({ code: 403, reason: { first: err } })).on("error", (err) => reject({ code: 401, reason: { first: err } }));
            } catch (err) {
              reject(new sdk_1.FidjError(500, err));
            }
          });
        }
        put(data, _id, uid, oid, ave, crypto2) {
          if (!this.db) {
            return Promise.reject(new sdk_1.FidjError(408, "need db"));
          }
          if (!data || !_id || !uid || !oid || !ave) {
            return Promise.reject(new sdk_1.FidjError(400, "need formated data"));
          }
          const dataWithoutIds = JSON.parse(JSON.stringify(data));
          const toStore = {
            _id,
            fidjUserId: uid,
            fidjOrgId: oid,
            fidjAppVersion: ave
          };
          if (dataWithoutIds._rev) {
            toStore._rev = "" + dataWithoutIds._rev;
          }
          delete dataWithoutIds._id;
          delete dataWithoutIds._rev;
          delete dataWithoutIds.fidjUserId;
          delete dataWithoutIds.fidjOrgId;
          delete dataWithoutIds.fidjAppVersion;
          delete dataWithoutIds.fidjData;
          let resultAsString = _Session.write(_Session.value(dataWithoutIds));
          if (crypto2) {
            resultAsString = crypto2.obj[crypto2.method](resultAsString);
            toStore.fidjDacr = resultAsString;
          } else {
            toStore.fidjData = resultAsString;
          }
          return new Promise((resolve, reject) => {
            this.db.put(toStore, (err, response) => {
              if (response && response.ok && response.id && response.rev) {
                this.dbRecordCount++;
                if (typeof data === "object") {
                  data._rev = response.rev;
                  data._id = response.id;
                  resolve(data);
                } else {
                  resolve(response.id);
                }
              } else {
                reject(new sdk_1.FidjError(500, err));
              }
            });
          });
        }
        remove(data_id) {
          if (!this.db) {
            return Promise.reject(new sdk_1.FidjError(408, "need db"));
          }
          return new Promise((resolve, reject) => {
            this.db.get(data_id).then((doc) => {
              doc._deleted = true;
              return this.db.put(doc);
            }).then((result) => {
              resolve();
            }).catch((err) => {
              reject(err);
            });
          });
        }
        get(data_id, crypto2) {
          if (!this.db) {
            return Promise.reject(new sdk_1.FidjError(408, "Need db"));
          }
          return new Promise((resolve, reject) => {
            this.db.get(data_id).then((row) => {
              if (!!row && (!!row.fidjDacr || !!row.fidjData)) {
                let data = row.fidjDacr;
                if (crypto2 && data) {
                  data = crypto2.obj[crypto2.method](data);
                } else if (row.fidjData) {
                  data = JSON.parse(row.fidjData);
                }
                const resultAsJson = _Session.extractJson(data);
                if (resultAsJson) {
                  resultAsJson._id = row._id;
                  resultAsJson._rev = row._rev;
                  resolve(JSON.parse(JSON.stringify(resultAsJson)));
                } else {
                  this.remove(row._id);
                  reject(new sdk_1.FidjError(400, "Bad encoding"));
                }
              } else {
                reject(new sdk_1.FidjError(400, "No data found"));
              }
            }).catch((err) => reject(new sdk_1.FidjError(500, err)));
          });
        }
        getAll(crypto2) {
          if (!this.db || !this.db.allDocs) {
            return Promise.reject(new sdk_1.FidjError(408, "Need a valid db"));
          }
          return new Promise((resolve, reject) => {
            this.db.allDocs({ include_docs: true, descending: true }).then((rows) => {
              const all = [];
              rows.rows.forEach((row) => {
                if (!!row && !!row.doc._id && (!!row.doc.fidjDacr || !!row.doc.fidjData)) {
                  let data = row.doc.fidjDacr;
                  if (crypto2 && data) {
                    data = crypto2.obj[crypto2.method](data);
                  } else if (row.doc.fidjData) {
                    data = JSON.parse(row.doc.fidjData);
                  }
                  const resultAsJson = _Session.extractJson(data);
                  if (resultAsJson) {
                    resultAsJson._id = row.doc._id;
                    resultAsJson._rev = row.doc._rev;
                    all.push(JSON.parse(JSON.stringify(resultAsJson)));
                  } else {
                    console.error("Bad encoding : delete row");
                    this.remove(row.doc._id);
                  }
                } else {
                  console.error("Bad encoding");
                }
              });
              resolve(all);
            }).catch((err) => reject(new sdk_1.FidjError(400, err)));
          });
        }
        isEmpty() {
          if (!this.db || !this.db.allDocs) {
            return Promise.reject(new sdk_1.FidjError(408, "No db"));
          }
          return new Promise((resolve, reject) => {
            this.db.allDocs({
              // filter:  (doc) => {
              //    if (!self.connection.user || !self.connection.user._id) return doc;
              //    if (doc.fidjUserId === self.connection.user._id) return doc;
              // }
            }).then((response) => {
              if (!response) {
                reject(new sdk_1.FidjError(400, "No response"));
              } else {
                this.dbRecordCount = response.total_rows;
                if (response.total_rows && response.total_rows > 0) {
                  resolve(false);
                } else {
                  resolve(true);
                }
              }
            }).catch((err) => reject(new sdk_1.FidjError(400, err)));
          });
        }
        info() {
          if (!this.db) {
            return Promise.reject(new sdk_1.FidjError(408, "No db"));
          }
          return this.db.info();
        }
      };
      exports.Session = Session;
    }
  });

  // ../../../sdk/dist/session/index.js
  var require_session = __commonJS({
    "../../../sdk/dist/session/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }));
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_Session(), exports);
    }
  });

  // ../../../sdk/dist/sdk/LoggerService.js
  var require_LoggerService = __commonJS({
    "../../../sdk/dist/sdk/LoggerService.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LoggerService = void 0;
      var Interfaces_1 = require_Interfaces2();
      var LoggerService = class {
        constructor(level) {
          this.level = level;
          if (!level) {
            this.level = Interfaces_1.LoggerLevelEnum.ERROR;
          }
          if (typeof console === "undefined") {
            this.level = Interfaces_1.LoggerLevelEnum.NONE;
          }
        }
        log(message2, args) {
          if (this.level === Interfaces_1.LoggerLevelEnum.INFO) {
            console.log(message2, args);
          }
        }
        warn(message2, args) {
          if (this.level === Interfaces_1.LoggerLevelEnum.INFO || this.level === Interfaces_1.LoggerLevelEnum.WARN) {
            console.warn(message2, args);
          }
        }
        error(message2, args) {
          if (this.level === Interfaces_1.LoggerLevelEnum.INFO || this.level === Interfaces_1.LoggerLevelEnum.WARN || this.level === Interfaces_1.LoggerLevelEnum.ERROR) {
            console.error(message2, args);
          }
        }
        setLevel(level) {
          this.level = level;
        }
      };
      exports.LoggerService = LoggerService;
    }
  });

  // ../../../sdk/dist/bpInfo.js
  var require_bpInfo = __commonJS({
    "../../../sdk/dist/bpInfo.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.bpInfo = void 0;
      exports.bpInfo = { version: "v3.6.26" };
    }
  });

  // ../../../sdk/dist/server/verifyAppSession.js
  var require_verifyAppSession = __commonJS({
    "../../../sdk/dist/server/verifyAppSession.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SessionVerificationError = void 0;
      exports.verifyAppSession = verifyAppSession;
      exports.verifyOrganizationSession = verifyOrganizationSession;
      var Base64_1 = require_Base64();
      var SessionVerificationError = class extends Error {
        constructor(status, message2) {
          super(message2);
          this.status = status;
          this.name = "SessionVerificationError";
        }
      };
      exports.SessionVerificationError = SessionVerificationError;
      function verifyAppSession(token, options) {
        return __awaiter(this, void 0, void 0, function* () {
          let payload;
          try {
            if (!token || token.length > 16384) {
              throw new Error();
            }
            if (token.split(".").length !== 3) {
              payload = null;
            } else {
              const encoded = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
              payload = JSON.parse(Base64_1.Base64.decode(encoded.padEnd(Math.ceil(encoded.length / 4) * 4, "=")));
              if (payload.aud !== options.appId || typeof payload.sub !== "string" || typeof payload.name !== "string") {
                throw new Error();
              }
            }
          } catch (_a) {
            throw new SessionVerificationError(401, "Sign in to this app.");
          }
          let response;
          try {
            response = yield fetch(`${options.apiEndpoint.replace(/\/$/, "")}/apps/${encodeURIComponent(options.appId)}/me`, {
              headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
              signal: AbortSignal.timeout(5e3),
              redirect: "error"
            });
          } catch (_b) {
            throw new SessionVerificationError(503, "Identity service unavailable. Please retry.");
          }
          if ([401, 403, 404].includes(response.status)) {
            throw new SessionVerificationError(401, "Session expired or revoked. Sign in again.");
          }
          if (!response.ok) {
            throw new SessionVerificationError(503, "Identity service unavailable. Please retry.");
          }
          let result;
          try {
            result = yield response.json();
            if (!Array.isArray(result.roles) || result.roles.some((role) => typeof role.type !== "string")) {
              throw new Error();
            }
          } catch (_c) {
            throw new SessionVerificationError(503, "Invalid identity-service response.");
          }
          if (!payload && (typeof result.subject !== "string" || result.appId !== options.appId))
            throw new SessionVerificationError(401, "App session scope mismatch.");
          return {
            subject: (payload === null || payload === void 0 ? void 0 : payload.sub) || result.subject,
            username: (payload === null || payload === void 0 ? void 0 : payload.name) || result.username,
            appId: options.appId,
            roles: result.roles.map((role) => role.type)
          };
        });
      }
      function verifyOrganizationSession(token, options) {
        return __awaiter(this, void 0, void 0, function* () {
          var _a, _b;
          const session = yield verifyAppSession(token, options);
          let response;
          try {
            response = yield fetch(`${options.apiEndpoint.replace(/\/$/, "")}/apps/${encodeURIComponent(options.appId)}/organizations/${encodeURIComponent(options.organizationId)}`, { headers: { Authorization: `Bearer ${token}` }, redirect: "error", signal: AbortSignal.timeout(5e3) });
          } catch (_c) {
            throw new SessionVerificationError(503, "Identity service unavailable.");
          }
          if (!response.ok)
            throw new SessionVerificationError(response.status >= 500 ? 503 : 401, "Organization access denied.");
          const result = yield response.json();
          if (((_a = result.organization) === null || _a === void 0 ? void 0 : _a.id) !== options.organizationId || !Array.isArray((_b = result.access) === null || _b === void 0 ? void 0 : _b.permissions) || options.permission && !result.access.permissions.includes(options.permission))
            throw new SessionVerificationError(401, "Organization permission denied.");
          return Object.assign(Object.assign({}, session), { organizationId: options.organizationId, permissions: result.access.permissions });
        });
      }
    }
  });

  // ../../../sdk/dist/sdk/FidjNodeService.js
  var require_FidjNodeService = __commonJS({
    "../../../sdk/dist/sdk/FidjNodeService.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }));
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }) : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
        var ownKeys = function(o) {
          ownKeys = Object.getOwnPropertyNames || function(o2) {
            var ar = [];
            for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
            return ar;
          };
          return ownKeys(o);
        };
        return function(mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null) {
            for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
          }
          __setModuleDefault(result, mod);
          return result;
        };
      })();
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FidjNodeService = void 0;
      var FidjOidcClient_1 = require_FidjOidcClient();
      var tools = __importStar(require_tools());
      var connection = __importStar(require_connection());
      var connection_1 = require_connection();
      var session = __importStar(require_session());
      var Interfaces_1 = require_Interfaces2();
      var LoggerService_1 = require_LoggerService();
      var FidjError_1 = require_FidjError();
      var bpInfo_1 = require_bpInfo();
      var verifyAppSession_1 = require_verifyAppSession();
      var FidjNodeService2 = class _FidjNodeService {
        constructor(logger, promise, options) {
          this.sdk = {
            org: "fidj",
            version: bpInfo_1.bpInfo.version.substring(1),
            prod: false,
            useDB: true
          };
          if (promise) {
            this.promise = promise;
          } else {
            this.promise = Promise;
          }
          if (logger) {
            this.logger = logger;
          } else {
            this.logger = new LoggerService_1.LoggerService();
          }
          if (options && options.logLevel) {
            this.logger.setLevel(options.logLevel);
          }
          this.logger.log("fidj.sdk.service : constructor");
          this.storage = new tools.LocalStorage("fidj.");
          this.session = new session.Session();
          this.connection = new connection.Connection(this.sdk, this.storage, this.logger);
        }
        static IsJWTExpired(payload) {
          if (!payload.exp) {
            return true;
          }
          const now = /* @__PURE__ */ new Date();
          const expDate = new Date(payload.exp * 1e3);
          return expDate.getTime() < now.getTime();
        }
        static NameFromPayload(payload) {
          return payload === null || payload === void 0 ? void 0 : payload.name;
        }
        static RolesFromPayload(payload) {
          let roles2 = [];
          try {
            roles2 = [].concat(payload.roles);
          } catch (ignored) {
          }
          return roles2;
        }
        static AppIdFromPayload(payload) {
          return payload === null || payload === void 0 ? void 0 : payload.aud;
        }
        init(fidjId, options) {
          return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (options === null || options === void 0 ? void 0 : options.logLevel) {
              this.logger.setLevel(options.logLevel);
            } else {
              this.logger.setLevel(Interfaces_1.LoggerLevelEnum.NONE);
            }
            this.logger.log("fidj.sdk.service.init : ", options);
            const isZeroConfig = !fidjId && !options;
            if (isZeroConfig) {
              fidjId = _FidjNodeService.SANDBOX_FIDJ_ID;
              options = { prod: false };
              this.logger.log("fidj.sdk.service.init : zero-config mode, using sandbox");
            }
            if (!fidjId) {
              this.logger.error("fidj.sdk.service.init : bad init");
              throw new FidjError_1.FidjError(400, "Need a fidjId");
            }
            this.sdk.prod = !options ? true : (_a = options.prod) !== null && _a !== void 0 ? _a : true;
            this.sdk.useDB = !options ? false : (_b = options.useDB) !== null && _b !== void 0 ? _b : false;
            yield this.connection.init(this.sdk.version, fidjId, !options || !Object.prototype.hasOwnProperty.call(options, "crypto") ? false : options.crypto, options === null || options === void 0 ? void 0 : options.apiEndpoint);
            let bestUrls = [], bestOldUrls = [];
            try {
              yield this.connection.verifyConnectionStates();
              bestUrls = yield this.connection.getApiEndpoints({ filter: "theBestOne" });
              bestOldUrls = yield this.connection.getApiEndpoints({ filter: "theBestOldOne" });
            } catch (err) {
              this.logger.error("fidj.sdk.service.init: ", err);
              const cause = err instanceof Error ? err.message : err.toString();
              throw new FidjError_1.FidjError(500, "Could not verify API endpoints: " + cause);
            }
            if (bestUrls.length === 0 && bestOldUrls.length === 0) {
              const envHint = this.sdk.prod ? "https://api.fidj.ovh/v3" : "https://api.sandbox.fidj.ovh/v3";
              throw new FidjError_1.FidjError(404, "No reachable API endpoint. Tried: " + envHint + ". Check your network, fidjId, and prod/sandbox setting.");
            }
            const theBestFirstUrl = bestUrls.length ? bestUrls[0] : bestOldUrls[0];
            const isLogin = this.isLoggedIn();
            this.logger.log("fidj.sdk.service.init > verifyConnectionStates : ", theBestFirstUrl, isLogin);
            this.connection.setClient(new connection.Client(this.connection.fidjId, theBestFirstUrl.url, this.storage, this.sdk, this.logger));
          });
        }
        login(login, password, options) {
          return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("fidj.sdk.service.login");
            if (!this.connection.isReady()) {
              throw new FidjError_1.FidjError(404, "Need an initialized FidjService");
            }
            try {
              yield this._removeAll();
              yield this._createSession(this.connection.fidjId);
              const clientTokens = yield this._loginInternal(login, password, void 0, options);
              yield this.connection.setConnection(clientTokens);
            } catch (err) {
              if (err instanceof FidjError_1.FidjError) {
                throw err;
              }
              const code = typeof (err === null || err === void 0 ? void 0 : err.code) === "number" ? err.code : 500;
              throw new FidjError_1.FidjError(code, (err === null || err === void 0 ? void 0 : err.toString) ? err.toString() : String(err));
            }
            if (!this.sdk.useDB) {
              return this.connection.getUser();
            }
            try {
              yield this.session.sync(this.connection.getClientId());
            } catch (e) {
              this.logger.warn("fidj.sdk.service.login: sync -not blocking- issue  ", e.toString());
            }
            return this.connection.getUser();
          });
        }
        loginInDemoMode(options) {
          return __awaiter(this, void 0, void 0, function* () {
            if (!options || !options.accessToken) {
              const now = /* @__PURE__ */ new Date();
              now.setDate(now.getDate() + 1);
              const tomorrow = now.getTime();
              const payload = tools.Base64.encode(JSON.stringify({
                roles: [],
                message: "demo",
                apis: [],
                endpoints: [],
                dbs: [],
                exp: tomorrow
              }));
              const jwtSign = tools.Base64.encode(JSON.stringify({}));
              const token = jwtSign + "." + payload + "." + jwtSign;
              options = {
                accessToken: token,
                idToken: token,
                refreshToken: token
              };
            }
            return new this.promise((resolve, reject) => {
              this._removeAll().then(() => {
                return this._createSession(this.connection.fidjId);
              }).then(() => __awaiter(this, void 0, void 0, function* () {
                yield this.connection.setConnectionOffline(options);
                resolve(this.connection.getUser());
              })).catch((err) => {
                this.logger.error("fidj.sdk.service.loginInDemoMode error: ", err);
                reject(err);
              });
            });
          });
        }
        // Convenience: init + login in one call
        // Usage: await srv.initAndLogin('user@test.com', 'pwd')  → zero-config sandbox
        // Usage: await srv.initAndLogin('user@test.com', 'pwd', 'my-app')  → prod
        initAndLogin(login, password, fidjId, options, loginOptions) {
          return __awaiter(this, void 0, void 0, function* () {
            yield this.init(fidjId, options);
            return this.login(login, password, loginOptions);
          });
        }
        // Convenience: init + loginInDemoMode in one call
        // Usage: await srv.initDemo()  → sandbox with mock tokens, zero setup
        initDemo(fidjId, options) {
          return __awaiter(this, void 0, void 0, function* () {
            yield this.init(fidjId, options);
            return this.loginInDemoMode();
          });
        }
        oidc() {
          if (this.oidcClient)
            return this.oidcClient;
          if (typeof sessionStorage === "undefined" || !this.connection.fidjId)
            return void 0;
          const saved = sessionStorage.getItem("fidj.oidc." + this.connection.fidjId + ".config");
          if (!saved)
            return void 0;
          const options = JSON.parse(saved);
          const expectedApi = this.connection.apiEndpoint || (this.sdk.prod ? "https://api.fidj.ovh/v3" : "https://api.sandbox.fidj.ovh/v3");
          if (options.apiEndpoint.replace(/\/$/, "") !== expectedApi.replace(/\/$/, "") || options.clientId !== this.connection.fidjId)
            return void 0;
          this.oidcClient = new FidjOidcClient_1.FidjOidcClient(Object.assign(Object.assign({}, options), { storage: sessionStorage }));
          return this.oidcClient;
        }
        isLoggedIn() {
          if (this.oidc())
            return this.oidc().hasSession();
          return this.connection.isLogin();
        }
        needsRefresh() {
          return !this.connection.isReady();
        }
        isConnected() {
          var _a;
          return (_a = this.connection) === null || _a === void 0 ? void 0 : _a.isConnected();
        }
        getOwnerUser() {
          const clientUser = this.connection.getUser();
          if ((clientUser === null || clientUser === void 0 ? void 0 : clientUser.roles.indexOf("Owner")) > -1) {
            return new connection_1.OwnerUser(this, this.connection, clientUser.id, clientUser.username, clientUser.roles);
          }
          return null;
        }
        fidjGetEndpoints(filter) {
          return __awaiter(this, void 0, void 0, function* () {
            if (!filter) {
              filter = { showBlocked: false };
            }
            const ap = yield this.connection.getAccessPayload({ endpoints: [] });
            let endpoints = JSON.parse(ap).endpoints;
            if (!endpoints || !Array.isArray(endpoints)) {
              return [];
            }
            endpoints = endpoints.filter((endpoint) => {
              let ok = true;
              if (ok && filter.key) {
                ok = endpoint.key === filter.key;
              }
              if (ok && !filter.showBlocked) {
                ok = !endpoint.blocked;
              }
              return ok;
            });
            return endpoints;
          });
        }
        fidjRoles() {
          return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!this.isLoggedIn() || ((_a = this.connection.getUser()) === null || _a === void 0 ? void 0 : _a.id) === "demo") {
              return JSON.parse(yield this.connection.getIdPayload({ roles: [] })).roles || [];
            }
            const endpoints = yield this.connection.getApiEndpoints({ filter: "theBestOne" });
            if (endpoints.length !== 1)
              throw new FidjError_1.FidjError(503, "No identity endpoint is available.");
            const session2 = yield (0, verifyAppSession_1.verifyAppSession)(yield this.fidjGetIdToken(), {
              appId: this.connection.fidjId,
              apiEndpoint: endpoints[0].url
            });
            return session2.roles;
          });
        }
        fidjMessage() {
          return __awaiter(this, void 0, void 0, function* () {
            return JSON.parse(yield this.connection.getIdPayload({ message: "" })).message;
          });
        }
        logout(force) {
          return __awaiter(this, void 0, void 0, function* () {
            if (this.oidc())
              return this.oidc().logout();
            if (!this.connection.getClient() && !force) {
              return this._removeAll().then(() => {
                return this.session.create(this.connection.fidjId, true);
              });
            }
            return this.connection.logout().then(() => {
              return this._removeAll();
            }).catch(() => {
              return this._removeAll();
            }).then(() => {
              return this.session.create(this.connection.fidjId, true);
            });
          });
        }
        sync() {
          return __awaiter(this, arguments, void 0, function* (options = { forceRefresh: false }) {
            if (this.oidc()) {
              yield this.oidc().request("/me");
              return;
            }
            this.logger.log("fidj.sdk.service.sync");
            this.logger.log("fidj.sdk.service.sync: you ar not using DB - no sync available.");
            try {
              const clientTokens = yield this.connection.refreshConnection(options.forceRefresh);
              if (clientTokens) {
                yield this.connection.setConnection(clientTokens);
              }
              this.logger.log("fidj.sdk.service.sync refreshConnection done. ");
            } catch (err) {
              this.logger.warn("fidj.sdk.service.sync refreshConnection failed : ", err);
              if ((err === null || err === void 0 ? void 0 : err.code) === 403 || (err === null || err === void 0 ? void 0 : err.code) === 410) {
                yield this.logout(true);
              }
              throw new FidjError_1.FidjError(403, "not connected");
            }
            if (!this.sdk.useDB) {
              return;
            }
            const firstSync = this.session.dbLastSync === null;
            try {
              yield this._createSession(this.connection.fidjId);
              yield this.session.sync(this.connection.getClientId());
              this.logger.log("fidj.sdk.service.sync resolved");
            } catch (err) {
              this.logger.warn("fidj.sdk.service.sync warn: ", err);
            }
            const isEmpty = yield this.session.isEmpty();
            this.logger.log("fidj.sdk.service.sync isEmpty : ", isEmpty, firstSync);
            if (isEmpty && firstSync && options.fnInitFirstData) {
              try {
                const ret = yield options.fnInitFirstData(options.fnInitFirstData_Arg);
                this.logger.log("fidj.sdk.service.sync fnInitFirstData resolved: ", ret);
              } catch (e) {
                this.logger.warn("fidj.sdk.service.sync fnInitFirstData error: ", e);
              }
            }
            this.session.dbLastSync = (/* @__PURE__ */ new Date()).getTime();
            const result = yield this.session.info();
            this.session.dbRecordCount = 0;
            if (result && result.doc_count) {
              this.session.dbRecordCount = result.doc_count;
            }
            this.logger.log("fidj.sdk.service.sync _dbRecordCount : " + this.session.dbRecordCount);
          });
        }
        fidjPutInDb(data) {
          return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("fidj.sdk.service.fidjPutInDb: ", data);
            if (!this.sdk.useDB) {
              this.logger.log("fidj.sdk.service.fidjPutInDb: you are not using DB - no put available.");
              return Promise.resolve("NA");
            }
            if (!this.connection.getClientId()) {
              return this.promise.reject(new FidjError_1.FidjError(401, "DB put impossible. Need a user logged in."));
            }
            if (!this.session.isReady()) {
              return this.promise.reject(new FidjError_1.FidjError(400, "Need to be synchronised."));
            }
            let _id;
            if (data && typeof data === "object" && Object.keys(data).indexOf("_id")) {
              _id = data._id;
            }
            if (!_id) {
              _id = this._generateObjectUniqueId(this.connection.fidjId);
            }
            let crypto2;
            if (this.connection.fidjCrypto) {
              crypto2 = {
                obj: this.connection,
                method: "encrypt"
              };
            }
            return this.session.put(data, _id, this.connection.getClientId(), this.sdk.org, this.connection.fidjVersion, crypto2);
          });
        }
        fidjRemoveInDb(data_id) {
          return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("fidj.sdk.service.fidjRemoveInDb ", data_id);
            if (!this.sdk.useDB) {
              this.logger.log("fidj.sdk.service.fidjRemoveInDb: you are not using DB - no remove available.");
              return Promise.resolve();
            }
            if (!this.session.isReady()) {
              return this.promise.reject(new FidjError_1.FidjError(400, "Need to be synchronised."));
            }
            if (!data_id || typeof data_id !== "string") {
              return this.promise.reject(new FidjError_1.FidjError(400, "DB remove impossible. Need the data._id."));
            }
            return this.session.remove(data_id);
          });
        }
        fidjFindInDb(data_id) {
          return __awaiter(this, void 0, void 0, function* () {
            if (!this.sdk.useDB) {
              this.logger.log("fidj.sdk.service.fidjFindInDb: you are not using DB - no find available.");
              return Promise.resolve();
            }
            if (!this.connection.getClientId()) {
              return this.promise.reject(new FidjError_1.FidjError(401, "Find pb : need a user logged in."));
            }
            if (!this.session.isReady()) {
              return this.promise.reject(new FidjError_1.FidjError(400, " Need to be synchronised."));
            }
            let crypto2;
            if (this.connection.fidjCrypto) {
              crypto2 = {
                obj: this.connection,
                method: "decrypt"
              };
            }
            return this.session.get(data_id, crypto2);
          });
        }
        fidjFindAllInDb() {
          return __awaiter(this, void 0, void 0, function* () {
            if (!this.sdk.useDB) {
              this.logger.log("fidj.sdk.service.fidjFindAllInDb: you are not using DB - no find available.");
              return Promise.resolve([]);
            }
            if (!this.connection.getClientId()) {
              return this.promise.reject(new FidjError_1.FidjError(401, "Need a user logged in."));
            }
            if (!this.session.isReady()) {
              return this.promise.reject(new FidjError_1.FidjError(400, "Need to be synchronised."));
            }
            let crypto2;
            if (this.connection.fidjCrypto) {
              crypto2 = {
                obj: this.connection,
                method: "decrypt"
              };
            }
            return this.session.getAll(crypto2).then((results) => {
              this.connection.setCryptoSaltAsVerified();
              return this.promise.resolve(results);
            });
          });
        }
        sendOnEndpoint(input) {
          return __awaiter(this, void 0, void 0, function* () {
            if (this.oidc()) {
              const base = input.defaultKeyUrl ? new URL(input.defaultKeyUrl).pathname.replace(/^\/v3/, "") : "/" + (input.key || "me");
              return this.oidc().request(base + (input.relativePath ? "/" + input.relativePath : ""), input.verb, input.data);
            }
            yield this.sync();
            const filter = input.key ? { key: input.key } : null;
            const endpoints = yield this.fidjGetEndpoints(filter);
            if (!input.defaultKeyUrl && (!endpoints || endpoints.length !== 1)) {
              throw new FidjError_1.FidjError(400, "fidj.sdk.service.sendOnEndpoint : endpoint does not exist.");
            }
            let firstEndpointUrl = !endpoints || endpoints.length !== 1 ? input.defaultKeyUrl : endpoints[0].url;
            if (input.relativePath) {
              firstEndpointUrl = new URL(input.relativePath.replace(/^\/+/, ""), firstEndpointUrl.replace(/\/?$/, "/")).href;
            }
            const jwt = yield this.connection.getIdToken();
            let answer;
            const query = new connection_1.Ajax();
            switch (input.verb) {
              case "POST":
                answer = yield query.post({
                  url: firstEndpointUrl,
                  // not used : withCredentials: true,
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + jwt
                  },
                  data: input.data ? input.data : {},
                  timeout: input.timeout
                });
                break;
              case "PUT":
                answer = yield query.put({
                  url: firstEndpointUrl,
                  // not used : withCredentials: true,
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + jwt
                  },
                  data: input.data ? input.data : {},
                  timeout: input.timeout
                });
                break;
              case "DELETE":
                answer = yield query.delete({
                  url: firstEndpointUrl,
                  // not used : withCredentials: true,
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + jwt
                  },
                  timeout: input.timeout,
                  data: input.data
                });
                break;
              default:
                answer = yield query.get({
                  url: firstEndpointUrl,
                  // not used : withCredentials: true,
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + jwt
                  },
                  timeout: input.timeout,
                  data: input.data
                });
            }
            return answer;
          });
        }
        // Typed API convenience methods (using @ofidj/contracts)
        getMe() {
          return __awaiter(this, void 0, void 0, function* () {
            return this.sendOnEndpoint({
              verb: "GET",
              key: "me"
            });
          });
        }
        getMeDetails() {
          return __awaiter(this, void 0, void 0, function* () {
            return this.sendOnEndpoint({
              verb: "GET",
              key: "me",
              relativePath: "details"
            });
          });
        }
        updateMe(data) {
          return __awaiter(this, void 0, void 0, function* () {
            return this.sendOnEndpoint({
              verb: "PUT",
              key: "me",
              data
            });
          });
        }
        getConsents() {
          return __awaiter(this, void 0, void 0, function* () {
            return this.sendOnEndpoint({
              verb: "GET",
              key: "me",
              relativePath: "consents"
            });
          });
        }
        putConsents(data) {
          return __awaiter(this, void 0, void 0, function* () {
            return this.sendOnEndpoint({
              verb: "PUT",
              key: "me",
              relativePath: "consents",
              data
            });
          });
        }
        getConsentsHistory() {
          return __awaiter(this, void 0, void 0, function* () {
            return this.sendOnEndpoint({
              verb: "GET",
              key: "me",
              relativePath: "consents/history"
            });
          });
        }
        fidjForgotPasswordRequest(email) {
          return __awaiter(this, void 0, void 0, function* () {
            yield this.accountPost("/me/forgot", { email });
          });
        }
        resetPassword(data) {
          return __awaiter(this, void 0, void 0, function* () {
            yield this.accountPost("/me/reset-password", data);
            yield this.logout(true);
          });
        }
        verifyEmail(data) {
          return __awaiter(this, void 0, void 0, function* () {
            yield this.accountPost("/users/verify-email", data);
          });
        }
        resendVerification() {
          return __awaiter(this, void 0, void 0, function* () {
            yield this.sendOnEndpoint({ verb: "POST", key: "me", relativePath: "resend-verification" });
          });
        }
        accountPost(path, data) {
          return __awaiter(this, void 0, void 0, function* () {
            const endpoints = yield this.connection.getApiEndpoints({ filter: "theBestOne" });
            if (!endpoints || endpoints.length !== 1)
              throw new FidjError_1.FidjError(400, "No configured account API endpoint.");
            yield new connection_1.Ajax().post({
              url: endpoints[0].url.replace(/\/$/, "") + path,
              headers: { "Content-Type": "application/json", Accept: "application/json" },
              data,
              timeout: _FidjNodeService.DEFAULT_TIMEOUT_MS
            });
          });
        }
        fidjGetIdToken() {
          return __awaiter(this, void 0, void 0, function* () {
            if (this.oidc())
              return this.oidc().accessToken();
            return this.connection.getIdToken();
          });
        }
        _removeAll() {
          return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.destroy();
            yield this.session.destroy();
          });
        }
        _loginInternal(login, password, updateProperties, options) {
          return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("fidj.sdk.service._loginInternal");
            if (!this.connection.isReady()) {
              throw new FidjError_1.FidjError(403, "Need an initialized FidjService");
            }
            yield this.connection.logout();
            return yield this.connection.getClient().login(login, password, updateProperties, options);
          });
        }
        _createSession(uid) {
          return __awaiter(this, void 0, void 0, function* () {
            const dbs = yield this.connection.getDBs({ filter: "theBestOnes" });
            if (!dbs || dbs.length === 0) {
              this.logger.warn("Seems that you are in Demo mode or using Node (no remote DB).");
            }
            this.session.setRemote(dbs);
            return this.session.create(uid);
          });
        }
        _testPromise(a) {
          return __awaiter(this, void 0, void 0, function* () {
            if (a) {
              return this.promise.resolve("test promise ok " + a);
            }
            return new this.promise((resolve, reject) => {
              resolve("test promise ok");
            });
          });
        }
        _generateObjectUniqueId(appName, type, name) {
          const now = /* @__PURE__ */ new Date();
          const simpleDate = "" + now.getFullYear() + now.getMonth() + now.getDate() + now.getHours() + now.getMinutes();
          const sequId = ++_FidjNodeService._srvDataUniqId;
          let UId = "";
          if (appName && appName.charAt(0)) {
            UId += appName.charAt(0) + "";
          }
          if (type && type.length > 3) {
            UId += type.substring(0, 4);
          }
          if (name && name.length > 3) {
            UId += name.substring(0, 4);
          }
          UId += simpleDate + "" + sequId;
          return UId;
        }
      };
      exports.FidjNodeService = FidjNodeService2;
      FidjNodeService2.DEFAULT_TIMEOUT_MS = 6e4;
      FidjNodeService2.SANDBOX_FIDJ_ID = "fidj-sandbox-0123fe7ed0000001";
      FidjNodeService2._srvDataUniqId = 0;
    }
  });

  // ../../../sdk/dist/sdk/index.js
  var require_sdk = __commonJS({
    "../../../sdk/dist/sdk/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }));
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LocalStorage = void 0;
      __exportStar(require_FidjError(), exports);
      __exportStar(require_Interfaces2(), exports);
      __exportStar(require_IService(), exports);
      __exportStar(require_FidjNodeService(), exports);
      __exportStar(require_LoggerService(), exports);
      var Storage_1 = require_Storage();
      Object.defineProperty(exports, "LocalStorage", { enumerable: true, get: function() {
        return Storage_1.LocalStorage;
      } });
    }
  });

  // ../../../sdk/dist/connection/ClientTokens.js
  var require_ClientTokens = __commonJS({
    "../../../sdk/dist/connection/ClientTokens.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ClientTokens = void 0;
      var ClientTokens = class {
        constructor(username, accessToken, idToken, refreshToken) {
          this.username = username;
          this.accessToken = accessToken;
          this.idToken = idToken;
          this.refreshToken = refreshToken;
        }
      };
      exports.ClientTokens = ClientTokens;
    }
  });

  // ../../../sdk/dist/connection/Client.js
  var require_Client = __commonJS({
    "../../../sdk/dist/connection/Client.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }));
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }) : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
        var ownKeys = function(o) {
          ownKeys = Object.getOwnPropertyNames || function(o2) {
            var ar = [];
            for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
            return ar;
          };
          return ownKeys(o);
        };
        return function(mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null) {
            for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
          }
          __setModuleDefault(result, mod);
          return result;
        };
      })();
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Client = void 0;
      var Ajax_1 = require_Ajax();
      var tools = __importStar(require_tools());
      var sdk_1 = require_sdk();
      var ClientTokens_1 = require_ClientTokens();
      var Client = class _Client {
        constructor(appId, URI, storage, sdk2, logger) {
          this.appId = appId;
          this.URI = URI;
          this.storage = storage;
          this.sdk = sdk2;
          this.logger = logger;
          this._clientUuid = "v2.clientUuid." + appId;
          this._clientId = "v2.clientId." + appId;
          this._refreshCount = "v2.refreshCount." + appId;
          let uuid = this.storage.get(this._clientUuid) || "uuid-" + Math.random();
          let info = "_clientInfo";
          if (typeof window !== "undefined" && window.navigator) {
            info = window.navigator.appName + "@" + window.navigator.appVersion + "-" + window.navigator.userAgent;
          }
          if (typeof window !== "undefined" && window["device"] && window["device"].uuid) {
            uuid = window["device"].uuid;
          }
          this.setClientUuid(uuid);
          this.setClientInfo(info);
          this.clientId = this.storage.get(this._clientId);
          _Client.refreshCount = this.storage.get(this._refreshCount) || _Client.refreshCountInitial;
        }
        setClientId(value) {
          this.clientId = "" + value;
          this.storage.set(this._clientId, this.clientId);
        }
        setClientUuid(value) {
          this.clientUuid = "" + value;
          this.storage.set(this._clientUuid, this.clientUuid);
        }
        setClientInfo(value) {
          this.clientInfo = "" + value;
        }
        status() {
          return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (!this.URI) {
              console.error("no api uri");
              throw new sdk_1.FidjError(408, "no-api-uri");
            }
            try {
              const ajax = new Ajax_1.Ajax();
              const status = yield ajax.get({
                url: this.URI + "/status",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                timeout: sdk_1.FidjNodeService.DEFAULT_TIMEOUT_MS
              });
              if ((_b = (_a = status.data) === null || _a === void 0 ? void 0 : _a.urls) === null || _b === void 0 ? void 0 : _b.length) {
                return true;
              }
            } catch (e) {
            }
            return false;
          });
        }
        login(login, password, updateProperties, options) {
          return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (!this.URI) {
              console.error("no api uri");
              throw new sdk_1.FidjError(408, "no-api-uri");
            }
            try {
              const urlLogin = this.URI + "/users";
              const dataLogin = {
                name: login,
                username: login,
                email: login,
                password
              };
              if ((options === null || options === void 0 ? void 0 : options.autoSignup) === false) {
                dataLogin.autoSignup = false;
              }
              const createdUser = (yield new Ajax_1.Ajax().post({
                url: urlLogin,
                data: dataLogin,
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                timeout: sdk_1.FidjNodeService.DEFAULT_TIMEOUT_MS
              })).data.user;
              this.setClientId(login);
              const urlToken = this.URI + "/apps/" + this.appId + "/tokens";
              const dataToken = {
                grant_type: "access_token",
                termsAccepted: options === null || options === void 0 ? void 0 : options.termsAccepted,
                termsVersion: options === null || options === void 0 ? void 0 : options.termsVersion,
                // grant_type: 'client_credentials',
                // client_id: this.clientId,
                // client_secret: password,
                client_udid: this.clientUuid,
                client_info: this.clientInfo,
                // audience: this.appId,
                scope: JSON.stringify(this.sdk)
              };
              const headers = {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Basic " + tools.Base64.encode("" + login + ":" + password)
              };
              const createdAccessToken = (yield new Ajax_1.Ajax().post({
                url: urlToken,
                data: dataToken,
                headers,
                timeout: sdk_1.FidjNodeService.DEFAULT_TIMEOUT_MS
              })).data.token;
              dataToken.grant_type = "id_token";
              const createdIdToken = (yield new Ajax_1.Ajax().post({
                url: urlToken,
                data: dataToken,
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  Authorization: "Bearer " + createdAccessToken.data
                },
                timeout: sdk_1.FidjNodeService.DEFAULT_TIMEOUT_MS
              })).data.token;
              dataToken.grant_type = "refresh_token";
              const createdRefreshToken = (yield new Ajax_1.Ajax().post({
                url: urlToken,
                data: dataToken,
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  Authorization: "Bearer " + createdAccessToken.data
                },
                timeout: sdk_1.FidjNodeService.DEFAULT_TIMEOUT_MS
              })).data.token;
              return new ClientTokens_1.ClientTokens(login, createdAccessToken, createdIdToken, createdRefreshToken);
            } catch (e) {
              this.logger.warn("Login impossible", e);
              const code = typeof (e === null || e === void 0 ? void 0 : e.code) === "number" ? e.code : 500;
              const reason = typeof (e === null || e === void 0 ? void 0 : e.message) === "string" && e.message || typeof ((_a = e === null || e === void 0 ? void 0 : e.message) === null || _a === void 0 ? void 0 : _a.status) === "string" && e.message.status || typeof ((_b = e === null || e === void 0 ? void 0 : e.message) === null || _b === void 0 ? void 0 : _b.message) === "string" && e.message.message || typeof (e === null || e === void 0 ? void 0 : e.reason) === "string" && e.reason || "login-failed";
              throw new sdk_1.FidjError(code, reason);
            }
          });
        }
        /**
         *
         * @param refreshToken
         * @throws ErrorInterface
         */
        reAuthenticate(refreshToken) {
          return __awaiter(this, void 0, void 0, function* () {
            if (!this.URI) {
              console.error("no api uri");
              return Promise.reject({ code: 408, reason: "no-api-uri" });
            }
            const urlToken = this.URI + "/apps/" + this.appId + "/tokens";
            const dataToken = {
              grant_type: "access_token",
              // client_id: this.clientId,
              client_udid: this.clientUuid,
              client_info: this.clientInfo,
              // audience: this.appId,
              scope: JSON.stringify(this.sdk),
              refresh_token: refreshToken,
              refreshCount: _Client.refreshCount
            };
            const createdAccessToken = (yield new Ajax_1.Ajax().post({
              url: urlToken,
              data: dataToken,
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + refreshToken
              },
              timeout: sdk_1.FidjNodeService.DEFAULT_TIMEOUT_MS
            })).data.token;
            dataToken.grant_type = "id_token";
            const createdIdToken = (yield new Ajax_1.Ajax().post({
              url: urlToken,
              data: dataToken,
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + createdAccessToken.data
              },
              timeout: sdk_1.FidjNodeService.DEFAULT_TIMEOUT_MS
            })).data.token;
            _Client.refreshCount++;
            this.storage.set(this._refreshCount, _Client.refreshCount);
            return { createdAccessToken, createdIdToken };
          });
        }
        logout(refreshToken) {
          return __awaiter(this, void 0, void 0, function* () {
            if (!this.URI) {
              console.error("no api uri");
              return Promise.reject({ code: 408, reason: "no-api-uri" });
            }
            this.storage.remove(this._clientId);
            this.storage.remove(this._refreshCount);
            _Client.refreshCount = _Client.refreshCountInitial;
            if (!refreshToken || !this.clientId) {
              return Promise.resolve();
            }
            const urlToken = this.URI + "/apps/" + this.appId + "/tokens";
            return (yield new Ajax_1.Ajax().delete({
              url: urlToken,
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + refreshToken,
                timeout: sdk_1.FidjNodeService.DEFAULT_TIMEOUT_MS
              }
            })).data;
          });
        }
        isReady() {
          return !!this.URI || !this._clientId;
        }
      };
      exports.Client = Client;
      Client.refreshCountInitial = 1;
      Client.refreshCount = Client.refreshCountInitial;
    }
  });

  // ../../../sdk/dist/connection/ClientUser.js
  var require_ClientUser = __commonJS({
    "../../../sdk/dist/connection/ClientUser.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ClientUser = void 0;
      var ClientUser = class {
        constructor(id, username, roles2) {
          this.id = id;
          this.username = username;
          this.roles = roles2;
        }
      };
      exports.ClientUser = ClientUser;
    }
  });

  // ../../../sdk/dist/connection/ClientToken.js
  var require_ClientToken = __commonJS({
    "../../../sdk/dist/connection/ClientToken.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ClientToken = void 0;
      var ClientToken = class {
        constructor(id, type, data) {
          this.id = id;
          this.type = type;
          this.data = data;
        }
      };
      exports.ClientToken = ClientToken;
    }
  });

  // ../../../sdk/dist/connection/Connection.js
  var require_Connection = __commonJS({
    "../../../sdk/dist/connection/Connection.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Connection = void 0;
      var sdk_1 = require_sdk();
      var tools_1 = require_tools();
      var Ajax_1 = require_Ajax();
      var ClientUser_1 = require_ClientUser();
      var ClientTokens_1 = require_ClientTokens();
      var ClientToken_1 = require_ClientToken();
      var Connection = class {
        constructor(_sdk, _storage, _logger) {
          this._sdk = _sdk;
          this._storage = _storage;
          this._logger = _logger;
          this.client = null;
          this.user = null;
        }
        isReady() {
          return !!this.client && this.client.isReady();
        }
        init(fidjVersion, fidjId, fidjCrypto, apiEndpoint) {
          return __awaiter(this, void 0, void 0, function* () {
            this.fidjId = fidjId;
            this.fidjVersion = fidjVersion;
            this.fidjCrypto = fidjCrypto;
            this.apiEndpoint = apiEndpoint;
            this._accessToken = "v2.accessToken." + this.fidjId;
            this._accessTokenPrevious = "v2.accessTokenPrevious." + this.fidjId;
            this._idToken = "v2.idToken." + this.fidjId;
            this._refreshToken = "v2.refreshToken." + this.fidjId;
            this._states = "v2.states." + this.fidjId;
            this._cryptoSalt = "v2.cryptoSalt." + this.fidjId;
            this._cryptoSaltNext = "v2.cryptoSalt.next." + this.fidjId;
            this.cryptoSalt = this._storage.get(this._cryptoSalt) || null;
            this.cryptoSaltNext = this._storage.get(this._cryptoSaltNext) || null;
            this.accessToken = this._storage.get(this._accessToken) || null;
            this.accessTokenPrevious = this._storage.get(this._accessTokenPrevious) || null;
            this.idToken = this._storage.get(this._idToken) || null;
            this.refreshToken = this._storage.get(this._refreshToken) || null;
            this.states = this._storage.get(this._states) || {};
            this.apis = [];
          });
        }
        destroy(force) {
          return __awaiter(this, void 0, void 0, function* () {
            this._storage.remove(this._accessToken);
            this._storage.remove(this._idToken);
            this._storage.remove(this._refreshToken);
            this._storage.remove(this._states);
            if (this.accessToken) {
              this.accessTokenPrevious = this.accessToken;
              this._storage.set(this._accessTokenPrevious, this.accessTokenPrevious);
            }
            if (force) {
              this._storage.remove(this._cryptoSalt);
              this._storage.remove(this._cryptoSaltNext);
              this._storage.remove(this._accessTokenPrevious);
            }
            this.user = null;
            if (this.client) {
              yield this.client.logout();
            }
            this.accessToken = null;
            this.idToken = null;
            this.refreshToken = null;
            this.states = {};
          });
        }
        setClient(client) {
          this.client = client;
        }
        setUser(user) {
          this.user = user;
          if (this.client && this.user.id) {
            this.client.setClientId(this.user.id);
          }
        }
        getUser() {
          return this.user;
        }
        getClient() {
          return this.client;
        }
        setCryptoSalt(value) {
          if (this.cryptoSalt !== value && this.cryptoSaltNext !== value) {
            this.cryptoSaltNext = value;
            this._storage.set(this._cryptoSaltNext, this.cryptoSaltNext);
          }
          if (!this.cryptoSalt) {
            this.setCryptoSaltAsVerified();
          }
        }
        setCryptoSaltAsVerified() {
          if (this.cryptoSaltNext) {
            this.cryptoSalt = this.cryptoSaltNext;
            this._storage.set(this._cryptoSalt, this.cryptoSalt);
          }
          this.cryptoSaltNext = null;
          this._storage.remove(this._cryptoSaltNext);
        }
        encrypt(data) {
          if (typeof data !== "string") {
            data = JSON.stringify(data);
          } else {
            const dataAsObj = { string: data };
            data = JSON.stringify(dataAsObj);
          }
          if (this.fidjCrypto && this.cryptoSalt) {
            const key = this.cryptoSalt;
            return tools_1.Xor.encrypt(data, key);
          } else {
            return data;
          }
        }
        decrypt(data) {
          let decrypted = null;
          try {
            if (this.fidjCrypto && this.cryptoSaltNext) {
              const key = this.cryptoSaltNext;
              decrypted = tools_1.Xor.decrypt(data, key);
              decrypted = JSON.parse(decrypted);
            }
          } catch (err) {
            decrypted = null;
          }
          try {
            if (!decrypted && this.fidjCrypto && this.cryptoSalt) {
              const key = this.cryptoSalt;
              decrypted = tools_1.Xor.decrypt(data, key);
              decrypted = JSON.parse(decrypted);
            }
          } catch (err) {
            decrypted = null;
          }
          try {
            if (!decrypted && this.fidjCrypto && this.cryptoSalt) {
              const key = this.cryptoSalt;
              decrypted = tools_1.Xor.decrypt(data, key, true);
              decrypted = JSON.parse(decrypted);
            }
          } catch (err) {
            decrypted = null;
          }
          try {
            if (!decrypted) {
              decrypted = JSON.parse(data);
            }
            if (decrypted && decrypted.string) {
              decrypted = decrypted.string;
            }
          } catch (err) {
            decrypted = null;
          }
          return decrypted;
        }
        isLogin() {
          let exp = true;
          try {
            const payload = this.refreshToken.split(".")[1];
            const decoded = JSON.parse(tools_1.Base64.decode(payload));
            exp = (/* @__PURE__ */ new Date()).getTime() / 1e3 >= decoded.exp;
          } catch (e) {
          }
          return !exp;
        }
        isConnected() {
          var _a;
          return (_a = this.client) === null || _a === void 0 ? void 0 : _a.status();
        }
        // todo reintegrate client.login()
        logout() {
          return __awaiter(this, void 0, void 0, function* () {
            return this.getClient().logout(this.refreshToken);
          });
        }
        getClientId() {
          if (!this.client) {
            return null;
          }
          return this.client.clientId;
        }
        getIdToken() {
          return __awaiter(this, void 0, void 0, function* () {
            return this.idToken;
          });
        }
        getIdPayload(def) {
          return __awaiter(this, void 0, void 0, function* () {
            const idToken = yield this.getIdToken();
            try {
              let payload;
              if (idToken) {
                payload = idToken.split(".")[1];
              }
              if (payload) {
                return tools_1.Base64.decode(payload);
              }
            } catch (e) {
              this._logger.log("fidj.connection.getIdPayload pb: ", def, e);
            }
            if (def) {
              if (typeof def !== "string") {
                def = JSON.stringify(def);
              }
              return def;
            }
            return null;
          });
        }
        getAccessPayload(def) {
          return __awaiter(this, void 0, void 0, function* () {
            if (def && typeof def !== "string") {
              def = JSON.stringify(def);
            }
            try {
              const payload = this.accessToken.split(".")[1];
              if (payload) {
                return tools_1.Base64.decode(payload);
              }
            } catch (e) {
            }
            return def ? def : null;
          });
        }
        getPreviousAccessPayload(def) {
          if (def && typeof def !== "string") {
            def = JSON.stringify(def);
          }
          try {
            const payload = this.accessTokenPrevious.split(".")[1];
            if (payload) {
              return tools_1.Base64.decode(payload);
            }
          } catch (e) {
          }
          return def ? def : null;
        }
        /**
         * @throws ErrorInterface
         */
        refreshConnection() {
          return __awaiter(this, arguments, void 0, function* (force = false) {
            if (force) {
              this.removingCurrentTokens();
            }
            if (this.accessToken) {
              const payload = this.accessToken.split(".")[1];
              const decoded = tools_1.Base64.decode(payload);
              const notExpired = (/* @__PURE__ */ new Date()).getTime() / 1e3 < JSON.parse(decoded).exp;
              this._logger.log("fidj.connection.connection.refreshConnection : token not expired ? ", notExpired);
              if (notExpired) {
                return this.updatedClientTokens();
              }
            }
            if (this.refreshToken) {
              const payload = this.refreshToken.split(".")[1];
              const decoded = tools_1.Base64.decode(payload);
              const expired = (/* @__PURE__ */ new Date()).getTime() / 1e3 >= JSON.parse(decoded).exp;
              this._logger.log("fidj.connection.connection.refreshConnection : refreshToken not expired ? ", expired);
              if (expired) {
                this._storage.remove(this._refreshToken);
              }
            }
            this.removingCurrentTokens();
            this._logger.log("fidj.connection.connection.refreshConnection : refresh authentication.");
            const client = this.getClient();
            if (!client) {
              throw new sdk_1.FidjError(400, "Need an initialized client.");
            }
            const { createdAccessToken, createdIdToken } = yield this.client.reAuthenticate(this.refreshToken);
            this.accessToken = createdAccessToken.data;
            this.idToken = createdIdToken.data;
            return this.updatedClientTokens();
          });
        }
        setConnection(clientTokens) {
          return __awaiter(this, void 0, void 0, function* () {
            if (!clientTokens) {
              return;
            }
            if (clientTokens.accessToken) {
              this.accessToken = clientTokens.accessToken.data;
              this._storage.set(this._accessToken, this.accessToken);
              const salt = JSON.parse(yield this.getAccessPayload({ salt: "" })).salt;
              if (salt) {
                this.setCryptoSalt(salt);
              }
            }
            if (clientTokens.idToken) {
              this.idToken = clientTokens.idToken.data;
              this._storage.set(this._idToken, this.idToken);
            }
            if (clientTokens.refreshToken) {
              this.refreshToken = clientTokens.refreshToken.data;
              this._storage.set(this._refreshToken, this.refreshToken);
            }
            this._storage.set(this._states, this.states);
            const clientUser = new ClientUser_1.ClientUser(clientTokens.username, clientTokens.username, JSON.parse(yield this.getIdPayload({ roles: [] })).roles);
            this.setUser(clientUser);
          });
        }
        setConnectionOffline(options) {
          return __awaiter(this, void 0, void 0, function* () {
            if (options.accessToken) {
              this.accessToken = options.accessToken;
              this._storage.set(this._accessToken, this.accessToken);
            }
            if (options.idToken) {
              this.idToken = options.idToken;
              this._storage.set(this._idToken, this.idToken);
            }
            if (options.refreshToken) {
              this.refreshToken = options.refreshToken;
              this._storage.set(this._refreshToken, this.refreshToken);
            }
            this.setUser(new ClientUser_1.ClientUser("demo", "demo", JSON.parse(yield this.getIdPayload({ roles: [] })).roles));
          });
        }
        getApiEndpoints(options) {
          return __awaiter(this, void 0, void 0, function* () {
            if (this.apiEndpoint) {
              return [{ key: "fidj.override", url: this.apiEndpoint, blocked: false }];
            }
            let ea = [
              { key: "fidj.default", url: "https://api.fidj.ovh/v3", blocked: false }
            ];
            let filteredEa = [];
            if (!this._sdk.prod) {
              ea = [
                { key: "fidj.default", url: "http://localhost:3201/v3", blocked: false },
                { key: "fidj.default", url: "https://api.sandbox.fidj.ovh/v3", blocked: false }
              ];
            }
            if (this.accessToken) {
              const val = yield this.getAccessPayload({ apis: [] });
              const apiEndpoints = JSON.parse(val).apis;
              if (apiEndpoints && apiEndpoints.length) {
                ea = [];
                apiEndpoints.forEach((endpoint) => {
                  if (endpoint.url) {
                    ea.push(endpoint);
                  }
                });
              }
            }
            if (this.accessTokenPrevious) {
              const apiEndpoints = JSON.parse(this.getPreviousAccessPayload({ apis: [] })).apis;
              if (apiEndpoints && apiEndpoints.length) {
                apiEndpoints.forEach((endpoint) => {
                  if (endpoint.url && ea.filter((r) => r.url === endpoint.url).length === 0) {
                    ea.push(endpoint);
                  }
                });
              }
            }
            this._logger.log("fidj.sdk.connection.getApiEndpoints : ", ea, this.states);
            let couldCheckStates = true;
            if (this.states && Object.keys(this.states).length) {
              for (let i = 0; i < ea.length && couldCheckStates; i++) {
                if (!this.states[ea[i].url]) {
                  couldCheckStates = false;
                }
              }
            } else {
              couldCheckStates = false;
            }
            if (options === null || options === void 0 ? void 0 : options.filter) {
              if (couldCheckStates && options.filter === "theBestOne") {
                for (let i = 0; i < ea.length && filteredEa.length === 0; i++) {
                  const endpoint = ea[i];
                  if (this.states[endpoint.url] && this.states[endpoint.url].state) {
                    filteredEa.push(endpoint);
                  }
                }
              } else if (couldCheckStates && options.filter === "theBestOldOne") {
                let bestOldOne;
                for (let i = 0; i < ea.length; i++) {
                  const endpoint = ea[i];
                  if (this.states[endpoint.url] && this.states[endpoint.url].lastTimeWasOk && (!bestOldOne || this.states[endpoint.url].lastTimeWasOk > this.states[bestOldOne.url].lastTimeWasOk)) {
                    bestOldOne = endpoint;
                  }
                }
                if (bestOldOne) {
                  filteredEa.push(bestOldOne);
                }
              } else if (ea.length) {
                filteredEa.push(ea[0]);
              }
            } else {
              filteredEa = ea;
            }
            return filteredEa;
          });
        }
        getDBs(options) {
          return __awaiter(this, void 0, void 0, function* () {
            if (!this.accessToken) {
              return [];
            }
            const random = Math.random() % 2;
            let dbs = JSON.parse(yield this.getAccessPayload({ dbs: [] })).dbs || [];
            if (random === 0) {
              dbs = dbs.sort();
            } else if (random === 1) {
              dbs = dbs.reverse();
            }
            let filteredDBs = [];
            let couldCheckStates = true;
            if (this.states && Object.keys(this.states).length) {
              for (let i = 0; i < dbs.length && couldCheckStates; i++) {
                if (!this.states[dbs[i].url]) {
                  couldCheckStates = false;
                }
              }
            } else {
              couldCheckStates = false;
            }
            if (couldCheckStates && options && options.filter === "theBestOne") {
              for (let i = 0; i < dbs.length && filteredDBs.length === 0; i++) {
                const endpoint = dbs[i];
                if (this.states[endpoint.url] && this.states[endpoint.url].state) {
                  filteredDBs.push(endpoint);
                }
              }
            } else if (couldCheckStates && options && options.filter === "theBestOnes") {
              for (let i = 0; i < dbs.length; i++) {
                const endpoint = dbs[i];
                if (this.states[endpoint.url] && this.states[endpoint.url].state) {
                  filteredDBs.push(endpoint);
                }
              }
            } else if (options && options.filter === "theBestOne" && dbs.length) {
              filteredDBs.push(dbs[0]);
            } else {
              filteredDBs = dbs;
            }
            return filteredDBs;
          });
        }
        verifyConnectionStates() {
          return __awaiter(this, void 0, void 0, function* () {
            const currentTime = (/* @__PURE__ */ new Date()).getTime();
            this.states = {};
            this.apis = yield this.getApiEndpoints();
            for (const api of this.apis) {
              let endpointUrl = api.url;
              if (!endpointUrl) {
                endpointUrl = api.toString();
              }
              const verified = yield this.verifyApiState(currentTime, endpointUrl);
            }
            const dbs = yield this.getDBs();
            for (const db of dbs) {
              let dbEndpoint = db.url;
              if (!dbEndpoint) {
                dbEndpoint = db.toString();
              }
              const verified = yield this.verifyDbState(currentTime, dbEndpoint);
            }
          });
        }
        updatedClientTokens() {
          return __awaiter(this, void 0, void 0, function* () {
            const accessToken = new ClientToken_1.ClientToken(this.getClientId(), "accessToken", this.accessToken);
            const idToken = new ClientToken_1.ClientToken(this.getClientId(), "idToken", this.idToken);
            const refreshToken = new ClientToken_1.ClientToken(this.getClientId(), "refreshToken", this.refreshToken);
            const clientTokens = new ClientTokens_1.ClientTokens(this.getClientId(), accessToken, idToken, refreshToken);
            yield this.setConnection(clientTokens);
            return clientTokens;
          });
        }
        removingCurrentTokens() {
          if (this.accessToken) {
            this.accessTokenPrevious = this.accessToken;
            this._storage.set(this._accessTokenPrevious, this.accessTokenPrevious);
          }
          this._storage.remove(this._accessToken);
          this._storage.remove(this._idToken);
          this.accessToken = null;
          this.idToken = null;
        }
        verifyApiState(currentTime, endpointUrl) {
          return __awaiter(this, void 0, void 0, function* () {
            try {
              this._logger.log("fidj.sdk.connection.verifyApiState : ", currentTime, endpointUrl);
              const data = (yield new Ajax_1.Ajax().get({
                url: endpointUrl + "/status?isOk=" + this._sdk.version,
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                timeout: sdk_1.FidjNodeService.DEFAULT_TIMEOUT_MS
              })).data;
              let state = false;
              if (data && data.isOk) {
                state = true;
              }
              this.states[endpointUrl] = {
                state,
                time: currentTime,
                lastTimeWasOk: currentTime
              };
              this._logger.log("fidj.sdk.connection.verifyApiState > states : ", this.states);
            } catch (err) {
              this._logger.log("fidj.sdk.connection.verifyApiState > catch pb  - states : ", endpointUrl);
              let lastTimeWasOk = 0;
              if (this.states[endpointUrl]) {
                lastTimeWasOk = this.states[endpointUrl].lastTimeWasOk;
              }
              this.states[endpointUrl] = {
                state: false,
                time: currentTime,
                lastTimeWasOk
              };
            }
            this._storage.set(this._states, this.states);
          });
        }
        verifyDbState(currentTime, dbEndpoint) {
          return __awaiter(this, void 0, void 0, function* () {
            try {
              yield new Ajax_1.Ajax().get({
                url: dbEndpoint,
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                timeout: sdk_1.FidjNodeService.DEFAULT_TIMEOUT_MS
              });
              this.states[dbEndpoint] = { state: true, time: currentTime, lastTimeWasOk: currentTime };
            } catch (err) {
              let lastTimeWasOk = 0;
              if (this.states[dbEndpoint]) {
                lastTimeWasOk = this.states[dbEndpoint].lastTimeWasOk;
              }
              this.states[dbEndpoint] = {
                state: false,
                time: currentTime,
                lastTimeWasOk
              };
            }
            this._storage.set(this._states, this.states);
          });
        }
      };
      exports.Connection = Connection;
    }
  });

  // ../../../sdk/dist/connection/OwnerUser.js
  var require_OwnerUser = __commonJS({
    "../../../sdk/dist/connection/OwnerUser.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.OwnerUser = void 0;
      var ClientUser_1 = require_ClientUser();
      var OwnerUser = class extends ClientUser_1.ClientUser {
        constructor(service, connection, id, username, roles2) {
          super(id, username, roles2);
          this.service = service;
          this.connection = connection;
        }
        addRole(role) {
          return __awaiter(this, void 0, void 0, function* () {
            try {
              const appId = this.connection.fidjId;
              const apis = yield this.connection.getApiEndpoints();
              const appDetails = yield this.service.sendOnEndpoint({
                verb: "GET",
                defaultKeyUrl: `${apis[0].url}/apps/${appId}/details`
              });
              appDetails.data.app.rolesAvailable.push({ type: role });
              yield this.service.sendOnEndpoint({
                verb: "POST",
                defaultKeyUrl: `${apis[0].url}/apps/${appId}`,
                data: appDetails.data.app.rolesAvailable
              });
              const userRoles = this.roles.map((r) => {
                return { type: r };
              }).concat({ type: role });
              const contract = {
                name: "contract-" + role,
                user: this.username,
                roles: userRoles
              };
              const resp = yield this.service.sendOnEndpoint({
                verb: "POST",
                defaultKeyUrl: `${apis[0].url}/apps/${appId}/contracts`,
                data: contract
              });
            } catch (e) {
              console.error(e);
            }
          });
        }
      };
      exports.OwnerUser = OwnerUser;
    }
  });

  // ../../../sdk/dist/connection/index.js
  var require_connection = __commonJS({
    "../../../sdk/dist/connection/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }));
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_Interfaces(), exports);
      __exportStar(require_Client(), exports);
      __exportStar(require_Ajax(), exports);
      __exportStar(require_Connection(), exports);
      __exportStar(require_ClientToken(), exports);
      __exportStar(require_ClientTokens(), exports);
      __exportStar(require_ClientUser(), exports);
      __exportStar(require_OwnerUser(), exports);
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiStatusResponse.js
  var require_FidjApiStatusResponse = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiStatusResponse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiErrorResponse.js
  var require_FidjApiErrorResponse = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiErrorResponse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiOAuthTokenRequest.js
  var require_FidjApiOAuthTokenRequest = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiOAuthTokenRequest.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiOAuthTokenResponse.js
  var require_FidjApiOAuthTokenResponse = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiOAuthTokenResponse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiUsersCreateRequest.js
  var require_FidjApiUsersCreateRequest = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiUsersCreateRequest.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiUsersCreateResponse.js
  var require_FidjApiUsersCreateResponse = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiUsersCreateResponse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiUsersMeResponse.js
  var require_FidjApiUsersMeResponse = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiUsersMeResponse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiUsersMeDetailsResponse.js
  var require_FidjApiUsersMeDetailsResponse = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiUsersMeDetailsResponse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiUsersMeUpdateRequest.js
  var require_FidjApiUsersMeUpdateRequest = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiUsersMeUpdateRequest.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiUsersForgotRequest.js
  var require_FidjApiUsersForgotRequest = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiUsersForgotRequest.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiConsentsResponse.js
  var require_FidjApiConsentsResponse = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiConsentsResponse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiConsentsUpdateRequest.js
  var require_FidjApiConsentsUpdateRequest = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiConsentsUpdateRequest.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiConsentsHistoryResponse.js
  var require_FidjApiConsentsHistoryResponse = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiConsentsHistoryResponse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiAppsCreateRequest.js
  var require_FidjApiAppsCreateRequest = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiAppsCreateRequest.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiAppsCreateResponse.js
  var require_FidjApiAppsCreateResponse = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiAppsCreateResponse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiAppsPublicResponse.js
  var require_FidjApiAppsPublicResponse = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiAppsPublicResponse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiAppsDetailsResponse.js
  var require_FidjApiAppsDetailsResponse = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiAppsDetailsResponse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiAppsUpdateRequest.js
  var require_FidjApiAppsUpdateRequest = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiAppsUpdateRequest.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiAppsUsersResponse.js
  var require_FidjApiAppsUsersResponse = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiAppsUsersResponse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiAppsOAuthStatusResponse.js
  var require_FidjApiAppsOAuthStatusResponse = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiAppsOAuthStatusResponse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiAppsMeDetailsResponse.js
  var require_FidjApiAppsMeDetailsResponse = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiAppsMeDetailsResponse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiContractsListResponse.js
  var require_FidjApiContractsListResponse = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiContractsListResponse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiContractsCreateRequest.js
  var require_FidjApiContractsCreateRequest = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiContractsCreateRequest.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiContractsUpdateRequest.js
  var require_FidjApiContractsUpdateRequest = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiContractsUpdateRequest.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiTokensCreateRequest.js
  var require_FidjApiTokensCreateRequest = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiTokensCreateRequest.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiTokensCreateResponse.js
  var require_FidjApiTokensCreateResponse = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiTokensCreateResponse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiPrivacyResponse.js
  var require_FidjApiPrivacyResponse = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiPrivacyResponse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiAccountRecovery.js
  var require_FidjApiAccountRecovery = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiAccountRecovery.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/FidjApiGroups.js
  var require_FidjApiGroups = __commonJS({
    "../../../contracts/dist/fidj-api/FidjApiGroups.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/identity.js
  var require_identity = __commonJS({
    "../../../contracts/dist/fidj-api/identity.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../../contracts/dist/fidj-api/index.js
  var require_fidj_api = __commonJS({
    "../../../contracts/dist/fidj-api/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }));
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_FidjApiStatusResponse(), exports);
      __exportStar(require_FidjApiErrorResponse(), exports);
      __exportStar(require_FidjApiOAuthTokenRequest(), exports);
      __exportStar(require_FidjApiOAuthTokenResponse(), exports);
      __exportStar(require_FidjApiUsersCreateRequest(), exports);
      __exportStar(require_FidjApiUsersCreateResponse(), exports);
      __exportStar(require_FidjApiUsersMeResponse(), exports);
      __exportStar(require_FidjApiUsersMeDetailsResponse(), exports);
      __exportStar(require_FidjApiUsersMeUpdateRequest(), exports);
      __exportStar(require_FidjApiUsersForgotRequest(), exports);
      __exportStar(require_FidjApiConsentsResponse(), exports);
      __exportStar(require_FidjApiConsentsUpdateRequest(), exports);
      __exportStar(require_FidjApiConsentsHistoryResponse(), exports);
      __exportStar(require_FidjApiAppsCreateRequest(), exports);
      __exportStar(require_FidjApiAppsCreateResponse(), exports);
      __exportStar(require_FidjApiAppsPublicResponse(), exports);
      __exportStar(require_FidjApiAppsDetailsResponse(), exports);
      __exportStar(require_FidjApiAppsUpdateRequest(), exports);
      __exportStar(require_FidjApiAppsUsersResponse(), exports);
      __exportStar(require_FidjApiAppsOAuthStatusResponse(), exports);
      __exportStar(require_FidjApiAppsMeDetailsResponse(), exports);
      __exportStar(require_FidjApiContractsListResponse(), exports);
      __exportStar(require_FidjApiContractsCreateRequest(), exports);
      __exportStar(require_FidjApiContractsUpdateRequest(), exports);
      __exportStar(require_FidjApiTokensCreateRequest(), exports);
      __exportStar(require_FidjApiTokensCreateResponse(), exports);
      __exportStar(require_FidjApiPrivacyResponse(), exports);
      __exportStar(require_FidjApiAccountRecovery(), exports);
      __exportStar(require_FidjApiGroups(), exports);
      __exportStar(require_identity(), exports);
    }
  });

  // ../../../contracts/dist/bpInfo.js
  var require_bpInfo2 = __commonJS({
    "../../../contracts/dist/bpInfo.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.bpInfo = void 0;
      exports.bpInfo = { version: "v3.6.24" };
    }
  });

  // ../../../contracts/dist/index.js
  var require_dist = __commonJS({
    "../../../contracts/dist/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }));
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_fidj_api(), exports);
      __exportStar(require_bpInfo2(), exports);
    }
  });

  // ../../../sdk/dist/index.js
  var require_dist2 = __commonJS({
    "../../../sdk/dist/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }));
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_connection(), exports);
      __exportStar(require_sdk(), exports);
      __exportStar(require_session(), exports);
      __exportStar(require_tools(), exports);
      __exportStar(require_dist(), exports);
      __exportStar(require_verifyAppSession(), exports);
      __exportStar(require_FidjOidcClient(), exports);
    }
  });

  // src/service-agreement.ts
  function agreementMarkup() {
    return `<div class="signin-agreement"><label class="agreement-choice"><input id="service-agreement" type="checkbox" aria-required="true" disabled><span id="agreement-label">I accept the service agreement for this app.</span></label><button type="button" id="read-agreement" disabled>Read service agreement</button><p id="agreement-status" class="fineprint" role="status">Loading service agreement\u2026</p><button type="button" id="retry-agreement" hidden>Retry</button></div><dialog id="agreement-dialog" aria-labelledby="agreement-heading"><h2 id="agreement-heading">Service agreement</h2><p id="agreement-version"></p><p id="agreement-text"></p><button type="button" id="close-agreement">Close agreement</button></dialog>`;
  }
  function acceptedAgreement(form) {
    const checkbox = form.querySelector("#service-agreement");
    if (!checkbox?.checked || checkbox.disabled || !checkbox.dataset.version) return null;
    return { termsAccepted: true, termsVersion: checkbox.dataset.version };
  }
  function signInErrorMessage(error) {
    const detail = error;
    const reason = typeof detail?.reason === "string" ? detail.reason : typeof detail?.message === "string" ? detail.message : "";
    if (detail?.code === 429) return "Too many attempts. Please wait before trying again.";
    if (reason === "unknown-user") return "We could not sign in to this account. Check the email and password.";
    if (reason === "already exists - inconsistent request") return "An account already uses this email. Check the password or sign in instead.";
    if (/ECONNREFUSED|ENOTFOUND|ETIMEDOUT|ECONNRESET|EHOSTUNREACH|network/i.test(reason)) return "We cannot reach Fidj right now. Please try again.";
    return "We could not sign in to this account. Please try again.";
  }
  async function bindAgreement(form, title, endpoint, appId, checked = false) {
    if (!form) return;
    const checkbox = form.querySelector("#service-agreement");
    const read = form.querySelector("#read-agreement");
    const dialog = form.querySelector("#agreement-dialog");
    const status = form.querySelector("#agreement-status");
    const retry = form.querySelector("#retry-agreement");
    const submitButtons = form.querySelectorAll('button[type="submit"]');
    const update = () => submitButtons.forEach((button) => {
      button.disabled = checkbox.disabled;
    });
    form.querySelector("#agreement-label").textContent = `I accept the service agreement for ${title}.`;
    update();
    checkbox.addEventListener("change", update);
    read.addEventListener("click", () => dialog.showModal());
    form.querySelector("#close-agreement").addEventListener("click", () => dialog.close());
    const load = async () => {
      retry.hidden = true;
      status.textContent = "Loading service agreement\u2026";
      try {
        const response = await fetch(`${endpoint}/apps/${encodeURIComponent(appId)}`, { signal: AbortSignal.timeout(1e4) });
        if (!response.ok) throw new Error(response.status === 404 ? "missing" : "unreachable");
        const agreement = (await response.json()).app?.agreement;
        if (!agreement || typeof agreement.version !== "string" || !agreement.version || typeof agreement.text !== "string" || !agreement.text) throw new Error("missing");
        if (!form.isConnected) return;
        checkbox.dataset.version = agreement.version;
        checkbox.disabled = false;
        checkbox.checked = checked;
        read.disabled = false;
        dialog.querySelector("#agreement-version").textContent = `Version ${agreement.version}`;
        dialog.querySelector("#agreement-text").textContent = agreement.text;
        status.textContent = "Required to sign in. Optional data choices stay separate.";
        update();
      } catch (error) {
        if (!form.isConnected) return;
        status.textContent = error instanceof Error && error.message === "missing" ? "This app has no service agreement available." : "We cannot reach Fidj right now. Try again.";
        retry.hidden = false;
      }
    };
    retry.addEventListener("click", load);
    await load();
  }

  // src/content.ts
  var import_node = __toESM(require_dist2(), 1);

  // app.config.json
  var app_config_default = {
    appId: "fidj-f46d11011e19ef90",
    oidcIssuer: null,
    apiEndpoint: "https://api.fidj.ovh/v3",
    dashboardUrl: "https://fidj.ovh",
    title: "Mat Cloud App",
    releaseVersion: "26.09.12",
    localDemo: false,
    allowAnonymous: false,
    welcome: "Welcome in my Cloud",
    description: "A space to explore, with an account that puts you in control.",
    content: "<img src=https://3.bp.blogspot.com/-vX0tnGUE4j4/V7xOTtIm6rI/AAAAAAAABKI/xvKjK_Mx0QoKd9Ew3EF_e70_JFr0VQJ7wCK4B/s920/Retro_Mario_in_3D_flavor_by_cezkid.gif /><br><br>About <a href='https://blog.mlefree.com/p/about.html'>me</a><br>Work with me on <a href='https://github.com/ofidj'>fidj</a> or feel free to contact<br><a href='https://twitter.com/mat_cloud'>twitter</a> - hello@mlefree.com<br>",
    highlights: [],
    badges: [],
    logo: "./fidj-logo.png",
    favicon: "./fidj-logo.png",
    moduleEntry: "",
    domain: "mlefree.com"
  };

  // src/version.ts
  function showVersionBadge(version, apiEndpoint) {
    if (!/^\d{2}\.\d{2}\.\d{2}$/.test(version || "")) return;
    const badge = document.createElement("div");
    badge.className = "fidj-version";
    badge.setAttribute("aria-label", `App version ${version}`);
    badge.textContent = `v${version}`;
    document.body.append(badge);
    if (apiEndpoint) {
      void fetch(`${apiEndpoint.replace(/\/$/, "")}/status`).then((response) => response.ok ? response.json() : null).then((status) => {
        const apiVersion = status?.version || status?.built;
        if (!apiVersion) return;
        badge.textContent = `v${version} \xB7 API ${apiVersion}`;
        badge.setAttribute("aria-label", `App version ${version}, API version ${apiVersion}`);
      }).catch(() => void 0);
    }
  }

  // src/content.ts
  var sdk = new import_node.FidjNodeService();
  var oidc = app_config_default.oidcIssuer ? new import_node.FidjOidcClient({ issuer: app_config_default.oidcIssuer, clientId: app_config_default.appId, redirectUri: window.location.origin + window.location.pathname, apiEndpoint: app_config_default.apiEndpoint, storage: sessionStorage }) : null;
  var root = document.querySelector("#app");
  showVersionBadge(app_config_default.releaseVersion, app_config_default.title === "Fidj" ? app_config_default.apiEndpoint : void 0);
  var appPath = `/me/apps/${encodeURIComponent(app_config_default.appId)}`;
  var signedIn = false;
  var emailVerified = false;
  var anonymous = false;
  var initialized = false;
  var roles = [];
  var consent = {};
  var history = [];
  var departure = new URLSearchParams(window.location.search).get("departure");
  var message = departure === "completed" ? `You left ${app_config_default.title}. Your other memberships and shared identity remain.` : departure === "pending" ? "Access was revoked. Cleanup is queued; follow its progress in Fidj." : "";
  var failed = false;
  var busy = false;
  var leaving = false;
  var signInEmail = "";
  var signInPassword = "";
  var signInAgreementAccepted = false;
  var accountRoutes = ["forgot", "reset", "verify", "account"];
  var linkToken = "";
  var verificationConfirmed = false;
  function currentRoute() {
    const [route, query] = window.location.hash.slice(2).split("?");
    if (["reset", "verify"].includes(route) && query) {
      verificationConfirmed = false;
      linkToken = new URLSearchParams(query).get("token") || "";
      window.history.replaceState(null, "", "#/" + route);
    }
    return route;
  }
  var escape = (value) => String(value ?? "").replace(
    /[&<>"']/g,
    (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]
  );
  var element = (id) => document.getElementById(id);
  function badges() {
    const entries = app_config_default.badges;
    if (!entries?.length) return "";
    return `<footer class="signin-badges">${entries.map((entry) => `<span>${escape(entry)}</span>`).join("")}</footer>`;
  }
  function banner() {
    return message ? `<p role="${failed ? "alert" : "status"}" class="${failed ? "error" : "notice"}">${escape(message)}</p>` : "";
  }
  function appNav(current) {
    const tab = (id, label, selected) => `<button id="${id}"${selected ? ' class="selected" aria-current="page"' : ""}>${label}</button>`;
    return `<nav class="content-nav" aria-label="App navigation">${tab("content-tab", "Content", current === "content")}${tab("privacy-tab", signedIn ? "My privacy" : "Sign in", current === "privacy")}${signedIn ? tab("account-tab", "My account", current === "account") : ""}${tab("exit", signedIn ? "Sign out" : "Back to sign in", false)}</nav>`;
  }
  function wireNav() {
    element("content-tab")?.addEventListener("click", () => navigate("content"));
    element("account-tab")?.addEventListener("click", () => navigate("account"));
    element("privacy-tab")?.addEventListener(
      "click",
      () => navigate(signedIn ? "privacy" : "signin")
    );
    element("exit")?.addEventListener(
      "click",
      () => void action(async () => {
        if (signedIn) await sdk.logout(true);
        signedIn = false;
        anonymous = false;
        navigate("signin");
      })
    );
  }
  function highlights() {
    const entries = app_config_default.highlights;
    if (!entries?.length) return "";
    return `<div class="signin-highlights">${entries.map(
      (entry, index) => `<article><p class="eyebrow">${String(index + 1).padStart(2, "0")}</p><h2>${escape(entry.heading)}</h2><p>${escape(entry.body)}</p></article>`
    ).join("")}</div>`;
  }
  async function request(path, method = "GET", data) {
    const token = await sdk.fidjGetIdToken();
    const response = await fetch(app_config_default.apiEndpoint + path, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: data === void 0 ? void 0 : JSON.stringify(data),
      signal: AbortSignal.timeout(1e4)
    });
    const result = await response.json();
    if (!response.ok) {
      if ([401, 403].includes(response.status)) {
        signedIn = false;
        await sdk.logout(true);
      }
      throw new Error(result.message || result.status || "Please retry.");
    }
    return result;
  }
  async function refresh() {
    const membership = await request(
      `/apps/${encodeURIComponent(app_config_default.appId)}/me`
    );
    roles = membership.roles.map((role) => role.type);
    [consent, history] = await Promise.all([
      request(appPath + "/consents"),
      request(appPath + "/consents/history").then((result) => result.history)
    ]);
    emailVerified = (await request("/me")).user?.verified === true;
    signedIn = true;
  }
  async function action(task) {
    if (busy) return;
    busy = true;
    root.setAttribute("aria-busy", "true");
    root.querySelectorAll("button, input").forEach((control) => {
      control.disabled = true;
    });
    const submit = root.querySelector("button.primary");
    if (submit) submit.textContent = "Please wait\u2026";
    failed = false;
    if (initialized) message = "";
    try {
      await task();
    } catch (error) {
      failed = true;
      const detail = error;
      if (detail.code === 429)
        message = "Too many attempts. Please wait before trying again.";
      else if (detail.message || detail.reason) {
        let reason = detail.message || detail.reason;
        try {
          if (typeof reason === "string") reason = JSON.parse(reason);
        } catch {
        }
        message = typeof reason === "string" ? reason : reason.message || reason.status || "The request could not be completed. Please retry.";
      } else
        message = error instanceof Error ? error.message : "The request could not be completed. Please retry.";
      if (/jwt expired|session revoked|session expired|token.*expired/i.test(
        message
      ))
        message = "Your session has ended. Please sign in again.";
    } finally {
      busy = false;
      initialized = true;
      root.setAttribute("aria-busy", "false");
      render();
    }
  }
  function navigate(route) {
    window.history.replaceState(null, "", "#/" + route);
    if (!busy) render();
  }
  function moduleRoute() {
    const route = window.location.hash.slice(2).split("?")[0];
    if (!app_config_default.moduleEntry || !route || ["signin", "content", "privacy", ...accountRoutes].includes(route))
      return null;
    const target = new URL(app_config_default.moduleEntry, window.location.href);
    target.hash = window.location.hash;
    return target.href;
  }
  function render() {
    if (!initialized) {
      root.innerHTML = '<p role="status">Loading your session\u2026</p>';
      return;
    }
    const applicationRoute = moduleRoute();
    if (applicationRoute) {
      root.innerHTML = '<p role="status">Opening your app\u2026</p>';
      window.location.replace(applicationRoute);
      return;
    }
    let route = currentRoute();
    if (!signedIn && !(app_config_default.allowAnonymous && anonymous) && !["forgot", "reset", "verify"].includes(route))
      route = "signin";
    else if (!["signin", "content", "privacy", ...accountRoutes].includes(route))
      route = "content";
    if (route === "privacy" && !signedIn) route = "signin";
    window.history.replaceState(null, "", "#/" + route);
    const standaloneAccount = accountRoutes.includes(route) && !(route === "account" && signedIn);
    document.body.classList.toggle(
      "signin-view",
      route === "signin" || standaloneAccount
    );
    if (standaloneAccount) {
      renderAccount(route);
      return;
    }
    if (route === "account") {
      root.innerHTML = `${appNav("account")}<section class="card content-account">${banner()}${accountForm("account")}</section>`;
      wireNav();
      wireAccount("account");
      return;
    }
    if (route === "content" && app_config_default.moduleEntry) {
      root.innerHTML = '<p role="status">Opening your app\u2026</p>';
      window.location.assign(app_config_default.moduleEntry);
      return;
    }
    if (route === "content") {
      root.innerHTML = `${appNav("content")}${element("public-content").innerHTML}`;
      wireNav();
      return;
    }
    root.innerHTML = `${route === "signin" ? "" : appNav("privacy")}<section class="${route === "signin" ? "signin-shell" : "card content-account"}">
  ${route === "signin" ? "" : banner()}
  ${route === "signin" ? `<div class="signin-intro${app_config_default.highlights?.length ? "" : " is-plain"}"><header class="signin-masthead"><img class="app-mark" src="${escape(app_config_default.logo)}" alt=""><strong>${escape(app_config_default.title)}</strong></header>
  <div class="signin-identity"><h1>${escape(app_config_default.welcome)}</h1><p class="signin-description">${escape(app_config_default.description)}</p></div>
  ${highlights()}</div>
  <div class="signin-form"><div>${banner()}<h2>Sign in to ${escape(app_config_default.title)}</h2><form id="signin"><label for="email">Email</label><input id="email" type="email" value="${escape(signInEmail)}" placeholder="you@company.com" autocomplete="username" required><div class="field-head"><label for="password">Password</label><a href="#/forgot">Forgot?</a></div><div class="password-field"><input id="password" type="password" value="${escape(signInPassword)}" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" autocomplete="current-password" required><button type="button" id="reveal" aria-controls="password">Show</button></div>${agreementMarkup()}<button class="primary" type="submit">Continue</button><button class="secondary" type="submit" name="signup" value="true">Create an account</button></form>${app_config_default.allowAnonymous ? `<div class="signin-divider"><span>or explore first</span></div><button class="anonymous-entry" id="anonymous">Enter anonymously <span aria-hidden="true">\u2192</span></button><p class="signin-footnote">No account needed to view the content.</p>` : ""}
  <div class="signin-trust"><p class="signin-trust-head"><img class="signin-logo" src="./fidj-logo.png" alt="Fidj"><strong>Your account, with Fidj</strong></p><p>Signing in creates one Fidj account you keep across every app that uses Fidj.</p><p>You choose what this app may store \u2014 and can export or erase it at any moment.</p></div></div>
  ${badges()}</div>` : `
  <h2>My privacy in ${escape(app_config_default.title)}</h2><p>Roles: ${roles.map(escape).join(" \xB7 ") || "No assigned roles"}</p><button id="refresh">Refresh access</button>
  <p>These choices apply only to this app.${app_config_default.allowAnonymous ? " You can also view the public content by entering anonymously." : ""}</p>
  <p>Service agreement: ${consent.terms ? "Accepted" : "Not recorded"}. ${consent.terms ? "Leaving withdraws this agreement." : 'This generated example uses a demo agreement. <button id="terms">Accept demo agreement</button>'}</p>
  ${["analytics", "communications", "optionalData"].map((key, i) => `<label class="toggle"><span>${["Analytics", "Communications", "Optional data"][i]}</span><input type="checkbox" data-purpose="${key}" ${consent[key] ? "checked" : ""}></label>`).join("")}
  <h3>Consent history</h3>${history.length ? history.slice().reverse().map(
      (entry) => `<p>${escape(entry.type)} \xB7 ${entry.granted ? "Accepted" : "Withdrawn"} \xB7 ${escape(entry.changedAt)}</p>`
    ).join("") : "<p>No changes yet.</p>"}
  <button id="export">Export my app data</button>
  <p>This app stores its session in this browser. The export covers Fidj-held records for this membership. There is no separate app database in this static template.</p>
  ${roles.includes("Owner") ? "<p>Resolve app ownership before leaving.</p>" : leaving ? '<p>Confirm departure: your membership and its Fidj-held data will be removed. Your other apps remain available.</p><button id="confirm-leave" class="danger">Confirm leaving this app</button><button id="cancel-leave">Keep my membership</button>' : '<button id="leave" class="danger">Leave this app</button>'}
  <p class="leaving"><a href="${escape(app_config_default.dashboardUrl)}/#/my" target="_blank" rel="noopener">Open Fidj to manage every app you use \u2197</a><br><small>Fidj is the account provider behind ${escape(app_config_default.title)}. This opens it in a new tab; you stay signed in here.</small></p>`}</section>`;
    wireNav();
    element("reveal")?.addEventListener("click", () => {
      const field = element("password");
      const button = element("reveal");
      if (!field || !button) return;
      const hidden = field.type === "password";
      field.type = hidden ? "text" : "password";
      button.textContent = hidden ? "Hide" : "Show";
    });
    element("anonymous")?.addEventListener("click", () => {
      if (!app_config_default.allowAnonymous) return;
      anonymous = true;
      navigate("content");
    });
    if (oidc && element("signin")) element("signin").innerHTML = agreementMarkup() + '<p>Continue securely with your Fidj account. Your password stays with Fidj.</p><button class="primary" type="submit">Continue with Fidj</button>';
    void bindAgreement(element("signin"), app_config_default.title, app_config_default.apiEndpoint, app_config_default.appId, signInAgreementAccepted);
    element("signin")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = element("email")?.value || "";
      const password = element("password")?.value || "";
      const agreement = element("service-agreement");
      signInEmail = email;
      signInPassword = password;
      signInAgreementAccepted = agreement?.checked === true;
      const acceptance = acceptedAgreement(event.currentTarget);
      if (!acceptance) {
        failed = true;
        message = "Please accept the service agreement before continuing.";
        render();
        return;
      }
      const signup = event.submitter?.name === "signup";
      void action(async () => {
        if (oidc) {
          window.location.assign(await oidc.beginLogin());
          return;
        }
        try {
          await sdk.login(email, password, { autoSignup: signup, ...acceptance });
        } catch (error) {
          throw new Error(signInErrorMessage(error));
        }
        await refresh();
        anonymous = false;
        navigate("content");
      });
    });
    element("refresh")?.addEventListener("click", () => void action(refresh));
    element("signout")?.addEventListener(
      "click",
      () => void action(async () => {
        await sdk.logout(true);
        signedIn = false;
        anonymous = false;
        navigate("signin");
      })
    );
    element("terms")?.addEventListener(
      "click",
      () => void action(async () => {
        await request(appPath + "/consents", "PUT", {
          terms: true,
          cguVersion: "starter-demo-1",
          source: "profile"
        });
        await refresh();
      })
    );
    root.querySelectorAll("[data-purpose]").forEach(
      (input) => input.addEventListener(
        "change",
        () => void action(async () => {
          await request(appPath + "/consents", "PUT", {
            [input.dataset.purpose]: input.checked,
            source: "profile"
          });
          await refresh();
          message = "Saved for this app.";
        })
      )
    );
    element("export")?.addEventListener(
      "click",
      () => void action(async () => {
        const data = await request(appPath + "/export");
        const url = URL.createObjectURL(
          new Blob([JSON.stringify(data, null, 2)], {
            type: "application/json"
          })
        );
        const link = document.createElement("a");
        link.href = url;
        link.download = `${app_config_default.appId}-my-data.json`;
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 1e3);
        message = "Export downloaded.";
      })
    );
    element("leave")?.addEventListener("click", () => {
      leaving = true;
      render();
    });
    element("cancel-leave")?.addEventListener("click", () => {
      leaving = false;
      render();
    });
    element("confirm-leave")?.addEventListener("click", () => {
      void action(async () => {
        const result = await request(appPath, "DELETE", {
          confirm: app_config_default.appId
        });
        await sdk.logout(true);
        signedIn = false;
        anonymous = false;
        leaving = false;
        message = result.status === "pending" ? "Access revoked. Storage cleanup is pending; contact the app owner." : "You left this app. Your other memberships remain available.";
      });
    });
  }
  function accountForm(route) {
    return route === "forgot" ? `<h2>Reset your password</h2><p>We\u2019ll email you a link to choose a new password for your shared Fidj account.</p><form id="recovery"><label for="recovery-email">Email address</label><input id="recovery-email" type="email" autocomplete="email" required><button class="primary">Send reset link</button></form>` : route === "reset" ? `<h2>Choose a new password</h2><p>This changes your Fidj password across all your apps and signs out existing sessions.</p>${linkToken ? '<form id="recovery"><label for="new-password">New password</label><input id="new-password" type="password" autocomplete="new-password" minlength="12" required><label for="confirm-password">Confirm password</label><input id="confirm-password" type="password" autocomplete="new-password" minlength="12" required><p>Use at least 12 characters (up to 72 UTF-8 bytes).</p><button class="primary">Save new password</button></form>' : '<p>Request a new link if you no longer have an active reset link.</p><a href="#/forgot">Request a reset link</a>'}` : route === "verify" ? `<h2>${verificationConfirmed ? "Email verified" : "Verify your email"}</h2>${verificationConfirmed ? "<p>Your account is ready. Return to your app to continue.</p>" : "<p>Confirm that this email address belongs to you.</p>"}${verificationConfirmed ? "" : linkToken ? '<form id="recovery"><button class="primary">Confirm email address</button></form>' : "<p>Sign in to your account to request a new verification email.</p>"}` : `<h2>My Fidj account</h2><p>Your identity is shared across your apps. Privacy choices remain separate for each app.</p><p id="verification-status">${emailVerified ? "Your email address is verified." : "Your email is not verified yet."}</p><button id="check-verification">Refresh verification status</button>${emailVerified ? "" : '<button id="resend-verification">Send verification email</button>'}<p><a href="#/forgot">Reset my password</a></p><button id="continue-app" class="primary">Continue to ${escape(app_config_default.title)}</button>`;
  }
  function renderAccount(route) {
    root.innerHTML = `<section class="signin-shell"><div class="signin-intro is-plain"><header class="signin-masthead"><img class="app-mark" src="${escape(app_config_default.logo)}" alt=""><strong>${escape(app_config_default.title)}</strong></header>
  <div class="signin-identity"><h1>Your account.<br>Your control.</h1><p class="signin-description">Secure access to the apps you use, with one Fidj identity.</p></div>
  </div>
  <div class="signin-form"><div>${banner()}${accountForm(route)}</div><footer class="signin-badges"><a href="#/signin">Back to sign in</a></footer></div></section>`;
    wireAccount(route);
  }
  function wireAccount(route) {
    element("continue-app")?.addEventListener("click", () => navigate("content"));
    element("check-verification")?.addEventListener(
      "click",
      () => void action(async () => {
        const result = await request("/me");
        emailVerified = result.user?.verified === true;
        message = emailVerified ? "Your email address is verified." : "Your email is not verified yet. Request a verification email below.";
      })
    );
    element("resend-verification")?.addEventListener(
      "click",
      () => void action(async () => {
        await sdk.resendVerification();
        message = "Verification email sent. Open the link and confirm your address. If it does not arrive, check your spam folder.";
      })
    );
    element("recovery")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = element("recovery-email")?.value || "";
      const password = element("new-password")?.value || "";
      const confirmation = element("confirm-password")?.value || "";
      void action(async () => {
        if (route === "forgot") {
          await sdk.fidjForgotPasswordRequest(email);
          message = "If an account matches that email, a reset link is on its way. Check your inbox and spam folder.";
        } else if (route === "reset") {
          if (password !== confirmation)
            throw new Error("The passwords do not match.");
          if (new TextEncoder().encode(password).length > 72)
            throw new Error(
              "Use a shorter password: the limit is 72 UTF-8 bytes."
            );
          await sdk.resetPassword({ token: linkToken, password });
          linkToken = "";
          signedIn = false;
          anonymous = false;
          message = "Your password has been changed. Sign in with your new password.";
          navigate("signin");
        } else {
          await sdk.verifyEmail({ token: linkToken });
          verificationConfirmed = true;
          linkToken = "";
          message = "Your email address is now verified. You can return to your app.";
        }
      });
    });
  }
  window.addEventListener("hashchange", render);
  render();
  void action(async () => {
    if (oidc && new URL(window.location.href).searchParams.has("state")) {
      const callback = new URL(window.location.href);
      window.history.replaceState(null, "", window.location.pathname + "#/content");
      await oidc.completeLogin(callback);
    }
    await sdk.init(app_config_default.appId, {
      apiEndpoint: app_config_default.apiEndpoint,
      prod: !app_config_default.localDemo
    });
    if (sdk.isLoggedIn()) {
      await refresh();
      if (!moduleRoute() && !accountRoutes.includes(currentRoute()))
        navigate("content");
    }
  });
})();
/*! Bundled license information:

axios/dist/browser/axios.cjs:
  (*! Axios v1.20.0 Copyright (c) 2026 Matt Zabriskie and contributors *)

base-64/base64.js:
  (*! https://mths.be/base64 v1.0.0 by @mathias | MIT license *)
*/
//# sourceMappingURL=main.js.map
