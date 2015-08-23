/// <reference path="../Render/Target.ts" />
/// <reference path="../DOM/Main.ts" />	
/// <reference path="../Input/Proxy.ts" />

module Tsar.UI
{
	/**
	 * The only reasonable (as it seems to me back here in 07.2015) way for application to read input events is to
	 * mount something into HTML around. Wouldn't it be a canvas render target?
	 * @param {Tsar.Render.Target} rt A render target to be layed out in HTML and receive input (mouse/kb/touch) events.
	 */
	export function exposeRenderTarget(rt : Tsar.Render.Target)
	{
		Tsar.DOM.append(rt.getDOMNode());		
		
		return new Tsar.Input.Proxy(rt.getDOMNode());
	}
}