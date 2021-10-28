"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.get = get;
exports.set = set;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function set(url, options) {
  /* Constructing Parameters passed */
  if (!url && !options) {
    return '';
  }

  if (url) {
    if ((0, _typeof2["default"])(url) === 'object') {
      options = url;
      url = '';
    }
  } else {
    url = '';
  }

  if (!options) {
    options = {};
  }

  if (!url && options && options.url) {
    url = options.url;
  }
  /* Removing last slash if present */


  url = url.replace(/(.*)\/$/, "$1");
  /* Supplying options */

  if (options) {
    var qs = [];
    var temp = get(url);
    options.query = _objectSpread(_objectSpread({}, temp || {}), options.query);

    if (options.query) {
      url = url.replace(/(.*)\/$/, "$1");

      for (var key in options.query) {
        if (options.query[key] !== undefined && options.query[key] !== null) {
          qs.push("".concat(key, "=").concat(encodeURIComponent(String(options.query[key]).trim())));
        }
      }
    }

    url = url.replace(/(.*)\?.*$/, "$1");
    return "".concat(url).concat(qs.length > 0 ? "?".concat(qs.join('&')) : '');
    ;
  }
}

function get(url, key) {
  try {
    var extra = url.match(/.*\?(.*)$/);

    if (extra) {
      if (extra[1]) {
        var obj = {};
        var params = extra[1].split('&');

        if (params && params.length > 0) {
          for (var i = 0; i < params.length; i++) {
            var temp = params[i].split('=');
            obj[temp[0]] = decodeURIComponent(temp[1] || true);
          }
        }

        if (key) {
          return obj[key];
        }

        return obj;
      }
    }
  } catch (e) {
    console.log(e);
  }

  return undefined;
}

