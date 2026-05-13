const chatbotBoton = document.getElementById("chatbotBoton");
const chatbotPanel = document.getElementById("chatbotPanel");
const cerrarChatbot = document.getElementById("cerrarChatbot");
const chatbotBody = document.getElementById("chatbotBody");

const flujos = {
    inicio: {
        mensaje: "Hola 👋 ¿Sobre qué deseas consultar?",
        opciones: [
            { texto: "Productos", siguiente: "productos" },
            { texto: "Ofertas", link: "ofertas.html" },
            { texto: "Comprar por WhatsApp", whatsapp: true },
            { texto: "Contacto", link: "contacto.html" }
        ]
    },
    productos: {
        mensaje: "¿Qué categoría quieres ver?",
        opciones: [
            { texto: "Arcanos", link: "productos.html" },
            { texto: "Inmortales", link: "productos.html" },
            { texto: "Sets Completos", link: "productos.html" },
            { texto: "Volver", siguiente: "inicio" }
        ]
    }
};

function mostrarPaso(paso) {
    const flujo = flujos[paso];

    chatbotBody.innerHTML = `
        <div class="bot-msg">${flujo.mensaje}</div>
        <div class="chatbot-opciones">
            ${flujo.opciones.map(opcion => `
                <button class="chatbot-opcion"
                    data-siguiente="${opcion.siguiente || ""}"
                    data-link="${opcion.link || ""}"
                    data-whatsapp="${opcion.whatsapp || false}">
                    ${opcion.texto}
                </button>
            `).join("")}
        </div>
    `;

    document.querySelectorAll(".chatbot-opcion").forEach(boton => {
        boton.addEventListener("click", () => {
            const siguiente = boton.dataset.siguiente;
            const link = boton.dataset.link;
            const whatsapp = boton.dataset.whatsapp === "true";

            if (siguiente) {
                mostrarPaso(siguiente);
            }

            if (link) {
                window.location.href = link;
            }

            if (whatsapp) {
                window.open(
                    "https://wa.me/51992837422?text=" +
                    encodeURIComponent("Hola, quiero hacer una consulta sobre Dominator."),
                    "_blank"
                );
            }
        });
    });
}

chatbotBoton.addEventListener("click", () => {
    chatbotPanel.classList.toggle("activo");
    mostrarPaso("inicio");
});

cerrarChatbot.addEventListener("click", () => {
    chatbotPanel.classList.remove("activo");
});

mostrarPaso("inicio");