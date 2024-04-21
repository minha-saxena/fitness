document.addEventListener('DOMContentLoaded', function() {
    const activityForm = document.getElementById('activityForm');
    const stepsCounter = document.getElementById('stepsCounter');
    const caloriesCounter = document.getElementById('caloriesCounter');
    const distanceCounter = document.getElementById('distanceCounter');
    const errorDisplay = document.getElementById('errorDisplay');

    activityForm.addEventListener('submit', function(event) {
        event.preventDefault();
        errorDisplay.textContent = '';

        const stepsInput = parseInt(document.getElementById('steps').value);
        const caloriesInput = parseInt(document.getElementById('calories').value);
        const distanceInput = parseFloat(document.getElementById('distance').value);

        if (isNaN(stepsInput) || isNaN(caloriesInput) || isNaN(distanceInput)) {
            displayError('Please enter valid numbers for all fields.');
            return;
        }

        // Update counters
        stepsCounter.textContent = stepsInput;
        caloriesCounter.textContent = caloriesInput;
        distanceCounter.textContent = distanceInput.toFixed(2) + ' km';

        activityForm.reset();
    });

    function displayError(message) {
        errorDisplay.textContent = message;
    }
});
