namespace ihaiu
{
        
    import WebGL = Laya.WebGL;
    import Stage = Laya.Stage;
    import Sprite = Laya.Sprite;
    import Button = Laya.Button;
    import Handler = Laya.Handler;
    import Event = Laya.Event;

    // 程序入口
    export class GameMain
    {
        kruskal: Kruskal;
        constructor()
        {
            Laya.init(600,400, WebGL);

            Laya.stage.alignV = Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Stage.ALIGN_CENTER;

            Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
            Laya.stage.bgColor = "#232628";

            // new fgui.FguiInstall().installSystem();


            // this.kruskal = new Kruskal();

            // this.test1();
            // this.test2();
            // this.test3();
        }

        test1()
        {
            let x: number[];
            let y: number[];
            let w: number[];
            let n: number;
            let m: number;

            n = 2, m = 2, x = [0, 1], y = [1, 2], w = [1, 2]; //返回2。

            this.kruskal = new Kruskal();
            let result = this.kruskal.calculation(n, m, x, y, w);
            console.log("test1 result=%d", result);

            let result2 = this.kruskal.calculation2(n, m, x, y, w);
            console.log("test1 result2=%d", result2);
        }

        test2()
        {
            let x: number[];
            let y: number[];
            let w: number[];
            let n: number;
            let m: number;
            n = 3, m = 4, x = [0, 0, 1, 2], y = [1, 2, 3, 3], w = [1, 2, 3, 4]; //返回3

            this.kruskal = new Kruskal();
            let result = this.kruskal.calculation(n, m, x, y, w);
            console.log("test2 result=%d", result);

            let result2 = this.kruskal.calculation2(n, m, x, y, w);
            console.log("test2 result2=%d", result2);
        }

        
        test3()
        {
            let x: number[];
            let y: number[];
            let w: number[];
            let n: number;
            let m: number;
            
            n = 5, m = 5, x = [0, 1, 1, 2, 3], y = [1, 2, 3, 4, 4], w = [3, 2, 4, 2, 1]; //返回3

            // this.kruskal = new Kruskal();
            // let result = this.kruskal.calculation(n, m, x, y, w);
            // console.log("test3 result=%d", result);

            // let result2 = this.kruskal.calculation2(n, m, x, y, w);
            // console.log("test3 result2=%d", result2);

            let floyd = new Floyd();
            floyd.calculation(n, m, x, y, w);
            console.log("result:=%d", floyd.getPathMaxArc(0, n - 1));
        }
    }

}

setTimeout(function() 
{ 
    new ihaiu.GameMain();
}, 100);