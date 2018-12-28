var signals;
(function (signals) {
    var TypedSignal = /** @class */ (function () {
        function TypedSignal() {
            this._listeners = [];
        }
        TypedSignal.prototype.add = function (listener, self) {
            if (!this.hasListener(listener, self)) {
                this._listeners.push(new TypedSignalHandler(listener, self));
            }
        };
        TypedSignal.prototype.addOnce = function (listener, self) {
            if (!this.hasListener(listener, self)) {
                this._listeners.push(new TypedSignalHandler(listener, self, true));
            }
        };
        TypedSignal.prototype.hasListener = function (listener, self) {
            for (var i = 0; i < this._listeners.length; i++) {
                if (this._listeners[i].equals(listener, self)) {
                    return true;
                }
            }
            return false;
        };
        TypedSignal.prototype.remove = function (listener, self) {
            for (var i = 0; i < this._listeners.length; i++) {
                if (this._listeners[i].equals(listener, self)) {
                    this._listeners.splice(i, 1);
                    break;
                }
            }
        };
        TypedSignal.prototype.removeAll = function () {
            this._listeners.length = 0;
        };
        TypedSignal.prototype.dispatch = function (value) {
            this._listeners.forEach(function (handler) { return handler.apply(value); });
            this._listeners = this._listeners.filter(function (handler, i, arr) { return !handler.once(); });
        };
        return TypedSignal;
    }());
    signals.TypedSignal = TypedSignal;
    var TypedSignalHandler = /** @class */ (function () {
        function TypedSignalHandler(handler, self, once) {
            if (once === void 0) { once = false; }
            this._handler = handler;
            this._self = self;
            this._once = once;
        }
        TypedSignalHandler.prototype.apply = function (arg) {
            this._handler.apply(this._self, [arg]);
        };
        TypedSignalHandler.prototype.equals = function (handler, self) {
            return this._handler == handler && this._self == self;
        };
        TypedSignalHandler.prototype.once = function () {
            return this._once;
        };
        return TypedSignalHandler;
    }());
})(signals || (signals = {}));
if (!window["TypedSignal"]) {
    window["TypedSignal"] = signals.TypedSignal;
}
//# sourceMappingURL=TypedSignal.js.map