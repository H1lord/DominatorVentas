const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const producto = productos.find(
    producto => producto.id == id
);

if (producto) {

    document.getElementById("nombre").textContent = producto.nombre;
    
    const precioDetalle = document.getElementById("precio");

    if (producto.oferta) {
        precioDetalle.innerHTML = `
            <span class="etiqueta-oferta-detalle">OFERTA</span>
            <span class="precio-original-detalle">${producto.precio}</span>
            <span class="precio-oferta-detalle">${producto.precioOferta}</span>
        `;
    } else {
        precioDetalle.textContent = producto.precio;
    }

    document.getElementById("estado").textContent = producto.estado;
    document.getElementById("rating").textContent = producto.rating;
    document.getElementById("descripcion").textContent = producto.descripcion;
    document.getElementById("imagen").src = producto.img;

    document.getElementById("whatsapp").href =
        "https://wa.me/51992837422?text=" +
        encodeURIComponent("Hola quiero comprar " + producto.nombre);

    const relacionadosTrack = document.getElementById("relacionadosTrack");

    const relacionados = productos.filter(
        producto => producto.id != id
    );

    const duplicados = [...relacionados, ...relacionados];

    duplicados.forEach((item) => {
        relacionadosTrack.innerHTML += `
            <a href="detalle.html?id=${item.id}" class="relacionado-card">
                <img src="${item.img}">
                <div class="relacionado-info">
                    <h3>${item.nombre}</h3>
                    <p>${
                    item.oferta
                    ? `
                        <span class="etiqueta-oferta-card">OFERTA</span>
                        <p class="precio-original-card">${item.precio}</p>
                        <p class="precio-oferta-card">${item.precioOferta}</p>
                    `
                    : `
                        <p class="precio-relacionado">${item.precio}</p>
                    `
                }</p>
                </div>
            </a>
        `;
    });

    const imagenPrincipal = document.getElementById("imagen");
    const popupImagen = document.getElementById("popupImagen");
    const imagenPopup = document.getElementById("imagenPopup");
    const cerrarPopup = document.getElementById("cerrarPopup");

    imagenPrincipal.addEventListener("click", () => {
        imagenPopup.src = imagenPrincipal.src;
        popupImagen.classList.add("activo");
    });

    cerrarPopup.addEventListener("click", () => {
        popupImagen.classList.remove("activo");
    });

    popupImagen.addEventListener("click", (e) => {
        if (e.target === popupImagen) {
            popupImagen.classList.remove("activo");
        }
    });
}