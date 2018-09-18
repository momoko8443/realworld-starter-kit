(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/uku-routejs/dist/uku-router.js":
/*!*****************************************************!*\
  !*** ./node_modules/uku-routejs/dist/uku-router.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/css/effect.css":
/*!******************************************************!*\
  !*** ./node_modules/css-loader!./src/css/effect.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeIn {\n    0% {\n        opacity: 0; /*初始状态 透明度为0*/\n    }\n    100% {\n        opacity: 1; /*结尾状态 透明度为1*/\n    }\n}\n\n\n@-webkit-keyframes fadeIn {\n    0% {\n        opacity: 0; /*初始状态 透明度为0*/\n    }\n    100% {\n        opacity: 1; /*结尾状态 透明度为1*/\n    }\n}\n\n@-moz-keyframes fadeIn {\n    0% {\n        opacity: 0; /*初始状态 透明度为0*/\n    }\n    100% {\n        opacity: 1; /*结尾状态 透明度为1*/\n    }\n}\n.showEffect{\n    animation-name: fadeIn; /*动画名称*/\n    animation-duration: 2s; /*动画持续时间*/\n    animation-iteration-count: 1; /*动画次数*/\n    animation-delay: 0s;\n    \n    -moz-animation-name: fadeIn; /*动画名称*/\n    -moz-animation-duration: 2s; /*动画持续时间*/\n    -moz-animation-iteration-count: 1; /*动画次数*/\n    -moz-animation-delay: 0s;\n    \n    -webkit-animation-name: fadeIn; /*动画名称*/\n    -webkit-animation-duration: 2s; /*动画持续时间*/\n    -webkit-animation-iteration-count: 1; /*动画次数*/\n    -webkit-animation-delay: 0s; /*延迟时间*/\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/path-to-regexp/index.js":
/*!**********************************************!*\
  !*** ./node_modules/path-to-regexp/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * Default configs.
 */
var DEFAULT_DELIMITER = '/'
var DEFAULT_DELIMITERS = './'

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
  // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
  '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER
  var delimiters = (options && options.delimiters) || DEFAULT_DELIMITERS
  var pathEscaped = false
  var res

  while ((res = PATH_REGEXP.exec(str)) !== null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      pathEscaped = true
      continue
    }

    var prev = ''
    var next = str[index]
    var name = res[2]
    var capture = res[3]
    var group = res[4]
    var modifier = res[5]

    if (!pathEscaped && path.length) {
      var k = path.length - 1

      if (delimiters.indexOf(path[k]) > -1) {
        prev = path[k]
        path = path.slice(0, k)
      }
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
      pathEscaped = false
    }

    var partial = prev !== '' && next !== undefined && next !== prev
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = prev || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prev,
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
    })
  }

  // Push any remaining characters.
  if (path || index < str.length) {
    tokens.push(path + str.substr(index))
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (data, options) {
    var path = ''
    var encode = (options && options.encode) || encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token
        continue
      }

      var value = data ? data[token.name] : undefined
      var segment

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got array')
        }

        if (value.length === 0) {
          if (token.optional) continue

          throw new TypeError('Expected "' + token.name + '" to not be empty')
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j], token)

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        segment = encode(String(value), token)

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"')
        }

        path += token.prefix + segment
        continue
      }

      if (token.optional) {
        // Prepend partial segment prefixes.
        if (token.partial) path += token.prefix

        continue
      }

      throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'))
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$/()])/g, '\\$1')
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  if (!keys) return path

  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        pattern: null
      })
    }
  }

  return path
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  return new RegExp('(?:' + parts.join('|') + ')', flags(options))
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  options = options || {}

  var strict = options.strict
  var start = options.start !== false
  var end = options.end !== false
  var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER)
  var delimiters = options.delimiters || DEFAULT_DELIMITERS
  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|')
  var route = start ? '^' : ''
  var isEndDelimited = tokens.length === 0

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
      isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1
    } else {
      var capture = token.repeat
        ? '(?:' + token.pattern + ')(?:' + escapeString(token.delimiter) + '(?:' + token.pattern + '))*'
        : token.pattern

      if (keys) keys.push(token)

      if (token.optional) {
        if (token.partial) {
          route += escapeString(token.prefix) + '(' + capture + ')?'
        } else {
          route += '(?:' + escapeString(token.prefix) + '(' + capture + '))?'
        }
      } else {
        route += escapeString(token.prefix) + '(' + capture + ')'
      }
    }
  }

  if (end) {
    if (!strict) route += '(?:' + delimiter + ')?'

    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')'
  } else {
    if (!strict) route += '(?:' + delimiter + '(?=' + endsWith + '))?'
    if (!isEndDelimited) route += '(?=' + delimiter + '|' + endsWith + ')'
  }

  return new RegExp(route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys)
  }

  if (Array.isArray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), keys, options)
  }

  return stringToRegexp(/** @type {string} */ (path), keys, options)
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/css/effect.css":
/*!****************************!*\
  !*** ./src/css/effect.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./effect.css */ "./node_modules/css-loader/index.js!./src/css/effect.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: UkuRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UkuRouter", function() { return UkuRouter; });
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_effect_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/effect.css */ "./src/css/effect.css");
/* harmony import */ var _css_effect_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_effect_css__WEBPACK_IMPORTED_MODULE_1__);



