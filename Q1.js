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
const input = 18
const binaryConversion = (num)=>{

    const myStack = new Stack(num)
    let result = ""
v
    while(num>0){
        const remender = num%2;
        myStack.StackPush(remender);
        num =Math.floor(num/2);
    }
    
    while(!myStack.IsEmpty()){
        const popElem = myStack.StackPop()
        result += popElem
    }
    return result




}; 

console.log(binaryConversion(input))

