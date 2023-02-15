import { Container, Text } from "pixi.js";

export class GameLose extends Container {
    constructor() {
        super();
        this.createText();
    }
    createText() {
        let text = new Text("GAME OVER");
        text.anchor.set(0.5);
        text.x = 512 / 2;
        text.y = 512 / 2;
        this.addChild(text);
    }
}