function UkuRouter(container){
   
    var pageStack = {};
    var currentPage;
    var defaultPage;
    var otherwisePage;
    var self = this;
    var containerDOM;
    var anchors = {};
    var pageCache = {};

    var registerRoute = function (key, path, handler, isDefault, isOtherwise) {
        //var hash = window.location.hash;
        var regExp;
        if(key !== 'otherwise'){
            var re = path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default()(key);
            regExp = re.source;
        }
        
        var page = {
            "key": key,
            "path": path,
            "re": regExp,
            "handler": handler
        };
        if (isDefault) {
            defaultPage = page;
        }
        if (isOtherwise) {
            otherwisePage = page;
        }
        pageStack[key] = page;
    };

    var dispatchOnRouteChange = function (page,params) {
        //document.location.hash = page.key;
        window.history.pushState(null, null, page.key);
        if (self.onRouteChange && typeof (self.onRouteChange) === "function") {
            self.onRouteChange.call(self, page,params);
        }
        if(page.handler && typeof page.handler === "function"){
            page.handler(page,params);
        }
    };
    
    var dealWithAnchor = function (element) {
        var anchorsDom = element.querySelectorAll("a[name]");
        for (var i = 0; i < anchorsDom.length; i++) {
            var anchor = anchorsDom[i].getAttribute("name");
            anchors["#" + anchor] = anchor;
        }    
    };

    var generateDivId = function () {
        return new Date().getTime() + "_" + Math.floor(Math.random() * 100000).toString();
    };

    var matchPath = function(url) {
        if(url === 'otherwise'){
            return pageStack[url];
        }
        for(var key in pageStack){
            var re = pageStack[key].re;
            if(new RegExp(re).test(url)){
                return pageStack[key];
            }
        }
        return null;
    };

    var analyzePath = function(url){
        if(url === 'otherwise'){
            return [];
        }
        for(var key in pageStack){
            var re = pageStack[key].re;
            var result = new RegExp(re).exec(url);
            if(result && result.length > 0){
                result.shift();
                delete result['index'];
                delete result['input'];
                delete result['groups'];
                return result;
            }
        }
        return [];
    }


    this.default = function (key, path, handler) {
        registerRoute(key, path, handler, true);
        return this;
    };
    this.when = function (key, path, handler) {
        registerRoute(key, path, handler, false);
        return this;
    };
    this.otherwise = function (path, handler) {
        registerRoute("otherwise", path, handler, false, true);
        return this;
    };
    
    this.addAnchor = function(anchor){
        if(anchor.charAt(0) !== "#"){
            anchor = "#"+anchor;
        }
        anchors[anchor] = anchor;
        return this;
    }
    
    this.goto = function (key) {
        var page = matchPath(key);
        if (page) {
            if (page !== currentPage) {
                var currentPageKey = page.re;
                if (pageCache[currentPageKey]) {
                    var oldPageKey = currentPage.re;
                    if (pageCache[oldPageKey]) {
                        pageCache[oldPageKey].style.display = "none";
                    } else {
                        cacheOldPage();
                    }
                    pageCache[currentPageKey].style.display = "block";
                    pageCache[currentPageKey].classList.add("showEffect");
                    currentPage = page;
                    var p = {
                        "key": key,
                        "page": pageCache[currentPageKey],
                        "cache": true,
                        "handler":page.handler
                    };
                    var params = analyzePath(key);
                    dispatchOnRouteChange(p,params);
                } else {
                    cacheOldPage();
                    var ajax = new XMLHttpRequest();
                    ajax.onreadystatechange = function () {
                        if (ajax.readyState == 4) {
                            if (ajax.status == 200) {
                                var htmlText = ajax.responseText;
                                containerDOM.insertAdjacentHTML('afterBegin', '<div>' + htmlText + '</div>');
                                var html = containerDOM.children[0];
                                html.classList.add("showEffect");
                                html.setAttribute("id", generateDivId());
                                dealWithAnchor(html);
                                currentPage = page;
                                var p = {
                                    "key":key,
                                    "page": html,
                                    "cache": false,
                                    "handler": page.handler
                                };
                                var params = analyzePath(key);
                                dispatchOnRouteChange(p, params);
                            } else {
                                alert("Can't load the route " + page.key + "page from " + page.path);
                            }
                        }
                    };
                    ajax.open("GET", page.path, true);
                    ajax.send(null);
                }
            }
        } else if (anchors[key] === undefined) {
            this.goto("otherwise");
        }

        function cacheOldPage() {
            for (var i = 0; i < containerDOM.children.length; i++) {
                var childDOM = containerDOM.children[i];
                if (childDOM.style.display !== "none") {
                    childDOM.style.display = "none";
                    var oldPageKey = currentPage.re;
                    pageCache[oldPageKey] = childDOM;
                    return false;
                }
            }
        }
    };
    this.work = function () {
        containerDOM = document.getElementById(container);
        var hash = window.location.hash;
        dealWithAnchor(document);
        var self = this;
        window.onhashchange = function (e) {
            hash = window.location.hash;
            self.goto(hash);
        };
        if (hash) {
            this.goto(hash);
        } else if (defaultPage) {
            this.goto(defaultPage.key);
        }
    };
    this.onRouteChange = undefined;
}



/***/ })

/******/ });
});


/***/ }),

