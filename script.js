console.log("Welcome to Calculator");

class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement;
        this.currentOperandTextElement=currentOperandTextElement;
        this.clear();
    }
    clear(){
        this.previousOperand='';
        this.currentOperand='';
        // this.operation=undefined;
    }
    delete(){
        this.currentOperand=this.currentOperand.toString().slice(0,-1)
    }
    appendNumber(number){
        this.currentOperand=this.currentOperand.toString()+ number.toString();
    }
    chooseOperation(operation){
        this.currentOperand=this.currentOperand.toString()+ operation.toString();
    }
    compute(){
        this.previousOperandTextElement.innerText=eval(this.currentOperandTextElement.innerText);
    }
    updateDisplay(){
        this.currentOperandTextElement.innerText=this.currentOperand;
        this.previousOperandTextElement.innerText=this.previousOperand;
    }
}



const numberButtons=document.querySelectorAll("[data-number]");
const operationButtons=document.querySelectorAll("[data-operation]");
const equalsButton=document.querySelector("[data-equals]");
const allClearButton=document.querySelector("[data-all-clear]");
const deleteButton=document.querySelector("[data-delete]");
const previousOperandTextElement=document.querySelector("[data-previous-operand");
const currentOperandTextElement=document.querySelector("[data-current-operand");

const calculator=new Calculator(previousOperandTextElement,currentOperandTextElement);
//appending numbers
numberButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay()

    })
})
//putting the equal sign
equalsButton.addEventListener("click",()=>{
    calculator.compute()
})
//appending operations
operationButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})
//creating all clear button
allClearButton.addEventListener("click",()=>{
    calculator.clear()
    calculator.updateDisplay()
})
//delete button
deleteButton.addEventListener("click",()=>{
    calculator.delete()
    calculator.updateDisplay()
})