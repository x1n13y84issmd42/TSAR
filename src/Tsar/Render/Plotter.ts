/// <reference path="../../../../typings/underscore/underscore.d.ts" />
/// <reference path="../Math/float2.ts" />

module Tsar.Render.Debug
{
	class Plot
	{
		public values: number[] = [];
		private capacity: number = 0;
		public maximum: number = 0;
		public options = {
			color: 'white',
			thickness: 1
		};

		public constructor(capacity: number, options:{color:string, thickness:number})
		{
			this.capacity = capacity;
			this.options = options;
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
		private position = new Tsar.Math.float2(0, 0);
		private dimensions = new Tsar.Math.float2(100, 100);

		public constructor(capacity:number)
		{
			this.capacity = capacity;
		}

		public setPosition(p:Tsar.Math.float2)
		{
			this.position = p;
		}

		public setDimensions(d:Tsar.Math.float2)
		{
			this.dimensions = d;
		}

		public addChart(name: string, options: {color:string, thickness:number})
		{
			if (! this.charts[name])
			{
				this.charts[name] = new Plot(this.capacity, options);
			}
		}

		public addValue(plotName:string, n:number)
		{
			if (this.charts[plotName])
			{
				this.charts[plotName].addValue(n);
			}
		}

		public render(C)
		{
			C.globalCompositeOperation = "source-over";
			C.lineWidth = 1;
			C.lineCap = 'round';
		//	var maximum = gMath.max.apply(null, underscore.pluck(this.charts, 'maximum'));
			var origin = this.position;
			var dimensions = this.dimensions;
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
				return (dimensions.y + offset.y) + origin.y - ((v / plot.maximum) * (dimensions.y + offset.y));
			};

			if (plot.values.length)
			{
				C.font = "bold 10px Arial";
				C.strokeStyle = plot.options.color;
				C.lineWidth = plot.options.thickness;
				C.fillStyle = "white";
				C.beginPath();
				
				C.moveTo(x, yfn(plot.values[0]));

				for (var vI in plot.values)
				{
					var v = plot.values[vI];
					var y = yfn(v);
					C.lineTo(x, y);
					x += xStep;

					if (v == plot.maximum)
					{
						C.context.fillText(v.toFixed(3), x, y);
						/*
						C.beginPath();
						C.arc(x, y, 2, 0, gMath.PI * 2);
						C.closePath();
						C.fill();
						*/
					}
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