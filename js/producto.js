const productos = [

    {
        id: 1,
        img: "img/product-arcana.png",
        nombre: "Arcana Juggernaut",
        precio: "$29.99",
        estado: "Disponible",
        categoria: "Arcanos",
        oferta: true,
        precioOferta: "$24.99",
        rating: "★★★★★ (5.0)",
        descripcion: "Arcana premium de Juggernaut con efectos especiales y diseño exclusivo."
    },

    {
        id: 2,
        img: "img/product-axe.png",
        nombre: "Immortal Axe",
        precio: "$19.99",
        estado: "Disponible",
        categoria: "Inmortales",
        oferta: false,
        precioOferta: "$15.99",
        rating: "★★★★☆ (4.5)",
        descripcion: "Item inmortal para Axe, ideal para destacar en combate."
    },

    {
        id: 3,
        img: "img/product-Bundle Phantom Assassin.png",
        nombre: "Bundle Phantom Assassin",
        precio: "$34.99",
        estado: "Disponible",
        categoria: "Sets Completos",
        oferta: true,
        precioOferta: "$29.99",
        rating: "★★★★★ (5.0)",
        descripcion: "Bundle completo de Phantom Assassin con apariencia legendaria."
    },

    {
        id: 4,
        img: "img/product-Arcana Pudge.png",
        nombre: "Arcana Pudge",
        precio: "$27.99",
        estado: "Disponible",
        categoria: "Arcanos",
        oferta: false,
        precioOferta: "$22.99",
        rating: "★★★★★ (4.9)",
        descripcion: "Arcana de Pudge con efectos visuales únicos."
    },

    {
        id: 5,
        img: "img/product-Immortal Invoker.png",
        nombre: "Immortal Invoker",
        precio: "$24.99",
        estado: "Disponible",
        categoria: "Inmortales",
        oferta: false,
        precioOferta: "$19.99",
        rating: "★★★★☆ (4.6)",
        descripcion: "Item inmortal para Invoker."
    },

    {
        id: 6,
        img: "img/product-Set Zeus.png",
        nombre: "Set Zeus",
        precio: "$18.99",
        estado: "Disponible",
        categoria: "Sets Completos",
        oferta: false,
        precioOferta: "$14.99",
        rating: "★★★★☆ (4.4)",
        descripcion: "Set completo para Zeus."
    },

    {
        id: 7,
        img: "img/product-Arcana Rubick.png",
        nombre: "Arcana Rubick",
        precio: "$31.99",
        estado: "Disponible",
        categoria: "Arcanos",
        oferta: true,
        precioOferta: "$26.99",
        rating: "★★★★★ (5.0)",
        descripcion: "Arcana legendaria de Rubick."
    },

    {
        id: 8,
        img: "img/product-Immortal Sniper.png",
        nombre: "Immortal Sniper",
        precio: "$15.99",
        estado: "Disponible",
        categoria: "Inmortales",
        oferta: false,
        precioOferta: "$12.99",
        rating: "★★★★☆ (4.3)",
        descripcion: "Item inmortal para Sniper."
    },

    {
        id: 9,
        img: "img/product-Set Crystal Maiden.png",
        nombre: "Set Crystal Maiden",
        precio: "$12.99",
        estado: "Disponible",
        categoria: "Sets Completos",
        oferta: false,
        precioOferta: "$10.99",
        rating: "★★★★☆ (4.2)",
        descripcion: "Set mágico de Crystal Maiden."
    },

    {
        id: 10,
        img: "img/product-Arcana Lina.png",
        nombre: "Arcana Lina",
        precio: "$28.99",
        estado: "Disponible",
        categoria: "Arcanos",
        oferta: true,
        precioOferta: "$23.99",
        rating: "★★★★★ (4.8)",
        descripcion: "Arcana ardiente de Lina."
    },

    {
        id: 11,
        img: "img/product-Immortal Drow Ranger.png",
        nombre: "Immortal Drow Ranger",
        precio: "$21.99",
        estado: "Disponible",
        categoria: "Inmortales",
        oferta: false,
        precioOferta: "$16.99",
        rating: "★★★★☆ (4.5)",
        descripcion: "Item inmortal de Drow Ranger."
    },

    {
        id: 12,
        img: "img/product-Set Anti-Mage.png",
        nombre: "Set Anti-Mage",
        precio: "$17.99",
        estado: "Disponible",
        categoria: "Sets Completos",
        oferta: false,
        precioOferta: "$14.99",
        rating: "★★★★☆ (4.4)",
        descripcion: "Set completo de Anti-Mage."
    },

    {
        id: 13,
        img: "img/product-Arcana Shadow Fiend.png",
        nombre: "Arcana Shadow Fiend",
        precio: "$32.99",
        estado: "Disponible",
        categoria: "Arcanos",
        oferta: true,
        precioOferta: "$27.99",
        rating: "★★★★★ (5.0)",
        descripcion: "Arcana oscura de Shadow Fiend."
    },

    {
        id: 14,
        img: "img/product-Immortal Phantom Lancer.png",
        nombre: "Immortal Phantom Lancer",
        precio: "$14.99",
        estado: "Disponible",
        categoria: "Inmortales",
        oferta: false,
        precioOferta: "$12.99",
        rating: "★★★★☆ (4.1)",
        descripcion: "Item inmortal para Phantom Lancer."
    },

    {
        id: 15,
        img: "img/product-Set Sven.png",
        nombre: "Set Sven",
        precio: "$16.99",
        estado: "Disponible",
        categoria: "Sets Completos",
        oferta: false,
        precioOferta: "$14.99",
        rating: "★★★★☆ (4.3)",
        descripcion: "Set poderoso para Sven."
    },

    {
        id: 16,
        img: "img/product-Arcana Terrorblade.png",
        nombre: "Arcana Terrorblade",
        precio: "$30.99",
        estado: "Disponible",
        categoria: "Arcanos",
        oferta: true,
        precioOferta: "$25.99",
        rating: "★★★★★ (4.9)",
        descripcion: "Arcana demoníaca de Terrorblade."
    },

    {
        id: 17,
        img: "img/product-Immortal Slark.png",
        nombre: "Immortal Slark",
        precio: "$19.99",
        estado: "Disponible",
        categoria: "Inmortales",
        oferta: false,
        precioOferta: "$14.99",
        rating: "★★★★☆ (4.5)",
        descripcion: "Item inmortal de Slark."
    },

    {
        id: 18,
        img: "img/product-Set Witch Doctor.png",
        nombre: "Set Witch Doctor",
        precio: "$13.99",
        estado: "Disponible",
        categoria: "Sets Completos",
        oferta: false,
        precioOferta: "$10.99",
        rating: "★★★★☆ (4.0)",
        descripcion: "Set tribal de Witch Doctor."
    },

    {
        id: 19,
        img: "img/product-Arcana Queen of Pain.png",
        nombre: "Arcana Queen of Pain",
        precio: "$35.99",
        estado: "Disponible",
        categoria: "Arcanos",
        oferta: true,
        precioOferta: "$28.99",
        rating: "★★★★★ (5.0)",
        descripcion: "Arcana infernal de Queen of Pain."
    },

    {
        id: 20,
        img: "img/product-Immortal Mars.png",
        nombre: "Immortal Mars",
        precio: "$22.99",
        estado: "Disponible",
        categoria: "Inmortales",
        oferta: false,
        precioOferta: "$18.99",
        rating: "★★★★☆ (4.6)",
        descripcion: "Item inmortal para Mars."
    },

    {
        id: 21,
        img: "img/product-Set Legion Commander.png",
        nombre: "Set Legion Commander",
        precio: "$18.99",
        estado: "Disponible",
        categoria: "Sets Completos",
        oferta: false,
        precioOferta: "$14.99",
        rating: "★★★★☆ (4.3)",
        descripcion: "Set épico de Legion Commander."
    },

    {
        id: 22,
        img: "img/product-Arcana Windranger.png",
        nombre: "Arcana Windranger",
        precio: "$33.99",
        estado: "Disponible",
        categoria: "Arcanos",
        oferta: true,
        precioOferta: "$28.99",
        rating: "★★★★★ (5.0)",
        descripcion: "Arcana legendaria de Windranger."
    },

    {
        id: 23,
        img: "img/product-Immortal Faceless Void.png",
        nombre: "Immortal Faceless Void",
        precio: "$25.99",
        estado: "Disponible",
        categoria: "Inmortales",
        oferta: false,
        precioOferta: "$20.99",
        rating: "★★★★☆ (4.7)",
        descripcion: "Item inmortal de Faceless Void."
    },

    {
        id: 24,
        img: "img/product-Set Luna.png",
        nombre: "Set Luna",
        precio: "$15.99",
        estado: "Disponible",
        categoria: "Sets Completos",
        oferta: false,
        precioOferta: "$12.99",
        rating: "★★★★☆ (4.2)",
        descripcion: "Set lunar para Luna."
    },

    {
        id: 25,
        img: "img/product-Arcana Ogre Magi.png",
        nombre: "Arcana Ogre Magi",
        precio: "$26.99",
        estado: "Disponible",
        categoria: "Arcanos",
        oferta: true,
        precioOferta: "$21.99",
        rating: "★★★★★ (4.8)",
        descripcion: "Arcana divertida de Ogre Magi."
    },

    {
        id: 26,
        img: "img/product-Immortal Templar Assassin.png",
        nombre: "Immortal Templar Assassin",
        precio: "$20.99",
        estado: "Disponible",
        categoria: "Inmortales",
        oferta: false,
        precioOferta: "$16.99",
        rating: "★★★★☆ (4.4)",
        descripcion: "Item inmortal para Templar Assassin."
    },

    {
        id: 27,
        img: "img/product-Set Riki.png",
        nombre: "Set Riki",
        precio: "$11.99",
        estado: "Disponible",
        categoria: "Sets Completos",
        oferta: false,
        precioOferta: "$8.99",
        rating: "★★★★☆ (4.0)",
        descripcion: "Set sigiloso de Riki."
    },

    {
        id: 28,
        img: "img/product-Arcana Wraith King.png",
        nombre: "Arcana Wraith King",
        precio: "$36.99",
        estado: "Disponible",
        categoria: "Arcanos",
        oferta: true,
        precioOferta: "$30.99",
        rating: "★★★★★ (5.0)",
        descripcion: "Arcana imperial de Wraith King."
    },

    {
        id: 29,
        img: "img/product-Immortal Earthshaker.png",
        nombre: "Immortal Earthshaker",
        precio: "$23.99",
        estado: "Disponible",
        categoria: "Inmortales",
        oferta: false,
        precioOferta: "$19.99",
        rating: "★★★★☆ (4.6)",
        descripcion: "Item inmortal de Earthshaker."
    },

    {
        id: 30,
        img: "img/product-Set Mirana.png",
        nombre: "Set Mirana",
        precio: "$16.99",
        estado: "Disponible",
        categoria: "Sets Completos",
        oferta: false,
        precioOferta: "$12.99",
        rating: "★★★★☆ (4.3)",
        descripcion: "Set elegante de Mirana."
    }

];