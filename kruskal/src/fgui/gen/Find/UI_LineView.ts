/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Find {

	export class UI_LineView extends fairygui.GLabel {

		public m_state:fairygui.Controller;
		public m_line:UI_LineColorView;
		public m_title:fairygui.GTextField;

		public static URL:string = "ui://onlyi1f8jaho6";

		public static createInstance():UI_LineView {
			return <UI_LineView><any>(fairygui.UIPackage.createObject("Find","LineView"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_state = this.getControllerAt(0);
			this.m_line = <UI_LineColorView><any>(this.getChildAt(0));
			this.m_title = <fairygui.GTextField><any>(this.getChildAt(1));
		}
	}
}