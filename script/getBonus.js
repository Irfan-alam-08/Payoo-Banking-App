document.getElementById('finalgetBonus-btn').addEventListener('click', function () {
    // get the bonus coupon

    const couponnumberInput = document.getElementById('bonusCoupon-number');
    const couponNumber = couponnumberInput.value;
    if (couponNumber.length !== 16) {
        alert('Please enter a valid 16-digit coupon number.');
        return;
    }
    // For demo purposes, let's assume the valid coupon number is "1111111111111111"
    if (couponNumber === "1111111111111111") {
        // ✅ Get current balance from localStorage
        let currentBalance = parseFloat(localStorage.getItem("balance"));
        // ✅ Add bonus amount (e.g., $100) to the current balance
        const bonusAmount = 100;
        currentBalance += bonusAmount;
        // ✅ Update the balance in localStorage
        localStorage.setItem("balance", currentBalance);
        // ✅ Display success message
        alert('Bonus coupon applied successfully!');

        // ✅ Add transaction for bonus
        addTransaction("bonus", bonusAmount);

        // ✅ 8. Update UI everywhere
        updateBalanceUI();
        window.location.href = "success.html";
    } else {
        alert('Invalid coupon number. Please try again.');
    }
    // Clear the input field
    couponnumberInput.value = "";

});