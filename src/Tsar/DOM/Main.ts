module Tsar.DOM
{
	var DOM;
	var shadowDOM;

	export function root(rootNode, shadowRootNode?:any)
	{
		DOM = rootNode;

		if (shadowRootNode)
		{
			shadowDOM = shadowRootNode;
		}
	}

	export function append(node)
	{
		DOM.appendChild(node);
	}

	export function shadowAppend(node)
	{
		shadowDOM.appendChild(node);
	}

	export function grab(id)
	{
		return document.getElementById(id);
	}
}