document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault(); // Mencegah halaman refresh otomatis!

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
        const res = await fetch("https://herisusanta.my.id/javalogin/api/auth.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `action=login&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
        });

        const data = await res.json();

        if (data.status === "success") {
            // Simpan username ke localStorage agar terbaca landing page
            localStorage.setItem("username", data.username);
            alert("Login berhasil!");
            window.location.href = "../index.html";
        } else {
            alert("Username atau Password salah, silahkan coba lagi");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Terjadi kesalahan koneksi ke server.");
    }
});

// === BONUS: Kode Mengaktifkan Tombol Mata Password (Baris 42 di HTML) ===
const passwordToggle = document.getElementById('passwordToggle');
const passwordInput = document.getElementById('password');

if (passwordToggle && passwordInput) {
    passwordToggle.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('is-active'); 
    });
}
