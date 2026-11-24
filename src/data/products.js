import royale from '../images/royale-transpa.png'
import lirios from '../images/lirios-azules-transpa.png'
import rapunzel from '../images/rapunzel-transpa.png'
import rosas from '../images/rosas-rojas-transpa.png'

// Lista única de productos: el catálogo, el inicio y el carrito leen de aquí.
// El precio va como número para poder sumar; se le da formato al mostrarlo.
export const products = [
    {
        id: 1,
        name: "Ramo Clash Royale",
        image: royale,
        price: 35000,
        description: "ramo de flores eternas en michelines con colores azules caracteristicos de clash royale, incluye imagenes de los personajes del juego y una tarjeta personalizada con el mensaje que quieras"
    },
    {
        id: 2,
        name: "Lirios Azules",
        image: lirios,
        price: 50000,
        description: "lirios azules eternos de michelines en un ramo elegante, ideales para ocasiones especiales"
    },
    {
        id: 3,
        name: "Ramo Rapunzel",
        image: rapunzel,
        price: 120000,
        description: "ramo de flores eternas en michelines con diseño de rapunzel, incluye a pascal (el camaleon) y una tarjeta personalizada"
    },
    {
        id: 4,
        name: "Ramo 5 Rosas Eternas",
        image: rosas,
        price: 45000,
        description: "ramo de 5 rosas eternas en liston, ideales para ocasiones romanticas o para regalar a esa persona especial"
    },
]

export function getProduct(id) {
    return products.find(p => p.id === id)
}

const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
})

// 45000 -> "$ 45.000"
export function formatPrice(value) {
    return formatter.format(value)
}
