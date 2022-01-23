export default class Cena {
    /* É RESPONSAVEL POR DESENHAR ELEMENTOS NA TELA EM UMA ANIMAÇÃO
    */ 
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.sprites = [];
        this.t0 = 0;
        this.dt = 0;
    }
    desenhar() {
        this.ctx.fillStyle = "grey";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        for (let s = 0; s < this.sprites.length; s++) {
            const sprite = this.sprites[s];
            sprite.desenhar(this.ctx);
        }
    }

    adicionar(sprite) {
        this.sprites.push(sprite);
    }
    passo(dt)
    {
for (const sprite of this.sprites) {
    sprite.passo(dt);
}
} 
}