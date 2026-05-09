let paginaActual = 1;
const productosPorPagina = 10;

function mostrarProductos() {

    const lista = document.getElementById("lista-productos");

    lista.innerHTML = "";

    const inicio = (paginaActual - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;

    const productosPagina = productos.slice(inicio, fin);

    productosPagina.forEach(producto => {

        const precioHTML = producto.oferta
            ? `
                <p class="precio-original-card">
                    ${producto.precio}
                </p>

                <p class="precio-oferta">
                    ${producto.precioOferta}
                </p>
              `
            : `
                <p class="precio">
                    ${producto.precio}
                </p>
              `;

        lista.innerHTML += `
            <div class="producto-card">

                ${producto.oferta
                    ? `<span class="etiqueta-oferta-card">OFERTA</span>`
                    : ""
                }

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

    const totalPaginas = Math.ceil(
        productos.length / productosPorPagina
    );

    document.getElementById("pagina-actual").textContent =
        `Página ${paginaActual} de ${totalPaginas}`;
}

function cambiarPagina(valor) {

    const totalPaginas = Math.ceil(
        productos.length / productosPorPagina
    );

    paginaActual += valor;

    if (paginaActual < 1)
        paginaActual = 1;

    if (paginaActual > totalPaginas)
        paginaActual = totalPaginas;

    mostrarProductos();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

mostrarProductos();