export const numberToPrice = number => {
    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
}

export const subTotal = (price, amount) => {
    return price * amount
}
export const totalOrder = (order)=> {
    const total = order.reduce((acc, product) => {
        const sub = subTotal(product.price, product.amount)
        return acc + sub
    }, 0)
    
    return total
}