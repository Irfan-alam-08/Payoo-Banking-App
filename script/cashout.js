document.getElementById("withdraw-btn").addEventListener("click", function () {

    // 1. Agent number validation
    const agentNumberInput = document.getElementById("cashout-number");
    const agentNumber = agentNumberInput.value;

    if (agentNumber.length !== 11 || !/^\d+$/.test(agentNumber)) {
        alert("Invalid agent number. Please enter a valid 11-digit number.");
        agentNumberInput.value = "";
        return;
    }

    // 2. Get amount
    const amountInput = document.getElementById("cashout-amount");
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid amount.");
        return;
    }

    // 3. Get balance
    let currentBalance = parseFloat(localStorage.getItem("balance"));

    // 4. Check balance
    if (amount > currentBalance) {
        alert("Insufficient balance.");
        return;
    }

    // 5. Check PIN
    const pinInput = document.getElementById("cashout-pin");
    const pin = pinInput.value;

    if (pin === "1234") {

        // 6. Deduct balance & save to localStorage
        currentBalance -= amount;
        localStorage.setItem("balance", currentBalance);

        // এখানে transaction history তে cashout add হবে
        addTransaction("cashout", amount);   

        // 7. Update UI
        updateBalanceUI();
        window.location.href = "success.html";
    } else {
        alert("Invalid PIN.");
    }

    // Clear inputs
    amountInput.value = "";
    pinInput.value = "";
});