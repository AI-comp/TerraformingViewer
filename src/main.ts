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
    }
  }

  export class Hex extends enchant.Sprite {
    pos: number;
    owner: number;
    updated: boolean;
    constructor(x: number, y: number, private list: number[]) {
      super(48, 48);
      this.pos = 0;
      this.x = x;
      this.y = y;
      this.image = Game.game.assets['img/hex/hex48all.png'];

      this.on('enterframe', () => this.update());
    }

    update(): void {
      //if (this.updated) {
        this.owner = this.list[this.pos];
        this.frame = this.owner;
        this.pos++;
        if (this.pos == this.list.length) {
          this.pos = 0;
        }
        this.updated = false;
      //}
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
      this.preload(['img/hex/hex48all.png']);      

      this.onload = () => {
        var background = new Background();
        this.rootScene.addChild(background);

        var hexSize = 48;
        var i, j;
        var posx = hexSize * 4, posy = 12;
        for (i = 7; i < 14; i++) {
          posx = 92 - hexSize / 2 * (i - 10);
          for (j = 0; j < i; j++) {
            var hex = new Hex(posx, posy, [0, 1, 2, 3]);
            this.rootScene.addChild(hex);
            posx += hexSize;
          }
          posy += hexSize * 3 / 4;
        }

        for (i = 12; i > 6; i--) {
          posx = 92 - hexSize / 2 * (i - 10);
          for (j = 0; j < i; j++) {
            var hex = new Hex(posx, posy, [2, 3, 0, 1]);
            this.rootScene.addChild(hex);
            posx += hexSize;
          }
          posy += hexSize * 3 / 4;
        }
      }
    }
  }
}

window.onload = () => {
  var game = new App.Game(800, 600);
  game.start();
}