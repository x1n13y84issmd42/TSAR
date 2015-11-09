module Tsar.UI
{
	export class Control
	{
		private element: any;

		constructor()
		{
			this.element = document.createElement('p');
			this.element.className = "label";
		}

		public get node()
		{
			return this.element;
		}
	}
}