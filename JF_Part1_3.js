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