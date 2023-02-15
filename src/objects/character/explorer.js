import { Container, Sprite, Texture } from "pixi.js";
import { contain } from "../../contain";
import { keyboard } from "../../inputs/keyboard";

export class Explorer extends Container {
    constructor() {
        super();
        this.createExplorer();
        // this.vx = 0;
        // this.vy = 0;
    }
    createExplorer() {
        const texture = Texture.from("images/explorer.png")
        this.explorer = new Sprite(texture);
        this.addChild(this.explorer)
    }
    move() {
        const left = keyboard("ArrowLeft"),
            up = keyboard("ArrowUp"),
            right = keyboard("ArrowRight"),
            down = keyboard("ArrowDown");

        //left
        left.press = () => {
            this.vx = -3;
            this.vy = 0;
        }
        left.release = () => {
            if (!right.isDown && this.vy === 0) {
                this.vx = 0;
            }
        };

        //Right
        right.press = () => {
            this.vx = 3;
            this.vy = 0;
        }
        right.release = () => {
            if (!left.isDown && this.vy === 0) {
                this.vx = 0;
            }
        };

        //Up
        up.press = () => {
            this.vy = -3;
            this.vx = 0;
        };
        up.release = () => {
            if (!down.isDown && this.vx === 0) {
                this.vy = 0;
            }
        };

        //Down
        down.press = () => {
            this.vy = 3;
            this.vx = 0;
        };
        down.release = () => {
            if (!up.isDown && this.vx === 0) {
                this.vy = 0;
            }
        };
    }
    update(deltaTime) {
        this.x += this.vx;
        this.y += this.vy;

        const exploreHitsWall = contain(this.explorer, { x: -20, y: -250, width: 440, height: 230 })
        console.log(exploreHitsWall);

        //If the blob hits the top or bottom of the stage, reverse
        //its direction
        if (exploreHitsWall === "top" || exploreHitsWall === "bottom") {
            this.vy = 0;
        } else if (exploreHitsWall === "left" || exploreHitsWall === "right") {
            this.vx = 0;
        }
    }
}
