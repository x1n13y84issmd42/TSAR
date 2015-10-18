/// <reference path="System.ts" />

module Tsar.Scene.Party
{
	export class SimpleSystem<PT extends Tsar.Scene.Party.Partycle> extends System<PT>
	{
		emit(dt:number, et:number, now:number)
		{
			if (this.partycles.length < 5000)
			{
				var partycles = [];

				if (partycles = this.emitter.update(dt, et, now))
				{
					for (var pI=0; pI<partycles.length; pI++)
					{
						var sp = partycles[pI];

						var p = new this.Partycle(sp.p, sp.d.nmul(gMath.random() * 5 + 5));
						p.lifetime = 10000;
						p.born = et;						
						
						this.partycles.push(p);
					}
				}
			}
		}

		update(dt:number, et:number, now:number) : any
		{
			super.update(dt, dt, now);
			this.solve(dt, et, now);
			this.emit(dt, et, now);
		}
	}
}