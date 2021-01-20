class NewArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }
    get(index){
        return this.data[index]
    }
    push(item){
        this.data[this.length] = item
        this.length ++;
        return this;
    }
    pop(){
        const lastIndex = this.length - 1;
        delete this.data[lastIndex];
        this.length --;
        return this;
    }
    shift(){
        delete this.data[0];
        this.shiftItems(0);
        delete this.data[this.length - 1]
        this.length --;
        return this;
    }
    delet(index){
        delete this.data[index];
        this.shiftItems(index);
        delete this.data[this.length - 1];
        this.length --;
        return this;
    }
    shiftItems(index){
        for (var i = index; i < this.length - 1; i ++){
            this.data[i] = this.data[i +1];
        }
    }
}


