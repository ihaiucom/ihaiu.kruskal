namespace ihaiu
{
    /** 作为记录边的信息，这些边都是达到end的所有边中，权重最小的那个 */
    export class PrimAssis
    {
        // 边的终点
        start: number = 0;
        // 边的起点
        end: number = 0;
        // 边的权重
        weight: number = 0;
    }

    /** 最小生成树之Prim普里姆算法 */
    export class Prim
    {

        // 成本矩阵
        arcs: number[][];

        // 计算结果
        result: GraphData;

        constructor()
        {

        }


        /** 获取路径成本 */
        public getArcs(from: number, to: number): number
        {
            return this.arcs[from][to];
        }


        /** 是否有连接线 */
        public hasEdge(from: number, to: number): boolean
        {
            let arc = this.getArcs(from, to);
            return arc != Number.MAX_VALUE && arc != 0;
        }

        public calculationByGraphData(g: GraphData, beginIndex: number = 0):GraphData
        {
            g.check();
            let g2 = this.calculation(
                            g.nodeNum, 
                            g.edegeNum,
                            g.x,
                            g.y,
                            g.w,
                            beginIndex
                            );

            g2.nodeNum = g.nodeNum;             
            g2.nodes = g.nodes;
            return g2;
        }


        /** 计算寻路 */
        public calculation(nodeNum: number, edegeNum: number, x: number[], y: number[], w: number[], beginIndex: number = 0):GraphData
        {
            // 结果图
            let result: GraphData = new GraphData().init();

            // 成本矩阵
            let arcs: number[][] = [];


            // 初始化矩阵值
            for(let u = 0; u < nodeNum; u ++)
            {
                arcs[u] = [];

                for(let v = 0; v < nodeNum; v ++)
                {
                    arcs[u][v] = Number.MAX_VALUE;
                }
            }


            // 输入边
            for(let i = 0; i < x.length; i ++)
            {
                let u = x[i];
                let v = y[i];
                arcs[u][v] = w[i];
                arcs[v][u] = w[i];
            }

            //closeEdge这个数组记录到达某个顶点的各个边中的权重最大的那个边
            let closeEdges: PrimAssis[] = [];
            for(let i = 0; i < nodeNum; i ++)
            {
                closeEdges.push(new PrimAssis());
            }

            //进行closeEdge的初始化，更加开始起点进行初始化
            for(let i = 0; i < nodeNum; i ++)
            {
                if(i != beginIndex)
                {
                    let edge = closeEdges[i];
                    edge.start = beginIndex;
                    edge.end = i;
                    edge.weight = arcs[beginIndex][i];
                }
            }

            //把起点的closeEdge中的值设置为-1，代表已经加入到集合U了
            closeEdges[beginIndex].weight = -1;

             //访问剩下的顶点，并加入依次加入到集合U
             for(let i = 1; i< nodeNum; i ++)
             {
                let minWeight = Number.MAX_VALUE;
                let minIndex = 0;
                //寻找数组close_edge中权重最小的那个边
                for(let k = 0; k < nodeNum; k ++)
                {
                    if(closeEdges[k].weight != -1)
                    {
                        if(closeEdges[k].weight < minWeight)
                        {
                            minWeight = closeEdges[k].weight;
                            minIndex = k;
                        }
                    }
                }

                let minEdge = closeEdges[minIndex];

                //将权重最小的那条边的终点也加入到集合U
                minEdge.weight = -1;


                //输出对应的边的信息
                result.addEdge(
                    minEdge.start, 
                    minEdge.end, 
                    arcs[minEdge.start][minEdge.end]
                    );

                    //更新我们的close_edge数组。
                    for (let k = 0; k < nodeNum; k++) {
                        let edge = closeEdges[k];
                        if (arcs[minEdge.end][k] < edge.weight) 
                        {
                            edge.weight = arcs[minEdge.end][k];
                            edge.start = minEdge.end;
                            edge.end = k;
                        }
                    }


             }

             this.arcs = arcs;
             this.result = result;
             return result;
        }







    }
}