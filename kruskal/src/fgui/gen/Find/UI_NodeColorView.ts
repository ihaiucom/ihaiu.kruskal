/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Find {

	export class UI_NodeColorView extends fairygui.GLabel {

		public m_state:fairygui.Controller;
		public m_bg:fairygui.GImage;
		public m_n3:fairygui.GImage;
		public m_n4:fairygui.GImage;
		public m_n5:fairygui.GImage;
		public m_n6:fairygui.GImage;

		public static URL:string = "ui://onlyi1f8jahoc";

		public static createInstance():UI_NodeColorView {
			return <UI_NodeColorView><any>(fairygui.UIPackage.createObject("Find","NodeColorView"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_state = this.getControllerAt(0);
			this.m_bg = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_n4 = <fairygui.GImage><any>(this.getChildAt(2));
			this.m_n5 = <fairygui.GImage><any>(this.getChildAt(3));
			this.m_n6 = <fairygui.GImage><any>(this.getChildAt(4));
		}
	}
}