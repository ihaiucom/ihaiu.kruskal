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
    var UI_GraphView = /** @class */ (function (_super) {
        __extends(UI_GraphView, _super);
        function UI_GraphView() {
            return _super.call(this) || this;
        }
        UI_GraphView.createInstance = function () {
            return (fairygui.UIPackage.createObject("Find", "GraphView"));
        };
        UI_GraphView.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_name = (this.getChildAt(0));
        };
        UI_GraphView.URL = "ui://onlyi1f8jaho3";
        return UI_GraphView;
    }(fairygui.GComponent));
    Find.UI_GraphView = UI_GraphView;
})(Find || (Find = {}));
//# sourceMappingURL=UI_GraphView.js.map