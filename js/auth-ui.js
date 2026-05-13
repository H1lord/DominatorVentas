const usuarioGuardado = localStorage.getItem("usuarioLogueado");

if (!usuarioGuardado) {

    window.location.href = "login.html";

} else {

    const usuario = JSON.parse(usuarioGuardado);

    const nombreUsuario = document.getElementById("nombreUsuario");
    const usuarioBtn = document.getElementById("usuarioBtn");
    const usuarioDropdown = document.getElementById("usuarioDropdown");
    const cerrarSesion = document.getElementById("cerrarSesion");

    if (nombreUsuario) {
        nombreUsuario.textContent = usuario.name;
    }

    if (usuarioBtn && usuarioDropdown) {

        usuarioBtn.addEventListener("click", () => {
            usuarioDropdown.classList.toggle("activo");
        });

        document.addEventListener("click", (e) => {

            if (!e.target.closest(".usuario-menu")) {
                usuarioDropdown.classList.remove("activo");
            }
        });
    }

    if (cerrarSesion) {

        cerrarSesion.addEventListener("click", () => {

            localStorage.removeItem("usuarioLogueado");

            window.location.href = "login.html";
        });
    }
}