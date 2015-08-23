/// <reference path="Context.ts" />

import R = Tsar.Render

/**
 * Some visual debugging happens here.
 */
module Tsar.Render.Debug
{
	export enum GridStyle
	{
		//	Stroke style
		Solid,
		Dashed,
		Dotted,

		//	Axiality (direction) values
		X,
		Y
	}

	class GridRender
	{
		static solid(C: R.Context, options: any)
		{
			var targetW = C.canvas.width;
			var targetH = C.canvas.height;

			var limit = (options.axiality == GridStyle.X) ? targetH : targetW;
			var i = 0;

			C.strokeStyle = options.stroke;
			C.lineWidth = options.width;
			C.beginPath();

			if (options.numbers)
			{
				C.font = "normal 10px Arial";
			}

			while (i <= limit)
			{
				if (options.axiality == GridStyle.X)
				{
					C.moveTo(0, i - 0.5);
					C.lineTo(targetW, i - 0.5);
					if (options.numbers)
					{
						C.context.fillText(i + "", 5, i + 15);
					}
				}
				else
				{
					C.moveTo(i - 0.5, 0);
					C.lineTo(i - 0.5, targetH);
					if (options.numbers)
					{
						C.context.fillText(i + "", i + 5, 15);
					}
				}

				i += options.offset;
			}

			C.closePath();
			C.stroke();
			C.fill();
		}

		static dashed(C: R.Context, options: any)
		{
			var targetW = C.canvas.width;
			var targetH = C.canvas.height;

			var limit = (options.axiality == GridStyle.X) ? targetH : targetW;
			var i = 0;

			C.strokeStyle = options.stroke;
			C.setLineDash([4, 2]);
			C.lineWidth = options.width;
			C.beginPath();

			while (i <= limit)
			{
				if (options.axiality == GridStyle.X)
				{
					C.moveTo(0, i - 0.5);
					C.lineTo(targetW, i - 0.5);
				}
				else
				{
					C.moveTo(i - 0.5, 0);
					C.lineTo(i - 0.5, targetH);
				}

				i += options.offset;
			}

			C.closePath();
			C.stroke();
			C.setLineDash([]);
		}
	}

	export function grid(C: R.Context, grid: Array<any>)
	{
		for (var gI = 0; gI < grid.length; gI++)
		{
			var line = grid[gI];

			switch (line.style)
			{
				case GridStyle.Solid:
					GridRender.solid(C, line);
					break;

				case GridStyle.Dashed:
					GridRender.dashed(C, line);
					break;

				default:
					break;
			}
		}
	}
}