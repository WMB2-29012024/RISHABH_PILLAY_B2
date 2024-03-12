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

const balancedParentheses = (s)=>{
    const stack = new Stack(s.length);

    for (let i = 0; i < s.length; i++) {

        const currentElem = s[i]

        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {

            stack.StackPush(currentElem)

        }else if (s[i] === ")" || s[i] === "]" || s[i] === "}") {

            if ((!stack.IsEmpty)&&((currentElem === ")" && this.popElem === "(") || (this.currentElem === "]" && this.popElem === "[") || (this.currentElem === "}" && this.popElem === "{"))) {
                stack.StackPop()
            } else {
               return false  
            }           
        }
    }
    return stack.IsEmpty()
}





      

        
  




