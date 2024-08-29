document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mendapatkan nilai dari input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // ID dan password yang valid (ini hanya contoh; jangan gunakan ini di aplikasi nyata)
    const validUsername = 'admin';
    const validPassword = 'password123';

    // Validasi input
    if (username === validUsername && password === validPassword) {
        // Jika login sukses
        window.location.href = 'welcome.html'; // Arahkan ke halaman konten
    } else {
        // Jika login gagal
        document.getElementById('error-message').textContent = 'ID atau password salah!';
    }
});