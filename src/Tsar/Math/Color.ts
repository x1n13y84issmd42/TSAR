/// <reference path="Main.ts" />

var jMath = Math;

module Tsar.Math
{
	export class Color
	{
		public r:number;
		public g:number;
		public b:number;
		public a:number;

		constructor(r:number, g:number, b:number, a?:number)
		{
			this.r = r;
			this.g = g;
			this.b = b;
			this.a = a ? a : 1;
		}

		rgb()
		{
			return "rgb("+this.r+","+this.g+","+this.b+")";
		}

		rgba()
		{
			return "rgba("+this.r+","+this.g+","+this.b+","+this.a+")";
		}

		hsl()
		{
			var hsl = this.toHSL();
			return "hsl("+hsl[0]+","+hsl[1]+","+hsl[2]+")";
		}

		toHSL()
		{
			var r = this.r/255;
			var g = this.g/255;
			var b = this.b/255;

			var max = jMath.max(r, g, b);
			var min = jMath.min(r, g, b);

			var h, s, l = (max + min) / 2;

			if (max == min)
			{
				h = s = 0;
			}
			else
			{
				var d = max - min;
				s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

				switch (max)
				{
					case r: h = (g - b) / d + (g < b ? 6 : 0); break;
					case g: h = (b - r) / d + 2; break;
					case b: h = (r - g) / d + 4; break;
				}

				h /= 6;
			}

			return [h, s, l];
		}

		setHSL(h:number, s:number, l:number)
		{
			var r, g, b;

		    if(s == 0){
		        r = g = b = l; // achromatic
		    }else{
		        var hue2rgb = function hue2rgb(p, q, t){
		            if(t < 0) t += 1;
		            if(t > 1) t -= 1;
		            if(t < 1/6) return p + (q - p) * 6 * t;
		            if(t < 1/2) return q;
		            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
		            return p;
		        }

		        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		        var p = 2 * l - q;
		        r = hue2rgb(p, q, h + 1/3);
		        g = hue2rgb(p, q, h);
		        b = hue2rgb(p, q, h - 1/3);
		    }

		    this.r = jMath.round(r * 255);
		    this.g = jMath.round(g * 255);
		    this.b = jMath.round(b * 255);
		}

		get h(): number
		{
			return this.toHSL()[0];
		}

		get s(): number
		{
			return this.toHSL()[1];
		}

		get l(): number
		{
			return this.toHSL()[2];
		}

		set h(h:number)
		{
			var hsl = this.toHSL();
			
			if (h < 1)
			{
				h -= jMath.ceil(h);
				h = 1 + h;
			}
			if (h > 1)
			{
				h -= jMath.floor(h);
			}

			this.setHSL(h, hsl[1], hsl[2]);
		}

		set l(l:number)
		{
			var hsl = this.toHSL();
			
			l = jMath.max(0, jMath.min(1, l));
			
			this.setHSL(hsl[0], hsl[1], l);
		}

		set s(s:number)
		{
			var hsl = this.toHSL();
			s = jMath.max(0, jMath.min(1, s));
			this.setHSL(hsl[0], s, hsl[2]);
		}

		lerp(c, that:Color):Color
		{
			return new Color(
				lerp(this.r, that.r, c),
				lerp(this.g, that.g, c),
				lerp(this.b, that.b, c),
				lerp(this.a, that.a, c)
				);
		}
	}
}