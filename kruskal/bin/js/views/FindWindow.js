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
var ihaiu;
(function (ihaiu) {
    var Sprite = Laya.Sprite;
    var Button = Laya.Button;
    var Event = Laya.Event;
    var FindWindow = /** @class */ (function (_super) {
        __extends(FindWindow, _super);
        function FindWindow() {
            var _this = _super.call(this) || this;
            _this.mouseEnabled = true;
            _this.mouseThrough = true;
            _this.initView();
            return _this;
        }
        FindWindow.prototype.initView = function () {
            var skins = ["https://layaair.ldc.layabox.com/demo/h5/res/ui/tab1.png", "https://layaair.ldc.layabox.com/demo/h5/res/ui/tab2.png"];
            var btn = new Button(skins[0], "设置数据");
            btn.on(Event.CLICK, this, this.onClickOpenSettingDataPanel);
            Laya.stage.addChild(btn);
        };
        FindWindow.prototype.onClickOpenSettingDataPanel = function () {
            console.log("onClickOpenSettingDataPanel");
        };
        return FindWindow;
    }(Sprite));
    ihaiu.FindWindow = FindWindow;
})(ihaiu || (ihaiu = {}));
//# sourceMappingURL=FindWindow.js.map