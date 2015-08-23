/// <reference path="Main.ts" />

var gMath = Math;

module Tsar.Math
{
	export class float2
	{
		public x:number;
		public y:number;

		constructor(x:number, y:number)
		{
			this.x = x;
			this.y = y;
		}

		dot(v:float2) : number
		{
			return this.x * v.x + this.y * v.y;
		}

		cross() : float2
		{
			return new float2(this.y, -this.x);
		}

		add(v2:float2) : float2
		{
			return new float2(this.x + v2.x, this.y + v2.y);
		}

		sub(v2:float2) : float2
		{
			return new float2(this.x - v2.x, this.y - v2.y);
		}

		dist(v2)
		{
			var sub = this.sub(v2);
			return gMath.sqrt(sub.x * sub.x + sub.y * sub.y);
		}

		ndiv(v)
		{
			return new float2(this.x / v, this.y / v);
		}

		nmul(v)
		{
			return new float2(this.x * v, this.y * v);
		}

		mag()
		{
			return gMath.sqrt(this.dot(this));
		}

		normalize()
		{
			return this.ndiv(this.mag());
		}

		lerp(v2 : float2, v : number) : float2
		{
			return new float2(
				Math.lerp(this.x, v2.x, v),
				Math.lerp(this.y, v2.y, v)
			);
		}
	}
}