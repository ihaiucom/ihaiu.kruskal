/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
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
    var UI_LineColorView = /** @class */ (function (_super) {
        __extends(UI_LineColorView, _super);
        function UI_LineColorView() {
            return _super.call(this) || this;
        }
        UI_LineColorView.createInstance = function () {
            return (fairygui.UIPackage.createObject("Find", "LineColorView"));
        };
        UI_LineColorView.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_state = this.getControllerAt(0);
            this.m_line = (this.getChildAt(0));
            this.m_n5 = (this.getChildAt(1));
            this.m_n6 = (this.getChildAt(2));
            this.m_n7 = (this.getChildAt(3));
        };
        UI_LineColorView.URL = "ui://onlyi1f8jahol";
        return UI_LineColorView;
    }(fairygui.GLabel));
    Find.UI_LineColorView = UI_LineColorView;
})(Find || (Find = {}));
//# sourceMappingURL=UI_LineColorView.js.map