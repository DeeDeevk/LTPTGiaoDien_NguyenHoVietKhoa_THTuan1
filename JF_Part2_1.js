const calcAverage = (scores) => scores.reduce((a, b) => a + b, 0) / scores.length;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log("No team wins");
    }
}

console.log("Test case 1: \n");
var dolphins = [44, 23, 71];
var koalas = [65, 54, 49];

let avgDolphins1 = calcAverage(dolphins);
let avgKoalas1 = calcAverage(koalas);
checkWinner(avgDolphins1, avgKoalas1);

console.log("Test case 2: \n");
var dolphins = [85, 54, 41];
var koalas = [23, 34, 27];

let avgDolphins2 = calcAverage(dolphins);
let avgKoalas2 = calcAverage(koalas);
checkWinner(avgDolphins2, avgKoalas2);



