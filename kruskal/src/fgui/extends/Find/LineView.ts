module Find 
{
    import Node = ihaiu.Node;
    import Point = ihaiu.Point;
    export class LineView extends UI_LineView
    {
        graphView: GraphView;
        fromNode: Node;
        toNode: Node;
        value: number = 0;

		protected constructFromXML(xml: any): void 
        {
			super.constructFromXML(xml);
        }

        public setNode(from: Node, to: Node, value: number)
        {
            this.fromNode = from;
            this.toNode = to;
            this.value = value;
            this.refresh();
        }

        refresh()
        {
            this.x = this.fromNode.pos.x;
            this.y = this.fromNode.pos.y;
            this.m_title.text = this.value + "";
            this.m_line.width = this.fromNode.pos.getDistance(this.toNode.pos);
            this.m_line.rotation = this.fromNode.pos.getAngle(this.toNode.pos);

            let titlePos = Point.centerRelative(this.fromNode.pos, this.toNode.pos);
            this.m_title.x = titlePos.x;
            this.m_title.y = titlePos.y;
        }


        setState(state: number)
        {
            this.m_state.setSelectedIndex(state);
            this.m_line.m_state.setSelectedIndex(state);
        }
    }
}