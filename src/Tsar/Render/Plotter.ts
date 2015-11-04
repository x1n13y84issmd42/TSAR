/// <reference path="../../../../typings/underscore/underscore.d.ts" />
/// <reference path="../Math/float2.ts" />
/// <reference path="../AFX/Main.ts" />

module Tsar.Render.Debug
{
	type PlotOptions = {
		color?:string,
		dimensions?:Tsar.Math.float2,
		name?:string,
		thickness?:number,
		axesColor?:string
	};

	var plotOptionsDefault = {
		color: "yellow",
		dimensions: new Tsar.Math.float2(100, 100),
		thickness: 1,
		axesColor: "red"
	};

	export enum PlotRangeType
	{
		Positive,
		HasNegative,
	}

	export class Plot
	{
		private capacity: number = 0;
		public values: number[] = [];

		private min:number;
		private max:number;
		private rangeType = PlotRangeType.Positive;
		public maximum: number = 0;
		public minimum: number = 0;

		public position = new Tsar.Math.float2(0, 0);

		public options:PlotOptions = {
			color: 'white',
			thickness: 1
		};

		public constructor(capacity: number, max:number, min:number, options:PlotOptions)
		{
			this.capacity = capacity;
			this.options = Tsar.AFX.mix(plotOptionsDefault, options);
			this.min = jMath.min(min, max);
			this.max = jMath.max(min, max);

			if (this.min < 0)
			{
				this.rangeType = PlotRangeType.HasNegative;
			}
		}

		public setPosition(p:Tsar.Math.float2)
		{
			this.position = p;
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

		public render(C)
		{
			C.globalCompositeOperation = "source-over";
			C.lineWidth = 1;
			C.lineCap = 'round';

			var originY =
				(this.rangeType == PlotRangeType.HasNegative)
				?
				jMath.round(this.options.dimensions.y / 2)
				:
				this.options.dimensions.y;

			this.renderAxes(C, originY);
			this.plot(C);
		}

		private Y(value:number):number
		{
			var p = (value - this.min) / (this.max - this.min);
			return p * this.options.dimensions.y + this.position.y;
		}

		private plot(C)
		{
			if (this.values.length)
			{
				var x = this.position.x;
				var stepX = this.options.dimensions.x / this.capacity;
				var y = this.Y(this.values[0]);

				C.strokeStyle = this.options.color;
				C.lineWidth = this.options.thickness;
				C.beginPath();
				C.moveTo(x, y);

				for (var vI in this.values)
				{
					y = this.Y(this.values[vI]);
					C.lineTo(x, y);
					x += stepX;
				}

				C.stroke();
				C.closePath();
			}
		}

		private renderAxes(C, originY)
		{
			C.strokeStyle = this.options.axesColor;
			C.beginPath();

			//	Y
			C.moveTo(this.position.x, this.position.y);
			C.lineTo(this.position.x, this.position.y + this.options.dimensions.y);

			//	X
			C.moveTo(this.position.x, this.position.y + originY);
			C.lineTo(this.position.x + this.options.dimensions.x, this.position.y + originY);

			C.closePath();
			C.stroke();
		}
	}
}