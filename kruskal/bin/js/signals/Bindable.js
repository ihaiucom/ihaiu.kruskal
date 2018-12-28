///<reference path="TypedSignal.ts"/>
var signals;
(function (signals) {
    var Bindable = /** @class */ (function () {
        function Bindable(value) {
            if (value === void 0) { value = null; }
            this._changeWatcher = new signals.TypedSignal();
            this._value = value;
        }
        Object.defineProperty(Bindable.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                this.setValue(value);
            },
            enumerable: true,
            configurable: true
        });
        Bindable.prototype.add = function (listener, self) {
            this._changeWatcher.add(listener, self);
        };
        Bindable.prototype.remove = function (listener, self) {
            this._changeWatcher.remove(listener, self);
        };
        Bindable.prototype.removeAll = function () {
            this._changeWatcher.removeAll();
        };
        Bindable.prototype.bindTo = function (target) {
            var _this = this;
            this.value = target.value;
            target.add(function (t) { return _this.setValue(t); }, this);
        };
        Bindable.prototype.unbind = function (target) {
            var _this = this;
            target.remove(function (t) { return _this.setValue(t); }, this);
        };
        Bindable.prototype.setValue = function (value) {
            if (value != this._value) {
                this._value = value;
                this._changeWatcher.dispatch(value);
            }
        };
        return Bindable;
    }());
    signals.Bindable = Bindable;
})(signals || (signals = {}));
if (!window["Bindable"]) {
    window["Bindable"] = signals.Bindable;
}
//# sourceMappingURL=Bindable.js.map