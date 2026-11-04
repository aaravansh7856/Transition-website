
let transactions = [];

function addTransaction() {

    const title = document.getElementById("title").value;
    const amount = Number(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (title.trim() === "" || !Number.isFinite(amount) || amount <= 0) {
        alert("Please enter a valid name and amount.");
        return;
    }

    const transaction = {
        id: Date.now(),
        title: title.trim(),
        amount: amount,
        type: type
    };

    transactions.push(transaction);

    updateDashboard();

    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
}

function updateDashboard() {

    let income = 0;
    let expense = 0;

    transactions.forEach(transaction => {

        if (transaction.type === "income") {
            income += transaction.amount;
        } else {
            expense += transaction.amount;
        }

    });

    const balance = income - expense;

    document.getElementById("balance").textContent =
        "₹" + balance.toFixed(2);

    document.getElementById("income").textContent =
        "₹" + income.toFixed(2);

    document.getElementById("expense").textContent =
        "₹" + expense.toFixed(2);

    const list = document.getElementById("transaction-list");

    list.innerHTML = "";

    transactions.forEach(transaction => {

        const item = document.createElement("li");

        item.textContent =
            transaction.title + " — ₹" +
            transaction.amount.toFixed(2) +
            " (" + transaction.type + ")";

        list.appendChild(item);

    });
}


