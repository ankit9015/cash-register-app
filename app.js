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
    if (billValue >= 0) {
        return        
    } else {
        getMessage("The Bill Amount can not be negative or empty.");
    }
};

function checkMoneyReceived (billValue, moneyReceived) {
    if (moneyReceived > 0 && billValue > 0) {
        if (moneyReceived > billValue) {
            refreshTable()
            pickCashNote (billValue, moneyReceived);
            getMessage("");
        } else if (moneyReceived === billValue) {
            refreshTable();
            getMessage("No cash to return");
        } else {
            refreshTable();
            getMessage("You are short on cash");
        }
    } else {
        refreshTable();
        getMessage("Please enter a valid Amount");
    }    
};

function refreshTable() {
    for (var i=0; i < numNote.length; i++) {
        numNote[i].innerText = "";
    }
}

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
    checkBill(Number(billAmount.value));
    checkMoneyReceived(Number(billAmount.value), Number(moneyReceived.value));    
};







buttonCash.addEventListener("click", buttonCashHandler);

