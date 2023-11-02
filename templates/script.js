document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const predictButton = document.getElementById("predictButton");
    const result = document.getElementById("result");

    predictButton.addEventListener("click", () => {
        const text = textInput.value;

        if (text.trim() === "") {
            alert("Please enter some text.");
            return;
        }

        fetch("/predict", {
            method: "POST",
            body: new URLSearchParams({ text }),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                result.innerText = `Predicted Class: ${data.class}`;
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
});
// Add this JavaScript code to your "script.js" file

document.getElementById('predictButton').addEventListener('click', function () {
    var textInput = document.getElementById('textInput').value;

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'text=' + textInput,
    })
    .then(response => response.json())
    .then(data => {
        // Update the "result" div with the prediction result
        document.getElementById('result').innerHTML = 'Prediction: ' + data.class;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
