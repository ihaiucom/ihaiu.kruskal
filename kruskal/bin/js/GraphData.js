var ihaiu;
(function (ihaiu) {
    /**
     * 图形数据
     */
    var GraphData = /** @class */ (function () {
        function GraphData() {
            // 节点数量
            this.nodeNum = 0;
            // 边数
            this.edegeNum = 0;
            // 节点
            this.nodes = [];
        }
        GraphData.prototype.init = function () {
            this.x = [];
            this.y = [];
            this.w = [];
            return this;
        };
        // 添加边
        GraphData.prototype.addEdge = function (x, y, w) {
            this.x.push(x);
            this.y.push(y);
            this.w.push(w);
            return this;
        };
        GraphData.prototype.check = function () {
            this.checkNodeNum();
            this.edegeNum = this.x.length;
            if (this.nodes != null && this.nodes.length >= this.nodeNum) {
                return;
            }
            var list = [];
            for (var i = 0; i < this.nodeNum; i++) {
                var node = void 0;
                if (i < this.nodes.length) {
                    node = this.nodes[i];
                }
                else {
                    node = new ihaiu.Node();
                    node.pos.x = Math.floor(Math.random() * 200 + 50);
                    node.pos.y = Math.floor(Math.random() * 200 + 50);
                }
                node.index = i;
                list.push(node);
            }
            this.nodes = list;
        };
        // 矫正顶点数量
        GraphData.prototype.checkNodeNum = function () {
            var x = this.x;
            var y = this.y;
            var num = 0;
            for (var i = 0; i < x.length; i++) {
                num = Math.max(x[i], num);
                num = Math.max(y[i], num);
            }
            this.nodeNum = Math.max(num + 1, this.nodeNum);
        };
        GraphData.parse = function (json) {
            var g = new GraphData();
            try {
                var o = JSON.parse(json);
                g.edegeNum = o.edegeNum;
                g.nodeNum = o.nodeNum;
                g.x = o.x;
                g.y = o.y;
                g.w = o.w;
                var list = [];
                for (var i = 0; i < o.nodes.length; i++) {
                    var item = o.nodes[i];
                    var node = new ihaiu.Node();
                    node.index = item.index;
                    node.pos.x = item.pos.x;
                    node.pos.y = item.pos.y;
                    list.push(node);
                }
                g.nodes = list;
            }
            catch (error) {
                alert("解析json数据错误：" + error);
            }
            return g;
        };
        return GraphData;
    }());
    ihaiu.GraphData = GraphData;
})(ihaiu || (ihaiu = {}));
//# sourceMappingURL=GraphData.js.map