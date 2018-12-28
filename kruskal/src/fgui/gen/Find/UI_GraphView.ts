/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Find {

	export class UI_GraphView extends fairygui.GComponent {

		public m_name:fairygui.GTextField;

		public static URL:string = "ui://onlyi1f8jaho3";

		public static createInstance():UI_GraphView {
			return <UI_GraphView><any>(fairygui.UIPackage.createObject("Find","GraphView"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_name = <fairygui.GTextField><any>(this.getChildAt(0));
		}
	}
}