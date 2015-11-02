module Tsar.Input
{
	/**
	 * Provides access to motion events on mobile devices which support those.
	 */
	export class Motion
	{
		private cb: (e:any)=>void;

		public constructor(node)
		{
		    this.listen(node);
		}

		public listen(node)
		{
			var input = this;

		//	if (window.DeviceMotionEvent)
			{
				node.addEventListener('devicemotion', (evt) => {this.evt_deviceMotion(evt);});
			}
		}

		public onMotion(cb:(e:any)=>void):void
		{
			this.cb = cb;
		}

		public evt_deviceMotion(evt)
		{
			if (this.cb)
			{
				this.cb(evt);
			}
		}
	}
}