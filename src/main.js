var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
window.enchant();

var App;
(function (App) {
    var Obj;
    (function (Obj) {
        Obj[Obj["HOLE"] = 0] = "HOLE";
        Obj[Obj["NONE"] = 1] = "NONE";
        Obj[Obj["initial"] = 2] = "initial";
    })(Obj || (Obj = {}));

    var Landform;
    (function (Landform) {
        Landform[Landform["HOLE"] = 0] = "HOLE";
        Landform[Landform["BASE"] = 1] = "BASE";
        Landform[Landform["WASTELAND"] = 2] = "WASTELAND";
        Landform[Landform["SETTLEMENT"] = 3] = "SETTLEMENT";
    })(Landform || (Landform = {}));

    var Background = (function (_super) {
        __extends(Background, _super);
        function Background() {
            _super.call(this, 1024, 495);
            this.x = 0;
            this.y = 0;
            this.image = Game.game.assets['img/map.png'];
        }
        return Background;
    })(enchant.Sprite);
    App.Background = Background;

    var Hex = (function (_super) {
        __extends(Hex, _super);
        function Hex(x, y, list) {
            var _this = this;
            _super.call(this, 48, 48);
            this.list = list;
            this.pos = 0;
            this.x = x;
            this.y = y;
            this.image = Game.game.assets['img/hex/hex48all.png'];

            this.on('enterframe', function () {
                return _this.update();
            });
        }
        Hex.prototype.update = function () {
            //if (this.updated) {
            this.owner = this.list[this.pos];
            this.frame = this.owner;
            this.pos++;
            if (this.pos == this.list.length) {
                this.pos = 0;
            }
            this.updated = false;
        };
        return Hex;
    })(enchant.Sprite);
    App.Hex = Hex;

    var Robot = (function (_super) {
        __extends(Robot, _super);
        function Robot(list) {
            var _this = this;
            _super.call(this, 105, 100);
            this.list = list;
            this.pos = 0;
            this.x = list[0][0];
            this.y = list[0][1];
            this.image = Game.game.assets['img/robot.png'];

            this.on('enterframe', function () {
                return _this.update();
            });
        }
        Robot.prototype.update = function () {
            this.x = this.list[this.pos][0];
            this.y = this.list[this.pos][1];
            this.pos++;
            if (this.pos == this.list.length) {
                this.pos = 0;
            }
        };
        return Robot;
    })(enchant.Sprite);
    App.Robot = Robot;

    var Game = (function (_super) {
        __extends(Game, _super);
        function Game(x, y) {
            var _this = this;
            _super.call(this, x, y);
            Game.game = this;
            Game.entities = new Array();
            this.fps = 1;
            this.preload(['img/map.png']);
            this.preload(['img/robot.png']);
            this.preload(['img/hex/hex48all.png']);

            this.onload = function () {
                var background = new Background();
                _this.rootScene.addChild(background);

                var hexSize = 48;
                var i, j;
                var posx = hexSize * 4, posy = 12;
                for (i = 7; i < 14; i++) {
                    posx = 92 - hexSize / 2 * (i - 10);
                    for (j = 0; j < i; j++) {
                        var hex = new Hex(posx, posy, [0, 1, 2, 3]);
                        _this.rootScene.addChild(hex);
                        posx += hexSize;
                    }
                    posy += hexSize * 3 / 4;
                }

                for (i = 12; i > 6; i--) {
                    posx = 92 - hexSize / 2 * (i - 10);
                    for (j = 0; j < i; j++) {
                        var hex = new Hex(posx, posy, [2, 3, 0, 1]);
                        _this.rootScene.addChild(hex);
                        posx += hexSize;
                    }
                    posy += hexSize * 3 / 4;
                }
            };
        }
        return Game;
    })(enchant.Game);
    App.Game = Game;
})(App || (App = {}));

window.onload = function () {
    var game = new App.Game(800, 600);
    game.start();
};
//@ sourceMappingURL=main.js.map
