/// <reference path='Target.ts' />

module Tsar.Render
{
	export function createTarget(w:number, h:number) : Tsar.Render.Target
	{
		var t = new Tsar.Render.Target(w, h);
		return t;
	}
}