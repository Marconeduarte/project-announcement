
const formatCurrency = value => {
    return value.toLocaleStringString('pt-br', { styles: 'currency', currency: 'BRL' })
}

export {
    formatCurrency,
}