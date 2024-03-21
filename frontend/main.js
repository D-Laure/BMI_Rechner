Array.from(document.getElementsByTagName('input')).forEach(element => {
    element.addEventListener('change', updateUI);
});

let bmiButton; // Declare a global variable for the BMI button

function updateUI() {
    // Logic for updating the UI here
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const bmi = calculateBMI(weight, height);
    console.log("Gewicht: %s, Größe: %s, BMI: %s", weight, height, bmi);

    // Remove any existing BMI button (if it exists)
    if (bmiButton) {
        bmiButton.remove();
    }

    // Create a new button for calculating BMI
    bmiButton = document.createElement('button');
    bmiButton.textContent = 'BMI berechnen';
    bmiButton.addEventListener('click', displayBMI);

    // Append the button to the UI (you can adjust the target element as needed)
    document.body.appendChild(bmiButton);
}

function calculateBMI(weight, height) {
    // Logik zur BMI-Berechnung hier
    const heightInMeters = height / 100; // Umrechnung von Zentimetern in Meter
    const bmi = Math.round(weight / (heightInMeters * heightInMeters));
    return bmi;
}

function displayBMI() {
    // Logik zur Anzeige des BMI-Ergebnisses (z. B. in einem Alert oder einer Div)
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const bmi = calculateBMI(weight, height);
    alert(`Ihr BMI beträgt: ${bmi}`);
}
