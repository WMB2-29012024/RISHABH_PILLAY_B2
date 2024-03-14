class Stack {

    constructor(size) {
        this.stack = [];
        this.maxsize = size;
        this.currentSize = 0;
    }

    StackPush(elem) {
        if (this.currentSize >= this.maxsize) {
            return "Stack is full";
        } else {
            this.stack.push(elem);
            this.currentSize += 1;
            return this.currentSize

        }
    }
    StackPop() {
        if (this.currentSize <= 0) {
            return "Stack is empty";
        } else {
            this.popElem = this.stack.pop();
            this.currentSize -= 1;
            return this.popElem
        }
    }
    IsEmpty() {
        if (this.currentSize <= 0) {
            return true
        } else {
            return false
        }
    }
    OnTop() {
        if (this.currentSize <= 0) {
            return "Stack is empty";
        } else {
            this.TopElem = this.stack.pop();
            this.stack.push(this.TopElem);
            return this.TopElem
        }
    }

}
const arr = [4, 5, 2, 25];

const nextGreaterElement = (input) => {

    const myStack = new Stack(input);

    let newArr = [];

    for (let i = (input.length - 1); i >= 0; i--) {

        const elem = input[i];

        while (!myStack.IsEmpty() && elem > myStack.OnTop()) {
            myStack.StackPop()


        }
        
        if (myStack.IsEmpty()) {
            newArr[i] = -1
        } else {
            newArr[i] = myStack.OnTop();
        }
        myStack.StackPush(elem);








    }
    return newArr
};
console.log(nextGreaterElement(arr))
