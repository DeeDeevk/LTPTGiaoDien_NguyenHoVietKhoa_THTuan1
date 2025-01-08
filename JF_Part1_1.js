var massMark = 78;
var heightMark = 1.69;
var massJoin = 92;
var heightJoin = 1.95;
var markHigherBMI = true;

bmiMark = massMark/(heightMark * heightMark);
bmiJoin = massJoin/(heightJoin * heightJoin);

console.log("When Marks weights 78 kg and is 1.69 m tall, Mark's BMI: ", bmiMark);
console.log("When John weights 92 kg and is 1.95m tall, Join's BMI",bmiJoin);

if( bmiJoin < bmiMark){
    markHigherBMI = true;
}
else{
    markHigherBMI = false;
}

console.log("Mark's BMI is higher than Join? ",markHigherBMI);

var massMark = 95;
var heightMark = 1.88;
var massJoin = 85;
var heightJoin = 1.76;
var markHigherBMI = true;

bmiMark = massMark/(heightMark * heightMark);
bmiJoin = massJoin/(heightJoin * heightJoin);

console.log("When Marks weights 95 kg and is 1.88 m tall, Mark's BMI: ", bmiMark);
console.log("When John weights 85 kg and is 1.76 m tall, Join's BMI",bmiJoin);

if( bmiJoin < bmiMark){
    markHigherBMI = true;
}
else{
    markHigherBMI = false;
}

console.log("Mark's BMI is higher than Join? ",markHigherBMI);
