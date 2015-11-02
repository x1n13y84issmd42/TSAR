module Tsar.Render.Debug
{
	class Plot
	{
		private values: number[] = [];
		private length: number = 0;
		private maximum: number = 0;

		public constructor(length: number)
		{
			this.length = length;
		}

		public addValue(n: number)
		{
			this.values.push(n);

			if (this.values.length > this.length)
			{
				this.values.shift();
			}

			this.maximum = gMath.max.apply(null, this.values);
		}
	}

	export class Plotter
	{
		private charts: Plot[] = [];
		private length: number = 0;

		public constructor(length:number)
		{
			this.length = length;
		}

		public addValue(plotName:string, n:number)
		{
			if (! this.charts[plotName])
			{
				this.charts[plotName] = new Plot(this.length);
			}

			this.charts[plotName].addValue(n);
		}

		public render(C)
		{
			
		}
	}
}