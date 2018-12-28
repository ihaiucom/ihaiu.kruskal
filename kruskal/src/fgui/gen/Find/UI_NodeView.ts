/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Find {

	export class UI_NodeView extends fairygui.GLabel {

		public m_state:fairygui.Controller;
		public m_bg:UI_NodeColorView;
		public m_title:fairygui.GTextField;
		public m_name:fairygui.GTextField;

		public static URL:string = "ui://onlyi1f8jaho5";

		public static createInstance():UI_NodeView {
			return <UI_NodeView><any>(fairygui.UIPackage.createObject("Find","NodeView"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_state = this.getControllerAt(0);
			this.m_bg = <UI_NodeColorView><any>(this.getChildAt(0));
			this.m_title = <fairygui.GTextField><any>(this.getChildAt(1));
			this.m_name = <fairygui.GTextField><any>(this.getChildAt(2));
		}
	}
}