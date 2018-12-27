var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Find;
(function (Find) {
    var FindWindow = /** @class */ (function (_super) {
        __extends(FindWindow, _super);
        function FindWindow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FindWindow.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
        };
        return FindWindow;
    }(Find.UI_FindWindow));
    Find.FindWindow = FindWindow;
})(Find || (Find = {}));
//# sourceMappingURL=FindWindow.js.map