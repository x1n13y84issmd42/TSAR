module Tsar.Core
{
	/**
	 * Implements this when making an application on Tsar.
	 */
	export interface IApp
	{
		/**
		 * Called when engine has set everything up.
		 */
		ready();

		/**
		 * Called when it's time to update the app.
		 * @param {number} dt  Delta time, a time since the last update.
		 * @param {number} et  Elapsed time, a time since the app started.
		 * @param {number} now Current timestamp.
		 */
		update(dt:number, et:number, now:number);

		/**
		 * Called when app should render itself.
		 */
		render();
	}
}