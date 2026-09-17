class Queue {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0
    }


    enqueue(val) {
        this.items[this.tail] = val;
        this.tail++;
        return this
    }

    dequeue() {
if(this.isEmpty()) return null;

const val = this.items[this.head]
delete this.items[this.head]
this.head++;
return val;
    }


    // Allow to show us the first
    peek() {
        return this.items[this.head]
    }



    isEmpty () {
        return this.head === this.tail
    }


    get size() {
        return this.tail - this.head
    }
}



class MovingAverage  {


    constructor(size) {
        this.size = size
        this.queue = new Queue();
        this.sum = 0    }

        next (val) {


            this.queue.enqueue(val)
            this.sum += val


            if(this.queue.size > this.size ) this.sum -= this.queue.dequeue()



                return this.sum / this.queue.size

        }

}


/**
 * 
 * 
 *const m = new MovingAverage(3)

console.log(m.next(1)) //1
console.log(m.next(10)) //5.5
console.log(m.next(3)) // 4.67
console.log(m.next(5)) // 6

 */


class RecentCounter {


    constructor(){
        this.queue = new Queue()
    }


    ping(t) {
        this.queue.enqueue(t)

        while(this.queue.peek() < t - 3000 ) {
            this.queue.dequeue()

        }


        return this.queue.size
    }
}