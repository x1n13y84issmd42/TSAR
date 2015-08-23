/// <reference path='Core/IApp.ts' />
/// <reference path='Flow/IFlow.ts' />

module Tsar
{
	/**
	 * Power wires together an apllication and core engine facilities.
	 */
	export class Power
	{
		private flow : Tsar.Flow.IFlow;
		private app : Tsar.Core.IApp;

		/**
		 * Acquires a flow.
		 * @param {Tsar.Flow.IFlow} flow [description]
		 */
		ride(flow : Tsar.Flow.IFlow)
		{
			this.flow = flow;
			var self = this;
			flow.onUpdate(function(dt, et, now){self.onUpdate(dt, et, now)});
			flow.onRender(function(){self.onRender()});
		}

		/**
		 * Runs a client application
		 * @param {Tsar.Core.IApp} app An application using the engine.
		 */
		empower(app : Tsar.Core.IApp)
		{
			this.app = app;
			app.ready();
			flow.run();
		}

		/**
		 * Updates the underlying app.
		 * @param {number} dt  Delta time, a time since the last update.
		 * @param {number} et  Elapsed time, a time since the app started.
		 * @param {number} now Current timestamp.
		 */
		onUpdate(dt:number, et:number, now:number)
		{
			this.app.update(dt, et, now);
		}

		/**
		 * Renders the underlying app.
		 */
		onRender()
		{
			this.app.render();
		}

		/*touch(node)
		{
			this.dom.setRoot(node);
		}*/
	}
}