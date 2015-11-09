module Tsar.UI
{
	export class Window
	{
		private wnd;
		private documentElement;
		private body;
		private cbResize:any = null;

		constructor(window, document)
		{
			this.wnd = window;
    		this.documentElement = document.documentElement;
			this.body = document.getElementsByTagName('body')[0];

			this.wnd.addEventListener('resize', evt => {
				if (this.cbResize)
				{
					this.cbResize(evt);
				}
			});
    	}

		width()
		{
			return this.wnd.innerWidth || this.body.clientWidth || this.documentElement.clientWidth;
		}

		height()
		{
			return this.wnd.innerHeight || this.body.clientHeight || this.documentElement.clientHeight;
		}

		onResize(cb)
		{
			this.cbResize = cb;
		}

		addChild(e:any)
		{
			this.body.addChild(e);
		}
	}

	export var window : Window;
}

Tsar.UI.window = new Tsar.UI.Window(window, document);