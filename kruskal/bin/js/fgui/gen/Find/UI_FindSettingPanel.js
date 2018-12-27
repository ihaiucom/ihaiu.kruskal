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
    var UI_FindSettingPanel = /** @class */ (function (_super) {
        __extends(UI_FindSettingPanel, _super);
        function UI_FindSettingPanel() {
            return _super.call(this) || this;
        }
        UI_FindSettingPanel.createInstance = function () {
            return (fairygui.UIPackage.createObject("Find", "FindSettingPanel"));
        };
        UI_FindSettingPanel.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_n5 = (this.getChildAt(0));
            this.m_okButton = (this.getChildAt(1));
            this.m_cancelButton = (this.getChildAt(2));
            this.m_nodeNumInput = (this.getChildAt(3));
            this.m_n6 = (this.getChildAt(4));
            this.m_n8 = (this.getChildAt(5));
            this.m_edgeInput = (this.getChildAt(6));
        };
        UI_FindSettingPanel.URL = "ui://onlyi1f8jaho1";
        return UI_FindSettingPanel;
    }(fairygui.GComponent));
    Find.UI_FindSettingPanel = UI_FindSettingPanel;
})(Find || (Find = {}));
//# sourceMappingURL=UI_FindSettingPanel.js.map