namespace ihiau
{
    export class Krusal
    {
        /** 边列表 */
        private edgeList : Edge[] = [];

        private par: number[] = [];
        private rank: number[] = [];

        /**
         * 添加边
         */
        public addEdge(from: number, to: number, cost: number): void
        {
            this.rank.push(0);
            this.par.push(this.edgeList.length);

            let edges = new Edge();
            edges.from = from;
            edges.to = to;
            edges.cost = cost;
            this.edgeList.push(edges);
        }

        /**
         * 比较成本
         */
        private cmp(a: Edge, b: Edge): number
        {
            return a.cost - b.cost;
        }

        /**
         * 排序边列表
         */
        private sortList()
        {
            this.edgeList.sort(this.cmp);
        }

        /**
         * 初始化数据
         */
        public initData(froms: number[], tos: number[], costs: number[])
        {
            this.edgeList = [];
            this.par = [];
            this.rank = [];
            let len = froms.length;
            for(let i = 0; i < len; i ++)
            {
                this.addEdge(froms[i], tos[i], costs[i]);
            }
        }

        //查找当前元素所在树的根节点(代表元素)
        private find(x: number): number
        {
            if(this.par[x] == -1)
            {
                return x;
            }
            else
            {
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
        }


        //查找当前元素所在树的根节点(代表元素)
        private find2(x: number): number
        {

            let root = x;
            while(root != this.par[x]) root = this.par[root];

            while (x != root)
            {
                let t = this.par[x];
                this.par[x] = root;
                x = t;
            }

            return root;
        }

        //合并元素x， y所处的集合
        private unite(x: number, y: number):void
        {
            x = this.find2(x);
            y = this.find2(y);

            if(this.rank[x] < this.rank[y])
            {
                this.par[x] = y;
            }
            else
            {
                this.par[y] = x;

                if(this.rank[x] == this.rank[y])
                    this.rank[x] ++;
            }
        }


 
public  kruskal(n: number): number//传入点数，返回最小生成树的权值，如果不连通返回-1
{
    this.sortList();
    let cnt=0;//计算加入的边数
    let ans=0;
    let tol = this.edgeList.length;
    for(let i=0;i<tol;i++)
    {
        let edge = this.edgeList[i];

        let t1=this.find(edge.from);
        let t2=this.find(edge.to);
        if(t1!=t2)
        {
            ans+=edge.cost;
            this.par[t1]=t2;
            cnt++;
        }
        if(cnt==n-1)
            break;
    }
    if(cnt<n-1)
        return -1;//不连通
    else
        return ans;
}

//n为边的数量，m为村庄的数量
        public kruskal2(n: number, m: number): number
        {
            let edgeNum = 0, res = 0;
            this.sortList();

            for(let  i = 0; i < this.edgeList.length ; i ++)
            {
                let node = this.edgeList[i];
                if(this.find2(node.from) != this.find2(node.to))
                {
                    this.unite(node.from, node.to);
                    res += node.cost;
                    edgeNum ++;
                }
            }
            //如果加入边的数量小于m - 1,则表明该无向图不连通,等价于不存在最小生成树
            // if(edgeNum < m) res = -1;
            return res;
        }


        public calculation(nodeNum: number, degeNum: number, x: number[], y: number[], w: number[]): number
        {
            this.initData(x, y, w);

            this.par = [];
            for(let i = 0 ; i < degeNum; i ++)
            {
                this.par.push(-1);

            }
            return this.kruskal(nodeNum);
        }

        public calculation2(nodeNum: number, edegeNum: number, x: number[], y: number[], w: number[]): number
        {
            this.initData(x, y, w);
            return this.kruskal2(edegeNum, nodeNum);
        }




    }
}