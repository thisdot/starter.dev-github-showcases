import {
  __toESM,
  init_react,
  require_react
} from "/_static/build/_shared/chunk-6BO74FWO.js";

// node_modules/@headlessui/react/dist/components/menu/menu.esm.js
init_react();

// node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js
init_react();
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return {
            done: true
          };
        return {
          done: false,
          value: o[i++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

// node_modules/@headlessui/react/dist/components/menu/menu.esm.js
var import_react11 = __toESM(require_react());

// node_modules/@headlessui/react/dist/utils/match.esm.js
init_react();
function match(value, lookup) {
  if (value in lookup) {
    var returnValue = lookup[value];
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    return typeof returnValue === "function" ? returnValue.apply(void 0, args) : returnValue;
  }
  var error = new Error('Tried to handle "' + value + '" but there is no handler defined. Only defined handlers are: ' + Object.keys(lookup).map(function(key) {
    return '"' + key + '"';
  }).join(", ") + ".");
  if (Error.captureStackTrace)
    Error.captureStackTrace(error, match);
  throw error;
}

// node_modules/@headlessui/react/dist/utils/render.esm.js
init_react();
var import_react = __toESM(require_react());
var Features;
(function(Features2) {
  Features2[Features2["None"] = 0] = "None";
  Features2[Features2["RenderStrategy"] = 1] = "RenderStrategy";
  Features2[Features2["Static"] = 2] = "Static";
})(Features || (Features = {}));
var RenderStrategy;
(function(RenderStrategy2) {
  RenderStrategy2[RenderStrategy2["Unmount"] = 0] = "Unmount";
  RenderStrategy2[RenderStrategy2["Hidden"] = 1] = "Hidden";
})(RenderStrategy || (RenderStrategy = {}));
function render(_ref) {
  var props = _ref.props, slot = _ref.slot, defaultTag = _ref.defaultTag, features = _ref.features, _ref$visible = _ref.visible, visible = _ref$visible === void 0 ? true : _ref$visible, name = _ref.name;
  if (visible)
    return _render(props, slot, defaultTag, name);
  var featureFlags = features != null ? features : Features.None;
  if (featureFlags & Features.Static) {
    var _props$static = props["static"], isStatic = _props$static === void 0 ? false : _props$static, rest = _objectWithoutPropertiesLoose(props, ["static"]);
    if (isStatic)
      return _render(rest, slot, defaultTag, name);
  }
  if (featureFlags & Features.RenderStrategy) {
    var _match;
    var _props$unmount = props.unmount, unmount = _props$unmount === void 0 ? true : _props$unmount, _rest = _objectWithoutPropertiesLoose(props, ["unmount"]);
    var strategy = unmount ? RenderStrategy.Unmount : RenderStrategy.Hidden;
    return match(strategy, (_match = {}, _match[RenderStrategy.Unmount] = function() {
      return null;
    }, _match[RenderStrategy.Hidden] = function() {
      return _render(_extends({}, _rest, {
        hidden: true,
        style: {
          display: "none"
        }
      }), slot, defaultTag, name);
    }, _match));
  }
  return _render(props, slot, defaultTag, name);
}
function _render(props, slot, tag, name) {
  var _ref2;
  if (slot === void 0) {
    slot = {};
  }
  var _omit = omit(props, ["unmount", "static"]), _omit$as = _omit.as, Component = _omit$as === void 0 ? tag : _omit$as, children = _omit.children, _omit$refName = _omit.refName, refName = _omit$refName === void 0 ? "ref" : _omit$refName, passThroughProps = _objectWithoutPropertiesLoose(_omit, ["as", "children", "refName"]);
  var refRelatedProps = props.ref !== void 0 ? (_ref2 = {}, _ref2[refName] = props.ref, _ref2) : {};
  var resolvedChildren = typeof children === "function" ? children(slot) : children;
  if (passThroughProps.className && typeof passThroughProps.className === "function") {
    passThroughProps.className = passThroughProps.className(slot);
  }
  if (Component === import_react.Fragment) {
    if (Object.keys(passThroughProps).length > 0) {
      if (!(0, import_react.isValidElement)(resolvedChildren) || Array.isArray(resolvedChildren) && resolvedChildren.length > 1) {
        throw new Error(['Passing props on "Fragment"!', "", "The current component <" + name + ' /> is rendering a "Fragment".', "However we need to passthrough the following props:", Object.keys(passThroughProps).map(function(line) {
          return "  - " + line;
        }).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(function(line) {
          return "  - " + line;
        }).join("\n")].join("\n"));
      }
      return (0, import_react.cloneElement)(resolvedChildren, Object.assign({}, mergeEventFunctions(compact(omit(passThroughProps, ["ref"])), resolvedChildren.props, ["onClick"]), refRelatedProps));
    }
  }
  return (0, import_react.createElement)(Component, Object.assign({}, omit(passThroughProps, ["ref"]), Component !== import_react.Fragment && refRelatedProps), resolvedChildren);
}
function mergeEventFunctions(passThroughProps, existingProps, functionsToMerge) {
  var clone = Object.assign({}, passThroughProps);
  var _loop = function _loop2() {
    var func = _step.value;
    if (passThroughProps[func] !== void 0 && existingProps[func] !== void 0) {
      var _Object$assign;
      Object.assign(clone, (_Object$assign = {}, _Object$assign[func] = function(event) {
        if (!event.defaultPrevented)
          passThroughProps[func](event);
        if (!event.defaultPrevented)
          existingProps[func](event);
      }, _Object$assign));
    }
  };
  for (var _iterator = _createForOfIteratorHelperLoose(functionsToMerge), _step; !(_step = _iterator()).done; ) {
    _loop();
  }
  return clone;
}
function forwardRefWithAs(component) {
  var _component$displayNam;
  return Object.assign((0, import_react.forwardRef)(component), {
    displayName: (_component$displayNam = component.displayName) != null ? _component$displayNam : component.name
  });
}
function compact(object) {
  var clone = Object.assign({}, object);
  for (var key in clone) {
    if (clone[key] === void 0)
      delete clone[key];
  }
  return clone;
}
function omit(object, keysToOmit) {
  if (keysToOmit === void 0) {
    keysToOmit = [];
  }
  var clone = Object.assign({}, object);
  for (var _iterator2 = _createForOfIteratorHelperLoose(keysToOmit), _step2; !(_step2 = _iterator2()).done; ) {
    var key = _step2.value;
    if (key in clone)
      delete clone[key];
  }
  return clone;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js
init_react();
var import_react2 = __toESM(require_react());
function useSyncRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  var cache = (0, import_react2.useRef)(refs);
  (0, import_react2.useEffect)(function() {
    cache.current = refs;
  }, [refs]);
  return (0, import_react2.useCallback)(function(value) {
    for (var _iterator = _createForOfIteratorHelperLoose(cache.current), _step; !(_step = _iterator()).done; ) {
      var ref = _step.value;
      if (ref == null)
        continue;
      if (typeof ref === "function")
        ref(value);
      else
        ref.current = value;
    }
  }, [cache]);
}

// node_modules/@headlessui/react/dist/components/keyboard.esm.js
init_react();
var Keys;
(function(Keys2) {
  Keys2["Space"] = " ";
  Keys2["Enter"] = "Enter";
  Keys2["Escape"] = "Escape";
  Keys2["Backspace"] = "Backspace";
  Keys2["ArrowLeft"] = "ArrowLeft";
  Keys2["ArrowUp"] = "ArrowUp";
  Keys2["ArrowRight"] = "ArrowRight";
  Keys2["ArrowDown"] = "ArrowDown";
  Keys2["Home"] = "Home";
  Keys2["End"] = "End";
  Keys2["PageUp"] = "PageUp";
  Keys2["PageDown"] = "PageDown";
  Keys2["Tab"] = "Tab";
})(Keys || (Keys = {}));

// node_modules/@headlessui/react/dist/utils/bugs.esm.js
init_react();
function isDisabledReactIssue7711(element) {
  var _ref, _parent;
  var parent = element.parentElement;
  var legend = null;
  while (parent && !(parent instanceof HTMLFieldSetElement)) {
    if (parent instanceof HTMLLegendElement)
      legend = parent;
    parent = parent.parentElement;
  }
  var isParentDisabled = (_ref = ((_parent = parent) == null ? void 0 : _parent.getAttribute("disabled")) === "") != null ? _ref : false;
  if (isParentDisabled && isFirstLegend(legend))
    return false;
  return isParentDisabled;
}
function isFirstLegend(element) {
  if (!element)
    return false;
  var previous = element.previousElementSibling;
  while (previous !== null) {
    if (previous instanceof HTMLLegendElement)
      return false;
    previous = previous.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js
init_react();
var import_react3 = __toESM(require_react());
var useIsoMorphicEffect = typeof window !== "undefined" ? import_react3.useLayoutEffect : import_react3.useEffect;

// node_modules/@headlessui/react/dist/hooks/use-id.esm.js
init_react();
var import_react5 = __toESM(require_react());

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js
init_react();
var import_react4 = __toESM(require_react());
var state = {
  serverHandoffComplete: false
};
function useServerHandoffComplete() {
  var _useState = (0, import_react4.useState)(state.serverHandoffComplete), serverHandoffComplete = _useState[0], setServerHandoffComplete = _useState[1];
  (0, import_react4.useEffect)(function() {
    if (serverHandoffComplete === true)
      return;
    setServerHandoffComplete(true);
  }, [serverHandoffComplete]);
  (0, import_react4.useEffect)(function() {
    if (state.serverHandoffComplete === false)
      state.serverHandoffComplete = true;
  }, []);
  return serverHandoffComplete;
}

// node_modules/@headlessui/react/dist/hooks/use-id.esm.js
var id = 0;
function generateId() {
  return ++id;
}
function useId() {
  var ready = useServerHandoffComplete();
  var _useState = (0, import_react5.useState)(ready ? generateId : null), id2 = _useState[0], setId = _useState[1];
  useIsoMorphicEffect(function() {
    if (id2 === null)
      setId(generateId());
  }, [id2]);
  return id2 != null ? "" + id2 : void 0;
}

// node_modules/@headlessui/react/dist/utils/focus-management.esm.js
init_react();
var focusableSelector = /* @__PURE__ */ ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(false ? function(selector) {
  return selector + ":not([tabindex='-1']):not([style*='display: none'])";
} : function(selector) {
  return selector + ":not([tabindex='-1'])";
}).join(",");
var Focus;
(function(Focus3) {
  Focus3[Focus3["First"] = 1] = "First";
  Focus3[Focus3["Previous"] = 2] = "Previous";
  Focus3[Focus3["Next"] = 4] = "Next";
  Focus3[Focus3["Last"] = 8] = "Last";
  Focus3[Focus3["WrapAround"] = 16] = "WrapAround";
  Focus3[Focus3["NoScroll"] = 32] = "NoScroll";
})(Focus || (Focus = {}));
var FocusResult;
(function(FocusResult2) {
  FocusResult2[FocusResult2["Error"] = 0] = "Error";
  FocusResult2[FocusResult2["Overflow"] = 1] = "Overflow";
  FocusResult2[FocusResult2["Success"] = 2] = "Success";
  FocusResult2[FocusResult2["Underflow"] = 3] = "Underflow";
})(FocusResult || (FocusResult = {}));
var Direction;
(function(Direction2) {
  Direction2[Direction2["Previous"] = -1] = "Previous";
  Direction2[Direction2["Next"] = 1] = "Next";
})(Direction || (Direction = {}));
var FocusableMode;
(function(FocusableMode2) {
  FocusableMode2[FocusableMode2["Strict"] = 0] = "Strict";
  FocusableMode2[FocusableMode2["Loose"] = 1] = "Loose";
})(FocusableMode || (FocusableMode = {}));
function isFocusableElement(element, mode) {
  var _match;
  if (mode === void 0) {
    mode = FocusableMode.Strict;
  }
  if (element === document.body)
    return false;
  return match(mode, (_match = {}, _match[FocusableMode.Strict] = function() {
    return element.matches(focusableSelector);
  }, _match[FocusableMode.Loose] = function() {
    var next = element;
    while (next !== null) {
      if (next.matches(focusableSelector))
        return true;
      next = next.parentElement;
    }
    return false;
  }, _match));
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.esm.js
init_react();
var import_react6 = __toESM(require_react());
function useWindowEvent(type, listener, options) {
  var listenerRef = (0, import_react6.useRef)(listener);
  listenerRef.current = listener;
  (0, import_react6.useEffect)(function() {
    function handler(event) {
      listenerRef.current.call(window, event);
    }
    window.addEventListener(type, handler, options);
    return function() {
      return window.removeEventListener(type, handler, options);
    };
  }, [type, options]);
}

// node_modules/@headlessui/react/dist/internal/open-closed.esm.js
init_react();
var import_react7 = __toESM(require_react());
var Context = /* @__PURE__ */ (0, import_react7.createContext)(null);
Context.displayName = "OpenClosedContext";
var State;
(function(State2) {
  State2[State2["Open"] = 0] = "Open";
  State2[State2["Closed"] = 1] = "Closed";
})(State || (State = {}));
function useOpenClosed() {
  return (0, import_react7.useContext)(Context);
}
function OpenClosedProvider(_ref) {
  var value = _ref.value, children = _ref.children;
  return import_react7.default.createElement(Context.Provider, {
    value
  }, children);
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.esm.js
init_react();
var import_react8 = __toESM(require_react());
function resolveType(props) {
  var _props$as;
  if (props.type)
    return props.type;
  var tag = (_props$as = props.as) != null ? _props$as : "button";
  if (typeof tag === "string" && tag.toLowerCase() === "button")
    return "button";
  return void 0;
}
function useResolveButtonType(props, ref) {
  var _useState = (0, import_react8.useState)(function() {
    return resolveType(props);
  }), type = _useState[0], setType = _useState[1];
  useIsoMorphicEffect(function() {
    setType(resolveType(props));
  }, [props.type, props.as]);
  useIsoMorphicEffect(function() {
    if (type)
      return;
    if (!ref.current)
      return;
    if (ref.current instanceof HTMLButtonElement && !ref.current.hasAttribute("type")) {
      setType("button");
    }
  }, [type, ref]);
  return type;
}

// node_modules/@headlessui/react/dist/utils/disposables.esm.js
init_react();
function disposables() {
  var disposables2 = [];
  var api = {
    requestAnimationFrame: function(_requestAnimationFrame) {
      function requestAnimationFrame2() {
        return _requestAnimationFrame.apply(this, arguments);
      }
      requestAnimationFrame2.toString = function() {
        return _requestAnimationFrame.toString();
      };
      return requestAnimationFrame2;
    }(function() {
      var raf = requestAnimationFrame.apply(void 0, arguments);
      api.add(function() {
        return cancelAnimationFrame(raf);
      });
    }),
    nextFrame: function nextFrame() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      api.requestAnimationFrame(function() {
        api.requestAnimationFrame.apply(api, args);
      });
    },
    setTimeout: function(_setTimeout) {
      function setTimeout2() {
        return _setTimeout.apply(this, arguments);
      }
      setTimeout2.toString = function() {
        return _setTimeout.toString();
      };
      return setTimeout2;
    }(function() {
      var timer = setTimeout.apply(void 0, arguments);
      api.add(function() {
        return clearTimeout(timer);
      });
    }),
    add: function add(cb) {
      disposables2.push(cb);
    },
    dispose: function dispose() {
      for (var _iterator = _createForOfIteratorHelperLoose(disposables2.splice(0)), _step; !(_step = _iterator()).done; ) {
        var dispose2 = _step.value;
        dispose2();
      }
    }
  };
  return api;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.esm.js
init_react();
var import_react9 = __toESM(require_react());
function useDisposables() {
  var _useState = (0, import_react9.useState)(disposables), d = _useState[0];
  (0, import_react9.useEffect)(function() {
    return function() {
      return d.dispose();
    };
  }, [d]);
  return d;
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.esm.js
init_react();
function assertNever(x) {
  throw new Error("Unexpected object: " + x);
}
var Focus2;
(function(Focus3) {
  Focus3[Focus3["First"] = 0] = "First";
  Focus3[Focus3["Previous"] = 1] = "Previous";
  Focus3[Focus3["Next"] = 2] = "Next";
  Focus3[Focus3["Last"] = 3] = "Last";
  Focus3[Focus3["Specific"] = 4] = "Specific";
  Focus3[Focus3["Nothing"] = 5] = "Nothing";
})(Focus2 || (Focus2 = {}));
function calculateActiveIndex(action, resolvers) {
  var items = resolvers.resolveItems();
  if (items.length <= 0)
    return null;
  var currentActiveIndex = resolvers.resolveActiveIndex();
  var activeIndex = currentActiveIndex != null ? currentActiveIndex : -1;
  var nextActiveIndex = function() {
    switch (action.focus) {
      case Focus2.First:
        return items.findIndex(function(item) {
          return !resolvers.resolveDisabled(item);
        });
      case Focus2.Previous: {
        var idx = items.slice().reverse().findIndex(function(item, idx2, all) {
          if (activeIndex !== -1 && all.length - idx2 - 1 >= activeIndex)
            return false;
          return !resolvers.resolveDisabled(item);
        });
        if (idx === -1)
          return idx;
        return items.length - 1 - idx;
      }
      case Focus2.Next:
        return items.findIndex(function(item, idx2) {
          if (idx2 <= activeIndex)
            return false;
          return !resolvers.resolveDisabled(item);
        });
      case Focus2.Last: {
        var _idx = items.slice().reverse().findIndex(function(item) {
          return !resolvers.resolveDisabled(item);
        });
        if (_idx === -1)
          return _idx;
        return items.length - 1 - _idx;
      }
      case Focus2.Specific:
        return items.findIndex(function(item) {
          return resolvers.resolveId(item) === action.id;
        });
      case Focus2.Nothing:
        return null;
      default:
        assertNever(action);
    }
  }();
  return nextActiveIndex === -1 ? currentActiveIndex : nextActiveIndex;
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.esm.js
init_react();
var import_react10 = __toESM(require_react());
function useTreeWalker(_ref) {
  var container = _ref.container, accept = _ref.accept, walk = _ref.walk, _ref$enabled = _ref.enabled, enabled = _ref$enabled === void 0 ? true : _ref$enabled;
  var acceptRef = (0, import_react10.useRef)(accept);
  var walkRef = (0, import_react10.useRef)(walk);
  (0, import_react10.useEffect)(function() {
    acceptRef.current = accept;
    walkRef.current = walk;
  }, [accept, walk]);
  useIsoMorphicEffect(function() {
    if (!container)
      return;
    if (!enabled)
      return;
    var accept2 = acceptRef.current;
    var walk2 = walkRef.current;
    var acceptNode = Object.assign(function(node) {
      return accept2(node);
    }, {
      acceptNode: accept2
    });
    var walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, acceptNode, false);
    while (walker.nextNode()) {
      walk2(walker.currentNode);
    }
  }, [container, enabled, acceptRef, walkRef]);
}

// node_modules/@headlessui/react/dist/components/menu/menu.esm.js
var _reducers;
var MenuStates;
(function(MenuStates2) {
  MenuStates2[MenuStates2["Open"] = 0] = "Open";
  MenuStates2[MenuStates2["Closed"] = 1] = "Closed";
})(MenuStates || (MenuStates = {}));
var ActionTypes;
(function(ActionTypes2) {
  ActionTypes2[ActionTypes2["OpenMenu"] = 0] = "OpenMenu";
  ActionTypes2[ActionTypes2["CloseMenu"] = 1] = "CloseMenu";
  ActionTypes2[ActionTypes2["GoToItem"] = 2] = "GoToItem";
  ActionTypes2[ActionTypes2["Search"] = 3] = "Search";
  ActionTypes2[ActionTypes2["ClearSearch"] = 4] = "ClearSearch";
  ActionTypes2[ActionTypes2["RegisterItem"] = 5] = "RegisterItem";
  ActionTypes2[ActionTypes2["UnregisterItem"] = 6] = "UnregisterItem";
})(ActionTypes || (ActionTypes = {}));
var reducers = (_reducers = {}, _reducers[ActionTypes.CloseMenu] = function(state2) {
  if (state2.menuState === MenuStates.Closed)
    return state2;
  return _extends({}, state2, {
    activeItemIndex: null,
    menuState: MenuStates.Closed
  });
}, _reducers[ActionTypes.OpenMenu] = function(state2) {
  if (state2.menuState === MenuStates.Open)
    return state2;
  return _extends({}, state2, {
    menuState: MenuStates.Open
  });
}, _reducers[ActionTypes.GoToItem] = function(state2, action) {
  var activeItemIndex = calculateActiveIndex(action, {
    resolveItems: function resolveItems() {
      return state2.items;
    },
    resolveActiveIndex: function resolveActiveIndex() {
      return state2.activeItemIndex;
    },
    resolveId: function resolveId(item) {
      return item.id;
    },
    resolveDisabled: function resolveDisabled(item) {
      return item.dataRef.current.disabled;
    }
  });
  if (state2.searchQuery === "" && state2.activeItemIndex === activeItemIndex)
    return state2;
  return _extends({}, state2, {
    searchQuery: "",
    activeItemIndex
  });
}, _reducers[ActionTypes.Search] = function(state2, action) {
  var searchQuery = state2.searchQuery + action.value.toLowerCase();
  var match2 = state2.items.findIndex(function(item) {
    var _item$dataRef$current;
    return ((_item$dataRef$current = item.dataRef.current.textValue) == null ? void 0 : _item$dataRef$current.startsWith(searchQuery)) && !item.dataRef.current.disabled;
  });
  if (match2 === -1 || match2 === state2.activeItemIndex)
    return _extends({}, state2, {
      searchQuery
    });
  return _extends({}, state2, {
    searchQuery,
    activeItemIndex: match2
  });
}, _reducers[ActionTypes.ClearSearch] = function(state2) {
  if (state2.searchQuery === "")
    return state2;
  return _extends({}, state2, {
    searchQuery: ""
  });
}, _reducers[ActionTypes.RegisterItem] = function(state2, action) {
  return _extends({}, state2, {
    items: [].concat(state2.items, [{
      id: action.id,
      dataRef: action.dataRef
    }])
  });
}, _reducers[ActionTypes.UnregisterItem] = function(state2, action) {
  var nextItems = state2.items.slice();
  var currentActiveItem = state2.activeItemIndex !== null ? nextItems[state2.activeItemIndex] : null;
  var idx = nextItems.findIndex(function(a) {
    return a.id === action.id;
  });
  if (idx !== -1)
    nextItems.splice(idx, 1);
  return _extends({}, state2, {
    items: nextItems,
    activeItemIndex: function() {
      if (idx === state2.activeItemIndex)
        return null;
      if (currentActiveItem === null)
        return null;
      return nextItems.indexOf(currentActiveItem);
    }()
  });
}, _reducers);
var MenuContext = /* @__PURE__ */ (0, import_react11.createContext)(null);
MenuContext.displayName = "MenuContext";
function useMenuContext(component) {
  var context = (0, import_react11.useContext)(MenuContext);
  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + Menu.name + " /> component.");
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useMenuContext);
    throw err;
  }
  return context;
}
function stateReducer(state2, action) {
  return match(action.type, reducers, state2, action);
}
var DEFAULT_MENU_TAG = import_react11.Fragment;
function Menu(props) {
  var _match;
  var reducerBag = (0, import_react11.useReducer)(stateReducer, {
    menuState: MenuStates.Closed,
    buttonRef: (0, import_react11.createRef)(),
    itemsRef: (0, import_react11.createRef)(),
    items: [],
    searchQuery: "",
    activeItemIndex: null
  });
  var _reducerBag$ = reducerBag[0], menuState = _reducerBag$.menuState, itemsRef = _reducerBag$.itemsRef, buttonRef = _reducerBag$.buttonRef, dispatch = reducerBag[1];
  useWindowEvent("mousedown", function(event) {
    var _buttonRef$current, _itemsRef$current;
    var target = event.target;
    if (menuState !== MenuStates.Open)
      return;
    if ((_buttonRef$current = buttonRef.current) == null ? void 0 : _buttonRef$current.contains(target))
      return;
    if ((_itemsRef$current = itemsRef.current) == null ? void 0 : _itemsRef$current.contains(target))
      return;
    dispatch({
      type: ActionTypes.CloseMenu
    });
    if (!isFocusableElement(target, FocusableMode.Loose)) {
      var _buttonRef$current2;
      event.preventDefault();
      (_buttonRef$current2 = buttonRef.current) == null ? void 0 : _buttonRef$current2.focus();
    }
  });
  var slot = (0, import_react11.useMemo)(function() {
    return {
      open: menuState === MenuStates.Open
    };
  }, [menuState]);
  return import_react11.default.createElement(MenuContext.Provider, {
    value: reducerBag
  }, import_react11.default.createElement(OpenClosedProvider, {
    value: match(menuState, (_match = {}, _match[MenuStates.Open] = State.Open, _match[MenuStates.Closed] = State.Closed, _match))
  }, render({
    props,
    slot,
    defaultTag: DEFAULT_MENU_TAG,
    name: "Menu"
  })));
}
var DEFAULT_BUTTON_TAG = "button";
var Button = /* @__PURE__ */ forwardRefWithAs(function Button2(props, ref) {
  var _state$itemsRef$curre;
  var _useMenuContext = useMenuContext([Menu.name, Button2.name].join(".")), state2 = _useMenuContext[0], dispatch = _useMenuContext[1];
  var buttonRef = useSyncRefs(state2.buttonRef, ref);
  var id2 = "headlessui-menu-button-" + useId();
  var d = useDisposables();
  var handleKeyDown = (0, import_react11.useCallback)(function(event) {
    switch (event.key) {
      case Keys.Space:
      case Keys.Enter:
      case Keys.ArrowDown:
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.OpenMenu
        });
        d.nextFrame(function() {
          return dispatch({
            type: ActionTypes.GoToItem,
            focus: Focus2.First
          });
        });
        break;
      case Keys.ArrowUp:
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.OpenMenu
        });
        d.nextFrame(function() {
          return dispatch({
            type: ActionTypes.GoToItem,
            focus: Focus2.Last
          });
        });
        break;
    }
  }, [dispatch, d]);
  var handleKeyUp = (0, import_react11.useCallback)(function(event) {
    switch (event.key) {
      case Keys.Space:
        event.preventDefault();
        break;
    }
  }, []);
  var handleClick = (0, import_react11.useCallback)(function(event) {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    if (props.disabled)
      return;
    if (state2.menuState === MenuStates.Open) {
      dispatch({
        type: ActionTypes.CloseMenu
      });
      d.nextFrame(function() {
        var _state$buttonRef$curr;
        return (_state$buttonRef$curr = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr.focus({
          preventScroll: true
        });
      });
    } else {
      event.preventDefault();
      event.stopPropagation();
      dispatch({
        type: ActionTypes.OpenMenu
      });
    }
  }, [dispatch, d, state2, props.disabled]);
  var slot = (0, import_react11.useMemo)(function() {
    return {
      open: state2.menuState === MenuStates.Open
    };
  }, [state2]);
  var passthroughProps = props;
  var propsWeControl = {
    ref: buttonRef,
    id: id2,
    type: useResolveButtonType(props, state2.buttonRef),
    "aria-haspopup": true,
    "aria-controls": (_state$itemsRef$curre = state2.itemsRef.current) == null ? void 0 : _state$itemsRef$curre.id,
    "aria-expanded": props.disabled ? void 0 : state2.menuState === MenuStates.Open,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return render({
    props: _extends({}, passthroughProps, propsWeControl),
    slot,
    defaultTag: DEFAULT_BUTTON_TAG,
    name: "Menu.Button"
  });
});
var DEFAULT_ITEMS_TAG = "div";
var ItemsRenderFeatures = Features.RenderStrategy | Features.Static;
var Items = /* @__PURE__ */ forwardRefWithAs(function Items2(props, ref) {
  var _state$items$state$ac, _state$buttonRef$curr4;
  var _useMenuContext2 = useMenuContext([Menu.name, Items2.name].join(".")), state2 = _useMenuContext2[0], dispatch = _useMenuContext2[1];
  var itemsRef = useSyncRefs(state2.itemsRef, ref);
  var id2 = "headlessui-menu-items-" + useId();
  var searchDisposables = useDisposables();
  var usesOpenClosedState = useOpenClosed();
  var visible = function() {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === State.Open;
    }
    return state2.menuState === MenuStates.Open;
  }();
  (0, import_react11.useEffect)(function() {
    var container = state2.itemsRef.current;
    if (!container)
      return;
    if (state2.menuState !== MenuStates.Open)
      return;
    if (container === document.activeElement)
      return;
    container.focus({
      preventScroll: true
    });
  }, [state2.menuState, state2.itemsRef]);
  useTreeWalker({
    container: state2.itemsRef.current,
    enabled: state2.menuState === MenuStates.Open,
    accept: function accept(node) {
      if (node.getAttribute("role") === "menuitem")
        return NodeFilter.FILTER_REJECT;
      if (node.hasAttribute("role"))
        return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    },
    walk: function walk(node) {
      node.setAttribute("role", "none");
    }
  });
  var handleKeyDown = (0, import_react11.useCallback)(function(event) {
    searchDisposables.dispose();
    switch (event.key) {
      case Keys.Space:
        if (state2.searchQuery !== "") {
          event.preventDefault();
          event.stopPropagation();
          return dispatch({
            type: ActionTypes.Search,
            value: event.key
          });
        }
      case Keys.Enter:
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.CloseMenu
        });
        if (state2.activeItemIndex !== null) {
          var _document$getElementB;
          var _id = state2.items[state2.activeItemIndex].id;
          (_document$getElementB = document.getElementById(_id)) == null ? void 0 : _document$getElementB.click();
        }
        disposables().nextFrame(function() {
          var _state$buttonRef$curr2;
          return (_state$buttonRef$curr2 = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr2.focus({
            preventScroll: true
          });
        });
        break;
      case Keys.ArrowDown:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToItem,
          focus: Focus2.Next
        });
      case Keys.ArrowUp:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToItem,
          focus: Focus2.Previous
        });
      case Keys.Home:
      case Keys.PageUp:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToItem,
          focus: Focus2.First
        });
      case Keys.End:
      case Keys.PageDown:
        event.preventDefault();
        event.stopPropagation();
        return dispatch({
          type: ActionTypes.GoToItem,
          focus: Focus2.Last
        });
      case Keys.Escape:
        event.preventDefault();
        event.stopPropagation();
        dispatch({
          type: ActionTypes.CloseMenu
        });
        disposables().nextFrame(function() {
          var _state$buttonRef$curr3;
          return (_state$buttonRef$curr3 = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr3.focus({
            preventScroll: true
          });
        });
        break;
      case Keys.Tab:
        event.preventDefault();
        event.stopPropagation();
        break;
      default:
        if (event.key.length === 1) {
          dispatch({
            type: ActionTypes.Search,
            value: event.key
          });
          searchDisposables.setTimeout(function() {
            return dispatch({
              type: ActionTypes.ClearSearch
            });
          }, 350);
        }
        break;
    }
  }, [dispatch, searchDisposables, state2]);
  var handleKeyUp = (0, import_react11.useCallback)(function(event) {
    switch (event.key) {
      case Keys.Space:
        event.preventDefault();
        break;
    }
  }, []);
  var slot = (0, import_react11.useMemo)(function() {
    return {
      open: state2.menuState === MenuStates.Open
    };
  }, [state2]);
  var propsWeControl = {
    "aria-activedescendant": state2.activeItemIndex === null ? void 0 : (_state$items$state$ac = state2.items[state2.activeItemIndex]) == null ? void 0 : _state$items$state$ac.id,
    "aria-labelledby": (_state$buttonRef$curr4 = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr4.id,
    id: id2,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    role: "menu",
    tabIndex: 0,
    ref: itemsRef
  };
  var passthroughProps = props;
  return render({
    props: _extends({}, passthroughProps, propsWeControl),
    slot,
    defaultTag: DEFAULT_ITEMS_TAG,
    features: ItemsRenderFeatures,
    visible,
    name: "Menu.Items"
  });
});
var DEFAULT_ITEM_TAG = import_react11.Fragment;
function Item(props) {
  var _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, onClick = props.onClick, passthroughProps = _objectWithoutPropertiesLoose(props, ["disabled", "onClick"]);
  var _useMenuContext3 = useMenuContext([Menu.name, Item.name].join(".")), state2 = _useMenuContext3[0], dispatch = _useMenuContext3[1];
  var id2 = "headlessui-menu-item-" + useId();
  var active = state2.activeItemIndex !== null ? state2.items[state2.activeItemIndex].id === id2 : false;
  useIsoMorphicEffect(function() {
    if (state2.menuState !== MenuStates.Open)
      return;
    if (!active)
      return;
    var d = disposables();
    d.nextFrame(function() {
      var _document$getElementB2;
      return (_document$getElementB2 = document.getElementById(id2)) == null ? void 0 : _document$getElementB2.scrollIntoView == null ? void 0 : _document$getElementB2.scrollIntoView({
        block: "nearest"
      });
    });
    return d.dispose;
  }, [id2, active, state2.menuState]);
  var bag = (0, import_react11.useRef)({
    disabled
  });
  useIsoMorphicEffect(function() {
    bag.current.disabled = disabled;
  }, [bag, disabled]);
  useIsoMorphicEffect(function() {
    var _document$getElementB3, _document$getElementB4;
    bag.current.textValue = (_document$getElementB3 = document.getElementById(id2)) == null ? void 0 : (_document$getElementB4 = _document$getElementB3.textContent) == null ? void 0 : _document$getElementB4.toLowerCase();
  }, [bag, id2]);
  useIsoMorphicEffect(function() {
    dispatch({
      type: ActionTypes.RegisterItem,
      id: id2,
      dataRef: bag
    });
    return function() {
      return dispatch({
        type: ActionTypes.UnregisterItem,
        id: id2
      });
    };
  }, [bag, id2]);
  var handleClick = (0, import_react11.useCallback)(function(event) {
    if (disabled)
      return event.preventDefault();
    dispatch({
      type: ActionTypes.CloseMenu
    });
    disposables().nextFrame(function() {
      var _state$buttonRef$curr5;
      return (_state$buttonRef$curr5 = state2.buttonRef.current) == null ? void 0 : _state$buttonRef$curr5.focus({
        preventScroll: true
      });
    });
    if (onClick)
      return onClick(event);
  }, [dispatch, state2.buttonRef, disabled, onClick]);
  var handleFocus = (0, import_react11.useCallback)(function() {
    if (disabled)
      return dispatch({
        type: ActionTypes.GoToItem,
        focus: Focus2.Nothing
      });
    dispatch({
      type: ActionTypes.GoToItem,
      focus: Focus2.Specific,
      id: id2
    });
  }, [disabled, id2, dispatch]);
  var handleMove = (0, import_react11.useCallback)(function() {
    if (disabled)
      return;
    if (active)
      return;
    dispatch({
      type: ActionTypes.GoToItem,
      focus: Focus2.Specific,
      id: id2
    });
  }, [disabled, active, id2, dispatch]);
  var handleLeave = (0, import_react11.useCallback)(function() {
    if (disabled)
      return;
    if (!active)
      return;
    dispatch({
      type: ActionTypes.GoToItem,
      focus: Focus2.Nothing
    });
  }, [disabled, active, dispatch]);
  var slot = (0, import_react11.useMemo)(function() {
    return {
      active,
      disabled
    };
  }, [active, disabled]);
  var propsWeControl = {
    id: id2,
    role: "menuitem",
    tabIndex: disabled === true ? void 0 : -1,
    "aria-disabled": disabled === true ? true : void 0,
    disabled: void 0,
    onClick: handleClick,
    onFocus: handleFocus,
    onPointerMove: handleMove,
    onMouseMove: handleMove,
    onPointerLeave: handleLeave,
    onMouseLeave: handleLeave
  };
  return render({
    props: _extends({}, passthroughProps, propsWeControl),
    slot,
    defaultTag: DEFAULT_ITEM_TAG,
    name: "Menu.Item"
  });
}
Menu.Button = Button;
Menu.Items = Items;
Menu.Item = Item;

