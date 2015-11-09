module Tsar.UI
{
	export class Layout
	{
		private node: any;

		constructor()
		{
			this.node = document.getElementById('hud');
		}

		public place(e:any)
		{
			this.node.appendChild(e.node);
		}
	}

	export var layout = new Layout();
}