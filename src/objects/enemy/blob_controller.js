import { Container } from "pixi.js";
import { contain } from "../../contain";
import { GAME_HEIGHT } from "../../game_config";
import { Blob } from "./Blob";

export class BlobController extends Container {
    constructor() {
        super();
        this.createManyBlobs();
    }

    createManyBlobs() {
        //create Blob
        let numberOfBlobs = 6,
            spacing = 48,
            xOffset = 150,
            speed = 1,
            direction = 1;
        this.blobs = [];
        this.blob = new Blob();
        this.addChild(this.blob);
        for (let i = 0; i < numberOfBlobs; i++) {
            let x = spacing * i + xOffset;
            let y = Math.floor(Math.random() * (GAME_HEIGHT - 100));
            let Vy = speed * direction;
            let Vx = 0;
            direction *= -1;
            let blob = this.blob.createBlob(x, y, Vx, Vy)
            this.blobs.push(blob)
        }
    }
    moveBlobs() {
        this.blobs.forEach((blob) => {
            // Move the blobs
            blob.y += blob.vy;

            //Check the blob's screen boundaries
            const blobHitsWall = contain(blob, { x: 28, y: 10, width: 488, height: 480 })

            //If the blob hits the top or bottom of the stage, reverse
            //its direction
            if (blobHitsWall === "top" || blobHitsWall === "bottom") {
                blob.vy *= -1;
            }
        })
    }

    update(deltaTime) {
        this.moveBlobs();
    }

}