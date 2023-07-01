const btnEl = document.querySelector("#btn");
const bmiInputEl = document.querySelector("#bmi-result");
const weightConditionEl = document.querySelector("#weight-condition");


function calculateBMI(){
    // console.log("clicked")
    const inputHeightValue = document.querySelector("#inputHeight").value / 100;
    const inputWeightValue = document.querySelector("#inputWeight").value;
    // console.log(inputHeightValue,inputWeightValue);
    const bmiValue = inputWeightValue / (inputHeightValue * inputHeightValue);
    bmiInputEl.value = bmiValue;

    if(bmiValue < 18.5){
        weightConditionEl.innerText = ' Under weight';
    }else if(bmiValue >= 18.5 && bmiValue <=24.9){
        weightConditionEl.innerText = ' Normal weight';
    }else if(bmiValue >=25 && bmiValue <= 29.9){
        weightConditionEl.innerText = ' Overweight'
    }else if(bmiValue >= 30){
        weightConditionEl.innerText = ' Obesity'
    }
}

btnEl.addEventListener("click",calculateBMI)