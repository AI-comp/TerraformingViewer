var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
window.enchant();
var App;
(function (App) {
    var Robot = (function (_super) {
        __extends(Robot, _super);
        function Robot(x, y) {
            var _this = this;
                _super.call(this, 105, 100);
            this.x = x;
            this.y = y;
            this.image = Game.game.assets['img/robot.png'];
            this.on('enterframe', function () {
                return _this.update();
            });
        }
        Robot.prototype.update = function () {
            var mode;
            if(this.x == 0) {
                mode = 0;
            } else if(this.x == 500) {
                mode = 1;
            }
            if(mode == 0) {
                this.x += 100;
                this.y += 100;
            } else {
                this.x -= 100;
                this.y -= 100;
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
            this.preload([
                'img/robot.png'
            ]);
            this.onload = function () {
                var robot = new Robot(0, 0);
                _this.rootScene.addChild(robot);
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
//@ sourceMappingURL=showImage.js.map
