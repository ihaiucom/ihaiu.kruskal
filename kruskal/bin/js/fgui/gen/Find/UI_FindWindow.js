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
    var UI_FindWindow = /** @class */ (function (_super) {
        __extends(UI_FindWindow, _super);
        function UI_FindWindow() {
            return _super.call(this) || this;
        }
        UI_FindWindow.createInstance = function () {
            return (fairygui.UIPackage.createObject("Find", "FindWindow"));
        };
        UI_FindWindow.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_logTexArea = (this.getChildAt(0));
            this.m_openSettingButton = (this.getChildAt(1));
            this.m_openSettingButton_2 = (this.getChildAt(2));
            this.m_settingPanel = (this.getChildAt(3));
        };
        UI_FindWindow.URL = "ui://onlyi1f8jaho0";
        return UI_FindWindow;
    }(fairygui.GComponent));
    Find.UI_FindWindow = UI_FindWindow;
})(Find || (Find = {}));
//# sourceMappingURL=UI_FindWindow.js.map