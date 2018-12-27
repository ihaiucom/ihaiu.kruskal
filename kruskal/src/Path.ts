namespace ihiau
{
    /**
     * 路径
     */
    export class Path
    {
        // 节点索引--启动点
        from: number;
        // 节点索引--目标点
        to: number;
        // 节点列表
        nodes: Node[] = [];
    }
}