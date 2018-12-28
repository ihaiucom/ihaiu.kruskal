var ihaiu;
(function (ihaiu) {
    var WebGL = Laya.WebGL;
    var Stage = Laya.Stage;
    // 程序入口
    var GameMain = /** @class */ (function () {
        function GameMain() {
            Laya.init(600, 400, WebGL);
            Laya.stage.alignV = Stage.ALIGN_LEFT;
            Laya.stage.alignH = Stage.ALIGN_TOP;
            Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
            Laya.stage.bgColor = "#232628";
            var layaCanvas = window.document.getElementById("layaCanvas");
            layaCanvas.removeAttribute("style");
            var layaContainer = window.document.getElementById("layaContainer");
            // layaContainer.removeChild(layaContainer.children.item(1));
            // let webLeftBox = window.document.getElementById("webLeftBox");
            // webLeftBox.appendChild(layaContainer);
            window.document.body.insertBefore(layaContainer, window.document.body.firstChild);
            var fguiInstall = new fgui.FguiInstall();
            fguiInstall.sComplete.addOnce(this.onInstall, this);
            fguiInstall.installSystem();
        }
        GameMain.prototype.onInstall = function () {
            // this.test1();
            // this.test2();
            // this.test3();
            // this.testData_1();
            // this.testData_2();
        };
        return GameMain;
    }());
    ihaiu.GameMain = GameMain;
})(ihaiu || (ihaiu = {}));
setTimeout(function () {
    new ihaiu.GameMain();
}, 100);
//# sourceMappingURL=GameMain.js.map