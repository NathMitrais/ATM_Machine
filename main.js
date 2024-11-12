// main.js
let accountBalance = 25000000; // Starting balance for the demo

// Function to display balance
function displayBalance() {
  const balanceDisplay = document.getElementById('balance-display');
  balanceDisplay.textContent = `Balance: $${accountBalance}`;
}

// Function to deposit cash
function depositCash() {
  const depositAmount = Number(document.getElementById('deposit-amount').value);
  
  if (depositAmount > 0) {
    accountBalance += depositAmount;
    displayBalance();
    showMessage(`Deposited $${depositAmount} successfully!`);
  } else {
    showMessage("Enter a valid deposit amount.");
  }
}

// Function to withdraw cash with error handling
function withdrawCash() {
  const withdrawAmount = Number(document.getElementById('withdraw-amount').value);
  
  if (withdrawAmount > 0 && withdrawAmount <= accountBalance) {
    accountBalance -= withdrawAmount;
    displayBalance();
    showMessage(`Withdrew $${withdrawAmount} successfully!`);
  } else if (withdrawAmount > accountBalance) {
    showMessage("Insufficient funds.");
  } else {
    showMessage("Enter a valid withdrawal amount.");
  }
}

function showMessage(message) {
  const messageDisplay = document.getElementById('message');
  messageDisplay.textContent = message;
}
