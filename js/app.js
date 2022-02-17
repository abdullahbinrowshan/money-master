function getOutput(money) {
    const cost = document.getElementById(money + '-input').value;
    return cost;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const clothes = parseFloat(getOutput('clothes'));
    const rent = parseFloat(getOutput('rent'));
    const food = parseFloat(getOutput('food'));
    const putNumER = document.getElementById('pls-put-num');
    const putPositiveNumER = document.getElementById('put-positive-num');
    const moreThanIncomeER = document.getElementById('more-than-income')
    let income = getOutput('income');

    if (clothes < 1 || rent < 1 || food < 1 || income < 1) {
        return putPositiveNumER.style.display = 'block';
    } else {
        putPositiveNumER.style.display = 'none'
    }
    const expensesResult = clothes + rent + food;

    if (isNaN(expensesResult) == true || isNaN(income) == true) {
        return putNumER.style.display = 'block';
    } else {
        putNumER.style.display = 'none'
    }
    if (expensesResult > income) {
        return moreThanIncomeER.style.display = 'block';
    } else {
        moreThanIncomeER.style.display = 'none'
    }
    income = income - expensesResult;
    document.getElementById('expenses-total').innerText = expensesResult;
    document.getElementById('balance-total').innerText = income;
});

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