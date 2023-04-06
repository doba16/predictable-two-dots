import { GameObject } from "../index";

import Logo from "../../../assets/moves.png"

export class UiBarElement implements GameObject {
    
    private _text: string
    private _icon: HTMLImageElement

    private _x: number = 0
    private _y: number = 0
    private _width: number = 150
    private _height: number = 40

    constructor(icon: string, text: string) {
        this._icon = new Image()
        this._icon.src = icon

        this._text = text || ""
    }

    draw(context: CanvasRenderingContext2D, width: number, height: number, interactionX: number, interactionY: number, interactionClicked: boolean): void {
        context.fillStyle = "#7775"

        context.beginPath()
        context.moveTo(this.x + this.height / 5, this.y)
        context.lineTo(this.x + this.width - this.height / 5, this.y)
        context.arcTo(this.x + this.width, this.y, this.x + this.width, this.y + this.height, this.height / 5)
        context.lineTo(this.x + this.width, this.y + this.height * 4 / 5)
        context.arcTo(this.x + this.width, this.y + this.height, this.x, this.y + this.height, this.height / 5)
        context.lineTo(this.x + this.height / 5, this.y + this.height)
        context.arcTo(this.x, this.y + this.height, this.x, this.y, this.height / 5)
        context.lineTo(this.x, this.y + this.height / 5)
        context.arcTo(this.x, this.y, this.x + this.width, this.y, this.height / 5)

        context.fill()
        
        context.drawImage(this._icon, this.x + this.height / 10, this.y + this.height / 10, this.height * 8 / 10, this.height * 8 / 10)

        context.font = `${this.height * 0.7}px system-ui`
        context.textAlign = "center"
        context.textBaseline = "middle"
        context.fillStyle = "currentColor"
        context.fillText(this.text, this.x + this.width / 2 + this.height * 0.45, this.y + this.height / 2, this.width - this.height * 1.1)
    }


    updateInteraction(interactionX: number, interactionY: number, interactionClicked: boolean): void {
        // No action needed
    }
    update(width: number, height: number): void {
        // No action needed
    }

    public get x(): number {
        return this._x
    }

    public set x(x: number) {
        this._x = x
    }
    
    public get y(): number {
        return this._y
    }

    public set y(y: number) {
        this._y = y
    }

    public get width(): number {
        return this._width
    }

    public set width(width: number) {
        this._width = width
    }

    public get height(): number {
        return this._height
    }

    public set height(height: number) {
        this._height = height
    }

    public get text(): string {
        return this._text
    }

    public set text(text: string) {
        this._text = text
    }
}