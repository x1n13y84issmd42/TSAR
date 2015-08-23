/// <reference path="IFlow.ts" />

module Tsar.Flow
{
	export class Base implements IFlow
	{
		cbUpdate : (dt:number, et:number, now:number) => void;
		cbRender : () => void;

		lastFrameTime : number;

		onUpdate(cb)
		{
			this.cbUpdate = cb;
		}

		onRender(cb)
		{
			this.cbRender = cb;
		}

		run();
	}
}