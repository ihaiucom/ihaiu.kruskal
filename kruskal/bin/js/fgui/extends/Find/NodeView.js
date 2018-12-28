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
    var NodeView = /** @class */ (function (_super) {
        __extends(NodeView, _super);
        function NodeView() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.sClick = new signals.TypedSignal();
            _this._dragEndTime = 0;
            return _this;
        }
        NodeView.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.on(fairygui.Events.DRAG_START, this, this.onDrawStart);
            this.on(fairygui.Events.DRAG_MOVE, this, this.onDrawMove);
            this.on(fairygui.Events.DRAG_END, this, this.onDrawEnd);
            this.onClick(this, this.onClickButton);
        };
        NodeView.prototype.onClickButton = function () {
            if (Laya.timer.currTimer - this._dragEndTime < 100) {
                return;
            }
            // console.log("%d onClickButton  time=%d", this.node.index, Laya.timer.currTimer - this._dragEndTime);
            this.sClick.dispatch(this);
        };
        NodeView.prototype.onDrawStart = function () {
            // console.log("%d onDrawStart", this.node.index);
        };
        NodeView.prototype.onDrawMove = function () {
            this.refreshNode();
        };
        NodeView.prototype.onDrawEnd = function () {
            // console.log("%d onDrawEnd", this.node.index);
            this._dragEndTime = Laya.timer.currTimer;
            this.refreshNode();
        };
        NodeView.prototype.refreshNode = function () {
            this.node.pos.x = Math.floor(this.x);
            this.node.pos.y = Math.floor(this.y);
            this.graphView.refreshLine();
        };
        NodeView.prototype.setNodeData = function (node) {
            this.node = node;
            this.x = node.pos.x;
            this.y = node.pos.y;
            this.title = node.index + "";
        };
        NodeView.prototype.setState = function (state) {
            this.m_state.setSelectedIndex(state);
            this.m_bg.m_state.setSelectedIndex(state);
            this.alpha = state == ihaiu.LineState.Disable ? 0.3 : 1;
        };
        return NodeView;
    }(Find.UI_NodeView));
    Find.NodeView = NodeView;
})(Find || (Find = {}));
//# sourceMappingURL=NodeView.js.map