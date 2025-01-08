console.log("Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110");
var dolphins = [96, 108, 89];
var koalas = [88, 91, 110];
var sumDol = 0;
var sumKoa = 0;

for(var i = 0; i < 3; i++){
    sumDol += dolphins[i];
}

for(var i = 0; i < 3; i++){
    sumKoa += koalas[i];
}

var avgDol = sumDol/3;
var avgKoa = sumKoa/3;

console.log(avgDol);
console.log(avgKoa);

if(avgDol > avgKoa && avgDol >= 100){
    console.log("Dolphin wins");
}
else if(avgDol < avgKoa && avgKoa >= 100){
    console.log("Koala win");
}
else if(avgDol > avgKoa && avgDol < 100){
    console.log("No one wine");
}
else if(avgDol < avgKoa && avgKoa < 100){
    console.log("No one wine");
}
else if(avgDol == avgKoa && avgDol < 100){
    console.log("No one wine");
}
else{
    console.log("draw");
}
console.log("Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123");
var dolphins = [97, 112, 101];
var koalas = [109, 95, 123];
var sumDol = 0;
var sumKoa = 0;

for(var i = 0; i < 3; i++){
    sumDol += dolphins[i];
}

for(var i = 0; i < 3; i++){
    sumKoa += koalas[i];
}

var avgDol = sumDol/3;
var avgKoa = sumKoa/3;

console.log(avgDol);
console.log(avgKoa);

if(avgDol > avgKoa && avgDol >= 100){
    console.log("Dolphin wins");
}
else if(avgDol < avgKoa && avgKoa >= 100){
    console.log("Koala win");
}
else if(avgDol > avgKoa && avgDol < 100){
    console.log("No one wine");
}
else if(avgDol < avgKoa && avgKoa < 100){
    console.log("No one wine");
}
else if(avgDol == avgKoa && avgDol < 100){
    console.log("No one wine");
}
else{
    console.log("draw");
}

console.log("Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106");
var dolphins = [97, 112, 101];
var koalas = [109, 95, 106];
var sumDol = 0;
var sumKoa = 0;

for(var i = 0; i < 3; i++){
    sumDol += dolphins[i];
}

for(var i = 0; i < 3; i++){
    sumKoa += koalas[i];
}

var avgDol = sumDol/3;
var avgKoa = sumKoa/3;

console.log(avgDol);
console.log(avgKoa);

if(avgDol > avgKoa && avgDol >= 100){
    console.log("Dolphin wins");
}
else if(avgDol < avgKoa && avgKoa >= 100){
    console.log("Koala win");
}
else if(avgDol > avgKoa && avgDol < 100){
    console.log("No one wine");
}
else if(avgDol < avgKoa && avgKoa < 100){
    console.log("No one wine");
}
else if(avgDol == avgKoa && avgDol < 100){
    console.log("No one wine");
}
else{
    console.log("draw");
}