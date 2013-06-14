var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//–¼‘O‹óŠÔ
var Practice;
(function (Practice) {
    // export‚µ‚Ä‰‚ß‚Äƒ‚ƒWƒ…[ƒ‹‚ÌŠO‚ÅŽg‚¦‚é
    var ShowLog1 = (function () {
        function ShowLog1(list) {
            var _this = this;
            this.list = list;
            this.index = 0;
            this.timerID = setInterval(function () {
                return _this.show();
            }, 500);
        }
        ShowLog1.prototype.show = function () {
            if(this.list.length > this.index) {
                console.log(this.list[this.index]);
                this.index++;
            }
        };
        return ShowLog1;
    })();
    Practice.ShowLog1 = ShowLog1;    //ClassEnd
    
})(Practice || (Practice = {}));
var ShowLog2 = (function (_super) {
    __extends(ShowLog2, _super);
    function ShowLog2() {
        _super.apply(this, arguments);

    }
    ShowLog2.prototype.show = function () {
        if(this.list.length > this.index) {
            var i = this.index;
            var l = this.list;
            var str = "(" + l[i].join(", ") + ")";
            console.log(str);
            this.index++;
        }
    };
    return ShowLog2;
})(Practice.ShowLog1);
window.onload = function () {
    var el = document.getElementById('content');
    console.log("--- Start showLog1 ---");
    //new Practice.ShowLog1([[1, 2], [3, 0], [4, 5]]);
    new ShowLog2([
        [
            1, 
            2
        ], 
        [
            3, 
            0
        ], 
        [
            4, 
            5
        ]
    ]);
};
//@ sourceMappingURL=showLog1.js.map
