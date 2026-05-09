let paginaActual = 1;
const productosPorPagina = 10;
let categoriaActual = "Todos";
let textoBusqueda = "";

function obtenerProductosFiltrados() {
    let productosFiltrados = productos;

    if (categoriaActual !== "Todos") {
        productosFiltrados = productosFiltrados.filter(
            producto => producto.categoria === categoriaActual
        );
    }

    if (textoBusqueda) {
        productosFiltrados = productosFiltrados.filter(producto =>
            producto.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())
        );
    }

    return productosFiltrados;
}

function mostrarProductos() {

    const lista = document.getElementById("lista-productos");
    lista.innerHTML = "";

    const productosFiltrados = obtenerProductosFiltrados();

    const inicio = (paginaActual - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;

    const productosPagina = productosFiltrados.slice(inicio, fin);

    productosPagina.forEach(producto => {

        const precioHTML = producto.oferta
            ? `
                <p class="precio-original-card">${producto.precio}</p>
                <p class="precio-oferta">${producto.precioOferta}</p>
              `
            : `
                <p class="precio">${producto.precio}</p>
              `;

        lista.innerHTML += `
            <div class="producto-card">

                ${producto.oferta ? `<span class="etiqueta-oferta-card">OFERTA</span>` : ""}

                <img src="${producto.img}" alt="${producto.nombre}">

                <h3>${producto.nombre}</h3>

                ${precioHTML}

                <p class="estado">${producto.estado}</p>

                <a href="detalle.html?id=${producto.id}" class="btn-producto">
                    Ver Producto
                </a>

            </div>
        `;
    });

    const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina) || 1;

    document.getElementById("pagina-actual").textContent =
    `Página ${paginaActual} de ${totalPaginas}`;

    const titulo = document.querySelector(".productos-page h1");

    titulo.textContent =
        categoriaActual === "Todos"
            ? "Todos los Productos"
            : categoriaActual;

    const botones = document.querySelectorAll(".paginacion button");

    if (botones.length >= 2) {
        botones[0].disabled = paginaActual === 1;
        botones[1].disabled = paginaActual === totalPaginas;
    }
}

function cambiarPagina(valor) {

    const productosFiltrados = obtenerProductosFiltrados();

    const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina) || 1;

    paginaActual += valor;

    if (paginaActual < 1) paginaActual = 1;
    if (paginaActual > totalPaginas) paginaActual = totalPaginas;

    mostrarProductos();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const botonesFiltro = document.querySelectorAll(".filtro-btn");

botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
        categoriaActual = boton.dataset.categoria;
        paginaActual = 1;

        botonesFiltro.forEach(btn => btn.classList.remove("activo"));
        boton.classList.add("activo");

        mostrarProductos();
    });
});

const buscadorProductos = document.getElementById("buscadorProductos");

buscadorProductos.addEventListener("input", () => {
    textoBusqueda = buscadorProductos.value.trim();
    paginaActual = 1;
    mostrarProductos();
});

mostrarProductos();