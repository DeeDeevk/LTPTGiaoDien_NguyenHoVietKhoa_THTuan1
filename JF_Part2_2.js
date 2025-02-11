function calcTip(bill){
    var tip; 
    if(bill >= 50 && bill <= 300){
        tip = bill * 0.15;
    }
    else{
        tip = bill * 0.2;
    }
    return tip;
}

var bills = [125, 555, 44];
var tips = [];
var totals = [];
for(var i = 0; i < bills.length; i++){
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
}



console.log("Tips: " + tips);
console.log("Totals: " + totals);
