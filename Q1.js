class Stack {

    constructor(size) {
        this.stack = [];
        this.maxsize = size;
        this.currentSize = 0;
    }

    StackPush(elem) {
        if (this.currentSize >= this.maxsize) {
            return "Stack is full";
        }else{
            this.stack.push(elem);
            this.currentSize += 1;
            return this.currentSize

        }
    }
    StackPop() {
        if (this.currentSize <=0) {
            return "Stack is empty";
        }else{
            this.popElem = this.stack.pop();
            this.currentSize -= 1;
            return this.popElem
        }
    }
    IsEmpty(){
        if(this.currentSize <= 0){
            return true
        }else{
            return false
        }
    }
    OnTop(){
        if(this.currentSize <= 0){
            return "Stack is empty";            
        }else{
            this.TopElem = this.stack.pop();
            this.stack.push(this.TopElem);
            return this.TopElem
        }
    }

}
const str = "Hello, World!" ;

const reverseString = (str)=>{

    const stack = new Stack(str.length);
    let revStr = "";

    for(let i = 0 ; i<str.length ; i++){
        const currentElem = str[i];
        stack.StackPush(currentElem)

    }
    while(!stack.IsEmpty()){

        const popElem = stack.StackPop()
        revStr += popElem

    }
    return revStr


}
