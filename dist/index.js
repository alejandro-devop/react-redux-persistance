'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactRedux = require('react-redux');
var toolkit = require('@reduxjs/toolkit');
var Cookies = require('universal-cookie');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Cookies__default = /*#__PURE__*/_interopDefaultLegacy(Cookies);

var SessionContext = React__default["default"].createContext({});
var SessionContextProvider = SessionContext.Provider;
SessionContext.Consumer;

var useSession = function () {
    var _a = React.useContext(SessionContext), clear = _a.clear, removeKey = _a.removeKey, setAll = _a.setAll, setKey = _a.setKey, store = _a.store;
    return { clear: clear, removeKey: removeKey, setAll: setAll, setKey: setKey, store: store };
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var ReduxWrapper = function (_a) {
    var children = _a.children, slice = _a.slice, onDataChange = _a.onDataChange, driver = _a.driver;
    var dispatch = reactRedux.useDispatch();
    var store = reactRedux.useStore();
    var currentState = reactRedux.useSelector(function (state) {
        return state;
    });
    var _b = slice.actions, clearAction = _b.clearAction, removeKeyAction = _b.removeKeyAction, setAllAction = _b.setAllAction, setKeyAction = _b.setKeyAction;
    var setKey = function (key, value) {
        dispatch(setKeyAction({ key: key, value: value }));
    };
    var setAll = function (keys) {
        dispatch(setAllAction(keys));
    };
    var removeKey = function (key) {
        dispatch(removeKeyAction({ key: key }));
    };
    var clear = function (defaultValues) {
        dispatch(clearAction({ defaultValues: defaultValues }));
    };
    store.subscribe(function () {
        onDataChange(store.getState());
    });
    return (React__default["default"].createElement(SessionContextProvider, { value: {
            driver: driver,
            setKey: setKey,
            setAll: setAll,
            removeKey: removeKey,
            clear: clear,
            store: currentState
        } }, children));
};

var SetKeyAction = function (state, action) {
    var _a = action.payload, key = _a.key, value = _a.value;
    var stateCopy = __assign({}, state);
    stateCopy[key] = value;
    return stateCopy;
};
var SetAllAction = function (state, action) {
    return __assign(__assign({}, state), (action.payload || {}));
};
var RemoveKeyAction = function (state, action) {
    var key = action.payload.key;
    var stateCopy = __assign({}, state);
    delete stateCopy[key];
    return stateCopy;
};
var ClearAction = function () {
    return {};
};

var createSessionSlice = function (_a) {
    var initialValues = _a.initialValues;
    return toolkit.createSlice({
        name: 'session',
        initialState: initialValues,
        reducers: {
            setKeyAction: SetKeyAction,
            setAllAction: SetAllAction,
            removeKeyAction: RemoveKeyAction,
            clearAction: ClearAction
        }
    });
};

var StorageDriver = /** @class */ (function () {
    function StorageDriver() {
        var _this = this;
        this.setDriver = function (driver) {
            _this.driver = driver;
        };
        this.persistData = function (data) {
            if (_this.driver === 'cookie') {
                if (JSON.stringify(data) === '{}') {
                    _this.cookies.remove('app-session');
                }
                else {
                    _this.cookies.set('app-session', JSON.stringify(data), {
                        secure: true,
                        httpOnly: true
                    });
                }
            }
            else {
                localStorage.setItem('app-session', JSON.stringify(data));
            }
        };
        this.getData = function () {
            var data = '';
            if (_this.driver === 'cookie') {
                data = _this.cookies.get('app-session');
                return data;
            }
            else {
                data = localStorage.getItem('app-session');
                return data ? JSON.parse(data) : {};
            }
        };
        this.cookies = new Cookies__default["default"]();
    }
    return StorageDriver;
}());
var storageDriver = new StorageDriver();

var SessionProvider = function (_a) {
    var children = _a.children, initialValues = _a.initialValues, driver = _a.driver;
    storageDriver.setDriver(driver || 'localStorage');
    var storedData = storageDriver.getData();
    var slice = createSessionSlice({ initialValues: __assign(__assign({}, initialValues), storedData) });
    var store = toolkit.configureStore({
        reducer: slice.reducer
    });
    var onDataChange = function (newData) {
        storageDriver.persistData(newData);
    };
    return (React__default["default"].createElement(reactRedux.Provider, { store: store },
        React__default["default"].createElement(ReduxWrapper, { driver: driver, slice: slice, initialValues: __assign({}, initialValues), onDataChange: onDataChange }, children)));
};

exports["default"] = SessionProvider;
exports.useSession = useSession;
//# sourceMappingURL=index.js.map
