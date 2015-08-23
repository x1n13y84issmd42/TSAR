/// <reference path="Shader.ts" />
/// <reference path="Context.ts" />

module Tsar.Render
{
	/**
	 * This is basically a contract to use with entities which can be rendered.
	 */
	export class Shaded
	{
		private shader : Tsar.Render.Shader;

		render(C : Tsar.Render.Context)
		{
			this.shader.render(C);
		}
	}
}