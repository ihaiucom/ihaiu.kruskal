var ihiau;
(function (ihiau) {
    var Krusal = /** @class */ (function () {
        function Krusal() {
            /** 边列表 */
            this.edgeList = [];
            this.par = [];
            this.rank = [];
        }
        /**
         * 添加边
         */
        Krusal.prototype.addEdge = function (from, to, cost) {
            this.rank.push(0);
            this.par.push(this.edgeList.length);
            var edges = new ihiau.Edge();
            edges.from = from;
            edges.to = to;
            edges.cost = cost;
            this.edgeList.push(edges);
        };
        /**
         * 比较成本
         */
        Krusal.prototype.cmp = function (a, b) {
            return a.cost - b.cost;
        };
        /**
         * 排序边列表
         */
        Krusal.prototype.sortList = function () {
            this.edgeList.sort(this.cmp);
        };
        /**
         * 初始化数据
         */
        Krusal.prototype.initData = function (froms, tos, costs) {
            this.edgeList = [];
            this.par = [];
            this.rank = [];
            var len = froms.length;
            for (var i = 0; i < len; i++) {
                this.addEdge(froms[i], tos[i], costs[i]);
            }
        };
        //查找当前元素所在树的根节点(代表元素)
        Krusal.prototype.find = function (x) {
            if (this.par[x] == -1) {
                return x;
            }
            else {
                return this.par[x] = this.find(this.par[x]);
            }
            // let root = x;
            // while(root != this.par[x]) root = this.par[root];
            // while (x != root)
            // {
            //     let t = this.par[x];
            //     this.par[x] = root;
            //     x = t;
            // }
            // return root;
        };
        //查找当前元素所在树的根节点(代表元素)
        Krusal.prototype.find2 = function (x) {
            var root = x;
            while (root != this.par[x])
                root = this.par[root];
            while (x != root) {
                var t = this.par[x];
                this.par[x] = root;
                x = t;
            }
            return root;
        };
        //合并元素x， y所处的集合
        Krusal.prototype.unite = function (x, y) {
            x = this.find2(x);
            y = this.find2(y);
            if (this.rank[x] < this.rank[y]) {
                this.par[x] = y;
            }
            else {
                this.par[y] = x;
                if (this.rank[x] == this.rank[y])
                    this.rank[x]++;
            }
        };
        Krusal.prototype.kruskal = function (n) {
            this.sortList();
            var cnt = 0; //计算加入的边数
            var ans = 0;
            var tol = this.edgeList.length;
            for (var i = 0; i < tol; i++) {
                var edge = this.edgeList[i];
                var t1 = this.find(edge.from);
                var t2 = this.find(edge.to);
                if (t1 != t2) {
                    ans += edge.cost;
                    this.par[t1] = t2;
                    cnt++;
                }
                if (cnt == n - 1)
                    break;
            }
            if (cnt < n - 1)
                return -1; //不连通
            else
                return ans;
        };
        //n为边的数量，m为村庄的数量
        Krusal.prototype.kruskal2 = function (n, m) {
            var edgeNum = 0, res = 0;
            this.sortList();
            for (var i = 0; i < this.edgeList.length; i++) {
                var node = this.edgeList[i];
                if (this.find2(node.from) != this.find2(node.to)) {
                    this.unite(node.from, node.to);
                    res += node.cost;
                    edgeNum++;
                }
            }
            //如果加入边的数量小于m - 1,则表明该无向图不连通,等价于不存在最小生成树
            // if(edgeNum < m) res = -1;
            return res;
        };
        Krusal.prototype.calculation = function (nodeNum, degeNum, x, y, w) {
            this.initData(x, y, w);
            this.par = [];
            for (var i = 0; i < degeNum; i++) {
                this.par.push(-1);
            }
            return this.kruskal(nodeNum);
        };
        Krusal.prototype.calculation2 = function (nodeNum, edegeNum, x, y, w) {
            this.initData(x, y, w);
            return this.kruskal2(edegeNum, nodeNum);
        };
        return Krusal;
    }());
    ihiau.Krusal = Krusal;
})(ihiau || (ihiau = {}));
//# sourceMappingURL=Kruskal.js.map