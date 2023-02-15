import { Container, Sprite, Texture } from "pixi.js";

export class HealthBar extends Container {
    constructor() {
        super();
        this.createHealthBar();
    }

    createHealthBar() {
        const texture = Texture.from("images/healthBar.png");
        this.healthbar = new Sprite(texture);
        this.healthbar.width = 200;
        this.addChild(this.healthbar);
    }
}