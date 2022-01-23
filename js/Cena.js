export default class Cena {
    /* É RESPONSAVEL POR DESENHAR ELEMENTOS NA TELA EM UMA ANIMAÇÃO
    */ 
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")
    }
    desenhar() {
        this.fillStyle = "grey";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
} 