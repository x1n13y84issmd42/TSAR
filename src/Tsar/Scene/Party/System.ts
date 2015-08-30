/// <reference path="../../Render/Shaded.ts" />
/// <reference path="Emitter.ts" />
/// <reference path="Solver.ts" />
/// <reference path="Partycle.ts" />

module Tsar.Scene.Party
{
	export class System<PT extends Tsar.Scene.Party.Partycle> extends Tsar.Render.Shaded
	{
		public partycles : PT[] = [];
		public emitter : Tsar.Scene.Party.Emitter;
		public solver : Tsar.Scene.Party.Solver;
		public pctor : {new(): PT;};

		constructor(
			emitter: Tsar.Scene.Party.Emitter,
			solver: Tsar.Scene.Party.Solver,
			pctor
		)
		{
			super();

			this.emitter = emitter;
			this.solver = solver;
			this.pctor = pctor;
		}

		makePartycle()
		{
			return new this.pctor();
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
		}

		solve(dt:number, et:number, now:number)
		{
			this.solver.solve(dt, et, now, this.partycles);
		}
	}
}