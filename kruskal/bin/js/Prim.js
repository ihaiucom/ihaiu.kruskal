var ihaiu;
(function (ihaiu) {
    /** 作为记录边的信息，这些边都是达到end的所有边中，权重最小的那个 */
    var PrimAssis = /** @class */ (function () {
        function PrimAssis() {
            // 边的终点
            this.start = 0;
            // 边的起点
            this.end = 0;
            // 边的权重
            this.weight = 0;
        }
        return PrimAssis;
    }());
    ihaiu.PrimAssis = PrimAssis;
    /** 最小生成树之Prim普里姆算法 */
    var Prim = /** @class */ (function () {
        function Prim() {
        }
        /** 获取路径成本 */
        Prim.prototype.getArcs = function (from, to) {
            return this.arcs[from][to];
        };
        /** 是否有连接线 */
        Prim.prototype.hasEdge = function (from, to) {
            var arc = this.getArcs(from, to);
            return arc != Number.MAX_VALUE && arc != 0;
        };
        Prim.prototype.calculationByGraphData = function (g, beginIndex) {
            if (beginIndex === void 0) { beginIndex = 0; }
            g.check();
            var g2 = this.calculation(g.nodeNum, g.edegeNum, g.x, g.y, g.w, beginIndex);
            g2.nodeNum = g.nodeNum;
            g2.nodes = g.nodes;
            return g2;
        };
        /** 计算寻路 */
        Prim.prototype.calculation = function (nodeNum, edegeNum, x, y, w, beginIndex) {
            if (beginIndex === void 0) { beginIndex = 0; }
            // 结果图
            var result = new ihaiu.GraphData().init();
            // 成本矩阵
            var arcs = [];
            // 初始化矩阵值
            for (var u = 0; u < nodeNum; u++) {
                arcs[u] = [];
                for (var v = 0; v < nodeNum; v++) {
                    arcs[u][v] = Number.MAX_VALUE;
                }
            }
            // 输入边
            for (var i = 0; i < x.length; i++) {
                var u = x[i];
                var v = y[i];
                arcs[u][v] = w[i];
                arcs[v][u] = w[i];
            }
            //closeEdge这个数组记录到达某个顶点的各个边中的权重最大的那个边
            var closeEdges = [];
            for (var i = 0; i < nodeNum; i++) {
                closeEdges.push(new PrimAssis());
            }
            //进行closeEdge的初始化，更加开始起点进行初始化
            for (var i = 0; i < nodeNum; i++) {
                if (i != beginIndex) {
                    var edge = closeEdges[i];
                    edge.start = beginIndex;
                    edge.end = i;
                    edge.weight = arcs[beginIndex][i];
                }
            }
            //把起点的closeEdge中的值设置为-1，代表已经加入到集合U了
            closeEdges[beginIndex].weight = -1;
            //访问剩下的顶点，并加入依次加入到集合U
            for (var i = 1; i < nodeNum; i++) {
                var minWeight = Number.MAX_VALUE;
                var minIndex = 0;
                //寻找数组close_edge中权重最小的那个边
                for (var k = 0; k < nodeNum; k++) {
                    if (closeEdges[k].weight != -1) {
                        if (closeEdges[k].weight < minWeight) {
                            minWeight = closeEdges[k].weight;
                            minIndex = k;
                        }
                    }
                }
                var minEdge = closeEdges[minIndex];
                //将权重最小的那条边的终点也加入到集合U
                minEdge.weight = -1;
                //输出对应的边的信息
                result.addEdge(minEdge.start, minEdge.end, arcs[minEdge.start][minEdge.end]);
                //更新我们的close_edge数组。
                for (var k = 0; k < nodeNum; k++) {
                    var edge = closeEdges[k];
                    if (arcs[minEdge.end][k] < edge.weight) {
                        edge.weight = arcs[minEdge.end][k];
                        edge.start = minEdge.end;
                        edge.end = k;
                    }
                }
            }
            this.arcs = arcs;
            this.result = result;
            return result;
        };
        return Prim;
    }());
    ihaiu.Prim = Prim;
})(ihaiu || (ihaiu = {}));
//# sourceMappingURL=Prim.js.map