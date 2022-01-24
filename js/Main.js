import Cena from "./Cena.js";
import Sprite from "./Sprite.js";
import AssetManager from "./AssestManager.js";
import Mapa from "./Mapa.js";
import modeloMapa1 from "../maps/mapa1.js";
import Mixer from "./Mixer.js";

const mixer = new Mixer(10);
const assets = new AssetManager(mixer);

assets.carregaImagem("garota", "assets/garota.png");
assets.carregaImagem("esqueleto", "assets/skelly.png");
assets.carregaImagem("orc", "assets/orc.png");
assets.carregaAudio("moeda", "assets/coin.wav");
assets.carregaAudio("boom", "assets/boom.wav");

const canvas = document.querySelector("canvas");
const cena1 = new Cena(canvas, assets);
canvas.width = 19 * 37;
canvas.height = 15 * 37;
const mapa1 = new Mapa(15, 19, 37);
mapa1.carregaMapa(modeloMapa1);
cena1.configuraMapa(mapa1);

const player = new Sprite({ x: 50, vx: 10 });


cena1.adicionar(player);
cena1.adicionaInimigo(160,200);
cena1.adicionaInimigo(200,160);
cena1.adicionaInimigo(80,100);
cena1.adicionaInimigo(160,400);
    


cena1.iniciar();
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "s":
      cena1.iniciar();
      break;
    case "S":
      cena1.parar();
      break;
    case "b":
      assets.play("boom");
      break;
    case "c":
      assets.play("moeda");
      break;
  }
});
