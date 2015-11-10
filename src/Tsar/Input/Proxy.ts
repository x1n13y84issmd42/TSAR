/// <reference path="Mouse.ts" />
/// <reference path="Motion.ts" />

module Tsar.Input
{
	export class Proxy
	{
		public mouse : Tsar.Input.Mouse;
		public motion : Tsar.Input.Motion;
	//	public keyboard : Tsar.Input.Keyboard;

		constructor(node)
		{
			this.listen(node);
		}

		listen(node)
		{
			this.mouse = new Tsar.Input.Mouse(node);
			this.motion = new Tsar.Input.Motion(node);
		//	this.keyboard = Tsar.Input.Keyboard(node);
		}
	}
}