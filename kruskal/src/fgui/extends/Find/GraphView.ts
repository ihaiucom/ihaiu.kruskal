module Find 
{
    import Prim = ihaiu.Prim;
    import Floyd = ihaiu.Floyd;
    import GraphData = ihaiu.GraphData;
    import NodeState = ihaiu.NodeState;
    import LineState = ihaiu.LineState;

    /** 操作类型 */
    export class OPType
    {
        static Drag = 0;
        static Start = 1;
        static End = 2;
    }

    /** 图形视图 */
    export class GraphView extends UI_GraphView
    {
        // 图形数据--原始
        sourceGraphData: GraphData;
        // 图形数据--最小生成树
        msgGraphData: GraphData;

        // 最短寻路算法
        floyd: Floyd;

        // 最小生成树算法
        prim:Prim;

        findWindow:FindWindow;

        // 视图--图形
        graphics: Laya.Graphics;

        // 视图--节点
        nodeViews: NodeView[] = [];
        nodeViewsPool: NodeView[] = [];

        // 视图--连接线
        lineViews: LineView[] = [];
        lineViewsPool: LineView[] = [];
        lineViewMap: {} = {};

        // 设置寻路点
        fromIndex = -1;
        toIndex = -1;

		protected constructFromXML(xml: any): void 
        {
			super.constructFromXML(xml);

            this.graphics = this.displayObject.graphics;
        }


        // 是否使用最小生成树
        get isUseMST(): boolean
        {
            return this.findWindow.isUseMST;
        }


        // 刷新数据
        refreshData()
        {
            let from = this.fromIndex;
            let to = this.toIndex;
            this.setData(this.sourceGraphData, from, to);
        }

        // 设置数据
        public setData(g: GraphData, fromIndex: number = -1, toIndex: number = -1)
        {
            this.findWindow.clearLog();

            g.check();

            let prim = new Prim();
            let g2 = prim.calculationByGraphData(g);

            let floyd = new Floyd();
            floyd.calculationByGraphData(this.isUseMST ? g2 : g);
            
            console.log("The minimum risk value is: %d", floyd.getPathMaxArc(0, floyd.nodeNum - 1));

            this.prim = prim;
            this.floyd = floyd;
            this.sourceGraphData = g;
            this.msgGraphData = g2;

            this.drawGraph();



            let from = fromIndex;
            if(from == -1)
            {
                from = 0;
            }
            this.setFrom(from);

            let to = toIndex;
            if(to == -1 || to >= g.nodeNum)
            {
                to = g.nodeNum - 1;
            }
            this.setTo(to);

            this.refreshState();
        }

        public drawGraph()
        {
            let grapData = this.sourceGraphData;

            this.drawNode();
            this.drawLine();
           
        }

        // 绘制节点
        drawNode()
        {
            this.clearNodes();
            let grapData = this.sourceGraphData;
            for(let i = 0; i < grapData.nodeNum; i ++)
            {
                let nodeView = this.getNode();
                nodeView.setNodeData(grapData.nodes[i]);
                this.addChild(nodeView);
                this.nodeViews.push(nodeView);
            }
        }

        // 绘制连接线
        drawLine()
        {
            this.clearLines();
            let grapData = this.sourceGraphData;
            for(let i = 0; i < grapData.x.length; i ++)
            {
                let x = grapData.x[i];
                let y = grapData.y[i];
                let w = grapData.w[i];

                let view = this.getLine();
                let from = grapData.nodes[x];
                let to = grapData.nodes[y];
                view.setNode(from, to, w);
                this.addChildAt(view, 0);
                this.lineViews.push(view);
                this.setLineByKey(x, y, view);
            }
        }

        // 刷新连接线
        refreshLine()
        {
            for(let i = 0; i < this.lineViews.length; i ++)
            {
                let view = this.lineViews[i];
                view.refresh();
            }
        }

        setFrom(index: number)
        {
            this.fromIndex = index;
            this.nodeViews[index].setState(NodeState.Start);
        }

        setTo(index: number)
        {
            this.toIndex = index;
            this.nodeViews[index].setState(NodeState.End);
        } 

        // 寻路
        findPath()
        {
            this.refreshState();
        }

        resetState()
        {
            for(let i = 0; i < this.nodeViews.length; i ++)
            {
                let state = NodeState.Normal;
                if(i == this.fromIndex)
                {
                    state = NodeState.Start;
                }
                else if(i == this.toIndex)
                {
                    state = NodeState.End;
                }
                this.nodeViews[i].setState(state);
            }


            for(let i = 0; i < this.lineViews.length; i ++)
            {
                this.lineViews[i].setState(LineState.Normal);
            }
        }

        // 刷新状态
        refreshState()
        {
            let pointIndexs = this.floyd.getPath(this.fromIndex, this.toIndex);
            if(pointIndexs)
            {
                // 刷新节点
                for(let i = 0; i < this.nodeViews.length; i ++)
                {
                    let state = NodeState.Normal;
                    if(i == this.fromIndex)
                    {
                        state = NodeState.Start;
                    }
                    else if(i == this.toIndex)
                    {
                        state = NodeState.End;
                    }
                    else if(pointIndexs.indexOf(i) != -1)
                    {
                        state = NodeState.Greend;
                    }
                    this.nodeViews[i].setState(state);
                }

                // 刷新连线
                for(let i = 0; i < this.lineViews.length; i ++)
                {
                    let view = this.lineViews[i];
                    let state = LineState.Normal;
                    
                    if(!this.floyd.hasEdge(view.fromNode.index, view.toNode.index))
                    {
                        state = LineState.Disable;
                    }
                    this.lineViews[i].setState(state);
                }

                let maxArc = this.floyd.getPathMaxArcByPath(pointIndexs);

                for(let i = 0; i < pointIndexs.length - 1; i ++)
                {
                    let view = this.getLineByKey(pointIndexs[i], pointIndexs[i + 1]);
                    if(view)
                    {
                        let state = LineState.Green;
                        if(this.floyd.getArcs(pointIndexs[i], pointIndexs[i + 1]) >= maxArc)
                        {
                            state = LineState.GreenMax;
                        }

                        view.setState(state);
                        view.parent.addChildAt(view, this.lineViews.length);
                    }
                }


            }
        }


        //==========================================
        // 节点
        //------------------------------------------
        getNode(): NodeView
        {
            if(this.nodeViewsPool.length > 0)
            {
                return this.nodeViewsPool.pop();
            }

            let nodeView = <NodeView> NodeView.createInstance();
            nodeView.graphView = this;
            nodeView.draggable = true;
			nodeView.dragBounds = new laya.maths.Rectangle(50, 50, this.width - 100 , this.height - 100);
			nodeView.sClick.add(this.onClickNode, this);
            return nodeView;
        }

        onClickNode(nodeVeiw: NodeView)
        {
            let op = this.findWindow.m_opList.selectedIndex;
            switch(op)
            {
                case OPType.Start:
                    this.setFrom(nodeVeiw.node.index);
                    this.refreshState();
                    break;
                case OPType.End:
                    this.setTo(nodeVeiw.node.index);
                    this.refreshState();
                    break;
            }
        }

        clearNodes()
        {
            while(this.nodeViews.length > 0)
            {
                let nodeView = this.nodeViews.pop();
                nodeView.removeFromParent();
                this.nodeViewsPool.push(nodeView);
            }
        }



        //==========================================
        // 连接线
        //------------------------------------------
        getLine(): LineView
        {
            if(this.lineViewsPool.length > 0)
            {
                return this.lineViewsPool.pop();
            }

            let view = <LineView> LineView.createInstance();
            view.graphView = this;
            return view;
        }

        clearLines()
        {
            this.lineViewMap = {};
            while(this.lineViews.length > 0)
            {
                let view = this.lineViews.pop();
                view.removeFromParent();
                this.lineViewsPool.push(view);
            }
        }

        getLineKey(from: number, to: number)
        {
            let key = from + "_" + to;
            if(from > to)
            {
                key = to + "_" + from;
            }
            return key;
        }

        getLineByKey(from: number, to: number): LineView
        {
            return <LineView> this.lineViewMap[this.getLineKey(from, to)];
        }

        setLineByKey(from: number, to: number, view: LineView)
        {
            this.lineViewMap[this.getLineKey(from, to)] = view;
        }


    }
}