/// <reference path="../../Math/float2.ts" />

module Tsar.Scene.Party
{
	export class Partycle
	{
		public position : Tsar.Math.float2;
		public velocity : Tsar.Math.float2;
		public accel : Tsar.Math.float2;
		public lifetime : number = 0;
		public age : number = 0;
		public born : number;

		constructor(position: Tsar.Math.float2, velocity: Tsar.Math.float2)
		{
			this.position = position;

			if (velocity)
			{
				this.velocity = velocity;
			}
		}

		dead() : boolean
		{
			return this.lifetime && this.age >= this.lifetime;
		}
	}
}