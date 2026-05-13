// Set default balance
if (!localStorage.getItem("balance")) {
    localStorage.setItem("balance", 4500);
}

// Reusable function
function updateBalanceUI() {
    const balance = localStorage.getItem("balance");
    const balanceEl = document.getElementById("balance");

    if (balanceEl) {
        balanceEl.innerText = balance;
    }
}

// Run on page load
document.addEventListener("DOMContentLoaded", function () {
    updateBalanceUI();
});

// Sync across tabs
window.addEventListener("storage", function () {
    updateBalanceUI();
});

// transaction history 
// create transaction array if not exists
if (!localStorage.getItem("transactions")) {
    localStorage.setItem("transactions", JSON.stringify([]));
}
function addTransaction(type, amount) {
    const transactions = JSON.parse(localStorage.getItem("transactions"));

    const newTransaction = {
        type: type, // "add", "cashout", "transfer", "bill", "bonus"
        amount: amount,
        date: new Date().toLocaleString()
    };

    transactions.push(newTransaction);

    localStorage.setItem("transactions", JSON.stringify(transactions));
}

// function to toggle into pages
function showOnly(id) {
    const addMoney = document.getElementById("addMoney-form");
    const cashOut = document.getElementById("cashout-form");
    const transfer = document.getElementById("transfer-form");
    const billPayment = document.getElementById("payBills-form");
    const bonus = document.getElementById("getBonus-form");
    const transactions = document.getElementById("transaction-list");

    // Hide all sections
    addMoney.style.display = "none";
    cashOut.style.display = "none";
    transfer.style.display = "none";
    billPayment.style.display = "none";
    bonus.style.display = "none";
    transactions.style.display = "none";

    // Show the selected section
    const selectedElement = document.getElementById(id);
    if (selectedElement) {
        selectedElement.style.display = "block";
    }

};