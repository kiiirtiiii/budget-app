//'use strict'

class App {
  constructor(budget, expense) {
    this.budget = budget
    this.expense = expense
    this.savings = this.budget - this.expense
  }

  showBudget() {
    //document.getElementById('showBudget').innerHTML = this.budget
    console.log(this.budget)
    return false
  }

  showExpense() {
    document.getElementById('showExpense').innerHTML = this.expense
  }

  showSavings() {
    document.getElementById('showSaings').innerHTML = this.savings
  }
}

let budget = document.budgetForm.budget.value
let expense = document.expenseForm.expenseAmount.value

let app = new App(budget, expense)

// function print() {
//   let budget = document.sample.budget.value
//   console.log(budget)
//   return false
// }

// App.showBudget()
// App.showExpense()
// App.showSavings()

// function validateBudget() {
//   let budgetValue = document.budgetForm.budget.value

//   if (budgetValue == null || budgetValue == '') {
//     document.getElementById('valid-budget').innerHTML =
//       'Please enter your budget'
//     return false
//   }
// }

// function validateExpense() {
//   let expenseValue = document.expenseForm.expense.value
//   let expenseAmountValue = document.expenseForm.expenseAmount.value

//   if (expenseValue == null || expenseValue == '') {
//     document.getElementById('valid-expense').innerHTML =
//       'Please enter your expense'
//     return false
//   } else if (expenseAmountValue == null || expenseAmountValue == '') {
//     document.getElementById('valid-expense').innerHTML = ''
//     document.getElementById('valid-expense-amount').innerHTML =
//       'Please enter the amount of your expense'
//     return false
//   }
// }
