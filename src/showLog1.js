﻿//–¼‘O‹óŠÔ
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
window.onload = function () {
    var el = document.getElementById('content');
    console.log("--- Start showLog1 ---");
    new Practice.ShowLog1([
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
