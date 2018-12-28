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
    var Point = ihaiu.Point;
    var LineView = /** @class */ (function (_super) {
        __extends(LineView, _super);
        function LineView() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.value = 0;
            return _this;
        }
        LineView.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
        };
        LineView.prototype.setNode = function (from, to, value) {
            this.fromNode = from;
            this.toNode = to;
            this.value = value;
            this.refresh();
        };
        LineView.prototype.refresh = function () {
            this.x = this.fromNode.pos.x;
            this.y = this.fromNode.pos.y;
            this.m_title.text = this.value + "";
            this.m_line.width = this.fromNode.pos.getDistance(this.toNode.pos);
            this.m_line.rotation = this.fromNode.pos.getAngle(this.toNode.pos);
            var titlePos = Point.centerRelative(this.fromNode.pos, this.toNode.pos);
            this.m_title.x = titlePos.x;
            this.m_title.y = titlePos.y;
        };
        LineView.prototype.setState = function (state) {
            this.m_state.setSelectedIndex(state);
            this.m_line.m_state.setSelectedIndex(state);
        };
        return LineView;
    }(Find.UI_LineView));
    Find.LineView = LineView;
})(Find || (Find = {}));
//# sourceMappingURL=LineView.js.map