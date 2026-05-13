document.getElementById("transfer-btn").addEventListener("click", function () {

    // 1. User account number validation
    const userAccountInput = document.getElementById("transfer-number");
    const userAccount = userAccountInput.value;

    if (userAccount.length !== 11 || !/^\d+$/.test(userAccount)) {
        alert("Invalid user account number. Please enter a valid 11-digit number.");
        userAccountInput.value = "";
        return;
    }

    // 2. Get amount
    const amountInput = document.getElementById("transfer-amount");
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
    const pinInput = document.getElementById("transfer-pin");
    const pin = pinInput.value;

    if (pin === "1234") {

        // 6. Deduct balance & save to localStorage
        currentBalance -= amount;
        localStorage.setItem("balance", currentBalance);
        
        // এখানে transaction history তে transfer add হবে
        addTransaction("transfer", amount);

        // 7. Update UI
        updateBalanceUI();
        // alert("Your Cash Out request has been processed successfully!");
        window.location.href = "success.html";
    } else {
        alert("Invalid PIN.");
    }

    // Clear inputs
    amountInput.value = "";
    pinInput.value = "";
});