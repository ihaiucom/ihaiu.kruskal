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
    var UI_NodeColorView = /** @class */ (function (_super) {
        __extends(UI_NodeColorView, _super);
        function UI_NodeColorView() {
            return _super.call(this) || this;
        }
        UI_NodeColorView.createInstance = function () {
            return (fairygui.UIPackage.createObject("Find", "NodeColorView"));
        };
        UI_NodeColorView.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_state = this.getControllerAt(0);
            this.m_bg = (this.getChildAt(0));
            this.m_n3 = (this.getChildAt(1));
            this.m_n4 = (this.getChildAt(2));
            this.m_n5 = (this.getChildAt(3));
            this.m_n6 = (this.getChildAt(4));
        };
        UI_NodeColorView.URL = "ui://onlyi1f8jahoc";
        return UI_NodeColorView;
    }(fairygui.GLabel));
    Find.UI_NodeColorView = UI_NodeColorView;
})(Find || (Find = {}));
//# sourceMappingURL=UI_NodeColorView.js.map