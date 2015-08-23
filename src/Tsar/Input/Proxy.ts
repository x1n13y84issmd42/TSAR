/// <reference path="Mouse.ts" />

module Tsar.Input
{
	export class Proxy
	{
		public mouse : Tsar.Input.Mouse;
	//	public keyboard : Tsar.Input.Keyboard;

		constructor(node)
		{
			this.listen(node);
		}

		listen(node)
		{
			this.mouse = new Tsar.Input.Mouse(node);
		//	this.keyboard = Tsar.Input.Keyboard(node);
		}
	}
}