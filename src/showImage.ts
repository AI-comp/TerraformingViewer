///<reference path='types/enchant.d.ts'/>
declare var enchant: enchant;

interface Window {
  enchant: Function;
}
window.enchant();

module App {
  export class Robot extends enchant.Sprite {
    list: number[][];
    pos: number;
    constructor(list: number[][]) {
      super(105, 100);
      this.pos = 0;
      this.list = list;
      this.x = list[0][0];
      this.y = list[0][1];
      this.image = Game.game.assets['img/robot.png'];

      this.on('enterframe', () => this.update());
    }

    update(): void {
      this.x = this.list[this.pos][0];
      this.y = this.list[this.pos][1];
      this.pos++;
      if (this.pos == this.list.length) {
        this.pos = 0;
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
        var robot = new Robot([[0, 0], [200, 200], [200, 0], [0, 200]]);
        this.rootScene.addChild(robot);
      }

    }
  }
}

window.onload = () => {
  var game = new App.Game(800, 600);
  game.start();
}