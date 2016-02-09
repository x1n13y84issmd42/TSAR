module Tsar.Input
{
	/**
	 * Provides access to touch events on mobile devices which support those.
	 */
	export class Touch
	{
		private touchStartCB: (e:any)=>void;
		private touchEndCB: (e:any)=>void;
		private touchMoveCB: (e:any)=>void;
		private touchCancelCB: (e:any)=>void;

		public constructor(node)
		{
		    this.listen(node);
		}

		public listen(node)
		{
			window.addEventListener('touchstart', (evt) => {this.evt_touchStart(evt);});
			window.addEventListener('touchend', (evt) => {this.evt_touchEnd(evt);});
			window.addEventListener('touchmove', (evt) => {this.evt_touchMove(evt);});
			window.addEventListener('touchcancel', (evt) => {this.evt_touchCancel(evt);});
		}

		public onMotion(cb:(e:any)=>void):void
		{
			this.cb = cb;
		}

		public evt_touchStart(evt)
		{
			if (this.touchStartCB)
			{
				this.touchStartCB(evt);
			}
		}

		public evt_touchEnd(evt)
		{
			if (this.touchEndCB)
			{
				this.touchEndCB(evt);
			}
		}

		public evt_touchMove(evt)
		{
			if (this.touchMoveCB)
			{
				this.touchMoveCB(evt);
			}
		}

		public evt_touchCancel(evt)
		{
			if (this.touchCancelCB)
			{
				this.touchCancelCB(evt);
			}
		}
	}
}