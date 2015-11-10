/// <reference path="Main.ts" />
/// <reference path="float2.ts" />

var gMath = Math;

module Tsar.Math
{
	export class float3
	{
		public x:number;
		public y:number;
		public z:number;

		get xy(): Tsar.Math.float2
		{
			return new Tsar.Math.float2(this.x, this.y);
		}

		get yz(): Tsar.Math.float2
		{
			return new Tsar.Math.float2(this.y, this.z);
		}

		get xz(): Tsar.Math.float2
		{
			return new Tsar.Math.float2(this.x, this.z);
		}

		constructor(x:number, y:number, z:number)
		{
			this.x = x;
			this.y = y;
			this.z = z;
		}

		dot(v:float3) : number
		{
			return this.x * v.x + this.y * v.y + this.z * v.z;
		}

		add(v2:float3) : float3
		{
			return new float3(this.x + v2.x, this.y + v2.y, this.z + v2.z);
		}

		sub(v2:float3) : float3
		{
			return new float3(this.x - v2.x, this.y - v2.y, this.z - v2.z);
		}

		dist(v2)
		{
			var sub = this.sub(v2);
			return gMath.sqrt(sub.x * sub.x + sub.y * sub.y + sub.z * sub.z);
		}

		ndiv(v)
		{
			return new float3(this.x / v, this.y / v, this.z / v);
		}

		nmul(v)
		{
			return new float3(this.x * v, this.y * v, this.z * v);
		}

		mag()
		{
			return gMath.sqrt(this.dot(this));
		}

		normalize()
		{
			return this.ndiv(this.mag());
		}

		lerp(v2 : float3, v : number) : float3
		{
			return new float3(
				Math.lerp(this.x, v2.x, v),
				Math.lerp(this.y, v2.y, v),
				Math.lerp(this.z, v2.z, v)
			);
		}

		cross(b: Tsar.Math.float3)
		{
			var a = this;
			return new Tsar.Math.float3(
				a.y * b.z - a.z * b.y,
				a.z * b.x - a.x * b.z,
				a.x * b.y - a.y * b.x
			);
		}
	}
}