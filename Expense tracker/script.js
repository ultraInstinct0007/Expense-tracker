let expenses = [];
let totalamount = 0;

const categoryselect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expenseTableBody = document.getElementById('expense-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function () {

  const category = categoryselect.value;
  const amount = Number(amountInput.value);
  const date = dateInput.value;

  if (category === '') {
    alert('please select a category');
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a  valid amount');
    return;
  }
  if (date === '') {
    alert('Please enter valid date');
  }
  expenses.push({ category, amount, date });

  totalamount += amount;
  totalAmountCell.textContent = totalamount;

  const newRow = expenseTableBody.insertRow();

  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();
  const deleteBtn = document.createElement('button');

  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', function () {
    expenses.splice(expenses.indexOf(expense), 1);

    totalamount -= expense.amount;
    totalAmountCell.textContent = totalamount;

    expenseTableBody.removeChild(newRow);
  })

  const expense = expenses[expenses.length - 1];
  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
})

for (const expense of expenses) {
  totalamount += expense.amount;
  totalAmountCell.textContent = totalamount;

  const newRow = expenseTableBody.insertRow();
  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', function () {
    expenses.splice(expenses.indexOf(expense), 1);

    totalamount -= expense.amount;
    totalAmountCell.textContent = totalamount;

    expenseTableBody.removeChild(newRow);
  })
  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);

}