var _default = {
  set: set,
  get: get
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzZXQiLCJ1cmwiLCJvcHRpb25zIiwicmVwbGFjZSIsInFzIiwidGVtcCIsImdldCIsInF1ZXJ5Iiwia2V5IiwidW5kZWZpbmVkIiwicHVzaCIsImVuY29kZVVSSUNvbXBvbmVudCIsIlN0cmluZyIsInRyaW0iLCJsZW5ndGgiLCJqb2luIiwiZXh0cmEiLCJtYXRjaCIsIm9iaiIsInBhcmFtcyIsInNwbGl0IiwiaSIsImRlY29kZVVSSUNvbXBvbmVudCIsImUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsR0FBVCxDQUFhQyxHQUFiLEVBQWtCQyxPQUFsQixFQUEyQjtBQUUxQjtBQUNBLE1BQUksQ0FBQ0QsR0FBRCxJQUFRLENBQUNDLE9BQWIsRUFBc0I7QUFDckIsV0FBTyxFQUFQO0FBQ0E7O0FBQ0QsTUFBSUQsR0FBSixFQUFTO0FBQ1IsUUFBSSx5QkFBT0EsR0FBUCxNQUFnQixRQUFwQixFQUE4QjtBQUM3QkMsTUFBQUEsT0FBTyxHQUFHRCxHQUFWO0FBQ0FBLE1BQUFBLEdBQUcsR0FBRyxFQUFOO0FBQ0E7QUFDRCxHQUxELE1BS087QUFDTkEsSUFBQUEsR0FBRyxHQUFHLEVBQU47QUFDQTs7QUFDRCxNQUFJLENBQUNDLE9BQUwsRUFBYztBQUNiQSxJQUFBQSxPQUFPLEdBQUcsRUFBVjtBQUNBOztBQUNELE1BQUksQ0FBQ0QsR0FBRCxJQUFRQyxPQUFSLElBQW1CQSxPQUFPLENBQUNELEdBQS9CLEVBQW9DO0FBQ25DQSxJQUFBQSxHQUFHLEdBQUdDLE9BQU8sQ0FBQ0QsR0FBZDtBQUNBO0FBRUQ7OztBQUNBQSxFQUFBQSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0UsT0FBSixDQUFZLFNBQVosRUFBdUIsSUFBdkIsQ0FBTjtBQUVBOztBQUNBLE1BQUlELE9BQUosRUFBYTtBQUNaLFFBQU1FLEVBQUUsR0FBRyxFQUFYO0FBQ0EsUUFBTUMsSUFBSSxHQUFHQyxHQUFHLENBQUNMLEdBQUQsQ0FBaEI7QUFDQUMsSUFBQUEsT0FBTyxDQUFDSyxLQUFSLG1DQUNLRixJQUFJLElBQUksRUFEYixHQUVJSCxPQUFPLENBQUNLLEtBRlo7O0FBSUEsUUFBSUwsT0FBTyxDQUFDSyxLQUFaLEVBQW1CO0FBQ2xCTixNQUFBQSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0UsT0FBSixDQUFZLFNBQVosRUFBdUIsSUFBdkIsQ0FBTjs7QUFDQSxXQUFJLElBQU1LLEdBQVYsSUFBaUJOLE9BQU8sQ0FBQ0ssS0FBekIsRUFBZ0M7QUFDL0IsWUFBSUwsT0FBTyxDQUFDSyxLQUFSLENBQWNDLEdBQWQsTUFBdUJDLFNBQXZCLElBQW9DUCxPQUFPLENBQUNLLEtBQVIsQ0FBY0MsR0FBZCxNQUF1QixJQUEvRCxFQUFxRTtBQUNwRUosVUFBQUEsRUFBRSxDQUFDTSxJQUFILFdBQVdGLEdBQVgsY0FBa0JHLGtCQUFrQixDQUFDQyxNQUFNLENBQUNWLE9BQU8sQ0FBQ0ssS0FBUixDQUFjQyxHQUFkLENBQUQsQ0FBTixDQUEyQkssSUFBM0IsRUFBRCxDQUFwQztBQUNBO0FBQ0Q7QUFDRDs7QUFDRFosSUFBQUEsR0FBRyxHQUFHQSxHQUFHLENBQUNFLE9BQUosQ0FBWSxXQUFaLEVBQXlCLElBQXpCLENBQU47QUFDQSxxQkFBVUYsR0FBVixTQUFnQkcsRUFBRSxDQUFDVSxNQUFILEdBQVksQ0FBWixjQUFvQlYsRUFBRSxDQUFDVyxJQUFILENBQVEsR0FBUixDQUFwQixJQUFxQyxFQUFyRDtBQUEwRDtBQUMxRDtBQUNEOztBQUVELFNBQVNULEdBQVQsQ0FBYUwsR0FBYixFQUFrQk8sR0FBbEIsRUFBdUI7QUFDdEIsTUFBSTtBQUNILFFBQU1RLEtBQUssR0FBR2YsR0FBRyxDQUFDZ0IsS0FBSixDQUFVLFdBQVYsQ0FBZDs7QUFDQSxRQUFJRCxLQUFKLEVBQVc7QUFDVixVQUFJQSxLQUFLLENBQUMsQ0FBRCxDQUFULEVBQWM7QUFDYixZQUFNRSxHQUFHLEdBQUcsRUFBWjtBQUNBLFlBQU1DLE1BQU0sR0FBR0gsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTSSxLQUFULENBQWUsR0FBZixDQUFmOztBQUNBLFlBQUlELE1BQU0sSUFBSUEsTUFBTSxDQUFDTCxNQUFQLEdBQWdCLENBQTlCLEVBQWlDO0FBQ2hDLGVBQUssSUFBSU8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsTUFBTSxDQUFDTCxNQUEzQixFQUFtQ08sQ0FBQyxFQUFwQyxFQUF3QztBQUN2QyxnQkFBTWhCLElBQUksR0FBR2MsTUFBTSxDQUFDRSxDQUFELENBQU4sQ0FBVUQsS0FBVixDQUFnQixHQUFoQixDQUFiO0FBQ0FGLFlBQUFBLEdBQUcsQ0FBQ2IsSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUFILEdBQWVpQixrQkFBa0IsQ0FBQ2pCLElBQUksQ0FBQyxDQUFELENBQUosSUFBVyxJQUFaLENBQWpDO0FBQ0E7QUFDRDs7QUFDRCxZQUFJRyxHQUFKLEVBQVM7QUFDUixpQkFBT1UsR0FBRyxDQUFDVixHQUFELENBQVY7QUFDQTs7QUFDRCxlQUFPVSxHQUFQO0FBQ0E7QUFDRDtBQUNELEdBbEJELENBa0JFLE9BQU9LLENBQVAsRUFBVTtBQUNYQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBOztBQUNELFNBQU9kLFNBQVA7QUFDQTs7ZUFNYztBQUNkVCxFQUFBQSxHQUFHLEVBQUhBLEdBRGM7QUFDVE0sRUFBQUEsR0FBRyxFQUFIQTtBQURTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzZXQodXJsLCBvcHRpb25zKSB7XG5cblx0LyogQ29uc3RydWN0aW5nIFBhcmFtZXRlcnMgcGFzc2VkICovXG5cdGlmICghdXJsICYmICFvcHRpb25zKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdGlmICh1cmwpIHtcblx0XHRpZiAodHlwZW9mKHVybCkgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRvcHRpb25zID0gdXJsO1xuXHRcdFx0dXJsID0gJyc7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHVybCA9ICcnO1xuXHR9XG5cdGlmICghb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSB7fTtcblx0fVxuXHRpZiAoIXVybCAmJiBvcHRpb25zICYmIG9wdGlvbnMudXJsKSB7XG5cdFx0dXJsID0gb3B0aW9ucy51cmw7XG5cdH1cblxuXHQvKiBSZW1vdmluZyBsYXN0IHNsYXNoIGlmIHByZXNlbnQgKi9cblx0dXJsID0gdXJsLnJlcGxhY2UoLyguKilcXC8kLywgXCIkMVwiKVxuXG5cdC8qIFN1cHBseWluZyBvcHRpb25zICovXG5cdGlmIChvcHRpb25zKSB7XG5cdFx0Y29uc3QgcXMgPSBbXTtcblx0XHRjb25zdCB0ZW1wID0gZ2V0KHVybCk7XG5cdFx0b3B0aW9ucy5xdWVyeSA9IHtcblx0XHRcdC4uLih0ZW1wIHx8IHt9KSxcblx0XHRcdC4uLm9wdGlvbnMucXVlcnksXG5cdFx0fTtcblx0XHRpZiAob3B0aW9ucy5xdWVyeSkge1xuXHRcdFx0dXJsID0gdXJsLnJlcGxhY2UoLyguKilcXC8kLywgXCIkMVwiKVxuXHRcdFx0Zm9yKGNvbnN0IGtleSBpbiBvcHRpb25zLnF1ZXJ5KSB7XG5cdFx0XHRcdGlmIChvcHRpb25zLnF1ZXJ5W2tleV0gIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLnF1ZXJ5W2tleV0gIT09IG51bGwpIHtcblx0XHRcdFx0XHRxcy5wdXNoKGAke2tleX09JHtlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKG9wdGlvbnMucXVlcnlba2V5XSkudHJpbSgpKX1gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHR1cmwgPSB1cmwucmVwbGFjZSgvKC4qKVxcPy4qJC8sIFwiJDFcIik7XG5cdFx0cmV0dXJuIGAke3VybH0ke3FzLmxlbmd0aCA+IDAgPyBgPyR7cXMuam9pbignJicpfWAgOiAnJ31gOztcblx0fVxufVxuXG5mdW5jdGlvbiBnZXQodXJsLCBrZXkpIHtcblx0dHJ5IHtcblx0XHRjb25zdCBleHRyYSA9IHVybC5tYXRjaCgvLipcXD8oLiopJC8pO1xuXHRcdGlmIChleHRyYSkge1xuXHRcdFx0aWYgKGV4dHJhWzFdKSB7XG5cdFx0XHRcdGNvbnN0IG9iaiA9IHt9O1xuXHRcdFx0XHRjb25zdCBwYXJhbXMgPSBleHRyYVsxXS5zcGxpdCgnJicpO1xuXHRcdFx0XHRpZiAocGFyYW1zICYmIHBhcmFtcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGNvbnN0IHRlbXAgPSBwYXJhbXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdFx0XHRcdG9ialt0ZW1wWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudCh0ZW1wWzFdIHx8IHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoa2V5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9ialtrZXldO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBvYmo7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGNhdGNoIChlKSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdH1cblx0cmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IHtcblx0c2V0LCBnZXQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHNldCwgZ2V0LFxufTsiXX0=