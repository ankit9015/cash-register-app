var billAmount = document.querySelector("#bill-input");
var moneyReceived =document.querySelector('#money-received');
var buttonCash = document.querySelector(".cash-button");
var numNote = document.querySelectorAll(".num-note");
var message = document.querySelector(".message");

function getMessage (text) {
    message.style.display = "block";
    message.innerText = text;
};

function checkBill (billValue) {
    if (billValue) {
        return        
    } else {
        getMessage("Please enter valid Bill Amount");
    }
};

function checkMoneyReceived (billValue, moneyReceived) {
    if (moneyReceived && billValue) {
        if (moneyReceived >= billValue) {
            pickCashNote (billValue, moneyReceived);
        } else {
            getMessage("You have not paid the whole bill");
        }
    } else {
        getMessage("Please enter a valid Amount");
    }    
};


function pickCashNote (bill, cash) {
    var moneyGive = cash - bill;
    var currency = [2000, 500, 100, 20, 10, 5, 1];
    for (var i=0; i < numNote.length; i++) {
        if (moneyGive < currency[i]) {
            continue;
        } else {
            var quotient = Math.floor(moneyGive/currency[i]);
            var remainder =  moneyGive%currency[i];
            moneyGive = remainder;
            numNote[i].innerText = quotient;
        }
    }
}

function buttonCashHandler () {
    checkBill(billAmount.value);
    checkMoneyReceived(billAmount.value, moneyReceived.value);    
};







buttonCash.addEventListener("click", buttonCashHandler);

