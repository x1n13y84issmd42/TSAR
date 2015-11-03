/// <reference path="../../../../typings/underscore/underscore.d.ts" />
/// <reference path="../Math/float2.ts" />

module Tsar.Render.Debug
{
	class Plot
	{
		public values: number[] = [];
		private capacity: number = 0;
		public maximum: number = 0;

		public constructor(capacity: number)
		{
			this.capacity = capacity;
		}

		public addValue(n: number)
		{
			this.values.push(n);

			if (this.values.length > this.capacity)
			{
				this.values.shift();
			}

			//	Finding the maximum value to create a proper Y axis
			this.maximum = gMath.max.apply(null, this.values);
		}
	}

	export class Plotter
	{
		private charts: Plot[] = [];
		private capacity: number = 0;

		public constructor(capacity:number)
		{
			this.capacity = capacity;
		}

		public addValue(plotName:string, n:number)
		{
			if (! this.charts[plotName])
			{
				this.charts[plotName] = new Plot(this.capacity);
			}

			this.charts[plotName].addValue(n);
		}

		public render(C)
		{
			C.globalCompositeOperation = "source-over";
			C.lineWidth = 1;
			C.lineCap = 'round';
		//	var maximum = gMath.max.apply(null, underscore.pluck(this.charts, 'maximum'));
			var origin = new Tsar.Math.float2(20, 20);
			var dimensions = new Tsar.Math.float2(400, 200);
			var offset = new Tsar.Math.float2(20, -20);
		//	var YLabels = this.computeYLabels(maximum);

			this.renderAxes(C, origin, dimensions, offset);

			for (var cI in this.charts)
			{
				var plot = this.charts[cI];
				this.plot(plot, C, origin, dimensions, offset);
			}
		}

		private plot(plot, C, origin, dimensions, offset)
		{
			var xStep = (dimensions.x - offset.x) / plot.capacity;
			var xOrigin = origin.x + offset.x;
			var x = xOrigin;

			var yfn = (v) => {
				return (v / plot.maximum) * (dimensions.y + offset.y) + origin.y;
			};

			if (plot.values.length)
			{
				C.strokeStyle = "blue";
				C.beginPath();
				
				C.moveTo(x, yfn(plot.values[0]));

				for (var vI in plot.values)
				{
					C.lineTo(x, yfn(plot.values[vI]));
					x += xStep;
				}
				
				C.stroke();
				C.closePath();
			}
		}

		private renderAxes(C, origin, dimensions, offset)
		{
			C.strokeStyle = "red";
			C.fillStyle = "white";
			C.beginPath();

			C.moveTo(origin.x + offset.x, origin.y);
			C.lineTo(origin.x + offset.x, origin.y + dimensions.y);

			C.moveTo(origin.x, origin.y + offset.y + dimensions.y);
			C.lineTo(origin.x + dimensions.x, origin.y + offset.y + dimensions.y);

			C.closePath();
			C.stroke();
		}

		private computeYLabels(maximum: number)
		{
			return [];
		}
	}
}