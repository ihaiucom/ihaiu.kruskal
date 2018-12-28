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
    var Prim = ihaiu.Prim;
    var Floyd = ihaiu.Floyd;
    var NodeState = ihaiu.NodeState;
    var LineState = ihaiu.LineState;
    /** 操作类型 */
    var OPType = /** @class */ (function () {
        function OPType() {
        }
        OPType.Drag = 0;
        OPType.Start = 1;
        OPType.End = 2;
        return OPType;
    }());
    Find.OPType = OPType;
    /** 图形视图 */
    var GraphView = /** @class */ (function (_super) {
        __extends(GraphView, _super);
        function GraphView() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 视图--节点
            _this.nodeViews = [];
            _this.nodeViewsPool = [];
            // 视图--连接线
            _this.lineViews = [];
            _this.lineViewsPool = [];
            _this.lineViewMap = {};
            // 设置寻路点
            _this.fromIndex = -1;
            _this.toIndex = -1;
            return _this;
        }
        GraphView.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.graphics = this.displayObject.graphics;
        };
        Object.defineProperty(GraphView.prototype, "isUseMST", {
            // 是否使用最小生成树
            get: function () {
                return this.findWindow.isUseMST;
            },
            enumerable: true,
            configurable: true
        });
        // 刷新数据
        GraphView.prototype.refreshData = function () {
            var from = this.fromIndex;
            var to = this.toIndex;
            this.setData(this.sourceGraphData, from, to);
        };
        // 设置数据
        GraphView.prototype.setData = function (g, fromIndex, toIndex) {
            if (fromIndex === void 0) { fromIndex = -1; }
            if (toIndex === void 0) { toIndex = -1; }
            this.findWindow.clearLog();
            g.check();
            var prim = new Prim();
            var g2 = prim.calculationByGraphData(g);
            var floyd = new Floyd();
            floyd.calculationByGraphData(this.isUseMST ? g2 : g);
            console.log("The minimum risk value is: %d", floyd.getPathMaxArc(0, floyd.nodeNum - 1));
            this.prim = prim;
            this.floyd = floyd;
            this.sourceGraphData = g;
            this.msgGraphData = g2;
            this.drawGraph();
            var from = fromIndex;
            if (from == -1) {
                from = 0;
            }
            this.setFrom(from);
            var to = toIndex;
            if (to == -1 || to >= g.nodeNum) {
                to = g.nodeNum - 1;
            }
            this.setTo(to);
            this.refreshState();
        };
        GraphView.prototype.drawGraph = function () {
            var grapData = this.sourceGraphData;
            this.drawNode();
            this.drawLine();
        };
        // 绘制节点
        GraphView.prototype.drawNode = function () {
            this.clearNodes();
            var grapData = this.sourceGraphData;
            for (var i = 0; i < grapData.nodeNum; i++) {
                var nodeView = this.getNode();
                nodeView.setNodeData(grapData.nodes[i]);
                this.addChild(nodeView);
                this.nodeViews.push(nodeView);
            }
        };
        // 绘制连接线
        GraphView.prototype.drawLine = function () {
            this.clearLines();
            var grapData = this.sourceGraphData;
            for (var i = 0; i < grapData.x.length; i++) {
                var x = grapData.x[i];
                var y = grapData.y[i];
                var w = grapData.w[i];
                var view = this.getLine();
                var from = grapData.nodes[x];
                var to = grapData.nodes[y];
                view.setNode(from, to, w);
                this.addChildAt(view, 0);
                this.lineViews.push(view);
                this.setLineByKey(x, y, view);
            }
        };
        // 刷新连接线
        GraphView.prototype.refreshLine = function () {
            for (var i = 0; i < this.lineViews.length; i++) {
                var view = this.lineViews[i];
                view.refresh();
            }
        };
        GraphView.prototype.setFrom = function (index) {
            this.fromIndex = index;
            this.nodeViews[index].setState(NodeState.Start);
        };
        GraphView.prototype.setTo = function (index) {
            this.toIndex = index;
            this.nodeViews[index].setState(NodeState.End);
        };
        // 寻路
        GraphView.prototype.findPath = function () {
            this.refreshState();
        };
        GraphView.prototype.resetState = function () {
            for (var i = 0; i < this.nodeViews.length; i++) {
                var state = NodeState.Normal;
                if (i == this.fromIndex) {
                    state = NodeState.Start;
                }
                else if (i == this.toIndex) {
                    state = NodeState.End;
                }
                this.nodeViews[i].setState(state);
            }
            for (var i = 0; i < this.lineViews.length; i++) {
                this.lineViews[i].setState(LineState.Normal);
            }
        };
        // 刷新状态
        GraphView.prototype.refreshState = function () {
            var pointIndexs = this.floyd.getPath(this.fromIndex, this.toIndex);
            if (pointIndexs) {
                // 刷新节点
                for (var i = 0; i < this.nodeViews.length; i++) {
                    var state = NodeState.Normal;
                    if (i == this.fromIndex) {
                        state = NodeState.Start;
                    }
                    else if (i == this.toIndex) {
                        state = NodeState.End;
                    }
                    else if (pointIndexs.indexOf(i) != -1) {
                        state = NodeState.Greend;
                    }
                    this.nodeViews[i].setState(state);
                }
                // 刷新连线
                for (var i = 0; i < this.lineViews.length; i++) {
                    var view = this.lineViews[i];
                    var state = LineState.Normal;
                    if (!this.floyd.hasEdge(view.fromNode.index, view.toNode.index)) {
                        state = LineState.Disable;
                    }
                    this.lineViews[i].setState(state);
                }
                var maxArc = this.floyd.getPathMaxArcByPath(pointIndexs);
                for (var i = 0; i < pointIndexs.length - 1; i++) {
                    var view = this.getLineByKey(pointIndexs[i], pointIndexs[i + 1]);
                    if (view) {
                        var state = LineState.Green;
                        if (this.floyd.getArcs(pointIndexs[i], pointIndexs[i + 1]) >= maxArc) {
                            state = LineState.GreenMax;
                        }
                        view.setState(state);
                    }
                }
            }
        };
        //==========================================
        // 节点
        //------------------------------------------
        GraphView.prototype.getNode = function () {
            if (this.nodeViewsPool.length > 0) {
                return this.nodeViewsPool.pop();
            }
            var nodeView = Find.NodeView.createInstance();
            nodeView.graphView = this;
            nodeView.draggable = true;
            nodeView.dragBounds = new laya.maths.Rectangle(50, 50, this.width - 100, this.height - 100);
            nodeView.sClick.add(this.onClickNode, this);
            return nodeView;
        };
        GraphView.prototype.onClickNode = function (nodeVeiw) {
            var op = this.findWindow.m_opList.selectedIndex;
            switch (op) {
                case OPType.Start:
                    this.setFrom(nodeVeiw.node.index);
                    this.refreshState();
                    break;
                case OPType.End:
                    this.setTo(nodeVeiw.node.index);
                    this.refreshState();
                    break;
            }
        };
        GraphView.prototype.clearNodes = function () {
            while (this.nodeViews.length > 0) {
                var nodeView = this.nodeViews.pop();
                nodeView.removeFromParent();
                this.nodeViewsPool.push(nodeView);
            }
        };
        //==========================================
        // 连接线
        //------------------------------------------
        GraphView.prototype.getLine = function () {
            if (this.lineViewsPool.length > 0) {
                return this.lineViewsPool.pop();
            }
            var view = Find.LineView.createInstance();
            view.graphView = this;
            return view;
        };
        GraphView.prototype.clearLines = function () {
            this.lineViewMap = {};
            while (this.lineViews.length > 0) {
                var view = this.lineViews.pop();
                view.removeFromParent();
                this.lineViewsPool.push(view);
            }
        };
        GraphView.prototype.getLineKey = function (from, to) {
            var key = from + "_" + to;
            if (from > to) {
                key = to + "_" + from;
            }
            return key;
        };
        GraphView.prototype.getLineByKey = function (from, to) {
            return this.lineViewMap[this.getLineKey(from, to)];
        };
        GraphView.prototype.setLineByKey = function (from, to, view) {
            this.lineViewMap[this.getLineKey(from, to)] = view;
        };
        return GraphView;
    }(Find.UI_GraphView));
    Find.GraphView = GraphView;
})(Find || (Find = {}));
//# sourceMappingURL=GraphView.js.map