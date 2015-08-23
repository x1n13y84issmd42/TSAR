/// <reference path="../../Render/Shaded.ts" />
/// <reference path="Emitter.ts" />
/// <reference path="Solver.ts" />

module Tsar.Scene.Party
{
	export class System extends Tsar.Render.Shaded
	{
		public partycles : Tsar.Scene.Party.Partycle[] = [];
		public emitter : Tsar.Scene.Party.Emitter;
		public solver : Tsar.Scene.Party.Solver;

		constructor(emitter : Tsar.Scene.Party.Emitter, solver : Tsar.Scene.Party.Solver)
		{
			super();

			this.emitter = emitter;
			this.solver = solver;
		}

		update(dt:number, et:number, now:number) : any
		{
		//	return;
			var deadSlice = 0;

			for (var pI = 0; pI < this.partycles.length; pI++)
			{
				var pt = this.partycles[pI];
				pt.age = et - pt.born;

				if (pt.dead())
				{
					deadSlice++;
				}
			}

			if (pI != 0)
			{
				this.partycles.splice(0, deadSlice);
			}

			this.solve(dt, et, now);
			this.emit(dt, et, now);
		}

		emit(dt:number, et:number, now:number)
		{
			if (this.partycles.length < 5000)
			{
				var partycles = [];

				if (partycles = this.emitter.emit(dt, et, now))
				{
					for (var pI=0; pI<partycles.length; pI++)
					{
						var p = partycles[pI];
						this.partycles.push(p);
						p.lifetime = 10000;
						p.born = et;						
					}
				}
			}
		}

		solve(dt:number, et:number, now:number)
		{
			this.solver.solve(dt, et, now, this.partycles);
		}
	}
}