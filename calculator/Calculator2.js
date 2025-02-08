// function to add values to display
function appendValue(value) {
    document.getElementById("display").value += value
}

// function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// function to calculate the result
function calculateResult() {
    try{
       document.getElementById("display").value = eval(
        document.getElementById("display").value
       )
    }

    catch(error) {
        document.getElementById(display).value = "Error"
    }
}