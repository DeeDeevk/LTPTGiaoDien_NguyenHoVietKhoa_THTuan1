var massMark = 78;
var heightMark = 1.69;
var massJoin = 92;
var heightJoin = 1.95;
var markHigherBMI = true;

bmiMark = massMark/(heightMark * heightMark);
bmiJoin = massJoin/(heightJoin * heightJoin);


if( bmiJoin < bmiMark){
    console.log("Mark's BMI ("+ bmiMark.toFixed(1)+ ") is higher than John's ("+ bmiJoin.toFixed(1) +")!")
}
else{
    console.log("Mark's BMI ("+ bmiMark.toFixed(1)+ ") is not higher than John's ("+ bmiJoin.toFixed(1) +")!")
}


var massMark = 95;
var heightMark = 1.88;
var massJoin = 85;
var heightJoin = 1.76;
var markHigherBMI = true;

bmiMark = massMark/(heightMark * heightMark);
bmiJoin = massJoin/(heightJoin * heightJoin);

if( bmiJoin < bmiMark){
    console.log("Mark's BMI ("+ bmiMark.toFixed(1)+ ") is higher than John's ("+ bmiJoin.toFixed(1) +")!")
}
else{
    console.log("Mark's BMI ("+ bmiMark.toFixed(1)+ ") is not higher than John's ("+ bmiJoin.toFixed(1) +")!")
}
