module Find 
{
    import Node = ihaiu.Node;
    import NodeState = ihaiu.NodeState;
    export class NodeView extends UI_NodeView
    {
        graphView: GraphView;
        node: Node;
        sClick: signals.TypedSignal<NodeView> = new signals.TypedSignal<NodeView>();

		protected constructFromXML(xml: any): void 
        {
			super.constructFromXML(xml);
            
            this.on(fairygui.Events.DRAG_START, this, this.onDrawStart);
            this.on(fairygui.Events.DRAG_MOVE, this, this.onDrawMove);
            this.on(fairygui.Events.DRAG_END, this, this.onDrawEnd);
            this.onClick(this, this.onClickButton);
        }

        private _dragEndTime = 0;

        onClickButton()
        {
            if(Laya.timer.currTimer - this._dragEndTime  < 100)
            {
                return;
            }
            // console.log("%d onClickButton  time=%d", this.node.index, Laya.timer.currTimer - this._dragEndTime);
            this.sClick.dispatch(this);
        }

        onDrawStart()
        {
            // console.log("%d onDrawStart", this.node.index);
        }

        onDrawMove()
        {
            this.refreshNode();
        }

        onDrawEnd()
        {
            // console.log("%d onDrawEnd", this.node.index);
            this._dragEndTime = Laya.timer.currTimer;
            this.refreshNode();
        }

        refreshNode()
        {

            this.node.pos.x = Math.floor(this.x) ;
            this.node.pos.y = Math.floor(this.y) ;
            this.graphView.refreshLine();
        }

        public setNodeData(node: Node)
        {
            this.node = node;
            this.x = node.pos.x;
            this.y = node.pos.y;
            this.title = node.index + "";
        }

        setState(state: number)
        {
            this.m_state.setSelectedIndex(state);
            this.m_bg.m_state.setSelectedIndex(state);

            this.alpha = state == ihaiu.LineState.Disable ? 0.3 : 1;
        }
    }
}