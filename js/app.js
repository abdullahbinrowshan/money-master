/* --__--__--__--__--__--__--__--__--__--__--__--__--__--__--__-- \\
            Get the value of all input start
\\ --__--__--__--__--__--__--__--__--__--__--__--__--__--__--__-- */
function getOutput(money) {
    const cost = document.getElementById(money + '-input').value;
    return cost;
}
/* --__--__--__--__--__--__--__--__--__--__--__--__--__--__--__-- \\
            Get the value of all input start
\\ --__--__--__--__--__--__--__--__--__--__--__--__--__--__--__-- */

/* --__--__--__--__--__--__--__--__--__--__--__--__--__--__--__-- \\
            Calculate event handler start
\\ --__--__--__--__--__--__--__--__--__--__--__--__--__--__--__-- */
document.getElementById('calculate-btn').addEventListener('click', function () {
    const clothes = parseFloat(getOutput('clothes'));
    const rent = parseFloat(getOutput('rent'));
    const food = parseFloat(getOutput('food'));
    const putNumER = document.getElementById('pls-put-num');
    const putPositiveNumER = document.getElementById('put-positive-num');
    const moreThanIncomeER = document.getElementById('more-than-income')
    let income = getOutput('income');

    // Negative error handler
    if (clothes < 1 || rent < 1 || food < 1 || income < 1) {
        return putPositiveNumER.style.display = 'block';
    } else {
        putPositiveNumER.style.display = 'none'
    }
    const expensesResult = clothes + rent + food;

    // String error handler
    if (isNaN(expensesResult) == true || isNaN(income) == true) {
        return putNumER.style.display = 'block';
    } else {
        putNumER.style.display = 'none'
    }

    // Error handling of money expenses
    if (expensesResult > income) {
        return moreThanIncomeER.style.display = 'block';
    } else {
        moreThanIncomeER.style.display = 'none'
    }
    
    income = income - expensesResult;
    document.getElementById('expenses-total').innerText = expensesResult;
    document.getElementById('balance-total').innerText = income;
});
/* --__--__--__--__--__--__--__--__--__--__--__--__--__--__--__-- \\
            Calculate event handler end
\\ --__--__--__--__--__--__--__--__--__--__--__--__--__--__--__-- */


/* --__--__--__--__--__--__--__--__--__--__--__--__--__--__--__-- \\
            Save event handler start
\\ --__--__--__--__--__--__--__--__--__--__--__--__--__--__--__-- */
document.getElementById('save-btn').addEventListener('click', function () {
    const savingValue = getOutput('saving');
    const incomeTotal = getOutput('income');
    const balanceTotal = document.getElementById('balance-total').innerText;
    const haventEnoughBalance = document.getElementById("havent-enough-balance")
    const save = (savingValue / 100) * incomeTotal;

    // Saving percent compare to balance
    if (save > balanceTotal) {
        return haventEnoughBalance.style.display = 'block'
    }else {
        haventEnoughBalance.style.display = 'none'
    }
    const minusBalance = parseFloat(balanceTotal) - save;
    document.getElementById('saved-money').innerText = save;
    document.getElementById('remaining-balance').innerText = minusBalance;
})
/* --__--__--__--__--__--__--__--__--__--__--__--__--__--__--__-- \\
            Get the value of all input start
\\ --__--__--__--__--__--__--__--__--__--__--__--__--__--__--__-- */