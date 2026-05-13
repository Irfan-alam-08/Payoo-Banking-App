function showTransactions() {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    const container = document.getElementById("transaction-list");

    container.innerHTML = "";

    const titles = {
        add: "Bank Deposit",
        cashout: "Withdraw",
        transfer: "Transfer",
        bill: "Bill Payed",
        bonus: "Bonus Added"
    };

    // reverse the transactions to show latest first
    transactions.slice().reverse().forEach((txn, i) => {

        const index = transactions.length - 1 - i;

        const div = document.createElement("div");

        div.className = "flex items-center justify-between bg-gray-100 rounded-xl p-4 shadow-sm";

        div.innerHTML = `
            <div class="flex items-center gap-3">
                
                <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl">
                    ${getIcon(txn.type)}
                </div>

                <div>
                    <h4 class="font-semibold">
                        ${titles[txn.type] || "Transaction"}
                    </h4>
                    <p class="text-sm text-gray-500">${txn.date}</p>
                </div>
            </div>

            <!-- ❌ Delete Button -->
            <div class="text-red-500 text-xl cursor-pointer" onclick="deleteTransaction(${index})">
                ❌
            </div>
        `;

        container.appendChild(div);
    });
}


// ✅ Icon function (extra upgrade 🔥)
function getIcon(type) {
    const icons = {
        add: "💰",
        cashout: "💸",
        transfer: "🔁",
        bill: "📄",
        bonus: "🎁"
    };

    return icons[type] || "💳";
}


document.addEventListener("DOMContentLoaded", showTransactions);

// remove bills
function deleteTransaction(index) {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    // ✅ CONFIRM HERE
    if (confirm("Are you sure you want to delete this transaction?")) {

        transactions.splice(index, 1);

        localStorage.setItem("transactions", JSON.stringify(transactions));

        showTransactions();
    }
}