module Tsar.UI
{
	export class Window
	{
		wnd;
		documentElement;
		body;

		constructor(window, document)
		{
			this.wnd = window;
    		this.documentElement = document.documentElement;
			this.body = document.getElementsByTagName('body')[0];
    	}

		width()
		{
			return this.body.clientWidth || this.wnd.innerWidth || this.documentElement.clientWidth;
		}

		height()
		{
			return this.body.clientHeight || this.wnd.innerHeight || this.documentElement.clientHeight;
		}
	}

	export var window : Window;
}

Tsar.UI.window = new Tsar.UI.Window(window, document);