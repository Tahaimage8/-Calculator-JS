//  x = 2;
// y = 1;
// z = x + y;
const a = document.getElementById("billamount").value = 100;
const b = document.getElementById("percentagetip").value;
console.log(a,b)

// document.getElementById("total").innerHTML = z;
function tipCalculator() {
    const a = document.getElementById("billamount").value;
    const b = document.getElementById("percentagetip").value;

    const c = document.getElementById("tipamount").value=(a/100)*b;
    document.getElementById("total").value = (parseFloat(a)+parseFloat(c));

}