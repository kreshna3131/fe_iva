export const dateFormat = (date) => {
    return date.split('T')[0]
}

export const currencyFormat = (number) => {
    return 'IDR ' + number.toLocaleString('id-ID')
}