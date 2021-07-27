const height = document.querySelector("#height");
    const weight = document.querySelector("#weight");
    document.querySelector(".calculate").addEventListener("click", calculateBmi);

    function calculateBmi() {
        const bmi = (weight.value * 10000) / (height.value * height.value);
        document.querySelector("#answer").innerText = bmi.toFixed(1);
        const gender = document.querySelector(".gender input:checked");
        gender.value === "male" ?
            document.querySelector("#bmi-value").innerText = showBmiMsgForMale(bmi) :
            document.querySelector("#bmi-value").innerText = showBmiMsgForFemale(bmi);
        document.querySelector(".result p:first-child").classList.remove("hide");
    }

    function showBmiMsgForMale(bmi) {
        if (bmi < 16) {
            return "You are Severely Thin";
        } else if (16 <= bmi && bmi < 17) {
            return "You are Moderately Thin";
        } else if (17 <= bmi && bmi < 18.5) {
            return "You are Mildly Thin";
        } else if (18.5 <= bmi && bmi < 25) {
            return "You are Normal";
        } else if (25 <= bmi && bmi < 30) {
            return "You are Overweight";
        } else if (30 <= bmi && bmi < 35) {
            return "You belong to Obese Class I";
        } else if (35 <= bmi && bmi < 40) {
            return "You belong to Obese Class II";
        } else {
            return "You belong to Obese Class III";
        }
    }

    function showBmiMsgForFemale(bmi) {
        if (bmi < 16) {
            return "You are Severely Thin for Female";
        } else if (16 <= bmi && bmi < 17) {
            return "You are Moderately Thin for Female";
        } else if (17 <= bmi && bmi < 18.5) {
            return "You are Mildly Thin for Female";
        } else if (18.5 <= bmi && bmi < 25) {
            return "You are Normal for Female";
        } else if (25 <= bmi && bmi < 30) {
            return "You are Overweight for Female";
        } else if (30 <= bmi && bmi < 35) {
            return "You belong to Obese Class I for Female";
        } else if (35 <= bmi && bmi < 40) {
            return "You belong to Obese Class II for Female";
        } else {
            return "You belong to Obese Class III for Female";
        }
    }