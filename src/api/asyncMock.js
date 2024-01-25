const products = [
    {
        id:'1',
        name: 'Cafe',
        price: 100,
        category: 'zapatillas',
        img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 2,
        description: "Cafe dolca"
    },
    {
        id:'2',
        name: 'Cafe',
        price: 100,
        category: 'zapatillas',
        img:'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 10,
        description: "Cafe dolca"
    },
    {
        id:'3',
        name: 'Cafe',
        price: 100,
        category: 'zapatillas',
        img:'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 10,
        description: "Cafe dolca"
    },
    {
        id:'4',
        name: 'Cafe',
        price: 100,
        category: 'ojotas',
        img:'https://images.unsplash.com/photo-1617370653117-ff3a94af6cef?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 5,
        description: "Cafe dolca"
    },
    {
        id:'5',
        name: 'Cafe',
        price: 100,
        category: 'ojotas',
        img:'https://images.unsplash.com/photo-1582613598693-beb2d323f600?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 5,
        description: "Cafe dolca"
    },
    {
        id:'6',
        name: 'Cafe',
        price: 100,
        category: 'ojotas',
        img:'https://images.unsplash.com/photo-1616754383532-dfa5c2d26d5f?q=80&w=921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 5,
        description: "Cafe dolca"
    },
    {
        id:'7',
        name: 'Cafe',
        price: 100,
        category: 'botas',
        img:'https://images.unsplash.com/photo-1481729379561-01e43a3e1ed4?q=80&w=970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 4,
        description: "Cafe dolca"
    },
    {
        id:'8',
        name: 'Cafe',
        price: 100,
        category: 'botas',
        img:'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?q=80&w=890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 4,
        description: "Cafe dolca"
    },
    {
        id:'9',
        name: 'Cafe',
        price: 100,
        category: 'botas',
        img:'https://images.unsplash.com/photo-1606036525923-525fa3b35465?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 4,
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

export const getProductCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === categoryId));
        }, 500);
    })
}

export const getProductId = (productId) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.find(product => product.id === productId))
        },500)
    })
}