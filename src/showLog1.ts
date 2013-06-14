

//名前空間
module Practice {
     // exportして初めてモジュールの外で使える
    export class ShowLog1 {
        private list: any[];
        private index: number;
        private timerID: number;
        constructor(list: any[]) {
            this.list = list;
            this.index = 0;
            this.timerID = setInterval(
                ()=>this.show(), 500);
        }

        show(): void {
            if (this.list.length > this.index) {
                console.log(this.list[this.index]);
                this.index++;
            }
        }


    }//ClassEnd
}


window.onload = () => {
    var el = document.getElementById('content');
    console.log("--- Start showLog1 ---");
    new Practice.ShowLog1([[1, 2], [3, 0], [4, 5]]);
};