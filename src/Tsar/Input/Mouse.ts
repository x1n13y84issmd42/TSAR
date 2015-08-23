module Tsar.Input
{
	export class Mouse
	{
		private cbMove : (e:any) => void;
		private cbClick : (e:any) => void;
		private cbDoubleClick : (e:any) => void;
		private cbWheel : (e:any) => void;

		constructor(node)
		{
			this.listen(node);		
		}

		listen(node)
		{
			var mouse = this;
			node.addEventListener('mousemove', function(e){mouse.evt_mousemove(e);});
			node.addEventListener('click', function(e){mouse.evt_click(e);});
			node.addEventListener('dblclick', function(e){mouse.evt_dblclick(e);});
			node.addEventListener('wheel', function(e){mouse.evt_wheel(e);});
		}

		evt_mousemove(e)
		{
			if (this.cbMove)
			{
				this.cbMove({
					x: e.offsetX,
					y: e.offsetY
					});
			}

		//	console.log("move?", e);
		}

		evt_click(e)
		{
			if (this.cbClick)
			{
				this.cbClick(e);
			}
		}

		evt_dblclick(e)
		{
			if (this.cbDoubleClick)
			{
				this.cbDoubleClick(e);
			}
		}

		evt_wheel(e)
		{
			if (this.cbWheel)
			{
				this.cbWheel(e);
			}
		}

		onMove(cb:(e:any)=>void)
		{
			this.cbMove = cb;
		}

		onClick(cb:(e:any)=>void)
		{
			this.cbClick = cb;
		}

		onDoubleClick(cb:(e:any)=>void)
		{
			this.cbDoubleClick = cb;
		}

		onWheel(cb:(e:any)=>void)
		{
			this.cbWheel = cb;
		}
	}
}