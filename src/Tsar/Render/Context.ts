/// <reference path="../Math/float2.ts" />

var gMath = Math;

module Tsar.Render
{
	/**
	 * I don't know how to extend the CanvasRenderingContext2D, but want some additional
	 * drawing methods in my contexts, so had to make this.
	 */
	export class Context// implements CanvasRenderingContext2D
	{
		public context : CanvasRenderingContext2D;

		get canvas() : any
		{
			return this.context.canvas;
		}

		set canvas(c : any)
		{
			this.context.canvas = c;
		}

		get fillStyle(): string | CanvasGradient | CanvasPattern
		{
			return this.context.fillStyle;
		}

		set fillStyle(value)
		{
			this.context.fillStyle = value;
		}

		//	BROKEN
		get font() : any
		{
			return this.context.font;
		}

		set font(c : any)
		{
			this.context.font = c;
		}

		get globalAlpha() : any
		{
			return this.context.globalAlpha;
		}

		set globalAlpha(c : any)
		{
			this.context.globalAlpha = c;
		}

		get globalCompositeOperation(): string {
			return this.context.globalCompositeOperation;
		}

		set globalCompositeOperation(value)
		{
			this.context.globalCompositeOperation = value;
		}

		get lineCap(): string {
			return this.context.lineCap;
		}

		set lineCap(value)
		{
			this.context.lineCap = value;
		}

		get lineDashOffset(): number {
			return this.context.lineDashOffset;
		}

		set lineDashOffset(value)
		{
			this.context.lineDashOffset = value;
		}

		get lineJoin(): string {
			return this.context.lineJoin;
		}

		set lineJoin(value)
		{
			this.context.lineJoin = value;
		}

		get lineWidth(): number {
			return this.context.lineWidth;
		}

		set lineWidth(value)
		{
			this.context.lineWidth = value;
		}

		get miterLimit(): number {
			return this.context.miterLimit;
		}

		set miterLimit(value)
		{
			this.context.miterLimit = value;
		}

		get msFillRule(): string {
			return this.context.msFillRule;
		}

		set msFillRule(value)
		{
			this.context.msFillRule = value;
		}

		get msImageSmoothingEnabled(): boolean {
			return this.context.msImageSmoothingEnabled;
		}

		set msImageSmoothingEnabled(value)
		{
			this.context.msImageSmoothingEnabled = value;
		}

		get shadowBlur(): number {
			return this.context.shadowBlur;
		}

		set shadowBlur(value)
		{
			this.context.shadowBlur = value;
		}

		get shadowColor(): string {
			return this.context.shadowColor;
		}

		set shadowColor(value)
		{
			this.context.shadowColor = value;
		}

		get shadowOffsetX(): number {
			return this.context.shadowOffsetX;
		}

		set shadowOffsetX(value)
		{
			this.context.shadowOffsetX = value;
		}

		get shadowOffsetY(): number {
			return this.context.shadowOffsetY;
		}

		set shadowOffsetY(value)
		{
			this.context.shadowOffsetY = value;
		}

		get strokeStyle(): string | CanvasGradient | CanvasPattern
		{
			return this.context.strokeStyle;
		}

		set strokeStyle(value)
		{
			this.context.strokeStyle = value;
		}

		get textAlign(): string
		{
			return this.context.textAlign;
		}

		set textAlign(value)
		{
			this.context.textAlign = value;
		}

		get textBaseline(): string
		{
			return this.context.textBaseline;
		}

		set textBaseline(value)
		{
			this.context.textBaseline = value;
		}

		////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
	
		restore(): void
		{
			return this.context.restore();
		}

		setTransform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void
		{
			return this.context.setTransform(m11, m12, m21, m22, dx, dy);
		}

		save(): void
		{
			return this.context.save();
		}

		arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void
		{
			return this.context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
		}

		measureText(text: string): TextMetrics
		{
			return this.context.measureText(text);
		}

		isPointInPath(x: number, y: number, fillRule?: string): boolean
		{
			return this.context.isPointInPath(x, y, fillRule);
		}

		quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void
		{
			return this.context.quadraticCurveTo(cpx, cpy, x, y);
		}

		putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX?: number, dirtyY?: number, dirtyWidth?: number, dirtyHeight?: number): void
		{
			return this.context.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
		}

