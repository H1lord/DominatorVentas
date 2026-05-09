const usuarioGuardado = localStorage.getItem("usuarioLogueado");

if (!usuarioGuardado) {
    window.location.href = "login.html";
} else {
    const usuario = JSON.parse(usuarioGuardado);

    const nombreUsuario = document.getElementById("nombreUsuario");
    const usuarioBtn = document.getElementById("usuarioBtn");
    const usuarioDropdown = document.getElementById("usuarioDropdown");
    const cerrarSesion = document.getElementById("cerrarSesion");

    nombreUsuario.textContent = usuario.name;

    usuarioBtn.addEventListener("click", () => {
        usuarioDropdown.classList.toggle("activo");
    });

    cerrarSesion.addEventListener("click", () => {
        localStorage.removeItem("usuarioLogueado");
        window.location.href = "login.html";
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".usuario-menu")) {
            usuarioDropdown.classList.remove("activo");
        }
    });
}

const btnWhatsapp = document.getElementById("btnWhatsapp");
const btnWhatsappBody = document.getElementById("btnWhatsappBody");

const mensajeWhatsapp = "Hola, quiero más información sobre los productos.";

const urlWhatsapp =
    "https://wa.me/51992837422?text=" + encodeURIComponent(mensajeWhatsapp);

btnWhatsapp.href = urlWhatsapp;
btnWhatsappBody.href = urlWhatsapp;

const gridProductos = document.getElementById("gridProductos");

const productosDestacados = productos.slice(0, 3);

productosDestacados.forEach((producto) => {

    const precioHTML = producto.oferta
    ? `
        <p class="precio-original-card">${producto.precio}</p>
        <p class="precio-oferta">${producto.precioOferta}</p>
      `
    : `
        <p class="precio">${producto.precio}</p>
      `;

    gridProductos.innerHTML += `
        <div class="producto-card">

            ${producto.oferta ? `<span class="etiqueta-oferta-card">OFERTA</span>` : ""}

            <img src="${producto.img}" alt="${producto.nombre}">

            <h3>${producto.nombre}</h3>

            ${precioHTML}

            <p class="estado">${producto.estado}</p>

            <a href="detalle.html?id=${producto.id}"
               class="btn-producto">
               Ver Producto
            </a>

        </div>
    `;
});