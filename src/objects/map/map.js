import { Container, Sprite, Texture } from "pixi.js";

export class Map extends Container {
    constructor() {
        super();
        this.createMap();
    }
    createMap() {
        const texture = Texture.from("images/dungeon.png");
        this.dungeon = new Sprite(texture);
        this.addChild(this.dungeon);
    }
}