const products = [
    {
        id:'1',
        name: 'Cafe',
        price: 100,
        category: 'celular',
        img:'https://unsplash.com/es/fotos/zapatilla-nike-roja-sin-emparejar-164_6wVEHfI',
        stock: 25,
        description: "Cafe dolca"
    },
    {
        id:'2',
        name: 'Cafe',
        price: 100,
        category: 'celular',
        img:'https://unsplash.com/es/fotos/zapatilla-nike-roja-sin-emparejar-164_6wVEHfI',
        stock: 25,
        description: "Cafe dolca"
    },
    {
        id:'3',
        name: 'Cafe',
        price: 100,
        category: 'celular',
        img:'https://unsplash.com/es/fotos/zapatilla-nike-roja-sin-emparejar-164_6wVEHfI',
        stock: 25,
        description: "Cafe dolca"
    },
    {
        id:'4',
        name: 'Cafe',
        price: 100,
        category: 'celular',
        img:'https://unsplash.com/es/fotos/zapatilla-nike-roja-sin-emparejar-164_6wVEHfI',
        stock: 25,
        description: "Cafe dolca"
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}