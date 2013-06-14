///<reference path='types/enchant.d.ts'/>
declare var enchant: enchant;

interface Window {
  enchant: Function;
}
window.enchant();

module App {
  export class Robot extends enchant.Sprite {
    constructor(x: number, y: number) {
      super(105, 100);
      this.x = x;
      this.y = y;
      this.image = Game.game.assets['img/robot.png'];

      this.on('enterframe', () => this.update());
    }

    update(): void {
      var mode;
      if (this.x == 0) {
        mode = 0;
      } else if(this.x == 500) {
        mode = 1;
      }
      if (mode == 0) {
        this.x += 100;
        this.y += 100;
      } else {
        this.x -= 100;
        this.y -= 100;
      }
    }
  }

  export class Game extends enchant.Game {
    public static game: Game;
    public static entities: enchant.Node[];

    constructor(x: number, y: number) {
      super(x, y);
      Game.game = this;
      Game.entities = new Array();
      this.fps = 1;
      this.preload(['img/robot.png']);
    

      this.onload = () => {
        var robot = new Robot(0, 0);
        this.rootScene.addChild(robot);
      }

    }
  }
}

window.onload = () => {
  var game = new App.Game(800, 600);
  game.start();
}