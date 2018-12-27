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
    var UI_TextArea = /** @class */ (function (_super) {
        __extends(UI_TextArea, _super);
        function UI_TextArea() {
            return _super.call(this) || this;
        }
        UI_TextArea.createInstance = function () {
            return (fairygui.UIPackage.createObject("Find", "TextArea"));
        };
        UI_TextArea.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_n11 = (this.getChildAt(0));
            this.m_title = (this.getChildAt(1));
        };
        UI_TextArea.URL = "ui://onlyi1f8jaho2";
        return UI_TextArea;
    }(fairygui.GLabel));
    Find.UI_TextArea = UI_TextArea;
})(Find || (Find = {}));
//# sourceMappingURL=UI_TextArea.js.map