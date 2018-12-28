var fgui;
(function (fgui) {
    var FguiInstall = /** @class */ (function () {
        function FguiInstall() {
            this.sComplete = new signals.Signal();
        }
        // 初始化系统
        FguiInstall.prototype.installSystem = function () {
            // 设置fgui文件后缀
            fairygui.UIConfig["packageFileExtension"] = "bin";
            // 绑定组件
            Find.FindBinderExtend.bindAll();
            // 加载系统UI
            Laya.loader.load([
                { url: "res/fgui/BlackSkin.bin", type: Laya.Loader.BUFFER },
                { url: "res/fgui/Find.bin", type: Laya.Loader.BUFFER },
                { url: "res/fgui/BlackSkin_atlas0.png", type: Laya.Loader.IMAGE },
                { url: "res/fgui/Find_atlas0.png", type: Laya.Loader.IMAGE },
            ], Laya.Handler.create(this, this.onLoadedSystem));
        };
        // 加载完系统UI
        FguiInstall.prototype.onLoadedSystem = function () {
            fairygui.UIPackage.addPackage("res/fgui/BlackSkin");
            fairygui.UIPackage.addPackage("res/fgui/Find");
            Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
            var findWindow = Find.FindWindow.createInstance();
            fairygui.GRoot.inst.addChild(findWindow);
            ihaiu.GameMain.FindWindow = findWindow;
            this.sComplete.dispatch();
        };
        return FguiInstall;
    }());
    fgui.FguiInstall = FguiInstall;
})(fgui || (fgui = {}));
//# sourceMappingURL=FguiInstall.js.map