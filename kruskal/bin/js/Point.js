var ihaiu;
(function (ihaiu) {
    /**
     * 路径点
     */
    var Point = /** @class */ (function () {
        function Point() {
            this.x = 0;
            this.y = 0;
        }
        /** 获取到目标点距离 */
        Point.prototype.getDistance = function (to) {
            var dx = to.x - this.x;
            var dy = to.y - this.y;
            return Math.sqrt(dx * dx + dy * dy);
        };
        /** 获取到目标点弧度 */
        Point.prototype.getRadian = function (to) {
            var dx = to.x - this.x;
            var dy = to.y - this.y;
            return Math.atan2(dy, dx);
        };
        /** 获取到目标点角度 */
        Point.prototype.getAngle = function (to) {
            return this.getRadian(to) * 180 / Math.PI;
        };
        /** 获取中心点 */
        Point.center = function (a, b) {
            var p = new Point();
            p.x = a.x + (b.x - a.x) * 0.5;
            p.y = a.y + (b.y - a.y) * 0.5;
            return p;
        };
        /** 获取相对A中心点 */
        Point.centerRelative = function (a, b) {
            var p = new Point();
            p.x = (b.x - a.x) * 0.5;
            p.y = (b.y - a.y) * 0.5;
            return p;
        };
        return Point;
    }());
    ihaiu.Point = Point;
})(ihaiu || (ihaiu = {}));
//# sourceMappingURL=Point.js.map