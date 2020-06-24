//script.js

function calculateTip() {
    var billamount = document.getElementById("bill-amount").value;
    var servicequality = document.getElementById("service-quality").value;
    var numpeople = document.getElementById("total-people").value;
    
    if(billamount === "" || servicequality == 0) {
        window.alert("Please add some values to make this baby running up!");
        return; //this would exit the function
    }
    
    if(numpeople === "" || numpeople <=1) {
        numpeople = 1;
        document.getElementById("each").style.display = "none";
    }else {
        document.getElementById("each").style.display = "block";
    }
    var tipamount = (billamount * servicequality) /numpeople;
    tipamount = tipamount.toFixed(2);
    
    document.getElementById("tip").innerHTML = tipamount;
    
    document.getElementById("total-tip").style.display = "block";
}

document.getElementById("total-tip").style.display = "none";

document.getElementById("btn-calculate").onclick = function() {
    //code which has to be performed when button is clicked!
    calculateTip();
}