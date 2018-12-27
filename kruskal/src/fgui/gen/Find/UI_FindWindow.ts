/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Find {

	export class UI_FindWindow extends fairygui.GComponent {

		public m_logTexArea:UI_TextArea;
		public m_openSettingButton:fairygui.GButton;
		public m_openSettingButton_2:fairygui.GButton;
		public m_settingPanel:UI_FindSettingPanel;

		public static URL:string = "ui://onlyi1f8jaho0";

		public static createInstance():UI_FindWindow {
			return <UI_FindWindow><any>(fairygui.UIPackage.createObject("Find","FindWindow"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_logTexArea = <UI_TextArea><any>(this.getChildAt(0));
			this.m_openSettingButton = <fairygui.GButton><any>(this.getChildAt(1));
			this.m_openSettingButton_2 = <fairygui.GButton><any>(this.getChildAt(2));
			this.m_settingPanel = <UI_FindSettingPanel><any>(this.getChildAt(3));
		}
	}
}