/// <reference path="../../../../typings/underscore/underscore.d.ts" />
/// <reference path="../Math/float2.ts" />

module Tsar.Render.Debug
{
	class Plot
	{
		public name: string;
		public values: number[] = [];
		public maximum: number = 0;
		public minimum: number = 0;
		private capacity: number = 0;

		public options = {
			color: 'white',
			thickness: 1
		};

		public constructor(name, capacity: number, options:{color:string, thickness:number})
		{
			this.name = name;
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

			//	Finding the maximum & minimum values to create a proper Y axis
			this.maximum = jMath.max.apply(null, this.values);
			this.minimum = jMath.min.apply(null, this.values);
		}
	}

	export class Plotter
	{
		private charts: Plot[] = [];
		private capacity: number = 0;
		private position = new Tsar.Math.float2(0, 0);
		private dimensions = new Tsar.Math.float2(100, 100);
		private options = {range:[-1, 1]};

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
			for (var cI in this.charts)
			{
				if (this.charts[cI].name == name)
				{
					return;
				}
			}
				
			this.charts.push(new Plot(name, this.capacity, options));
		}

		public addValue(plotName:string, n:number)
		{
			for (var cI in this.charts)
			{
				if (this.charts[cI].name == name)
				{
					this.charts[cI].addValue(n);
					return;
				}
			}
		}

		public render(C)
		{
			C.globalCompositeOperation = "source-over";
			C.lineWidth = 1;
			C.lineCap = 'round';
			var maximum = this.findMaximum();
			var minimum = this.findMinimum();
			var origin = this.position;
			var dimensions = this.dimensions;
			var offset = new Tsar.Math.float2(20, -20);
		//	var YLabels = this.computeYLabels(maximum);

			this.renderAxes(C, origin, dimensions, offset, minimum<0);

			for (var cI in this.charts)
			{
				var plot = this.charts[cI];
				this.plot(plot, C, origin, dimensions, offset);
			}
		}

		private findMaximum()
		{
			if (this.charts.length)
			{
				var maximum = this.charts[0].maximum;				

				for (var cI in this.charts)
				{
					maximum = jMath.max(maximum, this.charts[cI].maximum);
				}

				return maximum;
			}

			return 0;
		}

		private findMinimum()
		{
			if (this.charts.length)
			{
				var minimum = this.charts[0].minimum;				

				for (var cI in this.charts)
				{
					minimum = jMath.min(minimum, this.charts[cI].minimum);
				}

				return minimum;
			}

			return 0;
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
						C.arc(x, y, 2, 0, jMath.PI * 2);
						C.closePath();
						C.fill();
						*/
					}
				}
				
				C.stroke();
				C.closePath();
			}
		}

		private renderAxes(C, origin, dimensions, offset, negative)
		{
			C.strokeStyle = "red";
			C.fillStyle = "white";
			C.beginPath();

			//	Y
			C.moveTo(origin.x + offset.x, origin.y);
			C.lineTo(origin.x + offset.x, origin.y + dimensions.y);

			//	X
			if (negative)
			{
				C.moveTo(origin.x, origin.y + offset.y + dimensions.y / 2);
				C.lineTo(origin.x + dimensions.x, origin.y + offset.y + dimensions.y / 2);				
			}
			else
			{
				C.moveTo(origin.x, origin.y + offset.y + dimensions.y);
				C.lineTo(origin.x + dimensions.x, origin.y + offset.y + dimensions.y);				
			}

			C.closePath();
			C.stroke();
		}

		private computeYLabels(maximum: number)
		{
			return [];
		}
	}
}