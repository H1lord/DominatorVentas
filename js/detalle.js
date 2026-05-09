const productos = {
    1:{nombre:"Arcana Juggernaut", precio:"$29.99", estado:"Disponible", rating:"★★★★★ (5.0)", descripcion:"Arcana premium de Juggernaut con efectos especiales y diseño exclusivo.", imagen:"img/product-arcana.png"},
    2:{nombre:"Immortal Axe", precio:"$19.99", estado:"Disponible", rating:"★★★★☆ (4.5)", descripcion:"Item inmortal para Axe, ideal para destacar en combate.", imagen:"img/product-axe.png"},
    3:{nombre:"Bundle Phantom Assassin", precio:"$34.99", estado:"Disponible", rating:"★★★★★ (5.0)", descripcion:"Bundle completo de Phantom Assassin con apariencia legendaria.", imagen:"img/product-Bundle Phantom Assassin.png"},
    4:{nombre:"Arcana Pudge", precio:"$27.99", estado:"Disponible", rating:"★★★★★ (4.9)", descripcion:"Arcana de Pudge con efectos visuales únicos.", imagen:"img/product-Arcana Pudge.png"},
    5:{nombre:"Immortal Invoker", precio:"$24.99", estado:"Disponible", rating:"★★★★☆ (4.6)", descripcion:"Item inmortal para Invoker.", imagen:"img/product-Immortal Invoker.png"}
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const producto = productos[id];

if (producto) {

    document.getElementById("nombre").textContent = producto.nombre;
    document.getElementById("precio").textContent = producto.precio;
    document.getElementById("estado").textContent = producto.estado;
    document.getElementById("rating").textContent = producto.rating;
    document.getElementById("descripcion").textContent = producto.descripcion;
    document.getElementById("imagen").src = producto.imagen;

    document.getElementById("whatsapp").href =
        "https://wa.me/51992837422?text=" +
        encodeURIComponent("Hola quiero comprar " + producto.nombre);

    const relacionadosTrack = document.getElementById("relacionadosTrack");

    const relacionados = Object.entries(productos)
        .filter(([productoId]) => productoId != id);

    const duplicados = [...relacionados, ...relacionados];

    duplicados.forEach(([productoId, item]) => {
        relacionadosTrack.innerHTML += `
            <a href="detalle.html?id=${productoId}" class="relacionado-card">
                <img src="${item.imagen}">
                <div class="relacionado-info">
                    <h3>${item.nombre}</h3>
                    <p>${item.precio}</p>
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