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

const str = "naman";

const palindromeCheck = (str) => {

    const newStr = str.toLowerCase().replaceAll(" ","")
    // const newStr = str.toLowerCase().replace(/ /g, "");
  
    let resultStr = ""

    const queue = new Queue()

    for (let i = (newStr.length - 1); i >= 0; i--) {
        const elem = newStr[i];
        queue.enQueue(elem);
    }

    while (!queue.IsEmpty()) {
        const deQueueElem = queue.deQueue()
        resultStr += deQueueElem
    }

    return resultStr === newStr

};
console.log(palindromeCheck(str));

