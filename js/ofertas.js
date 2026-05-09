const gridOfertas = document.getElementById("gridOfertas");

const productosEnOferta = productos.filter(producto => producto.oferta);

productosEnOferta.forEach(producto => {
    gridOfertas.innerHTML += `
        <div class="oferta-card">
            <span class="etiqueta-oferta">OFERTA</span>

            <img src="${producto.img}" alt="${producto.nombre}">

            <div class="oferta-info">
                <h3>${producto.nombre}</h3>

                <p class="precio-original">${producto.precio}</p>

                <p class="precio-oferta">
                    ${producto.precioOferta || producto.precio}
                </p>

                <p class="estado">${producto.estado}</p>

                <a href="detalle.html?id=${producto.id}" class="btn-producto">
                    Ver Producto
                </a>
            </div>
        </div>
    `;
});

const popupOferta = document.getElementById("popupOferta");
const cerrarPopupOferta = document.getElementById("cerrarPopupOferta");

cerrarPopupOferta.addEventListener("click", () => {
    popupOferta.classList.add("oculto");
});

const btnWhatsapp = document.getElementById("btnWhatsapp");

btnWhatsapp.href =
    "https://wa.me/51992837422?text=" +
    encodeURIComponent("Hola, quiero consultar por las ofertas de fin de semana.");