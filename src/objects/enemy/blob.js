import { Container, Texture, Sprite } from "pixi.js";

export class Blob extends Container {
    constructor() {
        super();

        this.createBlob();

    }
    createBlob(blobX, blobY, vx, vy) {
        const texture = Texture.from("images/blob.png");
        this.blob = new Sprite(texture);
        this.blob.x = blobX;
        this.blob.y = blobY;
        this.blob.vx = vx;
        this.blob.vy = vy
        this.addChild(this.blob);

        return this.blob;
    }
}