// BMI कैलकुलेटर फंक्शन
function calculateBMI() {
    const weight = parseFloat(document.getElementById('bmiWeight').value);
    const heightCm = parseFloat(document.getElementById('bmiHeight').value);
    const resultDiv = document.getElementById('bmiResultText');

    if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
        resultDiv.style.color = "#ff4d4d";
        resultDiv.innerText = "कृपया सही वजन और लंबाई दर्ज करें!";
        return;
    }

    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);
    
    let status = "";
    if (bmi < 18.5) {
        status = "अंडरवेट (Underweight)";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = "नॉर्मल / फिट (Normal Weight) 👍";
    } else if (bmi >= 25 && bmi < 29.9) {
        status = "ओवरवेट (Overweight)";
    } else {
        status = "मोटापा (Obese) ⚠️";
    }

    resultDiv.style.color = "#00ffcc";
    resultDiv.innerText = `आपका BMI: ${bmi} (${status})`;
}

// 🔥 कैलोरी कैलकुलेटर फंक्शन
function calculateCalories() {
    const gender = document.getElementById('calGender').value;
    const age = parseFloat(document.getElementById('calAge').value);
    const weight = parseFloat(document.getElementById('calWeight').value);
    const height = parseFloat(document.getElementById('calHeight').value);
    const activity = parseFloat(document.getElementById('calActivity').value);
    const resultDiv = document.getElementById('calResultText');

    if (!age || !weight || !height || age <= 0 || weight <= 0 || height <= 0) {
        resultDiv.style.color = "#ff4d4d";
        resultDiv.innerText = "कृपया सभी फील्ड्स सही से भरें!";
        return;
    }

    let bmr = 0;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    const tdee = Math.round(bmr * activity);
    const weightLoss = tdee - 500; 
    const weightGain = tdee + 500; 

    resultDiv.style.color = "#00ffcc";
    resultDiv.innerHTML = `मेंटेनेंस: <b>${tdee} kcal</b><br>` +
                          `<span style="font-size:0.75rem; color:#ffeb3b;">लॉस: ${weightLoss} | गेन: ${weightGain} kcal</span>`;
}

// जिम जॉइनिंग फॉर्म सबमिट होने पर मैसेज
function handleBooking(event) {
    event.preventDefault();
    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone').value;
    const plan = document.getElementById('userPlan').value;
    const msgDiv = document.getElementById('bookingMsg');

    if (phone.length < 10) {
        msgDiv.style.color = "#ff4d4d";
        msgDiv.innerText = "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें!";
        return;
    }

    msgDiv.style.color = "#4caf50";
    msgDiv.innerText = `धन्यवाद ${name}! आपका ${plan} पैकेज बुक हो गया है।`;
    event.target.reset();
}