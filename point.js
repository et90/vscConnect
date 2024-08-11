export default class point{
    #size = 10;
    #colorFill = 'red';
    #colorStroke = 'black'
    #x = 50;
    #y = 50;
    #r = 10;
    #context = null;

    constructor(ctx){
        this.#context = ctx;
    }

    draw(){
        this.#context.beginPath();
        this.#context.arc(this.#x, this.#y, this.#r, 0, Math.PI * 2, false);
        this.#context.fillStyle = this.#colorFill;
        this.#context.fill();
        this.#context.strokeStyle = this.#colorStroke;
        this.#context.stroke();
        console.log('draw p')
    }
    setXY(x, y){
        this.#x = x;
        this.#y = y;
    }

    setColorFill(color){
        this.#colorFill = color;
    }
}