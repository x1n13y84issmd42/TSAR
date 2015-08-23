module Tsar.Math
{
	export function lerp(from, to, t)
	{
		return from + (to - from) * t;
	}
}