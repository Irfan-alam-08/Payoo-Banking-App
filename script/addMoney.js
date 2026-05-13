document.getElementById('finalAddMoney-btn').addEventListener('click', function (event) {
    event.preventDefault();

    // 1. Bank select
    const bankSelect = document.getElementById('select-bank');
    const selectedBank = bankSelect.value;

    if (!selectedBank) {
        alert("Please select a bank.");
        return;
    }

    // 2. Account number validation
    const accountNumberInput = document.getElementById('account-number');
    const accountNumber = accountNumberInput.value;

    if (accountNumber.length !== 11 || !/^\d+$/.test(accountNumber)) {
        alert("Invalid account number.");
        accountNumberInput.value = "";
        return;
    }

    // 3. Amount
    const amountInput = document.getElementById('addMoney-amount');
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid amount.");
        return;
    }

    // 4. PIN check
    const pinInput = document.getElementById('addMoney-pin');
    const pin = pinInput.value;

    if (pin !== "1234") {
        alert("Invalid PIN.");
        pinInput.value = "";
        return;
    }

    // ✅ 5. Get balance from localStorage (NOT UI)
    let currentBalance = parseFloat(localStorage.getItem("balance"));

    // ✅ 6. Add money
    currentBalance += amount;

    // ✅ 7. Save back to localStorage
    localStorage.setItem("balance", currentBalance);

    // ✅ 4. ADD TRANSACTION HERE
    addTransaction("add", amount);

    // ✅ 8. Update UI everywhere
    updateBalanceUI();
    window.location.href = "success.html";

    // Clear inputs
    pinInput.value = "";
    amountInput.value = "";
    accountNumberInput.value = "";
    bankSelect.value = "";
});