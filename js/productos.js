const productos = [
    {id:1, img:"img/product-arcana.png", nombre:"Arcana Juggernaut", precio:"$29.99", estado:"Disponible"},
    {id:2, img:"img/product-axe.png", nombre:"Immortal Axe", precio:"$19.99", estado:"Disponible"},
    {id:3, img:"img/product-Bundle Phantom Assassin.png", nombre:"Bundle Phantom Assassin", precio:"$34.99", estado:"Disponible"},
    {id:4, img:"img/product-Arcana Pudge.png", nombre:"Arcana Pudge", precio:"$27.99", estado:"Disponible"},
    {id:5, img:"img/product-Immortal Invoker.png", nombre:"Immortal Invoker", precio:"$24.99", estado:"Disponible"},
    {id:6, img:"img/product-Set Zeus.png", nombre:"Set Zeus", precio:"$18.99", estado:"Disponible"},
    {id:7, img:"img/product-Arcana Rubick.png", nombre:"Arcana Rubick", precio:"$31.99", estado:"Disponible"},
    {id:8, img:"img/product-Immortal Sniper.png", nombre:"Immortal Sniper", precio:"$15.99", estado:"Disponible"},
    {id:9, img:"img/product-Set Crystal Maiden.png", nombre:"Set Crystal Maiden", precio:"$12.99", estado:"Disponible"},
    {id:10, img:"img/product-Arcana Lina.png", nombre:"Arcana Lina", precio:"$28.99", estado:"Disponible"},

    {id:11, img:"img/product-Immortal Drow Ranger.png", nombre:"Immortal Drow Ranger", precio:"$21.99", estado:"Disponible"},
    {id:12, img:"img/product-Set Anti-Mage.png", nombre:"Set Anti-Mage", precio:"$17.99", estado:"Disponible"},
    {id:13, img:"img/product-Arcana Shadow Fiend.png", nombre:"Arcana Shadow Fiend", precio:"$32.99", estado:"Disponible"},
    {id:14, img:"img/product-Immortal Phantom Lancer.png", nombre:"Immortal Phantom Lancer", precio:"$14.99", estado:"Disponible"},
    {id:15, img:"img/product-Set Sven.png", nombre:"Set Sven", precio:"$16.99", estado:"Disponible"},
    {id:16, img:"img/product-Arcana Terrorblade.png", nombre:"Arcana Terrorblade", precio:"$30.99", estado:"Disponible"},
    {id:17, img:"img/product-Immortal Slark.png", nombre:"Immortal Slark", precio:"$19.99", estado:"Disponible"},
    {id:18, img:"img/product-Set Witch Doctor.png", nombre:"Set Witch Doctor", precio:"$13.99", estado:"Disponible"},
    {id:19, img:"img/product-Arcana Queen of Pain.png", nombre:"Arcana Queen of Pain", precio:"$35.99", estado:"Disponible"},
    {id:20, img:"img/product-Immortal Mars.png", nombre:"Immortal Mars", precio:"$22.99", estado:"Disponible"},

    {id:21, img:"img/product-Set Legion Commander.png", nombre:"Set Legion Commander", precio:"$18.99", estado:"Disponible"},
    {id:22, img:"img/product-Arcana Windranger.png", nombre:"Arcana Windranger", precio:"$33.99", estado:"Disponible"},
    {id:23, img:"img/product-Immortal Faceless Void.png", nombre:"Immortal Faceless Void", precio:"$25.99", estado:"Disponible"},
    {id:24, img:"img/product-Set Luna.png", nombre:"Set Luna", precio:"$15.99", estado:"Disponible"},
    {id:25, img:"img/product-Arcana Ogre Magi.png", nombre:"Arcana Ogre Magi", precio:"$26.99", estado:"Disponible"},
    {id:26, img:"img/product-Immortal Templar Assassin.png", nombre:"Immortal Templar Assassin", precio:"$20.99", estado:"Disponible"},
    {id:27, img:"img/product-Set Riki.png", nombre:"Set Riki", precio:"$11.99", estado:"Disponible"},
    {id:28, img:"img/product-Arcana Wraith King.png", nombre:"Arcana Wraith King", precio:"$36.99", estado:"Disponible"},
    {id:29, img:"img/product-Immortal Earthshaker.png", nombre:"Immortal Earthshaker", precio:"$23.99", estado:"Disponible"},
    {id:30, img:"img/product-Set Mirana.png", nombre:"Set Mirana", precio:"$16.99", estado:"Disponible"}
];

let paginaActual = 1;
const productosPorPagina = 10;

function mostrarProductos() {
    const lista = document.getElementById("lista-productos");
    lista.innerHTML = "";

    const inicio = (paginaActual - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;

    const productosPagina = productos.slice(inicio, fin);

    productosPagina.forEach(producto => {
        lista.innerHTML += `
        <div class="producto-card">
            <img src="${producto.img}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p class="precio">${producto.precio}</p>
            <p class="estado">${producto.estado}</p>
            <a href="detalle.html?id=${producto.id}" class="btn-producto">
                Ver Producto
            </a>
        </div>
        `;
    });

    const totalPaginas = Math.ceil(productos.length / productosPorPagina);

    document.getElementById("pagina-actual").textContent =
        `Página ${paginaActual} de ${totalPaginas}`;
}

function cambiarPagina(valor) {
    const totalPaginas = Math.ceil(productos.length / productosPorPagina);

    paginaActual += valor;

    if (paginaActual < 1) paginaActual = 1;
    if (paginaActual > totalPaginas) paginaActual = totalPaginas;

    mostrarProductos();
}

mostrarProductos();