// namespace ihiau
// {
//     export class SmallestRisk
//     {
//         /** 节点数量 */
//         private nodeNum : number = 0;
//         /** 边列表 */
//         private edgeList : Edge[] = [];
//         /** 节点列表 */
//         private nodeList : Node[] = [];
//         /** 危险字典 （如果要优化可以用一变矩阵）*/
//         private risks: number[][] = [];


//         /**
//          * 添加边
//          */
//         public addEdge(from: number, to: number, cost: number): void
//         {
//             let edges = new Edge();
//             edges.from = from;
//             edges.to = to;
//             edges.cost = cost;
//             this.edgeList.push(edges);
//         }


//         /**
//          * 初始化边数据
//          */
//         public initEdges(froms: number[], tos: number[], costs: number[])
//         {
//             this.edgeList = [];
//             let len = froms.length;
//             for(let i = 0; i < len; i ++)
//             {
//                 this.addEdge(froms[i], tos[i], costs[i]);
//             }
//         }

//         /**
//          * 初始化节点数据
//          */
//         private initNodes()
//         {
//             let nodeNum = this.nodeNum;
//             // 初始化节点列表
//             for(let i = 0; i < nodeNum; i ++)
//             {
//                 let node = new Node();
//                 node.index = i;
//                 this.nodeList.push(node);
//             }

//             // 初始化危险值矩阵
//             for(let x =0; x < nodeNum; x ++)
//             {
//                 let arr = [];
//                 this.risks.push(arr);
//                 for(let y =0; y< nodeNum; y ++)
//                 {
//                     arr.push(-1);
//                 }
//             }

//             for(let i = 0; i < this.edgeList.length; i ++)
//             {
//                 let edge = this.edgeList[i];
//                 let fromNode = this.nodeList[edge.from];
//                 let toNode = this.nodeList[edge.to];
//                 // 设在节点的子节点
//                 fromNode.childes.push(fromNode);
//                 toNode.childes.push(fromNode);

//                 // 设置危险值矩阵
//                 this.risks[edge.from][edge.to] = edge.cost;
//                 this.risks[edge.to][edge.from] = edge.cost;
//             }
//         }

        

//         public findPaths(from: number, to: number): Path[]
//         {
//             let fromNode = this.nodeList[from];
//             let paths = [];
//             for(let i = 0; i < fromNode.childes.length; i ++)
//             {

//             }


//             return paths;
//         }

//         private findPath(fromNode: Node, toNode: Node, list:  Path[])
//         {
//             for(let i = 0; i < fromNode.childes.length; i ++)
//             {

//             }
//         }




//         public calculation(nodeNum: number, edegeNum: number, x: number[], y: number[], w: number[]): number
//         {
//             this.nodeNum = nodeNum;
//             this.initEdges(x, y, w);







//         }
//     }
// }