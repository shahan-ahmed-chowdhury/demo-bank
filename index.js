document.getElementById('login-btn').addEventListener('click', function () {

    const email = document.getElementById('user-email');
    const password = document.getElementById('user-password');

    if (email.value == 'demo@gmail.com' && password.value == 12345678) {
        location.href = 'main.html';
    }
    else {
        const parentDiv = document.getElementById('form-parent');
        const wrong = document.createElement('p');
        wrong.style.backgroundColor = 'red';
        wrong.innerText = 'User Not Valid';
        parentDiv.appendChild(wrong);

    }


})
