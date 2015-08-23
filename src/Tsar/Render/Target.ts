/// <reference path="Context.ts" />

module Tsar.Render
{
	export class Target
	{
		private element;
		public context;

		constructor(w:number, h:number)
		{
			this.element = document.createElement('canvas');
			this.element.width = w;
			this.element.height = h;

			this.context = new Context(this.element.getContext('2d'));
		}

		getDOMNode()
		{
			return this.element;
		}
	}
}