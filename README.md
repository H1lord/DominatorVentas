# Dominator Ventas

## Descripción del proyecto

**Dominator Ventas** es un proyecto web desarrollado como una tienda virtual, orientada a la visualización de productos, ofertas y detalles individuales de cada artículo. La página permite al usuario navegar por distintas secciones, revisar productos disponibles, consultar promociones, acceder a una vista detallada de cada producto y utilizar formularios simulados de contacto, login y registro.

El proyecto fue desarrollado utilizando tecnologías web como **HTML, CSS y JavaScript**, aplicando una estructura organizada por vistas y archivos independientes para facilitar el mantenimiento del código.

---

## Metodología de trabajo

El desarrollo del proyecto se realizó de manera colaborativa. El equipo trabajó principalmente durante las noches, coordinando avances, revisando funcionalidades y unificando los cambios realizados por cada integrante.

La metodología utilizada consistió en trabajar en conjunto, integrar los avances en una sola versión del proyecto y posteriormente subir los cambios mediante un único commit consolidado al repositorio de GitHub. Esto permitió mantener una versión ordenada del proyecto y evitar conflictos entre archivos.

## Distribución de trabajo

La distribución de tareas dentro del proyecto fue la siguiente:

Integrante :	Actividades realizadas
- Jesus Huaman :	Desarrollo de la vista Index, vista Productos y vista Detalle de Productos.
- Antoni Cardenas :	Desarrollo de la vista Ofertas, vista Contacto y vista Login.
- Wilian Quinto :	Desarrollo de la vista Registro.
- Meg Noureddine Tihuay Iñapi :	Desarrollo y apoyo en el CSS de las vistas.
- Carlos Chero :	Desarrollo del JavaScript de todas las vistas, animaciones, simulaciones e interacciones dinámicas del proyecto.

## Participación del equipo
Integrante	Participación
Carlos Chero	100%
Jesus Huaman	100%
Antoni Cardenas	100%
Wilian Quinto	100%
Meg Noureddine Tihuay Iñapi	65%

## Funcionalidades principales

El proyecto cuenta con las siguientes funcionalidades:

- Página principal con presentación del sitio.
- Vista de productos con catálogo dinámico.
- Filtros por categoría.
- Buscador de productos.
- Paginación de productos.
- Vista de detalle para cada producto.
- Vista de ofertas con productos promocionados.
- Formulario de contacto simulado.
- Sistema de login y registro simulado mediante almacenamiento local.
- Animaciones e interacciones visuales.
- Interfaz responsive y diseño visual moderno.
- Navegación entre las distintas vistas del sitio.

---

## Vistas del proyecto

### Página principal

La vista principal funciona como la portada del proyecto. Desde esta sección el usuario puede conocer la tienda y acceder a las demás secciones mediante el menú de navegación.

### Productos

La vista de productos permite mostrar el catálogo completo de la tienda. Incluye búsqueda, filtros por categoría y paginación, lo que facilita la navegación del usuario dentro del catálogo.

### Detalle de producto

La vista de detalle muestra información específica de un producto seleccionado, como imagen, nombre, precio, estado y opciones de contacto o consulta.

### Ofertas

La vista de ofertas presenta únicamente los productos que cuentan con descuento o promoción, diferenciándolos visualmente del resto del catálogo.

### Contacto

La vista de contacto permite al usuario enviar una consulta mediante un formulario simulado. También puede incluir accesos a medios de comunicación como WhatsApp o correo.

### Login y Registro

Las vistas de login y registro permiten simular un sistema de autenticación de usuarios. Los datos se manejan de forma local en el navegador.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage
- Git y GitHub

---

## Estructura general del proyecto

```text
DominatorVentas/
│
├── index.html
├── productos.html
├── detalle.html
├── ofertas.html
├── contacto.html
├── login.html
├── register.html
├── 404.html
├── style.css
├── productos.css
├── detalle.css
├── ofertas.css
├── contacto.css
└── auth.css
│
├── js/
│   ├── index.js
│   ├── productos.js
│   ├── detalle.js
│   ├── ofertas.js
│   ├── contacto.js
│   ├── auth.js
│   ├── auth-ui.js
│   ├── chatbot.js
│   └── producto.js
│
└── img/
