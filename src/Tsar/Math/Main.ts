/// <reference path="float3.ts" />

var jMath = Math;

module Tsar.Math
{
	export function lerp(from, to, t)
	{
		return from + (to - from) * t;
	}

	export function perspectiveProjection(p: float3, width: number, height: number, zNear: number): float2
	{
		return new float2(
			(((p.x - width / 2) / (p.z - zNear)) * 0.5 + 0.5) * width,
			(((p.y - height / 2) / (p.z - zNear)) * 0.5 + 0.5) * height
		);
	}

	export function scale2D(x:number, y:number, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number)
	{
		var rx = (x - sx) / sw;
		var ry = (y - sy) / sh;
		return new float2(dx + dw * rx, dy + dh * ry);
	}

	export function deg2rad(degree:number)
	{
		return degree * (jMath.PI / 180);
	}

	export function isPtInCircle(pt:Tsar.Math.float2, center:Tsar.Math.float2, radius:number)
	{
		return center.dist(pt) <= radius;
	}
}