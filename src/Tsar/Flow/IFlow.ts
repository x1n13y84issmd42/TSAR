module Tsar.Flow
{
	/**
	 * Flow is a mechanism which controls update and rendering cycle.
	 * Implement the Tsar.Flow.IFlow interface or override the Tsar.Flow.Base
	 * to design your own update flow.
	 */
	export interface IFlow
	{
		//	Callbacks from a client app (actually, from the Tsar.Power class.
		//	They delegate the call to actual update/render methods from a client app).
		cbUpdate : (dt:number, et:number, now:number) => void;
		cbRender : () => void;

		lastFrameTime : number;

		run();

		onUpdate(cb : (dt:number, et:number, now:number) => void) : void;
		onRender(cb :() => void) : void;
	}
}