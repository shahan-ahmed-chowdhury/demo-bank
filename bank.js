//////\\\\\\\////////Banking Section//////\\\\\//////\\\\\\\

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    if (depositInput.value > 0) {
        const depositAmount = parseFloat(depositInput.value);


        const depositCounter = document.getElementById('deposit-count');
        const previusAmount = parseFloat(depositCounter.innerText);
        const totalAmount = previusAmount + depositAmount;
        depositCounter.innerText = totalAmount;
        depositInput.value = '';
    ///////////////////update account balance\\\\\\\\\\\\\\\\\\

        const balance = document.getElementById('total-count');
        const currentBalance = parseFloat(balance.innerText);
        const totalBalance = currentBalance + totalAmount;
        balance.innerText = totalBalance;

    }

});

//////////////////////withdraw balance\\\\\\\\\\\\\\\\\\\\\\
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const witdrawInput = document.getElementById('withdraw-input');
    if (witdrawInput.value > 0) {
        const withdrawAmount = parseFloat(witdrawInput.value);

        const mainBalance = document.getElementById('total-count');
        const mainTotal = parseFloat(mainBalance.innerText);

        if (withdrawAmount < mainTotal) {
            const finalAmount = mainTotal - withdrawAmount;
            mainBalance.innerText = finalAmount;

            const withdrawCounter = document.getElementById('withdraw-count')
            const withdrawBalance = parseFloat(withdrawCounter.innerText);
            const totalWithdraw = withdrawBalance + withdrawAmount;
            withdrawCounter.innerText = totalWithdraw;
    

            witdrawInput.value = '';

        }
    }
});