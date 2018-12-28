var ihaiu;
(function (ihaiu) {
    var NodeState = /** @class */ (function () {
        function NodeState() {
        }
        NodeState.Normal = 0;
        NodeState.Disable = 1;
        NodeState.Start = 2;
        NodeState.End = 3;
        NodeState.Greend = 4;
        return NodeState;
    }());
    ihaiu.NodeState = NodeState;
    var LineState = /** @class */ (function () {
        function LineState() {
        }
        LineState.Normal = 0;
        LineState.Disable = 1;
        LineState.Green = 2;
        LineState.GreenMax = 3;
        return LineState;
    }());
    ihaiu.LineState = LineState;
    /**
     * 节点
     */
    var Node = /** @class */ (function () {
        function Node() {
            // 坐标
            this.pos = new ihaiu.Point();
            // 子节点
            // childes: Node[] = [];
        }
        return Node;
    }());
    ihaiu.Node = Node;
})(ihaiu || (ihaiu = {}));
//# sourceMappingURL=Node.js.map