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
        static FindWindow : Find.FindWindow;
        constructor()
        {
            Laya.init(600,400, WebGL);

            Laya.stage.alignV = Stage.ALIGN_LEFT;
            Laya.stage.alignH = Stage.ALIGN_TOP;

            Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
            Laya.stage.bgColor = "#232628";

            let layaCanvas = window.document.getElementById("layaCanvas");
            layaCanvas.removeAttribute("style");


            let layaContainer = window.document.getElementById("layaContainer");
            // layaContainer.removeChild(layaContainer.children.item(1));
            // let webLeftBox = window.document.getElementById("webLeftBox");
            // webLeftBox.appendChild(layaContainer);
            window.document.body.insertBefore(layaContainer, window.document.body.firstChild);

            let fguiInstall = new fgui.FguiInstall();
            fguiInstall.sComplete.addOnce(this.onInstall, this);
            fguiInstall.installSystem();


        }

        onInstall()
        {
            // this.test1();
            // this.test2();
            // this.test3();
        
            // this.testData_1();
            // this.testData_2();
        }

    }

}

setTimeout(function() 
{ 
    new ihaiu.GameMain();
}, 100);
