const formContacto = document.getElementById("formContacto");

const popupContacto = document.getElementById("popupContacto");
const popupTitulo = document.getElementById("popupTitulo");
const popupMensaje = document.getElementById("popupMensaje");
const cerrarPopup = document.getElementById("cerrarPopup");

formContacto.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = formContacto.querySelector('input[name="Nombre"]').value.trim();
    const email = formContacto.querySelector('input[name="Email"]').value.trim();
    const numero = formContacto.querySelector('input[name="Numero"]').value.trim();
    const consulta = formContacto.querySelector('textarea[name="Consulta"]').value.trim();

    if (!nombre || !email || !numero || !consulta) {
        mostrarPopup(
            "Campos incompletos",
            "Por favor, completa todos los campos antes de enviar tu consulta."
        );
        return;
    }

    mostrarPopup(
        "Mensaje enviado",
        "Tu consulta fue enviada correctamente. Nos comunicaremos contigo pronto."
    );

    formContacto.reset();
});

cerrarPopup.addEventListener("click", function () {
    popupContacto.classList.remove("activo");
});

function mostrarPopup(titulo, mensaje) {
    popupTitulo.textContent = titulo;
    popupMensaje.textContent = mensaje;
    popupContacto.classList.add("activo");
}