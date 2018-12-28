/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Find {

	export class UI_LineColorView extends fairygui.GLabel {

		public m_state:fairygui.Controller;
		public m_line:fairygui.GImage;
		public m_n5:fairygui.GImage;
		public m_n6:fairygui.GImage;
		public m_n7:fairygui.GImage;

		public static URL:string = "ui://onlyi1f8jahol";

		public static createInstance():UI_LineColorView {
			return <UI_LineColorView><any>(fairygui.UIPackage.createObject("Find","LineColorView"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_state = this.getControllerAt(0);
			this.m_line = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n5 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_n6 = <fairygui.GImage><any>(this.getChildAt(2));
			this.m_n7 = <fairygui.GImage><any>(this.getChildAt(3));
		}
	}
}