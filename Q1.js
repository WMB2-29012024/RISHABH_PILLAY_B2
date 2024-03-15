
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

const array = [1, 2, 3, 1, 4, 5, 2, 3, 6]
const k = 3

const maxOfSubarrays = (array)=>{

    const queue = new Queue();
    newArray = [];
    let max=-1;    

    for(let i = 0 ; i<array.length ; i++){

        max = Math.max( max , array[i])

        if (i>k-2) {
            queue.enQueue(max)
        }
    }  

    while (!queue.IsEmpty()) {
        deQueueElem = queue.deQueue()
        newArray.push(deQueueElem)
    }

    return newArray
    
    
};
console.log(maxOfSubarrays(array))
