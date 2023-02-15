import { Application, Container } from "pixi.js";
import { GameScene } from "./scenes/gameScene";
import { GAME_WIDTH, GAME_HEIGHT } from "./game_config";
export default class Game {
    constructor() {
        this.app = new Application({
            width: GAME_WIDTH,
            height: GAME_HEIGHT,
            backgroundColor: 0x1099bb,
            resolution: window.devicePixelRatio || 1,
        });
        document.body.appendChild(this.app.view);
        this.gameContainer = new Container();
        this.app.stage.addChild(this.gameContainer);
        this.initGameScene();
    }
    initGameScene() {
        this.GameScene = new GameScene();
        this.gameContainer.addChild(this.GameScene);
    }

}
