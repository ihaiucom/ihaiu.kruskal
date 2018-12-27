var ihiau;
(function (ihiau) {
    var SmallestRisk = /** @class */ (function () {
        function SmallestRisk() {
            /** 节点数量 */
            this.nodeNum = 0;
            /** 边列表 */
            this.edgeList = [];
            /** 节点列表 */
            this.nodeList = [];
            /** 危险字典 （如果要优化可以用一变矩阵）*/
            this.risks = [];
        }
        /**
         * 添加边
         */
        SmallestRisk.prototype.addEdge = function (from, to, cost) {
            var edges = new ihiau.Edge();
            edges.from = from;
            edges.to = to;
            edges.cost = cost;
            this.edgeList.push(edges);
        };
        /**
         * 初始化边数据
         */
        SmallestRisk.prototype.initEdges = function (froms, tos, costs) {
            this.edgeList = [];
            var len = froms.length;
            for (var i = 0; i < len; i++) {
                this.addEdge(froms[i], tos[i], costs[i]);
            }
        };
        /**
         * 初始化节点数据
         */
        SmallestRisk.prototype.initNodes = function () {
            var nodeNum = this.nodeNum;
            // 初始化节点列表
            for (var i = 0; i < nodeNum; i++) {
                var node = new ihiau.Node();
                node.index = i;
                this.nodeList.push(node);
            }
            // 初始化危险值矩阵
            for (var x = 0; x < nodeNum; x++) {
                var arr = [];
                this.risks.push(arr);
                for (var y = 0; y < nodeNum; y++) {
                    arr.push(-1);
                }
            }
            for (var i = 0; i < this.edgeList.length; i++) {
                var edge = this.edgeList[i];
                var fromNode = this.nodeList[edge.from];
                var toNode = this.nodeList[edge.to];
                // 设在节点的子节点
                fromNode.childes.push(fromNode);
                toNode.childes.push(fromNode);
                // 设置危险值矩阵
                this.risks[edge.from][edge.to] = edge.cost;
                this.risks[edge.to][edge.from] = edge.cost;
            }
        };
        SmallestRisk.prototype.findPaths = function (from, to) {
            var fromNode = this.nodeList[from];
            var paths = [];
            for (var i = 0; i < fromNode.childes.length; i++) {
            }
            return paths;
        };
        SmallestRisk.prototype.findPath = function (fromNode, toNode, list) {
            for (var i = 0; i < fromNode.childes.length; i++) {
            }
        };
        SmallestRisk.prototype.calculation = function (nodeNum, edegeNum, x, y, w) {
            this.nodeNum = nodeNum;
            this.initEdges(x, y, w);
        };
        return SmallestRisk;
    }());
    ihiau.SmallestRisk = SmallestRisk;
})(ihiau || (ihiau = {}));
//# sourceMappingURL=SmallestRisk.js.map