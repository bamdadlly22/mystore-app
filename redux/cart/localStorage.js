export const saveStorage = (cart) => {
    if(typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(cart))
    } else {
        return []
    }
}


export const getStorage = () => {
    if(typeof window !== 'undefined') {
        return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    } else {
        return []
    }
}