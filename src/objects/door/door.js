import { Container, Sprite, Texture } from "pixi.js";

export class Door extends Container {
    constructor() {
        super();
        this.createDoor();
    }

    createDoor() {
        const texture = Texture.from("images/door.png");
        this.door = new Sprite(texture);
        this.addChild(this.door);
    }
}