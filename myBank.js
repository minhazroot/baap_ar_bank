document.getElementById('deposit_btn').addEventListener('click', function () {
    //input deposit amount tak
    const depositField = document.getElementById('deposit_fielt')
    const depositText = depositField.value;
    const depositNumber = parseInt(depositText)
    depositField.value = ''
    //desplay deposit amont
    const DepositDesplay = document.getElementById('deposit_desplay');
    DepositDesplay.innerText = depositNumber;
    //tek main amount 
    const BalanceDesplay = document.getElementById('Balance_desplay')
    const balanceText = BalanceDesplay.innerText;
    const balance = parseInt(balanceText);
    const totalAmount = balance + depositNumber;
    BalanceDesplay.innerText = totalAmount;


})
document.getElementById('Withdraw_btn').addEventListener('click', function () {
    //take withdraw amount
    const withdrawField = document.getElementById('Withdraw_fielt')
    const withdrawText = withdrawField.value;
    const withdrawNumber = parseInt(withdrawText)
    withdrawField.value = ''
    //desplay list withdraw amount
    const WithdrawDesplay = document.getElementById('Withdraw_desplay')
    WithdrawDesplay.innerText = withdrawNumber;
    //tak main many 
    const mainMany = document.getElementById('Balance_desplay')
    const mainManytext = mainMany.innerText;
    const maintk = parseInt(mainManytext)
    //giv a condetion for withdrav 
    if (maintk > 1200) {
        const dep = maintk - withdrawNumber;

        mainMany.innerText = dep;
    } else {
        alert('you blance is low  ')
    }
})