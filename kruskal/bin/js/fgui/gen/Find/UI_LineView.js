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
    var UI_LineView = /** @class */ (function (_super) {
        __extends(UI_LineView, _super);
        function UI_LineView() {
            return _super.call(this) || this;
        }
        UI_LineView.createInstance = function () {
            return (fairygui.UIPackage.createObject("Find", "LineView"));
        };
        UI_LineView.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_state = this.getControllerAt(0);
            this.m_line = (this.getChildAt(0));
            this.m_title = (this.getChildAt(1));
        };
        UI_LineView.URL = "ui://onlyi1f8jaho6";
        return UI_LineView;
    }(fairygui.GLabel));
    Find.UI_LineView = UI_LineView;
})(Find || (Find = {}));
//# sourceMappingURL=UI_LineView.js.map