/***/ "./node_modules/ukulelejs/dist/uku.js":
/*!********************************************!*\
  !*** ./node_modules/ukulelejs/dist/uku.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t();else { var r, n; }}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=9)}([function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var Selector_1=__webpack_require__(2),ComponentConfiguration_1=__webpack_require__(15),ValueAndParent=function(){function e(e,t){this.value=e,this.parent=t}return e}(),UkuleleUtil=function(){function UkuleleUtil(){}return UkuleleUtil.searchHtmlTag=function(e,t){var n="^<"+t+"[\\s\\S]*>[\\s\\S]*</"+t+">$",r=new RegExp(n);return e.search(r)},UkuleleUtil.getInnerHtml=function(e,t){var n="<"+t+"[\\s\\S]*>[\\s\\S]*</"+t+">",r=new RegExp(n),o=e.match(r);if(o.index>-1){var i=o[0],a=i.search(">"),l=i.substr(a+1),u=l.lastIndexOf("</");return l=l.substring(0,u),l=l.replace(/(^\s*)|(\s*$)/g,"")}return null},UkuleleUtil.getComponentConfiguration=function(e){var t=document.createElement("div");t.innerHTML=e;for(var n=Selector_1.Selector.querySelectorAll(t,"template"),r=Selector_1.Selector.querySelectorAll(t,"script"),o=Selector_1.Selector.querySelectorAll(t,"style"),i=[],a=null,l=0;l<r.length;l++){var u=r[l];""!==u.src?i.push(u.src):a=u.innerHTML}return o&&o[0]?new ComponentConfiguration_1.ComponentConfiguration(n[0].innerHTML,i,a,o[0].innerHTML):new ComponentConfiguration_1.ComponentConfiguration(n[0].innerHTML,i,a)},UkuleleUtil.searchUkuAttrTag=function(e){var t=/^uku\-.*/;return e.search(t)},UkuleleUtil.getAttrFromUkuTag=function(e,t){if(void 0===t&&(t=!1),0===UkuleleUtil.searchUkuAttrTag(e)&&(e=e.replace("uku-","")),t){var n=e.split("-");e=n[0];for(var r=1;r<n.length;r++){e=e+n[r].charAt(0).toUpperCase()+n[r].substr(1)}}return e},UkuleleUtil.searchUkuExpTag=function(e){var t=/^\{\{.*\}\}$/;return e.search(t)},UkuleleUtil.searchUkuFuncArg=function(e){var t=/[\+\-\*\/\%\?\:\>\<]/,n=e.search(t);if(-1===n){var r=/\(.*\)$/;return n=e.search(r)}return-1},UkuleleUtil.isRepeat=function(e){return!!e.getAttribute("uku-repeat")},UkuleleUtil.isInRepeat=function(e){for(var t=Selector_1.Selector.parents(e),n=0;n<t.length;n++){var r=t[n];if(9!==r.nodeType){if(r.getAttribute("uku-repeat"))return!0}}return!1},UkuleleUtil.getBoundModelInstantName=function(e){var t=e.split(".")[0];if(t)return t},UkuleleUtil.getBoundModelInstantNames=function(e,t){var n=[];return e.forEach(function(e){var r=new RegExp("\\b"+e,"gm");t.search(r)>-1&&n.push(e)}),n},UkuleleUtil.getFinalValue=function(objects,attrName){return function(){var tempScope={};objects.forEach(function(e){tempScope[e._alias]=e;var t=e._alias,n=new RegExp("\\b"+t+"\\b","gm");attrName=attrName.replace(n,"tempScope."+t);var r=new RegExp("\\.tempScope\\."+t,"gm");attrName=attrName.replace(r,"."+t)});var result;try{result=eval(attrName)}catch(e){result=""}return tempScope=null,result}()},UkuleleUtil.setFinalValue=function(object,attrName,value){return function(){var tempScope={};attrName=attrName.replace("parent.",""),tempScope[object._alias]=object;var valueString;valueString="string"==typeof value?'"'+value+'"':"object"==typeof value?"JSON.parse('"+JSON.stringify(value)+"')":value;var evalString="tempScope."+attrName+"="+valueString;eval(evalString)}()},UkuleleUtil.wrapScriptInComponent=function(e){if(e){if(0===e.replace(new RegExp("\\s","gm"),"").search(new RegExp("\\(function\\(")))return e;return"\t(function(){\n                        return function(uku){\n                            "+e+"\n                        };\n                    })();\n                "}return""},UkuleleUtil}();exports.UkuleleUtil=UkuleleUtil},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),i=n(0),a=function(e){function t(t,n,r,o){var i=e.call(this,t,r,o)||this;return i.ukuTag=n,i}return r(t,e),t.prototype.render=function(e){var t=this.attributeName,n=i.UkuleleUtil.getFinalValue(e,t);"boolean"==typeof n?!0===n?this.element.setAttribute(this.ukuTag,this.ukuTag):this.element.removeAttribute(this.ukuTag):this.element.setAttribute(this.ukuTag,n)},t}(o.BoundItemBase);t.BoundItemAttribute=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.querySelectorAll=function(e,t){return window.hasOwnProperty("jQuery")&&void 0!==window.jQuery?window.jQuery(e).find(t):e.querySelectorAll(t)},e.fuzzyFind=function(e,t){if(e&&e.attributes)for(var n=0;n<e.attributes.length;n++){var r=e.attributes[n];if(r.nodeName.search(t)>-1)return e}return null},e.directText=function(e,t){for(var n="",r=e.childNodes,o=0;o<=r.length-1;o++){var i=r[o];if(3===i.nodeType){if(t||""===t||0===t||!1===t)return void(i.nodeValue=t);n+=i.nodeValue}}return n.trim()},e.parents=function(e){for(var t=[];e.parentNode&&"BODY"!==e.parentNode.tagName;)t.push(e.parentNode),e=e.parentNode;return t},e}();t.Selector=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t,n){this.attributeName=e,this.element=t,this.uku=n}return e.prototype.render=function(e){},e}();t.BoundItemBase=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){this.eventType=e,this.element=t}return e}();t.Event=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.eventsPool={}}return e.prototype.getEventsPool=function(){return this.eventsPool},e.prototype.addListener=function(e,t){this.eventsPool[e]||(this.eventsPool[e]=[]),this.eventsPool[e].push(t)},e.prototype.removeListener=function(e,t){if(this.eventsPool[e])for(var n=this.eventsPool[e].length-1;n>=0;n--)if(this.eventsPool[e][n]===t){this.eventsPool[e].splice(n,1);break}},e.prototype.hasListener=function(e){return!!(this.eventsPool[e]&&this.eventsPool[e].length>0)},e.prototype.dispatchEvent=function(e){if(e&&e.eventType){var t=this.eventsPool[e.eventType];if(t)for(var n=0;n<t.length;n++)t[n].call(this,e)}},e}();t.EventEmitter=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},e.getType=function(t){var n=typeof t;return"object"===n&&e.isArray(t)?"array":n},e.compare=function(t,n){var r=e.getType(t),o=e.getType(n),i=!0;if(r!==o)return!1;switch(r){case"object":if(null===t&&null===n)i=!0;else if(null===t||null===n)i=!1;else{var a=Object.keys(t),l=Object.keys(n);if(a.length!=l.length)i=!1;else if(0===a.length&&0===l.length)i=!0;else for(var u in t){var s=t[u],c=n[u],p=e.compare(s,c);if(!p){i=!1;break}}}break;case"array":if(t.length===n.length)for(var f=0;f<t.length;f++){var d=t[f],h=n[f],_=e.compare(d,h);if(!_){i=!1;break}}else i=!1;break;case"function":i=t.toString()===n.toString();break;default:i=t===n}return i},e.deepClone=function(t){var n,r,o;if("object"!=typeof t||null===t)return t;if(t instanceof Array)for(n=[],r=0,o=t.length;r<o;r++)"object"==typeof t[r]&&null!==t[r]?n[r]=e.deepClone(t[r]):n[r]=t[r];else{n={};for(r in t)"object"==typeof t[r]&&null!==t[r]&&"_dom"!==r?n[r]=e.deepClone(t[r]):n[r]=t[r]}return n},e}();t.ObjectUtil=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.INITIALIZED="initialized",e.REFRESH="refresh",e.HANDLE_ELEMENT_COMPLETED="handle_element_completed",e}();t.UkuEventType=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.addEventListener=function(e,t,n){return e.addEventListener(t,n)},e}();t.EventListener=r},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),i=n(10),a=n(16),l=n(17),u=n(2),s=n(7),c=n(4);t.Ukulele=(p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.promiseArray=[],t}return r(t,e),t.prototype.init=function(){var e=this;Promise.all(this.promiseArray).then(function(){e.manageApplication()})},t.prototype.handleElement=function(e,t){var n=this;this.analyizeElement(e,function(e){n.dispatchEvent(new c.Event(s.UkuEventType.HANDLE_ELEMENT_COMPLETED,e)),t&&"function"==typeof t&&t(e.element)})},t.prototype.registerController=function(e,t){window[e]=t,this._internal_getDefinitionManager().addControllerDefinition(e,t)},t.prototype.getController=function(e){return this._internal_getDefinitionManager().getControllerDefinition(e).controllerInstance},t.prototype.registerComponent=function(e,t,n){var r=this._internal_getDefinitionManager().addComponentDefinition(e,t,n);this.promiseArray.push(r)},t.prototype.getComponent=function(e){return this._internal_getDefinitionManager().getComponent(e)},t.prototype.getComponentController=function(e){return this._internal_getDefinitionManager().getControllerInstByDomId(e)},t.prototype.refresh=function(e,t){this.dirtyChecker||(this.dirtyChecker=new a.DirtyChecker(this)),this.dirtyChecker.runDirtyChecking(e,t)},t.prototype._internal_getDefinitionManager=function(){return this.defMgr||(this.defMgr=new i.DefinitionManager(this)),this.defMgr},t.prototype._internal_dealWithElement=function(e,t){this.analyizeElement(e,t)},t.prototype.manageApplication=function(){var e=this,t=u.Selector.querySelectorAll(document,"[uku-application]");if(1!==t.length)throw new Error("Only one 'uku-application' can be declared in a whole html.");this.analyizeElement(t[0],function(t){e.dispatchEvent(new c.Event(s.UkuEventType.INITIALIZED,t))})},t.prototype.analyizeElement=function(e,t){var n=new l.Analyzer(this);t&&function(e){n.addListener(l.Analyzer.ANALYIZE_COMPLETED,function(t){e(t.element)})}(t),n.analyizeElement(e)},t}(o.EventEmitter),p.INITIALIZED="initialized",p.REFRESH="refresh",p.HANDLE_ELEMENT_COMPLETED="handle_element_completed",p);var p},function(module,exports,__webpack_require__){"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function l(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,l)}u((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,i&&(a=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,i=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(a=u.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){u.label=n[1];break}if(6===n[0]&&u.label<a[1]){u.label=a[1],a=n;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(n);break}a[2]&&u.ops.pop(),u.trys.pop();continue}n=t.call(e,u)}catch(e){n=[6,e],i=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,a,l,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l};Object.defineProperty(exports,"__esModule",{value:!0});var ObjectUtil_1=__webpack_require__(6),Ajax_1=__webpack_require__(11),ControllerModel_1=__webpack_require__(12),ComponentModel_1=__webpack_require__(13),ComponentPoolItem_1=__webpack_require__(14),UkuleleUtil_1=__webpack_require__(0),DefinitionManager=function(){function DefinitionManager(e){this.controllersDefinition={},this.componentsDefinition={},this.componentsPool={},this.copyControllers={},this.dependentScriptsCache={},this.ajax=new Ajax_1.Ajax,this.uku=e}return DefinitionManager.prototype.getComponentsDefinition=function(){return this.componentsDefinition},DefinitionManager.prototype.getComponentsPool=function(){return this.componentsPool},DefinitionManager.prototype.setComponentsPool=function(e){this.componentsPool=e},DefinitionManager.prototype.setComponentsDefinition=function(e){this.componentsDefinition=e},DefinitionManager.prototype.getComponentDefinition=function(e){return this.componentsDefinition[e]},DefinitionManager.prototype.getControllerDefinition=function(e){return this.controllersDefinition[e]},DefinitionManager.prototype.getControllersDefinition=function(){return this.controllersDefinition},DefinitionManager.prototype.getComponent=function(e){return this.componentsPool[e]},DefinitionManager.prototype.getCopyControllers=function(){return this.copyControllers},DefinitionManager.prototype.copyAllController=function(){for(var e in this.controllersDefinition){var t=this.controllersDefinition[e],n=t.controllerInstance;this.copyControllerInstance(n,e)}},DefinitionManager.prototype.copyControllerInstance=function(e,t){var n=ObjectUtil_1.ObjectUtil.deepClone(e);delete this.copyControllers[t],this.copyControllers[t]=n},DefinitionManager.prototype.addControllerDefinition=function(e,t){var n=new ControllerModel_1.ControllerModel(e,t);t._alias=e,this.controllersDefinition[e]=n},DefinitionManager.prototype.getControllerInstByDomId=function(e){for(var t in this.controllersDefinition){var n=this.controllersDefinition[t],r=n.controllerInstance;if(r._dom&&r._dom.id===e)return r}},DefinitionManager.prototype.addComponentDefinition=function(e,t,n){var r=this;return new Promise(function(o,i){if(n)return r.componentsPool[e]=new ComponentPoolItem_1.ComponentPoolItem(e,t,!1),r.ajax.get(t).then(function(t){var n=UkuleleUtil_1.UkuleleUtil.getComponentConfiguration(t);return r.analyizeComponent(e,n)});r.componentsPool[e]=new ComponentPoolItem_1.ComponentPoolItem(e,t,!0),o()})},DefinitionManager.prototype.addLazyComponentDefinition=function(e,t){var n=this;return new Promise(function(r,o){return n.ajax.get(t).then(function(o){var i=UkuleleUtil_1.UkuleleUtil.getComponentConfiguration(o);return n.analyizeComponent(e,i).then(function(){n.componentsPool[e]={tagName:e,templateUrl:t,lazy:!1},r()})})})},DefinitionManager.prototype.getBoundAttributeValue=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=this.getControllerModelByName(e),o=[];r.forEach(function(e){o.push(e.controllerInstance)});var i=[this.uku,o,e];return i=i.concat(t),UkuleleUtil_1.UkuleleUtil.getFinalValue.apply(null,i)},DefinitionManager.prototype.getControllerModelByName=function(e){return this.getBoundControllerModelByName(e)},DefinitionManager.prototype.getFinalValueByExpression=function(e){var t=this.getControllerModelByName(e),n=[];return t.forEach(function(e){n.push(e.controllerInstance)}),UkuleleUtil_1.UkuleleUtil.getFinalValue(n,e)},DefinitionManager.prototype.getBoundControllerModelByName=function(e){var t,n,r=this,o=[];if(-1!==e.search("parent.")){var i=this.uku.parentUku._internal_getDefinitionManager();t=Object.keys(i.controllersDefinition),n=UkuleleUtil_1.UkuleleUtil.getBoundModelInstantNames(t,e),n.forEach(function(e){var t=i.controllersDefinition[e];o.push(t)})}else t=Object.keys(this.controllersDefinition),n=UkuleleUtil_1.UkuleleUtil.getBoundModelInstantNames(t,e),n.forEach(function(e){var t=r.controllersDefinition[e];o.push(t)});return o},DefinitionManager.prototype.analyizeComponent=function(e,t){return __awaiter(this,void 0,void 0,function(){function n(e){return new Promise(function(t,n){if(o.dependentScriptsCache[e])t();else{var r=document.getElementsByTagName("HEAD")[0],i=document.createElement("script");i.type="text/javascript",i.charset="utf-8",i.async=!0,i.src=e,i.onload=function(e){o.dependentScriptsCache[e.target.src]=!0,t()},r.appendChild(i)}})}var r,o,i,a,l,u,s;return __generator(this,function(c){switch(c.label){case 0:return r=t.dependentScripts,(o=this,r&&r.length>0)?(i=void 0,"function"==typeof window.define&&window.define.amd&&(i=window.define,window.define=void 0),t.componentControllerScript?[3,2]:(a=r[r.length-1],l=t,[4,this.ajax.get(a)])):[3,7];case 1:l.componentControllerScript=c.sent(),r.pop(),c.label=2;case 2:u=0,c.label=3;case 3:return u<r.length?(s=r[u],[4,n(s)]):[3,6];case 4:c.sent(),c.label=5;case 5:return u++,[3,3];case 6:return i&&(window.define=i),this.buildeComponentModel(e,t.template,t.componentControllerScript,t.stylesheet),[2];case 7:return this.buildeComponentModel(e,t.template,t.componentControllerScript,t.stylesheet),[2];case 8:return[2]}})})},DefinitionManager.prototype.buildeComponentModel=function(tag,template,script,style){function dealWithShadowStyle(e,t){var n=document.getElementsByTagName("HEAD")[0],r=document.createElement("style");r.type="text/css";var o=t.split("}"),i=[];o.forEach(function(e,t){var n=e.replace(/^\s*/,"");n&&i.push(n)}),t=i.join("}\n."+e+" "),t="."+e+" "+t+"}",r.innerHTML=t,n.appendChild(r)}var debugComment="//# sourceURL="+tag+".js";try{var controllerClazz=void 0;script&&(script=UkuleleUtil_1.UkuleleUtil.wrapScriptInComponent(script),script+=debugComment,controllerClazz=eval(script));var newComp=new ComponentModel_1.ComponentModel(tag,template,controllerClazz);this.componentsDefinition[tag]=newComp,style&&dealWithShadowStyle(tag,style)}catch(e){console.error(e)}},DefinitionManager}();exports.DefinitionManager=DefinitionManager},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.prototype.get=function(e){return new Promise(function(t,n){var r=new XMLHttpRequest;r.onreadystatechange=function(){4===r.readyState&&(200===r.status?t(r.responseText):n())},r.open("GET",e,!0),r.send(null)})},e}();t.Ajax=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){this.alias=e,this.controllerInstance=t,this.boundItems=[]}return e.prototype.addBoundItem=function(e){this.boundItems.push(e)},e.prototype.getBoundItemsByName=function(e){for(var t=[],n=0;n<this.boundItems.length;n++){var r=this.boundItems[n];r.attributeName===e&&t.push(r)}return t},e}();t.ControllerModel=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t,n){this.tagName=e,this.template=t,this.controllerClazz=n}return e}();t.ComponentModel=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t,n){this.tagName=e,this.templateUrl=t,this.lazy=n}return e}();t.ComponentPoolItem=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t,n,r){void 0===r&&(r=void 0),this.template=e,this.dependentScripts=t,this.componentControllerScript=n,this.stylesheet=r}return e}();t.ComponentConfiguration=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(6),i=n(7),a=n(4),l=function(){function e(e){this.uku=e,this.defMgr=this.uku._internal_getDefinitionManager()}return e.prototype.runDirtyChecking=function(e,t){function n(e){var n=l.defMgr.getControllersDefinition()[e];if(!n)return void(l.uku.parentUku&&l.uku.parentUku.refresh(e));for(var u=n.controllerInstance,s=l.defMgr.getCopyControllers()[e],c=0,p=0;p<n.boundItems.length;p++){var f=n.boundItems[p],d=f.attributeName;if(s){f.hasOwnProperty("ukuTag")&&"selected"===f.ukuTag&&(d=d.split("|")[0]);var h=r.UkuleleUtil.getFinalValue([u],d),_=r.UkuleleUtil.getFinalValue([s],d);if(!o.ObjectUtil.compare(_,h)){d=f.attributeName;for(var m=n.getBoundItemsByName(d),v=0;v<m.length;v++){var y=m[v];(y.element!==t||f.hasOwnProperty("ukuTag")&&"value"!==y.ukuTag)&&(c++,y.render([u]))}}}}c>0&&l.uku.hasListener(i.UkuEventType.REFRESH)&&l.uku.dispatchEvent(new a.Event(i.UkuEventType.REFRESH)),l.defMgr.copyControllerInstance(u,e)}var l=this;if(e){if("string"==typeof e)n(e);else if(o.ObjectUtil.isArray(e))for(var u=0;u<e.length;u++)n(e[u])}else for(var s in this.defMgr.getControllersDefinition())n(s)},e}();t.DirtyChecker=l},function(module,exports,__webpack_require__){"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function l(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,l)}u((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,i&&(a=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,i=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(a=u.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){u.label=n[1];break}if(6===n[0]&&u.label<a[1]){u.label=a[1],a=n;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(n);break}a[2]&&u.ops.pop(),u.trys.pop();continue}n=t.call(e,u)}catch(e){n=[6,e],i=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,a,l,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l};Object.defineProperty(exports,"__esModule",{value:!0});var EventEmitter_1=__webpack_require__(5),UkuleleUtil_1=__webpack_require__(0),BoundItemAttributeFactory_1=__webpack_require__(18),BoundItemExpression_1=__webpack_require__(27),BoundItemInnerText_1=__webpack_require__(28),BoundItemRepeat_1=__webpack_require__(29),BoundItemComponentAttribute_1=__webpack_require__(30),ElementActionBinder_1=__webpack_require__(31),EventListener_1=__webpack_require__(8),Selector_1=__webpack_require__(2),Event_1=__webpack_require__(4),Analyzer=function(_super){function Analyzer(e){var t=_super.call(this)||this;return t.dealWithAttribute=function(e,t){var n=this,r=e.getAttribute("uku-"+t),o=this.defMgr.getControllerModelByName(r);if(o&&o.length>0){var i=BoundItemAttributeFactory_1.BoundItemAttributeFactory.getInstance().generateInstance(r,t,e,this.uku),a=[];o.forEach(function(r){r.addBoundItem(i),ElementActionBinder_1.elementChangedBinder(e,t,r,n.uku.refresh,n.uku),a.push(r.controllerInstance)}),i.render(a)}},t.uku=e,t.defMgr=t.uku._internal_getDefinitionManager(),t}return __extends(Analyzer,_super),Analyzer.prototype.analyizeElement=function(e){var t=this;this.searchComponent(e).then(function(e){t.searchExpression(e),t.searchUkuAttribute(e),t.defMgr.copyAllController(),t.hasListener(Analyzer.ANALYIZE_COMPLETED)&&t.dispatchEvent(new Event_1.Event(Analyzer.ANALYIZE_COMPLETED,e))})},Analyzer.prototype.sortAttributes=function(e){for(var t=[],n=[],r=0;r<e.attributes.length;r++){var o=e.attributes[r];-1!==o.nodeName.search("uku-on")?n.push(o):t.push(o)}return t=t.concat(n)},Analyzer.prototype.searchUkuAttribute=function(e){var t=[],n=Selector_1.Selector.fuzzyFind(e,"uku-");n&&t.push(n);for(var r=Selector_1.Selector.querySelectorAll(e,"*"),o=0;o<r.length;o++){var i=r[o],a=Selector_1.Selector.fuzzyFind(i,"uku-");a&&!UkuleleUtil_1.UkuleleUtil.isInRepeat(a)&&t.push(a)}for(var l=0;l<t.length;l++)for(var u=t[l],s=this.sortAttributes(u),c=0;c<s.length;c++){var p=s[c];if(UkuleleUtil_1.UkuleleUtil.searchUkuAttrTag(p.nodeName)>-1){var f=p.nodeName.split("-");f.shift();var d=f.join("-");"application"!==d&&(0===d.search("on")?UkuleleUtil_1.UkuleleUtil.isRepeat(u)||UkuleleUtil_1.UkuleleUtil.isInRepeat(u)||this.dealWithEvent(u,d):-1!==d.search("repeat")?this.dealWithRepeat(u):UkuleleUtil_1.UkuleleUtil.isRepeat(u)||UkuleleUtil_1.UkuleleUtil.isInRepeat(u)||("text"!==d?this.dealWithAttribute(u,d):this.dealWithInnerText(u)))}}},Analyzer.prototype.searchComponent=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,n,r,o,i;return __generator(this,function(a){switch(a.label){case 0:return(t=this.defMgr.getComponent(e.localName))?t.lazy?[3,1]:(n=e.attributes,r=this.defMgr.getComponentsDefinition()[t.tagName],UkuleleUtil_1.UkuleleUtil.isRepeat(e)||UkuleleUtil_1.UkuleleUtil.isInRepeat(e)?[2,e]:[2,this.dealWithComponent(e,r.template,r.controllerClazz,n)]):[3,4];case 1:return[4,this.defMgr.addLazyComponentDefinition(t.tagName,t.templateUrl)];case 2:return a.sent(),n=e.attributes,r=this.defMgr.getComponentsDefinition()[t.tagName],UkuleleUtil_1.UkuleleUtil.isRepeat(e)||UkuleleUtil_1.UkuleleUtil.isInRepeat(e)?[2,e]:[2,this.dealWithComponent(e,r.template,r.controllerClazz,n)];case 3:return[3,10];case 4:if(!(e.children&&e.children.length>0))return[3,9];o=0,a.label=5;case 5:return o<e.children.length?(i=e.children[o],[4,this.searchComponent(i)]):[3,8];case 6:a.sent(),a.label=7;case 7:return o++,[3,5];case 8:case 9:return[2,e];case 10:return[2]}})})},Analyzer.prototype.dealWithComponent=function(e,t,n,r){return __awaiter(this,void 0,void 0,function(){var o,i,a,l,u,s,c,c,p,f,d;return __generator(this,function(h){switch(h.label){case 0:if(o="cc_"+Math.floor(1e4*Math.random()).toString(),t=t.replace(new RegExp("'cc\\.","gm"),"'"+o+"."),t=t.replace(new RegExp('"cc\\.',"gm"),'"'+o+"."),t=t.replace(new RegExp("{{cc\\.","gm"),"{{"+o+"."),t=t.replace(new RegExp(" cc\\.","gm")," "+o+"."),t=t.replace(new RegExp("\\(cc\\.","gm"),"("+o+"."),t=t.replace(new RegExp("\\,cc\\.","gm"),","+o+"."),t=t.replace(new RegExp("\\.cc\\.","gm"),"."+o+"."),t=t.replace(new RegExp("\\!cc\\.","gm"),"!"+o+"."),i=document.createElement("div"),i.insertAdjacentHTML("afterBegin",t),i.children.length>1&&(t=i.outerHTML),e.insertAdjacentHTML("beforeBegin",t),a=e.previousElementSibling,a.classList.add(e.localName),n)for(l=new n(this.uku),l._dom=a,l.fire=function(e,t,n,r){void 0===n&&(n=!1),void 0===r&&(r=!0);var o=new CustomEvent(e.toLowerCase(),{bubbles:n,cancelable:r});o.data=t,l._dom.dispatchEvent(o)},this.uku.registerController(o,l),u=function(e){var t=r[e];if(0!==UkuleleUtil_1.UkuleleUtil.searchUkuAttrTag(t.nodeName)||-1!==t.nodeName.search("uku-on")||"uku-render"===t.nodeName||"uku-visible"===t.nodeName)a.setAttribute(t.nodeName,t.nodeValue);else{var n=UkuleleUtil_1.UkuleleUtil.getAttrFromUkuTag(t.nodeName,!0),o=s.defMgr.getControllerModelByName(t.nodeValue);if(o&&o.length>0){var i=new BoundItemComponentAttribute_1.BoundItemComponentAttribute(t.nodeValue,n,l,s.uku),u=[];o.forEach(function(e){e.addBoundItem(i),u.push(e.controllerInstance)}),i.render(u)}else{new BoundItemComponentAttribute_1.BoundItemComponentAttribute(t.nodeValue,n,l,s.uku).render([])}}},s=this,c=0;c<r.length;c++)u(c);else for(c=0;c<r.length;c++)p=r[c],0===UkuleleUtil_1.UkuleleUtil.searchUkuAttrTag(p.nodeName)&&-1===p.nodeName.search("uku-on")&&"uku-render"!==p.nodeName&&"uku-visible"!==p.nodeName||a.setAttribute(p.nodeName,p.nodeValue);if(e.parentNode.removeChild(e),!(a.children&&a.children.length>0))return[3,5];f=0,h.label=1;case 1:return f<a.children.length?(d=a.children[f],[4,this.searchComponent(d)]):[3,4];case 2:h.sent(),h.label=3;case 3:return f++,[3,1];case 4:case 5:return l&&l._initialized&&"function"==typeof l._initialized&&l._initialized(o,l._dom),[2,a]}})})},Analyzer.prototype.searchExpression=function(e){-1!==UkuleleUtil_1.UkuleleUtil.searchUkuExpTag(Selector_1.Selector.directText(e))&&(UkuleleUtil_1.UkuleleUtil.isRepeat(e)||UkuleleUtil_1.UkuleleUtil.isInRepeat(e)||this.dealWithExpression(e));for(var t=0;t<e.children.length;t++)this.searchExpression(e.children[t])},Analyzer.prototype.dealWithExpression=function(e){var t=Selector_1.Selector.directText(e);if(-1!==UkuleleUtil_1.UkuleleUtil.searchUkuExpTag(t)){var n=t.slice(2,-2),r=this.defMgr.getControllerModelByName(n);if(r&&r.length>0){var o=new BoundItemExpression_1.BoundItemExpression(n,t,e,this.uku),i=[];r.forEach(function(e){e.addBoundItem(o),i.push(e.controllerInstance)}),o.render(i)}}},Analyzer.prototype.dealWithInnerText=function(e){var t=e.getAttribute("uku-text");if(t){var n=this.defMgr.getControllerModelByName(t);if(n&&n.length>0){var r=new BoundItemInnerText_1.BoundItemInnerText(t,e,this.uku),o=[];n.forEach(function(e){e.addBoundItem(r),o.push(e.controllerInstance)}),r.render(o)}}},Analyzer.prototype.dealWithEvent=function(element,eventName){var _this=this,expression=element.getAttribute("uku-"+eventName),eventNameInListener=eventName.substring(2);eventNameInListener=eventNameInListener.toLowerCase();var controllerModels=this.defMgr.getControllerModelByName(expression);controllerModels&&0!==controllerModels.length||(controllerModels=[]),EventListener_1.EventListener.addEventListener(element,eventNameInListener,function(event){var alias_list=[];controllerModels.forEach(function(e){_this.defMgr.copyControllerInstance(e.controllerInstance,controllerModels.alias),alias_list.push(e.alias)});var index=UkuleleUtil_1.UkuleleUtil.searchUkuFuncArg(expression);if(-1===index){var handler=new Function("event","return "+expression);console.log(handler.toString()),handler(event)}else{var i=expression.search(/\(/),arg="event";")"!==expression[i+1]&&(arg="event,");var arr=expression.split("(");arr[1]=arg+arr[1];var new_expression_1=arr.join("(");!function(e){var tempScope={};tempScope.event=e,eval(new_expression_1),tempScope=null}(event)}_this.uku.refresh(alias_list,element)})},Analyzer.prototype.dealWithRepeat=function(e){var t=e.getAttribute("uku-repeat"),n=t.split(" in "),r=n[0],o=n[1],i=this.defMgr.getControllerModelByName(o);if(i&&i.length>0){var a=[],l=new BoundItemRepeat_1.BoundItemRepeat(o,r,e,this.uku);i.forEach(function(e){e.addBoundItem(l),a.push(e.controllerInstance)}),l.render(a)}},Analyzer.ANALYIZE_COMPLETED="analyizeCompleted",Analyzer}(EventEmitter_1.EventEmitter);exports.Analyzer=Analyzer},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(19),o=n(20),i=n(21),a=n(22),l=n(23),u=n(24),s=n(25),c=n(26),p=n(1),f=function(){function e(){if(e._instance)throw new Error("Error: Instantiation failed: Use BoundItemAttributeFactory.getInstance() instead of new.");e._instance=this}return e.getInstance=function(){return e._instance},e.prototype.generateInstance=function(e,t,n,f){var d;switch(t){case"selected":d=new r.BountItemAttrSelected(e,t,n,f);break;case"data-item":d=new o.BoundItemAttrDataItem(e,t,n,f);break;case"src":d=new i.BoundItemAttrSrc(e,t,n,f);break;case"disabled":d=new a.BoundItemAttrDisabled(e,t,n,f);break;case"render":d=new l.BoundItemAttrRender(e,t,n,f);break;case"style":d=new u.BoundItemAttrStyle(e,t,n,f);break;case"value":d=new s.BoundItemAttrValue(e,t,n,f);break;case"visible":d=new c.BoundItemAttrVisible(e,t,n,f);break;default:d=new p.BoundItemAttribute(e,t,n,f)}return d},e._instance=new e,e}();t.BoundItemAttributeFactory=f},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(0),a=function(e){function t(t,n,r,o){if("selected"!==n)throw new TypeError("it doesn't use uku-selected");return e.call(this,t,n,r,o)||this}return r(t,e),t.prototype.render=function(e){var t,n=this.attributeName,r=this.element.tagName;if("SELECT"===r){var o=this.attributeName.split("|");n=o[0],t=o[1];var a=i.UkuleleUtil.getFinalValue(e,n),l=void 0;l=t?a[t]:a,this.element.value=l}if("INPUT"===r&&"radio"===this.element.getAttribute("type")){var a=i.UkuleleUtil.getFinalValue(e,n);this.element.value===a&&this.element.setAttribute("checked","true")}},t}(o.BoundItemAttribute);t.BountItemAttrSelected=a},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(0),a=function(e){function t(t,n,r,o){if("data-item"!==n)throw new TypeError("it doesn't use uku-item");return e.call(this,t,n,r,o)||this}return r(t,e),t.prototype.render=function(e){var t=this.attributeName,n=this.element.tagName,r=i.UkuleleUtil.getFinalValue(e,t);"OPTION"===n&&(r=JSON.stringify(r),this.element.setAttribute("data-item",r))},t}(o.BoundItemAttribute);t.BoundItemAttrDataItem=a},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(0),a=function(e){function t(t,n,r,o){if("src"!==n)throw new TypeError("it doesn't use uku-src");return e.call(this,t,n,r,o)||this}return r(t,e),t.prototype.render=function(e){var t=this.attributeName,n=this.element.tagName,r=i.UkuleleUtil.getFinalValue(e,t);if("IMG"!==n&&"VIDEO"!==n&&"AUDIO"!==n)throw new Error("uku-src doesn't work with current dom");r&&this.element.setAttribute(this.ukuTag,r)},t}(o.BoundItemAttribute);t.BoundItemAttrSrc=a},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(0),a=function(e){function t(t,n,r,o){if("disabled"!==n)throw new TypeError("it doesn't use uku-disabled");return e.call(this,t,n,r,o)||this}return r(t,e),t.prototype.render=function(e){var t=this.attributeName,n=(this.element.tagName,i.UkuleleUtil.getFinalValue(e,t));this.element.disabled=n},t}(o.BoundItemAttribute);t.BoundItemAttrDisabled=a},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(0),a=function(e){function t(t,n,r,o){if("render"!==n)throw new TypeError("it doesn't use uku-render");return e.call(this,t,n,r,o)||this}return r(t,e),t.prototype.render=function(e){var t=this.attributeName;this.element.tagName;if(i.UkuleleUtil.getFinalValue(e,t)){var n=this.element.getAttribute("data-old-display");null!==n&&(this.element.style.display=n)}else{var n=this.element.getAttribute("data-old-display");null===n&&(n=this.element.style.display,this.element.setAttribute("data-old-display",n)),this.element.style.display="none"}},t}(o.BoundItemAttribute);t.BoundItemAttrRender=a},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(0),a=function(e){function t(t,n,r,o){if("style"!==n)throw new TypeError("it doesn't use uku-style");return e.call(this,t,n,r,o)||this}return r(t,e),t.prototype.render=function(e){var t=this.attributeName,n=(this.element.tagName,i.UkuleleUtil.getFinalValue(e,t));for(var r in n)this.element.style[r]=n[r]},t}(o.BoundItemAttribute);t.BoundItemAttrStyle=a},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(0),a=function(e){function t(t,n,r,o){if("value"!==n)throw new TypeError("it doesn't use uku-value");return e.call(this,t,n,r,o)||this}return r(t,e),t.prototype.render=function(e){var t=this.attributeName,n=this.element.tagName,r=i.UkuleleUtil.getFinalValue(e,t);"INPUT"===n&&"checkbox"===this.element.getAttribute("type")?this.element.checked=r:this.element.value=r},t}(o.BoundItemAttribute);t.BoundItemAttrValue=a},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(0),a=function(e){function t(t,n,r,o){if("visible"!==n)throw new TypeError("it doesn't use uku-visible");return e.call(this,t,n,r,o)||this}return r(t,e),t.prototype.render=function(e){var t=this.attributeName,n=(this.element.tagName,i.UkuleleUtil.getFinalValue(e,t));this.element.style.visibility=n?"visible":"hidden"},t}(o.BoundItemAttribute);t.BoundItemAttrVisible=a},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),i=n(0),a=n(2),l=function(e){function t(t,n,r,o){var i=e.call(this,t,r,o)||this;return i.expression=n,i}return r(t,e),t.prototype.render=function(e){var t=i.UkuleleUtil.getFinalValue(e,this.attributeName);a.Selector.directText(this.element,t)},t}(o.BoundItemBase);t.BoundItemExpression=l},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),i=n(0),a=function(e){function t(t,n,r){var o=e.call(this,t,n,r)||this;return o.tagName="text",o}return r(t,e),t.prototype.render=function(e){var t=i.UkuleleUtil.getFinalValue(e,this.attributeName);this.element.innerHTML=t},t}(o.BoundItemBase);t.BoundItemInnerText=a},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),i=n(0),a=function(e){function t(t,n,r,o){var i=e.call(this,t,r,o)||this;return i.expression=n,i.renderTemplate=r.outerHTML,i.parentElement=r.parentNode,i.beginCommentString=void 0,i.endCommentString=void 0,i}return r(t,e),t.prototype.render=function(e){function t(){var e=i.UkuleleUtil.searchHtmlTag(o.renderTemplate,"tr"),t=i.UkuleleUtil.searchHtmlTag(o.renderTemplate,"th");return-1===e||-1===t?document.createElement("tbody"):document.createElement("div")}var n=this,r=i.UkuleleUtil.getFinalValue(e,this.attributeName);if(r){var o=this;if(this.element&&this.element.parentNode){this.beginCommentString="begin uku-repeat: "+this.expression+" in "+this.attributeName;var a=document.createComment(this.beginCommentString);this.element.parentNode.insertBefore(a,this.element),this.endCommentString="end uku-repeat: "+this.expression+" in "+this.attributeName;var l=document.createComment(this.endCommentString);this.element.parentNode.insertBefore(l,this.element.nextSibling),this.element.parentNode.removeChild(this.element)}var u={acceptNode:function(e){return e.nodeValue===o.beginCommentString?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}},s=u.acceptNode;s.acceptNode=u.acceptNode;for(var c=document.createTreeWalker(this.parentElement,NodeFilter.SHOW_COMMENT,s,!1);c.nextNode();){var p=c.currentNode;if(p&&p.nodeValue===this.beginCommentString){for(;p.nextSibling&&p.nextSibling.nodeValue!==this.endCommentString;)p.parentNode.removeChild(p.nextSibling);var f=t(),d=t();p.parentNode.insertBefore(d,p.nextSibling);for(var h=0;h<r.length;h++)if(f.insertAdjacentHTML("beforeEnd",this.renderTemplate),h===r.length-1){var _=f.innerHTML;d.insertAdjacentHTML("beforeBegin",_),p.parentNode.removeChild(d),f=null,d=null}for(var m=p.nextElementSibling,v=0;v<r.length;v++){m.removeAttribute("uku-repeat");var y=this.uku.constructor,g=new y;g.parentUku=this.uku;var b=g.parentUku._internal_getDefinitionManager().getComponentsDefinition(),k=g.parentUku._internal_getDefinitionManager().getComponentsPool();g._internal_getDefinitionManager().setComponentsDefinition(b),g._internal_getDefinitionManager().setComponentsPool(k);var U=m.nextSibling,w=typeof r[v],E="repeatItem_"+Math.floor(1e4*Math.random()).toString()+"_"+this.expression;"object"===w?g.registerController(E,r[v]):(g.registerController(E,{value:r[v]}),E+=".value");var C=new RegExp("\\b"+this.expression+"(?!\\-|\\s|\\w|\\=)","gm"),A=m.outerHTML.replace(C,E);m.insertAdjacentHTML("afterend",A);var I=m.nextSibling;m.parentNode.removeChild(m),m=I,g._internal_dealWithElement(m,function(e){if("OPTION"===n.element.tagName){var t=n.parentElement.getAttribute("uku-selected"),r=t.split("|");t=r[0];var o=r[1],i=n.uku._internal_getDefinitionManager().getFinalValueByExpression(t);n.parentElement.value=o?i[o]:i}}),m=U}}}}},t}(o.BoundItemBase);t.BoundItemRepeat=a},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),i=n(0),a=function(e){function t(t,n,r,o){var i=e.call(this,t,null,o)||this;return i.ukuTag=n,i.componentController=r,i}return r(t,e),t.prototype.render=function(e){var t=i.UkuleleUtil.getFinalValue(e,this.attributeName);this.componentController[this.ukuTag]=t,this.uku.refresh(this.componentController._alias)},t}(o.BoundItemBase);t.BoundItemComponentAttribute=a},function(e,t,n){"use strict";function r(e,t,n,r,i){for(var c=[o,a,l,u,s],p=0;p<c.length;p++){if(c[p].apply(this,arguments))break}}function o(e,t,n,r,o){if("INPUT"===e.tagName&&i(e)&&"value"===t){var a="change",l=e.getAttribute("type");return"text"!==l&&"text"!==l&&"password"!==l&&"tel"!==l&&"number"!==l&&"search"!==l||(a="input"),p.EventListener.addEventListener(e,a,function(i){var a=e.getAttribute("uku-"+t);c.UkuleleUtil.setFinalValue(n.controllerInstance,a,e.value),r&&r.call(o,n.alias,e)}),!0}return!1}function i(e){var t=e.getAttribute("type");return"checkbox"!==t&&"radio"!==t}function a(e,t,n,r,o){return"TEXTAREA"===e.tagName&&"value"===t&&(p.EventListener.addEventListener(e,"input",function(i){var a=e.getAttribute("uku-"+t);c.UkuleleUtil.setFinalValue(n.controllerInstance,a,e.value),r&&r.call(o,n.alias,e)}),!0)}function l(e,t,n,r,o){return"SELECT"===e.tagName&&"selected"===t&&(p.EventListener.addEventListener(e,"change",function(i){var a=e.getAttribute("uku-"+t);a=a.split("|")[0];for(var l=f.Selector.querySelectorAll(e,"option"),u=0;u<l.length;u++){var s=l[u];if(s.selected){var p=JSON.parse(s.getAttribute("data-item"));c.UkuleleUtil.setFinalValue(n.controllerInstance,a,p)}}r&&r.call(o,n.alias,e)}),!0)}function u(e,t,n,r,o){return"INPUT"===e.tagName&&"value"===t&&"checkbox"===e.getAttribute("type")&&(p.EventListener.addEventListener(e,"change",function(i){var a=e.getAttribute("uku-"+t);c.UkuleleUtil.setFinalValue(n.controllerInstance,a,e.checked),r&&r.call(o,n.alias,e)}),!0)}function s(e,t,n,r,o){return"INPUT"===e.tagName&&"selected"===t&&"radio"===e.getAttribute("type")&&(p.EventListener.addEventListener(e,"change",function(i){var a=e.getAttribute("uku-"+t);e.checked&&(c.UkuleleUtil.setFinalValue(n.controllerInstance,a,e.value),r&&r.call(o,n.alias,e))}),!0)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),p=n(8),f=n(2);t.elementChangedBinder=r}])});


