function getOutput(money) {
    const cost = document.getElementById(money +'-cost').value;
    return cost;
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    
    const result = parseFloat(getOutput('clothes')) + parseFloat(getOutput('rent')) + parseFloat(getOutput('food'));

    document.getElementById('expenses-total').innerText = result;

    const incomeTotal = document.getElementById('income-total').value - result;

    const balanceTotal = document.getElementById('balance-total').innerText = incomeTotal;
    console.log(balanceTotal);

});

document.getElementById('save-btn').addEventListener('click', function () {

    const savingValue = document.getElementById('saving-money').value;
    const incomeTotal = document.getElementById('income-total').value;
    const balanceTotal = document.getElementById('balance-total').innerText;
    const save = (savingValue / 100) * incomeTotal;
    const minusBalance = parseFloat(balanceTotal) - save;
    document.getElementById('saved-money').innerText = save;
    document.getElementById('remaining-balance').innerText = minusBalance;
})