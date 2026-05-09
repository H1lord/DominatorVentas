const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("registerName").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value.trim();

        const registerError = document.getElementById("registerError");

        registerError.textContent = "";

        if (!name || !email || !password) {
            registerError.textContent = "Completa todos los campos.";
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = users.some(user => user.email === email);

        if (userExists) {
            registerError.textContent = "Este correo ya está registrado.";
            return;
        }

        users.push({
            name: name,
            email: email,
            password: password
        });

        localStorage.setItem("users", JSON.stringify(users));

        registerError.style.color = "#16a34a";
        registerError.textContent = "Cuenta creada correctamente.";

        setTimeout(() => {
            window.location.href = "login.html";
        }, 1200);
    });
}

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        const loginError = document.getElementById("loginError");

        loginError.textContent = "";

        if (!email || !password) {
            loginError.textContent = "Completa todos los campos.";
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const userFound = users.find(user =>
            user.email === email && user.password === password
        );

        if (!userFound) {
            loginError.textContent = "Correo o contraseña incorrectos.";
            return;
        }

        localStorage.setItem("usuarioLogueado", JSON.stringify(userFound));

        window.location.href = "index.html";
    });
}