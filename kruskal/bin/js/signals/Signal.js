var signals;
(function (signals) {
    var Signal = /** @class */ (function () {
        function Signal() {
            this._listeners = [];
        }
        Signal.prototype.add = function (listener, self) {
            if (!this.hasListener(listener, self)) {
                this._listeners.push(new SignalHandler(listener, self));
            }
        };
        Signal.prototype.addOnce = function (listener, self) {
            if (!this.hasListener(listener, self)) {
                this._listeners.push(new SignalHandler(listener, self, true));
            }
        };
        Signal.prototype.hasListener = function (listener, self) {
            for (var i = 0; i < this._listeners.length; i++) {
                if (this._listeners[i].equals(listener, self)) {
                    return true;
                }
            }
            return false;
        };
        Signal.prototype.remove = function (listener, self) {
            for (var i = 0; i < this._listeners.length; i++) {
                if (this._listeners[i].equals(listener, self)) {
                    this._listeners.splice(i, 1);
                    break;
                }
            }
        };
        Signal.prototype.removeAll = function () {
            this._listeners.length = 0;
        };
        Signal.prototype.dispatch = function () {
            this._listeners.forEach(function (handler) { return handler.apply(); });
            this._listeners = this._listeners.filter(function (handler, i, arr) { return !handler.once(); });
        };
        return Signal;
    }());
    signals.Signal = Signal;
    var SignalHandler = /** @class */ (function () {
        function SignalHandler(handler, self, once) {
            if (once === void 0) { once = false; }
            this._handler = handler;
            this._self = self;
            this._once = once;
        }
        SignalHandler.prototype.apply = function () {
            this._handler.apply(this._self);
        };
        SignalHandler.prototype.equals = function (handler, self) {
            return this._handler == handler && this._self == self;
        };
        SignalHandler.prototype.once = function () {
            return this._once;
        };
        return SignalHandler;
    }());
})(signals || (signals = {}));
if (!window["Signal"]) {
    window["Signal"] = signals.Signal;
}
//# sourceMappingURL=Signal.js.map