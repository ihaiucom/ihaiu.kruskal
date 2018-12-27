/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Find {

	export class UI_FindSettingPanel extends fairygui.GComponent {

		public m_n5:fairygui.GImage;
		public m_okButton:fairygui.GButton;
		public m_cancelButton:fairygui.GButton;
		public m_nodeNumInput:fairygui.GLabel;
		public m_n6:fairygui.GTextField;
		public m_n8:fairygui.GTextField;
		public m_edgeInput:UI_TextArea;

		public static URL:string = "ui://onlyi1f8jaho1";

		public static createInstance():UI_FindSettingPanel {
			return <UI_FindSettingPanel><any>(fairygui.UIPackage.createObject("Find","FindSettingPanel"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n5 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_okButton = <fairygui.GButton><any>(this.getChildAt(1));
			this.m_cancelButton = <fairygui.GButton><any>(this.getChildAt(2));
			this.m_nodeNumInput = <fairygui.GLabel><any>(this.getChildAt(3));
			this.m_n6 = <fairygui.GTextField><any>(this.getChildAt(4));
			this.m_n8 = <fairygui.GTextField><any>(this.getChildAt(5));
			this.m_edgeInput = <UI_TextArea><any>(this.getChildAt(6));
		}
	}
}