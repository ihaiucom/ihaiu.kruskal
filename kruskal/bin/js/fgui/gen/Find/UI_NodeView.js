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
    var UI_NodeView = /** @class */ (function (_super) {
        __extends(UI_NodeView, _super);
        function UI_NodeView() {
            return _super.call(this) || this;
        }
        UI_NodeView.createInstance = function () {
            return (fairygui.UIPackage.createObject("Find", "NodeView"));
        };
        UI_NodeView.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_state = this.getControllerAt(0);
            this.m_bg = (this.getChildAt(0));
            this.m_title = (this.getChildAt(1));
            this.m_name = (this.getChildAt(2));
        };
        UI_NodeView.URL = "ui://onlyi1f8jaho5";
        return UI_NodeView;
    }(fairygui.GLabel));
    Find.UI_NodeView = UI_NodeView;
})(Find || (Find = {}));
//# sourceMappingURL=UI_NodeView.js.map