// node_modules/@headlessui/react/dist/components/transitions/transition.esm.js
init_react();
var import_react14 = __toESM(require_react());

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.esm.js
init_react();
var import_react12 = __toESM(require_react());
function useIsMounted() {
  var mounted = (0, import_react12.useRef)(false);
  (0, import_react12.useEffect)(function() {
    mounted.current = true;
    return function() {
      mounted.current = false;
    };
  }, []);
  return mounted;
}

// node_modules/@headlessui/react/dist/hooks/use-is-initial-render.esm.js
init_react();
var import_react13 = __toESM(require_react());
function useIsInitialRender() {
  var initial = (0, import_react13.useRef)(true);
  (0, import_react13.useEffect)(function() {
    initial.current = false;
  }, []);
  return initial.current;
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.esm.js
init_react();

// node_modules/@headlessui/react/dist/utils/once.esm.js
init_react();
function once(cb) {
  var state2 = {
    called: false
  };
  return function() {
    if (state2.called)
      return;
    state2.called = true;
    return cb.apply(void 0, arguments);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.esm.js
function addClasses(node) {
  var _node$classList;
  for (var _len = arguments.length, classes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    classes[_key - 1] = arguments[_key];
  }
  node && classes.length > 0 && (_node$classList = node.classList).add.apply(_node$classList, classes);
}
function removeClasses(node) {
  var _node$classList2;
  for (var _len2 = arguments.length, classes = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    classes[_key2 - 1] = arguments[_key2];
  }
  node && classes.length > 0 && (_node$classList2 = node.classList).remove.apply(_node$classList2, classes);
}
var Reason;
(function(Reason2) {
  Reason2["Finished"] = "finished";
  Reason2["Cancelled"] = "cancelled";
})(Reason || (Reason = {}));
function waitForTransition(node, done) {
  var d = disposables();
  if (!node)
    return d.dispose;
  var _getComputedStyle = getComputedStyle(node), transitionDuration = _getComputedStyle.transitionDuration, transitionDelay = _getComputedStyle.transitionDelay;
  var _map = [transitionDuration, transitionDelay].map(function(value) {
    var _value$split$filter$m = value.split(",").filter(Boolean).map(function(v) {
      return v.includes("ms") ? parseFloat(v) : parseFloat(v) * 1e3;
    }).sort(function(a, z) {
      return z - a;
    }), _value$split$filter$m2 = _value$split$filter$m[0], resolvedValue = _value$split$filter$m2 === void 0 ? 0 : _value$split$filter$m2;
    return resolvedValue;
  }), durationMs = _map[0], delaysMs = _map[1];
  if (durationMs !== 0) {
    d.setTimeout(function() {
      done(Reason.Finished);
    }, durationMs + delaysMs);
  } else {
    done(Reason.Finished);
  }
  d.add(function() {
    return done(Reason.Cancelled);
  });
  return d.dispose;
}
function transition(node, base, from, to, entered, done) {
  var d = disposables();
  var _done = done !== void 0 ? once(done) : function() {
  };
  removeClasses.apply(void 0, [node].concat(entered));
  addClasses.apply(void 0, [node].concat(base, from));
  d.nextFrame(function() {
    removeClasses.apply(void 0, [node].concat(from));
    addClasses.apply(void 0, [node].concat(to));
    d.add(waitForTransition(node, function(reason) {
      removeClasses.apply(void 0, [node].concat(to, base));
      addClasses.apply(void 0, [node].concat(entered));
      return _done(reason);
    }));
  });
  d.add(function() {
    return removeClasses.apply(void 0, [node].concat(base, from, to, entered));
  });
  d.add(function() {
    return _done(Reason.Cancelled);
  });
  return d.dispose;
}

// node_modules/@headlessui/react/dist/components/transitions/transition.esm.js
function useSplitClasses(classes) {
  if (classes === void 0) {
    classes = "";
  }
  return (0, import_react14.useMemo)(function() {
    return classes.split(" ").filter(function(className) {
      return className.trim().length > 1;
    });
  }, [classes]);
}
var TransitionContext = /* @__PURE__ */ (0, import_react14.createContext)(null);
TransitionContext.displayName = "TransitionContext";
var TreeStates;
(function(TreeStates2) {
  TreeStates2["Visible"] = "visible";
  TreeStates2["Hidden"] = "hidden";
})(TreeStates || (TreeStates = {}));
function useTransitionContext() {
  var context = (0, import_react14.useContext)(TransitionContext);
  if (context === null) {
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  }
  return context;
}
function useParentNesting() {
  var context = (0, import_react14.useContext)(NestingContext);
  if (context === null) {
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  }
  return context;
}
var NestingContext = /* @__PURE__ */ (0, import_react14.createContext)(null);
NestingContext.displayName = "NestingContext";
function hasChildren(bag) {
  if ("children" in bag)
    return hasChildren(bag.children);
  return bag.current.filter(function(_ref) {
    var state2 = _ref.state;
    return state2 === TreeStates.Visible;
  }).length > 0;
}
function useNesting(done) {
  var doneRef = (0, import_react14.useRef)(done);
  var transitionableChildren = (0, import_react14.useRef)([]);
  var mounted = useIsMounted();
  (0, import_react14.useEffect)(function() {
    doneRef.current = done;
  }, [done]);
  var unregister = (0, import_react14.useCallback)(function(childId, strategy) {
    var _match;
    if (strategy === void 0) {
      strategy = RenderStrategy.Hidden;
    }
    var idx = transitionableChildren.current.findIndex(function(_ref2) {
      var id2 = _ref2.id;
      return id2 === childId;
    });
    if (idx === -1)
      return;
    match(strategy, (_match = {}, _match[RenderStrategy.Unmount] = function() {
      transitionableChildren.current.splice(idx, 1);
    }, _match[RenderStrategy.Hidden] = function() {
      transitionableChildren.current[idx].state = TreeStates.Hidden;
    }, _match));
    if (!hasChildren(transitionableChildren) && mounted.current) {
      doneRef.current == null ? void 0 : doneRef.current();
    }
  }, [doneRef, mounted, transitionableChildren]);
  var register = (0, import_react14.useCallback)(function(childId) {
    var child = transitionableChildren.current.find(function(_ref3) {
      var id2 = _ref3.id;
      return id2 === childId;
    });
    if (!child) {
      transitionableChildren.current.push({
        id: childId,
        state: TreeStates.Visible
      });
    } else if (child.state !== TreeStates.Visible) {
      child.state = TreeStates.Visible;
    }
    return function() {
      return unregister(childId, RenderStrategy.Unmount);
    };
  }, [transitionableChildren, unregister]);
  return (0, import_react14.useMemo)(function() {
    return {
      children: transitionableChildren,
      register,
      unregister
    };
  }, [register, unregister, transitionableChildren]);
}
function noop() {
}
var eventNames = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ensureEventHooksExist(events) {
  var result = {};
  for (var _iterator = _createForOfIteratorHelperLoose(eventNames), _step; !(_step = _iterator()).done; ) {
    var _events$name;
    var name = _step.value;
    result[name] = (_events$name = events[name]) != null ? _events$name : noop;
  }
  return result;
}
function useEvents(events) {
  var eventsRef = (0, import_react14.useRef)(ensureEventHooksExist(events));
  (0, import_react14.useEffect)(function() {
    eventsRef.current = ensureEventHooksExist(events);
  }, [events]);
  return eventsRef;
}
var DEFAULT_TRANSITION_CHILD_TAG = "div";
var TransitionChildRenderFeatures = Features.RenderStrategy;
function TransitionChild(props) {
  var _match3;
  var beforeEnter = props.beforeEnter, afterEnter = props.afterEnter, beforeLeave = props.beforeLeave, afterLeave = props.afterLeave, enter = props.enter, enterFrom = props.enterFrom, enterTo = props.enterTo, entered = props.entered, leave = props.leave, leaveFrom = props.leaveFrom, leaveTo = props.leaveTo, rest = _objectWithoutPropertiesLoose(props, ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave", "enter", "enterFrom", "enterTo", "entered", "leave", "leaveFrom", "leaveTo"]);
  var container = (0, import_react14.useRef)(null);
  var _useState = (0, import_react14.useState)(TreeStates.Visible), state2 = _useState[0], setState = _useState[1];
  var strategy = rest.unmount ? RenderStrategy.Unmount : RenderStrategy.Hidden;
  var _useTransitionContext = useTransitionContext(), show = _useTransitionContext.show, appear = _useTransitionContext.appear, initial = _useTransitionContext.initial;
  var _useParentNesting = useParentNesting(), register = _useParentNesting.register, unregister = _useParentNesting.unregister;
  var id2 = useId();
  var isTransitioning = (0, import_react14.useRef)(false);
  var nesting = useNesting(function() {
    if (!isTransitioning.current) {
      setState(TreeStates.Hidden);
      unregister(id2);
      events.current.afterLeave();
    }
  });
  useIsoMorphicEffect(function() {
    if (!id2)
      return;
    return register(id2);
  }, [register, id2]);
  useIsoMorphicEffect(function() {
    var _match2;
    if (strategy !== RenderStrategy.Hidden)
      return;
    if (!id2)
      return;
    if (show && state2 !== TreeStates.Visible) {
      setState(TreeStates.Visible);
      return;
    }
    match(state2, (_match2 = {}, _match2[TreeStates.Hidden] = function() {
      return unregister(id2);
    }, _match2[TreeStates.Visible] = function() {
      return register(id2);
    }, _match2));
  }, [state2, id2, register, unregister, show, strategy]);
  var enterClasses = useSplitClasses(enter);
  var enterFromClasses = useSplitClasses(enterFrom);
  var enterToClasses = useSplitClasses(enterTo);
  var enteredClasses = useSplitClasses(entered);
  var leaveClasses = useSplitClasses(leave);
  var leaveFromClasses = useSplitClasses(leaveFrom);
  var leaveToClasses = useSplitClasses(leaveTo);
  var events = useEvents({
    beforeEnter,
    afterEnter,
    beforeLeave,
    afterLeave
  });
  var ready = useServerHandoffComplete();
  (0, import_react14.useEffect)(function() {
    if (ready && state2 === TreeStates.Visible && container.current === null) {
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
    }
  }, [container, state2, ready]);
  var skip = initial && !appear;
  useIsoMorphicEffect(function() {
    var node = container.current;
    if (!node)
      return;
    if (skip)
      return;
    isTransitioning.current = true;
    if (show)
      events.current.beforeEnter();
    if (!show)
      events.current.beforeLeave();
    return show ? transition(node, enterClasses, enterFromClasses, enterToClasses, enteredClasses, function(reason) {
      isTransitioning.current = false;
      if (reason === Reason.Finished)
        events.current.afterEnter();
    }) : transition(node, leaveClasses, leaveFromClasses, leaveToClasses, enteredClasses, function(reason) {
      isTransitioning.current = false;
      if (reason !== Reason.Finished)
        return;
      if (!hasChildren(nesting)) {
        setState(TreeStates.Hidden);
        unregister(id2);
        events.current.afterLeave();
      }
    });
  }, [events, id2, isTransitioning, unregister, nesting, container, skip, show, enterClasses, enterFromClasses, enterToClasses, leaveClasses, leaveFromClasses, leaveToClasses]);
  var propsWeControl = {
    ref: container
  };
  var passthroughProps = rest;
  return import_react14.default.createElement(NestingContext.Provider, {
    value: nesting
  }, import_react14.default.createElement(OpenClosedProvider, {
    value: match(state2, (_match3 = {}, _match3[TreeStates.Visible] = State.Open, _match3[TreeStates.Hidden] = State.Closed, _match3))
  }, render({
    props: _extends({}, passthroughProps, propsWeControl),
    defaultTag: DEFAULT_TRANSITION_CHILD_TAG,
    features: TransitionChildRenderFeatures,
    visible: state2 === TreeStates.Visible,
    name: "Transition.Child"
  })));
}
function Transition(props) {
  var show = props.show, _props$appear = props.appear, appear = _props$appear === void 0 ? false : _props$appear, unmount = props.unmount, passthroughProps = _objectWithoutPropertiesLoose(props, ["show", "appear", "unmount"]);
  var usesOpenClosedState = useOpenClosed();
  if (show === void 0 && usesOpenClosedState !== null) {
    var _match4;
    show = match(usesOpenClosedState, (_match4 = {}, _match4[State.Open] = true, _match4[State.Closed] = false, _match4));
  }
  if (![true, false].includes(show)) {
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  }
  var _useState2 = (0, import_react14.useState)(show ? TreeStates.Visible : TreeStates.Hidden), state2 = _useState2[0], setState = _useState2[1];
  var nestingBag = useNesting(function() {
    setState(TreeStates.Hidden);
  });
  var initial = useIsInitialRender();
  var transitionBag = (0, import_react14.useMemo)(function() {
    return {
      show,
      appear: appear || !initial,
      initial
    };
  }, [show, appear, initial]);
  (0, import_react14.useEffect)(function() {
    if (show) {
      setState(TreeStates.Visible);
    } else if (!hasChildren(nestingBag)) {
      setState(TreeStates.Hidden);
    }
  }, [show, nestingBag]);
  var sharedProps = {
    unmount
  };
  return import_react14.default.createElement(NestingContext.Provider, {
    value: nestingBag
  }, import_react14.default.createElement(TransitionContext.Provider, {
    value: transitionBag
  }, render({
    props: _extends({}, sharedProps, {
      as: import_react14.Fragment,
      children: import_react14.default.createElement(TransitionChild, Object.assign({}, sharedProps, passthroughProps))
    }),
    defaultTag: import_react14.Fragment,
    features: TransitionChildRenderFeatures,
    visible: state2 === TreeStates.Visible,
    name: "Transition"
  })));
}
Transition.Child = function Child(props) {
  var hasTransitionContext = (0, import_react14.useContext)(TransitionContext) !== null;
  var hasOpenClosedContext = useOpenClosed() !== null;
  return !hasTransitionContext && hasOpenClosedContext ? import_react14.default.createElement(Transition, Object.assign({}, props)) : import_react14.default.createElement(TransitionChild, Object.assign({}, props));
};
Transition.Root = Transition;

// node_modules/@headlessui/react/dist/index.esm.js
init_react();

export {
  Menu,
  Transition
};
//# sourceMappingURL=/_static/build/_shared/chunk-2Z3CX2SQ.js.map
