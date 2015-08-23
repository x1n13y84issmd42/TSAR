module Tsar.Scene.Party
{
	export class Solver
	{
		public solve(dt:number, et:number, now:number, partycles)
		{
			for (var pI=0; pI<partycles.length; pI++)
			{
				var pt = partycles[pI];
				pt.position = pt.position.add(pt.velocity);
			}
		}
	}
}