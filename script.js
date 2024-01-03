function calculateVerticalJump() {
    var standReach = parseFloat(document.getElementById('standReach').value);
    var maxJump = parseFloat(document.getElementById('maxJump').value);

    if (isNaN(standReach) || isNaN(maxJump)) {
        alert("Please enter valid numbers for stand reach and max jump.");
        return;
    }

    // Convert centimeters to inches (1 cm = 0.393701 inches)
    standReach = standReach * 0.393701;
    maxJump = maxJump * 0.393701;

    var verticalJump = maxJump - standReach;
    displayResult(verticalJump);
}

function displayResult(verticalJump) {
    var resultElement = document.getElementById('result');
    resultElement.textContent = "Your vertical jump is: " + verticalJump.toFixed(2) + " inches.";
}
