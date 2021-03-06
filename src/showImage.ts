///<reference path='types/enchant.d.ts'/>

interface Window {
  enchant: Function;
}
window.enchant();

module App {
  enum Obj {
    HOLE,
    NONE,
    initial,
  }

  enum Landform {
    HOLE,
    BASE,
    WASTELAND,
    SETTLEMENT,
  }

  interface Tile {
    x: number;
    robots: number;
    y: number;
    obj: Obj;
    materialAmount: number;
    ownerID: number;
    landform: Landform;
  }

  interface Data {
    currentTurn: number;
    maxTurn: number;
    playerID: number;
    tiles: Tile[][];
  }

  export class Background extends enchant.Sprite {
    constructor() {
      super(1024, 495);
      this.x = 0;
      this.y = 0;
      this.image = Game.game.assets['img/map.png'];
    
      //this.on('enterframe', () => this.update());
    }
  }

  export class Robot extends enchant.Sprite {
    pos: number;
    constructor(private list: number[][]) {
      super(105, 100);
      this.pos = 0;
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
      this.preload(['img/map.png']);
      this.preload(['img/robot.png']);

      this.onload = () => {
        var background = new Background();
        var robot = new Robot([[0, 0], [200, 200], [200, 0], [0, 200]]);
        this.rootScene.addChild(background);
        this.rootScene.addChild(robot);
        var game = this;
      }
    }
  }
}

window.onload = () => {
  var game = new App.Game(800, 600);
  game.start();
}