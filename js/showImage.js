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

            this.onload = function () {
                var background = new Background();
                var robot = new Robot([[0, 0], [200, 200], [200, 0], [0, 200]]);
                _this.rootScene.addChild(background);
                _this.rootScene.addChild(robot);
                var game = _this;
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
