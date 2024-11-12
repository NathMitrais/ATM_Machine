// main.js
let accountBalance = 25000000;

function displayBalance() {
  const balanceDisplay = document.getElementById('balance-display');
  balanceDisplay.textContent = `Balance: ${formatBalance(accountBalance)}`;
}

function depositCash() {
  const depositAmount = Number(document.getElementById('deposit-amount').value);
  
  if (depositAmount > 0) {
    accountBalance += depositAmount;
    displayBalance();
    showMessage(`Deposited ${formatBalance(depositAmount)} successfully!`);
  } else {
    showMessage("Enter a valid deposit amount.");
  }
}

function withdrawCash() {
  const withdrawAmount = Number(document.getElementById('withdraw-amount').value);
  
  if (withdrawAmount > 0 && withdrawAmount <= accountBalance) {
    accountBalance -= withdrawAmount;
    displayBalance();
    showMessage(`Withdrew ${formatBalance(withdrawAmount)} successfully!`);
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

function formatBalance(amount) {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
  