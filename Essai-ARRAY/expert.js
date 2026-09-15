class DynamicArray {
    constructor() {
        this.capacity = 2;
        this.size = 0;
        this.data = new Array(this.capacity) 
    }



    push(val) {
        if(this.size === this.capacity) {
            this._resize(this.capacity * 2)
        }
        this.data[this.size] = val;
        this.size++

    }


    _resize(newCapacity) {
        const newArray = new Array(newCapacity);


        for(let i = 0 ; i < this.size ; i++ ) {
            newArray[i] = this.data[i]
        }

        this.data = newArray;

        this.capacity = newCapacity;

        console.log(`resize -> ${newCapacity}`)
    }
}


