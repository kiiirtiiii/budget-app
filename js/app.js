class Inputs {
  constructor() {
    this.budgetBtn = document.getElementById('budget-btn')
    this.expenseBtn = document.getElementById('expense-btn')

    this.budget = document.getElementById('budget')
    this.expense = document.getElementById('expense')
    this.expenseAmount = document.getElementById('expense-amount')
  }
}

class Validation {
  constructor() {
    this.budget = document.getElementById('valid-budget')
    this.expense = document.getElementById('valid-expense')
    this.expenseAmount = document.getElementById('valid-expense-amount')
  }
}

class ShowValues {
  constructor() {
    this.budget = document.getElementById('show-budget')
    this.expense = document.getElementById('show-expense')
    this.savings = document.getElementById('show-savings')
    this.expenseArr = []

    this.original = document.getElementById('new-expense')
    this.i = 0

    this.editExpense = document.querySelector('.edit-expense')
    this.dltExpense = document.querySelector('.dlt-expense')
  }

  showBudget() {
    this.budget.innerHTML = inputs.budget.value
    validation.budget.innerHTML = ''
    inputs.budget.value = ''
  }

  showExpense() {
    this.expenseArr.push(+inputs.expenseAmount.value)

    validation.expense.innerHTML = ''
    validation.expenseAmount.innerHTML = ''

    let clone = this.original.cloneNode(true)

    clone.className = 'individual-expense'
    clone.id = 'new-expense' + ++this.i

    clone.innerHTML += inputs.expense.value
    clone.innerHTML += ' ' + this.expenseArr.at(-1)

    this.original.parentNode.appendChild(clone)
    console.log(clone)
    console.log(this.expenseArr)

    inputs.expense.value = ''
    inputs.expenseAmount.value = ''

    if (inputs.budgetBtn.innerHTML == 'Update Expense') {
      this.delete()
    }
  }

  edit(e) {
    let parentNodetext = e.parentNode.innerText
    let textArr = parentNodetext.split(' ')
    console.log(textArr)

    inputs.expense.value = textArr.slice(2, -1, -1).join(' ')
    inputs.expenseAmount.value = textArr.at(-1)

    let idx = this.expenseArr.findIndex((p) => p == inputs.expenseAmount.value)
    console.log(idx)

    inputs.expenseBtn.innerHTML = 'Update Expense'
  }

  delete(e) {
    document.getElementById(e.parentNode.id).remove()
  }
}

let inputs = new Inputs()
let validation = new Validation()
let showValues = new ShowValues()

inputs.budgetBtn.addEventListener('click', function () {
  if (inputs.budget.value == null || inputs.budget.value == '') {
    validation.budget.innerHTML = 'Please enter your budget'
  } else {
    showValues.showBudget()
  }
})

inputs.expenseBtn.addEventListener('click', function () {
  if (inputs.expense.value == null || inputs.expense.value == '') {
    validation.expense.innerHTML = 'Please enter your expense'
  } else if (
    inputs.expenseAmount.value == null ||
    inputs.expenseAmount.value == ''
  ) {
    validation.expense.innerHTML = ''
    validation.expenseAmount.innerHTML =
      'Please enter the amount of your expense'
  } else {
    showValues.showExpense()
  }
})

// showValues.editExpense.addEventListener('click', function () {
//   inputs.expense.value = 'kirti'
// })

// console.log(showValues.editExpense)
