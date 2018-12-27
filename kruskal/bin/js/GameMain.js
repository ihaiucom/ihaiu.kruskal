var WebGL = Laya.WebGL;
var Kruskal = ihiau.Krusal;
var Floyd = ihiau.Floyd;
// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(600, 400, WebGL);
        this.kruskal = new Kruskal();
        // this.test1();
        // this.test2();
        this.test3();
    }
    GameMain.prototype.test1 = function () {
        var x;
        var y;
        var w;
        var n;
        var m;
        n = 2, m = 2, x = [0, 1], y = [1, 2], w = [1, 2]; //返回2。
        this.kruskal = new Kruskal();
        var result = this.kruskal.calculation(n, m, x, y, w);
        console.log("test1 result=%d", result);
        var result2 = this.kruskal.calculation2(n, m, x, y, w);
        console.log("test1 result2=%d", result2);
    };
    GameMain.prototype.test2 = function () {
        var x;
        var y;
        var w;
        var n;
        var m;
        n = 3, m = 4, x = [0, 0, 1, 2], y = [1, 2, 3, 3], w = [1, 2, 3, 4]; //返回3
        this.kruskal = new Kruskal();
        var result = this.kruskal.calculation(n, m, x, y, w);
        console.log("test2 result=%d", result);
        var result2 = this.kruskal.calculation2(n, m, x, y, w);
        console.log("test2 result2=%d", result2);
    };
    GameMain.prototype.test3 = function () {
        var x;
        var y;
        var w;
        var n;
        var m;
        n = 5, m = 5, x = [0, 1, 1, 2, 3], y = [1, 2, 3, 4, 4], w = [3, 2, 4, 2, 1]; //返回3
        // this.kruskal = new Kruskal();
        // let result = this.kruskal.calculation(n, m, x, y, w);
        // console.log("test3 result=%d", result);
        // let result2 = this.kruskal.calculation2(n, m, x, y, w);
        // console.log("test3 result2=%d", result2);
        var floyd = new ihiau.Floyd();
        floyd.calculation(n, m, x, y, w);
        console.log("result:=%d", floyd.getPathMaxArc(0, n - 1));
    };
    return GameMain;
}());
setTimeout(function () {
    new GameMain();
}, 100);
//# sourceMappingURL=GameMain.js.map