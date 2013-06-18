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
            if(this.pos == this.list.length) {
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
            this.preload([
                'img/robot.png'
            ]);
            this.onload = function () {
                var robot = new Robot([
                    [
                        0, 
                        0
                    ], 
                    [
                        200, 
                        200
                    ], 
                    [
                        200, 
                        0
                    ], 
                    [
                        0, 
                        200
                    ]
                ]);
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
