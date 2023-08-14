function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const unitFrom = document.getElementById("unitFrom").value;
    const resultElement = document.getElementById("result");

    if (isNaN(inputTemp)) {
        resultElement.textContent = "Please enter a valid temperature.";
        return;
    }

    let result = 0;

    if (unitFrom === "celsius") {
        result = (inputTemp * 9/5) + 32;
        resultElement.textContent = `${inputTemp}°C is ${result.toFixed(2)}°F`;
    } else if (unitFrom === "fahrenheit") {
        result = (inputTemp - 32) * 5/9;
        resultElement.textContent = `${inputTemp}°F is ${result.toFixed(2)}°C`;
    } 
    
}
