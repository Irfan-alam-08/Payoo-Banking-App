
document.getElementById("login-btn").addEventListener("click", function () {
    // 1. get the number and pin values
    // 2. validate the number and pin values
    // 3-1. if true => redirect to dashboard.html
    // 3-2. if false => show error message
    const numberInput = document.querySelector('input[placeholder="Enter your number"]');
    const number = numberInput.value;
    const pinInput = document.querySelector('input[placeholder="Enter 4 digit PIN"]');
    const pin = pinInput.value;
    if (number === "01629863179" && pin === "1234") {
        window.location.href = "home.html";
    }
    else if (number === "" && pin === "") {
        alert("Please enter your number and PIN.");
    } else {
        alert("Invalid number or PIN. Please try again.");
        numberInput.value = "";
        pinInput.value = "";
    }
})
// Allow users to press "Enter" key to trigger the login button click event
document.querySelector('input[placeholder="Enter your number"]').addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        // Trigger the login button click event
        document.getElementById("login-btn").click();
    }
});
document.querySelector('input[placeholder="Enter 4 digit PIN"]').addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        // Trigger the login button click event
        document.getElementById("login-btn").click();
    }
});
