import { Container, Texture, Sprite } from "pixi.js";

export class Treasure extends Container {
    constructor() {
        super();
        this.createTreasure();
    }
    createTreasure() {
        const texture = Texture.from("images/treasure.png");
        this.treasure = new Sprite(texture);
        this.addChild(this.treasure);
    }
}