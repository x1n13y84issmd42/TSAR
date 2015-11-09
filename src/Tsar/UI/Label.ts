/// <reference path="Control.ts" />

module Tsar.UI
{
	export class Label extends Tsar.UI.Control
	{
		set text(t:string)
		{
			this.node.innerHTML = t;
		}
	}
}