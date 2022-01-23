import Cena from "./Cena.js"
import Sprite from "./Sprite.js";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const cena1 = new Cena(canvas);
cena1.desenhar();
const en1 = new Sprite({ x: 140, y: 80, w: 30, h: undefined, color: 'red' });
const pc = new Sprite();
pc.desenhar(ctx);
en1.desenhar(ctx); 