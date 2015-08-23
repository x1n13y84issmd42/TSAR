module Tsar.DOM
{
	var dom;

	export function root(rootNode)
	{
		dom = rootNode;
	}

	export function append(node)
	{
		dom.appendChild(node);
	}

	export function grab(id)
	{
		return document.getElementById(id);
	}
}