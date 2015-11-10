/// <reference path="Context.ts" />

module Tsar.Render
{
	export class Target
	{
		private element;
		public context;

		constructor(w:number, h:number)
		{
			this.element = document.createElement('canvas');
			this.element.width = w;
			this.element.height = h;

			this.context = new Context(this.element.getContext('2d'));
		}

		getDOMNode()
		{
			return this.element;
		}

		resize(w:number, h:number)
		{
			this.element.width = w;
			this.element.height = h;
		}

		requestFullscreen()
		{
			if (this.element.requestFullscreen)
			{
				this.element.requestFullscreen();
			}
			else if (this.element.msRequestFullscreen)
			{
				this.element.msRequestFullscreen();
			}
			else if (this.element.mozRequestFullScreen)
			{
				this.element.mozRequestFullScreen();
			}
			else if (this.element.webkitRequestFullscreen)
			{
				this.element.webkitRequestFullscreen();
			}
		}

		cancelFullscreen()
		{
			if (this.element.cancelFullscreen)
			{
				this.element.cancelFullscreen();
			}
			else if (this.element.msCancelFullscreen)
			{
				this.element.msCancelFullscreen();
			}
			else if (this.element.mozCancelFullScreen)
			{
				this.element.mozCancelFullScreen();
			}
			else if (this.element.webkitCancelFullScreen)
			{
				this.element.webkitCancelFullScreen();
			}
			else if (document.webkitCancelFullScreen)
			{
				document.webkitCancelFullScreen();
			}
		}

		isFullscreen()
		{
			return <boolean>(document.webkitIsFullScreen || document.fullScreenElement || document.mozFullScreen);
		}
	}
}