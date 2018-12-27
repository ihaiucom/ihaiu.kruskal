var ihaiu;
(function (ihaiu) {
    var Floyd = /** @class */ (function () {
        function Floyd() {
        }
        /** 获取路径 */
        Floyd.prototype.getPath = function (from, to) {
            return this.pathMap[from][to];
        };
        /** 获取路径成本 */
        Floyd.prototype.getArcs = function (from, to) {
            return this.arcs[from][to];
        };
        /** 获取路径中最大成本 */
        Floyd.prototype.getPathMaxArc = function (from, to) {
            return this.getPathMaxArcByPath(this.getPath(from, to));
        };
        Floyd.prototype.getPathMaxArcByPath = function (ponts) {
            var max = -1;
            for (var i = 0; i < ponts.length - 1; i++) {
                var u = ponts[i];
                var v = ponts[i + 1];
                var d = this.arcs[u][v];
                if (d > max) {
                    max = d;
                }
            }
            return max;
        };
        /** 计算寻路 */
        Floyd.prototype.calculation = function (nodeNum, edegeNum, x, y, w) {
            // 成本矩阵
            var arcs = [];
            // 路径矩阵
            var path = [];
            // 初始化矩阵值
            for (var u = 0; u < nodeNum; u++) {
                arcs[u] = [];
                path[u] = [];
                for (var v = 0; v < nodeNum; v++) {
                    if (u != v) {
                        arcs[u][v] = Number.MAX_VALUE;
                    }
                    else {
                        // 同一个点，成本是0
                        arcs[u][v] = 0;
                    }
                    path[u][v] = v;
                }
            }
            this.print(arcs, nodeNum, -1);
            // 输入边
            for (var i = 0; i < x.length; i++) {
                var u = x[i];
                var v = y[i];
                arcs[u][v] = w[i];
                arcs[v][u] = w[i];
            }
            // floyd算法
            // if ( arcs[i][k]  + arcs[k][j] < arcs[i][j] )
            //     arcs[i][j] = arcs[i][k] + arcs[k][j]
            for (var k = 0; k < nodeNum; k++) {
                for (var i = 0; i < nodeNum; i++) {
                    for (var j = 0; j < nodeNum; j++) {
                        if (arcs[i][k] < Number.MAX_VALUE && arcs[k][j] < Number.MAX_VALUE) {
                            var d = arcs[i][k] + arcs[k][j];
                            if (d < arcs[i][j]) {
                                arcs[i][j] = d;
                                path[i][j] = path[i][k];
                            }
                        }
                    }
                }
                this.print(arcs, nodeNum, k);
            }
            // 路径字典
            var pathMap = this.generatePathMap(arcs, path, nodeNum);
            this.printPathMap(arcs, pathMap, nodeNum);
            this.arcs = arcs;
            this.pathMap = pathMap;
        };
        // 生存路径字典
        Floyd.prototype.generatePathMap = function (arcs, path, nodeNum) {
            // 路径字典
            var pathMap = [];
            var temp = 0;
            for (var u = 0; u < nodeNum; u++) {
                pathMap[u] = [];
                var str = "";
                for (var v = 0; v < nodeNum; v++) {
                    var points = pathMap[u][v] = [];
                    points.push(u);
                    temp = path[u][v];
                    while (temp != v) {
                        points.push(temp);
                        temp = path[temp][v];
                    }
                    points.push(v);
                }
            }
            return pathMap;
        };
        // 打印矩阵
        Floyd.prototype.print = function (arcs, nodeNum, index) {
            console.log("step of %d:", index);
            for (var u = 0; u < nodeNum; u++) {
                var str = "";
                for (var v = 0; v < nodeNum; v++) {
                    if (arcs[u][v] < Number.MAX_VALUE) {
                        str += arcs[u][v] + "  ";
                    }
                    else {
                        str += "∞  ";
                    }
                }
                str += "\n";
                console.log(str);
            }
        };
        // 打印路径
        Floyd.prototype.printPath = function (arcs, path, nodeNum) {
            console.log("path:");
            var temp = 0;
            for (var u = 0; u < nodeNum; u++) {
                var str = "";
                for (var v = 0; v < nodeNum; v++) {
                    str += u + " -> " + v + ", weight:" + arcs[u][v] + ":" + u;
                    temp = path[u][v];
                    while (temp != v) {
                        str += "->" + temp;
                        temp = path[temp][v];
                    }
                    str += "->" + v + "\n";
                }
                console.log(str);
            }
        };
        // 打印路径字典
        Floyd.prototype.printPathMap = function (arcs, pathMap, nodeNum) {
            console.log("pathMap:");
            var temp = 0;
            for (var u = 0; u < nodeNum; u++) {
                var str = "";
                for (var v = 0; v < nodeNum; v++) {
                    str += u + " -> " + v + ", weight:" + arcs[u][v] + ":";
                    var points = pathMap[u][v];
                    if (points.length < 2)
                        console;
                    str += points[0];
                    for (var i = 1; i < points.length - 1; i++) {
                        str += "->" + points[i];
                    }
                    str += "->" + points[points.length - 1] + "\n";
                }
                console.log(str);
            }
        };
        return Floyd;
    }());
    ihaiu.Floyd = Floyd;
})(ihaiu || (ihaiu = {}));
//# sourceMappingURL=Floyd.js.map