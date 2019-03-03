budgetApp = {
    budget: 0,
    expenses: [],
    income: [],

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
    },
 };