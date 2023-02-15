import { Container, Ticker } from "pixi.js";
import { Map } from "../objects/map/map";
import { Door } from "../objects/door/door";
import { Explorer } from "../objects/character/explorer";
import { Treasure } from "../objects/treasure/treasure";
import { BlobController } from "../objects/enemy/blob_controller";
import { GAME_HEIGHT } from "../game_config";
import { HealthBar } from "../objects/healthbar/healthBar";
import { GameLose } from "../UI/gameLose";
import { GameWin } from "../UI/gameWin";
import { CollisionDectect } from "../collision/collisiondetector";
export class GameScene extends Container {
    constructor() {
        super();
        this.gameContainer = new Container;
        this.addChild(this.gameContainer);
        this.collision = new CollisionDectect();
        this.setup();

    }
    setup() {
        this.initMap();
        this.initDoor();
        this.initExplorer();
        this.initTreasure();
        this.initBlob();
        this.initHealthBar();
        this.initScene();
        Ticker.shared.add(this.update.bind(this))

    }
    update(deltaTime) {
        //explorer logic 
        this.explorer.update(deltaTime)
        //blobs logic
        this.blob.update(deltaTime)
        this.blob.blobs.forEach((blob) => {
            if (this.collision.collisondetect(this.explorer, blob)) {
                this.healthBar.width -= 2;
                if (this.healthBar.width <= 0) {
                    this.gameLose.visible = true;
                    this.gameContainer.visible = false;
                    this.removeChild(this.healthBar);
                }
            }
        });
        if (this.collision.collisondetect(this.explorer, this.treasure)) {
            this.treasure.x = this.explorer.x;
            this.treasure.y = this.explorer.y;
        }
    }
    initScene() {
        this.initGameLose();
        this.initGameWin();
    }

    initMap() {
        this.map = new Map();
        this.gameContainer.addChild(this.map);

    }

    initDoor() {
        this.door = new Door();
        this.door.x = 50;
        this.door.y = 0;
        this.gameContainer.addChild(this.door);

    }

    initExplorer() {
        this.explorer = new Explorer()
        this.explorer.x = 50;
        this.explorer.y = GAME_HEIGHT / 2 - this.explorer.height / 2;
        this.explorer.vy = 0;
        this.explorer.vx = 0;
        this.explorer.move();
        this.gameContainer.addChild(this.explorer);
    }

    initTreasure() {
        this.treasure = new Treasure();
        this.treasure.x = 450;
        this.treasure.y = 350;
        this.gameContainer.addChild(this.treasure);
    }

    initBlob() {
        this.blob = new BlobController();
        this.gameContainer.addChild(this.blob);
    }

    initHealthBar() {
        this.healthBar = new HealthBar();
        this.healthBar.x = 280;
        this.addChild(this.healthBar);
    }

    initGameWin() {
        this.gameWin = new GameWin();
        this.gameWin.visible = false;
        this.addChild(this.gameWin);
    }

    initGameLose() {
        this.gameLose = new GameLose();
        this.gameLose.visible = false;
        this.addChild(this.gameLose);
    }
}