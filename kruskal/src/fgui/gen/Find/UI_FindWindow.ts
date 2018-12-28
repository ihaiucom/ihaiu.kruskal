/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Find {

	export class UI_FindWindow extends fairygui.GComponent {

		public m_graph:UI_GraphView;
		public m_exportDataButton:fairygui.GButton;
		public m_clearLogButton:fairygui.GButton;
		public m_setDataButton_1:fairygui.GButton;
		public m_setDataButton_2:fairygui.GButton;
		public m_setDataButton_0:fairygui.GButton;
		public m_opList:fairygui.GList;
		public m_n12:fairygui.GTextField;
		public m_mstList:fairygui.GList;
		public m_n14:fairygui.GTextField;

		public static URL:string = "ui://onlyi1f8jaho0";

		public static createInstance():UI_FindWindow {
			return <UI_FindWindow><any>(fairygui.UIPackage.createObject("Find","FindWindow"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_graph = <UI_GraphView><any>(this.getChildAt(0));
			this.m_exportDataButton = <fairygui.GButton><any>(this.getChildAt(1));
			this.m_clearLogButton = <fairygui.GButton><any>(this.getChildAt(2));
			this.m_setDataButton_1 = <fairygui.GButton><any>(this.getChildAt(3));
			this.m_setDataButton_2 = <fairygui.GButton><any>(this.getChildAt(4));
			this.m_setDataButton_0 = <fairygui.GButton><any>(this.getChildAt(5));
			this.m_opList = <fairygui.GList><any>(this.getChildAt(6));
			this.m_n12 = <fairygui.GTextField><any>(this.getChildAt(7));
			this.m_mstList = <fairygui.GList><any>(this.getChildAt(8));
			this.m_n14 = <fairygui.GTextField><any>(this.getChildAt(9));
		}
	}
}