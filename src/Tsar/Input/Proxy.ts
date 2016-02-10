/// <reference path="Mouse.ts" />
/// <reference path="Motion.ts" />
/// <reference path="Touch.ts" />

module Tsar.Input
{
	export class Proxy
	{
		public mouse : Tsar.Input.Mouse;
		public motion : Tsar.Input.Motion;
		public touch : Tsar.Input.Touch;

		constructor(node)
		{
			this.listen(node);
		}

		listen(node)
		{
			this.mouse = new Tsar.Input.Mouse(node);
			this.motion = new Tsar.Input.Motion(node);
			this.touch = new Tsar.Input.Touch(node);
		}
	}
}