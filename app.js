budgetApp = {
    expenses: [],
    income: [],
    totalIncome: 0,
    totalExpense: 0,
    budget: 0,

    incomeAdd: function() {
        var incomeInput = document.getElementById("inputIncome");
        this.income.push(incomeInput.valueAsNumber);
        console.log(this.income);
    },

    expenseAdd: function() {
        var expenseInput = document.getElementById("inputExpense");
        this.expenses.push(expenseInput.valueAsNumber);
        console.log(this.expenses);
    },

    incomeTotalCalc: function() {
        this.totalIncome = this.income.reduce((prevValue, nextValue) => prevValue + nextValue);
        console.log(totalIncome);
    },

    expenseTotalCalc: function() {
        this.totalExpense = this.expenses.reduce((prevValue, nextValue) => prevValue + nextValue);
        console.log(totalExpense);
    },
};

handlers = {
    displayIncome: function() {
        var incomeInput = document.getElementById("inputIncome");
        var incomeValue = incomeInput.valueAsNumber;
        var incomeLi = document.createElement('li');
        var budgetList = document.querySelector('ul');
        if (isNaN(incomeValue) === true) {
            alert("Please enter a valid number");
            incomeInput.value = "";
        } else {
            incomeLi.innerHTML = "$ " + incomeValue;
            incomeLi.className = 'incomeLi';
            budgetList.appendChild(incomeLi);
            budgetApp.incomeAdd();
        };
        incomeInput.value = "";
        budgetApp.incomeTotalCalc();
        handlers.displayIncomeTotal();
        budgetApp.budget = budgetApp.budget + incomeValue;
        handlers.displayBudgetTotal();
    },
    
    displayExpense: function() {
        var expenseInput = document.getElementById("inputExpense");
        var expenseValue = expenseInput.valueAsNumber;
        var expenseLi = document.createElement('li');
        var budgetList = document.querySelector('ul');
        if (isNaN(expenseValue) === true) {
            alert("Please enter a valid number");
            expenseInput.value = "";
        } else {
            expenseLi.innerHTML = "$ " + expenseValue;
            expenseLi.className = 'expenseLi';
            budgetList.appendChild(expenseLi);
            budgetApp.expenseAdd();
        };
        expenseInput.value ='';
        budgetApp.expenseTotalCalc();
        handlers.displayExpenseTotal();
        budgetApp.budget = budgetApp.budget - expenseValue;
        handlers.displayBudgetTotal();
    },

    displayIncomeTotal: function() {
        var incomeContainer = document.getElementById('incomeContainer');
        incomeContainer.innerHTML = '';
        incomeContainer.innerHTML = budgetApp.totalIncome;
    },

    displayExpenseTotal: function() {
        var expenseContainer = document.getElementById('expenseContainer');
        expenseContainer.innerHTML = '';
        expenseContainer.innerHTML = budgetApp.totalExpense;
    },

    displayBudgetTotal: function() {
        var budgetContainer = document.getElementById('budgetContainer');
        budgetContainer.innerHTML = budgetApp.budget;
    },

    initialBudgetSet: function() {
        var inputBudget = document.getElementById('inputBudget');
        var budgetValue = inputBudget.valueAsNumber;
            if (isNaN(budgetValue) === true) {
                alert('Please enter a valid number!');
                inputBudget.value = '';
            } else {
                budgetApp.budget = budgetValue;
                var budgetContainer = document.getElementById('budgetContainer');
                budgetContainer.innerHTML = '';
                budgetContainer.innerHTML = budgetApp.budget;
                inputBudget.value = '';
            };
    }
};