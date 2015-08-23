/// <reference path="../../Math/float2.ts" />

module Tsar.Scene.Party
{
	export class Emitter
	{
		public position : Tsar.Math.float2;
		private emittanceRate : number = 10;			//	Partycles per second
		private emittanceVector : Tsar.Math.float2;	//	Direction to emit particles
		protected emittanceDelayAccumulator : number = 0;
		
		public constructor()
		{
			this.emittanceRate = 10;
			this.emittanceVector = new Tsar.Math.float2(0, 0);
		}

		public emit(dt:number, et:number, now:number) : any
		{
		}

		public setEmittanceVector(v : Tsar.Math.float2)
		{
			this.emittanceVector = v;
		}

		public setEmittanceRate(v : number)
		{
			this.emittanceRate = v;
		}

		public shouldEmit(dt : number)
		{
			var emittanceDelay = 1000 / this.emittanceRate;
			this.emittanceDelayAccumulator += dt;

			if (this.emittanceDelayAccumulator >= emittanceDelay)
			{
				var count = gMath.round(this.emittanceDelayAccumulator / emittanceDelay);
				this.emittanceDelayAccumulator -= emittanceDelay * count;
				return count;
			}

			return 0;
		}
	}
}