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

const str = "/a//b////c/d//././/.."

const simplifyPath = (input) => {

    const myStack = new Stack(input.length)

    const splitStr = input.split("/");

    let result = ""

    for (let i = 0; i < splitStr.length; i++) {
        const elem = splitStr[i];
        if ((elem.charCodeAt() >= 65 && elem.charCodeAt() <= 90) || (elem.charCodeAt() >= 97 && elem.charCodeAt() <= 122)) {

            myStack.StackPush(elem)

        } else if (elem === "..") {

            myStack.StackPop()

        }
    };

    while (!myStack.IsEmpty()) {
        const popElem = myStack.StackPop()
        result = "/" + popElem + result;

    }



    return (result.length ? result : "/");

};

simplifyPath(str)