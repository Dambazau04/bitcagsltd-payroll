document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Dummy login validation
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        window.location.href = 'admin.html';  // Redirect to admin dashboard
    } else if (username === 'staff' && password === 'staff') {
        window.location.href = 'profile.html';  // Redirect to staff profile
    } else {
        alert('Invalid username or password');
    }
});
alert(`Thank you ${name}, your message has been sent! and you can contact us at our whatsapp no 08107907647`);
});