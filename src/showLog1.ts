

//���O���
module Practice {
     // export���ď��߂ă��W���[���̊O�Ŏg����
    export class ShowLog1 {
        list: any[];
        index: number;
        timerID: number;
        constructor(list: any[]) {
            this.list = list;
            this.index = 0;
            this.timerID = setInterval(
                this.show, 500);
        }

        show():void {
            if (this.list.length > this.index) {
                console.log(this.list[1]);
                this.index++;
            }
        }


    }
}


window.onload = () => {
    var el = document.getElementById('content');
    console.log("--- Start showLog1 ---");
    new Practice.ShowLog1([1,2,3]);
};