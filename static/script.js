async function calculateResult() {

    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operation = document.getElementById("operation").value;

    const resultBox = document.getElementById("result");

    if (num1 === "" || num2 === "") {
        resultBox.textContent = "Please enter both numbers.";
        return;
    }

    try {

        const response = await fetch("/calculate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                num1: num1,
                num2: num2,
                operation: operation
            })
        });

        const data = await response.json();

        if (data.success) {
            resultBox.textContent = "Result: " + data.result;
        } else {
            resultBox.textContent = "Error: " + data.error;
        }

    } catch (error) {

        resultBox.textContent = "Unable to connect to server.";

    }
}


function clearCalculator() {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operation").value = "add";

    document.getElementById("result").textContent =
        "Result will appear here";
}