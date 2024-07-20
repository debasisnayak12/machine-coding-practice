// Get references to relevant elements
const view = document.getElementById("view");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const calcButton = document.querySelector(".calc");

// Initialize the calculator state
let currentInput = "";

// Event listener for digit buttons
document.querySelectorAll(".num").forEach((button) => {
    button.addEventListener("click", ()=>{
        currentInput += button.textContent;
        view.value = currentInput;
    })
})

// Event listener for operator buttons
document.querySelectorAll(".opr").forEach((button)=>{
    button.addEventListener("click", ()=>{
        currentInput += button.textContent;
        view.value = currentInput;
    })
})

// Event listener for clear button
clearButton.addEventListener("click",()=>{
    currentInput = "";
    view.value = "";
})

//Event listener for delete button
deleteButton.addEventListener("click",()=>{
    currentInput = currentInput.slice(0,-1);
    view.value = currentInput;
})

// Event listener for equals button
calcButton.addEventListener("click",()=>{
    try {
        let result = eval(currentInput);
        view.value = result;
        currentInput = result.toString();
    } catch (error) {
        view.value = "Error";
    }
})


