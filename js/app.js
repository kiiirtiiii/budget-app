class Inputs {
  constructor() {
    this.budgetBtn = document.getElementById('budget-btn')
    this.expenseBtn = document.getElementById('expense-btn')
    this.updateExpenseBtn = document.getElementById('update-expense-btn')

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

    this.textArr
    this.budgetValue
  }

  showBudget() {
    this.budget.innerHTML = inputs.budget.value
    this.budgetValue = +inputs.budget.value
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
    clone.querySelector('p').innerHTML =
      inputs.expense.value + ' ' + this.expenseArr.at(-1)

    this.original.parentNode.appendChild(clone)

    inputs.expense.value = ''
    inputs.expenseAmount.value = ''
  }

  update(expenseValue) {
    validation.expense.innerHTML = ''
    validation.expenseAmount.innerHTML = ''

    this.textArr = []
    this.textArr.push(inputs.expense.value)
    this.textArr.push(inputs.expenseAmount.value)

    expenseValue.innerHTML = this.textArr.join(' ')
    this.expenseArr.push(+inputs.expenseAmount.value)

    inputs.expense.value = ''
    inputs.expenseAmount.value = ''

    inputs.expenseBtn.style.display = 'block'
    inputs.updateExpenseBtn.style.display = 'none'
  }

  edit(e) {
    let expenseValue = e.parentNode.querySelector('p')

    this.removeExpense(e)
    inputs.expense.value = this.textArr.slice(0, -1, -1).join(' ')
    inputs.expenseAmount.value = this.textArr.at(-1)

    inputs.expenseBtn.style.display = 'none'
    inputs.updateExpenseBtn.style.display = 'block'

    inputs.updateExpenseBtn.addEventListener('click', function () {
      if (inputs.expense.value == null || inputs.expense.value == '') {
        validation.expense.innerHTML = 'Expense can not be empty'
      } else if (
        inputs.expenseAmount.value == null ||
        inputs.expenseAmount.value == ''
      ) {
        validation.expense.innerHTML = ''
        validation.expenseAmount.innerHTML = 'Expense Amount can not be empty'
      } else {
        showValues.update(expenseValue)
        showValues.showSavings()
      }
    })
  }

  removeExpense(e) {
    let expenseValue = e.parentNode.querySelector('p')
    this.textArr = expenseValue.innerHTML.split(' ')

    let idx = this.expenseArr.findIndex((p) => p == this.textArr.at(-1))
    this.expenseArr.splice(idx, 1)
  }

  delete(e) {
    document.getElementById(e.parentNode.id).remove()
    showValues.removeExpense(e)
    showValues.showSavings()
  }

  showSavings() {
    if (this.expenseArr.length == 0) {
      this.savings.innerHTML = this.budgetValue
    } else {
      let totalExpense = this.expenseArr.reduce((x, y) => {
        return x + y
      }, 0)
      this.savings.innerHTML = this.budgetValue - totalExpense
    }
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
    showValues.showSavings()
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
    showValues.showSavings()
  }
})
