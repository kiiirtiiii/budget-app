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
  }

  showBudget() {
    this.budget.innerHTML = inputs.budget.value
    inputs.budget.value = ''
  }

  showExpense() {
    this.expenseArr.push(inputs.expenseAmount.value)

    inputs.expense.value = ''
    inputs.expenseAmount.value = ''

    let newExpense = document.createElement('div')
    newExpense.innerHTML = inputs.expenseAmount.value

    console.log(newExpense.innerHTML)
    // this.budget.insertBefore(newExpense, document.getElementById('dummy'))
  }
}

let inputs = new Inputs()
let validation = new Validation()
let showValues = new ShowValues()

let expense = []

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
