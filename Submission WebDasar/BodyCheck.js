document.getElementById('submit').addEventListener('click', function () {
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height)) {
        alert('Please enter valid numbers for weight and height');
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let resultText = `Your BMI is ${bmi}. `;
    if (bmi < 18.5) {
        resultText += "You are underweight.";
    } else if (bmi < 24.9) {
        resultText += "You have a normal weight.";
    } else if (bmi < 29.9) {
        resultText += "You are overweight.";
    } else {
        resultText += "You are obese.";
    }

    document.getElementById('result-text').textContent = resultText;
});
