document.getElementById('SUBMIT_BTN').addEventListener('click', function () {
    const EmailField = document.getElementById('Email_address')
    const email = EmailField.value;
    const PasswordField = document.getElementById('YOUR_PASSWORD')
    const password = PasswordField.value;
    if (email === 'minhaz@gmail' && password === 'minhaz') {
        window.location.href = 'bank.html'
    } else {
        alert('This is not your father bank');
    }


})