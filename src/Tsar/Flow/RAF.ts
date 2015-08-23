/// <reference path="IFlow.ts" />

module Tsar.Flow
{
	/**
	 * A flow based on the requestAnimationFrame().
	 */
	export class RAF implements IFlow
	{
		//	Callbacks from a client app (actually, from the Tsar.Power class.
		//	They delegate the call to actual update/render methods from a client app).
		cbUpdate : (dt:number, et:number, now:number) => void;
		cbRender : () => void;

		lastFrameTime : number;
		timeElapsed : number = 0;

		constructor()
		{
			this.lastFrameTime = (new Date().getTime());
		}

		run()
		{
			this.requestAnimationFrame();
		}

		requestAnimationFrame()
		{
			var self = this;
			window.requestAnimationFrame(function(){
				self.onAnimationFrame();
			});
		}

		onAnimationFrame()
		{
			var t = (new Date()).getTime();
			var dt = t - this.lastFrameTime;
			var et = this.timeElapsed += dt;
			this.lastFrameTime = t;
			var now = t;

			this.requestAnimationFrame();

			if (this.cbUpdate)
			{
				this.cbUpdate(dt, et, now);
			}
			else
			{
				console.warn("Update callback to the RAF flow controller has not been provided.");
			}

			if (this.cbRender)
			{
				this.cbRender();
			}
			else
			{
				console.warn("Render callback to the RAF flow controller has not been provided.");
			}
			
		}

		onUpdate(cb : (dt:number, et:number, now:number) => void) : void
		{
			this.cbUpdate = cb;
		}

		onRender(cb : () => void) : void
		{
			this.cbRender = cb;
		}
	}
}