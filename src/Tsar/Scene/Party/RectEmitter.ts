/// <reference path="../../Math/float2.ts" />
/// <reference path="Emitter.ts" />
/// <reference path="Partycle.ts" />

var gMath = Math;

module Tsar.Scene.Party
{
	export class RectEmitter extends Tsar.Scene.Party.Emitter
	{
		public dimensions : Tsar.Math.float2;
		public emitPosition : Tsar.Math.float2;
		public emitDirection : Tsar.Math.float2 = new Tsar.Math.float2(0, 0);

		constructor(position : Tsar.Math.float2, dimensions : Tsar.Math.float2)
		{
			super();

			this.position = position;
			this.dimensions = dimensions;

			this.emitPosition = new Tsar.Math.float2(0, 0);
		}

		public emit(dt:number, et:number, now:number) : any
		{
			var count = this.shouldEmit(dt);

			if (count)
			{
				//	console.log("RectEmitter is emitting " + count + " partycles :)");
				
				var partycles = [];
				
				for (var pI=0; pI<count; pI++)
				{
					var p = this.getEmitPosition2(dt);
					var d = this.getEmitDirection();

					var partycle = new Partycle(p, d);
					partycle.velocity = d.nmul(gMath.random() * 5 + 5);
					partycle.born = et;

					partycles.push(partycle);
				}

				return partycles;
			}

			return false;
		}

		private getEmitPosition2(dt : number)
		{
			var p = new Tsar.Math.float2(
				gMath.random() * this.dimensions.x,
				gMath.random() * this.dimensions.y
				);
			
			return this.position.add(p);
		}

		private getEmitPosition()
		{
			var spacing = 25;

			this.emitPosition.x += spacing;

			if (this.emitPosition.x > this.dimensions.x)
			{
				this.emitPosition.x = 0;
				this.emitPosition.y += spacing;
			}

			if (this.emitPosition.y > this.dimensions.y)
			{
				this.emitPosition.y = 0;
				this.emitPosition.x = 0;
			}

			return this.emitPosition.add(this.position);
		}

		public getEmitDirection() : Tsar.Math.float2
		{
			return this.emitDirection;
		}

		public setEmitDirection(v : Tsar.Math.float2)
		{
			this.emitDirection = v.normalize();
		}
	}
}