		rotate(angle: number): void
		{
			return this.context.rotate(angle);
		}

		//	BROKEN
		fillText(text: string, x: number, y: number, maxWidth?: number): void
		{
			return this.context.fillText(text, x, y, maxWidth);
		}

		translate(x: number, y: number): void
		{
			return this.context.translate(x, y);
		}

		scale(x: number, y: number): void
		{
			return this.context.scale(x, y);
		}

		createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient
		{
			return this.context.createRadialGradient(x0, y0, r0, x1, y1, r1);
		}

		lineTo(x: number, y: number): void
		{
			return this.context.lineTo(x, y);
		}

		getLineDash(): Array<number>
		{
			return this.context.getLineDash();
		}

		fill(): void;
		fill(fillRule?: string): void
		{
			if (fillRule)
			{
				return this.context.fill(fillRule);
			}

			return this.context.fill();
		}

		createImageData(imageDataOrSw: any, sh?: number): ImageData
		{
			return this.context.createImageData(imageDataOrSw, sh);
		}

		createPattern(image: HTMLElement, repetition: string): CanvasPattern
		{
			return this.context.createPattern(<HTMLVideoElement>image, repetition);
		}

		closePath(): void
		{
			return this.context.closePath();
		}

		rect(x: number, y: number, w: number, h: number): void
		{
			return this.context.rect(x, y, w, h);
		}

		clip(fillRule?: string): void
		{
			return this.context.clip(fillRule);
		}

		clearRect(x: number, y: number, w: number, h: number): void
		{
			return this.context.clearRect(x, y, w, h);
		}

		moveTo(x: number, y: number): void
		{
			return this.context.moveTo(x, y);
		}

		getImageData(sx: number, sy: number, sw: number, sh: number): ImageData
		{
			return this.context.getImageData(sx, sy, sw, sh);
		}

		fillRect(x: number, y: number, w: number, h: number): void
		{
			return this.context.fillRect(x, y, w, h);
		}

		bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void
		{
			return this.context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
		}

		drawImage(image: HTMLElement, offsetX: number, offsetY: number, width?: number, height?: number, canvasOffsetX?: number, canvasOffsetY?: number, canvasImageWidth?: number, canvasImageHeight?: number): void
		{
			return this.context.drawImage(<HTMLVideoElement>image, offsetX, offsetY, width, height, canvasOffsetX, canvasOffsetY, canvasImageWidth, canvasImageHeight);
		}

		transform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void
		{
			return this.context.transform(m11, m12, m21, m22, dx, dy);
		}

		stroke(): void
		{
			return this.context.stroke();
		}

		strokeRect(x: number, y: number, w: number, h: number): void
		{
			return this.context.strokeRect(x, y, w, h);
		}

		setLineDash(segments: Array<number>): void
		{
			return this.context.setLineDash(segments);
		}

		strokeText(text: string, x: number, y: number, maxWidth?: number): void
		{
			return this.context.strokeText(text, x, y, maxWidth);
		}

		beginPath(): void
		{
			return this.context.beginPath();
		}

		arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void
		{
			return this.context.arcTo(x1, y1, x2, y2, radius);
		}

		createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient
		{
			return this.context.createLinearGradient(x0, y0, x1, y1);
		}

		////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		constructor(ctx : CanvasRenderingContext2D)
		{
			this.context = ctx;
		}

		polygon(x, y, sides, radius)
		{
			var start = new Tsar.Math.float2(x + radius, y);

			this.beginPath();
			this.moveTo(start.x, start.y);

			this.context.font = 'italic 12px Arial';

			for (var sI=0; sI<sides; sI++)
			{
				var ptx = gMath.cos(gMath.PI * 2 / sides * sI) * radius + x;
				var pty = gMath.sin(gMath.PI * 2 / sides * sI) * radius + y;

				this.lineTo(ptx, pty);

				/*ptx += gMath.cos(gMath.PI * 2 / sides * sI) * 10;
				pty += gMath.sin(gMath.PI * 2 / sides * sI) * 10;
				this.context.fillText(sI + '', ptx - 4 - 4, pty + 4);*/
			}

			this.closePath();
		}
	}
}