/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ukulelejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ukulelejs */ "./node_modules/ukulelejs/dist/uku.js");
/* harmony import */ var ukulelejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ukulelejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uku_routejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uku-routejs */ "./node_modules/uku-routejs/dist/uku-router.js");
/* harmony import */ var uku_routejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uku_routejs__WEBPACK_IMPORTED_MODULE_1__);



var Ukulelejs = ukulelejs__WEBPACK_IMPORTED_MODULE_0__["Ukulele"];
var uku = new Ukulelejs();
uku.registerComponent('my-footer','./components/footer.html');
uku.registerComponent('my-navigator', './components/navigator.html');
uku.registerComponent('home-view', './components/home-view.html');
uku.registerComponent('tags-view', './components/tags-view.html');
uku.registerComponent('article-item', './components/article-item.html');
uku.registerComponent('login-form', './components/login-form.html');
uku.registerComponent('register-form', './components/register-form.html');
uku.init();

uku.addListener(Ukulelejs.INITIALIZED, (e)=> {
    route.work();
    // route.onRouteChange = function(page){
    //     uku.handleElement(page.page);
    // }
});

uku.addListener(Ukulelejs.HANDLE_ELEMENT_COMPLETED, (e)=> {
    console.log(e);
});

var route = new uku_routejs__WEBPACK_IMPORTED_MODULE_1__["UkuRouter"]('viewContainer')
    .default('#/', './pages/home.html', routeHomeHandler)
    .when('#/login', './pages/login.html', routeLoginHandler)
    .when('#/register', './pages/register.html', routeRegisterHandler)
    .when('#/settings', './pages/settings.html', routeSettingsHandler)
    .when('#/editor', './pages/edit_article.html', routeCreateArticleHandler)
    .when('#/editor/:articleId', './pages/edit_article.html', routeEditArticleHandler)
    .when('#/article/:articleId', './pages/view_article.html', reouteViewArticleHandler)
    .when('#/profile/:username', './pages/profile.html' , routeUserProfileHandler)
    .when('#/profile/:username/favorites', './pages/profile.html',routeUserProfileHandler)
    .otherwise("pages/404.html");

function routeHomeHandler(page){
    uku.handleElement(page.page);
}
function routeLoginHandler(pages){
    uku.handleElement(page.page);
}
function routeRegisterHandler(pages){
    uku.handleElement(page.page);
}
function routeSettingsHandler(pages){
    uku.handleElement(page.page);
}
function routeCreateArticleHandler(pages){
    uku.handleElement(page.page);
}
function routeEditArticleHandler(pages,params){
    uku.handleElement(page.page);
}
function reouteViewArticleHandler(pages,params){
    uku.handleElement(page.page);
}

function routeUserProfileHandler(page, username){
    uku.handleElement(page.page);
    if(username){
        console.log(username);
    }
}


/***/ })

/******/ });
});
//# sourceMappingURL=main.js.map