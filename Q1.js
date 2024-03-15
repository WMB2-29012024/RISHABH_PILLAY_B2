class Node {
    constructor(input) {
        this.data = input;
        this.next = null;
    }
}

class Queue {

    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0
    }

    enQueue(input) {
        const node = new Node(input)
        if (this.length === 0) {
            this.rear = node;
            this.front = node;
            this.length++;
            return this.length;
        } else if (this.length > 0) {
            this.rear.next = node;
            this.rear = node;
            this.length++;
            return this.length;
        }
    }

    deQueue() {
        if (this.length === 0) {
            return "Queue in empty"
        } else {
            const popElem = this.front;
            this.front = popElem.next;
            if (this.front === null) {
                this.rear = null;
            };
            this.length--;
            return popElem.data;
        }
    }

    Peek() {
        if (this.length === 0) {
            return this.front.next
        } else {
            return this.front.data
        }
    }

    IsEmpty() {
        return (this.length === 0 ? true : false);
    }


}

class ZigzagIterator{

    constructor(array1 ,array2 ){

        this.queue = new Queue();
        let i = 0;
        while (i<array1.length && i<array2.length) {
            this.queue.enQueue(array1[i]);
            this.queue.enQueue(array2[i]);
            i++ ;           
        };

        while(i<array1.length){
            this.queue.enQueue(array1[i]);
            i++ ;         
        }
        while(i<array2.length){
            this.queue.enQueue(array2[i]);  
            i++ ;           
        }

    };

    next(){
        return this.queue.deQueue()
    };
    hasNext(){
        return !this.queue.IsEmpty()        
    };
} 

const i = new ZigzagIterator([1, 2], [3, 4, 5, 6]);
console.log(i.next())
console.log(i.next())
console.log(i.next())
console.log(i.next())
console.log(i.next())
console.log(i.next())
console.log(i.next())

console.log(i.hasNext())

