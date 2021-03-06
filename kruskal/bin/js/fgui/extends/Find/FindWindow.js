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
    var GraphData = ihaiu.GraphData;
    var FindWindow = /** @class */ (function (_super) {
        __extends(FindWindow, _super);
        function FindWindow() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 是否使用最小生成树
            _this._isUseMST = true;
            return _this;
        }
        FindWindow.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            window["findWindow"] = this;
            this.graph = this.m_graph;
            this.graph.findWindow = this;
            this.m_opList.selectedIndex = Find.OPType.End;
            this.isUseMst = true;
            this.m_mstList.on(fairygui.Events.CLICK_ITEM, this, this.onClickMstItem);
            this.graphTextArea = document.getElementById("graphTextArea");
            this.logTextArea = document.getElementById("logTextArea");
            this.m_exportDataButton.onClick(this, this.onClickExportDataButton);
            this.m_clearLogButton.onClick(this, this.clearLog);
            this.m_setDataButton_0.onClick(this, this.testData_0);
            this.m_setDataButton_1.onClick(this, this.testData_1);
            this.m_setDataButton_2.onClick(this, this.testData_2);
            this.testData_0();
        };
        // 设置数据
        FindWindow.prototype.onClickSetDataButton = function () {
            var json = this.graphTextArea.value;
            this.setJsonData(json);
        };
        // 导出数据
        FindWindow.prototype.onClickExportDataButton = function () {
            this.graphTextArea.value = JSON.stringify(this.graph.sourceGraphData);
        };
        // 清楚日志
        FindWindow.prototype.clearLog = function () {
            this.logTextArea.value = "";
        };
        // 点击了最小生存树
        FindWindow.prototype.onClickMstItem = function () {
            if (this._isUseMST == this.isUseMST) {
                return;
            }
            this._isUseMST = this.isUseMST;
            this.graph.refreshData();
        };
        Object.defineProperty(FindWindow.prototype, "isUseMST", {
            get: function () {
                return this.m_mstList.selectedIndex == 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FindWindow.prototype, "isUseMst", {
            set: function (val) {
                this.m_mstList.selectedIndex = val ? 0 : 1;
                this._isUseMST = val;
            },
            enumerable: true,
            configurable: true
        });
        // 设置json数据
        FindWindow.prototype.setJsonData = function (json) {
            var g = GraphData.parse(json);
            this.setData(g);
        };
        // 设置数据
        FindWindow.prototype.setData = function (g) {
            this.clearLog();
            this.graph.setData(g);
        };
        FindWindow.prototype.testData_0 = function () {
            // let g = new GraphData();
            // g.x = [0, 1, 1, 2, 3];
            // g.y = [1, 2, 3, 4, 4];
            // g.w = [3, 2, 4, 2, 1];
            // g.nodeNum = 4;
            // g.edegeNum = g.x.length;
            // this.setData(g);
            var json = '{"nodeNum":5,"edegeNum":5,"nodes":[{"pos":{"x":143,"y":50},"index":0},{"pos":{"x":138,"y":133},"index":1},{"pos":{"x":104,"y":191},"index":2},{"pos":{"x":197,"y":242},"index":3},{"pos":{"x":140,"y":239},"index":4}],"x":[0,1,1,2,3],"y":[1,2,3,4,4],"w":[3,2,4,2,1]}';
            this.setJsonData(json);
        };
        FindWindow.prototype.testData_1 = function () {
            // let g = new GraphData();
            // g.x = [0,6,0,2,18,10,8,20,18,10,17,4,13,0,16,11,20,2,11,20,8,4,6,2,14,0,13,20,14,11,4,21,10,6,0,18,8,11,11,1,12,20,10,12,14,0,19,18,21,16,6,2,20,0,2,4,2]
            // g.y = [21,12,16,4,12,16,18,10,2,21,16,8,10,18,18,20,0,0,18,14,10,0,5,5,6,10,21,8,10,10,14,2,12,0,7,4,16,17,21,2,2,6,15,14,18,9,1,20,4,4,18,16,4,15,11,1,20]
            // g.w = [935,34009,59451,45352,14875,83529,89136,67961,37503,6026,27485,218,71477,84628,13389,50306,25117,79418,41787,48302,33630,31638,46513,53891,31721,195,74893,74913,93905,51507,42081,17165,17281,90736,42233,97501,15441,68372,60001,67999,8796,27121,47312,2666,49181,15835,86363,6183,7637,93817,98081,80625,82855,55521,70109,99009,90159]
            // g.nodeNum = 21;
            // g.edegeNum = g.x.length;
            // this.setData(g);
            var json = '{"nodeNum":22,"edegeNum":57,"nodes":[{"pos":{"x":113,"y":142},"index":0},{"pos":{"x":101,"y":63},"index":1},{"pos":{"x":164,"y":54},"index":2},{"pos":{"x":55,"y":320},"index":3},{"pos":{"x":104,"y":287},"index":4},{"pos":{"x":370,"y":50},"index":5},{"pos":{"x":437,"y":61},"index":6},{"pos":{"x":50,"y":147},"index":7},{"pos":{"x":150,"y":296},"index":8},{"pos":{"x":50,"y":186},"index":9},{"pos":{"x":188,"y":162},"index":10},{"pos":{"x":437,"y":276},"index":11},{"pos":{"x":240,"y":50},"index":12},{"pos":{"x":223,"y":244},"index":13},{"pos":{"x":311,"y":50},"index":14},{"pos":{"x":259,"y":122},"index":15},{"pos":{"x":270,"y":314},"index":16},{"pos":{"x":382,"y":320},"index":17},{"pos":{"x":392,"y":204},"index":18},{"pos":{"x":58,"y":109},"index":19},{"pos":{"x":452,"y":131},"index":20},{"pos":{"x":70,"y":236},"index":21}],"x":[0,6,0,2,18,10,8,20,18,10,17,4,13,0,16,11,20,2,11,20,8,4,6,2,14,0,13,20,14,11,4,21,10,6,0,18,8,11,11,1,12,20,10,12,14,0,19,18,21,16,6,2,20,0,2,4,2],"y":[21,12,16,4,12,16,18,10,2,21,16,8,10,18,18,20,0,0,18,14,10,0,5,5,6,10,21,8,10,10,14,2,12,0,7,4,16,17,21,2,2,6,15,14,18,9,1,20,4,4,18,16,4,15,11,1,20],"w":[935,34009,59451,45352,14875,83529,89136,67961,37503,6026,27485,218,71477,84628,13389,50306,25117,79418,41787,48302,33630,31638,46513,53891,31721,195,74893,74913,93905,51507,42081,17165,17281,90736,42233,97501,15441,68372,60001,67999,8796,27121,47312,2666,49181,15835,86363,6183,7637,93817,98081,80625,82855,55521,70109,99009,90159]}';
            this.setJsonData(json);
        };
        FindWindow.prototype.testData_2 = function () {
            // let g = new GraphData();
            // g.x = [0,0,3,0,1,5,5,0,11,0,1,5,12,2,12,3,14,9,4,1,2,10,0,6,10,2,2,8,9,13,4,14,13,7,0,9,8,0,2,0,13,12,11,5,14,14,0,3,10,5,4,12,12,1,14,10,10,12,5,6,15,11,2,1,3,9,11,12,10,14,6,10,12,1,4,1,8,10,3,9,13,4,10,6,4,6,3,13,7,9,13,3,4,7,7,15,2,6,6,1,15,15,2,3,6,14,9,11,2,5,15,2,7,15,3,1,5,1,13]
            // g.y = [15,7,8,11,0,0,4,10,2,9,4,14,4,12,8,1,8,2,8,5,0,4,8,11,13,4,8,10,7,14,6,6,6,8,13,13,5,12,14,14,8,7,14,10,12,15,6,0,2,12,0,11,10,8,7,1,11,15,11,8,5,13,13,14,11,12,7,3,7,10,12,3,13,15,11,11,9,6,5,6,15,9,15,15,14,3,15,7,4,10,5,4,13,1,3,8,3,5,1,12,4,9,15,14,7,9,5,8,6,7,11,1,2,7,9,9,2,13,3]
            // g.w = [98737,25594,93437,6242,4021,85593,49106,80313,86433,7439,63281,66498,11065,55961,40850,36571,53394,48551,75802,45577,50801,16246,99905,12301,95430,46641,15151,66858,26256,61817,26241,53249,36038,17433,15939,39647,3031,71721,71546,40145,16385,42928,74959,29414,38973,10676,72912,82047,22241,87633,99101,23241,42017,79035,23283,37164,57041,66185,47929,88161,55180,63622,52383,94641,81217,83186,58081,57311,55057,68722,84161,29662,96779,86373,71657,65761,78376,52239,6321,11433,27204,74425,99619,71926,91136,90313,26470,64601,61665,62077,75091,33121,69401,49817,47741,90683,8929,78939,52716,52917,96033,40497,65485,75320,1461,19905,37603,4353,39366,70546,30517,72611,71431,86347,57675,86309,71521,73945,67151]
            // g.nodeNum = 15;
            // g.edegeNum = g.x.length;
            // this.setData(g);
            var json = '{"nodeNum":16,"edegeNum":119,"nodes":[{"pos":{"x":106,"y":146},"index":0},{"pos":{"x":51,"y":73},"index":1},{"pos":{"x":413,"y":93},"index":2},{"pos":{"x":346,"y":53},"index":3},{"pos":{"x":430,"y":217},"index":4},{"pos":{"x":292,"y":50},"index":5},{"pos":{"x":100,"y":292},"index":6},{"pos":{"x":50,"y":320},"index":7},{"pos":{"x":222,"y":50},"index":8},{"pos":{"x":128,"y":229},"index":9},{"pos":{"x":431,"y":162},"index":10},{"pos":{"x":176,"y":96},"index":11},{"pos":{"x":353,"y":238},"index":12},{"pos":{"x":127,"y":50},"index":13},{"pos":{"x":229,"y":320},"index":14},{"pos":{"x":363,"y":300},"index":15}],"x":[0,0,3,0,1,5,5,0,11,0,1,5,12,2,12,3,14,9,4,1,2,10,0,6,10,2,2,8,9,13,4,14,13,7,0,9,8,0,2,0,13,12,11,5,14,14,0,3,10,5,4,12,12,1,14,10,10,12,5,6,15,11,2,1,3,9,11,12,10,14,6,10,12,1,4,1,8,10,3,9,13,4,10,6,4,6,3,13,7,9,13,3,4,7,7,15,2,6,6,1,15,15,2,3,6,14,9,11,2,5,15,2,7,15,3,1,5,1,13],"y":[15,7,8,11,0,0,4,10,2,9,4,14,4,12,8,1,8,2,8,5,0,4,8,11,13,4,8,10,7,14,6,6,6,8,13,13,5,12,14,14,8,7,14,10,12,15,6,0,2,12,0,11,10,8,7,1,11,15,11,8,5,13,13,14,11,12,7,3,7,10,12,3,13,15,11,11,9,6,5,6,15,9,15,15,14,3,15,7,4,10,5,4,13,1,3,8,3,5,1,12,4,9,15,14,7,9,5,8,6,7,11,1,2,7,9,9,2,13,3],"w":[98737,25594,93437,6242,4021,85593,49106,80313,86433,7439,63281,66498,11065,55961,40850,36571,53394,48551,75802,45577,50801,16246,99905,12301,95430,46641,15151,66858,26256,61817,26241,53249,36038,17433,15939,39647,3031,71721,71546,40145,16385,42928,74959,29414,38973,10676,72912,82047,22241,87633,99101,23241,42017,79035,23283,37164,57041,66185,47929,88161,55180,63622,52383,94641,81217,83186,58081,57311,55057,68722,84161,29662,96779,86373,71657,65761,78376,52239,6321,11433,27204,74425,99619,71926,91136,90313,26470,64601,61665,62077,75091,33121,69401,49817,47741,90683,8929,78939,52716,52917,96033,40497,65485,75320,1461,19905,37603,4353,39366,70546,30517,72611,71431,86347,57675,86309,71521,73945,67151]}';
            this.setJsonData(json);
        };
        return FindWindow;
    }(Find.UI_FindWindow));
    Find.FindWindow = FindWindow;
})(Find || (Find = {}));
//# sourceMappingURL=FindWindow.js.map